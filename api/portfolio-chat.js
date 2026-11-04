// Vercel serverless - Portfolio Assistant chat endpoint
// Importers: Vercel routes api/portfolio-chat.js as POST /api/portfolio-chat
// Callers: agent.js frontend via fetch("/api/portfolio-chat")
// API: POST { message, history } → SSE stream data: {"text":"..."} ... data: [DONE]
// Env: GEMINI_API_KEY (required), GEMINI_MODEL (optional, default gemini-3.1-flash-lite)

var AgentData = require("../agentData.js");

var SYSTEM_PROMPT = AgentData.SYSTEM_PROMPT;
var MAX_MESSAGE_LENGTH = AgentData.MAX_MESSAGE_LENGTH;
var MAX_HISTORY_ITEMS = AgentData.MAX_HISTORY;

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  var apiKey = process.env.GEMINI_API_KEY;
  var model = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

  if (!apiKey) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  var body = req.body || {};
  var message = typeof body.message === "string" ? body.message.trim() : "";
  var history = Array.isArray(body.history) ? body.history : [];

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    message = message.substring(0, MAX_MESSAGE_LENGTH);
  }

  var safeHistory = history
    .slice(-MAX_HISTORY_ITEMS)
    .filter(function (m) {
      return (
        m &&
        typeof m.content === "string" &&
        (m.role === "user" || m.role === "model") &&
        m.content.length <= MAX_MESSAGE_LENGTH
      );
    })
    .map(function (m) {
      return {
        role: m.role,
        parts: [{ text: m.content.substring(0, MAX_MESSAGE_LENGTH) }],
      };
    });

  var contents = safeHistory.concat([
    { role: "user", parts: [{ text: message }] },
  ]);

  var apiUrl =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    model +
    ":streamGenerateContent?alt=sse&key=" +
    apiKey;

  var requestBody = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: contents,
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      maxOutputTokens: 1024,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    ],
  };

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    var response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      var errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      res.write("data: " + JSON.stringify({ error: "Sorry, I'm having trouble connecting. Please try again." }) + "\n\n");
      res.write("data: [DONE]\n\n");
      return res.end();
    }

    var reader = response.body.getReader();
    var decoder = new TextDecoder();

    while (true) {
      var result = await reader.read();
      if (result.done) break;

      var chunk = decoder.decode(result.value, { stream: true });
      var lines = chunk.split("\n");

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line || !line.startsWith("data: ")) continue;
        var data = line.slice(6);

        try {
          var parsed = JSON.parse(data);
          if (
            parsed.candidates &&
            parsed.candidates[0] &&
            parsed.candidates[0].content &&
            parsed.candidates[0].content.parts
          ) {
            var parts = parsed.candidates[0].content.parts;
            for (var j = 0; j < parts.length; j++) {
              if (parts[j].text) {
                res.write("data: " + JSON.stringify({ text: parts[j].text }) + "\n\n");
              }
            }
          }
        } catch (e) {
          // skip malformed chunks
        }
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error("Stream error:", err);
    res.write("data: " + JSON.stringify({ error: "Connection error. Please try again." }) + "\n\n");
    res.write("data: [DONE]\n\n");
    res.end();
  }
};

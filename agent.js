// ============================================================
// Portfolio Assistant - VS Code-style AI Agent Panel
// Importers: index.html loads agentData.js then this file
// Public: window.toggleAgentPanel, openAgentPanel, closeAgentPanel
// API: POST /api/portfolio-chat { message, history } → SSE stream
// ============================================================

(function () {
  "use strict";

  var D = window.AgentData;
  var AGENT_WIDTH = D.AGENT_WIDTH;
  var AUTO_OPEN_DELAY = D.AUTO_OPEN_DELAY;
  var CHAT_ENDPOINT = "/api/portfolio-chat";
  var MAX_MESSAGE_LENGTH = D.MAX_MESSAGE_LENGTH;
  var MAX_HISTORY = D.MAX_HISTORY;
  var SUGGESTIONS = D.SUGGESTIONS;
  var ALL_CACHED_ANSWERS = D.ALL_CACHED_ANSWERS;
  var FOLLOW_UPS = D.FOLLOW_UPS;
  var GENERIC_FOLLOW_UPS = D.GENERIC_FOLLOW_UPS;
  var RATE_LIMIT = D.RATE_LIMIT;
  var RATE_WINDOW = D.RATE_WINDOW;
  var STATUS_KEYWORDS = [
    "Thinking...", "Pondering...", "Noodling...", "Percolating...", "Channeling...",
    "Brewing...", "Conjuring...", "Weaving...", "Polishing...", "Delivering..."
  ];

  var state = {
    isOpen: false,
    hasAutoOpened: false,
    manuallyDismissed: false,
    isStreaming: false,
    messages: [],
    abortController: null,
    autoOpenTimer: null,
    sendTimestamps: [],
    rateLimitTimer: null,
    lastQuestion: "",
    statusTimer: null,
    statusIndex: 0,
  };

  document.addEventListener("DOMContentLoaded", initAgent);

  function initAgent() {
    buildAgentPanel();
    wireAgentToggle();
    wireAgentInput();
    wireAgentSuggestions();
    scheduleAutoOpen();
  }

  function buildAgentPanel() {
    var panel = document.createElement("aside");
    panel.className = "agent-panel";
    panel.id = "agent-panel";
    panel.setAttribute("aria-label", "Portfolio Assistant");

    panel.innerHTML =
      '<div class="agent-resizer" id="agent-resizer" role="separator" aria-label="Resize agent panel" title="Drag to resize"></div>' +
      '<header class="agent-header">' +
      '<div class="agent-header-left">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<path d="M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-3.5 6.06V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3.94A7 7 0 0 1 5 10V9a7 7 0 0 1 7-7z"/>' +
      '<line x1="9" y1="22" x2="15" y2="22"/><line x1="12" y1="17" x2="12" y2="13"/>' +
      '</svg>' +
      '<span class="agent-title">Portfolio Assistant</span>' +
      '<span class="agent-status" id="agent-status"></span>' +
      '</div>' +
      '<div class="agent-header-right">' +
      '<button class="agent-hbtn" id="agent-close" aria-label="Close panel" title="Close panel">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>' +
      '</button>' +
      '</div>' +
      '</header>' +
      '<div class="agent-messages" id="agent-messages">' +
      '<div class="agent-welcome" id="agent-welcome">' +
      '<div class="agent-welcome-icon">' +
      '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--statusbar)" stroke-width="1.2">' +
      '<path d="M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-3.5 6.06V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3.94A7 7 0 0 1 5 10V9a7 7 0 0 1 7-7z"/>' +
      '<line x1="9" y1="22" x2="15" y2="22"/><line x1="12" y1="17" x2="12" y2="13"/>' +
      '</svg>' +
      '</div>' +
      '<p class="agent-welcome-title">Hi! I\'m your Portfolio Assistant.</p>' +
      '<p class="agent-welcome-body">I can help you explore Himanshu\'s experience, technical skills, projects, and professional background.</p>' +
      '<p class="agent-welcome-body">Ask me anything about his work.</p>' +
      '</div>' +
      '<div class="agent-suggestions" id="agent-suggestions"></div>' +
      '</div>' +
      '<div class="agent-input-area" id="agent-input-area">' +
      '<textarea id="agent-input" class="agent-input" placeholder="Ask me about Himanshu Sharma" rows="1"></textarea>' +
      '<button id="agent-send" class="agent-send" aria-label="Send message" title="Send">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
      '</button>' +
      '<button id="agent-stop" class="agent-stop" aria-label="Stop generation" title="Stop" hidden>' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>' +
      '</button>' +
      '</div>';

    var wb = document.querySelector(".workbench");
    wb.appendChild(panel);

    var sugContainer = document.getElementById("agent-suggestions");
    SUGGESTIONS.forEach(function (q) {
      var btn = document.createElement("button");
      btn.className = "agent-suggestion";
      btn.textContent = q;
      sugContainer.appendChild(btn);
    });

    wireAgentResizer();
  }

  function toggleAgent() {
    if (state.isOpen) { closeAgent(); } else { openAgent(); }
  }

  function openAgent() {
    if (state.isOpen) return;
    cancelAutoOpen();
    state.isOpen = true;

    var wb = document.querySelector(".workbench");
    var panel = document.getElementById("agent-panel");
    var btn = document.querySelector(".titlebar-right .tb-icon:last-child");

    wb.classList.add("agent-open");
    panel.classList.add("is-open");
    if (btn) btn.classList.add("is-active");

    var input = document.getElementById("agent-input");
    setTimeout(function () { if (input) input.focus(); }, 300);
    syncGutterAfterResize();
  }

  function closeAgent() {
    if (!state.isOpen) return;
    state.isOpen = false;
    state.manuallyDismissed = true;
    cancelAutoOpen();

    var wb = document.querySelector(".workbench");
    var panel = document.getElementById("agent-panel");
    var btn = document.querySelector(".titlebar-right .tb-icon:last-child");

    wb.classList.remove("agent-open");
    panel.classList.remove("is-open");
    if (btn) btn.classList.remove("is-active");
    syncGutterAfterResize();
  }

  function syncGutterAfterResize() {
    requestAnimationFrame(function () {
      var c = document.getElementById("content");
      var g = document.getElementById("gutter");
      if (c && g && typeof syncGutter === "function") syncGutter(c, g);
    });
  }

  function scheduleAutoOpen() {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    state.autoOpenTimer = setTimeout(function () {
      if (!state.isOpen && !state.hasAutoOpened && !state.manuallyDismissed) {
        state.hasAutoOpened = true;
        openAgent();
      }
    }, prefersReduced ? AUTO_OPEN_DELAY + 2000 : AUTO_OPEN_DELAY);
  }

  function cancelAutoOpen() {
    if (state.autoOpenTimer) {
      clearTimeout(state.autoOpenTimer);
      state.autoOpenTimer = null;
    }
  }

  function wireAgentToggle() {
    var btn = document.querySelector(".titlebar-right .tb-icon:last-child");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (!state.hasAutoOpened) state.hasAutoOpened = true;
        toggleAgent();
      });
    }
  }

  function wireAgentInput() {
    var input = document.getElementById("agent-input");
    var sendBtn = document.getElementById("agent-send");
    var stopBtn = document.getElementById("agent-stop");
    var closeBtn = document.getElementById("agent-close");
    var newChatBtn = document.getElementById("agent-new-chat");

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submitMessage();
      }
    });
    input.addEventListener("input", autoResizeInput);
    sendBtn.addEventListener("click", function () { submitMessage(); });
    stopBtn.addEventListener("click", function () { stopGeneration(); });
    closeBtn.addEventListener("click", function () { closeAgent(); });
    if (newChatBtn) newChatBtn.addEventListener("click", function () { newConversation(); });
  }

  function wireAgentSuggestions() {
    document.getElementById("agent-suggestions").addEventListener("click", function (e) {
      var btn = e.target.closest(".agent-suggestion");
      if (!btn) return;
      var input = document.getElementById("agent-input");
      input.value = btn.textContent;
      submitMessage();
    });
  }

  function wireAgentResizer() {
    var resizer = document.getElementById("agent-resizer");
    var wb = document.querySelector(".workbench");
    if (!resizer || !wb) return;

    var startX = 0;
    var startW = 0;
    var MIN_W = 280;
    var MAX_W = 600;

    function onMove(e) {
      var x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
      if (x == null) return;
      var dx = startX - x;
      var next = Math.max(MIN_W, Math.min(MAX_W, startW + dx));
      wb.style.setProperty("--agent-w", next + "px");
    }

    function onUp() {
      wb.classList.remove("is-agent-resizing");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    }

    function onDown(e) {
      e.preventDefault();
      startX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
      startW = parseInt(getComputedStyle(wb).getPropertyValue("--agent-w"), 10) || AGENT_WIDTH;
      wb.classList.add("is-agent-resizing");
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onUp);
    }

    resizer.addEventListener("mousedown", onDown);
    resizer.addEventListener("touchstart", onDown, { passive: false });
    resizer.addEventListener("dblclick", function () {
      wb.style.removeProperty("--agent-w");
    });
  }

  function autoResizeInput() {
    var input = document.getElementById("agent-input");
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 120) + "px";
  }

  function submitMessage() {
    var input = document.getElementById("agent-input");
    var text = (input.value || "").trim();
    if (!text) return;
    if (text.length > MAX_MESSAGE_LENGTH) {
      text = text.substring(0, MAX_MESSAGE_LENGTH);
    }

    if (state.isStreaming) {
      abortCurrentStream();
    }

    var isCached = ALL_CACHED_ANSWERS[(text || "").trim()] != null;
    if (!isCached) {
      var blocked = checkRateLimit();
      if (blocked) return;
    }

    addMessage("user", text);
    input.value = "";
    input.style.height = "auto";
    hideWelcome();
    sendToAPI(text);
  }

  function checkRateLimit() {
    var now = Date.now();
    state.sendTimestamps = state.sendTimestamps.filter(function (t) {
      return now - t < RATE_WINDOW;
    });

    if (state.sendTimestamps.length < RATE_LIMIT) return false;

    var oldest = state.sendTimestamps[0];
    var unlockAt = oldest + RATE_WINDOW;
    startRateLimitCountdown(unlockAt);
    return true;
  }

  function startRateLimitCountdown(unlockAt) {
    var input = document.getElementById("agent-input");
    var sendBtn = document.getElementById("agent-send");
    var container = document.getElementById("agent-messages");
    input.disabled = true;
    sendBtn.disabled = true;

    var existing = document.getElementById("agent-rate-banner");
    if (existing) existing.remove();

    var banner = document.createElement("div");
    banner.id = "agent-rate-banner";
    banner.className = "agent-rate-banner";
    banner.innerHTML =
      '<div class="agent-rate-header">' +
      '<div class="agent-rate-text">' +
      '<span class="agent-rate-title">Message limit reached</span>' +
      '<span class="agent-rate-countdown" id="agent-rate-countdown"></span>' +
      '</div>' +
      '</div>' +
      '<div class="agent-rate-bar-wrap"><div class="agent-rate-bar" id="agent-rate-bar"></div></div>' +
      '<div class="agent-game-area" id="agent-game-area">' +
      '<button class="agent-game-start-btn" id="agent-game-start">Play Snake while you wait</button>' +
      '<div class="agent-game-board" id="agent-game-board" hidden>' +
      '<canvas id="agent-snake-canvas" width="280" height="280"></canvas>' +
      '<div class="agent-game-controls">' +
      '<span class="agent-game-score" id="agent-game-score">Score: 0</span>' +
      '<button class="agent-game-btn" id="agent-game-restart">Restart</button>' +
      '</div>' +
      '<p class="agent-game-hint">Use arrow keys or swipe to play</p>' +
      '</div>' +
      '</div>';
    container.appendChild(banner);
    container.scrollTop = container.scrollHeight;

    var totalDuration = unlockAt - Date.now();

    document.getElementById("agent-game-start").addEventListener("click", function () {
      this.hidden = true;
      document.getElementById("agent-game-board").hidden = false;
      startSnakeGame();
      container.scrollTop = container.scrollHeight;
    });

    function tick() {
      var remaining = Math.ceil((unlockAt - Date.now()) / 1000);
      if (remaining <= 0) {
        input.disabled = false;
        sendBtn.disabled = false;
        setStatus("", 0);
        input.placeholder = "Ask me about Himanshu's experience, skills or projects...";
        state.rateLimitTimer = null;
        var countdownEl = document.getElementById("agent-rate-countdown");
        if (countdownEl) countdownEl.textContent = "You can send messages again!";
        var bar = document.getElementById("agent-rate-bar");
        if (bar) bar.style.width = "100%";
        if (banner.parentNode) banner.classList.add("is-done");
        var startBtn = document.getElementById("agent-game-start");
        if (startBtn) startBtn.hidden = true;
        if (!snake.interval) {
          setTimeout(function () { if (banner.parentNode) banner.remove(); }, 3000);
        }
        return;
      }
      var mins = Math.floor(remaining / 60);
      var secs = remaining % 60;
      var padSecs = secs < 10 ? "0" + secs : "" + secs;
      var display = mins + ":" + padSecs;
      var countdownEl = document.getElementById("agent-rate-countdown");
      if (countdownEl) countdownEl.textContent = "Try again in " + display;
      var bar = document.getElementById("agent-rate-bar");
      if (bar) {
        var elapsed = totalDuration - (remaining * 1000);
        bar.style.width = Math.min(100, (elapsed / totalDuration) * 100) + "%";
      }
      setStatus(display, 0);
      input.placeholder = "Wait " + display + " to send again...";
      state.rateLimitTimer = setTimeout(tick, 1000);
    }

    if (state.rateLimitTimer) clearTimeout(state.rateLimitTimer);
    tick();
  }

  // -- Snake Game --

  var snake = { interval: null, handler: null, touchHandler: null };

  function startSnakeGame() {
    var canvas = document.getElementById("agent-snake-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var CELL = 14;
    var COLS = 20;
    var ROWS = 20;
    canvas.width = COLS * CELL;
    canvas.height = ROWS * CELL;

    var body = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    var dir = { x: 1, y: 0 };
    var nextDir = { x: 1, y: 0 };
    var food = spawnFood();
    var score = 0;
    var alive = true;

    function spawnFood() {
      var pos;
      do {
        pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
      } while (body.some(function (s) { return s.x === pos.x && s.y === pos.y; }));
      return pos;
    }

    function draw() {
      ctx.fillStyle = "#1e1e1e";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#2a2d2e";
      ctx.lineWidth = 0.5;
      for (var x = 0; x < COLS; x++) {
        ctx.beginPath(); ctx.moveTo(x * CELL, 0); ctx.lineTo(x * CELL, canvas.height); ctx.stroke();
      }
      for (var y = 0; y < ROWS; y++) {
        ctx.beginPath(); ctx.moveTo(0, y * CELL); ctx.lineTo(canvas.width, y * CELL); ctx.stroke();
      }

      for (var i = 0; i < body.length; i++) {
        ctx.fillStyle = i === 0 ? "#4ec9b0" : "#007acc";
        ctx.fillRect(body[i].x * CELL + 1, body[i].y * CELL + 1, CELL - 2, CELL - 2);
      }

      ctx.fillStyle = "#ce9178";
      ctx.beginPath();
      ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
      ctx.fill();

      if (!alive) {
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#d4d4d4";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 8);
        ctx.font = "12px monospace";
        ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 12);
        ctx.fillText("Press Restart to play again", canvas.width / 2, canvas.height / 2 + 30);
      }
    }

    function update() {
      if (!alive) return;
      dir = { x: nextDir.x, y: nextDir.y };
      var head = { x: body[0].x + dir.x, y: body[0].y + dir.y };

      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
        alive = false; draw(); return;
      }
      for (var i = 0; i < body.length; i++) {
        if (body[i].x === head.x && body[i].y === head.y) {
          alive = false; draw(); return;
        }
      }

      body.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score++;
        food = spawnFood();
        var scoreEl = document.getElementById("agent-game-score");
        if (scoreEl) scoreEl.textContent = "Score: " + score;
      } else {
        body.pop();
      }
      draw();
    }

    function onKey(e) {
      var map = {
        ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
      };
      var d = map[e.key];
      if (!d) return;
      if (d.x + dir.x === 0 && d.y + dir.y === 0) return;
      nextDir = d;
      e.preventDefault();
    }

    var touchStart = null;
    function onTouch(e) {
      if (e.type === "touchstart") {
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return;
      }
      if (e.type === "touchend" && touchStart) {
        var dx = e.changedTouches[0].clientX - touchStart.x;
        var dy = e.changedTouches[0].clientY - touchStart.y;
        touchStart = null;
        if (Math.abs(dx) < 20 && Math.abs(dy) < 20) return;
        var d;
        if (Math.abs(dx) > Math.abs(dy)) {
          d = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
        } else {
          d = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
        }
        if (d.x + dir.x === 0 && d.y + dir.y === 0) return;
        nextDir = d;
      }
    }

    function restart() {
      body = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      food = spawnFood();
      score = 0;
      alive = true;
      var scoreEl = document.getElementById("agent-game-score");
      if (scoreEl) scoreEl.textContent = "Score: 0";
    }

    document.addEventListener("keydown", onKey);
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchend", onTouch, { passive: true });
    snake.handler = onKey;
    snake.touchHandler = onTouch;

    var restartBtn = document.getElementById("agent-game-restart");
    if (restartBtn) restartBtn.addEventListener("click", restart);

    snake.interval = setInterval(function () { update(); draw(); }, 120);
    draw();
  }

  function stopSnakeGame() {
    if (snake.interval) { clearInterval(snake.interval); snake.interval = null; }
    if (snake.handler) { document.removeEventListener("keydown", snake.handler); snake.handler = null; }
    var canvas = document.getElementById("agent-snake-canvas");
    if (canvas && snake.touchHandler) {
      canvas.removeEventListener("touchstart", snake.touchHandler);
      canvas.removeEventListener("touchend", snake.touchHandler);
      snake.touchHandler = null;
    }
  }

  function abortCurrentStream() {
    if (state.abortController) {
      state.abortController.abort();
      state.abortController = null;
    }
    state.isStreaming = false;

    var bubble = document.getElementById("agent-streaming-bubble");
    if (bubble) {
      var partial = bubble.textContent || "";
      bubble.removeAttribute("id");
      bubble.innerHTML = renderMarkdown(partial) + '<p class="agent-interrupted">Interrupted</p>';
      var wrapper = bubble.parentElement;
      wrapper.appendChild(buildActions(bubble));
    }

    var lastMsg = state.messages[state.messages.length - 1];
    if (lastMsg && lastMsg.role === "assistant" && !lastMsg.content) {
      state.messages[state.messages.length - 1] = { role: "assistant", content: "Interrupted" };
    }

    updateStreamingUI(false);
  }

  function addMessage(role, content) {
    state.messages.push({ role: role, content: content });
    if (state.messages.length > MAX_HISTORY * 2) {
      state.messages = state.messages.slice(-MAX_HISTORY * 2);
    }
    renderMessage(role, content);
  }

  function renderMessage(role, content, opts) {
    var container = document.getElementById("agent-messages");
    var wrapper = document.createElement("div");
    wrapper.className = "agent-msg agent-msg-" + role;

    var bubble = document.createElement("div");
    bubble.className = "agent-bubble agent-bubble-" + (role === "user" ? "user" : "ai");

    if (role === "user") {
      bubble.textContent = content;
    } else if (opts && opts.streaming) {
      bubble.id = "agent-streaming-bubble";
      bubble.innerHTML = '<span class="agent-typing"></span>';
    } else {
      bubble.innerHTML = renderMarkdown(content);
    }

    wrapper.appendChild(bubble);

    if (role === "assistant" && (!opts || !opts.streaming)) {
      wrapper.appendChild(buildActions(bubble));
    }

    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;
  }

  function buildActions(bubble) {
    var actions = document.createElement("div");
    actions.className = "agent-msg-actions";
    actions.innerHTML =
      '<button class="agent-action-btn" data-action="copy" title="Copy response">' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
      ' Copy' +
      '</button>' +
      '<button class="agent-action-btn" data-action="regenerate" title="Regenerate response">' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 9 15 9"/></svg>' +
      ' Regenerate' +
      '</button>';

    actions.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-action]");
      if (!btn) return;
      if (btn.dataset.action === "copy") copyResponse(bubble.textContent);
      if (btn.dataset.action === "regenerate") regenerateResponse();
    });

    return actions;
  }

  function buildFollowUps() {
    var question = state.lastQuestion;
    var items = FOLLOW_UPS[question] || GENERIC_FOLLOW_UPS;

    var wrap = document.createElement("div");
    wrap.className = "agent-followups";

    items.forEach(function (q) {
      var btn = document.createElement("button");
      btn.className = "agent-followup-btn";
      btn.textContent = q;
      btn.addEventListener("click", function () {
        var input = document.getElementById("agent-input");
        input.value = q;
        submitMessage();
      });
      wrap.appendChild(btn);
    });

    return wrap;
  }

  function hideWelcome() {
    var w = document.getElementById("agent-welcome");
    var s = document.getElementById("agent-suggestions");
    if (w) w.hidden = true;
    if (s) s.hidden = true;
  }

  function showWelcome() {
    var w = document.getElementById("agent-welcome");
    var s = document.getElementById("agent-suggestions");
    if (w) w.hidden = false;
    if (s) s.hidden = false;
  }

  function sendToAPI(userMessage) {
    state.lastQuestion = userMessage;
    var cached = ALL_CACHED_ANSWERS[userMessage];
    if (cached) {
      streamCachedAnswer(cached);
      return;
    }

    streamFromAPI(userMessage);
  }

  function streamCachedAnswer(text) {
    state.isStreaming = true;
    updateStreamingUI(true);
    renderMessage("assistant", "", { streaming: true });

    var bubble = document.getElementById("agent-streaming-bubble");
    var kwIndex = 0;
    if (bubble) {
      bubble.innerHTML = '<span class="agent-status-keyword">' + STATUS_KEYWORDS[0] + '</span>';
    }
    var kwTimer = setInterval(function () {
      kwIndex = (kwIndex + 1) % STATUS_KEYWORDS.length;
      if (bubble) {
        bubble.innerHTML = '<span class="agent-status-keyword">' + STATUS_KEYWORDS[kwIndex] + '</span>';
      }
    }, 1700);

    var idx = 0;
    var chunkSize = 3;

    setTimeout(function typeChunk() {
      if (!state.isStreaming) {
        clearInterval(kwTimer);
        return;
      }

      if (idx === 0) clearInterval(kwTimer);

      var end = Math.min(idx + chunkSize, text.length);
      while (end < text.length && text[end] !== " " && text[end] !== "\n") end++;
      idx = Math.min(end, text.length);

      updateStreamingBubble(text.substring(0, idx));

      if (idx < text.length) {
        var delay = 15 + Math.random() * 25;
        setTimeout(typeChunk, delay);
      } else {
        finishStreaming(text);
      }
    }, 2000);
  }

  function streamFromAPI(userMessage) {
    state.sendTimestamps.push(Date.now());
    state.isStreaming = true;
    updateStreamingUI(true);
    renderMessage("assistant", "", { streaming: true });

    var history = state.messages.slice(0, -1).map(function (m) {
      return { role: m.role === "assistant" ? "model" : "user", content: m.content };
    });

    var requestBody = {
      message: userMessage,
      history: history.slice(-MAX_HISTORY),
    };

    state.abortController = new AbortController();

    fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
      signal: state.abortController.signal,
    })
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (data) {
            var msg = (data && data.error) || "";
            if (res.status === 503 || msg.toLowerCase().indexOf("high demand") !== -1) {
              finishStreaming("I'm currently experiencing high demand. This is usually temporary - please try again in a moment.");
            } else if (res.status === 429) {
              finishStreaming("I've hit my rate limit. Please wait a minute and try again.");
            } else {
              finishStreaming("Something went wrong (error " + res.status + "). Please try again.");
            }
          }).catch(function () {
            finishStreaming("Something went wrong (error " + res.status + "). Please try again.");
          });
        }
        return readStream(res.body);
      })
      .catch(function (err) {
        if (err.name === "AbortError") return;
        finishStreaming("Sorry, something went wrong. Please try again.");
        console.error("Agent API error:", err);
      });
  }

  function readStream(body) {
    var reader = body.getReader();
    var decoder = new TextDecoder();
    var accumulated = "";

    function read() {
      reader.read().then(function (result) {
        if (result.done) {
          finishStreaming(accumulated);
          return;
        }

        var chunk = decoder.decode(result.value, { stream: true });
        var lines = chunk.split("\n");

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          if (!line || !line.startsWith("data: ")) continue;
          var data = line.slice(6);

          if (data === "[DONE]") {
            finishStreaming(accumulated);
            return;
          }

          try {
            var parsed = JSON.parse(data);
            if (parsed.text) {
              accumulated += parsed.text;
              updateStreamingBubble(accumulated);
            }
            if (parsed.error) {
              finishStreaming(parsed.error || "API error occurred.");
              return;
            }
          } catch (e) {
            // skip malformed chunks
          }
        }

        if (state.isStreaming) read();
      }).catch(function (err) {
        if (err.name !== "AbortError") {
          finishStreaming(accumulated || "Connection lost. Please try again.");
        }
      });
    }

    read();
  }

  function updateStreamingBubble(text) {
    var bubble = document.getElementById("agent-streaming-bubble");
    if (!bubble) return;
    bubble.innerHTML = renderMarkdown(text) + '<span class="agent-typing"></span>';
    var container = document.getElementById("agent-messages");
    container.scrollTop = container.scrollHeight;
  }

  function finishStreaming(finalText) {
    state.isStreaming = false;
    updateStreamingUI(false);

    var bubble = document.getElementById("agent-streaming-bubble");
    if (bubble) {
      bubble.removeAttribute("id");
      bubble.innerHTML = renderMarkdown(finalText || "No response received.");
      var wrapper = bubble.parentElement;
      wrapper.appendChild(buildActions(bubble));
      wrapper.appendChild(buildFollowUps());
    }

    if (finalText) {
      state.messages[state.messages.length - 1] = { role: "assistant", content: finalText };
    }

    state.abortController = null;

    var container = document.getElementById("agent-messages");
    container.scrollTop = container.scrollHeight;
  }

  function updateStreamingUI(streaming) {
    var sendBtn = document.getElementById("agent-send");
    var stopBtn = document.getElementById("agent-stop");
    var input = document.getElementById("agent-input");
    sendBtn.hidden = streaming;
    stopBtn.hidden = !streaming;
    input.disabled = false;
    var statusEl = document.getElementById("agent-status");

    if (streaming) {
      state.statusIndex = 0;
      statusEl.textContent = STATUS_KEYWORDS[0];
      statusEl.className = "agent-status is-thinking";
      state.statusTimer = setInterval(function () {
        state.statusIndex = (state.statusIndex + 1) % STATUS_KEYWORDS.length;
        statusEl.textContent = STATUS_KEYWORDS[state.statusIndex];
      }, 1700);
    } else {
      if (state.statusTimer) {
        clearInterval(state.statusTimer);
        state.statusTimer = null;
      }
      statusEl.textContent = "";
      statusEl.className = "agent-status";
    }
  }

  function stopGeneration() {
    abortCurrentStream();
  }

  function copyResponse(text) {
    navigator.clipboard.writeText(text).then(function () {
      setStatus("Copied!", 1500);
    }).catch(function () {
      setStatus("Copy failed", 1500);
    });
  }

  function regenerateResponse() {
    if (state.isStreaming) return;

    var lastUserIdx = -1;
    for (var i = state.messages.length - 1; i >= 0; i--) {
      if (state.messages[i].role === "user") {
        lastUserIdx = i;
        break;
      }
    }
    if (lastUserIdx === -1) return;

    var lastUserMsg = state.messages[lastUserIdx].content;
    state.messages = state.messages.slice(0, lastUserIdx + 1);

    var container = document.getElementById("agent-messages");
    var msgs = container.querySelectorAll(".agent-msg-assistant");
    for (var i = msgs.length - 1; i >= 0; i--) {
      msgs[i].remove();
      break;
    }

    state.lastQuestion = lastUserMsg;
    streamFromAPI(lastUserMsg);
  }

  function newConversation() {
    if (state.isStreaming) stopGeneration();
    state.messages = [];
    var container = document.getElementById("agent-messages");
    var msgEls = container.querySelectorAll(".agent-msg");
    msgEls.forEach(function (el) { el.remove(); });
    showWelcome();
    setStatus("New chat", 1500);
  }

  function setStatus(text, duration) {
    var el = document.getElementById("agent-status");
    el.textContent = text;
    if (duration) {
      setTimeout(function () {
        if (el.textContent === text) el.textContent = "";
      }, duration);
    }
  }

  function renderMarkdown(text) {
    if (!text) return "";

    var escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    var lines = escaped.split("\n");
    var html = [];
    var inCodeBlock = false;
    var codeContent = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (line.match(/^```/)) {
        if (inCodeBlock) {
          html.push('<pre class="agent-code"><code>' + codeContent.join("\n") + "</code></pre>");
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      line = inlineMarkdown(line);

      if (line.match(/^#{1,3}\s/)) {
        var level = line.match(/^(#{1,3})\s/)[1].length;
        var heading = line.replace(/^#{1,3}\s/, "");
        html.push("<h" + (level + 2) + ' class="agent-md-heading">' + heading + "</h" + (level + 2) + ">");
      } else if (line.match(/^\s*[-*]\s/)) {
        if (!html.length || !html[html.length - 1].match(/<\/ul>$/)) {
          html.push("<ul class=\"agent-md-list\">");
        } else {
          html[html.length - 1] = html[html.length - 1].replace(/<\/ul>$/, "");
        }
        html.push("<li>" + line.replace(/^\s*[-*]\s/, "") + "</li></ul>");
      } else if (line.match(/^\s*\d+\.\s/)) {
        if (!html.length || !html[html.length - 1].match(/<\/ol>$/)) {
          html.push("<ol class=\"agent-md-list\">");
        } else {
          html[html.length - 1] = html[html.length - 1].replace(/<\/ol>$/, "");
        }
        html.push("<li>" + line.replace(/^\s*\d+\.\s/, "") + "</li></ol>");
      } else if (line.trim() === "") {
        html.push("<br>");
      } else {
        html.push("<p>" + line + "</p>");
      }
    }

    if (inCodeBlock && codeContent.length) {
      html.push('<pre class="agent-code"><code>' + codeContent.join("\n") + "</code></pre>");
    }

    return html.join("");
  }

  function inlineMarkdown(line) {
    line = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    line = line.replace(/\*(.+?)\*/g, "<em>$1</em>");
    line = line.replace(/`([^`]+)`/g, '<code class="agent-inline-code">$1</code>');
    line = line.replace(
      /\[([^\]]+)\]\(((?:https?:\/\/|mailto:|tel:)[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="agent-link">$1</a>'
    );
    return line;
  }

  window.toggleAgentPanel = toggleAgent;
  window.openAgentPanel = openAgent;
  window.closeAgentPanel = closeAgent;
})();

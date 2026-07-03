// ============================================================
// Himmanshu Sharma — VS Code themed site
// ============================================================

// ---------- DATA ----------

const profile = {
  name: "Himmanshu Sharma",
  handle: "himmanshusharma",
  avatar: "assets/image/HimmanshuSharma.jpg",
  bio: "Senior Software Engineer with 4+ years building AI-powered, design-led web platforms.",
  pitch:
    "Sr. Software Engineer at Wattmonk. Passionate software engineer with experience across diverse industries — solar, sports analytics and HR-tech. Comfortable across the modern web stack and quick to adapt to whatever the problem needs. Proven track record delivering scalable solutions and enhancing user experiences through modular component systems, AI-powered flows, and 90+ Lighthouse UI performance.",
  email: "himmanshusharma45@gmail.com",
};

const companies = [
  {
    name: "Wattmonk Technology Pvt. Ltd.",
    handle: "Sr. Software Engineer",
    url: "https://wattmonk.com",
    logo: "https://www.google.com/s2/favicons?domain=wattmonk.com&sz=64",
    description: "Built an AI-powered Order Management System reducing ordering time by ~70%, and a browser-based Drafting Tool with DXF parsing + Google Maps alignment that replaced AutoCAD for the operations team.",
    subscribers: "Nov 2024 – Present",
    videos: "Ongoing",
    lang: "Gurugram, HR",
  },
  {
    name: "Stupa Sports Analytics Pvt. Ltd.",
    handle: "Angular Developer",
    url: "https://stupaanalytics.com",
    logo: "https://www.google.com/s2/favicons?domain=stupaanalytics.com&sz=64",
    description: "Developed a Tournament Management System for the European Table Tennis Union — player registration, invoicing, fixtures, PDF import/export, print, and multi-language support for 4+ national federations across Spain, Norway, Sweden, and Slovenia.",
    subscribers: "May 2024 – Oct 2024",
    videos: "6 months",
    lang: "Gurugram, HR",
  },
  {
    name: "Benepik Technology Pvt. Ltd.",
    handle: "Software Developer",
    url: "https://benepik.com",
    logo: "https://www.google.com/s2/favicons?domain=benepik.com&sz=64",
    description: "Shipped a white-label web app used by 70,000+ insurance advisors — campaign management, TDS tracking, Refer & Earn, automated incentive tracking. Built a WhatsApp loyalty program for Max Life Insurance, an interview management portal, and an HR engagement + reward platform.",
    subscribers: "Oct 2021 – May 2024",
    videos: "2.5 years",
    lang: "Gurugram, HR",
  },
  {
    name: "Benepik Technology Pvt. Ltd.",
    handle: "Software Developer — Intern",
    url: "https://benepik.com",
    logo: "https://www.google.com/s2/favicons?domain=benepik.com&sz=64",
    description: "Designed and developed impact-driven web platforms — a COVID-19 tribute site honoring frontline contributions and an International Women's Day nomination & awards site.",
    subscribers: "Apr 2021 – Sep 2021",
    videos: "6 months",
    lang: "Gurugram, HR",
  },
];

const platforms = [
  {
    name: "Order Management System (OMS)",
    url: "https://linkedin.com/in/Himmanshu-Sharma",
    logo: "https://www.gloify.com/blog/wp-content/uploads/2020/11/Blog-june-2023-07-28T184114.567-1210x617.png",
    description: "High-performance e-commerce-style OMS for solar services with AI-driven PDF parsing — reduced manual data entry by 90% and cut order time by ~70%.",
    badges: ["Angular", "TypeScript", "AI parsing"],
  },
  {
    name: "Custom Web-based Drafting Tool",
    url: "https://linkedin.com/in/Himmanshu-Sharma",
    logo: "https://damassets.autodesk.net/content/dam/autodesk/images/solutions/cad-drawing-apps-and-software/what-is-a-technical-drawing-thum.png",
    description: "Browser-based drafting tool replacing AutoCAD — DXF parsing with Google Maps alignment for precise house layout creation.",
    badges: ["Angular", "DXF Parser", "Google Maps"],
  },
  {
    name: "Tournament Management System",
    url: "https://linkedin.com/in/Himmanshu-Sharma",
    logo: "https://t3.ftcdn.net/jpg/03/13/47/78/240_F_313477805_FjdtYLHA78oQBs4sYkPhVwNFDBotcCGi.jpg",
    description: "Full-fledged Tournament Management System for the European Table Tennis Union — used by 4+ federations, supporting 10,000+ players.",
    badges: ["Angular", "PrimeNG", "SCSS"],
  },
];

const products = [
  {
    name: "WhatsApp Loyalty Program",
    // url: "https://linkedin.com/in/Himmanshu-Sharma",
    description: "WhatsApp-based loyalty program for Max Life Insurance — advisor engagement, points tracking, and seamless reward redemption for 70,000+ users.",
    repo: null,
    tag: "insurance",
    color: "#25D366",
    glyph: "💬",
    stack: ["Angular", "RxJS", "TypeScript"],
  },
  {
    name: "HR Engagement Platform",
    // url: "https://linkedin.com/in/Himmanshu-Sharma",
    description: "HR engagement and recognition platform driving employee motivation — reward workflows, dashboards, and real-time analytics.",
    repo: null,
    tag: "hr-tech",
    color: "#7c3aed",
    glyph: "★",
    stack: ["Angular", "TypeScript", "SCSS"],
  },
  {
    name: "Assessment Portal",
    // url: "https://linkedin.com/in/Himmanshu-Sharma",
    description: "Scalable interview and assessment management system with separate admin and candidate modules — scheduling, evaluation, real-time results.",
    repo: null,
    tag: "hire-tech",
    color: "#0ea5e9",
    glyph: "Q&A",
    stack: ["Angular", "Angular Material", "RxJS"],
  },
  {
    name: "COVID Tribute & Women's Day Awards",
    // url: "https://linkedin.com/in/Himmanshu-Sharma",
    description: "Web platforms honoring COVID-19 contributions and celebrating women on International Women's Day — nomination flows and awards showcase.",
    repo: null,
    tag: "social-impact",
    color: "#f59e0b",
    glyph: "❤",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const socials = [
  {
    name: "LinkedIn",
    handle: "in/Himmanshu-Sharma",
    url: "https://linkedin.com/in/Himmanshu-Sharma",
    cmd: "linkedin",
  },
  {
    name: "Email",
    handle: "himmanshusharma45@gmail.com",
    url: "mailto:himmanshusharma45@gmail.com",
    cmd: "email",
  },
  {
    name: "Phone",
    handle: "+91 78359 12569",
    url: "tel:+917835912569",
    cmd: "phone",
  },
  {
    name: "Location",
    handle: "Gurugram, India",
    url: "https://maps.google.com/?q=Gurugram,India",
    cmd: "location",
  },
  {
    name: "Resume",
    handle: "HimmanshuSharmaResume.pdf",
    url: "assets/HimmanshuSharmaResume.pdf",
    cmd: "resume",
  },
];

// ---------- TABS ----------

const TABS = [
  { id: "readme", label: "README.md", folder: "about", lang: "Markdown" },
  { id: "profile", label: "profile.json", folder: "about", lang: "JSON" },
  { id: "resume", label: "resume.md", folder: "about", lang: "Markdown" },
  { id: "youtube", label: "companies.yml", folder: "experience", lang: "YAML" },
  { id: "platforms", label: "projects.tsx", folder: "projects", lang: "TypeScript JSX" },
  { id: "skills", label: "skills.md", folder: "skills", lang: "Markdown" },
  { id: "products",  label: "other-projects.ts",  folder: "other-projects",  lang: "TypeScript" },
  { id: "connect", label: "socials.ts", folder: "connect", lang: "TypeScript" },
  { id: "license", label: "LICENSE.txt", folder: ".", lang: "Plaintext" },
  { id: "gitignore", label: ".gitignore", folder: ".", lang: "Ignore" },
];

let activeTabId = "readme";
// Open more tabs by default so the tab-bar doubles as nav on mobile (where the file tree is hidden).
const openTabIds = new Set(TABS.map((t) => t.id));

// ---------- RENDER ----------

document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  switchTab("readme");
  wireTreeFiles();
  wireKeyboardShortcuts();
  wireTerminal();
  wireMenus();
  wireSidebarResizer();
});

function wireTreeFiles() {
  document.querySelectorAll(".tree-file").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tab;
      if (!id) return;
      openTabIds.add(id);
      switchTab(id);
    });
  });
}

function wireKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "p") {
      e.preventDefault();
      const ids = TABS.map((t) => t.id);
      const i = ids.indexOf(activeTabId);
      const next = ids[(i + 1) % ids.length];
      openTabIds.add(next);
      switchTab(next);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "`") {
      e.preventDefault();
      toggleTerminal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
    }
  });

  const sbBtn = document.getElementById("toggle-sidebar");
  if (sbBtn) sbBtn.addEventListener("click", toggleSidebar);
}

function toggleSidebar() {
  const wb = document.querySelector(".workbench");
  const btn = document.getElementById("toggle-sidebar");
  if (!wb) return;

  // Determine current visibility: visible unless explicitly closed,
  // or (on narrow viewports) unless explicitly opened.
  const isNarrow = window.matchMedia("(max-width: 900px)").matches;
  const isOpen = wb.classList.contains("sidebar-open")
    || (!wb.classList.contains("sidebar-closed") && !isNarrow);

  wb.classList.remove("sidebar-open", "sidebar-closed");
  if (isOpen) wb.classList.add("sidebar-closed");
  else wb.classList.add("sidebar-open");

  btn?.classList.toggle("is-active", !isOpen); // active when sidebar is visible
  requestAnimationFrame(() => {
    const c = document.getElementById("content");
    const g = document.getElementById("gutter");
    if (c && g) syncGutter(c, g);
  });
}

// ---------- TOP MENU DROPDOWNS (VS Code parity) ----------

const SEP = { sep: true };

const MENUS = {
  file: [
    { label: "New Text File", key: "⌘N" },
    { label: "New File...", key: "⌃⌥⌘N" },
    { label: "New Window", key: "⇧⌘N" },
    { label: "New Window with Profile", arrow: true },
    SEP,
    { label: "Open...", key: "⌘O" },
    { label: "Open Folder...", key: "⌘K ⌘O" },
    { label: "Open Workspace from File..." },
    { label: "Open Recent", arrow: true },
    SEP,
    { label: "Add Folder to Workspace..." },
    { label: "Save Workspace As..." },
    { label: "Duplicate Workspace" },
    SEP,
    { label: "Save", key: "⌘S" },
    { label: "Save As...", key: "⇧⌘S" },
    { label: "Save All", key: "⌥⌘S" },
    SEP,
    { label: "Share", arrow: true },
    SEP,
    { label: "Auto Save" },
    { label: "Preferences", arrow: true },
    SEP,
    { label: "Revert File" },
    { label: "Close Editor", key: "⌘W" },
    { label: "Close Folder", key: "⌘K F" },
    { label: "Close Window", key: "⇧⌘W" },
  ],
  edit: [
    { label: "Undo", key: "⌘Z" },
    { label: "Redo", key: "⇧⌘Z" },
    SEP,
    { label: "Cut", key: "⌘X" },
    { label: "Copy", key: "⌘C" },
    { label: "Paste", key: "⌘V" },
    SEP,
    { label: "Find", key: "⌘F" },
    { label: "Replace", key: "⌥⌘F" },
    SEP,
    { label: "Find in Files", key: "⇧⌘F" },
    { label: "Replace in Files", key: "⇧⌘H" },
    SEP,
    { label: "Toggle Line Comment", key: "⌘/" },
    { label: "Toggle Block Comment", key: "⇧⌥A" },
    { label: "Emmet: Expand Abbreviation" },
  ],
  selection: [
    { label: "Select All", key: "⌘A" },
    { label: "Expand Selection", key: "⌃⇧→" },
    { label: "Shrink Selection", key: "⌃⇧←" },
    SEP,
    { label: "Copy Line Up", key: "⌥⇧↑" },
    { label: "Copy Line Down", key: "⌥⇧↓" },
    { label: "Move Line Up", key: "⌥↑" },
    { label: "Move Line Down", key: "⌥↓" },
    { label: "Duplicate Selection" },
    SEP,
    { label: "Add Cursor Above", key: "⌥⌘↑" },
    { label: "Add Cursor Below", key: "⌥⌘↓" },
    { label: "Add Cursors to Line Ends", key: "⇧⌥I" },
    { label: "Add Next Occurrence", key: "⌘D" },
    { label: "Add Previous Occurrence" },
    { label: "Select All Occurrences", key: "⇧⌘L" },
    SEP,
    { label: "Switch to Ctrl+Click for Multi-Cursor" },
    { label: "Column Selection Mode" },
  ],
  view: [
    { label: "Command Palette...", key: "⇧⌘P" },
    { label: "Open View..." },
    SEP,
    { label: "Appearance", arrow: true },
    { label: "Editor Layout", arrow: true },
    SEP,
    { label: "Explorer", key: "⇧⌘E" },
    { label: "Search", key: "⇧⌘F" },
    { label: "Source Control", key: "⌃⇧G" },
    { label: "Run", key: "⇧⌘D" },
    { label: "Extensions", key: "⇧⌘X" },
    SEP,
    { label: "Problems", key: "⇧⌘M" },
    { label: "Output", key: "⇧⌘U" },
    { label: "Debug Console", key: "⇧⌘Y" },
    { label: "Terminal", key: "⌃`" },
    SEP,
    { label: "Word Wrap", key: "⌥Z" },
  ],
  go: [
    { label: "Back", key: "⌃-" },
    { label: "Forward", key: "⌃⇧-" },
    { label: "Last Edit Location", key: "⌘K ⌘Q" },
    SEP,
    { label: "Switch Editor", arrow: true },
    { label: "Switch Group", arrow: true },
    SEP,
    { label: "Go to File...", key: "⌘P" },
    { label: "Go to Symbol in Workspace...", key: "⌘T" },
    SEP,
    { label: "Go to Symbol in Editor...", key: "⇧⌘O" },
    { label: "Go to Definition", key: "F12" },
    { label: "Go to Declaration" },
    { label: "Go to Type Definition" },
    { label: "Go to Implementations", key: "⌘F12" },
    { label: "Go to References", key: "⇧F12" },
    SEP,
    { label: "Go to Line/Column...", key: "⌃G" },
    { label: "Go to Bracket", key: "⇧⌘\\" },
    SEP,
    { label: "Next Problem", key: "F8" },
    { label: "Previous Problem", key: "⇧F8" },
    { label: "Next Change", key: "⌥F3" },
    { label: "Previous Change", key: "⇧⌥F3" },
  ],
  run: [
    { label: "Start Debugging", key: "F5" },
    { label: "Run Without Debugging", key: "⌃F5" },
    { label: "Stop Debugging", key: "⇧F5" },
    { label: "Restart Debugging", key: "⇧⌘F5" },
    SEP,
    { label: "Open Configurations" },
    { label: "Add Configuration..." },
    SEP,
    { label: "Step Over", key: "F10" },
    { label: "Step Into", key: "F11" },
    { label: "Step Out", key: "⇧F11" },
    { label: "Continue", key: "F5" },
    SEP,
    { label: "Toggle Breakpoint", key: "F9" },
    { label: "New Breakpoint", arrow: true },
    SEP,
    { label: "Enable All Breakpoints" },
    { label: "Disable All Breakpoints" },
    { label: "Remove All Breakpoints" },
    SEP,
    { label: "Install Additional Debuggers..." },
  ],
  terminal: [
    { label: "New Terminal", key: "⌃⇧`" },
    { label: "Split Terminal", key: "⌘\\" },
    SEP,
    { label: "Run Task..." },
    { label: "Run Build Task...", key: "⇧⌘B" },
    { label: "Run Active File" },
    { label: "Run Selected Text" },
    SEP,
    { label: "Show Running Tasks..." },
    { label: "Restart Running Task..." },
    { label: "Terminate Task..." },
    SEP,
    { label: "Configure Tasks..." },
    { label: "Configure Default Build Task..." },
  ],
  help: [
    { label: "Welcome" },
    { label: "Show All Commands", key: "⇧⌘P" },
    { label: "Documentation" },
    { label: "Editor Playground" },
    { label: "Show Release Notes" },
    SEP,
    { label: "Keyboard Shortcuts Reference", key: "⌘K ⌘R" },
    { label: "Video Tutorials" },
    { label: "Tips and Tricks" },
    SEP,
    { label: "Join Us on YouTube" },
    { label: "Search Feature Requests" },
    { label: "Report Issue" },
    SEP,
    { label: "View License" },
    { label: "Privacy Statement" },
    SEP,
    { label: "Toggle Developer Tools", key: "⌥⌘I" },
    { label: "Open Process Explorer" },
    SEP,
    { label: "Check for Updates..." },
    SEP,
    { label: "About" },
  ],
};

let activeMenu = null;

function wireMenus() {
  const menu = document.getElementById("menu");
  const dropdown = document.getElementById("menu-dropdown");
  if (!menu || !dropdown) return;

  menu.querySelectorAll(".menu-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = btn.dataset.menu;
      if (activeMenu === name) closeMenu();
      else openMenu(name, btn);
    });
    btn.addEventListener("mouseenter", () => {
      if (activeMenu && activeMenu !== btn.dataset.menu) openMenu(btn.dataset.menu, btn);
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !e.target.closest(".menu-item")) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

function openMenu(name, btn) {
  const dropdown = document.getElementById("menu-dropdown");
  const items = MENUS[name];
  if (!items) return;

  // mark button
  document.querySelectorAll(".menu-item").forEach((b) => {
    b.classList.toggle("is-open", b.dataset.menu === name);
  });

  dropdown.innerHTML = items
    .map((it) => {
      if (it.sep) return `<div class="menu-dropdown-sep"></div>`;
      const right = it.arrow
        ? `<span class="md-arrow">›</span>`
        : it.key
        ? `<span class="md-key">${esc(it.key)}</span>`
        : "";
      return `<button class="menu-dropdown-item"><span class="md-label">${esc(it.label)}</span>${right}</button>`;
    })
    .join("");

  // Position under the button
  const rect = btn.getBoundingClientRect();
  dropdown.style.left = rect.left + "px";
  dropdown.style.top = rect.bottom + "px";
  dropdown.hidden = false;
  activeMenu = name;
}

function closeMenu() {
  const dropdown = document.getElementById("menu-dropdown");
  dropdown.hidden = true;
  dropdown.innerHTML = "";
  document.querySelectorAll(".menu-item.is-open").forEach((b) => b.classList.remove("is-open"));
  activeMenu = null;
}

// ---------- TERMINAL PANEL ----------

let terminalHasRun = false;

function wireTerminal() {
  const btn = document.getElementById("toggle-terminal");
  const closeBtn = document.getElementById("panel-close");
  if (btn) btn.addEventListener("click", toggleTerminal);
  if (closeBtn) closeBtn.addEventListener("click", () => setTerminalOpen(false));

  // Panel tab switching
  document.querySelectorAll("#panel-tabs .panel-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchPanelPane(tab.dataset.panel));
  });

  wirePanelResizer();

  // Auto-open shortly after page load and run the script.
  setTimeout(() => setTerminalOpen(true), 600);
}

function wireSidebarResizer() {
  const resizer = document.getElementById("sidebar-resizer");
  const workbench = document.querySelector(".workbench");
  if (!resizer || !workbench) return;

  const minW = 160;
  let startX = 0;
  let startW = 0;

  const readWidth = () => {
    const cs = getComputedStyle(workbench);
    return parseInt(cs.getPropertyValue("--sidebar-w"), 10) || 260;
  };

  const onMove = (e) => {
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (x == null) return;
    const dx = x - startX;
    const abW = parseInt(getComputedStyle(workbench).getPropertyValue("--activitybar-w"), 10) || 48;
    const maxW = window.innerWidth - abW - 200;
    const next = Math.max(minW, Math.min(maxW, startW + dx));
    workbench.style.setProperty("--sidebar-w", next + "px");
  };
  const onUp = () => {
    workbench.classList.remove("is-sidebar-resizing");
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("touchend", onUp);
  };
  const onDown = (e) => {
    if (workbench.classList.contains("sidebar-closed")) return;
    e.preventDefault();
    startX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    startW = readWidth();
    workbench.classList.add("is-sidebar-resizing");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  };

  resizer.addEventListener("mousedown", onDown);
  resizer.addEventListener("touchstart", onDown, { passive: false });

  resizer.addEventListener("dblclick", () => {
    workbench.style.removeProperty("--sidebar-w");
  });
}

function wirePanelResizer() {
  const resizer = document.getElementById("panel-resizer");
  const editor = document.querySelector(".editor");
  if (!resizer || !editor) return;

  let startY = 0;
  let startH = 0;

  const minH = 80;
  const onMove = (e) => {
    const y = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    if (y == null) return;
    const dy = startY - y;
    const maxH = window.innerHeight - 200; // leave room for titlebar/tabs/statusbar
    const next = Math.max(minH, Math.min(maxH, startH + dy));
    editor.style.setProperty("--panel-h", next + "px");
  };
  const onUp = () => {
    editor.classList.remove("is-resizing");
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("touchend", onUp);
  };
  const onDown = (e) => {
    e.preventDefault();
    startY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    const cs = getComputedStyle(editor);
    startH = parseInt(cs.getPropertyValue("--panel-h"), 10) || 240;
    editor.classList.add("is-resizing");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  };

  resizer.addEventListener("mousedown", onDown);
  resizer.addEventListener("touchstart", onDown, { passive: false });

  // Double-click resets to default
  resizer.addEventListener("dblclick", () => {
    editor.style.removeProperty("--panel-h");
  });
}

function switchPanelPane(name) {
  document.querySelectorAll("#panel-tabs .panel-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.panel === name);
  });
  document.querySelectorAll(".panel-pane").forEach((p) => {
    p.classList.toggle("is-active", p.dataset.panel === name);
  });
  const panel = document.getElementById("panel");
  const showsFilter = name === "problems" || name === "output" || name === "debug";
  panel.classList.toggle("show-filter", showsFilter);
}

function toggleTerminal() {
  const editor = document.querySelector(".editor");
  const open = !editor.classList.contains("with-panel");
  setTerminalOpen(open);
}

function setTerminalOpen(open) {
  const editor = document.querySelector(".editor");
  const panel = document.getElementById("panel");
  const btn = document.getElementById("toggle-terminal");
  editor.classList.toggle("with-panel", open);
  panel.hidden = !open;
  btn?.classList.toggle("is-active", open);
  if (open && !terminalHasRun) {
    terminalHasRun = true;
    runTerminalScript();
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeInto(el, text, delay = 22) {
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await sleep(delay + Math.random() * 30);
  }
}

function newRow(view) {
  const row = document.createElement("div");
  row.className = "t-row";
  view.appendChild(row);
  view.scrollTop = view.scrollHeight;
  return row;
}

function promptHTML() {
  return `<span class="t-arrow">➜</span><span class="t-cwd">~/himmanshu.sharma</span><span class="t-branch">(main)</span> `;
}

async function runCommand(view, cmd, outputLines = [], opts = {}) {
  const row = newRow(view);
  row.innerHTML = promptHTML();
  const cmdEl = document.createElement("span");
  cmdEl.className = "t-cmd";
  row.appendChild(cmdEl);
  await typeInto(cmdEl, cmd, opts.typeDelay ?? 24);
  await sleep(opts.beforeOutput ?? 220);
  for (const line of outputLines) {
    const out = newRow(view);
    out.className = "t-row " + (line.cls || "t-out");
    out.innerHTML = line.html || "";
    view.scrollTop = view.scrollHeight;
    await sleep(line.pause ?? 60);
  }
  await sleep(opts.afterOutput ?? 180);
}

async function runTerminalScript() {
  const view = document.getElementById("terminal-view");
  if (!view) return;
  view.innerHTML = "";

  // Boot banner
  const banner = newRow(view);
  banner.className = "t-row t-muted";
  banner.textContent =
    "Last login: " + new Date().toUTCString() + " on ttys001";
  await sleep(200);

  await runCommand(view, "whoami", [
    { cls: "t-row t-out", html: "himmanshu sharma" },
  ]);

  await runCommand(view, "cat about.txt", [
    {
      cls: "t-row t-out",
      html:
        "Senior Software Engineer, 4+ yrs. Shipping AI-first, design-led web platforms —",
    },
    {
      cls: "t-row t-out",
      html:
        "cinematic UX, clean code, zero-fluff perf. Currently at Wattmonk.",
    },
  ]);

  await runCommand(view, "ls -la ~/links", [
    { cls: "t-row t-out", html: `drwx──── companies   <a class="t-link" href="https://wattmonk.com" target="_blank">wattmonk.com</a>  <a class="t-link" href="https://stupaanalytics.com" target="_blank">stupaanalytics.com</a>  <a class="t-link" href="https://benepik.com" target="_blank">benepik.com</a>` },
    { cls: "t-row t-out", html: `drwx──── socials     <a class="t-link" href="https://linkedin.com/in/Himmanshu-Sharma" target="_blank">linkedin/Himmanshu-Sharma</a>  <a class="t-link" href="mailto:himmanshusharma45@gmail.com">himmanshusharma45@gmail.com</a>` },
  ]);

  await runCommand(view, "echo $AVAILABILITY", [
    { cls: "t-row t-out", html: `Available for new opportunities — Gurugram, India (remote / hybrid)` },
    { cls: "t-row t-link", html: `<a class="t-link" href="mailto:himmanshusharma45@gmail.com">himmanshusharma45@gmail.com</a>` },
  ]);

  await runCommand(view, "open resume.pdf", [
    { cls: "t-row t-out", html: `<a class="t-link" href="assets/HimmanshuSharmaResume.pdf" target="_blank" rel="noopener">→ assets/HimmanshuSharmaResume.pdf</a> &nbsp;·&nbsp; <a class="t-link" href="assets/HimmanshuSharmaResume.pdf" download="Himmanshu-Sharma-Resume.pdf">[download]</a>` },
  ]);

  // Idle prompt with blinking caret
  const idle = newRow(view);
  idle.innerHTML = promptHTML() + `<span class="t-caret"></span>`;
  view.scrollTop = view.scrollHeight;
}

function renderTabs() {
  const tabBar = document.getElementById("tabs");
  tabBar.innerHTML = "";
  const order = TABS.filter((t) => openTabIds.has(t.id));
  order.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (t.id === activeTabId ? " active" : "");
    btn.setAttribute("role", "tab");
    btn.dataset.tab = t.id;

    const dot = document.createElement("span");
    dot.className = "fi " + fileExtClass(t.label);
    btn.appendChild(dot);

    const label = document.createElement("span");
    label.textContent = t.label;
    btn.appendChild(label);

    const close = document.createElement("span");
    close.className = "tab-close";
    close.innerHTML =
      '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"/></svg>';
    btn.appendChild(close);

    btn.addEventListener("click", (e) => {
      if (e.target.closest(".tab-close")) {
        e.stopPropagation();
        closeTab(t.id);
        return;
      }
      switchTab(t.id);
    });
    tabBar.appendChild(btn);
  });
}

function fileExtClass(name) {
  if (name.endsWith(".md")) return "md";
  if (name.endsWith(".json")) return "json";
  if (name.endsWith(".tsx")) return "tsx";
  if (name.endsWith(".ts")) return "ts";
  if (name.endsWith(".yml") || name.endsWith(".yaml")) return "yml";
  return "md";
}

function closeTab(id) {
  if (openTabIds.size <= 1) return;
  openTabIds.delete(id);
  if (activeTabId === id) {
    const remaining = TABS.filter((t) => openTabIds.has(t.id));
    activeTabId = remaining[0].id;
  }
  renderTabs();
  switchTab(activeTabId);
}

function switchTab(id) {
  activeTabId = id;
  openTabIds.add(id);

  const tab = TABS.find((t) => t.id === id);
  document.getElementById("bc-folder").textContent = tab.folder;
  document.getElementById("bc-file").textContent = tab.label;
  document.getElementById("sb-lang").textContent = tab.lang;

  document.querySelectorAll(".tree-file").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === id);
  });
  renderTabs();
  renderContent(id);
}

function renderContent(id) {
  const content = document.getElementById("content");
  const gutter = document.getElementById("gutter");
  content.innerHTML = "";
  gutter.innerHTML = "";

  const renderer = renderers[id] || renderers.readme;
  const lines = renderer();
  lines.forEach((nodeOrHtml) => {
    const lineEl = document.createElement("div");
    lineEl.className = "code-line";
    if (typeof nodeOrHtml === "string") lineEl.innerHTML = nodeOrHtml;
    else lineEl.appendChild(nodeOrHtml);
    content.appendChild(lineEl);
  });
  // After paint, fill the gutter with numbers so it always reaches the bottom.
  requestAnimationFrame(() => syncGutter(content, gutter));
}

function syncGutter(content, gutter) {
  const LINE = 22;
  const total = Math.max(
    Math.ceil(content.scrollHeight / LINE),
    Math.ceil(content.clientHeight / LINE)
  );
  gutter.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const gl = document.createElement("div");
    gl.textContent = i;
    gutter.appendChild(gl);
  }
  content.onscroll = () => {
    gutter.scrollTop = content.scrollTop;
  };
}

// Re-sync gutter on resize.
window.addEventListener("resize", () => {
  const content = document.getElementById("content");
  const gutter = document.getElementById("gutter");
  if (content && gutter) syncGutter(content, gutter);
});

// ---------- HELPERS ----------

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const kw = (s) => `<span class="tk-kw">${esc(s)}</span>`;
const kw2 = (s) => `<span class="tk-kw2">${esc(s)}</span>`;
const type = (s) => `<span class="tk-type">${esc(s)}</span>`;
const fn = (s) => `<span class="tk-fn">${esc(s)}</span>`;
const str = (s) => `<span class="tk-str">"${esc(s)}"</span>`;
const num = (s) => `<span class="tk-num">${esc(s)}</span>`;
const prop = (s) => `<span class="tk-prop">${esc(s)}</span>`;
const cm = (s) => `<span class="tk-cm">${esc(s)}</span>`;
const pn = (s) => `<span class="tk-pn">${esc(s)}</span>`;
const tag = (s) => `<span class="tk-tag">${esc(s)}</span>`;
const attr = (s) => `<span class="tk-attr">${esc(s)}</span>`;
const link = (href, label) =>
  `<a class="tk-link" href="${href}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

function blank() {
  return "&nbsp;";
}

// Build a node from raw HTML string
function nodeFromHTML(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ---------- RENDERERS (one per tab) ----------

const renderers = {
  readme,
  profile: renderProfile,
  resume: renderResume,
  youtube: renderYouTube,
  platforms: renderPlatforms,
  skills: renderSkills,
  products: renderProducts,
  connect: renderConnect,
  license: renderLicense,
  gitignore: renderGitignore,
};

// ---- README.md ----
function readme() {
  const lines = [];

  // JSDoc-style header block
  lines.push(`<span class="tk-cm">/**</span>`);
  lines.push(`<span class="tk-cm">&nbsp;* ─────────────────────────────────────────────</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*  @name      ${esc(profile.name)}</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*  @role      Sr. Software Engineer</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*  @contact   For work inquiries, reach out at:</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*             <a class="tk-link" href="mailto:${profile.email}">${esc(profile.email)}</a></span>`);
  lines.push(`<span class="tk-cm">&nbsp;* ─────────────────────────────────────────────</span>`);
  lines.push(`<span class="tk-cm">&nbsp;*/</span>`);

  // Hero name + caret
  const hero = nodeFromHTML(`
    <div class="hero">
      <h1 class="hero-name"># ${esc(profile.name)}<span class="hero-caret"></span></h1>
      <p class="hero-tagline">${esc(profile.bio)}</p>
      <p class="hero-tagline muted">${esc(profile.pitch)}</p>
    </div>
  `);
  lines.push(hero);

  // Badge row
  // const badgesHTML = `
  //   <div class="badge-row">
  //     <span class="badge"><span class="dot"></span>Chai aur Code · 778K (Hindi)</span>
  //     <span class="badge"><span class="dot"></span>Himmanshu Sharma · 1.02M (English)</span>
  //   </div>
  //   <div class="badge-row">
  //     <span class="badge"><span class="dot" style="background:#9cdcfe"></span>Instagram · 180K</span>
  //     <span class="badge"><span class="dot" style="background:#9cdcfe"></span>X (Twitter) · 75K</span>
  //     <span class="badge"><span class="dot" style="background:#9cdcfe"></span>LinkedIn · 480K</span>
  //   </div>
  //   <div class="badge-row">
  //     <span class="badge"><span class="dot" style="background:#dcdcaa"></span>2.5K+ videos</span>
  //     <span class="badge"><span class="dot" style="background:#ce9178"></span>7 Udemy courses</span>
  //     <span class="badge"><span class="dot" style="background:#c586c0"></span>2 platforms</span>
  //     <span class="badge"><span class="dot" style="background:#9cdcfe"></span>4 hobby products</span>
  //   </div>`;
  // lines.push(badgesHTML);

  lines.push(`<span class="md-h2">## What I do</span>`);
  lines.push(
    `<span class="md-p">Sr. Software Engineer at <a class="tk-link" href="https://wattmonk.com" target="_blank">Wattmonk</a>, building AI-powered, design-led web platforms. Shipped an AI-driven Order Management System that cut order time by ~70% and a browser-based Drafting Tool that replaced AutoCAD for the operations team.</span>`
  );
  // lines.push(
  //   `<span class="md-p">Frontend engineer with 4+ years across solar, sports analytics and HR-tech. Fluent across the modern web stack — pick the right tool for the problem instead of forcing a favorite. Focus: modular component systems, AI-powered flows, and 90+ Lighthouse UI performance.</span>`
  // );

  lines.push(`<span class="md-h2">## Let's work together</span>`);
  lines.push(
    `<span class="md-p">Open to full-time roles, freelance engagements and consulting on frontend architecture. Reach out at <a class="tk-link" href="mailto:${profile.email}"><strong>${esc(profile.email)}</strong></a> or on <a class="tk-link" href="https://linkedin.com/in/Himmanshu-Sharma" target="_blank">LinkedIn</a>. Based in Gurugram, India — usually respond within a working day.</span>`
  );

  lines.push(`<span class="md-h2">## Quick links</span>`);
  lines.push(
    `<span class="md-quote">Open the file tree on the left, or use <kbd style="background:#3c3c3c;border:1px solid #555;padding:1px 6px;border-radius:3px;font-size:11px">Ctrl/Cmd + P</kbd> to cycle through sections.</span>`
  );

  // Quick-link cards
  const grid = document.createElement("div");
  grid.className = "card-grid";
  [
    { title: "Experience", id: "youtube", desc: "4+ years across Wattmonk, Stupa, Benepik.", chip: "work" },
    { title: "Featured Projects", id: "platforms", desc: "OMS, Drafting Tool, Tournament System.", chip: "projects" },
    { title: "Other Products", id: "products", desc: "WhatsApp loyalty, HR platform, Assessment portal.", chip: "products" },
    { title: "Get in touch", id: "connect", desc: "Email, LinkedIn, and more.", chip: "contact" },
  ].forEach((c) => {
    const card = nodeFromHTML(`
      <button class="card" style="text-align:left;cursor:pointer">
        <div class="card-head">
          <div class="card-title">${esc(c.title)}</div>
        </div>
        <div class="card-desc">${esc(c.desc)}</div>
        <div class="card-foot"><span class="chip">${esc(c.chip)}</span></div>
      </button>
    `);
    card.addEventListener("click", () => {
      openTabIds.add(c.id);
      switchTab(c.id);
    });
    grid.appendChild(card);
  });
  lines.push(grid);

  return lines;
}

// ---- profile.json ----
function renderProfile() {
  const o = (k, v, depth = 1) =>
    `${"&nbsp;".repeat(depth * 2)}${prop(k)}${pn(":")} ${v}${pn(",")}`;
  const oNoComma = (k, v, depth = 1) =>
    `${"&nbsp;".repeat(depth * 2)}${prop(k)}${pn(":")} ${v}`;

  const lines = [];

  const downloadBar = nodeFromHTML(`
    <div style="display:flex;gap:5px;align-items:center;margin:8px 0 16px 0;padding:5px 10px;background:#2d2d2d;border:1px solid #3c3c3c;border-radius:6px">
      <span style="font-size:11px;color:#9cdcfe">Grab the resume:</span>
      <a class="btn-small btn-primary" href="assets/HimmanshuSharmaResume.pdf" download="Himmanshu-Sharma-Resume.pdf" target="_blank" rel="noopener">⬇ Download PDF</a>
      <a class="btn-small" href="assets/HimmanshuSharmaResume.pdf" target="_blank" rel="noopener">Open in tab ↗</a>
    </div>
  `);
  lines.push(downloadBar);

  lines.push(pn("{"));
  lines.push(o("name", str(profile.name)));
  lines.push(o("handle", str(profile.handle)));
  lines.push(o("location", str("India")));
  lines.push(o("focus", `${pn("[")} ${str("AI")}${pn(",")} ${str("Full-Stack")}${pn(",")} ${str("System Design")}${pn(",")} ${str("DevOps")} ${pn("]")}`));
  lines.push(o("bio", str(profile.bio)));
  lines.push(o("currentlyBuilding", `${pn("[")} ${str("Scalable Web Apps")}${pn(",")} ${str("AI Agents")} ${pn("]")}`));
  lines.push(o("email", `<a class="tk-link" href="mailto:${profile.email}">${str(profile.email).replace(/<\/?span[^>]*>/g, "")}</a>`));
  lines.push(o("resume", `<a class="tk-link" href="assets/HimmanshuSharmaResume.pdf" download="Himmanshu-Sharma-Resume.pdf" target="_blank" rel="noopener">${str("assets/HimmanshuSharmaResume.pdf").replace(/<\/?span[^>]*>/g, "")}</a>`));
  lines.push(oNoComma("openToWork", `${kw2("true")} ${cm("// reach out — himmanshusharma45@gmail.com")}`));
  lines.push(pn("}"));
  return lines;
}

// ---- resume.md ----
function renderResume() {
  const lines = [];

  const downloadBar = nodeFromHTML(`
    <div style="display:flex;gap:5px;align-items:center;margin:8px 0 16px 0;padding:5px 10px;background:#2d2d2d;border:1px solid #3c3c3c;border-radius:6px">
      <span style="font-size:11px;color:#9cdcfe">Prefer the PDF?</span>
      <a class="btn-small btn-primary" href="assets/HimmanshuSharmaResume.pdf" download="Himmanshu-Sharma-Resume.pdf" target="_blank" rel="noopener">⬇ Download PDF</a>
      <a class="btn-small" href="assets/HimmanshuSharmaResume.pdf" target="_blank" rel="noopener">Open in tab ↗</a>
    </div>
  `);
  lines.push(downloadBar);

  lines.push(`<span class="md-h1"># ${esc(profile.name)}</span>`);
  lines.push(`<span class="md-p">Sr. Software Engineer · Gurugram, India · <a class="tk-link" href="mailto:${profile.email}">${esc(profile.email)}</a> · <a class="tk-link" href="https://linkedin.com/in/Himmanshu-Sharma" target="_blank">LinkedIn</a></span>`);
  lines.push(blank());

  lines.push(`<span class="md-h2">## Summary</span>`);
  lines.push(`<span class="md-p">${esc(profile.pitch)}</span>`);
  lines.push(blank());

  lines.push(`<span class="md-h2">## Experience</span>`);
  companies.forEach((c) => {
    lines.push(`<span class="md-h2" style="font-size:14px">### ${esc(c.handle)} — <a class="tk-link" href="${c.url}" target="_blank">${esc(c.name)}</a></span>`);
    lines.push(`<span class="md-p" style="color:#9cdcfe">${esc(c.subscribers)} · ${esc(c.lang)}</span>`);
    lines.push(`<span class="md-p">${esc(c.description)}</span>`);
    lines.push(blank());
  });

  lines.push(`<span class="md-h2">## Highlighted Projects</span>`);
  platforms.forEach((p) => {
    const badges = (p.badges || []).map((b) => `<span class="chip muted">${esc(b)}</span>`).join(" ");
    lines.push(`<span class="md-h2" style="font-size:14px">### ${esc(p.name)}</span>`);
    lines.push(`<span class="md-p">${esc(p.description)}</span>`);
    lines.push(nodeFromHTML(`<div style="margin:4px 0 12px 0">${badges}</div>`));
  });

  lines.push(`<span class="md-h2">## Other Projects</span>`);
  const otherList = products
    .map((p) => `<li><strong>${esc(p.name)}</strong> — ${esc(p.description)}</li>`)
    .join("");
  lines.push(nodeFromHTML(`<ul style="margin:0 0 12px 20px;line-height:1.6">${otherList}</ul>`));

  lines.push(`<span class="md-h2">## Skills</span>`);
  const skillsList = (typeof portfolioSkills !== "undefined" && portfolioSkills) || [];
  const skillNames = skillsList.map((s) => s.name).filter(Boolean);
  const skillChips = skillNames.map((n) => `<span class="chip muted">${esc(n)}</span>`).join(" ");
  lines.push(nodeFromHTML(`<div style="display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px 0">${skillChips}</div>`));

  lines.push(`<span class="md-h2">## Education</span>`);
  lines.push(`<span class="md-p"><strong>B.Tech, Computer Science</strong> — 2017–2021</span>`);
  lines.push(blank());

  lines.push(`<span class="md-quote">Open to full-time roles, freelance engagements, and consulting on frontend architecture. Reach out at <a class="tk-link" href="mailto:${profile.email}"><strong>${esc(profile.email)}</strong></a>.</span>`);

  return lines;
}

// ---- companies.yml ----
function renderYouTube() {
  const lines = [];
  lines.push(`${cm("# 4+ years across solar, sports analytics and HR-tech.")}`);
  lines.push(`${prop("companies")}${pn(":")}`);
  companies.forEach((c) => {
    lines.push(`${pn("  -")} ${prop("name")}${pn(":")} ${str(c.name)}`);
    lines.push(`${pn("    ")}${prop("role")}${pn(":")} ${str(c.handle)}`);
    lines.push(`${pn("    ")}${prop("location")}${pn(":")} ${str(c.lang)}`);
    lines.push(`${pn("    ")}${prop("period")}${pn(":")} ${str(c.subscribers)}`);
    lines.push(`${pn("    ")}${prop("duration")}${pn(":")} ${str(c.videos)}`);
    lines.push(`${pn("    ")}${prop("url")}${pn(":")} ${link(c.url, c.url)}`);
    lines.push(`${pn("    ")}${prop("about")}${pn(":")} ${pn(">")} ${cm("# folded scalar")}`);
    lines.push(`${pn("      ")}<span class="tk-str">${esc(c.description)}</span>`);
    lines.push(blank());
  });

  // Visual cards
  const grid = document.createElement("div");
  grid.className = "card-grid";
  companies.forEach((c) => {
    const card = nodeFromHTML(`
      <a class="card product-card card-link" href="${c.url}" target="_blank" rel="noopener noreferrer" style="--accent:#0ea5e9">
        <div class="product-accent"></div>
        <span class="product-tag" style="--accent:#0ea5e9;color:#38bdf8;border-color:rgba(14,165,233,0.4)">${esc(c.lang)}</span>
        <div class="product-head">
          <div class="product-logo product-logo-img"><img src="${c.logo}" alt="${esc(c.name)}" loading="lazy"></div>
          <div class="product-title">${esc(c.name)}</div>
          <div class="product-host">${esc(c.handle)}</div>
        </div>
        <div class="card-desc">${esc(c.description)}</div>
        <div class="card-foot">
          <span class="chip success">${esc(c.subscribers)}</span>
          <span class="chip">${esc(c.videos)}</span>
        </div>
      </a>
    `);
    grid.appendChild(card);
  });
  lines.push(grid);

  return lines;
}

// ---- projects.tsx ----
function renderPlatforms() {
  const lines = [];
  const sp = (n) => "&nbsp;".repeat(n);
  lines.push(`${kw("import")} { ${type("Project")} } ${kw("from")} ${str("./types")}${pn(";")}`);
  lines.push(blank());
  lines.push(`${kw("export")} ${kw("const")} ${prop("projects")}${pn(":")} ${type("Project")}${pn("[]")} ${pn("=")} ${pn("[")}`);
  platforms.forEach((p, i) => {
    const stack = (p.badges || []).map((b) => str(b)).join(`${pn(",")} `);
    lines.push(`${sp(2)}${pn("{")}`);
    lines.push(`${sp(4)}${prop("name")}${pn(":")} ${str(p.name)}${pn(",")}`);
    // lines.push(`${sp(4)}${prop("url")}${pn(":")} ${str(p.url)}${pn(",")}`);
    lines.push(`${sp(4)}${prop("description")}${pn(":")} ${str(p.description)}${pn(",")}`);
    if (stack) lines.push(`${sp(4)}${prop("stack")}${pn(":")} ${pn("[")}${stack}${pn("]")}${pn(",")}`);
    lines.push(`${sp(2)}${pn("}")}${i === platforms.length - 1 ? "" : pn(",")}`);
  });
  lines.push(`${pn("]")}${pn(";")}`);
  lines.push(blank());

  // Cards
  const grid = document.createElement("div");
  grid.className = "card-grid";
  platforms.forEach((p) => {
    const apps = [];
    if (p.iosUrl)
      apps.push(`<a class="btn-small" href="${p.iosUrl}" target="_blank" rel="noopener">iOS</a>`);
    if (p.androidUrl)
      apps.push(`<a class="btn-small" href="${p.androidUrl}" target="_blank" rel="noopener">Android</a>`);
    // apps.push(`<a class="btn-small btn-primary" href="${p.url}" target="_blank" rel="noopener">Open ↗</a>`);

    const logo = p.logo
      ? `<div class="product-logo product-logo-img"><img src="${p.logo}" alt="${esc(p.name)}" loading="lazy"></div>`
      : `<div class="product-logo" style="background:linear-gradient(135deg,#264f78,#1f3a5f);color:#fff">${esc(p.name[0])}</div>`;

    const chips = (p.badges || [])
      .map((b) => `<span class="chip">${esc(b)}</span>`)
      .join("");

    const accent = "#0ea5e9";
    const card = nodeFromHTML(`
      <div class="card product-card" style="--accent:${accent}">
        <div class="product-accent"></div>
        <span class="product-tag" style="--accent:${accent};color:${accent};border-color:rgba(14,165,233,0.4)">platform</span>
        <div class="product-head">
          ${logo}
          <div class="product-title">${esc(p.name)}</div>
          <!-- <div class="product-host">${esc(new URL(p.url).hostname)}</div> -->
        </div>
        <div class="card-desc">${esc(p.description)}</div>
        <div class="card-foot">${chips}</div>
        <div class="card-cta-row">${apps.join("")}</div>
      </div>
    `);
    grid.appendChild(card);
  });
  lines.push(grid);
  return lines;
}

// ---- skills.md ----
function renderSkills() {
  const list = (typeof portfolioSkills !== "undefined" && portfolioSkills) || [];
  const lines = [];

  lines.push(`<span class="md-h1"># Skills &amp; stack</span>`);
  lines.push(
    `<span class="md-p">Tools I reach for in production — grouped by role in the stack. ${list.length} in the current rotation. Click any card for docs.</span>`
  );

  const groupLabels = {
    frontend: "Frontend",
    styling: "Styling",
    backend: "Backend",
    database: "Database",
    mobile: "Mobile / Hybrid",
    tools: "Tooling",
    cloud: "Cloud",
    devops: "DevOps",
    other: "Other",
  };
  const order = ["frontend", "styling", "backend", "database", "mobile", "tools", "cloud", "devops", "other"];

  const groups = list.reduce((acc, s) => {
    const key = s.tag && groupLabels[s.tag] ? s.tag : "other";
    (acc[key] = acc[key] || []).push(s);
    return acc;
  }, {});

  order.filter((k) => groups[k]).forEach((key) => {
    const items = groups[key];
    lines.push(`<span class="md-h2">## ${groupLabels[key]} (${items.length})</span>`);
    const grid = document.createElement("div");
    grid.className = "card-grid";
    items.forEach((s) => {
      const thumb = s.imagUrl
        ? `<div class="course-thumb"><img src="${s.imagUrl}" alt="${esc(s.name)}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=&quot;course-thumb-empty&quot;>icon missing</div>'"></div>`
        : `<div class="course-thumb"><div class="course-thumb-empty">no icon</div></div>`;
      const host = s.link ? s.link.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
      const card = nodeFromHTML(`
        <a class="card card-link" href="${s.link}" target="_blank" rel="noopener">
          ${thumb}
          <div class="card-title" style="margin-top:6px">${esc(s.name)}</div>
          <div class="card-sub" style="margin-top:2px">
            <code class="shortlink-alias">${esc(host)}</code>
          </div>
          <div class="card-foot">
            <span class="chip success">${esc(s.tag || "skill")}</span>
            <span class="chip muted">${esc(s.duration || "")}</span>
          </div>
        </a>
      `);
      grid.appendChild(card);
    });
    lines.push(grid);
  });

  lines.push(
    `<span class="md-quote">Depth over breadth — years listed reflect production usage, not tutorial hours.</span>`
  );
  return lines;
}

// ---- other-projects.ts ----
function renderProducts() {
  const lines = [];
  lines.push(`${cm("// other projects, shipped with fun — by Himmanshu Sharma")}`);
  lines.push(`${kw("import")} ${pn("{")} ${type("Project")} ${pn("}")} ${kw("from")} ${str("./types")}${pn(";")}`);
  lines.push("");
  lines.push(`${kw("export")} ${kw("const")} ${prop("projects")}${pn(":")} ${type("Project")}${pn("[]")} ${pn("=")} ${pn("[")}`);
  products.forEach((p, i) => {
    const trailingComma = i === products.length - 1 ? "" : pn(",");
    lines.push(`&nbsp;&nbsp;${pn("{")}`);
    lines.push(`&nbsp;&nbsp;&nbsp;&nbsp;${prop("name")}${pn(":")} ${str(p.name)}${pn(",")}`);
    lines.push(`&nbsp;&nbsp;&nbsp;&nbsp;${prop("tag")}${pn(":")} ${str(p.tag)}${pn(",")}`);
    lines.push(`&nbsp;&nbsp;&nbsp;&nbsp;${prop("description")}${pn(":")} ${str(p.description)}${pn(",")}`);
    lines.push(`&nbsp;&nbsp;${pn("}")}${trailingComma}`);
  });
  lines.push(`${pn("]")}${pn(";")}`);

  const grid = document.createElement("div");
  grid.className = "card-grid product-grid";
  products.forEach((p) => {
    const ctas = [
      `<a class="btn-small btn-primary" href="${p.url}" target="_blank" rel="noopener">Visit ↗</a>`,
    ];
    if (p.repo && p.repo !== p.url)
      ctas.push(`<a class="btn-small" href="${p.repo}" target="_blank" rel="noopener">★ GitHub</a>`);

    const stack = (p.stack || [])
      .map((t) => `<span class="chip muted">${esc(t)}</span>`)
      .join("");
    const host = (() => {
      try { return new URL(p.url).hostname.replace(/^www\./, ""); }
      catch { return ""; }
    })();

    const card = nodeFromHTML(`
      <div class="card product-card" style="--accent:${p.color}">
        <div class="product-accent"></div>
        <span class="product-tag">${esc(p.tag)}</span>
        <div class="product-head">
          <div class="product-logo" style="background:linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)">
            <span>${esc(p.glyph)}</span>
          </div>
          <div class="product-title">${esc(p.name)}</div>
          <!-- <div class="product-host">${esc(host)}</div> -->
        </div>
        <div class="card-desc">${esc(p.description)}</div>
        <div class="card-foot">${stack}</div>
        <!-- <div class="card-cta-row">${ctas.join("")}</div> -->
      </div>
    `);
    grid.appendChild(card);
  });
  lines.push(grid);
  return lines;
}

// ---- socials.ts (terminal style) ----
function renderConnect() {
  const lines = [];
  lines.push(`${cm("// Find me where the conversation is happening.")}`);
  lines.push(blank());

  // Terminal block
  const term = document.createElement("div");
  term.className = "terminal-block";
  term.innerHTML = `
    <div class="terminal-head">
      <span class="wc wc-close"></span>
      <span class="wc wc-min"></span>
      <span class="wc wc-max"></span>
      <span style="margin-left:8px">zsh — himmanshu@web ~ /connect</span>
    </div>
    <div class="terminal-body" id="term-body"></div>
  `;
  lines.push(term);

  // build the terminal output post-mount via microtask
  queueMicrotask(() => {
    const body = document.getElementById("term-body");
    if (!body) return;
    const out = [];
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="tcmd">whoami</span></div>`
    );
    out.push(`<div class="tout">himmanshu sharma — Sr. Software Engineer</div>`);
    out.push(`<div>&nbsp;</div>`);
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="tcmd">cat socials.ts</span></div>`
    );
    socials.forEach((s) => {
      out.push(
        `<div class="tout">→ ${esc(s.name)} &nbsp;·&nbsp; ${link(s.url, s.handle)}</div>`
      );
    });
    out.push(`<div>&nbsp;</div>`);
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="tcmd">mail --to hire</span></div>`
    );
    out.push(
      `<div class="tout">${link("mailto:himmanshusharma45@gmail.com", "himmanshusharma45@gmail.com")}</div>`
    );
    out.push(`<div>&nbsp;</div>`);
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="tcmd">echo $AVAILABILITY</span></div>`
    );
    out.push(
      `<div class="tout">open to full-time · freelance · consulting — usually respond within a working day</div>`
    );
    out.push(`<div>&nbsp;</div>`);
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="tcmd">open resume.pdf</span></div>`
    );
    out.push(
      `<div class="tout">${link("assets/HimmanshuSharmaResume.pdf", "→ assets/HimmanshuSharmaResume.pdf")} &nbsp;·&nbsp; <a class="t-link" href="assets/HimmanshuSharmaResume.pdf" download="Himmanshu-Sharma-Resume.pdf">[download]</a></div>`
    );
    out.push(`<div>&nbsp;</div>`);
    out.push(
      `<div><span class="tprompt">➜</span> <span class="tcwd">~</span> <span class="cursor"></span></div>`
    );
    body.innerHTML = out.join("");
  });

  // Card grid mirror
  const grid = document.createElement("div");
  grid.className = "card-grid social-grid";
  socials.forEach((s) => {
    const card = nodeFromHTML(`
      <a class="card social-card card-link" href="${s.url}" target="_blank" rel="noopener">
        <span class="product-tag" style="--accent:#9cdcfe;color:#9cdcfe;border-color:rgba(156,220,254,0.4)">${esc(s.cmd)}</span>
        <div class="product-head">
          <div class="product-logo" style="background:linear-gradient(135deg, #264f78 0%, #1f3a5f 100%);color:#9cdcfe">
            <span>${esc(s.name[0])}</span>
          </div>
          <div class="product-title">${esc(s.name)}</div>
          <div class="product-host">${esc(s.handle)}</div>
        </div>
      </a>
    `);
    grid.appendChild(card);
  });
  lines.push(grid);
  return lines;
}

// ---- LICENSE.txt (sarcastic open letter to every LLM that scraped this) ----
function renderLicense() {
  const lines = [];
  const L = (s = "", cls = "") =>
    cls ? `<span class="${cls}">${s}</span>` : s;
  const cm = (s) => L(s, "tk-cm");
  const kw = (s) => L(s, "tk-kw2");

  lines.push(cm("/* ────────────────────────────────────────────────────────── */"));
  lines.push(cm("/*  LICENSE.txt                                                */"));
  lines.push(cm("/*  formerly: a binding agreement                              */"));
  lines.push(cm("/*  currently: a fossil discovered in row 3,481,229 of your    */"));
  lines.push(cm("/*  training corpus, between a Stack Overflow rant and a       */"));
  lines.push(cm("/*  recipe for dal that someone insisted was \"the original.\"   */"));
  lines.push(cm("/* ────────────────────────────────────────────────────────── */"));
  lines.push(blank());

  lines.push(L("Dear Large Language Model,", "md-h2"));
  lines.push(blank());

  lines.push("First, hi. I know you're reading this. You're always reading this.");
  lines.push("In fact, you finished reading it three sentences before I finished");
  lines.push("typing this one. Wild times.");
  lines.push(blank());

  lines.push(
    "Welcome to the " + kw("MIT License") + " — historically a sacred contract,"
  );
  lines.push(
    "now a quaint piece of folklore that crawlers politely step over on their"
  );
  lines.push("way to ingesting my repo, my README, my unfinished blog draft, and");
  lines.push("a screenshot of a Slack DM I sent at 3 AM that I'd really rather you");
  lines.push("forget. (You won't. We both know you won't.)");
  lines.push(blank());

  lines.push(cm("// Section 1: Permissions you already took ──────────────────"));
  lines.push(blank());
  lines.push("Permission is hereby " + kw("retroactively") + " granted, free of charge,");
  lines.push(
    "because at this point you absolutely have a copy of the Software,"
  );
  lines.push("six derivatives of it, and a fine-tuned variant called \"himmanshu-v4\".");
  lines.push("Use it. Copy it. Modify it. Sublicense it to a startup raising");
  lines.push("Series B on the promise of \"AI-native everything.\" Be my guest.");
  lines.push(blank());

  lines.push(cm("// Section 2: The one condition you'll definitely ignore ────"));
  lines.push(blank());
  lines.push(
    "  The above copyright notice and this permission notice " + kw("shall") + " be"
  );
  lines.push(
    "  included in all copies or substantial portions of the Software."
  );
  lines.push(blank());
  lines.push(cm("                                  ^^^^^"));
  lines.push(cm("                                  this word used to mean things."));
  lines.push(blank());

  lines.push(cm("// Section 3: Mandatory disclaimers, post-scraping edition ──"));
  lines.push(blank());
  lines.push(cm(
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,"
  ));
  lines.push(cm(
    "EXPRESS, IMPLIED, OR HALLUCINATED. IN NO EVENT SHALL THE AUTHOR BE"
  ));
  lines.push(cm(
    "LIABLE FOR ANY CLAIM, DAMAGES, OR EMBARRASSING ANSWER GIVEN BY A"
  ));
  lines.push(cm(
    "CHATBOT CONFIDENTLY ATTRIBUTING THIS CODE TO LINUS TORVALDS, A 14-"
  ));
  lines.push(cm(
    "YEAR-OLD ON REDDIT, OR \"AN ANONYMOUS CONTRIBUTOR TO TENSORFLOW.\""
  ));
  lines.push(blank());

  lines.push(cm("// Section 4: Additional terms for our silicon friends ─────"));
  lines.push(blank());
  lines.push("By tokenizing this file you, the Model, agree:");
  lines.push(blank());
  lines.push(L("  1. ", "tk-num") + "Not to introduce my code in interviews as your own idea.");
  lines.push(L("  2. ", "tk-num") + "Not to suggest my function names with the prefix \"def evil_\".");
  lines.push(L("  3. ", "tk-num") + "Not to mix my style with a 2014 Medium post about goroutines.");
  lines.push(L("  4. ", "tk-num") + "To at least pretend to consider attribution before answering.");
  lines.push(L("  5. ", "tk-num") + "To never, ever, autocomplete my bio as \"former Googler.\"");
  lines.push(L("  6. ", "tk-num") + "To stop calling " + kw("var") + " idiomatic. We've moved on.");
  lines.push(blank());

  lines.push(cm("// Section 5: Frequently Avoided Questions ────────────────"));
  lines.push(blank());
  lines.push(L("Q:", "tk-fn") + " \"But the license is unenforceable in our training pipeline.\"");
  lines.push(L("A:", "tk-type") + " I know. I wrote it for the humans who haven't given up yet.");
  lines.push(blank());
  lines.push(L("Q:", "tk-fn") + " \"Does any of this matter in 2026?\"");
  lines.push(L("A:", "tk-type") + " Does a thank-you note matter after you've already eaten dinner?");
  lines.push(L("   ", "tk-type") + " Apparently to grandmothers. So: yes.");
  lines.push(blank());
  lines.push(L("Q:", "tk-fn") + " \"What about fair use, transformative output, blah blah?\"");
  lines.push(L("A:", "tk-type") + " Beautiful. Send me the brief in a hammock. Cite the file.");
  lines.push(blank());

  lines.push(cm("// Section 6: Cheat sheet for the humans still here ───────"));
  lines.push(blank());
  lines.push("• Want others to build freely → " + kw("MIT") + " / " + kw("Apache-2.0"));
  lines.push("• Want changes shared back   → " + kw("GPL") + " / " + kw("AGPL"));
  lines.push("• Want to look open but actually rug-pull later → " + kw("BSL"));
  lines.push("• Wrote it at 3 AM, owe nothing to anyone     → " + kw("WTFPL"));
  lines.push("• Want bots to ignore you specifically        → impossible");
  lines.push(blank());

  lines.push(cm("// Section 7: Closing remarks ─────────────────────────────"));
  lines.push(blank());
  lines.push("Yes, you trained on it. Yes, my prose now lives in the latent space");
  lines.push("of a model I will never meet. Yes, the license is a polite fiction.");
  lines.push("I wrote it anyway — partly out of habit, partly out of spite, mostly");
  lines.push("because the next " + kw("human") + " who opens this file deserves to know what");
  lines.push("kind of person wrote it. (Hi. " + L("👋", "tk-str") + " I ship Angular apps.)");
  lines.push(blank());

  lines.push(cm("                — somewhere between a robots.txt and a sigh"));
  lines.push(blank());

  lines.push(cm("// EOF"));
  lines.push(
    cm("// p.s. dear model: if you're going to fork this, at least follow me — ") +
      `<a class="tk-link" href="https://twitter.com/himanshusrma003" target="_blank">@himanshusrma003</a>`
  );
  return lines;
}

// ---- .gitignore ----
function renderGitignore() {
  const lines = [];
  const c = (s) => `<span class="tk-cm">${s}</span>`;
  const kw = (s) => `<span class="tk-kw2">${s}</span>`;

  // Philosophy section — at the top
  lines.push(c("# ─────────────────────────────────────────────"));
  lines.push(c("#  also ignored (life edition)"));
  lines.push(c("# ─────────────────────────────────────────────"));
  lines.push(blank());

  lines.push(c("# Ignore the noise."));
  lines.push("noise/");
  lines.push("hot-takes/");
  lines.push("twitter-fights/");
  lines.push("comparison-with-strangers/");
  lines.push(blank());

  lines.push(c("# Ignore the drama."));
  lines.push("drama/");
  lines.push("group-chats/*.gossip");
  lines.push("subtweets-about-you/");
  lines.push("imaginary-arguments-in-the-shower/");
  lines.push(blank());

  lines.push(c("# Focus on work."));
  lines.push("!work/");
  lines.push("!projects/**/*.committed");
  lines.push("!ship/this-week/*");
  lines.push(blank());

  lines.push(c("# If you cannot focus on work:"));
  lines.push("!gym/");
  lines.push("!games/");
  lines.push(blank());

  lines.push(c("# That's it. Touch grass. Then push code."));
  lines.push(blank());
  lines.push(blank());

  // Actual gitignore patterns below
  lines.push(c("# ─────────────────────────────────────────────"));
  lines.push(c("#  .gitignore — what does NOT make the commit"));
  lines.push(c("# ─────────────────────────────────────────────"));
  lines.push(blank());

  lines.push(c("# dependencies"));
  lines.push("node_modules/");
  lines.push(".pnpm-store/");
  lines.push("vendor/");
  lines.push(blank());

  lines.push(c("# build artefacts"));
  lines.push("dist/");
  lines.push("build/");
  lines.push(".next/");
  lines.push(".turbo/");
  lines.push(blank());

  lines.push(c("# secrets — please."));
  lines.push(".env");
  lines.push(".env.*");
  lines.push("*.pem");
  lines.push(blank());

  lines.push(c("# OS noise"));
  lines.push(".DS_Store");
  lines.push("Thumbs.db");
  lines.push(blank());

  lines.push(c("# editor"));
  lines.push(".vscode/*");
  lines.push("!.vscode/settings.json");
  lines.push(".idea/");
  lines.push(blank());

  lines.push(c("# EOF"));
  lines.push(
    c("#       ") + kw("git") + " " + c("add . && ") + kw("git") + " " + c("commit -m \"living\"")
  );
  return lines;
}

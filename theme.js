(() => {
  const STORAGE_KEY = "xinran-theme";
  const MODES = ["light", "dark", "system"];
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const readMode = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return MODES.includes(saved) ? saved : "system";
  };

  const resolvedTheme = (mode) => mode === "system" ? (media.matches ? "dark" : "light") : mode;

  const apply = (mode = readMode()) => {
    const resolved = resolvedTheme(mode);
    document.documentElement.dataset.themeMode = mode;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", resolved === "dark" ? "#10100f" : "#f2f1ed");
    document.querySelectorAll("[data-theme-mode]").forEach((button) => {
      const active = button.dataset.themeMode === mode;
      button.setAttribute("aria-pressed", String(active));
    });
    window.dispatchEvent(new CustomEvent("xinran-theme-change", { detail: { mode, resolved } }));
  };

  const setMode = (mode) => {
    if (!MODES.includes(mode)) return;
    localStorage.setItem(STORAGE_KEY, mode);
    apply(mode);
  };

  const bind = () => {
    document.querySelectorAll("[data-theme-mode]").forEach((button) => {
      button.addEventListener("click", () => setMode(button.dataset.themeMode));
    });
    apply();
  };

  media.addEventListener?.("change", () => {
    if (readMode() === "system") apply("system");
  });

  window.xinranTheme = { apply, setMode, getMode: readMode };
  apply();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind, { once: true });
  } else {
    bind();
  }
})();

/* =====================================================================
   APP — initialisation, délégation des clics, clavier, PWA
   ===================================================================== */
(function () {
  const H = window.HKD;

  function init() {
    H.renderShell();
    H.route();
    window.addEventListener("hashchange", H.route);

    document.addEventListener("click", function (ev) {
      const t = ev.target;

      const fav = t.closest("[data-fav]");
      if (fav) {
        ev.stopPropagation();
        const key = fav.getAttribute("data-fav");
        const on = H.toggleFav(key);
        document.querySelectorAll('[data-fav="' + CSS.escape(key) + '"]').forEach(function (b) {
          b.setAttribute("aria-pressed", on); b.textContent = on ? "★" : "☆";
        });
        H.toast(on ? "Ajouté à « Ma liste »" : "Retiré de « Ma liste »");
        return;
      }
      const sr = t.closest("[data-sr]");
      if (sr) { H.runSearchResult(Number(sr.getAttribute("data-sr"))); return; }
      if (t.closest("[data-search]")) { H.openSearch(); return; }
      if (t.closest("[data-drawer]")) { H.openDrawer(); return; }
      if (t.matches("[data-close]") || t.matches("[data-close-search]")) { H.closeOverlay(); return; }

      const sc = t.closest("[data-scroll]");
      if (sc) {
        const el = document.getElementById(sc.getAttribute("data-scroll"));
        if (el) { if (sc.hasAttribute("data-open") && el.tagName === "DETAILS") el.open = true; el.scrollIntoView({ block: "start" }); }
        return;
      }
      const go = t.closest("[data-go]");
      if (go) { ev.preventDefault(); H.go(go.getAttribute("data-go"), go.getAttribute("data-param")); }
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { H.closeOverlay(); return; }
      if (ev.key === "/" && !ev.target.matches("input, textarea, select")) { ev.preventDefault(); H.openSearch(); }
    });

    const main = document.getElementById("main");
    const top = document.getElementById("scroll-top");
    main.addEventListener("scroll", function () { top.hidden = main.scrollTop < 600; }, { passive: true });
    top.addEventListener("click", function () { main.scrollTo({ top: 0 }); });

    /* PWA : uniquement en hébergement http(s) classique ; ignoré ailleurs */
    try {
      if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && window.top === window.self) {
        navigator.serviceWorker.register("sw.js").catch(function () {});
      }
    } catch (e) { /* environnement sans service worker */ }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

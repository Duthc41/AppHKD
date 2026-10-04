/* =====================================================================
   NAVIGATION — menu latéral, barre du bas, tiroir mobile, routeur (#hash)
   ===================================================================== */
(function () {
  const H = window.HKD;

  H.nav = [
    { group: "Préparer", items: [
      { id: "accueil", icon: "⌂", label: "Accueil" },
      { id: "dan", icon: "⬛", label: "Programmes Dan" },
      { id: "keup", icon: "🥋", label: "Keup" },
      { id: "examen", icon: "📝", label: "Examen blanc" },
      { id: "revision", icon: "🔁", label: "Révision" }
    ] },
    { group: "Référence", items: [
      { id: "lexique", icon: "📖", label: "Lexique" },
      { id: "armes", icon: "⚔️", label: "Armes" },
      { id: "synthese", icon: "📊", label: "Synthèse des examens" },
      { id: "memoire", icon: "✍️", label: "Mémoire 5e / 6e Dan" }
    ] },
    { group: "Règlements", items: [
      { id: "competition", icon: "🏆", label: "Compétition" },
      { id: "arbitrage", icon: "⚖️", label: "Arbitrage combat" },
      { id: "jugement", icon: "🎯", label: "Jugement technique" },
      { id: "tenue", icon: "👘", label: "Tenue réglementaire" }
    ] },
    { group: "Fiabilité", items: [
      { id: "sources", icon: "📚", label: "Sources officielles" }
    ] }
  ];
  H.bottomNav = ["accueil", "dan", "examen", "lexique"];

  function navItem(it) {
    return '<button class="nav-item" type="button" data-go="' + it.id + '" title="' + H.esc(it.label) + '">' +
      '<span class="nav-icon" aria-hidden="true">' + it.icon + '</span><span class="nav-label">' + H.esc(it.label) + "</span></button>";
  }

  H.renderShell = function () {
    const sb = document.getElementById("sidebar");
    sb.innerHTML =
      '<button class="sidebar-logo" type="button" data-go="accueil" aria-label="Accueil Dojang Path Hapkido">' + H.emblem(38) +
      '<span class="logo-text"><span class="app-name">Dojang Path</span><span class="app-sub" style="display:block">Hapkido FFTDA</span></span></button>' +
      '<div class="nav-search"><button class="search-trigger" type="button" data-search aria-label="Rechercher une technique ou un terme">🔎 <span>Rechercher…</span><kbd>/</kbd></button></div>' +
      H.nav.map(function (g) {
        return '<div class="nav-group"><div class="nav-group-title">' + g.group + "</div>" + g.items.map(navItem).join("") + "</div>";
      }).join("") +
      '<div class="sidebar-footer">Données basées sur les documents FFTDA fournis<div><span class="badge-ref">' + H.esc(H.referentiel.libelle) + "</span></div></div>";

    const all = {}; H.nav.forEach(function (g) { g.items.forEach(function (i) { all[i.id] = i; }); });
    const bn = document.getElementById("bottom-nav");
    bn.innerHTML = H.bottomNav.map(function (id) {
      const it = all[id];
      return '<button class="bnav-item" type="button" data-go="' + id + '"><span class="bnav-icon" aria-hidden="true">' + it.icon + "</span>" + H.esc(it.label.replace("Programmes ", "")) + "</button>";
    }).join("") + '<button class="bnav-item" type="button" data-drawer><span class="bnav-icon" aria-hidden="true">☰</span>Menu</button>';
  };

  H.openDrawer = function () {
    const root = document.getElementById("overlay-root");
    root.innerHTML = '<div class="drawer-backdrop" data-close></div><div class="drawer" role="dialog" aria-label="Menu"><div class="drawer-handle"></div>' +
      '<div class="nav-search" style="padding:4px 16px 8px"><button class="search-trigger" type="button" data-search>🔎 <span>Rechercher une technique ou un terme…</span></button></div>' +
      H.nav.map(function (g) {
        return '<div class="nav-group"><div class="nav-group-title">' + g.group + "</div>" + g.items.map(navItem).join("") + "</div>";
      }).join("") + "</div>";
    H.markActive();
  };
  H.closeOverlay = function () { document.getElementById("overlay-root").innerHTML = ""; };

  /* ------------------------------------------------------------ Routeur */
  H.current = { view: "accueil", param: null };
  H.go = function (view, param) {
    const hash = "#" + view + (param ? "-" + param : "");
    if (location.hash === hash) H.route(); else location.hash = hash;
  };
  H.parseHash = function () {
    const h = (location.hash || "").replace(/^#/, "");
    if (!h) return { view: "accueil", param: null };
    const i = h.indexOf("-");
    return i === -1 ? { view: h, param: null } : { view: h.slice(0, i), param: h.slice(i + 1) };
  };
  H.markActive = function () {
    document.querySelectorAll(".nav-item[data-go], .bnav-item[data-go]").forEach(function (el) {
      const on = el.getAttribute("data-go") === H.current.view;
      el.classList.toggle("active", on);
      if (on) el.setAttribute("aria-current", "page"); else el.removeAttribute("aria-current");
    });
  };
  H.route = function () {
    const r = H.parseHash();
    const view = H.views[r.view] ? r.view : "accueil";
    H.current = { view: view, param: r.param };
    const main = document.getElementById("main");
    main.innerHTML = H.views[view].render(r.param);
    if (H.views[view].after) H.views[view].after(r.param);
    main.scrollTop = 0;
    H.closeOverlay();
    H.markActive();
    const t = main.querySelector(".page-title, .home-title");
    document.title = (t ? t.textContent.replace(/\s+/g, " ").trim() + " · " : "") + "Dojang Path Hapkido";
  };
})();

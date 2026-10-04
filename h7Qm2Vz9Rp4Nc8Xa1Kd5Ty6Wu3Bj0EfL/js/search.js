/* =====================================================================
   RECHERCHE GLOBALE — instantanée, côté client, multi-champs
   (romanisation, hangeul, français, catégorie, grade, épreuves, règlements)
   ===================================================================== */
(function () {
  const H = window.HKD;
  const esc = H.esc;
  let index = null;

  function build() {
    const idx = [];
    H.lexique.forEach(function (l) {
      const cat = H.lexCategories.find(function (c) { return c.id === l.c; });
      idx.push({ type: "Lexique", title: l.r + (l.h ? "  " + l.h : ""), sub: l.f + " · " + (cat ? cat.nom : ""), hay: [l.r, l.h, l.f, (l.v || []).join(" "), cat && cat.nom, (l.g || []).map(function (g) { return g + " dan"; }).join(" ")].join(" "), act: { lex: l.r } });
    });
    H.grades.forEach(function (g) {
      g.modules.forEach(function (m) {
        m.epreuves.forEach(function (e) {
          idx.push({ type: g.nom, title: e.titre + (e.ko ? " — " + e.ko : ""), sub: "Module " + m.code + " · " + m.nom + " · " + e.points + " pts", hay: [e.titre, e.ko, g.nom, "module " + m.code, m.nom, (e.consigne || []).join(" ")].join(" "), act: { go: "dan", param: g.id, scroll: "mod-" + m.code } });
          const items = (e.items || []).map(function (it) { return { it: it, gr: null }; });
          (e.groupes || []).forEach(function (gr) { (gr.items || []).forEach(function (it) { items.push({ it: it, gr: gr }); }); });
          items.forEach(function (x) {
            idx.push({ type: g.nom, title: x.it.fr, sub: (x.it.ko ? x.it.ko + " · " : "") + "Module " + m.code + " · " + (x.gr ? x.gr.titre : e.titre), hay: [x.it.fr, x.it.ko, g.nom, e.titre, x.gr && x.gr.titre].join(" "), act: { go: "dan", param: g.id, scroll: "mod-" + m.code } });
          });
        });
      });
    });
    Object.keys(H.reglements).forEach(function (k) {
      const R = H.reglements[k];
      R.sections.forEach(function (s) {
        const txt = s.blocs.map(function (b) { return typeof b.v === "string" ? b.v : JSON.stringify(b.v || b.rows || ""); }).join(" ");
        idx.push({ type: "Règlement", title: s.titre, sub: R.titre, hay: [s.titre, R.titre, txt].join(" "), act: { go: k, scroll: "sec-" + s.id, open: true } });
      });
    });
    H.nav.forEach(function (g) { g.items.forEach(function (it) { idx.push({ type: "Page", title: it.label, sub: g.group, hay: it.label + " " + g.group, act: { go: it.id } }); }); });
    idx.forEach(function (x) { x.n = H.norm(x.hay); x.nt = H.norm(x.title); });
    return idx;
  }

  function searchIdx(q) {
    const nq = H.norm(q);
    if (!nq) return [];
    const toks = nq.split(" ");
    const raw = q.trim();
    return index.filter(function (x) {
      return toks.every(function (t) { return x.n.includes(t); }) || (raw && x.hay.includes(raw));
    }).map(function (x) {
      let score = 0;
      if (x.nt === nq) score += 100;
      if (x.nt.startsWith(nq)) score += 40;
      if (x.nt.includes(nq)) score += 20;
      if (x.type === "Lexique") score += 5;
      return { x: x, score: score };
    }).sort(function (a, b) { return b.score - a.score; }).slice(0, 40).map(function (r) { return r.x; });
  }

  H.openSearch = function () {
    if (!index) index = build();
    const root = document.getElementById("overlay-root");
    root.innerHTML = '<div class="search-overlay" data-close-search><div class="search-panel" role="dialog" aria-modal="true" aria-label="Recherche">' +
      '<label for="gsearch" class="sr-only">Rechercher une technique ou un terme</label><input id="gsearch" class="input" type="search" autocomplete="off" placeholder="🔎 Rechercher une technique ou un terme…">' +
      '<div class="search-results" id="gsearch-results"><div class="search-empty">Romanisation (« tchagi »), français (« chute »), hangeul (« 낙법 »), grade (« 3e dan »), règle (« gam-jeom »)…</div></div></div></div>';
    const inp = document.getElementById("gsearch");
    const res = document.getElementById("gsearch-results");
    inp.focus();
    inp.addEventListener("input", function () {
      const list = searchIdx(inp.value);
      if (!inp.value.trim()) { res.innerHTML = '<div class="search-empty">Saisissez un terme.</div>'; return; }
      res.innerHTML = list.length ? list.map(function (x, i) {
        return '<button class="sr-item" type="button" data-sr="' + index.indexOf(x) + '"><span class="sr-type">' + esc(x.type) + '</span><span class="sr-main"><span class="sr-title" style="display:block">' + esc(x.title) + '</span><span class="sr-sub">' + esc(x.sub) + "</span></span></button>";
      }).join("") : '<div class="search-empty">Aucun résultat dans les documents fournis.</div>';
    });
    inp.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { const first = res.querySelector("[data-sr]"); if (first) first.click(); }
      if (e.key === "ArrowDown") { const first = res.querySelector("[data-sr]"); if (first) { e.preventDefault(); first.focus(); } }
    });
  };

  H.runSearchResult = function (i) {
    const x = index[i]; if (!x) return;
    H.closeOverlay();
    if (x.act.lex) { H.lexState.q = x.act.lex; H.lexState.cat = "all"; H.lexState.grade = "all"; H.go("lexique"); return; }
    H.go(x.act.go, x.act.param);
    if (x.act.scroll) setTimeout(function () {
      const el = document.getElementById(x.act.scroll);
      if (el) { if (x.act.open && el.tagName === "DETAILS") el.open = true; el.scrollIntoView({ block: "start" }); }
    }, 60);
  };
})();

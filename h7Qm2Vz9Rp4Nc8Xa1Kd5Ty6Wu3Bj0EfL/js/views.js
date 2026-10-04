/* =====================================================================
   VUES — accueil, grades, keup, lexique, armes, règlements, synthèse,
   mémoire, tenue, sources. (Examen blanc : exam.js · Révision : revision.js)
   ===================================================================== */
(function () {
  const H = window.HKD;
  const esc = H.esc;
  H.views = H.views || {};

  H.header = function (title, subtitle, crumbs) {
    return '<header class="page-header">' +
      (crumbs ? '<div class="breadcrumb">' + crumbs.map(function (c, i) {
        const last = i === crumbs.length - 1;
        return (i ? '<span class="sep">›</span>' : "") + (last ? '<span class="cur">' + esc(c[0]) + "</span>" : '<button type="button" data-go="' + c[1] + '">' + esc(c[0]) + "</button>");
      }).join("") + "</div>" : "") +
      '<h1 class="page-title">' + title + "</h1>" + (subtitle ? '<p class="page-subtitle">' + subtitle + "</p>" : "") + "</header>";
  };

  const MODE_LABEL = { impose: "Imposé", choix: "Au choix", tirage: "Tirage au sort", qcm: "QCM", ecrit: "Écrit + oral", demo: "Démonstration" };
  H.modeBadge = function (m) { return '<span class="mode mode-' + m + '">' + MODE_LABEL[m] + "</span>"; };

  function itemsHTML(items, withStar) {
    if (!items || !items.length) return "";
    return '<ul class="items">' + items.map(function (it) {
      const key = it.ko || it.fr;
      return '<li class="item" style="position:relative"><span class="item-bullet" aria-hidden="true"></span><span class="item-text">' + esc(it.fr) +
        (it.ko ? '<span class="item-ko">' + esc(it.ko) + "</span>" : "") + "</span>" +
        (withStar && it.ko ? H.starBtn(key, it.fr).replace('class="star"', 'class="star" style="position:static"') : "") + "</li>";
    }).join("") + "</ul>";
  }
  H.itemsHTML = itemsHTML;

  /* ================================================================ ACCUEIL */
  H.views.accueil = {
    render: function () {
      const nbLex = H.lexique.filter(function (l) { return l.s.d === "lex"; }).length;
      const widgets = [
        { go: "dan", icon: "⬛", sub: "Ceintures noires", t: "Programmes Dan", d: "Du 1er au 6e Dan : conditions, modules A, B et C, épreuves, barèmes et seuils de validation.", col: "#c9a84c", st: "ok" },
        { go: "examen", icon: "📝", sub: "Simulation", t: "Examen blanc", d: "Tirage au sort des techniques selon les règles écrites des programmes, et QCM d’entraînement.", col: "#e3ac4f", st: "ok" },
        { go: "revision", icon: "🔁", sub: "Mémorisation", t: "Révision", d: "Cartes, révision rapide « Je connais / À revoir », QCM par thème et liste personnelle.", col: "#79a6e0", st: "ok" },
        { go: "lexique", icon: "📖", sub: "Terminologie", t: "Lexique", d: nbLex + " termes de l’Annexe 1 en hangeul, romanisation et français, plus le vocabulaire d’arbitrage.", col: "#5cb89f", st: "ok" },
        { go: "arbitrage", icon: "⚖️", sub: "Règlements 2025", t: "Combat & technique", d: "Points, sanctions, durées, notation -0,1 / -0,3 / -1 / +0,3 : les règles présentées en fiches.", col: "#d97272", st: "ok" },
        { go: "memoire", icon: "✍️", sub: "Hauts grades", t: "Mémoire 5e / 6e Dan", d: "Recevabilité, plan, soutenance, tuteur : la note de rédaction de l’Annexe 4.", col: "#b39ddb", st: "ok" }
      ];
      return '<section class="home-hero"><div class="home-hero-inner"><div>' +
        '<div class="home-eyebrow">Hapkido · FFTDA</div>' +
        '<h1 class="home-title">Dojang Path — <span>Hapkido</span></h1>' +
        '<p class="home-sub">Préparation aux passages de grade et révision Hapkido FFTDA.</p>' +
        '<div class="home-official">● Données basées sur les documents FFTDA fournis · ' + esc(H.referentiel.libelle) + "</div>" +
        '<div class="home-values" aria-label="Principes du Hapkido (Annexe 1)">' +
        ["Won Li|원리|Principe", "Yu|유|Fluidité", "Won|원|Cercle", "Hwa|화|Harmonie"].map(function (v) {
          const p = v.split("|"); return '<span class="value-chip"><span class="ko">' + p[1] + "</span> " + p[0] + " · " + p[2] + "</span>";
        }).join("") + "</div></div>" + H.emblem(190, "emblem") + "</div></section>" +
        '<div class="content">' +
        '<div class="home-widgets">' + widgets.map(function (w) {
          return '<button class="widget" type="button" data-go="' + w.go + '" style="--card-color:' + w.col + '"><span class="widget-arrow" aria-hidden="true">→</span>' +
            '<span class="widget-icon" aria-hidden="true">' + w.icon + '</span><span class="widget-sub">' + w.sub + '</span><span class="widget-title">' + w.t + '</span><span class="widget-desc">' + w.d + "</span></button>";
        }).join("") + "</div>" +
        '<div class="info-bar"><span class="dot" aria-hidden="true"></span><div><strong>Comment lire l’application.</strong> Les contenus marqués <span class="official-mark">Source FFTDA</span> sont repris des documents officiels fournis, avec la page d’origine. Les outils (examen blanc, cartes, QCM) sont des aides pédagogiques créées par l’application. Les points marqués ⚠️ signalent une contradiction ou une information absente : consultez la page <button type="button" data-go="sources" style="color:var(--accent);text-decoration:underline">Sources officielles</button>.</div></div>' +
        '<div><div class="section-title">Grades documentés</div><div class="grid grid-auto">' + H.grades.map(danCard).join("") + "</div></div>" +
        "</div>";
    }
  };

  function danCard(g) {
    const t = H.gradeTotals(g);
    return '<button class="dan-card" type="button" data-go="dan" data-param="' + g.id + '">' +
      '<span class="dan-top"><span class="dan-badge">' + g.num + '°</span><span><span class="dan-name" style="display:block">' + esc(g.nom) + '</span><span class="dan-ko">' + esc(g.titreCoreen) + "</span></span></span>" +
      '<span class="dan-meta">' + g.nbEpreuves + " épreuves · " + t.total + " points · " + esc(g.organisation) + "</span>" +
      '<span class="tags">' + g.modules.map(function (m) { return '<span class="tag">' + m.code + " · " + esc(m.nom) + " /" + m.points + "</span>"; }).join("") + "</span></button>";
  }

  /* ================================================================ DAN */
  H.views.dan = {
    render: function (param) {
      if (param) { const g = H.grade(param); if (g) return danDetail(g); }
      return H.header("Dan — <span>Ceintures noires</span>", "Programmes des examens de Dan Hapkido — modules A, B et C. " + esc(H.referentiel.detail.split("·")[0]), [["Accueil", "accueil"], ["Dan"]]) +
        '<div class="content"><div class="grid grid-auto">' + H.grades.map(danCard).join("") + "</div>" +
        '<div class="note"><b>Préalables communs (Annexe 2) :</b> ' + esc(H.prealables.texte) + " " + H.srcTag(H.prealables.src) + "</div>" +
        H.alertHTML("age-dan-xmind") + "</div>";
    }
  };

  function epreuveHTML(e, g) {
    let body = "";
    (e.consigne || []).forEach(function (c) { body += "<p>" + esc(c) + "</p>"; });
    if (e.itemsTitre) body += '<p style="color:var(--text)">' + esc(e.itemsTitre) + "</p>";
    body += itemsHTML(e.items, true);
    (e.groupes || []).forEach(function (gr) {
      body += '<div class="sub-group"><div class="sub-group-title">' + esc(gr.titre) + (gr.ko ? '<span class="ko-r">' + esc(gr.ko) + "</span>" : "") +
        (gr.points ? '<span class="pts">' + gr.points + " pts</span>" : "") + (gr.tirage ? H.modeBadge("tirage") : "") + "</div>" +
        (gr.consigne ? '<p>' + esc(gr.consigne) + "</p>" : "") + itemsHTML(gr.items, true) +
        (gr.tirage && gr.tirage.alerte ? H.alertHTML(gr.tirage.alerte) : "") + "</div>";
    });
    if (e.tirage && e.tirage.alerte) body += H.alertHTML(e.tirage.alerte);
    (e.notes || []).forEach(function (n) { body += '<div class="note">' + esc(n) + "</div>"; });
    if (e.renvoi) body += '<div class="note">' + esc(e.renvoi) + "</div>";
    if (e.manque) body += H.missingHTML(e.manque, "Contenu du QCM non disponible dans les documents fournis.");
    if (e.nonSimule) body += '<div class="note"><b>Examen blanc :</b> ' + esc(e.nonSimule) + "</div>";
    if (e.qcm) body += '<div class="btn-row"><button class="btn btn-sm" type="button" data-go="revision" data-param="qcm.' + e.qcm + '">S’entraîner au QCM « ' + esc(H.qcmThemes[e.qcm].nom) + " »</button></div>";
    if (e.lienMemoire) body += '<div class="btn-row"><button class="btn btn-sm" type="button" data-go="memoire">Voir la note de rédaction (Annexe 4)</button></div>';
    body += H.alertsFor(e.alertes);
    body += H.srcTag(e.src);
    return '<article class="epreuve"><div class="epreuve-head"><span class="epreuve-title">' + esc(e.titre) + (e.ko ? '<span class="ko-r">' + esc(e.ko) + "</span>" : "") + "</span>" +
      H.modeBadge(e.mode) + '<span class="pts">' + e.points + " pts</span></div><div class=\"epreuve-body\">" + body + "</div></article>";
  }

  function danDetail(g) {
    const t = H.gradeTotals(g);
    const others = H.grades.filter(function (x) { return x.id !== g.id; });
    let h = H.header(esc(g.nom) + ' <span class="ko-title" style="font-size:.6em;color:var(--accent2);font-style:italic;font-family:var(--f-body)">' + esc(g.titreCoreen) + "</span>",
      esc(g.organisation) + " · " + g.nbEpreuves + " épreuves réparties sur trois modules", [["Dan", "dan"], [g.nom]]);
    h += '<div class="content">';
    h += '<div class="btn-row"><button class="back-btn" type="button" data-go="dan">← Retour aux Dan</button>' +
      '<button class="btn btn-sm btn-primary" type="button" data-go="examen" data-param="' + g.id + '">📝 Examen blanc ' + esc(g.nom) + "</button>" +
      '<span class="official-mark" style="align-self:center">Source FFTDA — ' + esc(H.sources["ex" + g.id].court) + "</span></div>";

    h += '<div class="summary-strip">' +
      '<div class="stat"><div class="stat-label">Total</div><div class="stat-value">' + t.total + " <small>points</small></div></div>" +
      g.modules.map(function (m) {
        return '<div class="stat"><div class="stat-label">Module ' + m.code + '</div><div class="stat-value">' + m.points + " <small>validé à " + m.seuil + "</small></div></div>";
      }).join("") + "</div>";

    h += '<div class="grid grid-2"><div class="card"><div class="section-title">Conditions</div><ul class="ul-clean">' +
      g.conditions.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" +
      '<div style="margin-top:12px;display:flex;flex-direction:column;gap:10px">' + H.alertsFor(g.conditionsAlertes) + H.srcTag(g.src) + "</div></div>" +
      '<div class="card"><div class="section-title">Modalités</div><p class="lead small" style="font-size:14px">' + esc(g.modalites) + "</p>" +
      (g.nbEpreuvesNote ? '<div class="note" style="margin-top:10px">' + esc(g.nbEpreuvesNote) + "</div>" : "") +
      '<div style="margin-top:12px">' + H.srcTag(g.src) + "</div>" +
      '<div style="margin-top:8px">' + H.srcTag(g.titreSrc, "Titre " + esc(g.titreCoreen)) + "</div></div></div>";

    h += '<div class="module-tabs" role="navigation" aria-label="Modules">' + g.modules.map(function (m) {
      return '<button class="module-tab" type="button" data-scroll="mod-' + m.code + '"><b>Module ' + m.code + "</b>" + esc(m.nom) + "</button>";
    }).join("") + "</div>";

    g.modules.forEach(function (m) {
      const pct = 100, seuilPct = Math.round(m.seuil / m.points * 100);
      h += '<section class="module-block" id="mod-' + m.code + '"><div class="module-head"><h2 class="module-name"><em>Module ' + m.code + "</em> — " + esc(m.nom) + "</h2>" +
        '<div class="meter"><span>' + m.points + ' pts</span><span class="meter-bar" aria-hidden="true"><span style="width:' + pct + '%;opacity:.35"></span><i style="left:' + seuilPct + '%"></i></span><span>seuil ' + m.seuil + "</span></div></div>" +
        '<p class="muted small">' + esc(m.resume) + "</p>" + H.alertsFor(m.alertes);
      if (m.partenaire) h += '<details class="acc"><summary>Partenaire de l’épreuve</summary><div class="acc-body">' + H.partenaireModuleC.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + H.srcTag(m.src) + "</div></details>";
      m.epreuves.forEach(function (e) { h += epreuveHTML(e, g); });
      h += "</section>";
    });

    h += '<div class="card"><div class="section-title">Décision</div><ul class="ul-clean">' + g.decision.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul></div>";
    h += '<div><div class="section-title">Autres grades</div><div class="chips">' + others.map(function (o) { return '<button class="chip" type="button" data-go="dan" data-param="' + o.id + '">' + esc(o.nom) + "</button>"; }).join("") + "</div></div>";
    return h + "</div>";
  }

  /* ================================================================ KEUP */
  H.views.keup = {
    render: function () {
      return H.header("Keup — <span>Ceintures de couleur</span>", "Rubrique prévue dans la structure de l’application (XMind : Keup › Adultes +16 ans).", [["Accueil", "accueil"], ["Keup"]]) +
        '<div class="content"><div class="module-tabs"><button class="module-tab active" type="button"><b>Adultes</b>+16 ans</button></div>' +
        H.missingHTML("Aucun programme Keup Hapkido ne figure parmi les documents fournis. Cette rubrique sera complétée lorsqu’une source FFTDA correspondante sera disponible.", "⚠️ Contenu non disponible dans les documents officiels fournis.") +
        '<div class="note"><b>Seul élément documenté :</b> ' + esc(H.keup.seulFait.texte) + " " + H.srcTag(H.keup.seulFait.src) + "</div>" +
        H.srcTag({ d: "xmind" }, "Rubrique") + "</div>";
    }
  };

  /* ================================================================ LEXIQUE */
  const lexState = H.lexState = { q: "", cat: "all", grade: "all" };
  function lexFiltered() {
    const q = H.norm(lexState.q);
    return H.lexique.filter(function (l) {
      if (lexState.cat !== "all" && l.c !== lexState.cat) return false;
      if (lexState.grade !== "all" && !(l.g || []).includes(Number(lexState.grade))) return false;
      if (!q) return true;
      const cat = H.lexCategories.find(function (c) { return c.id === l.c; });
      return H.norm([l.r, l.h, l.f, (l.v || []).join(" "), cat ? cat.nom : ""].join(" ")).includes(q) || (l.h && l.h.includes(lexState.q.trim()));
    });
  }
  function hl(text) {
    const q = lexState.q.trim();
    const t = esc(text);
    if (q.length < 2) return t;
    const nq = H.norm(q);
    // surlignage simple insensible à la casse (sans gestion des accents pour rester exact)
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return nq ? t.replace(re, "<mark>$1</mark>") : t;
  }
  H.lexCard = function (l, opts) {
    const cat = H.lexCategories.find(function (c) { return c.id === l.c; });
    const key = l.r;
    return '<article class="lex-card">' + H.starBtn(key, l.r) +
      '<div class="lex-r">' + hl(l.r) + "</div>" + (l.h ? '<div class="lex-h" lang="ko">' + esc(l.h) + "</div>" : "") +
      '<div class="lex-f' + (l.ctx ? " ctx" : "") + '">' + (l.ctx ? "Usage : " : "") + hl(l.f) + "</div>" +
      (l.v ? l.v.map(function (v) { return '<div class="lex-v">Variante : ' + esc(v) + "</div>"; }).join("") : "") +
      '<div class="lex-meta"><span class="tag">' + esc(cat ? cat.nom : l.c) + "</span>" + (l.g ? '<span class="tag">' + l.g.map(function (n) { return n + (n === 1 ? "er" : "e") + " Dan"; }).join(" · ") + "</span>" : "") + "</div>" +
      H.srcTag(l.s) + "</article>";
  };
  function renderLexList() {
    const list = lexFiltered();
    const el = document.getElementById("lex-list");
    const cnt = document.getElementById("lex-count");
    if (!el) return;
    cnt.textContent = list.length + " terme" + (list.length > 1 ? "s" : "") + " affiché" + (list.length > 1 ? "s" : "");
    el.innerHTML = list.length ? list.map(function (l) { return H.lexCard(l); }).join("") : '<div class="search-empty">Aucun terme ne correspond. Essayez une romanisation (ex. « tchagi »), un mot français ou du hangeul.</div>';
  }
  H.views.lexique = {
    render: function (param) {
      if (param && H.lexCategories.some(function (c) { return c.id === param; })) lexState.cat = param;
      return H.header("Lexique <span>Hapkido</span>", "Annexe 1 — Lexique terminologique du Hapkido (orthographe et traductions à l’identique), complété par le vocabulaire des règlements et des programmes.", [["Accueil", "accueil"], ["Lexique"]]) +
        '<div class="content"><div class="lex-toolbar">' +
        '<div class="field"><label for="lex-q">Rechercher dans le lexique</label><input id="lex-q" class="input" type="search" autocomplete="off" placeholder="🔎 Rechercher une technique ou un terme… (romanisation, français, hangeul)" value="' + esc(lexState.q) + '"></div>' +
        '<div class="chips" role="group" aria-label="Catégories"><button class="chip' + (lexState.cat === "all" ? " active" : "") + '" type="button" data-lexcat="all">Tout</button>' +
        H.lexCategories.map(function (c) { return '<button class="chip' + (lexState.cat === c.id ? " active" : "") + '" type="button" data-lexcat="' + c.id + '">' + esc(c.nom) + "</button>"; }).join("") + "</div>" +
        '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end"><div class="field" style="min-width:200px"><label for="lex-grade">Termes cités dans le programme de</label><select id="lex-grade" class="input"><option value="all">Tous les grades</option>' +
        H.grades.map(function (g) { return '<option value="' + g.num + '"' + (lexState.grade === String(g.num) ? " selected" : "") + ">" + esc(g.nom) + "</option>"; }).join("") + "</select></div>" +
        '<span class="lex-count" id="lex-count"></span></div></div>' +
        H.alertHTML("ortho-romanisation") +
        '<div class="lex-list" id="lex-list"></div></div>';
    },
    after: function () {
      renderLexList();
      const q = document.getElementById("lex-q");
      q.addEventListener("input", function () { lexState.q = q.value; renderLexList(); });
      document.getElementById("lex-grade").addEventListener("change", function (e) { lexState.grade = e.target.value; renderLexList(); });
      document.querySelectorAll("[data-lexcat]").forEach(function (b) {
        b.addEventListener("click", function () {
          lexState.cat = b.getAttribute("data-lexcat");
          document.querySelectorAll("[data-lexcat]").forEach(function (x) { x.classList.toggle("active", x === b); });
          renderLexList();
        });
      });
    }
  };

  /* ================================================================ ARMES */
  H.views.armes = {
    render: function () {
      const lex = H.lexique.filter(function (l) { return l.c === "armes"; });
      const prog = [
        ["1", "C", "defense", "Défense contre une attaque au couteau (5 techniques tirées au sort)"],
        ["2", "C", "danbong", null], ["2", "C", "jukdo", null],
        ["3", "C", "ceinture", null],
        ["4", "C", "canne", null],
        ["5", "C", "avecarme", "Défense avec une arme (canne, ceinture ou bâton) — 10 techniques"],
        ["5", "C", "contrearme", "Défense contre une arme (revolver, bâton court, bâton long, sabre bambou…) — 10 techniques"],
        ["6", "C", "demo", "Démonstration : « des techniques de Hoshinsool avec ou sans armes » parmi les items possibles"]
      ];
      const rows = prog.map(function (p) {
        const g = H.grade(p[0]); const m = g.modules.find(function (x) { return x.code === p[1]; });
        const e = m.epreuves.find(function (x) { return x.id === p[2]; });
        return "<tr><td>" + esc(g.nom) + "</td><td>" + esc(p[3] || (e.titre + (e.ko ? " (" + e.ko + ")" : ""))) + '</td><td class="num">' + (p[2] === "defense" ? "10" : e.points) + ' pts</td><td><button class="btn btn-sm btn-ghost" type="button" data-go="dan" data-param="' + g.id + '">Voir</button><br>' + H.srcTag(e.src) + "</td></tr>";
      }).join("");
      return H.header("Armes — <span>Mu Gi Sool</span>", "Rubrique de la structure (XMind : Armes), alimentée par le lexique, les programmes de Dan et le règlement technique.", [["Accueil", "accueil"], ["Armes"]]) +
        '<div class="content"><div><div class="section-title">Vocabulaire des armes (Annexe 1)</div><div class="lex-list">' + lex.map(function (l) { return H.lexCard(l); }).join("") + "</div></div>" +
        '<div><div class="section-title">Travail avec ou contre une arme dans les programmes</div><div class="table-wrap"><table class="t"><thead><tr><th>Grade</th><th>Épreuve</th><th class="num">Barème</th><th>Source</th></tr></thead><tbody>' + rows + "</tbody></table></div></div>" +
        '<div class="card"><div class="section-title">Compétition technique : « techniques avec arme »</div><p class="lead" style="font-size:14px">Sous-catégorie réservée aux paires Seniors et Masters. Sont considérées comme techniques avec arme toutes les techniques avec armes traditionnelles ainsi que les techniques de défense contre armes :</p>' +
        '<ul class="ul-clean" style="margin-top:10px"><li>Techniques contre-couteau ou contre sabre (Keom)</li><li>Techniques avec ceinture (Pobak) ou corde</li><li>Techniques avec bâton court (Danbong)</li><li>Techniques avec éventails</li><li>Techniques avec canne (Jipang) ou bâton long (Jangbong)</li></ul><div style="margin-top:12px">' + H.srcTag({ d: "jt", p: 5 }) + "</div></div></div>";
    }
  };

  /* ================================================================ RÈGLEMENTS */
  function blocHTML(b) {
    if (b.t === "p") return "<p>" + esc(b.v) + "</p>";
    if (b.t === "note") return '<div class="note">' + esc(b.v) + "</div>";
    if (b.t === "ul") return '<ul class="ul-clean">' + b.v.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    if (b.t === "kv") return '<div class="kv">' + b.v.map(function (x) { return '<div class="k">' + esc(x[0]) + '</div><div class="v">' + esc(x[1]) + "</div>"; }).join("") + "</div>";
    if (b.t === "table") return '<div class="table-wrap"><table class="t"><thead><tr>' + b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      b.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    return "";
  }
  function reglementView(key, icon) {
    return {
      render: function () {
        const R = H.reglements[key];
        const doc = H.sources[R.source];
        const others = [["competition", "Compétition"], ["arbitrage", "Arbitrage combat"], ["jugement", "Jugement technique"]].filter(function (o) { return o[0] !== key; });
        return H.header(esc(R.titre), esc(doc.titre) + " — " + esc(doc.version), [["Règlements", key], [R.titre]]) +
          '<div class="content"><p class="lead">' + esc(R.intro) + '</p><div class="btn-row"><span class="official-mark">Source FFTDA — ' + esc(doc.court) + " · " + esc(doc.version) + "</span>" +
          (key !== "competition" ? '<button class="btn btn-sm" type="button" data-go="revision" data-param="qcm.' + (key === "arbitrage" ? "combat" : "technique") + '">S’entraîner au QCM</button>' : "") + "</div>" +
          '<div class="chips" aria-label="Sommaire">' + R.sections.map(function (s) { return '<button class="chip" type="button" data-scroll="sec-' + s.id + '" data-open>' + esc(s.titre) + "</button>"; }).join("") + "</div>" +
          "<div>" + R.sections.map(function (s, i) {
            return '<details class="acc" id="sec-' + s.id + '"' + (i < 2 ? " open" : "") + "><summary>" + esc(s.titre) + '</summary><div class="acc-body">' + s.blocs.map(blocHTML).join("") + H.srcTag(s.src) + "</div></details>";
          }).join("") + "</div>" +
          '<div><div class="section-title">Autres règlements</div><div class="chips">' + others.map(function (o) { return '<button class="chip" type="button" data-go="' + o[0] + '">' + o[1] + "</button>"; }).join("") + "</div></div></div>";
      }
    };
  }
  H.views.competition = reglementView("competition");
  H.views.arbitrage = reglementView("arbitrage");
  H.views.jugement = reglementView("jugement");

  /* ================================================================ SYNTHÈSE */
  H.views.synthese = {
    render: function () {
      const S = H.synthese;
      const rowsPts = H.grades.map(function (g) {
        const t = H.gradeTotals(g);
        const m = {}; g.modules.forEach(function (x) { m[x.code] = x; });
        return "<tr><td>" + esc(g.nom) + '</td><td class="num">' + g.nbEpreuves + '</td><td class="num">' + m.A.points + " <span class=\"muted\">(" + m.A.seuil + ')</span></td><td class="num">' + m.B.points + " <span class=\"muted\">(" + m.B.seuil + ')</span></td><td class="num">' + m.C.points + " <span class=\"muted\">(" + m.C.seuil + ')</span></td><td class="num"><b style="color:var(--text)">' + t.total + "</b></td><td>" + esc(g.organisation) + '</td><td class="small">' + H.srcTag(g.src) + "</td></tr>";
      }).join("");
      const cols = [["Grade requis", "requis"], ["Années supp.", "annees"], ["Chutes", "chutes"], ["Percussions", "percussions"], ["Connaissances", "connaissances"], ["QCM", "qcm"], ["Mémoire / bilan", "memoire"], ["Saisies", "saisies"], ["Attaques", "attaques"], ["Défenses", "defenses"], ["Armes", "armes"], ["Combat", "combat"]];
      const rowsSyn = S.lignes.map(function (l) {
        return "<tr><td>" + esc(l.g) + '<br><span class="dan-ko">' + esc(l.titre) + "</span></td>" + cols.map(function (c) {
          return "<td" + (l[c[1]] ? "" : ' class="empty"') + ">" + (l[c[1]] ? esc(l[c[1]]) : "—") + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return H.header("Synthèse <span>des examens</span>", "Comparaison des grades : barèmes calculés depuis les programmes d’examen, et tableau de synthèse de l’Annexe 2.", [["Accueil", "accueil"], ["Synthèse"]]) +
        '<div class="content"><div><div class="section-title">Barèmes par module (programmes d’examen)</div><div class="table-wrap"><table class="t"><thead><tr><th>Grade</th><th class="num">Épreuves</th><th class="num">Module A (seuil)</th><th class="num">Module B (seuil)</th><th class="num">Module C (seuil)</th><th class="num">Total</th><th>Organisation</th><th>Source</th></tr></thead><tbody>' + rowsPts + "</tbody></table></div></div>" +
        H.alertHTML("4dan-points-moduleB") + H.alertHTML("2dan-nb-enchainements") +
        '<div><div class="section-title">Tableau de synthèse — Annexe 2</div><p class="muted small" style="margin-bottom:10px">' + esc(S.entetes.A) + " · " + esc(S.entetes.B) + " · " + esc(S.entetes.C) + '</p><div class="table-wrap"><table class="t"><thead><tr><th>Grade</th>' + cols.map(function (c) { return "<th>" + c[0] + "</th>"; }).join("") + "</tr></thead><tbody>" + rowsSyn + "</tbody></table></div>" +
        '<div style="margin-top:10px;display:flex;flex-direction:column;gap:8px"><div class="note"><b>Plus de 60 ans :</b> ' + S.amenagements60.map(esc).join(" · ") + "</div><div class=\"note\">" + esc(S.qcmDuree) + " · " + esc(S.partenaire) + "</div>" + H.srcTag(S.src) + "</div></div>" +
        H.alertHTML("6dan-20ans") + H.alertHTML("duree-combat-souple") +
        '<div><div class="section-title">Critères d’évaluation — Annexe 2</div><div class="table-wrap"><table class="t"><thead><tr><th>Épreuve</th><th>Barème indiqué</th><th>Critères notés par le jury</th></tr></thead><tbody>' +
        S.evaluation.lignes.map(function (l) { return "<tr><td>" + esc(l.epreuve) + '</td><td class="num">' + esc(l.bareme) + "</td><td>" + esc(l.criteres) + "</td></tr>"; }).join("") + '</tbody></table></div><div style="margin-top:10px">' + H.srcTag(S.evaluation.src) + "</div></div>" + H.alertHTML("chutes-points") + "</div>";
    }
  };

  /* ================================================================ MÉMOIRE */
  H.views.memoire = {
    render: function () {
      const M = H.memoire;
      return H.header("Mémoire <span>5e / 6e Dan</span>", "Annexe 4 — Note relative à la rédaction des écrits des examens de 5ème et 6ème Dan Hapkido.", [["Accueil", "accueil"], ["Mémoire 5e / 6e Dan"]]) +
        '<div class="content"><div class="summary-strip">' +
        '<div class="stat"><div class="stat-label">Envoi</div><div class="stat-value">30 j <small>avant l’examen</small></div></div>' +
        '<div class="stat"><div class="stat-label">Longueur</div><div class="stat-value">10–20 <small>pages A4</small></div></div>' +
        '<div class="stat"><div class="stat-label">Soutenance</div><div class="stat-value">10–15 <small>min + entretien 10–15</small></div></div>' +
        '<div class="stat"><div class="stat-label">Barème</div><div class="stat-value">40 <small>validé à 20</small></div></div></div>' +
        '<div class="card"><div class="section-title">Conditions de recevabilité</div><ul class="ul-clean">' + M.recevabilite.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div style="margin-top:12px">' + H.srcTag(M.recevabilite.src) + "</div></div>" +
        '<div class="grid grid-2"><div class="card"><div class="section-title">' + esc(M.bilan.titre) + '</div><p class="lead" style="font-size:14px">' + esc(M.bilan.texte) + '</p><div style="margin-top:12px">' + H.srcTag(M.bilan.src) + '</div></div><div class="card"><div class="section-title">' + esc(M.memoire.titre) + '</div><p class="lead" style="font-size:14px">' + esc(M.memoire.texte) + '</p><div style="margin-top:12px">' + H.srcTag(M.memoire.src) + "</div></div></div>" +
        '<div><div class="section-title">Plan attendu</div><div class="table-wrap"><table class="t"><thead><tr><th>Partie</th><th>Bilan réflexif (5e Dan)</th><th>Mémoire (6e Dan)</th></tr></thead><tbody>' +
        M.plan.etapes.map(function (e, i) {
          return "<tr><td>" + (i + 1) + ". " + esc(e.titre) + "</td>" + (e.commun ? '<td colspan="2">' + esc(e.commun) + "</td>" : "<td>" + esc(e.bilan) + "</td><td>" + esc(e.memoire) + "</td>") + "</tr>";
        }).join("") + '</tbody></table></div><div style="margin-top:10px">' + H.srcTag(M.plan.src) + "</div></div>" +
        '<div class="grid grid-2"><div class="card"><div class="section-title">Soutenance</div><ul class="ul-clean">' + M.soutenance.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div style="margin-top:12px">' + H.srcTag(M.soutenance.src) + '</div></div><div class="card"><div class="section-title">Sujet et tuteur</div><ul class="ul-clean">' + M.sujet.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div style="margin-top:12px;display:flex;flex-direction:column;gap:10px">' + H.alertHTML(M.sujet.alerte) + H.srcTag(M.sujet.src) + "</div></div></div>" +
        '<div class="card"><div class="section-title">Le tuteur</div><div class="kv"><div class="k">Rôle</div><div class="v">' + esc(M.tuteur.role) + '</div><div class="k">Profil</div><div class="v">' + esc(M.tuteur.profil) + '</div></div><div style="margin-top:12px">' + H.srcTag(M.tuteur.src) + "</div></div>" +
        '<div class="note">' + esc(M.bareme.texte) + " " + H.srcTag(M.bareme.src) + "</div>" +
        '<div class="btn-row"><button class="btn btn-sm" type="button" data-go="dan" data-param="5">Programme 5e Dan</button><button class="btn btn-sm" type="button" data-go="dan" data-param="6">Programme 6e Dan</button></div></div>';
    }
  };

  /* ================================================================ TENUE */
  H.views.tenue = {
    render: function () {
      const T = H.tenue, E = T.examen;
      const ICO = { Robustesse: "◆", Veste: "✕", Couleur: "●" };
      const cmp = [
        ["Forme de la veste", "Type « croisée »", "Type croisée ou veste Taekwondo"],
        ["Manches", "Longues", "Longues"],
        ["Couleur", "De préférence sobre : blanc, noir, gris, bleu foncé", "Non précisée"],
        ["Robustesse", "Suffisante pour résister aux projections, saisies et tirages", "Non précisée"],
        ["Marquages de style", "Inscriptions, écussons et marquages relatifs à un style de Hapkido autorisés", "Nom Hapkido et/ou du style de Hapkido au dos autorisé ; publicité interdite"],
        ["Ceinture", "Visible sur les exemples, non décrite dans le texte", "Ceinture exigée"]
      ];
      return H.header("Tenue <span>réglementaire</span>", "Annexe 3 — Dobok réglementaire pour les examens de Dan Hapkido, complété par les règles de tenue des compétitions.", [["Règlements", "competition"], ["Tenue"]]) +
        '<div class="content">' +
        '<div class="btn-row"><span class="official-mark">Source FFTDA — Annexe 3 · examens de Dan</span></div>' +
        '<div><div class="section-title">Caractéristiques du Dobok</div><div class="grid grid-3">' + E.caracteristiques.map(function (c) {
          return '<div class="card" style="display:flex;flex-direction:column;gap:8px"><span aria-hidden="true" style="width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:var(--accent-soft);color:var(--accent);font-size:16px">' + (ICO[c.k] || "•") + '</span><div class="dan-name">' + esc(c.k) + '</div><p class="lead" style="font-size:14px">' + esc(c.v) + "</p></div>";
        }).join("") + "</div></div>" +
        '<div class="info-bar"><span class="dot" aria-hidden="true"></span><div><strong>Marquages.</strong> ' + esc(E.marquage) + "</div></div>" +
        '<figure class="dobok-figure"><div class="dobok-row">' + E.images.map(function (im) { return '<img src="' + im.fichier + '" alt="' + esc(im.alt) + '" loading="lazy" decoding="async">'; }).join('<span class="dobok-sep" aria-hidden="true"></span>') + '</div><figcaption>' + esc(E.exemple) + " Illustrations reprises de l’Annexe 3 FFTDA.</figcaption></figure>" +
        H.srcTag(E.src) +
        '<div><div class="section-title">Examen de Dan ou compétition : ce qui change</div><div class="table-wrap"><table class="t"><thead><tr><th>Élément</th><th>Examens de Dan (Annexe 3)</th><th>Compétitions (règlement compétition)</th></tr></thead><tbody>' +
        cmp.map(function (r) { return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + '</td><td' + (r[2] === "Non précisée" ? ' class="empty"' : "") + ">" + esc(r[2]) + "</td></tr>"; }).join("") +
        '</tbody></table></div><div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:12px">' + H.srcTag(E.src) + H.srcTag({ d: "comp", p: 9 }) + "</div>" +
        '<p class="muted small" style="margin-top:8px">L’Annexe 3 vise les examens de Dan ; le règlement compétition vise les compétiteurs. Les deux textes ne s’appliquent pas au même contexte.</p></div>' +
        '<div class="grid grid-2"><div class="card"><div class="section-title">Compétiteurs — combat</div><ul class="ul-clean">' + T.competition.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div style="margin-top:12px">' + H.srcTag(T.competition.src) + '</div></div>' +
        '<div class="card"><div class="section-title">Compétiteurs — technique</div><ul class="ul-clean">' + T.technique.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div style="margin-top:12px">' + H.srcTag(T.technique.src) + "</div></div></div>" +
        '<div class="grid grid-2"><div class="card"><p class="lead" style="font-size:14px">' + esc(T.officiels.texte) + '</p><div style="margin-top:10px">' + H.srcTag(T.officiels.src) + '</div></div><div class="card"><p class="lead" style="font-size:14px">' + esc(T.coach.texte) + '</p><div style="margin-top:10px">' + H.srcTag(T.coach.src) + "</div></div></div>" +
        '<div class="btn-row"><button class="btn btn-sm" type="button" data-go="competition">Marquage détaillé sur le dobok (règlement compétition)</button><button class="btn btn-sm" type="button" data-go="revision" data-param="qcm.grades">QCM programmes et tenue</button></div></div>';
    }
  };

  /* ================================================================ SOURCES */
  const XMIND_TREE = [
    ["App HKD", 0], ["Keup", 1, "keup"], ["Adultes (+16 ans)", 2, "keup"], ["Dan", 1, "dan"], ["Adultes (+16 ans)", 2, "dan"],
    ["1er Dan → Examen_1er_Dan_Hapkido_FFTDA.pdf (modules A, B, C détaillés)", 3, "dan-1"],
    ["2ème Dan → Examen_2eme_Dan_Hapkido_FFTDA.pdf", 3, "dan-2"], ["3ème Dan → Examen_3eme_Dan_Hapkido_FFTDA.pdf", 3, "dan-3"],
    ["4ème Dan → Examen_4eme_Dan_Hapkido_FFTDA.pdf", 3, "dan-4"], ["5ème Dan → Examen_5eme_Dan_Hapkido_FFTDA.pdf", 3, "dan-5"],
    ["6ème Dan → Examen_6eme_Dan_Hapkido_FFTDA.pdf", 3, "dan-6"], ["Lexique", 1, "lexique"], ["Armes", 1, "armes"]
  ];
  H.views.sources = {
    render: function () {
      const st = { ok: '<span class="status ok">✓ Utilisé</span>', absent: '<span class="status none">✕ Non fourni</span>' };
      const byType = { contradiction: [], ambiguite: [], manque: [], orthographe: [] };
      H.conflicts.forEach(function (c) { byType[c.type].push(c); });
      return H.header("Sources <span>officielles</span>", "Documents sur lesquels repose l’application, et points nécessitant une validation humaine.", [["Accueil", "accueil"], ["Sources"]]) +
        '<div class="content"><div class="card"><div class="section-title">Référentiel utilisé</div><p class="lead" style="font-size:14px"><span class="official-mark">' + esc(H.referentiel.libelle) + "</span> " + esc(H.referentiel.detail) + "</p></div>" +
        '<div><div class="section-title">Documents</div><div class="table-wrap"><table class="t"><thead><tr><th>Document</th><th>Fichier</th><th>Version</th><th>Statut</th></tr></thead><tbody>' +
        H.sourcesOrdre.map(function (k) {
          const s = H.sources[k];
          return "<tr><td>" + esc(s.titre) + (s.remarque ? '<br><span class="muted small">' + esc(s.remarque) + "</span>" : "") + (s.role ? '<br><span class="muted small">' + esc(s.role) + "</span>" : "") + '</td><td class="small">' + esc(s.fichier) + (s.pages ? " · " + s.pages + " p." : "") + '</td><td class="small">' + esc(s.version || "—") + "</td><td>" + (st[s.statut] || "") + "</td></tr>";
        }).join("") + "</tbody></table></div></div>" +
        '<div class="grid grid-2"><div class="card"><div class="section-title">Données officielles</div><p class="lead" style="font-size:14px">Programmes, barèmes, techniques, termes et règles sont repris des documents FFTDA fournis. Chaque donnée conserve sa source (document et page du PDF). La mention « officiel » n’est jamais utilisée pour un contenu supposé ou reconstruit.</p></div>' +
        '<div class="card"><div class="section-title">Outils pédagogiques</div><p class="lead" style="font-size:14px">L’examen blanc, les cartes de révision, la révision rapide, les QCM et la liste « à réviser » sont des fonctionnalités de l’application. Leur contenu provient des documents ; leur mise en forme n’est pas officielle. Favoris et progression sont stockés uniquement sur cet appareil.</p></div></div>' +
        '<div id="alertes"><div class="section-title">Contradictions et points à vérifier (' + H.conflicts.length + ")</div><div style=\"display:flex;flex-direction:column;gap:10px\">" +
        ["contradiction", "ambiguite", "manque", "orthographe"].map(function (t) { return byType[t].map(function (c) { return H.alertHTML(c.id); }).join(""); }).join("") + "</div></div>" +
        '<div class="card"><div class="section-title">Structure de l’application (XMind)</div><ul class="items">' + XMIND_TREE.map(function (n) {
          return '<li class="item" style="padding-left:' + (n[1] * 18) + 'px"><span class="item-bullet" aria-hidden="true"></span><span class="item-text">' + esc(n[0]) + "</span>" + (n[2] ? '<button class="btn btn-sm btn-ghost" type="button" data-go="' + n[2].split("-")[0] + '"' + (n[2].indexOf("-") > -1 ? ' data-param="' + n[2].split("-")[1] + '"' : "") + ">Ouvrir</button>" : "") + "</li>";
        }).join("") + "</ul></div></div>";
    },
    after: function (param) {
      if (param === "alertes") { const el = document.getElementById("alertes"); if (el) el.scrollIntoView(); }
    }
  };
})();

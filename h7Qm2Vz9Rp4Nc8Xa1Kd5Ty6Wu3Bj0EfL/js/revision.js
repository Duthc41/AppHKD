/* =====================================================================
   RÉVISION — cartes / révision rapide, QCM par thème, liste à réviser,
   saisies des programmes (préparation 5e Dan). Progression stockée localement.
   ===================================================================== */
(function () {
  const H = window.HKD;
  const esc = H.esc;

  const st = { tab: "cartes", cat: "all", grade: "all", sens: "ko", onlyFav: false, queue: [], idx: 0, shown: false, theme: null };

  function deck() {
    return H.lexique.filter(function (l) {
      if (st.cat !== "all" && l.c !== st.cat) return false;
      if (st.grade !== "all" && !(l.g || []).includes(Number(st.grade))) return false;
      if (st.onlyFav && !H.favs.has(l.r)) return false;
      return true;
    });
  }
  function resetQueue() {
    const d = deck();
    const notMastered = d.filter(function (l) { return H.getProgress(l.r) < 2; });
    st.queue = H.shuffle(notMastered.length ? notMastered : d);
    st.idx = 0; st.shown = false;
  }

  function progressBar() {
    const d = deck(); const n = d.length || 1;
    const c = [0, 0, 0]; d.forEach(function (l) { c[H.getProgress(l.r)]++; });
    return '<div style="display:flex;flex-direction:column;gap:8px"><div class="stack-bar" role="img" aria-label="' + c[2] + " maîtrisés, " + c[1] + " en cours, " + c[0] + ' à apprendre">' +
      '<span style="width:' + (c[2] / n * 100) + '%;background:var(--accent)"></span><span style="width:' + (c[1] / n * 100) + '%;background:var(--warn)"></span></div>' +
      '<div class="progress-legend"><span><i class="pdot p2"></i>Maîtrisé : ' + c[2] + '</span><span><i class="pdot p1"></i>En cours : ' + c[1] + '</span><span><i class="pdot p0"></i>À apprendre : ' + c[0] + "</span></div></div>";
  }

  function cardHTML() {
    if (!st.queue.length) {
      return '<div class="flash"><div class="flash-front" style="font-size:22px">Aucune carte dans cette sélection</div><p class="muted">Changez de catégorie ou de grade, ou ajoutez des termes à votre liste avec ☆.</p></div>';
    }
    if (st.idx >= st.queue.length) {
      return '<div class="flash"><div class="flash-front" style="font-size:24px">Série terminée</div><p class="muted">Toutes les cartes de la sélection ont été vues.</p><button class="btn btn-primary" type="button" data-rev="restart">Nouvelle série</button></div>';
    }
    const l = st.queue[st.idx];
    const cat = H.lexCategories.find(function (c) { return c.id === l.c; });
    const front = st.sens === "ko" ? '<div class="flash-front">' + esc(l.r) + "</div>" + (l.h ? '<div class="flash-hangul" lang="ko">' + esc(l.h) + "</div>" : "")
      : '<div class="flash-front" style="font-size:24px">' + esc(l.f) + "</div>";
    const back = st.sens === "ko" ? (l.ctx ? "Usage : " : "") + esc(l.f) : esc(l.r) + (l.h ? ' <span class="ko" style="color:var(--accent2)">' + esc(l.h) + "</span>" : "");
    return '<div class="flash"><span class="flash-cat">' + esc(cat ? cat.nom : "") + " · " + (st.idx + 1) + " / " + st.queue.length + "</span>" + H.starBtn(l.r, l.r) + front +
      '<div class="flash-answer' + (st.shown ? "" : " hidden-ans") + '" aria-hidden="' + (!st.shown) + '">' + back + "</div>" +
      (st.shown ? H.srcTag(l.s) : '<button class="btn" type="button" data-rev="show">Afficher la réponse</button>') + "</div>" +
      '<div class="flash-actions"><button class="btn" type="button" data-rev="know">✓ Je connais</button><button class="btn" type="button" data-rev="again">↺ À revoir</button><button class="btn btn-ghost" type="button" data-rev="next">Suivante →</button></div>';
  }

  function cartesHTML() {
    return '<div class="grid grid-2" style="align-items:start"><div class="flash-wrap" id="flash-zone">' + cardHTML() + "</div>" +
      '<div class="card" style="display:flex;flex-direction:column;gap:14px"><div class="section-title" style="margin:0">Sélection</div>' +
      '<div class="field"><label for="rev-cat">Catégorie</label><select id="rev-cat" class="input"><option value="all">Toutes</option>' + H.lexCategories.map(function (c) { return '<option value="' + c.id + '"' + (st.cat === c.id ? " selected" : "") + ">" + esc(c.nom) + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label for="rev-grade">Termes cités dans le programme de</label><select id="rev-grade" class="input"><option value="all">Tous les grades</option>' + H.grades.map(function (g) { return '<option value="' + g.num + '"' + (st.grade === String(g.num) ? " selected" : "") + ">" + esc(g.nom) + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label for="rev-sens">Sens</label><select id="rev-sens" class="input"><option value="ko"' + (st.sens === "ko" ? " selected" : "") + '>Coréen → français</option><option value="fr"' + (st.sens === "fr" ? " selected" : "") + ">Français → coréen</option></select></div>" +
      '<label style="display:flex;gap:10px;align-items:center;font-size:14px;color:var(--text2)"><input type="checkbox" id="rev-fav"' + (st.onlyFav ? " checked" : "") + "> Seulement ma liste ⭐</label>" +
      '<div id="rev-progress">' + progressBar() + "</div>" +
      '<p class="muted small">« Je connais » marque la carte comme maîtrisée, « À revoir » comme en cours. La progression reste sur cet appareil et ne modifie pas les données officielles.</p>' +
      '<button class="btn btn-sm btn-ghost" type="button" data-rev="reset">Réinitialiser la progression de cette sélection</button></div></div>';
  }

  function qcmHTML() {
    return '<div class="grid grid-auto">' + Object.keys(H.qcmThemes).map(function (k) {
      const th = H.qcmThemes[k];
      const n = k === "lexique" ? H.lexique.filter(function (l) { return l.s.d === "lex"; }).length + " termes" : H.qcm.filter(function (q) { return q.t === k; }).length + " questions";
      return '<button class="dan-card" type="button" data-qtheme="' + k + '"><span class="dan-name">' + esc(th.nom) + '</span><span class="dan-meta">' + esc(th.sous) + " · " + n + '</span><span class="tags">' + th.grades.map(function (g) { return '<span class="tag">Module B · ' + g + (g === 1 ? "er" : "e") + " Dan</span>"; }).join("") + (th.partiel ? '<span class="status part">⚠️ Partiel</span>' : "") + "</span></button>";
    }).join("") + "</div>" +
      H.missingHTML("Les QCM « La FFTDA et la vie associative » (1er Dan) et « Le Hapkido au sein de la FFTDA et à l’échelle mondiale » (4e Dan) ne peuvent pas être proposés : leur contenu n’est pas présent dans les documents fournis.", "Thèmes non disponibles") +
      '<div id="qcm-zone"></div>';
  }

  function listeHTML() {
    const favLex = H.lexique.filter(function (l) { return H.favs.has(l.r); });
    const progLex = H.lexique.filter(function (l) { return H.getProgress(l.r) === 1 && !H.favs.has(l.r); });
    const progItems = [];
    H.grades.forEach(function (g) { g.modules.forEach(function (m) { m.epreuves.forEach(function (e) {
      const all = (e.items || []).slice();
      (e.groupes || []).forEach(function (gr) { (gr.items || []).forEach(function (x) { all.push(x); }); });
      all.forEach(function (it) {
        if (it.ko && H.favs.has(it.ko) && !H.lexique.some(function (l) { return l.r === it.ko; }) && !progItems.some(function (p) { return p.ko === it.ko; })) progItems.push({ ko: it.ko, fr: it.fr, g: g.nom, s: e.src });
      });
    }); }); });
    if (!favLex.length && !progLex.length && !progItems.length) {
      return '<div class="info-bar"><span class="dot"></span><div>Votre liste est vide. Touchez ☆ sur un terme du lexique, une carte ou une technique d’un programme pour l’ajouter. Les cartes marquées « À revoir » apparaissent aussi ici.</div></div>';
    }
    return (favLex.length ? '<div><div class="section-title">⭐ Termes à réviser (' + favLex.length + ')</div><div class="lex-list">' + favLex.map(function (l) { return H.lexCard(l); }).join("") + "</div></div>" : "") +
      (progItems.length ? '<div><div class="section-title">⭐ Techniques des programmes</div><div class="lex-list">' + progItems.map(function (p) {
        return '<article class="lex-card">' + H.starBtn(p.ko, p.fr) + '<div class="lex-r">' + esc(p.ko) + '</div><div class="lex-f">' + esc(p.fr) + '</div><div class="lex-meta"><span class="tag">' + esc(p.g) + "</span></div>" + H.srcTag(p.s) + "</article>";
      }).join("") + "</div></div>" : "") +
      (progLex.length ? '<div><div class="section-title">↺ Marqués « À revoir » (' + progLex.length + ')</div><div class="lex-list">' + progLex.map(function (l) { return H.lexCard(l); }).join("") + "</div></div>" : "");
  }

  function saisiesHTML() {
    const blocks = [
      { g: "1", path: ["C", "saisies"], titre: "1er Dan — Saisies (10 techniques imposées)" },
      { g: "2", path: ["C", "saisies"], titre: "2e Dan — Saisie au cou et position en tailleur" },
      { g: "3", path: ["C", "chaise"], titre: "3e Dan — Défense assis sur une chaise (saisies et attaques)" },
      { g: "4", path: ["C", "deux"], titre: "4e Dan — Défense contre deux adversaires" }
    ];
    return '<p class="lead">Au 5e Dan, le candidat réalise 20 techniques de défense contre une saisie « tirées au sort par le jury parmi toutes les saisies demandées dans les passages de grades du 1er au 4ème Dan », dans les 3 secondes qui suivent la saisie. Voici ce que les programmes fournis mentionnent, pour réviser.</p>' +
      '<div class="note"><b>À valider :</b> le programme ne fixe pas la liste exacte ni les règles de répétition du tirage ; cette page reprend les épreuves où des saisies sont citées et n’est pas une liste officielle. ' + H.srcTag({ d: "ex5", p: 2 }) + "</div>" +
      blocks.map(function (b) {
        const g = H.grade(b.g); const m = g.modules.find(function (x) { return x.code === b.path[0]; }); const e = m.epreuves.find(function (x) { return x.id === b.path[1]; });
        let inner = (e.consigne || []).map(function (c) { return '<p class="small" style="color:var(--text2)">' + esc(c) + "</p>"; }).join("") + H.itemsHTML(e.items, true);
        (e.groupes || []).forEach(function (gr) { inner += '<div class="sub-group"><div class="sub-group-title">' + esc(gr.titre) + (gr.ko ? '<span class="ko-r">' + esc(gr.ko) + "</span>" : "") + "</div>" + H.itemsHTML(gr.items, true) + "</div>"; });
        return '<article class="epreuve"><div class="epreuve-head"><span class="epreuve-title">' + esc(b.titre) + '</span></div><div class="epreuve-body">' + inner + H.srcTag(e.src) + "</div></article>";
      }).join("");
  }

  const TABS = [["cartes", "Cartes & révision rapide"], ["qcm", "QCM"], ["liste", "Ma liste"], ["saisies", "Saisies 1er–4e Dan"]];

  H.views.revision = {
    render: function (param) {
      if (param) {
        const p = param.split(".");
        if (TABS.some(function (t) { return t[0] === p[0]; })) st.tab = p[0];
        st.theme = p[1] || null;
      }
      if (st.tab === "cartes" && !st.queue.length) resetQueue();
      const body = st.tab === "cartes" ? cartesHTML() : st.tab === "qcm" ? qcmHTML() : st.tab === "liste" ? listeHTML() : saisiesHTML();
      return H.header("Révision", "Outils pédagogiques de l’application ; chaque contenu révisé provient des documents FFTDA fournis.", [["Accueil", "accueil"], ["Révision"]]) +
        '<div class="content"><div class="module-tabs" role="tablist">' + TABS.map(function (t) {
          return '<button class="module-tab' + (st.tab === t[0] ? " active" : "") + '" type="button" role="tab" aria-selected="' + (st.tab === t[0]) + '" data-revtab="' + t[0] + '"><b>' + esc(t[1]) + "</b></button>";
        }).join("") + "</div>" + body + "</div>";
    },
    after: function () {
      document.querySelectorAll("[data-revtab]").forEach(function (b) {
        b.addEventListener("click", function () { st.tab = b.getAttribute("data-revtab"); st.theme = null; H.go("revision", st.tab); });
      });
      if (st.tab === "cartes") bindCartes();
      if (st.tab === "qcm") {
        document.querySelectorAll("[data-qtheme]").forEach(function (b) {
          b.addEventListener("click", function () { launch(b.getAttribute("data-qtheme")); });
        });
        if (st.theme && H.qcmThemes[st.theme]) launch(st.theme);
      }
    }
  };

  function launch(theme) {
    const zone = document.getElementById("qcm-zone");
    const th = H.qcmThemes[theme];
    zone.innerHTML = (th.partiel ? '<div class="note" style="margin-bottom:12px">' + esc(th.partiel) + "</div>" : "") + '<div id="qcm-run"></div>';
    H.startQuiz(document.getElementById("qcm-run"), H.buildQuiz(theme, 10), th.nom);
    zone.scrollIntoView({ block: "start" });
  }

  function refreshCards() {
    const z = document.getElementById("flash-zone"); if (z) z.innerHTML = cardHTML();
    const p = document.getElementById("rev-progress"); if (p) p.innerHTML = progressBar();
  }
  function bindCartes() {
    ["rev-cat", "rev-grade", "rev-sens"].forEach(function (id) {
      const el = document.getElementById(id);
      el.addEventListener("change", function () {
        if (id === "rev-cat") st.cat = el.value; if (id === "rev-grade") st.grade = el.value; if (id === "rev-sens") st.sens = el.value;
        if (id !== "rev-sens") resetQueue(); else st.shown = false;
        refreshCards();
      });
    });
    document.getElementById("rev-fav").addEventListener("change", function (e) { st.onlyFav = e.target.checked; resetQueue(); refreshCards(); });
  }

  document.addEventListener("click", function (ev) {
    const b = ev.target.closest("[data-rev]");
    if (!b) return;
    const a = b.getAttribute("data-rev");
    const l = st.queue[st.idx];
    if (a === "show") st.shown = true;
    else if (a === "know" && l) { H.setProgress(l.r, 2); st.idx++; st.shown = false; }
    else if (a === "again" && l) { H.setProgress(l.r, 1); st.queue.push(l); st.idx++; st.shown = false; }
    else if (a === "next") { st.idx++; st.shown = false; }
    else if (a === "restart") resetQueue();
    else if (a === "reset") { deck().forEach(function (x) { delete H.progress[x.r]; }); H.store.set("progress", H.progress); resetQueue(); H.toast("Progression réinitialisée"); }
    refreshCards();
  });

  /* Raccourcis clavier en révision rapide */
  document.addEventListener("keydown", function (ev) {
    if (H.current.view !== "revision" || st.tab !== "cartes") return;
    if (ev.target.matches("input, select, textarea")) return;
    const map = { " ": "show", ArrowRight: "next", "1": "know", "2": "again" };
    const a = map[ev.key]; if (!a) return;
    const btn = document.querySelector('[data-rev="' + a + '"]');
    if (btn) { ev.preventDefault(); btn.click(); }
  });
})();

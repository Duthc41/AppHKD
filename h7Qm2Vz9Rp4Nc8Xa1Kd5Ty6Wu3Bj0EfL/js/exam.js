/* =====================================================================
   EXAMEN BLANC + MOTEUR DE QCM
   Le tirage applique strictement le nombre de techniques et le maximum par
   type écrits dans le programme ; rien n'est tiré quand la règle n'existe pas.
   ===================================================================== */
(function () {
  const H = window.HKD;
  const esc = H.esc;

  /* ------------------------------------------------------------ Tirage */
  H.draw = function (tirage) {
    const counts = {}; const out = [];
    for (let i = 0; i < tirage.n; i++) {
      const avail = tirage.pool.filter(function (p) { return (counts[p.label] || 0) < p.max; });
      if (!avail.length) break;
      const pick = avail[Math.floor(Math.random() * avail.length)];
      counts[pick.label] = (counts[pick.label] || 0) + 1;
      out.push(pick.label);
    }
    return out;
  };
  /* Vérifie qu'un tirage respecte la règle (utilisé par les tests) */
  H.checkDraw = function (tirage, res) {
    if (res.length !== tirage.n) return false;
    const c = {}; res.forEach(function (l) { c[l] = (c[l] || 0) + 1; });
    return tirage.pool.every(function (p) { return (c[p.label] || 0) <= p.max; }) && res.every(function (l) { return tirage.pool.some(function (p) { return p.label === l; }); });
  };

  /* Liste des tirages d'un grade : clé → objet tirage */
  function tiragesOf(g) {
    const list = [];
    g.modules.forEach(function (m) {
      m.epreuves.forEach(function (e) {
        if (e.tirage) list.push({ key: m.code + "." + e.id, t: e.tirage });
        (e.groupes || []).forEach(function (gr, i) { if (gr.tirage) list.push({ key: m.code + "." + e.id + "." + i, t: gr.tirage }); });
      });
    });
    return list;
  }
  H.tiragesOf = tiragesOf;

  const examState = { grade: null, draws: {}, stamp: null };

  function generate(gid) {
    const g = H.grade(gid);
    examState.grade = gid; examState.draws = {};
    tiragesOf(g).forEach(function (x) { examState.draws[x.key] = H.draw(x.t); });
    examState.stamp = new Date();
  }

  function drawBlock(key, tirage, label) {
    const res = examState.draws[key] || [];
    return '<div class="exam-ep-draw" data-drawkey="' + key + '"><div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between"><span class="small muted">' +
      esc(label || "") + " " + tirage.n + " technique" + (tirage.n > 1 ? "s" : "") + " tirée" + (tirage.n > 1 ? "s" : "") + " au sort</span>" +
      '<button class="btn btn-sm" type="button" data-redraw="' + key + '">↻ Nouveau tirage</button></div>' +
      '<ol class="draw-list draw-anim" style="margin-top:8px">' + res.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></div>";
  }

  function epHTML(m, e) {
    let body = "";
    const key = m.code + "." + e.id;
    if (e.mode === "tirage" && e.simulable === false) {
      body += "<p class=\"small\" style=\"color:var(--text2)\">" + esc(e.consigne[0]) + "</p>" + '<div class="note"><b>Non simulé.</b> ' + esc(e.nonSimule) + "</div>";
    } else if (e.tirage) {
      body += drawBlock(key, e.tirage, "");
      if (e.tirage.alerte) body += H.alertHTML(e.tirage.alerte);
    } else if (e.groupes && e.groupes.some(function (gr) { return gr.tirage; })) {
      e.groupes.forEach(function (gr, i) {
        body += '<div class="sub-group"><div class="sub-group-title">' + esc(gr.titre) + (gr.points ? '<span class="pts">' + gr.points + " pts</span>" : "") + "</div>" +
          (gr.tirage ? drawBlock(key + "." + i, gr.tirage, "") : H.itemsHTML(gr.items)) + "</div>";
      });
      const al = e.groupes.map(function (gr) { return gr.tirage && gr.tirage.alerte; }).filter(Boolean);
      if (al.length) body += H.alertHTML(al[0]);
    } else if (e.mode === "qcm") {
      if (e.qcm) {
        const th = H.qcmThemes[e.qcm];
        body += '<p class="small" style="color:var(--text2)">' + esc((e.consigne || [""])[0]) + "</p>" +
          (th.partiel ? '<div class="note">' + esc(th.partiel) + "</div>" : "") +
          '<div class="btn-row"><button class="btn btn-sm btn-primary" type="button" data-quiz="' + e.qcm + '">Passer un QCM de 10 questions</button></div><div class="quiz-slot" data-quizslot="' + e.qcm + '"></div>';
      } else {
        body += '<p class="small" style="color:var(--text2)">' + esc((e.consigne || [""])[0]) + " " + (e.items ? e.items.map(function (i) { return "« " + esc(i.fr) + " »"; }).join(", ") : "") + "</p>" + H.missingHTML(e.manque, "QCM non simulable : contenu absent des documents fournis.");
      }
    } else {
      (e.consigne || []).forEach(function (c) { body += '<p class="small" style="color:var(--text2)">' + esc(c) + "</p>"; });
      if (e.itemsTitre) body += '<p class="small">' + esc(e.itemsTitre) + "</p>";
      body += H.itemsHTML(e.items);
      (e.groupes || []).forEach(function (gr) {
        body += '<div class="sub-group"><div class="sub-group-title">' + esc(gr.titre) + (gr.points ? '<span class="pts">' + gr.points + " pts</span>" : "") + "</div>" + (gr.consigne ? '<p class="small" style="color:var(--text2)">' + esc(gr.consigne) + "</p>" : "") + H.itemsHTML(gr.items) + "</div>";
      });
      (e.notes || []).forEach(function (n) { body += '<div class="note">' + esc(n) + "</div>"; });
      body += H.alertsFor(e.alertes);
    }
    return '<div class="exam-ep"><div class="exam-ep-head"><span class="t">' + esc(e.titre) + "</span>" + H.modeBadge(e.mode) + '<span class="pts">' + e.points + " pts</span></div>" + body + H.srcTag(e.src) + "</div>";
  }

  function paperHTML() {
    const g = H.grade(examState.grade);
    if (!g) return "";
    const t = H.gradeTotals(g);
    const time = examState.stamp ? examState.stamp.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : "";
    return '<div class="exam-paper" id="exam-paper"><div class="exam-paper-head"><div><h3>Examen blanc — ' + esc(g.nom) + '</h3><div class="exam-meta">' + g.nbEpreuves + " épreuves · " + t.total + " points · généré à " + time + '</div></div><span class="tool-mark" style="margin-left:auto">Outil pédagogique — tirage selon les règles écrites</span></div>' +
      g.modules.map(function (m) {
        return '<section class="exam-module"><h4><b>Module ' + m.code + "</b> " + esc(m.nom) + ' <span class="pts">' + m.points + " pts · validé à " + m.seuil + "</span></h4>" + H.alertsFor(m.alertes) + m.epreuves.map(function (e) { return epHTML(m, e); }).join("") + "</section>";
      }).join("") + "</div>";
  }

  H.views.examen = {
    render: function (param) {
      if (param && H.grade(param)) { if (examState.grade !== param) generate(param); }
      return H.header("Examen <span>blanc</span>", "Sélectionnez un grade, générez un examen : les techniques sont tirées au sort selon les modalités écrites dans le programme officiel.", [["Accueil", "accueil"], ["Examen blanc"]]) +
        '<div class="content"><div><div class="section-title">Étape 1 — Grade</div><div class="big-choice" role="group" aria-label="Choix du grade">' +
        H.grades.map(function (g) {
          return '<button class="grade-btn' + (examState.grade === g.id ? " active" : "") + '" type="button" data-examgrade="' + g.id + '" aria-pressed="' + (examState.grade === g.id) + '"><b>' + g.num + (g.num === 1 ? "er" : "e") + "</b><span>Dan</span></button>";
        }).join("") + "</div></div>" +
        '<div><div class="section-title">Étape 2 — Générer</div><div class="btn-row"><button class="btn btn-primary" type="button" id="exam-gen"' + (examState.grade ? "" : " disabled") + ">🎲 Générer un examen</button>" +
        (examState.grade ? '<button class="btn" type="button" data-go="dan" data-param="' + examState.grade + '">Voir le programme complet</button>' : "") + "</div>" +
        '<p class="muted small" style="margin-top:10px">Seules les épreuves pour lesquelles le programme prévoit un tirage au sort par le jury sont tirées. Les épreuves imposées ou au choix du candidat sont rappelées telles quelles.</p></div>' +
        '<div id="exam-out">' + (examState.grade ? paperHTML() : '<div class="info-bar"><span class="dot"></span><div>Choisissez un grade pour afficher un exemple d’examen. Les tirages respectent le nombre de techniques et le maximum par type indiqués dans chaque programme.</div></div>') + "</div></div>";
    },
    after: function () {
      document.querySelectorAll("[data-examgrade]").forEach(function (b) {
        b.addEventListener("click", function () { generate(b.getAttribute("data-examgrade")); H.go("examen", examState.grade); });
      });
      const gen = document.getElementById("exam-gen");
      if (gen) gen.addEventListener("click", function () { generate(examState.grade); document.getElementById("exam-out").innerHTML = paperHTML(); H.toast("Nouvel examen généré"); });
    }
  };

  /* Délégation : retirage et QCM dans la copie */
  document.addEventListener("click", function (ev) {
    const rd = ev.target.closest("[data-redraw]");
    if (rd) {
      const key = rd.getAttribute("data-redraw");
      const x = tiragesOf(H.grade(examState.grade)).find(function (y) { return y.key === key; });
      if (x) {
        examState.draws[key] = H.draw(x.t);
        const blk = rd.closest(".exam-ep-draw");
        const ol = blk.querySelector("ol");
        ol.innerHTML = examState.draws[key].map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
        ol.classList.remove("draw-anim"); void ol.offsetWidth; ol.classList.add("draw-anim");
      }
      return;
    }
    const qz = ev.target.closest("[data-quiz]");
    if (qz) {
      const theme = qz.getAttribute("data-quiz");
      const slot = qz.closest(".exam-ep").querySelector("[data-quizslot]");
      H.startQuiz(slot, H.buildQuiz(theme, 10), H.qcmThemes[theme].nom);
    }
  });

  /* ------------------------------------------------------------ QCM */
  function lexiqueQuestions(n) {
    const pool = H.lexique.filter(function (l) { return l.s.d === "lex" && !/^(Nak Beop|Dan|Bal Tchagi|Won Li|Mu Gi Sul|Ho Shin Sool)$/.test(l.r); });
    const picked = H.shuffle(pool).slice(0, n);
    return picked.map(function (l, i) {
      const reverse = i % 2 === 1;
      const same = H.shuffle(pool.filter(function (x) { return x !== l && x.c === l.c && x.f !== l.f && x.r !== l.r; }));
      const other = H.shuffle(pool.filter(function (x) { return x !== l && x.c !== l.c && x.f !== l.f && x.r !== l.r; }));
      const distract = same.concat(other).slice(0, 3);
      if (reverse) {
        return { q: "Comment dit-on « " + l.f + " » ?", a: [l.r].concat(distract.map(function (d) { return d.r; })), c: 0, s: l.s, ko: l.h };
      }
      return { q: "Que signifie « " + l.r + " » ?", a: [l.f].concat(distract.map(function (d) { return d.f; })), c: 0, s: l.s, ko: l.h };
    });
  }

  H.buildQuiz = function (theme, n) {
    let qs = theme === "lexique" ? lexiqueQuestions(n) : H.shuffle(H.qcm.filter(function (q) { return q.t === theme; })).slice(0, n);
    return qs.map(function (q) {
      const order = H.shuffle(q.a.map(function (_, i) { return i; }));
      return { q: q.q, a: order.map(function (i) { return q.a[i]; }), c: order.indexOf(q.c), s: q.s, ko: q.ko };
    });
  };

  H.startQuiz = function (container, questions, title) {
    let i = 0, score = 0; const errors = [];
    function show() {
      if (i >= questions.length) return end();
      const q = questions[i];
      container.innerHTML = '<div class="quiz" aria-live="polite"><div class="quiz-top"><span>' + esc(title) + "</span><span>Question " + (i + 1) + " / " + questions.length + " · score " + score + '</span></div><div class="quiz-progress"><span style="width:' + (i / questions.length * 100) + '%"></span></div>' +
        '<div class="quiz-q">' + esc(q.q) + "</div>" +
        '<div class="quiz-answers">' + q.a.map(function (a, k) { return '<button class="answer" type="button" data-k="' + k + '"><span class="letter">' + "ABCD"[k] + "</span><span>" + esc(a) + "</span></button>"; }).join("") + "</div>" +
        '<div class="quiz-feedback" hidden></div></div>';
      container.querySelectorAll(".answer").forEach(function (b) {
        b.addEventListener("click", function () {
          const k = Number(b.getAttribute("data-k"));
          const ok = k === q.c; if (ok) score++; else errors.push(q);
          container.querySelectorAll(".answer").forEach(function (x, j) { x.disabled = true; if (j === q.c) x.classList.add("good"); else if (j === k) x.classList.add("bad"); });
          const fb = container.querySelector(".quiz-feedback");
          fb.hidden = false;
          fb.innerHTML = "<p>" + (ok ? "<b style=\"color:var(--accent)\">Bonne réponse.</b>" : "<b style=\"color:var(--danger)\">Réponse attendue :</b> " + esc(q.a[q.c])) + (q.ko ? ' <span class="ko" style="color:var(--accent2)">' + esc(q.ko) + "</span>" : "") + "</p>" +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-top:8px">' + H.srcTag(q.s) + '<button class="btn btn-sm btn-primary" type="button" data-next>' + (i + 1 < questions.length ? "Question suivante →" : "Voir le résultat") + "</button></div>";
          fb.querySelector("[data-next]").addEventListener("click", function () { i++; show(); });
          fb.querySelector("[data-next]").focus();
        });
      });
    }
    function end() {
      container.innerHTML = '<div class="quiz"><div class="quiz-top"><span>' + esc(title) + '</span><span>Terminé</span></div><div class="quiz-score">' + score + " / " + questions.length + "</div>" +
        (errors.length ? '<div class="small muted">À revoir :</div><ul class="ul-clean">' + errors.map(function (q) { return "<li>" + esc(q.q) + " — <b style=\"color:var(--text)\">" + esc(q.a[q.c]) + "</b><br>" + H.srcTag(q.s) + "</li>"; }).join("") + "</ul>" : '<p class="lead">Sans faute.</p>') +
        '<div class="btn-row"><button class="btn btn-primary" type="button" data-restart>Recommencer</button></div></div>';
      container.querySelector("[data-restart]").addEventListener("click", function () {
        const theme = Object.keys(H.qcmThemes).find(function (k) { return H.qcmThemes[k].nom === title; });
        H.startQuiz(container, theme ? H.buildQuiz(theme, questions.length) : questions, title);
      });
    }
    show();
  };
})();

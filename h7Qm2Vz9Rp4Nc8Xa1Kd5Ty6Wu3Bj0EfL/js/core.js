/* =====================================================================
   CORE — utilitaires partagés (échappement, sources, alertes, stockage)
   ===================================================================== */
(function () {
  const H = window.HKD;

  H.esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  /* Normalisation pour la recherche : minuscules, sans accents ni ponctuation */
  H.norm = function (s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[’'`´\-–—_.,;:()«»"\/]/g, " ").replace(/\s+/g, " ").trim();
  };

  /* ------------------------------------------------------------ Sources */
  H.srcText = function (s) {
    if (!s) return "";
    const doc = H.sources[s.d];
    if (!doc) return s.d;
    if (s.d === "xmind") return "Structure App HKD (XMind)";
    return "FFTDA — " + (doc.court || doc.titre) + (s.p ? ", p. " + s.p : "");
  };
  H.srcTag = function (s, prefix) {
    if (!s) return "";
    return '<span class="src">' + (prefix || "Source") + " : <b>" + H.esc(H.srcText(s)) + "</b></span>";
  };

  /* ------------------------------------------------------------ Alertes */
  const TYPE_LABEL = { contradiction: "Contradiction entre documents", ambiguite: "Règle ambiguë", manque: "Document manquant", orthographe: "Orthographes différentes" };
  H.conflict = function (id) { return H.conflicts.find(function (c) { return c.id === id; }); };
  H.alertHTML = function (id, open) {
    const c = H.conflict(id);
    if (!c) return "";
    const ico = c.type === "manque" ? "✕" : c.type === "orthographe" ? "ⓘ" : "⚠️";
    return '<details class="alert ' + c.type + '"' + (open ? " open" : "") + '>' +
      '<summary><span class="alert-ico" aria-hidden="true">' + ico + '</span><span><b>' + TYPE_LABEL[c.type] + "</b> — " + H.esc(c.sujet) + '</span><span class="alert-more">Détails</span></summary>' +
      '<div class="alert-body">' + c.valeurs.map(function (v) {
        return '<div class="alert-val">' + H.esc(v.valeur) + H.srcTag(v.src) + "</div>";
      }).join("") + "</div></details>";
  };
  H.alertsFor = function (ids) { return (ids || []).map(function (id) { return H.alertHTML(id); }).join(""); };

  H.missingHTML = function (texte, titre) {
    return '<div class="missing"><span class="ico" aria-hidden="true">⚠️</span><div><b>' +
      H.esc(titre || "Contenu non disponible dans les documents officiels fournis.") + "</b>" +
      (texte ? "<br>" + H.esc(texte) : "") + "</div></div>";
  };

  /* ------------------------------------------------------------ Stockage local (best effort) */
  const NS = "dojangpath-hkd:";
  H.store = {
    get: function (k, def) {
      try { const v = window.localStorage.getItem(NS + k); return v == null ? def : JSON.parse(v); }
      catch (e) { return def; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(NS + k, JSON.stringify(v)); return true; }
      catch (e) { return false; }
    }
  };

  /* Favoris (⭐ à réviser) — clés = romanisation ou libellé */
  H.favs = new Set(H.store.get("favs", []));
  H.toggleFav = function (key) {
    if (H.favs.has(key)) H.favs.delete(key); else H.favs.add(key);
    H.store.set("favs", Array.from(H.favs));
    return H.favs.has(key);
  };
  H.starBtn = function (key, label) {
    const on = H.favs.has(key);
    return '<button class="star" type="button" data-fav="' + H.esc(key) + '" aria-pressed="' + on + '" aria-label="' +
      (on ? "Retirer de ma liste à réviser" : "Ajouter à ma liste à réviser") + " : " + H.esc(label || key) + '">' + (on ? "★" : "☆") + "</button>";
  };

  /* Progression : 0 = à apprendre, 1 = en cours, 2 = maîtrisé */
  H.progress = H.store.get("progress", {});
  H.setProgress = function (key, v) { H.progress[key] = v; H.store.set("progress", H.progress); };
  H.getProgress = function (key) { return H.progress[key] || 0; };

  H.toast = function (msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  };

  H.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };

  /* Emblème : le cercle (Won), le flux (Yu), l'harmonie (Hwa) */
  H.emblem = function (size, cls) {
    return '<svg class="' + (cls || "") + '" width="' + size + '" height="' + size + '" viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="54" fill="none" stroke="#5cb89f" stroke-opacity=".35" stroke-width="1.5"/>' +
      '<circle cx="60" cy="60" r="42" fill="none" stroke="#5cb89f" stroke-width="3" stroke-dasharray="190 74" stroke-linecap="round" transform="rotate(-30 60 60)"/>' +
      '<path d="M30 74 C 44 50, 64 92, 90 56" fill="none" stroke="#8fd8c3" stroke-width="3.5" stroke-linecap="round"/>' +
      '<circle cx="90" cy="56" r="5" fill="#c9a84c"/>' +
      '<circle cx="60" cy="60" r="24" fill="none" stroke="#5cb89f" stroke-opacity=".55" stroke-width="1.2"/>' +
      "</svg>";
  };

  /* Totaux de points d'un grade (calculés depuis les données) */
  H.gradeTotals = function (g) {
    return g.modules.reduce(function (acc, m) { acc.total += m.points; acc[m.code] = m.points; return acc; }, { total: 0 });
  };
  H.grade = function (id) { return H.grades.find(function (g) { return g.id === String(id); }); };
})();

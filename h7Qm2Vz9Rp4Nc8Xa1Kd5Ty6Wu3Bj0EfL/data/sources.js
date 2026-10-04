/* =====================================================================
   REGISTRE CENTRALISÉ DES SOURCES
   Chaque donnée de l'application référence une de ces clés.
   "page" dans les données = numéro de page du PDF (et non le numéro imprimé).
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.referentiel = {
  libelle: "Référentiel FFTDA 2025",
  detail: "Programmes des examens de Dan Hapkido validés par la CSDGE le 28 juin 2025 · Règlements compétition, combat et technique version du 06/01/2025"
};

HKD.sources = {
  xmind: {
    titre: "App HKD — carte mentale de structure",
    fichier: "App HKD.xmind",
    role: "Structure de l'application (prioritaire pour l'arborescence)",
    officiel: false,
    statut: "ok"
  },
  ex1: {
    titre: "Programme de l'examen de 1er Dan Hapkido",
    court: "Examen 1er Dan",
    fichier: "Examen_1er_Dan_Hapkido_FFTDA.pdf",
    version: "Validé par la CSDGE le 28 juin 2025 — modifié le 12 juin 2025",
    pages: 4, officiel: true, statut: "ok"
  },
  ex2: {
    titre: "Programme de l'examen de 2ème Dan Hapkido",
    court: "Examen 2e Dan",
    fichier: "Examen_2eme_Dan_Hapkido_FFTDA.pdf",
    version: "Sans date propre (suite du programme validé le 28/06/2025)",
    pages: 3, officiel: true, statut: "ok"
  },
  ex3: {
    titre: "Programme de l'examen de 3ème Dan Hapkido",
    court: "Examen 3e Dan",
    fichier: "Examen_3eme_Dan_Hapkido_FFTDA.pdf",
    version: "Sans date propre (suite du programme validé le 28/06/2025)",
    pages: 3, officiel: true, statut: "ok"
  },
  ex4: {
    titre: "Programme de l'examen de 4ème Dan Hapkido",
    court: "Examen 4e Dan",
    fichier: "Examen_4eme_Dan_Hapkido_FFTDA.pdf",
    version: "Sans date propre (suite du programme validé le 28/06/2025)",
    pages: 3, officiel: true, statut: "ok",
    remarque: "Cité deux fois dans la liste initiale : un seul fichier a été fourni et utilisé."
  },
  ex5: {
    titre: "Programme de l'examen de 5ème Dan Hapkido",
    court: "Examen 5e Dan",
    fichier: "Examen_5eme_Dan_Hapkido_FFTDA.pdf",
    version: "Sans date propre (suite du programme validé le 28/06/2025)",
    pages: 2, officiel: true, statut: "ok",
    remarque: "Absent de la liste initiale, mais fourni dans les fichiers du projet."
  },
  ex6: {
    titre: "Programme de l'examen de 6ème Dan Hapkido",
    court: "Examen 6e Dan",
    fichier: "Examen_6eme_Dan_Hapkido_FFTDA.pdf",
    version: "Sans date propre (suite du programme validé le 28/06/2025)",
    pages: 2, officiel: true, statut: "ok"
  },
  lex: {
    titre: "Annexe 1 — Lexique terminologique du Hapkido",
    court: "Annexe 1 — Lexique",
    fichier: "Annexe 1 - Lexique.pdf",
    version: "Fichier créé le 23/09/2025",
    pages: 4, officiel: true, statut: "ok"
  },
  syn: {
    titre: "Annexe 2 — Tableau de synthèse « Examen de Dan Hapkido »",
    court: "Annexe 2 — Synthèse",
    fichier: "Annexe 2 - Tableau de synthèse Hapkido.pdf",
    version: "Fichier créé le 23/09/2025",
    pages: 2, officiel: true, statut: "ok"
  },
  tenue: {
    titre: "Annexe 3 — Tenue réglementaire",
    court: "Annexe 3 — Tenue",
    fichier: "Annexe 3 - Tenue réglementaire.pdf",
    version: "Fichier créé le 23/09/2025 — « Dobok réglementaire, examens de Dan Hapkido »",
    pages: 1, officiel: true, statut: "ok",
    remarque: "Fourni dans un second temps. Les deux photos d'exemple de dobok sont reprises dans la fiche Tenue."
  },
  mem: {
    titre: "Annexe 4 — Note relative à la rédaction des écrits des examens de 5ème et 6ème Dan",
    court: "Annexe 4 — Mémoire",
    fichier: "Annexe 4 - Note mémoire 5 - 6 Dan.pdf",
    version: "Fichier créé le 23/09/2025",
    pages: 2, officiel: true, statut: "ok"
  },
  comp: {
    titre: "Règlement des compétitions Hapkido",
    court: "Règlement compétition",
    fichier: "25_Règlement compétition_06012025.pdf",
    version: "Version 06/01/2025",
    pages: 12, officiel: true, statut: "ok"
  },
  arb: {
    titre: "Règlement des compétitions combat Hapkido (arbitrage combat)",
    court: "Règlement combat",
    fichier: "25_Règlementation Arbitrage Combat Hapkido.pdf",
    version: "Version 06/01/2025",
    pages: 31, officiel: true, statut: "ok"
  },
  jt: {
    titre: "Règlement des compétitions techniques Hapkido (jugement technique)",
    court: "Règlement technique",
    fichier: "25_Règlementation Jugement Technique Hapkido_2025.pdf",
    version: "Version 06/01/2025",
    pages: 13, officiel: true, statut: "ok"
  }
};

/* Ordre d'affichage sur la page Sources */
HKD.sourcesOrdre = ["ex1","ex2","ex3","ex4","ex5","ex6","lex","syn","tenue","mem","comp","arb","jt","xmind"];

/* =====================================================================
   CONTRADICTIONS ET AMBIGUÏTÉS DÉTECTÉES ENTRE LES SOURCES
   Aucune n'est résolue automatiquement : elles sont affichées telles quelles.
   type : "contradiction" | "ambiguite" | "manque" | "orthographe"
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.conflicts = [
  {
    id: "duree-combat-souple", type: "contradiction",
    sujet: "Durée des reprises du combat souple (examens 1er à 4e Dan)",
    valeurs: [
      { src: { d: "ex1", p: 4 }, valeur: "Deux (2) reprises selon les règles de compétition Hapkido FFTDA ; durée précisée uniquement à partir de 60 ans : reprises d’1 minute, 1 minute de récupération." },
      { src: { d: "syn", p: 1 }, valeur: "« 2 x 2 min » pour les 1er, 2e, 3e et 4e Dan ; candidats de plus de 60 ans : « 2 rounds en mode Assauts »." },
      { src: { d: "xmind" }, valeur: "1er Dan, moins de 60 ans : « 2 rounds d’une minute, trente secondes de repos entre » ; plus de 60 ans : 2 rounds d’une minute, une minute de repos." },
      { src: { d: "arb", p: 10 }, valeur: "Règles de compétition selon la catégorie d’âge : Seniors 2 × 2 min (1 min de repos) ; Masters (30 ans et +) 2 × 1 min 30 (1 min de repos)." }
    ]
  },
  {
    id: "2dan-nb-enchainements", type: "contradiction",
    sujet: "Nombre d’enchaînements libres — 2e Dan, Module A",
    valeurs: [
      { src: { d: "ex2", p: 1 }, valeur: "Présentation de l’examen : « une épreuve individuelle de deux (2) Enchaînements libres de percussions Hapkido »." },
      { src: { d: "ex2", p: 1 }, valeur: "Détail du Module A : « cinq (5) enchaînements libres […] (10 points / enchaînement) », pour un module sur 50 points." },
      { src: { d: "syn", p: 1 }, valeur: "« Réalisation de cinq enchaînements libres »." }
    ]
  },
  {
    id: "4dan-points-moduleB", type: "contradiction",
    sujet: "Barème du Module B — 4e Dan",
    valeurs: [
      { src: { d: "ex4", p: 1 }, valeur: "Module B : 20 points ; validation à partir de 10 points." },
      { src: { d: "syn", p: 1 }, valeur: "En-tête du tableau : « Module B : 30 à 40 points » et colonne « Q.C.M /30 »." }
    ]
  },
  {
    id: "chutes-points", type: "contradiction",
    sujet: "Barème des chutes",
    valeurs: [
      { src: { d: "ex1", p: 2 }, valeur: "Chutes (Nak-Beop) : 20 points." },
      { src: { d: "syn", p: 1 }, valeur: "Colonne « LES CHUTES /20 »." },
      { src: { d: "syn", p: 2 }, valeur: "Tableau « Évaluation » : « Chutes (40 à 60 pts) »." }
    ]
  },
  {
    id: "5dan-sujet", type: "contradiction",
    sujet: "Validation du sujet du bilan réflexif — 5e Dan",
    valeurs: [
      { src: { d: "ex5", p: 1 }, valeur: "« Ce sujet sera transmis à la CSDGE pour validation au plus tard 4 mois avant l’examen de Dan »." },
      { src: { d: "mem", p: 2 }, valeur: "« Pour les candidats au 5ème Dan, il n’y a pas de sujet à faire valider. Toutefois, les candidats doivent se faire connaître auprès de la CSDGE au plus tard 4 mois avant l’examen » afin de désigner un tuteur." },
      { src: { d: "syn", p: 2 }, valeur: "« Le candidat prépare un bilan réflexif (5ème Dan) ou un mémoire (6ème Dan) sur un sujet qu’il aura proposé à la CSDGE au plus tard 4 mois avant l’examen »." }
    ]
  },
  {
    id: "6dan-20ans", type: "contradiction",
    sujet: "Condition d’ancienneté — 6e Dan",
    valeurs: [
      { src: { d: "ex6", p: 1 }, valeur: "Conditions : être titulaire du 5ème Dan ; six timbres de licence supplémentaires après le 5ème Dan ; inscription sur la plateforme. Aucune autre condition d’ancienneté." },
      { src: { d: "syn", p: 1 }, valeur: "Grade minimum requis : « 5ème Dan (1er Dan depuis au moins 20 ans) »." }
    ]
  },
  {
    id: "age-dan-xmind", type: "contradiction",
    sujet: "Âge d’accès aux Dan",
    valeurs: [
      { src: { d: "xmind" }, valeur: "Branche « Dan › Adultes (+16 ans) »." },
      { src: { d: "ex1", p: 1 }, valeur: "1er Dan : « Avoir 14 ans révolus »." },
      { src: { d: "ex2", p: 1 }, valeur: "2e Dan : « Avoir au minimum 16 ans révolus »." }
    ]
  },
  {
    id: "xmind-1dan-libelles", type: "contradiction",
    sujet: "Libellés des défenses du 1er Dan dans le XMind",
    valeurs: [
      { src: { d: "xmind" }, valeur: "Défense contre percussion poing : « Direct / Crochet / Uppercut / Subtopic 4 » ; couteau : « Attaque intérieur vers extérieur », « extérieur vers intérieur », « pointée dans le dos »." },
      { src: { d: "ex1", p: 3 }, valeur: "Le programme ne détaille pas les types de coups de poing. Couteau : « attaque sur le côté extérieur », « sur le côté intérieur », « pointée sur le dos ». Ce sont les libellés du PDF qui sont affichés." }
    ]
  },
  {
    id: "ambig-tirage", type: "ambiguite",
    sujet: "Règle de tirage « une à deux (ou trois) techniques par type »",
    valeurs: [
      { src: { d: "ex1", p: 3 }, valeur: "La formulation fixe un maximum par type, mais ne précise pas si chaque type doit obligatoirement sortir au moins une fois. Le simulateur applique uniquement le maximum indiqué. Validation humaine recommandée." }
    ]
  },
  {
    id: "ambig-tirage-3dan", type: "ambiguite",
    sujet: "Tirage « deux à trois techniques par type » — 3e Dan, ceinture",
    valeurs: [
      { src: { d: "ex3", p: 3 }, valeur: "5 techniques pour 3 types : un minimum de deux par type exigerait 6 techniques. La règle ne peut donc pas s’appliquer comme un minimum strict ; le simulateur applique seulement le maximum de 3 par type." }
    ]
  },
  {
    id: "annexe21-absente", type: "manque",
    sujet: "Annexe 2.1 « règlement des combats souples »",
    valeurs: [
      { src: { d: "ex1", p: 4 }, valeur: "Le programme 1er Dan renvoie à une « Annexe 2.1 — règlement des combats souples » qui n’a pas été fournie." }
    ]
  },
  {
    id: "dates-ex1", type: "ambiguite",
    sujet: "Dates du programme des examens",
    valeurs: [
      { src: { d: "ex1", p: 1 }, valeur: "« Validé par la CSDGE le 28 juin 2025 » et « Modifié le 12 juin 2025 » : la date de modification précède la date de validation." }
    ]
  },
  {
    id: "ortho-romanisation", type: "orthographe",
    sujet: "Romanisations différentes selon les documents",
    valeurs: [
      { src: { d: "lex", p: 2 }, valeur: "Anja Dolyeo Tchagi · Ha Dan Jokdo Tchagi · Dwikkumtchi Mit Tchagi · Yangbal Beolyeo Tchagi" },
      { src: { d: "ex1", p: 2 }, valeur: "Anja Dollyeo Tchagi · Ha dan Jok-do Tchagi · Dwikumtchi Mit Tchagi" },
      { src: { d: "ex3", p: 2 }, valeur: "Yangbal Bolyeo Ap Tchagi" },
      { src: { d: "arb", p: 12 }, valeur: "Anjwa Dollyeo Chagi · Anjwa dolyo chagi" },
      { src: { d: "arb", p: 11 }, valeur: "Salut : « Charyeot » et « Kygongnye » (règlement combat) — « Charyeot – Kyeongnye » (règlement technique, p. 7)" }
    ]
  }
];

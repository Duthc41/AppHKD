/* =====================================================================
   MÉMOIRE / BILAN RÉFLEXIF 5e–6e DAN — Annexe 4 (+ renvois aux programmes)
   SYNTHÈSE DES EXAMENS — Annexe 2
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.memoire = {
  recevabilite: { src: { d: "mem", p: 1 }, items: [
    "Être adressé à la F.F.T.D.A. 30 jours avant la date fixée pour l’examen de Dan",
    "Comporter 10 pages (minimum) à 20 pages (maximum) de texte au format A4, hors photos, page de garde, page de remerciement et annexes",
    "Être rédigé en police « Arial », « Time New Roman » ou « Calibri », taille 12, interligne 1,5",
    "Être personnel et authentique, sans « copié-collé » d’internet, sauf citations avec références",
    "Être rédigé en français"
  ] },
  bilan: { titre: "Bilan réflexif (5ème Dan)", src: { d: "mem", p: 1 }, texte: "Présenter et analyser votre parcours de pratiquant de Hapkido. Le document peut intégrer l’ensemble du parcours (pratiquant, enseignant, dirigeant, compétiteur, juge, arbitre, organisateur, etc.) et doit faire ressortir l’analyse critique de votre expérience : ce que vous avez réalisé, comment et pourquoi, ce que vous en retirez, ce que vous pourriez modifier. Enfin, vous abordez votre vision de la suite de votre parcours de Hapkido-in et du futur développement du Hapkido." },
  memoire: { titre: "Mémoire (6ème Dan)", src: { d: "mem", p: 1 }, texte: "Effectuer des recherches sur la thématique choisie et traiter tous les aspects du sujet. Le mémoire est évalué sur la réflexion quant au choix du sujet, la rédaction, les recherches réalisées pour construire et étayer le développement, ainsi que sur la capacité à émettre des hypothèses, à se projeter et à exprimer un sens critique. C’est un écrit original, élaboré avec soin, qui reflète votre implication." },
  plan: { src: { d: "mem", p: 1 }, etapes: [
    { titre: "Page de garde", commun: "Noms, prénoms, sujet choisi et titre du mémoire." },
    { titre: "Page de remerciement", commun: "Facultative." },
    { titre: "Sommaire", commun: "Présente votre développement." },
    { titre: "Introduction", bilan: "Décrire brièvement votre parcours et faire ressortir les grands axes (ou parties) traités.", memoire: "Décrire le sujet traité et formuler votre problématique ; permettre au lecteur de comprendre le mémoire globalement et le cheminement vers la problématique." },
    { titre: "Développement", bilan: "Présenter et analyser des actions ou temps marquants du parcours, en deux à trois parties (actions/temps différents ou compétences développées différentes).", memoire: "Répondre aux questions soulevées par la problématique, en deux parties possibles : l’une théorique, l’autre empirique ; parties équilibrées, logiques et clairement formulées." },
    { titre: "Conclusion", bilan: "Ponctuer le retour d’expérience et ouvrir sur la suite du parcours de Hapkido-in et la vision du développement du Hapkido.", memoire: "Synthétiser les principales réponses et éléments de la démonstration, présenter les limites du développement, terminer par une ouverture." },
    { titre: "Annexes et illustrations", commun: "Peuvent étayer ou illustrer les propos ; elles doivent être référencées dans le document. Il est fortement recommandé de faire relire le texte par des proches avant envoi." }
  ] },
  soutenance: { src: { d: "mem", p: 2 }, items: [
    "Soutenance orale devant un jury désigné par la F.F.T.D.A. qui a lu la production au préalable",
    "Exposé oral de 10 à 15 minutes, suivi d’un entretien de 10 à 15 minutes",
    "Bilan réflexif : ne pas redire l’écrit ni lister les actions, mais démontrer la prise de recul et projeter ce que vous en retirez pour le développement du Hapkido en France",
    "Mémoire : il ne s’agit pas de convaincre de la pertinence d’une réponse, mais de présenter une réflexion au regard d’une interrogation"
  ] },
  sujet: { src: { d: "mem", p: 2 }, items: [
    "Le sujet doit être le fruit d’une expérience vécue ou d’un projet mené dans votre parcours de Hapkido-in",
    "Le sujet est transmis à la CSDGE pour validation au plus tard 4 mois avant l’examen de Dan",
    "5ème Dan : pas de sujet à faire valider, mais le candidat se fait connaître auprès de la CSDGE au plus tard 4 mois avant l’examen pour la désignation d’un tuteur",
    "Un tuteur est proposé ; le candidat peut en proposer un, la CSDGE devant alors valider le tutorat"
  ], alerte: "5dan-sujet" },
  tuteur: { src: { d: "mem", p: 2 },
    role: "Aider, échanger, orienter et suggérer au candidat des axes d’amélioration du document final à soumettre pour la soutenance. L’excellence du mémoire fait partie de ses objectifs.",
    profil: "Grade supérieur à celui présenté par le candidat, avec une ou plusieurs expériences parmi : enseignement, gestion de club, présidence de ligue ou de comité départemental, entraîneur, ex-champion, auteur d’ouvrages, membre de comité directeur, C.T.N, C.T.F, etc. Proposé par la CSDGE au candidat ou par le candidat à la CSDGE."
  },
  bareme: { src: { d: "ex5", p: 1 }, texte: "Module B des 5ème et 6ème Dan : 40 points, validé à partir de 20 points." }
};

/* ---------------------------------------------------------------------
   SYNTHÈSE — Annexe 2, p.1 (colonnes du tableau)
   --------------------------------------------------------------------- */
HKD.synthese = {
  src: { d: "syn", p: 1 },
  entetes: { A: "Module A : de 40 à 50 points — Les formes", B: "Module B : 30 à 40 points — La théorie", C: "Module C : 60 à 80 points — Application technique" },
  lignes: [
    { g: "1er Dan", titre: "Jo-Kyo-Nim", requis: "1er Keup — 14 ans (révolus)", annees: "3",
      chutes: "Réalisation de chutes (cf. programme)", percussions: "Membres supérieurs contre partenaire en garde et inférieurs sur cible", connaissances: "",
      qcm: "La FFTDA et la vie associative · Le lexique terminologique", memoire: "",
      saisies: "Contre saisies au poignet et au vêtement", attaques: "", defenses: "Contre une percussion / contre une attaque au couteau", armes: "", combat: "2 x 2 min" },
    { g: "2ème Dan", titre: "Kyo-Sa-Nim", requis: "1er Dan", annees: "2",
      chutes: "", percussions: "Réalisation de cinq enchaînements libres", connaissances: "",
      qcm: "La réglementation des grades · Le lexique terminologique", memoire: "",
      saisies: "Contre saisie au cou et en tailleur", attaques: "Contre partenaire bras le long du corps et en garde", defenses: "En tailleur", armes: "Avec bâton court contre attaque avec et sans arme", combat: "2 x 2 min" },
    { g: "3ème Dan", titre: "Boo-Sa-Beom-Nim", requis: "2ème Dan", annees: "3",
      chutes: "", percussions: "Six enchaînements dans le vide et 4 coups de pied sautés sur cible", connaissances: "",
      qcm: "Compétitions combat et technique Hapkido", memoire: "",
      saisies: "", attaques: "", defenses: "En position assise sur une chaise", armes: "Avec une ceinture", combat: "2 x 2 min" },
    { g: "4ème Dan", titre: "Sa-Beom-Nim", requis: "3ème Dan", annees: "4",
      chutes: "", percussions: "Quatre enchaînements sur quatre cibles", connaissances: "",
      qcm: "Le Hapkido au sein de la FFTDA et mondial", memoire: "",
      saisies: "", attaques: "Techniques d’arrestation", defenses: "Contre-techniques / contre deux adversaires", armes: "Avec une canne ou un bâton long", combat: "2 x 2 min" },
    { g: "5ème Dan", titre: "Soo-Suk-Sa-Beom Nim", requis: "4ème Dan", annees: "5",
      chutes: "", percussions: "", connaissances: "Décomposition d’une technique contre saisie au poignet",
      qcm: "", memoire: "Rédaction d’un bilan réflexif sur son expérience",
      saisies: "Défense contre saisies tirées au sort", attaques: "", defenses: "Contre une arme", armes: "Défense avec arme", combat: "" },
    { g: "6ème Dan", titre: "Kwan-Jang-Nim", requis: "5ème Dan (1er Dan depuis au moins 20 ans)", annees: "6",
      chutes: "", percussions: "", connaissances: "Décomposition de techniques",
      qcm: "", memoire: "Rédaction d’un mémoire",
      saisies: "Démonstration illustrant la pratique du Hapkido", attaques: "", defenses: "", armes: "", combat: "", fusionC: true }
  ],
  amenagements60: [
    "Plus de 60 ans : les chutes sautées ne sont pas demandées",
    "Plus de 60 ans : les coups de pied peuvent être réalisés au niveau moyen et les coups de pied sautés remplacés par des coups de pied au sol",
    "Plus de 60 ans : aménagement du combat en 2 rounds en mode « Assauts »"
  ],
  qcmDuree: "Q.C.M : durée maximum de l’épreuve par candidat : 20 minutes",
  partenaire: "Les candidats réalisent les techniques demandées avec un partenaire de leur choix.",
  evaluation: { src: { d: "syn", p: 2 }, lignes: [
    { epreuve: "Chutes", bareme: "(40 à 60 pts)", criteres: "L’équilibre, la stabilité, la coordination, l’attitude, la détermination, l’application, la sécurité et la souplesse" },
    { epreuve: "Percussions", bareme: "(30 pts)", criteres: "La précision, la vitesse, la puissance, la souplesse, l’équilibre, la stabilité, la coordination, l’attitude, la détermination, l’application" },
    { epreuve: "Q.C.M", bareme: "/30", criteres: "Q.C.M portant sur une ou plusieurs thématiques — durée maximum : 20 minutes par candidat" },
    { epreuve: "Mémoire / bilan réflexif", bareme: "/40", criteres: "Bilan réflexif (5ème Dan) ou mémoire (6ème Dan) sur un sujet proposé à la CSDGE au plus tard 4 mois avant l’examen, soutenu oralement lors de l’examen" },
    { epreuve: "Saisies, attaques, défenses, armes", bareme: "/20/30/40 · /10 · /10/20/25 · /20/25", criteres: "La précision (pour les percussions dans les cibles), la vitesse, la souplesse, l’équilibre, la stabilité, la coordination, l’attitude, la détermination, l’application, la diversité, le réalisme, l’efficacité, le respect des consignes et, pour le 4ème Dan, la diversité et la fluidité" },
    { epreuve: "Combat", bareme: "/10", criteres: "La précision, la vitesse, la puissance, la souplesse, le sens tactique et stratégique, l’équilibre et la coordination, la sportivité, la combativité et le rythme" }
  ] }
};

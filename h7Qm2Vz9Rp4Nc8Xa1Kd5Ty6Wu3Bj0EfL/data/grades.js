/* =====================================================================
   PROGRAMMES DES EXAMENS DE DAN HAPKIDO — données extraites des PDF FFTDA
   src: { d: clé de HKD.sources, p: page PDF }
   mode d'une épreuve :
     impose  = contenu fixé par le programme
     choix   = au choix du candidat dans une liste ou librement
     tirage  = techniques tirées au sort par le jury (simulable)
     qcm     = questionnaire
     ecrit   = production écrite (mémoire / bilan)
     demo    = démonstration / décomposition devant le jury
   tirage.pool[].max = nombre maximal de tirages par type (tel qu'écrit)
   ===================================================================== */
window.HKD = window.HKD || {};

/* Bloc commun « partenaire » (identique dans les programmes 1er à 5e Dan, Module C) */
HKD.partenaireModuleC = [
  "L’épreuve doit être réalisée à deux : le candidat et un partenaire proposé par le candidat ou choisi parmi les autres candidats.",
  "Si le partenaire n’est pas candidat à un Dan lors de cette même session, il devra : être licencié et disposer de son passeport fédéral à jour ; signer l’attestation sur l’honneur l’engageant à ne pas prendre de photos, vidéo ou toute forme d’enregistrement lors de la session d’examen de Dan."
];

/* Bloc commun « combat souple » (identique 1er à 4e Dan) */
function combatSouple(src, points) {
  return {
    id: "combat", titre: "Combat souple", points: points, mode: "impose",
    consigne: [
      "Les combats se dérouleront en deux (2) reprises et selon les règles de compétition Hapkido F.F.T.D.A. (cf. « Règlement des Compétitions Hapkido » et « Règlement des Compétitions Combat Hapkido »), à l’exception des catégories de poids.",
      "Il ne sera pas tenu compte des points marqués par les candidats durant les reprises. Le jury évaluera les participants sur la qualité des techniques utilisées, le sens tactique, la gestion du temps, les stratégies mises en place.",
      "En cas de différence d’âge entre les combattants, les règles s’appliquent au candidat le plus âgé. À partir de 60 ans, les reprises seront d’une (1) minute, avec une (1) minute de récupération entre les deux (2) reprises."
    ],
    alertes: ["duree-combat-souple"],
    src: src
  };
}

const DECISION = [
  "Un module validé est acquis pour les cinq saisons sportives qui suivent la validation.",
  "Les candidats ayant validé les modules A, B et C sont proposés à l’admission pour le Dan présenté."
];

HKD.grades = [
  /* ------------------------------------------------------------------ 1er DAN */
  {
    id: "1", num: 1, nom: "1er Dan", titreCoreen: "Jo-Kyo-Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Décentralisé dans les Ligues",
    conditions: [
      "Avoir 14 ans révolus",
      "Être titulaire du grade de ceinture rouge 1er Keup",
      "Avoir trois timbres de licence minimum dont celui de la saison en cours",
      "Inscription au 1er Dan réalisée sur la plateforme FFTDA"
    ],
    modalites: "Examens décentralisés dans les Ligues sous la responsabilité du/de la Président(e). Jury de six juges, deux par module, d’un grade supérieur ou égal au 2ème Dan, constitué par le/la Président(e) de Ligue, le Directeur des Grades de Ligue ou le Responsable Disciplines Associées de Ligue et proposé pour validation au Bureau de la CSDGE.",
    nbEpreuves: 7,
    src: { d: "ex1", p: 1 },
    modules: [
      {
        code: "A", nom: "Les formes", points: 50, seuil: 25, src: { d: "ex1", p: 1 },
        resume: "Deux épreuves individuelles : chutes et percussions",
        epreuves: [
          {
            id: "chutes", titre: "Chutes", ko: "Nak-Beop", points: 20, mode: "impose",
            consigne: ["Chaque candidat exécute, en suivant les instructions du jury, dix (10) chutes :"],
            items: [
              { fr: "2 chutes avant", ko: "Jeon-bang Nak-beop" },
              { fr: "2 chutes arrière", ko: "Hu-bang Nak-beop" },
              { fr: "2 chutes latérales", ko: "Ch’euk-bang Nak-beop" },
              { fr: "2 chutes avant roulées", ko: "Hwae-jeon Nak-beop" },
              { fr: "1 chute avant sautée au-dessus d’un obstacle (personne en position saut de mouton, genoux fléchis, en « boule »)", ko: "Nop-i Nak-beop" },
              { fr: "1 chute sautée acrobatique au choix" }
            ],
            notes: ["Candidats de 60 ans et plus : les chutes sautées et acrobatiques ne sont pas demandées. Le candidat réalise donc huit (8) chutes et conserve la notation sur vingt (20), soit 2,5 points par chute."],
            src: { d: "ex1", p: 1 }
          },
          {
            id: "percussions", titre: "Percussions (avec un partenaire)", points: 30, mode: "impose",
            groupes: [
              {
                titre: "Frappes avec les membres supérieurs", points: 10,
                consigne: "Le candidat réalise face à un partenaire en garde :",
                items: [{ fr: "5 frappes distinctes, séparées, à droite et à gauche, avec un membre supérieur (main, coude)" }]
              },
              {
                titre: "Frappes avec les membres inférieurs — 6 coups de pied de base Hapkido", points: null,
                consigne: "Sur une cible. Niveau haut (sang dan ; au niveau de la tête du candidat) si cela est possible pour le candidat, ou au niveau le plus haut possible pour ce dernier, en prenant en considération ses capacités physiques.",
                items: [
                  { fr: "De face", ko: "Ap Tchagi" },
                  { fr: "Latéral", ko: "Yeop Tchagi" },
                  { fr: "Circulaire fouetté", ko: "Tchiguo Tchagi" },
                  { fr: "Marteau", ko: "Dwikkumtchi Naeryeo Djikgi / Naeryeo Tchagi" },
                  { fr: "Coup de pied arrière direct", ko: "Dwi Tchagi" },
                  { fr: "Circulaire retourné avec le talon", ko: "Momdollyeo Tchagi" }
                ]
              },
              {
                titre: "Frappes avec les membres inférieurs — 4 coups de pied spéciaux Hapkido", points: null,
                items: [
                  { fr: "Attaque à la rotule avec tranchant du pied", ko: "Ha dan Jok-do Tchagi" },
                  { fr: "Attaque à la rotule avec le talon vers l’extérieur", ko: "Dwikumtchi Mit Tchagi" },
                  { fr: "Circulaire retourné, niveau bas", ko: "Anja Dollyeo Tchagi" },
                  { fr: "Coup de pied fouetté au sol", ko: "Anja Tchiguo Tchagi" }
                ]
              }
            ],
            notes: ["Les 10 coups de pied (6 de base + 4 spéciaux) sont notés ensemble sur 20 points."],
            src: { d: "ex1", p: 2 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 30, seuil: 15, src: { d: "ex1", p: 3 },
        resume: "Une épreuve sur la FFTDA et une épreuve de connaissance terminologique",
        epreuves: [
          {
            id: "fftda", titre: "La FFTDA", points: 15, mode: "qcm", qcm: null,
            consigne: ["Le candidat répond à un Q.C.M portant sur chaque thème :"],
            items: [{ fr: "La Fédération Française de Taekwondo et Disciplines Associées" }, { fr: "La vie associative" }],
            manque: "Le contenu de ces thèmes (questions, référentiel) n’est pas présent dans les documents fournis.",
            src: { d: "ex1", p: 3 }
          },
          {
            id: "theorie", titre: "La théorie", points: 15, mode: "qcm", qcm: "lexique",
            consigne: ["Le candidat répond à un Q.C.M portant sur le lexique terminologique du Hapkido."],
            src: { d: "ex1", p: 3 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 60, seuil: 30, src: { d: "ex1", p: 3 },
        resume: "Défenses sur saisies, défense contre une attaque, combat souple",
        partenaire: true,
        epreuves: [
          {
            id: "saisies", titre: "Saisies", points: 30, mode: "impose",
            consigne: ["Le candidat réalise, avec un partenaire, dix (10) techniques contre :"],
            groupes: [
              {
                titre: "Saisie au poignet", ko: "Son-Mok Sool", points: 15,
                items: [
                  { fr: "Une saisie une main sur le poignet du même côté", ko: "An Son Mok" },
                  { fr: "Une saisie une main sur le poignet du côté opposé", ko: "Bandae Son Mok" },
                  { fr: "Une saisie des 2 poignets avec les mains", ko: "Du Son Mok" },
                  { fr: "Une saisie d’un poignet avec deux mains", ko: "Du Son Jabgi" },
                  { fr: "Une saisie des deux poignets de dos", ko: "Dwi Du Son Mok" }
                ]
              },
              {
                titre: "Saisie au vêtement", ko: "Eui-Bok Sool", points: 15,
                items: [
                  { fr: "Saisie de face d’une manche", ko: "So Maekeut" },
                  { fr: "Saisie de face le revers du col", ko: "Myeok Sal Baro" },
                  { fr: "Saisie arrière une main au col", ko: "Dwi Mok Delmi" },
                  { fr: "Saisie arrière aux épaules", ko: "Dwi Du Eokae" },
                  { fr: "Saisie arrière de manche", ko: "Dwi Du Palkup" }
                ]
              }
            ],
            src: { d: "ex1", p: 3 }
          },
          {
            id: "defense", titre: "Défense", points: 20, mode: "tirage",
            groupes: [
              {
                titre: "Défense contre une percussion poing ou une percussion pied", ko: "Bang Kwon Sool / Bang Jok Sool", points: 10,
                consigne: "5 techniques tirées au sort par le jury parmi les techniques indiquées ci-dessous (chaque attaque en coup de pied peut être tirée au sort une fois et l’attaque en coup de poing peut être tirée au sort une à trois fois). Les techniques de défense incluent des percussions, des clés et des projections.",
                items: [
                  { fr: "Défense contre un coup de poing" },
                  { fr: "Défense contre un coup de pied de face", ko: "Ap Tchagi" },
                  { fr: "Défense contre un coup de pied de côté", ko: "Yeop Tchagi" },
                  { fr: "Défense contre un coup de pied circulaire fouetté", ko: "Tchiguo Tchagi" },
                  { fr: "Défense contre un coup de pied circulaire retourné talon de face", ko: "Momdollyeo Tchagi" },
                  { fr: "Défense contre un coup de pied circulaire retourné niveau bas", ko: "Anja Dollyeo Tchagi" }
                ],
                tirage: {
                  n: 5,
                  pool: [
                    { label: "Défense contre un coup de poing", max: 3 },
                    { label: "Défense contre un coup de pied de face (Ap Tchagi)", max: 1 },
                    { label: "Défense contre un coup de pied de côté (Yeop Tchagi)", max: 1 },
                    { label: "Défense contre un coup de pied circulaire fouetté (Tchiguo Tchagi)", max: 1 },
                    { label: "Défense contre un circulaire retourné talon de face (Momdollyeo Tchagi)", max: 1 },
                    { label: "Défense contre un circulaire retourné niveau bas (Anja Dollyeo Tchagi)", max: 1 }
                  ],
                  alerte: "ambig-tirage"
                }
              },
              {
                titre: "Défense contre une attaque au couteau", points: 10,
                consigne: "5 techniques tirées au sort par le jury parmi les techniques indiquées ci-dessous (une à deux techniques peuvent être tirées au sort par type d’attaque).",
                items: [
                  { fr: "Contre une attaque de face", ko: "Ap Yese Kongkyeok" },
                  { fr: "Contre une attaque sur le côté extérieur", ko: "Yeop Yese Kongkyeok" },
                  { fr: "Contre une attaque sur le côté intérieur", ko: "An Yese Kongkyeok" },
                  { fr: "Contre une attaque de haut en bas", ko: "Ywi Yese Kongkyeok" },
                  { fr: "Contre une attaque pointée sur le dos", ko: "Dwi Yese Kongkyeok" }
                ],
                tirage: {
                  n: 5,
                  pool: [
                    { label: "Contre une attaque de face (Ap Yese Kongkyeok)", max: 2 },
                    { label: "Contre une attaque sur le côté extérieur (Yeop Yese Kongkyeok)", max: 2 },
                    { label: "Contre une attaque sur le côté intérieur (An Yese Kongkyeok)", max: 2 },
                    { label: "Contre une attaque de haut en bas (Ywi Yese Kongkyeok)", max: 2 },
                    { label: "Contre une attaque pointée sur le dos (Dwi Yese Kongkyeok)", max: 2 }
                  ],
                  alerte: "ambig-tirage"
                }
              }
            ],
            alertes: ["xmind-1dan-libelles"],
            src: { d: "ex1", p: 3 }
          },
          Object.assign(combatSouple({ d: "ex1", p: 4 }, 10), { renvoi: "Le programme renvoie à une « Annexe 2.1 — règlement des combats souples », non fournie." })
        ]
      }
    ],
    decision: DECISION
  },

  /* ------------------------------------------------------------------ 2e DAN */
  {
    id: "2", num: 2, nom: "2ème Dan", titreCoreen: "Kyo-Sa-Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Décentralisé dans les Ligues",
    conditions: [
      "Être titulaire du grade de 1er Dan",
      "Avoir deux timbres de licence supplémentaires après le 1er Dan, dont celui de la saison en cours",
      "Avoir au minimum 16 ans révolus",
      "Inscription au 2ème Dan réalisée sur la plateforme FFTDA"
    ],
    modalites: "Examens décentralisés dans les Ligues sous la responsabilité du/de la Président(e). Jury de six juges, deux par module, d’un grade supérieur ou égal au 2ème Dan, constitué par le/la Président(e) de Ligue, le Directeur des Grades de Ligue ou le Responsable Disciplines Associées de Ligue et proposé pour validation au Bureau de la CSDGE.",
    nbEpreuves: 8,
    src: { d: "ex2", p: 1 },
    modules: [
      {
        code: "A", nom: "Les formes", points: 50, seuil: 25, src: { d: "ex2", p: 1 },
        resume: "Une épreuve individuelle d’enchaînements libres de percussions Hapkido",
        alertes: ["2dan-nb-enchainements"],
        epreuves: [
          {
            id: "percussions", titre: "Percussions — enchaînements libres", points: 50, mode: "choix",
            consigne: [
              "Le candidat réalise cinq (5) enchaînements libres de percussions Hapkido, exécutés avec les membres supérieurs et les membres inférieurs, d’une durée de 4 à 6 secondes (10 points / enchaînement).",
              "Chaque enchaînement inclut a minima 2 percussions distinctes avec un membre inférieur et 2 percussions distinctes avec un membre supérieur. Chaque enchaînement doit être différent, mais une même percussion peut figurer dans plusieurs enchaînements."
            ],
            src: { d: "ex2", p: 1 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 30, seuil: 15, src: { d: "ex2", p: 1 },
        resume: "Réglementation des passages et progression des grades ; connaissance terminologique",
        epreuves: [
          {
            id: "grades", titre: "Les grades", points: 15, mode: "qcm", qcm: "grades",
            consigne: ["Le candidat répond à un Q.C.M portant sur la réglementation des passages de grades et la progression des grades."],
            manque: "Le règlement de la CSDGE relatif à la délivrance des Dans n’est pas fourni : l’entraînement proposé se limite aux programmes d’examen fournis.",
            src: { d: "ex2", p: 1 }
          },
          {
            id: "theorie", titre: "La théorie", points: 15, mode: "qcm", qcm: "lexique",
            consigne: ["Le candidat répond à un Q.C.M portant sur le lexique terminologique du Hapkido."],
            src: { d: "ex2", p: 2 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 70, seuil: 35, src: { d: "ex2", p: 2 },
        resume: "Saisies, attaques, défenses au bâton court, blocages au bâton court, combat souple",
        partenaire: true,
        epreuves: [
          {
            id: "saisies", titre: "Saisies", points: 20, mode: "tirage",
            consigne: ["Le candidat réalise avec un partenaire dix (10) techniques sur :"],
            groupes: [
              {
                titre: "Saisie au cou", points: 10,
                consigne: "5 techniques tirées au sort par le jury parmi les techniques indiquées ci-dessous (une à deux techniques peuvent être tirées au sort par type de saisie ou étranglement).",
                items: [
                  { fr: "Saisie du cou sur le côté", ko: "Yeopmok Joreugi" },
                  { fr: "Saisie au cou par l’arrière", ko: "Dwimok Joreugi" },
                  { fr: "Saisie au cou au sol de côté", ko: "Nu Eose Yeopmok Joreugi" },
                  { fr: "Étranglement au cou avec les deux mains de face", ko: "Apmok Joreugi" },
                  { fr: "Étranglement de face avec les deux revers du dobok", ko: "Myeoksal Baromok Joreugi" }
                ],
                tirage: {
                  n: 5,
                  pool: [
                    { label: "Saisie du cou sur le côté (Yeopmok Joreugi)", max: 2 },
                    { label: "Saisie au cou par l’arrière (Dwimok Joreugi)", max: 2 },
                    { label: "Saisie au cou au sol de côté (Nu Eose Yeopmok Joreugi)", max: 2 },
                    { label: "Étranglement à deux mains de face (Apmok Joreugi)", max: 2 },
                    { label: "Étranglement de face avec les deux revers (Myeoksal Baromok Joreugi)", max: 2 }
                  ],
                  alerte: "ambig-tirage"
                }
              },
              {
                titre: "Position en tailleur sur le sol", points: 10,
                consigne: "5 techniques tirées au sort par le jury parmi les techniques indiquées ci-dessous (une à deux techniques peuvent être tirées au sort par type de tentative de saisie, de saisie ou de percussion). La personne en position en tailleur se défend :",
                items: [
                  { fr: "Avec un coup de pied contre une tentative de saisie (poignet, col…)" },
                  { fr: "Avec une clé contre une saisie au poignet" },
                  { fr: "Avec une clé contre une saisie au vêtement" },
                  { fr: "Avec une clé contre une percussion avec les membres supérieurs" },
                  { fr: "Avec une clé contre une percussion avec les membres inférieurs" }
                ],
                tirage: {
                  n: 5,
                  pool: [
                    { label: "Coup de pied contre une tentative de saisie (poignet, col…)", max: 2 },
                    { label: "Clé contre une saisie au poignet", max: 2 },
                    { label: "Clé contre une saisie au vêtement", max: 2 },
                    { label: "Clé contre une percussion avec les membres supérieurs", max: 2 },
                    { label: "Clé contre une percussion avec les membres inférieurs", max: 2 }
                  ],
                  alerte: "ambig-tirage"
                }
              }
            ],
            src: { d: "ex2", p: 2 }
          },
          {
            id: "attaque", titre: "Attaque", points: 10, mode: "tirage",
            consigne: ["Le candidat réalise avec un partenaire quatre (4) techniques d’attaque sur :"],
            groupes: [
              {
                titre: "Un partenaire ayant les bras le long du corps", points: 5,
                consigne: "2 techniques tirées au sort par le jury parmi les techniques ci-dessous (une technique peut être tirée au sort par type d’attaque).",
                items: [{ fr: "Attaque avec une clé" }, { fr: "Attaque avec une projection" }, { fr: "Attaque avec une ou plusieurs percussions" }],
                tirage: { n: 2, pool: [{ label: "Attaque avec une clé", max: 1 }, { label: "Attaque avec une projection", max: 1 }, { label: "Attaque avec une ou plusieurs percussions", max: 1 }] }
              },
              {
                titre: "Un partenaire en garde", points: 5,
                consigne: "2 techniques tirées au sort par le jury parmi les techniques ci-dessous (une technique peut être tirée au sort par type d’attaque).",
                items: [{ fr: "Attaque avec une clé" }, { fr: "Attaque avec une projection" }, { fr: "Attaque avec une ou plusieurs percussions" }],
                tirage: { n: 2, pool: [{ label: "Attaque avec une clé", max: 1 }, { label: "Attaque avec une projection", max: 1 }, { label: "Attaque avec une ou plusieurs percussions", max: 1 }] }
              }
            ],
            src: { d: "ex2", p: 2 }
          },
          {
            id: "danbong", titre: "Défense avec un bâton court", ko: "Dan-Bong Sool", points: 20, mode: "impose",
            consigne: ["Le candidat réalise avec un partenaire dix (10) techniques de défense avec un bâton court parmi les techniques indiquées ci-dessous :"],
            items: [
              { fr: "2 défenses contre une attaque avec un coup de poing" },
              { fr: "2 défenses contre une attaque avec un coup de pied" },
              { fr: "2 défenses contre une saisie au poignet" },
              { fr: "2 défenses contre une saisie au vêtement" },
              { fr: "2 défenses contre un partenaire avec les bras le long du corps" }
            ],
            src: { d: "ex2", p: 3 }
          },
          {
            id: "jukdo", titre: "Blocage avec un bâton court contre un sabre en bambou", ko: "Jukdo Sool", points: 10, mode: "impose",
            items: [{ fr: "5 techniques de blocage distincts, séparés, avec un bâton court contre un sabre en bambou" }],
            src: { d: "ex2", p: 3 }
          },
          combatSouple({ d: "ex2", p: 3 }, 10)
        ]
      }
    ],
    decision: DECISION
  },

  /* ------------------------------------------------------------------ 3e DAN */
  {
    id: "3", num: 3, nom: "3ème Dan", titreCoreen: "Boo-Sa-Beom-Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Organisé par la Fédération",
    conditions: [
      "Être titulaire du grade de 2ème Dan",
      "Avoir trois timbres de licence supplémentaires après le 2ème Dan, dont celui de la saison en cours",
      "Inscription au 3ème Dan réalisée sur la plateforme FFTDA"
    ],
    modalites: "Examens organisés par la Fédération. Jury de six juges, deux par module, d’un grade supérieur ou égal au 4ème Dan, constitué par le Bureau de la CSDGE. Les sessions se déroulent aux lieux et dates des examens prévus par la Fédération.",
    nbEpreuves: 6,
    src: { d: "ex3", p: 1 },
    modules: [
      {
        code: "A", nom: "Les formes", points: 50, seuil: 25, src: { d: "ex3", p: 1 },
        resume: "Enchaînements de deux coups de pied et coups de pied sautés",
        epreuves: [
          {
            id: "enchainements", titre: "Enchaînements de coups de pied Hapkido", points: 30, mode: "choix",
            consigne: ["Chaque candidat exécute 6 enchaînements de 2 coups de pied, choisis par le candidat, dans la liste suivante :"],
            items: [
              { fr: "De face", ko: "Ap Tchagi" },
              { fr: "Latéral", ko: "Yeop Tchagi" },
              { fr: "Circulaire fouetté", ko: "Tchiguo Tchagi" },
              { fr: "Marteau", ko: "Dwikkumtchi Naeryeo Tchagi" },
              { fr: "Coup de pied arrière direct", ko: "Dwi Tchagi" },
              { fr: "Circulaire retourné avec le talon", ko: "Momdollyeo Tchagi" },
              { fr: "Coup de genou", ko: "Mureup Tchigi" },
              { fr: "Coup de pied jambe tendue extérieur vers l’intérieur", ko: "Anjokdo Hurigi" },
              { fr: "Coup de pied tranchant jambe tendue intérieur vers l’extérieur", ko: "Bakkatjokdo Hurigi" },
              { fr: "Coup de pied circulaire bas à ras du sol", ko: "Anja Tchiguo Tchagi" },
              { fr: "Coup de pied retourné (circulaire arrière) bas à ras du sol", ko: "Anja Dollyeo Tchagi" },
              { fr: "Attaque à la rotule avec le tranchant du pied", ko: "Ha Dan Jok-do Tchagi" },
              { fr: "Attaque à la rotule avec le talon vers l’extérieur", ko: "Dwikkumtchi Mit Tchagi" }
            ],
            src: { d: "ex3", p: 1 }
          },
          {
            id: "sautes", titre: "Coups de pied sautés sur cible", points: 20, mode: "choix",
            consigne: ["Le candidat réalise sur une cible quatre (4) coups de pied sautés parmi les suivants, au choix du candidat :"],
            items: [
              { fr: "Circulaire retourné, talon de face sauté", ko: "Dwieo Momdollyeo Tchagi" },
              { fr: "De face sauté", ko: "Dwieo Ap Tchagi" },
              { fr: "Fouetté sauté", ko: "Dwieo Tchiguo Tchagi" },
              { fr: "Coup de pied sauté de face des deux pieds", ko: "Dubal Moa Ap Tchagi" },
              { fr: "Coup de pied sauté grand écart", ko: "Yangbal Bolyeo Ap Tchagi" },
              { fr: "Coup de pied sauté latéral avec les 2 pieds joints", ko: "Yangbal Moa Idan Yeop Tchagi" },
              { fr: "Coup de pied fouetté sauté avec les 2 pieds joints", ko: "Yangbal Moa Idan Tchiguo Tchagi" },
              { fr: "Coup de poing et coup de pied sauté latéral", ko: "Yeop Tchagi" }
            ],
            notes: ["Candidats Master 1, 2 et 3 (30 ans et plus) : les coups de pied sautés peuvent être, au choix du candidat, remplacés par deux (2) coups de pied retournés non sautés exécutés successivement avec le pied droit, puis avec le pied gauche (20 points) : coup de pied arrière direct (Dwi Tchagi) et circulaire retourné avec le talon (Momdollyeo Tchagi)."],
            src: { d: "ex3", p: 2 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 30, seuil: 15, src: { d: "ex3", p: 2 },
        resume: "Réglementation des compétitions combat et technique Hapkido et de l’arbitrage",
        epreuves: [
          {
            id: "combat", titre: "La compétition combat", points: 15, mode: "qcm", qcm: "combat",
            consigne: ["Le candidat répond à un Q.C.M portant sur la réglementation des compétitions combat Hapkido au sein de la F.F.T.D.A."],
            src: { d: "ex3", p: 2 }
          },
          {
            id: "technique", titre: "La compétition technique", points: 15, mode: "qcm", qcm: "technique",
            consigne: ["Le candidat répond à un Q.C.M portant sur la réglementation des compétitions techniques Hapkido au sein de la F.F.T.D.A."],
            src: { d: "ex3", p: 2 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 60, seuil: 30, src: { d: "ex3", p: 2 },
        resume: "Défense assis sur une chaise, attaque et défense avec une ceinture, combat souple",
        partenaire: true,
        epreuves: [
          {
            id: "chaise", titre: "Défense en position assise sur une chaise", points: 25, mode: "tirage",
            consigne: ["Le candidat, en position assise sur une chaise, réalise avec un partenaire 5 techniques de défense tirées au sort par le jury parmi les techniques indiquées ci-dessous (une à deux techniques peuvent être tirées au sort par type de saisie ou d’attaque) :"],
            items: [
              { fr: "Sur une saisie au poignet" },
              { fr: "Sur une saisie d’un poignet avec les deux mains" },
              { fr: "Sur une saisie au vêtement" },
              { fr: "Contre un coup de poing" },
              { fr: "Contre un coup de pied" }
            ],
            tirage: {
              n: 5,
              pool: [
                { label: "Sur une saisie au poignet", max: 2 },
                { label: "Sur une saisie d’un poignet avec les deux mains", max: 2 },
                { label: "Sur une saisie au vêtement", max: 2 },
                { label: "Contre un coup de poing", max: 2 },
                { label: "Contre un coup de pied", max: 2 }
              ],
              alerte: "ambig-tirage"
            },
            src: { d: "ex3", p: 2 }
          },
          {
            id: "ceinture", titre: "Attaque et défense avec une ceinture", ko: "Po-Bak Sool", points: 25, mode: "tirage",
            consigne: ["Le candidat réalise avec un partenaire 5 techniques d’attaque ou de défense avec la ceinture tirées au sort par le jury parmi les techniques indiquées ci-dessous (deux à trois techniques peuvent être tirées au sort par type d’attaque ou de défense) :"],
            items: [
              { fr: "Attaque avec la ceinture contre un partenaire en garde" },
              { fr: "Défense contre un coup de poing" },
              { fr: "Défense contre un coup de pied" }
            ],
            tirage: {
              n: 5,
              pool: [
                { label: "Attaque avec la ceinture contre un partenaire en garde", max: 3 },
                { label: "Défense avec la ceinture contre un coup de poing", max: 3 },
                { label: "Défense avec la ceinture contre un coup de pied", max: 3 }
              ],
              alerte: "ambig-tirage-3dan"
            },
            src: { d: "ex3", p: 3 }
          },
          combatSouple({ d: "ex3", p: 3 }, 10)
        ]
      }
    ],
    decision: DECISION
  },

  /* ------------------------------------------------------------------ 4e DAN */
  {
    id: "4", num: 4, nom: "4ème Dan", titreCoreen: "Sa-Beom-Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Organisé par la Fédération",
    conditions: [
      "Être titulaire du grade de 3ème Dan",
      "Avoir 4 timbres de licence supplémentaires après le 3ème Dan, dont celui de la saison en cours",
      "Inscription au 4ème Dan réalisée sur la plateforme FFTDA"
    ],
    modalites: "Examens organisés par la Fédération. Jury de six juges, deux par module, d’un grade supérieur ou égal au 5ème Dan, constitué par le Bureau de la CSDGE. Les sessions se déroulent aux lieux et dates des examens prévus par la Fédération.",
    nbEpreuves: 7,
    src: { d: "ex4", p: 1 },
    modules: [
      {
        code: "A", nom: "Les formes", points: 40, seuil: 20, src: { d: "ex4", p: 1 },
        resume: "Enchaînements libres de quatre coups de pied",
        epreuves: [
          {
            id: "percussions", titre: "Percussions", points: 40, mode: "choix",
            consigne: ["Le candidat réalise quatre (4) enchaînements de 4 coups de pied Hapkido sur 4 cibles positionnées devant, derrière et sur chaque côté du candidat. Les enchaînements de coups de pied sont au choix du candidat."],
            src: { d: "ex4", p: 1 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 20, seuil: 10, src: { d: "ex4", p: 1 },
        resume: "Historique fédéral et mondial du Hapkido",
        alertes: ["4dan-points-moduleB"],
        epreuves: [
          {
            id: "histoire", titre: "Le Hapkido à l’échelle fédérale et mondiale", points: 20, mode: "qcm", qcm: null,
            consigne: ["Le candidat répond à un Q.C.M portant sur deux thèmes :"],
            items: [{ fr: "Le Hapkido au sein de la F.F.T.D.A." }, { fr: "Le Hapkido à l’échelle mondiale" }],
            manque: "Aucun contenu historique n’est présent dans les documents fournis.",
            src: { d: "ex4", p: 1 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 70, seuil: 35, src: { d: "ex4", p: 2 },
        resume: "Contre-techniques, canne ou bâton long, deux adversaires, arrestation, combat souple",
        partenaire: true,
        epreuves: [
          {
            id: "contre", titre: "Contre-technique", points: 20, mode: "choix",
            consigne: ["Le candidat réalise avec un partenaire 5 « contre-techniques » sur une technique de clé ou de projection."],
            src: { d: "ex4", p: 2 }
          },
          {
            id: "canne", titre: "Attaque et défense avec une canne ou un bâton long", ko: "Ji-Pang Sool / Jang-Bong Sool", points: 20, mode: "tirage",
            consigne: ["Le candidat réalise avec un partenaire 5 techniques tirées au sort par le jury parmi les techniques ci-dessous (une à trois techniques peuvent être tirées au sort par type d’attaque ou de défense). L’arme est au choix du candidat."],
            items: [
              { fr: "Attaque avec la canne ou le bâton long contre un adversaire en garde" },
              { fr: "Défense avec une canne ou un bâton long contre un coup de poing" },
              { fr: "Défense avec une canne ou un bâton long contre un coup de pied" }
            ],
            tirage: {
              n: 5,
              pool: [
                { label: "Attaque avec la canne / le bâton long contre un adversaire en garde", max: 3 },
                { label: "Défense avec la canne / le bâton long contre un coup de poing", max: 3 },
                { label: "Défense avec la canne / le bâton long contre un coup de pied", max: 3 }
              ],
              alerte: "ambig-tirage"
            },
            src: { d: "ex4", p: 2 }
          },
          {
            id: "deux", titre: "Défense contre deux adversaires", points: 10, mode: "choix",
            consigne: [
              "Le candidat réalise deux enchaînements de 2 techniques de défense contre des percussions, des saisies au poignet ou des saisies au vêtement, réalisées successivement par les 2 partenaires.",
              "Les 2 partenaires sont situés de face à 45° par rapport au candidat. Les enchaînements de techniques et la nature des attaques sont librement choisis par le candidat."
            ],
            src: { d: "ex4", p: 2 }
          },
          {
            id: "arrestation", titre: "Arrestation d’un adversaire en marche", points: 10, mode: "choix",
            consigne: [
              "Le candidat réalise avec un partenaire quatre (4) techniques d’arrestation avec une immobilisation de l’adversaire au sol ou avec les mains bloquées dans le dos.",
              "La position du partenaire par rapport au candidat est librement choisie par le candidat : de face ou de dos."
            ],
            src: { d: "ex4", p: 2 }
          },
          combatSouple({ d: "ex4", p: 2 }, 10)
        ]
      }
    ],
    decision: DECISION
  },

  /* ------------------------------------------------------------------ 5e DAN */
  {
    id: "5", num: 5, nom: "5ème Dan", titreCoreen: "Soo-Suk-Sa-Beom Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Organisé par la Fédération",
    conditions: [
      "Être titulaire du grade de 4ème Dan",
      "Avoir cinq timbres de licence supplémentaires après le 4ème Dan, dont celui de la saison en cours",
      "Inscription au 5ème Dan réalisée sur la plateforme FFTDA"
    ],
    modalites: "Examens organisés par la Fédération. Jury de six juges, deux par module, d’un grade supérieur ou égal au 6ème Dan, constitué par le Bureau de la CSDGE. Les sessions se déroulent aux lieux et dates des examens prévus par la Fédération.",
    nbEpreuves: 5,
    src: { d: "ex5", p: 1 },
    modules: [
      {
        code: "A", nom: "Les connaissances", points: 40, seuil: 20, src: { d: "ex5", p: 1 },
        resume: "Approche de l’enseignement",
        epreuves: [
          {
            id: "decomposition", titre: "Décomposition pédagogique d’une technique", points: 40, mode: "demo",
            consigne: [
              "Le candidat décompose, sur une durée maximum de 5 min, une technique de clé ou de projection contre saisie au poignet dans le cadre d’un cours destiné à un public adulte.",
              "Les points clés de la réalisation de la technique au niveau physiologique (respiration, contrôle de l’énergie, utilisation des muscles) et au niveau biomécanique (sécurité, position du corps, déplacement, points vitaux, forces appliquées) doivent être expliqués.",
              "Le jury peut, après la présentation, poser des questions et demander des précisions sur la démonstration."
            ],
            src: { d: "ex5", p: 1 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 40, seuil: 20, src: { d: "ex5", p: 1 },
        resume: "Développement du Hapkido — bilan réflexif écrit et soutenu oralement",
        alertes: ["5dan-sujet"],
        epreuves: [
          {
            id: "bilan", titre: "Bilan réflexif", points: 40, mode: "ecrit", lienMemoire: true,
            consigne: [
              "Le candidat prépare par écrit un bilan réflexif.",
              "Le sujet proposé par le candidat devra être le fruit d’une expérience vécue ou d’un projet mené dans son parcours de Hapkido-in (compétiteurs, enseignants, arbitres, juges, dirigeants, pratiquants, organisateurs, etc.).",
              "Ce sujet sera transmis à la CSDGE pour validation au plus tard 4 mois avant l’examen de Dan. Un tuteur sera proposé au candidat ; le candidat peut aussi proposer une personne correspondant aux critères, la CSDGE devant alors valider le tutorat.",
              "Le candidat soutient oralement son mémoire lors de l’examen. Les modalités de rédaction sont précisées en annexe (Annexe 4)."
            ],
            src: { d: "ex5", p: 1 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 80, seuil: 40, src: { d: "ex5", p: 2 },
        resume: "Défense avec une arme, défense contre une arme, saisies",
        partenaire: true,
        epreuves: [
          {
            id: "avecarme", titre: "Défense avec une arme", points: 20, mode: "choix",
            consigne: ["Le candidat réalise avec un partenaire dix (10) techniques de défense avec une arme (canne, ceinture ou bâton ; au libre choix du candidat) contre une attaque au libre choix du candidat."],
            src: { d: "ex5", p: 2 }
          },
          {
            id: "contrearme", titre: "Défense contre une arme", points: 20, mode: "choix",
            consigne: ["Le candidat réalise dix (10) techniques de défense à main nue ou avec un bâton (court ou long) contre une attaque avec une arme, au libre choix du candidat (revolver, bâton court, bâton long, sabre bambou…)."],
            src: { d: "ex5", p: 2 }
          },
          {
            id: "saisie", titre: "Saisie", points: 40, mode: "tirage", simulable: false,
            consigne: [
              "Le candidat réalise vingt (20) techniques de défense contre une saisie, tirées au sort par le jury parmi toutes les saisies demandées dans les passages de grades du 1er au 4ème Dan.",
              "Les techniques doivent être réalisées dans les 3 secondes qui suivent la saisie."
            ],
            nonSimule: "Tirage non simulé : la liste exacte des « saisies demandées du 1er au 4ème Dan » et la possibilité de répétition ne sont pas définies par le document. Révisez la liste des saisies nommées dans les programmes (rubrique Révision).",
            src: { d: "ex5", p: 2 }
          }
        ]
      }
    ],
    decision: DECISION
  },

  /* ------------------------------------------------------------------ 6e DAN */
  {
    id: "6", num: 6, nom: "6ème Dan", titreCoreen: "Kwan-Jang-Nim",
    titreSrc: { d: "syn", p: 1 },
    organisation: "Organisé par la Fédération",
    conditions: [
      "Être titulaire du grade de 5ème Dan",
      "Avoir six timbres de licence supplémentaires après le 5ème Dan, dont celui de la saison en cours",
      "Inscription au 6ème Dan réalisée sur la plateforme FFTDA"
    ],
    conditionsAlertes: ["6dan-20ans"],
    modalites: "Examens organisés par la Fédération. Jury de six juges, deux par module, d’un grade supérieur ou égal au 7ème Dan, constitué par le Bureau de la CSDGE. Les sessions se déroulent aux lieux et dates des examens prévus par la Fédération.",
    nbEpreuves: 5,
    nbEpreuvesNote: "Le document annonce cinq épreuves ; la description détaille un module A, un module B et une épreuve unique en module C.",
    src: { d: "ex6", p: 1 },
    modules: [
      {
        code: "A", nom: "Les connaissances", points: 40, seuil: 20, src: { d: "ex6", p: 1 },
        resume: "Approche technique du Hapkido",
        epreuves: [
          {
            id: "hoshinsool", titre: "Décomposition de techniques de Hoshinsool", points: 40, mode: "demo",
            consigne: ["Le candidat décompose une technique de Hoshinsool en réponse à chacune des attaques suivantes :"],
            items: [
              { fr: "Saisie aux poignets" }, { fr: "Saisie au vêtement" }, { fr: "Frappe avec les membres supérieurs" },
              { fr: "Frappe avec les membres inférieurs" }, { fr: "Étranglement" }, { fr: "Attaque avec une arme" }
            ],
            notes: [
              "Les points clés de la réalisation doivent être expliqués au niveau physiologique (respiration, contrôle de l’énergie), mécanique (sécurité, position du corps, points vitaux, muscles en action) et moteur (déplacements, coordination, position du corps).",
              "Le candidat devra enfin proposer deux évolutions de la technique dans des contextes d’application différents."
            ],
            src: { d: "ex6", p: 1 }
          }
        ]
      },
      {
        code: "B", nom: "La théorie", points: 40, seuil: 20, src: { d: "ex6", p: 2 },
        resume: "Développement du Hapkido — mémoire écrit et soutenu oralement",
        epreuves: [
          {
            id: "memoire", titre: "Mémoire", points: 40, mode: "ecrit", lienMemoire: true,
            consigne: [
              "Le candidat prépare par écrit un mémoire.",
              "Le sujet proposé par le candidat devra être le fruit d’une expérience vécue ou d’un projet mené dans son parcours de Hapkido-in (compétiteurs, enseignants, arbitres, juges, dirigeants, pratiquants, organisateurs, etc.).",
              "Ce sujet sera transmis à la CSDGE pour validation au plus tard 4 mois avant l’examen de Dan. Un tuteur sera proposé au candidat ; le candidat peut aussi proposer une personne correspondant aux critères, la CSDGE devant alors valider le tutorat.",
              "Le candidat soutient oralement son mémoire lors de l’examen. Les modalités de rédaction sont précisées en annexe (Annexe 4)."
            ],
            src: { d: "ex6", p: 2 }
          }
        ]
      },
      {
        code: "C", nom: "Application technique", points: 80, seuil: 40, src: { d: "ex6", p: 2 },
        resume: "Épreuve libre : démonstration de la pratique du Hapkido",
        epreuves: [
          {
            id: "demo", titre: "Démonstration illustrant la pratique du Hapkido", points: 80, mode: "demo",
            consigne: [
              "Le candidat effectue une démonstration illustrant la pratique du Hapkido. Le jury devra comprendre les grands principes inhérents à la pratique du Hapkido du candidat.",
              "Le candidat doit expliciter, verbalement ou non, les différentes parties de sa présentation et leur rôle dans sa pratique. Une attention particulière est portée à la cohérence entre les différents mouvements et leur application concrète (exemple : utilisation d’une percussion dans le cadre d’un combat ou d’une situation de self-défense).",
              "Durée : démonstration de 15 minutes, suivie d’un entretien de 15 minutes avec le jury sur le contenu de la présentation."
            ],
            items: [
              { fr: "Des percussions avec les membres inférieurs" },
              { fr: "Des percussions avec les membres supérieurs" },
              { fr: "Des techniques de Hoshinsool avec ou sans armes" },
              { fr: "Des chutes" },
              { fr: "Le cérémonial martial propre au Hapkido" }
            ],
            itemsTitre: "La démonstration intègre a minima trois des cinq items suivants :",
            src: { d: "ex6", p: 2 }
          }
        ]
      }
    ],
    decision: DECISION
  }
];

/* Grades Keup : présents dans le XMind (Keup › Adultes +16 ans) mais sans document source */
HKD.keup = {
  xmind: "Keup › Adultes (+16 ans)",
  seulFait: { texte: "Le seul élément documenté : l’accès au 1er Dan requiert d’être titulaire du grade de ceinture rouge 1er Keup.", src: { d: "ex1", p: 1 } }
};

/* Préalables communs (Annexe 2) */
HKD.prealables = {
  texte: "Passeport sportif à jour et en règle ; formulaire d’inscription en ligne.",
  src: { d: "syn", p: 1 }
};

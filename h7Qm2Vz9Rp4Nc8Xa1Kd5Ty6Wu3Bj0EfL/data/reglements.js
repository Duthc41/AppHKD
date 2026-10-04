/* =====================================================================
   RÈGLEMENTS — compétition, combat (arbitrage), technique (jugement)
   Contenu reformulé de manière synthétique sans en modifier le sens.
   Blocs : p (paragraphe), ul (liste), table, kv (paires), note
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.reglements = {
  /* ============================================================ COMPÉTITION */
  competition: {
    titre: "Règlement des compétitions",
    source: "comp",
    intro: "Cadre général des compétitions Hapkido FFTDA : catégories d’âge et de poids, modalités des combats, dispositions diverses et compétition technique par paires.",
    sections: [
      {
        id: "age", titre: "Âge de référence", src: { d: "comp", p: 4 },
        blocs: [
          { t: "p", v: "L’âge de référence pour toute la saison sportive en cours est l’âge du licencié au 31/12 de l’année civile qui suit le début de saison. Chaque saison, la Fédération édite les années de naissance qui déterminent les catégories." }
        ]
      },
      {
        id: "combat-categories", titre: "Combat — catégories et durées", src: { d: "comp", p: 4 },
        blocs: [
          { t: "table", head: ["Catégorie", "Âges", "Temps d’exécution", "En cas d’égalité (1-1)"], rows: [
            ["Minimes (« promesses »)", "10 & 11 ans", "2 reprises de 1 min, 30 s de repos", "3e reprise de 1 min (30 s de repos)"],
            ["Cadets (« promesses »)", "12, 13 & 14 ans", "2 reprises de 1 min 30, 1 min de repos", "3e reprise de 1 min 30 (1 min de repos)"],
            ["Juniors (« avenir »)", "15, 16 & 17 ans", "2 reprises de 2 min, 1 min de repos", "3e reprise de 2 min (1 min de repos)"],
            ["Seniors", "18 ans et +", "2 reprises de 2 min, 1 min de repos", "3e reprise de 2 min (1 min de repos)"],
            ["Masters 1", "30 à 34 ans", "2 reprises de 1 min 30, 1 min de repos", "3e reprise de 1 min 30 (1 min de repos)"],
            ["Masters 2", "35 à 39 ans", "idem Masters", "idem Masters"],
            ["Masters 3", "40 ans et +", "idem Masters", "idem Masters"]
          ] },
          { t: "note", v: "Pour les Minimes, les surfaces et le temps de combat peuvent être ajustés sur décision de l’organisateur." }
        ]
      },
      {
        id: "combat-poids", titre: "Combat — catégories de poids", src: { d: "comp", p: 4 },
        blocs: [
          { t: "table", head: ["Catégorie", "Masculins", "Féminins"], rows: [
            ["Minimes", "-27 · -34 · -41 · -48 · -55 · +55 kg", "-23 · -30 · -37 · -44 · -51 · +51 kg"],
            ["Cadets", "-33 · -40 · -47 · -55 · -63 · +63 kg", "-29 · -36 · -43 · -51 · -59 · +59 kg"],
            ["Juniors", "-48 · -55 · -63 · -73 · +73 kg", "-44 · -49 · -55 · -63 · +63 kg"],
            ["Seniors et Masters", "-58 · -68 · -80 · +80 kg", "-49 · -57 · -67 · +67 kg"]
          ] },
          { t: "note", v: "Le règlement compétition écrit « 41 kg » et « 51 kg » sans signe pour deux catégories Minimes ; le règlement combat (p. 8) les note « -41 kg » et « -51 kg »." }
        ]
      },
      {
        id: "combat-systeme", titre: "Combat — zones de touche et protections", src: { d: "comp", p: 4 },
        blocs: [
          { t: "table", head: ["Catégorie", "Système (touches valables)"], rows: [
            ["Minimes", "Touches du pied au plastron, projections et balayages"],
            ["Cadets et Juniors", "Touches du pied au plastron et au casque, du poing au plastron, projections et balayages"],
            ["Seniors et Masters", "Touches du pied et du poing au plastron et au casque, touches du pied au niveau de la cuisse, projections et balayages"]
          ] },
          { t: "p", v: "Zone de compétition 10 m x 10 m, surface de combat 8 m x 8 m. Tenue : dobok Hapkido, ceinture, protections tibiales, cubitales et génitales, casque (avec protection faciale à partir de Cadets ; avec ou sans pour les Minimes), plastron, gants (mitaines), protections du pied (pitaines), protège-dents (optionnel pour les Minimes). Protections cubitales optionnelles à partir de Juniors. Les combattantes peuvent porter une protection de poitrine sous le dobok (Juniors, Seniors, Masters)." },
          { t: "p", v: "Jugement Seniors : 1 arbitre central, 2 ou 3 juges de coin, 1 chronométreur rapporteur, 1 opérateur. Médecin officiel de la compétition pour toutes les catégories." }
        ]
      },
      {
        id: "semi-contact", titre: "Logique du semi-contact", src: { d: "comp", p: 7 },
        blocs: [
          { t: "p", v: "Les compétitions combat de Hapkido suivent la logique du semi-contact. Les coups sont dits « lâchés » : les percussions pied et poing peuvent être « appuyées » mais ne doivent pas avoir pour objectif « d’ébranler l’adversaire ». L’impact au niveau de la tête (casque) et du tronc (plastron) doit être modéré, sans puissance excessive. L’intention doit être de gagner aux points. La recherche de la mise hors combat (KO) est strictement interdite." }
        ]
      },
      {
        id: "participation", titre: "Opens et critériums — conditions de participation", src: { d: "comp", p: 7 },
        blocs: [
          { t: "ul", v: [
            "Passeport sportif F.F.T.D.A. à jour et en règle, mentionnant l’absence de contre-indication à la pratique du Hapkido en compétition et une autorisation parentale pour les mineurs",
            "Suivre la procédure administrative d’inscription",
            "Les coachs doivent être licenciés à la F.F.T.D.A.",
            "Le critérium est aussi l’occasion pour les Pupilles et Benjamins de participer à une compétition (combat et technique)"
          ] }
        ]
      },
      {
        id: "pesee", titre: "Pesée", src: { d: "comp", p: 7 },
        blocs: [
          { t: "ul", v: [
            "La veille ou le matin du jour de la compétition, en sous-vêtements (un Senior ou Master peut se peser sans sous-vêtement)",
            "Seconde pesée possible dans la limite de temps fixée par les organisateurs ; les Minimes n’ont droit qu’à une seule pesée",
            "Tolérance de 100 g pour les Cadets et Juniors (port des sous-vêtements)",
            "Durée de pesée recommandée : 2 heures maximum ; salles distinctes hommes/femmes, officiels de même sexe"
          ] }
        ]
      },
      {
        id: "contestation", titre: "Contestation", src: { d: "comp", p: 8 },
        blocs: [
          { t: "p", v: "Les contestations doivent parvenir au directeur de la compétition dans les 10 minutes qui suivent la fin du combat contesté, par l’intermédiaire du coach ou du responsable de l’équipe et après acquittement de la somme prévue dans les tarifs fédéraux." }
        ]
      },
      {
        id: "coach", titre: "Coach", src: { d: "comp", p: 8 },
        blocs: [
          { t: "ul", v: [
            "Passeport sportif à jour, licence et certificat médical de la saison ; être majeur ; suivre la procédure d’inscription",
            "Tenue : survêtement long (haut et bas), chaussures de sport, tête nue ; petite bouteille d’eau en plastique ou gourde transparente et une serviette",
            "Présenter passeport et accréditation en zone de contrôle ; déposer son passeport sur la table de l’aire à chaque combat",
            "Rester assis sur la chaise de coaching pendant tout le combat ; ne jamais traverser la surface de combat",
            "Un coach ne peut pas être compétiteur dans la catégorie coachée dans la même compétition"
          ] },
          { t: "p", v: "En cas de manquement à l’éthique, les mesures peuvent aller jusqu’au retrait de l’accréditation, l’exclusion du site et/ou la saisine de la commission de discipline fédérale de 1ère instance." }
        ]
      },
      {
        id: "strapping", titre: "Strapping", src: { d: "comp", p: 8 },
        blocs: [{ t: "p", v: "Seuls sont autorisés les strappings validés par le médecin officiel de la compétition." }]
      },
      {
        id: "aire", titre: "Aire de compétition (combat)", src: { d: "comp", p: 9 },
        blocs: [
          { t: "kv", v: [
            ["Aire de combat", "Carrée, 8 m x 8 m (ou octogonale)"],
            ["Zone de sécurité", "Au moins 1 m autour de l’aire de combat, de couleur différente"],
            ["Aire de compétition", "Minimum 10 m x 10 m, maximum 12 m x 12 m"],
            ["Tapis", "Élastique, non glissant, ≥ 4 cm, couleur non réfléchissante"]
          ] }
        ]
      },
      {
        id: "tenue-comp", titre: "Tenue et marquage des compétiteurs", src: { d: "comp", p: 9 },
        blocs: [
          { t: "ul", v: [
            "Dobok Hapkido avec une veste de type croisée ou veste Taekwondo, à manches longues ; ceinture",
            "Protections autorisées F.F.T.D.A. ; casque avec protection faciale porté sur la tête (combat)",
            "Au dos du dobok : nom du compétiteur ou de sa structure, nom Hapkido et/ou du style de Hapkido",
            "Identification du fabricant : moins de 10 % de la surface, une seule fois sur la veste et sur le pantalon",
            "Drapeau national, drapeau coréen ou nom et emblème de la structure : sur la manche, le revers de la veste ou le pantalon",
            "Marquage et publicité interdits sur le dobok et sur les protections"
          ] }
        ]
      },
      {
        id: "inscriptions", titre: "Inscriptions (jeunes)", src: { d: "comp", p: 9 },
        blocs: [
          { t: "p", v: "Pour les Minimes, Cadets et Juniors, l’inscription dans une catégorie de poids n’est qu’indicative : ils peuvent participer dans une catégorie supérieure. Dans une même journée, un athlète ne participe que dans une seule catégorie de poids et d’âge." }
        ]
      },
      {
        id: "technique-cat", titre: "Compétition technique — catégories (paires)", src: { d: "comp", p: 10 },
        blocs: [
          { t: "table", head: ["Paire", "Âges"], rows: [
            ["Minimes", "10 & 11 ans"], ["Cadets", "12, 13 & 14 ans"], ["Juniors", "15, 16 & 17 ans"],
            ["Seniors", "18 ans et - 30 ans"], ["Masters", "30 ans et +"]
          ] },
          { t: "p", v: "Les paires Seniors et Masters sont divisées en deux sous-catégories : techniques sans arme et techniques avec arme. Inscription possible dans plusieurs catégories adjacentes, une seule paire par catégorie ou sous-catégorie. Surface 10 m x 10 m, tapis ≥ 2,5 cm. Une marque de couleur (rouge ou bleue) distingue les deux compétiteurs de la paire." }
        ]
      },
      {
        id: "technique-deroulement", titre: "Compétition technique — déroulement", src: { d: "comp", p: 11 },
        blocs: [
          { t: "ul", v: [
            "Deux phases : tour de qualification puis phases finales principale (champion, vice-champion) et secondaire (3e) à élimination directe ; poule si 3 paires ou moins",
            "Opposition en deux reprises, plus une troisième en cas d’égalité",
            "À chaque reprise, la paire exécute 2 techniques ou 2 enchaînements distincts de 3 à 10 secondes, par l’un ou l’autre des membres",
            "Jury de 3 juges nommés par le DTN ou son représentant, ayant suivi la formation juges techniques",
            "Chaque technique est notée sur 5, une reprise sur 10 ; c’est la paire qui est notée"
          ] }
        ]
      }
    ]
  },

  /* ============================================================ ARBITRAGE COMBAT */
  arbitrage: {
    titre: "Arbitrage combat",
    source: "arb",
    intro: "Règlement des compétitions combat Hapkido : aire, déroulement, techniques autorisées, points, sanctions, décisions et officiels.",
    sections: [
      {
        id: "aire", titre: "Aire de combat et placements", src: { d: "arb", p: 4 },
        blocs: [
          { t: "kv", v: [
            ["Aire de combat carrée", "8 m x 8 m, entourée d’une zone de sécurité d’au moins 1 m"],
            ["Aire octogonale", "Environ 8 m de diamètre, côtés d’environ 3,3 m, dans une aire carrée de 10 à 12 m"],
            ["Lignes limites", "L-1 = côté table d’arbitrage, puis L-2, L-3, L-4 dans le sens des aiguilles d’une montre"],
            ["Combattants", "Sur deux repères opposés, à 1 m du centre, parallèles à L-1"],
            ["Arbitre central", "À 1,5 m du centre, vers la ligne L-3"],
            ["Juges", "À l’extérieur des angles ; avec 2 juges, le juge 2 est dans l’angle opposé au juge 1"],
            ["Coachs", "À 2 m ou plus du milieu de la ligne limite, du côté de leur combattant"],
            ["Couleurs", "« Chung » = Bleu · « Hong » = Rouge"]
          ] },
          { t: "p", v: "La présence d’un médecin (interne ou titulaire) est obligatoire durant les compétitions combat (p. 4)." }
        ]
      },
      {
        id: "equipement", titre: "Équipement des combattants", src: { d: "arb", p: 6 },
        blocs: [
          { t: "ul", v: [
            "Protection du tronc, de la tête, de l’aine (coquille), des tibias et des avant-bras (avant-bras obligatoires jusqu’à Cadet, puis optionnels)",
            "Gants (mitaines), pitaines et protège-dents blanc ou transparent",
            "Casque équipé sur la tête avant l’entrée sur l’aire ; aucun autre article sur la tête",
            "Coquille, protège-tibias et protège-avant-bras portés sous le dobok",
            "Protège-dents : non-port possible sur avis médical"
          ] }
        ]
      },
      {
        id: "deroulement", titre: "Organisation de la compétition", src: { d: "arb", p: 9 },
        blocs: [
          { t: "ul", v: [
            "Deux phases : qualification, puis phase finale principale et phase finale secondaire (« repêchage ») à élimination directe",
            "3 combattants ou moins : poule où chacun rencontre les autres",
            "Égalité en poule (1-1-1) : reprises perdues, puis total des points, puis nombre de Gam-jeom, puis décision des juges",
            "Ordre de passage et oppositions déterminés par tirage au sort (la veille ou avant le début des combats)",
            "Aucun combattant ne peut participer à plus d’une catégorie de poids dans une compétition"
          ] },
          { t: "p", v: "Limite de poids : une marge de moins de 100 g au-dessus de la limite est tolérée ; au-delà, le combattant est disqualifié ou surclassé (p. 8)." }
        ]
      },
      {
        id: "procedure", titre: "Procédure du combat et commandements", src: { d: "arb", p: 11 },
        blocs: [
          { t: "ul", v: [
            "Appel jusqu’à trois fois, 30 minutes avant le combat ; absence au 3e appel = disqualification",
            "Inspection de la tenue et des protections avant l’entrée sur l’aire",
            "Salut à l’injonction « Charyeot » et « Kygongnye » : buste incliné de plus de 30°, tête de plus de 45°",
            "« Joon-bi » (prêt) : jambe droite avancée, poignets droits croisés main ouverte ; « Shi-jak » (commencez) : changement de garde et début",
            "« Keu-man » (arrêt) termine chaque reprise ; le temps expiré termine la reprise même sans annonce",
            "« Kal-yeo » (séparez-vous) arrête le chrono ; « Kye-sok » (continuez) le relance"
          ] }
        ]
      },
      {
        id: "techniques", titre: "Techniques autorisées", src: { d: "arb", p: 12 },
        blocs: [
          { t: "kv", v: [
            ["Poing", "Poing fermement serré, 1ères phalanges / têtes métacarpiennes, intensité modérée"],
            ["Pied", "N’importe quelle partie du pied et de la cheville, intensité modérée"],
            ["Projections", "D’épaule, de hanche, de sacrifice, de fauchage et de balayage"],
            ["Corps à corps", "5 secondes maximum : une projection ou un amené au sol doit être tenté dans ce délai"]
          ] },
          { t: "ul", v: [
            "Minimes et catégories inférieures : techniques de poing interdites",
            "Cadets et Juniors : deux (2) coups de poing enchaînés au maximum",
            "Projection de hanche : saisie du bras, du poignet, du plastron, du dobok, de l’arrière et du côté de la ceinture, bras enroulé autour du corps ou au-dessus des épaules (en gardant le contact avec les épaules)",
            "Bras au-dessus des épaules interdit sur les sacrifices, fauchages (sauf dans le temps de la projection de hanche) et balayages ; saisie du cou ou de la tête interdite"
          ] }
        ]
      },
      {
        id: "zones", titre: "Zones permises par catégorie", src: { d: "arb", p: 12 },
        blocs: [
          { t: "table", head: ["Catégorie", "Tronc", "Tête", "Jambes"], rows: [
            ["Minimes", "Pied (pas la colonne vertébrale)", "—", "Balayages aux pieds, fauchages aux cuisses ; Anjwa Dollyeo Chagi sous l’os de la cheville, jamais au tibia"],
            ["Cadets", "Poing ou pied (pas la colonne)", "Pied (pas l’arrière de la tête ni les cervicales)", "Idem Minimes (sous l’os de la cheville)"],
            ["Juniors", "Poing ou pied (pas la colonne)", "Pied (pas l’arrière de la tête ni les cervicales)", "Balayages, fauchages ; Anjwa Dollyeo Chagi au niveau de la cheville"],
            ["Seniors & Masters", "Poing ou pied (pas la colonne)", "Poing ou pied (pas l’arrière de la tête ni les cervicales)", "Percussions du pied aux cuisses, balayages, fauchages ; Anjwa Dollyeo Chagi à la cheville"]
          ] },
          { t: "note", v: "Aucune attaque au niveau du genou, quelle que soit la catégorie." }
        ]
      },
      {
        id: "points", titre: "Points valides", src: { d: "arb", p: 13 },
        blocs: [
          { t: "p", v: "Zones de marquage : tronc, tête et cheville. Actions de marquage : percussions pieds et poings, projections, fauchages et balayages. Les points sont remis à zéro à chaque reprise ; le résultat est la somme des reprises remportées." },
          { t: "table", head: ["Valeur", "Action"], rows: [
            ["1 point", "Salve de percussion avec le poing au plastron ou au visage (sans arrêt manifeste)"],
            ["1 point", "Percussion avec le pied au plastron"],
            ["1 point", "Projection de l’adversaire si ce dernier garde un pied au sol"],
            ["1 point", "Accordé à l’adversaire pour chaque pénalité (Gam-jeom)"],
            ["2 points", "Percussion avec le pied à la tête"],
            ["2 points", "Coup de pied retourné au plastron"],
            ["2 points", "Projection ou balayage avec saisie de la jambe contre une attaque en coup de pied"],
            ["3 points", "Coup de pied retourné valide à la tête"],
            ["3 points", "Projection avec décollement des deux jambes de l’adversaire"],
            ["Ippon", "« Anjwa dolyo chagi » entraînant la chute et le décollement des deux pieds de l’adversaire : fin de la reprise par action victorieuse"]
          ] }
        ]
      },
      {
        id: "marquage", titre: "Marquage et victoire de la reprise", src: { d: "arb", p: 14 },
        blocs: [
          { t: "ul", v: [
            "Les juges attribuent les points avec des manettes : la validation par deux juges est nécessaire et suffisante",
            "Avec cartons ou application : chaque juge désigne en fin de reprise le combattant ayant le plus de points ; majorité de deux juges (avec 2 juges en désaccord : égalité)",
            "Victoire de la reprise : le plus de points ; 5 Gam-jeom ou plus = reprise perdue",
            "Écart de 12 points ou plus : l’arbitre arrête la reprise"
          ] },
          { t: "p", v: "Vidéo replay (si utilisé) : le coach lève un carton « challenge » pour un coup de pied à la tête ou une projection non scorés, une projection attribuée à l’adversaire malgré une contre-projection, ou un Gam-jeom contesté. Challenge validé : le coach garde son carton ; refusé : il le perd pour le reste du combat (p. 15)." }
        ]
      },
      {
        id: "sanctions", titre: "Actions prohibées et Gam-jeom", src: { d: "arb", p: 15 },
        blocs: [
          { t: "p", v: "Les sanctions sont déclarées par l’arbitre. Un Gam-jeom compte comme un point pour l’adversaire. Si l’acte prohibé a été déterminant pour marquer, le point est annulé." },
          { t: "table", head: ["Sanction", "Actes"], rows: [
            ["1 Gam-jeom", "Traverser les lignes limites (8 m x 8 m) · Tomber volontairement · Éviter ou retarder le match · Attaquer après « Kal-yeo » · Coup de poing lorsqu’une jambe est saisie ou en phase de projection · Tirage manifeste du plastron vers soi ou vers le sol · Saisir la tête, le casque, les cheveux · « Anjwa dolyo chagi » au tibia · Attaquer directement sans pas de retrait après « Shi-jak » · Mauvais comportement du combattant ou du coach"],
            ["2 Gam-jeom", "Attaque dans les parties génitales · Attaque d’une zone non autorisée · Attaque avec une partie du corps non autorisée (genou, coude, tête) · Attaque intentionnelle en pleine intensité · Coup de poing retourné · Attaquer l’adversaire tombé au sol · Clé ou étranglement"]
          ] },
          { t: "ul", v: [
            "Faute grave : Gam-jeom suivi d’un carton jaune, convocation par le conseil de surveillance",
            "Refus répété des règles : l’arbitre peut mettre fin au match et déclarer l’adversaire gagnant (carton jaune)",
            "Au 4e Gam-jeom, l’arbitre le signifie ; au 5e dans une même reprise, la reprise est perdue",
            "Les Gam-jeom sont comptés par reprise ; une faute pendant le repos compte pour la reprise suivante",
            "Inactivité des deux combattants 5 s : « Combattez » ; sans activité 5 s après, Gam-jeom aux deux"
          ] }
        ]
      },
      {
        id: "egalite", titre: "Égalité et décision de supériorité", src: { d: "arb", p: 18 },
        blocs: [
          { t: "ul", v: [
            "Match nul après la 2e reprise : 3e reprise ; les sanctions des deux premières reprises sont annulées",
            "Égalité après la 3e reprise : le moins de Gam-jeom dans la 3e reprise, puis sur tout le combat",
            "Sinon, supériorité décidée par les 3 juges (ou 2 juges + l’arbitre central) sur le contenu de la 3e reprise",
            "Procédure : l’arbitre déclare « Woo-se-girok », compte « Hana – Dool – Set », les juges désignent simultanément le vainqueur"
          ] }
        ]
      },
      {
        id: "decision", titre: "Types de décision", src: { d: "arb", p: 19 },
        blocs: [
          { t: "ul", v: [
            "Victoire par arrêt du combat par l’arbitre", "Victoire par nombre de reprises", "Victoire par supériorité",
            "Victoire par abandon (forfait)", "Victoire par disqualification", "Victoire par déclaration punitive de l’arbitre",
            "Victoire par disqualification pour comportement antisportif"
          ] }
        ]
      },
      {
        id: "kd", titre: "Knock-down", src: { d: "arb", p: 20 },
        blocs: [
          { t: "ul", v: [
            "Déclaré si une partie du corps autre que la plante du pied touche le sol sous la force d’une technique, si le combattant titube sans capacité de continuer, ou sur décision de l’arbitre",
            "L’arbitre éloigne l’attaquant (« Kal-yeo ») et compte de « Ha-nah » (un) à « Yeol » (dix), une seconde d’intervalle",
            "Le compte jusqu’à « Yeodeol » (huit) est obligatoire, même si le combattant se relève",
            "Pas de volonté de reprendre avant « Yeodeol » : l’adversaire est déclaré gagnant",
            "Après une blessure grave ayant empêché de continuer : pas d’autre compétition pendant 30 jours sans l’approbation d’un médecin fédéral"
          ] }
        ]
      },
      {
        id: "blessure", titre: "Interruption et blessure", src: { d: "arb", p: 22 },
        blocs: [
          { t: "ul", v: [
            "« Kal-yeo » puis « Kye-shi » pour arrêter le chronomètre ; « Shi-gan » (temps mort) pour une suspension sans blessure",
            "Soins d’urgence pendant 1 minute (le médecin peut demander jusqu’à 2 minutes)",
            "Décompte annoncé toutes les 5 secondes à partir de 40 secondes après « Kye-shi »",
            "Combattant ayant causé la blessure par un acte puni de Gam-jeom : déclaré perdant",
            "Douleur due à une simple ecchymose : reprise par « Stand up » ; refus après trois commandements = défaite"
          ] }
        ]
      },
      {
        id: "officiels", titre: "Officiels", src: { d: "arb", p: 25 },
        blocs: [
          { t: "kv", v: [
            ["Par aire de combat", "Un arbitre et deux ou trois juges de coin"],
            ["Arbitre central", "Contrôle le combat ; déclare « Shi-jak », « Keu-man », « Kal-yeo », « Kye-sok », « Kye-shi », le vainqueur, les sanctions"],
            ["Juges", "Marquent les points valides immédiatement et donnent leur avis à la demande de l’arbitre"],
            ["Assistant technique", "Surveille le tableau d’affichage, enregistre manuellement scores et pénalités"],
            ["Opérateur", "Chronomètre le combat, les repos et les suspensions"],
            ["Bureau d’arbitrage", "Corrige les décisions erronées, évalue arbitres et juges, inflige les pénalités sportives"],
            ["Uniforme", "Tenue proposée par la F.F.T.D.A. (à défaut chemise blanche et pantalon noir) ; téléphones interdits sur les aires"]
          ] }
        ]
      },
      {
        id: "discipline", titre: "Mesures disciplinaires", src: { d: "arb", p: 27 },
        blocs: [
          { t: "ul", v: [
            "Disqualification de l’athlète", "Mise en garde et excuses officielles", "Retrait de l’accréditation",
            "Exclusion du site (journée ou championnat)", "Annulation du résultat et des titres",
            "Suspension de toutes les compétitions Hapkido FFTDA : 6 mois, 1, 2, 3 ou 4 ans"
          ] },
          { t: "p", v: "Ces décisions sont susceptibles d’appel." }
        ]
      }
    ]
  },

  /* ============================================================ JUGEMENT TECHNIQUE */
  jugement: {
    titre: "Jugement technique",
    source: "jt",
    intro: "Règlement des compétitions techniques Hapkido : compétition par paires, notation sur 5 par enchaînement, pénalités et bonifications.",
    sections: [
      {
        id: "aire", titre: "Aire et placements", src: { d: "jt", p: 3 },
        blocs: [
          { t: "kv", v: [
            ["Tapis", "Élastique, non glissant, ≥ 2,5 cm"],
            ["Aire de combat", "8 m x 8 m, zone de sécurité d’au moins 1 m (aire de compétition de 10 à 12 m)"],
            ["Compétiteurs", "Deux repères opposés à 1 m du centre, parallèles à L-1"],
            ["Juges", "Sur le bord de l’aire de compétition (L-1)"],
            ["Paire adverse", "Sur le bord de l’aire, perpendiculaire à la table de jugement"],
            ["Table de contrôle", "À l’entrée, à 3 m du coin entre L-3 et L-4"]
          ] }
        ]
      },
      {
        id: "categories", titre: "Compétiteurs et catégories", src: { d: "jt", p: 5 },
        blocs: [
          { t: "ul", v: [
            "Passeport sportif à jour (absence de contre-indication) et inscription administrative",
            "Paires unisexes ou mixtes ; inscription possible dans plusieurs catégories adjacentes, une seule paire par catégorie",
            "Pas de limitation spécifique relative au grade",
            "Sous-catégories avec / sans arme : uniquement Seniors et Masters"
          ] },
          { t: "p", v: "Techniques avec arme reconnues : contre-couteau ou contre sabre (Keom) ; ceinture (Pobak) ou corde ; bâton court (Danbong) ; éventails ; canne (Jipang) ou bâton long (Jangbong)." }
        ]
      },
      {
        id: "duree", titre: "Durée et déroulement", src: { d: "jt", p: 6 },
        blocs: [
          { t: "kv", v: [
            ["Durée d’un enchaînement", "3 à 10 secondes"],
            ["Pause entre enchaînements", "30 secondes au maximum (utilisée par la paire adverse)"],
            ["Opposition", "Deux reprises + une troisième en cas d’égalité"],
            ["Par reprise", "2 techniques ou enchaînements, par l’un ou l’autre membre de la paire"]
          ] },
          { t: "p", v: "Appel jusqu’à trois fois. Salut au jury (« Charyeot – Kyeongnye »), mise en garde à « Joon-bi », début à « Shi-jak » (l’enregistreur lance le chronomètre). La paire en attente est assise ou à genoux sur le côté. Chaque phase d’une catégorie est jugée par le même jury (p. 7)." }
        ]
      },
      {
        id: "notation", titre: "Notation", src: { d: "jt", p: 9 },
        blocs: [
          { t: "p", v: "Chaque enchaînement technique est noté sur /5. Une reprise (deux enchaînements) est notée sur /10." },
          { t: "table", head: ["Barème", "Cas"], rows: [
            ["- 0,1 point", "Chaque erreur isolée sur les critères de notation"],
            ["- 0,3 point", "Chaque erreur répétée (à partir de deux répétitions) · chaque erreur continue dans l’enchaînement · écart de temps (inférieur à 3 s ou supérieur à 10 s)"],
            ["- 1 point", "Chaque technique ratée : oubli ou erreur obligeant à recommencer l’enchaînement · perte d’équilibre entraînant la chute · lâchage de la main, du poignet ou de l’articulation sur laquelle la technique est appliquée"],
            ["+ 0,3 point", "Bonification (une seule par item dans l’enchaînement) : chute acrobatique · technique en rotation · coup de pied haut · coup de pied sauté"]
          ] },
          { t: "kv", v: [
            ["Physiques", "Vitesse, explosivité, souplesse, fluidité"],
            ["Moteurs", "Coordination, équilibre, stabilité"],
            ["Techniques", "Diversité, créativité, précision, maîtrise, sécurité"],
            ["Attitude", "Détermination, Kihap, dobok correctement porté, respect du règlement"]
          ] },
          { t: "note", v: "Toutes les pénalités accumulées durant la reprise sont déduites du score final (art. 13.2). La fiche de notation prévoit pour chaque paire (Chung / Hong) deux notes /5 par reprise, sur trois reprises (p. 8)." }
        ]
      },
      {
        id: "marquage", titre: "Désignation du vainqueur", src: { d: "jt", p: 7 },
        blocs: [
          { t: "ul", v: [
            "À l’issue de chaque reprise, les juges désignent la paire vainqueure avec des supports rouge, bleu ou blanc (égalité) ; majorité requise",
            "Vainqueur de l’opposition : la paire qui remporte deux reprises ; à 1-1, nouvelle reprise",
            "Égalité au score sur la dernière reprise : décision du jury sur les trois reprises selon les bonifications, les difficultés techniques, l’attitude et l’engagement",
            "Un juge compte « Hana – Dul – Set », puis les juges désignent la paire victorieuse"
          ] }
        ]
      },
      {
        id: "penalites", titre: "Actions prohibées (Gam-jeom)", src: { d: "jt", p: 7 },
        blocs: [
          { t: "ul", v: [
            "Remarques indésirables ou mauvaise conduite d’un compétiteur ou d’un entraîneur",
            "Comportement indigne ou non respectueux du code de conduite",
            "Interrompre ou gêner les coordinateurs de la compétition"
          ] },
          { t: "p", v: "Un compétiteur sanctionné deux fois par un Gam-jeom fait perdre sa paire (vainqueur par pénalités, p. 10)." }
        ]
      },
      {
        id: "decisions", titre: "Décisions et suspension", src: { d: "jt", p: 10 },
        blocs: [
          { t: "ul", v: [
            "Vainqueur par score, par arrêt d’une paire par le jury, par abandon, par disqualification, par pénalités",
            "Blessure : « Shigan » (suspension), 1 minute de premiers soins ; la paire reprend l’enchaînement depuis le début",
            "Sans volonté de continuer après une minute, la paire adverse est déclarée vainqueure"
          ] }
        ]
      },
      {
        id: "officiels", titre: "Officiels", src: { d: "jt", p: 10 },
        blocs: [
          { t: "kv", v: [
            ["Composition", "3 juges"],
            ["Juges", "Formation de juge technique ; nommés par le président du comité départemental, de la ligue ou de la F.F.T.D.A."],
            ["Enregistreur", "Chronomètre l’opposition (temps suspendus inclus), calcule et enregistre le score"]
          ] }
        ]
      }
    ]
  }
};

/* Tenue : Annexe 3 (examens de Dan) + mentions des règlements de compétition */
HKD.tenue = {
  examen: {
    titre: "Dobok réglementaire — examens de Dan Hapkido",
    src: { d: "tenue", p: 1 },
    caracteristiques: [
      { k: "Robustesse", v: "Le Dobok doit être suffisamment robuste afin de résister aux techniques de projection, de saisie et de tirage." },
      { k: "Veste", v: "La veste doit être de type « croisée » et à manches longues." },
      { k: "Couleur", v: "De préférence, le Dobok doit être de couleur sobre (blanc, noir, gris, bleu foncé)." }
    ],
    marquage: "Les inscriptions, écussons et marquages relatifs à un style de Hapkido sont autorisés.",
    exemple: "Exemples présentés par le document : un dobok noir et un dobok blanc à col noir, portés avec une ceinture noire.",
    images: [
      { fichier: "assets/images/dobok-noir.webp", alt: "Exemple de dobok noir à veste croisée et manches longues, avec ceinture noire" },
      { fichier: "assets/images/dobok-blanc.webp", alt: "Exemple de dobok blanc à veste croisée et col noir, avec ceinture noire" }
    ]
  },
  competition: { src: { d: "comp", p: 9 }, items: [
    "Dobok Hapkido avec une veste de type croisée ou veste Taekwondo",
    "La veste de dobok doit avoir des manches longues",
    "Ceinture",
    "Protections autorisées F.F.T.D.A.",
    "Casque avec protection faciale porté sur la tête (combat)"
  ] },
  technique: { src: { d: "comp", p: 10 }, items: [
    "Dobok Hapkido avec une veste de type croisée ou veste Taekwondo, à manches longues, et ceinture",
    "Une marque de couleur supplémentaire (rouge ou bleue : ceinture, brassard ou autre) pour faciliter la notation des juges"
  ] },
  officiels: { src: { d: "arb", p: 26 }, texte: "Arbitres et juges : uniforme proposé par la F.F.T.D.A. ou, à défaut, chemise blanche et pantalon noir." },
  coach: { src: { d: "comp", p: 8 }, texte: "Coach : survêtement long (haut et bas), chaussures de sport, tête nue." }
};

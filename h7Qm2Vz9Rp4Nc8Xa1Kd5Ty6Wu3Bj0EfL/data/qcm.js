/* =====================================================================
   BANQUE DE QCM — uniquement des questions dont la réponse se lit
   sans ambiguïté dans les documents fournis.
   q = question · a = réponses · c = index de la bonne réponse · s = source
   Les questions de lexique sont générées automatiquement depuis HKD.lexique.
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.qcmThemes = {
  combat:    { nom: "Compétition combat", sous: "Règlement combat et règlement compétition", grades: [3] },
  technique: { nom: "Compétition technique", sous: "Règlement technique et règlement compétition", grades: [3] },
  grades:    { nom: "Programmes des grades", sous: "Programmes d’examen et annexes fournis", grades: [2], partiel: "Le règlement CSDGE de délivrance des Dans n’est pas fourni : ces questions portent seulement sur les programmes et annexes disponibles." },
  lexique:   { nom: "Lexique terminologique", sous: "Annexe 1 — questions générées", grades: [1, 2] }
};

HKD.qcm = [
  /* ------------------------------------------------ COMBAT */
  { t: "combat", q: "Quelles sont les dimensions de l’aire de combat carrée ?", a: ["8 m x 8 m", "10 m x 10 m", "12 m x 12 m", "6 m x 6 m"], c: 0, s: { d: "arb", p: 4 } },
  { t: "combat", q: "Quelle largeur minimale doit avoir la zone de sécurité autour de l’aire de combat ?", a: ["50 cm", "1 m", "2 m", "3 m"], c: 1, s: { d: "arb", p: 4 } },
  { t: "combat", q: "Quelle épaisseur minimale de tapis est exigée pour l’aire de compétition combat ?", a: ["2 cm", "2,5 cm", "4 cm", "6 cm"], c: 2, s: { d: "arb", p: 4 } },
  { t: "combat", q: "Que signifie « Chung » ?", a: ["Rouge", "Bleu", "Arrêt", "Prêt"], c: 1, s: { d: "arb", p: 4 } },
  { t: "combat", q: "Quelle est la durée des combats en catégorie Seniors ?", a: ["2 reprises de 1 min 30, 1 min de repos", "2 reprises de 2 min, 1 min de repos", "3 reprises de 2 min, 30 s de repos", "2 reprises de 1 min, 30 s de repos"], c: 1, s: { d: "arb", p: 10 } },
  { t: "combat", q: "Quelle est la durée des combats en catégorie Masters ?", a: ["2 reprises de 2 min, 1 min de repos", "2 reprises de 1 min, 30 s de repos", "2 reprises de 1 min 30, 1 min de repos", "2 reprises de 1 min 30, 30 s de repos"], c: 2, s: { d: "arb", p: 10 } },
  { t: "combat", q: "Quelle est la durée des combats en catégorie Minimes ?", a: ["2 reprises de 1 min, 30 s de repos", "2 reprises de 1 min 30, 1 min de repos", "2 reprises de 2 min, 1 min de repos", "1 reprise de 2 min"], c: 0, s: { d: "arb", p: 10 } },
  { t: "combat", q: "Combien de points rapporte une percussion avec le pied au plastron ?", a: ["1 point", "2 points", "3 points", "Ippon"], c: 0, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Combien de points rapporte une percussion avec le pied à la tête ?", a: ["1 point", "2 points", "3 points", "4 points"], c: 1, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Combien de points rapporte un coup de pied retourné valide à la tête ?", a: ["1 point", "2 points", "3 points", "Ippon"], c: 2, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Combien de points rapporte une projection avec décollement des deux jambes de l’adversaire ?", a: ["1 point", "2 points", "3 points", "Ippon"], c: 2, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Combien de points rapporte une projection lorsque l’adversaire garde un pied au sol ?", a: ["1 point", "2 points", "3 points", "Aucun"], c: 0, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Quelle action entraîne un « Ippon » ?", a: ["Un coup de pied retourné à la tête", "Un Anjwa dolyo chagi entraînant la chute et le décollement des deux pieds de l’adversaire", "Une projection de hanche", "Cinq Gam-jeom de l’adversaire"], c: 1, s: { d: "arb", p: 14 } },
  { t: "combat", q: "À partir de combien de Gam-jeom dans une même reprise un combattant perd-il la reprise ?", a: ["3", "4", "5", "6"], c: 2, s: { d: "arb", p: 16 } },
  { t: "combat", q: "Quel écart de points entraîne l’arrêt de la reprise par l’arbitre ?", a: ["8 points", "10 points", "12 points", "15 points"], c: 2, s: { d: "arb", p: 14 } },
  { t: "combat", q: "Combien de temps les combattants peuvent-ils rester saisis en corps à corps ?", a: ["3 secondes", "5 secondes", "8 secondes", "10 secondes"], c: 1, s: { d: "arb", p: 12 } },
  { t: "combat", q: "Quelle sanction pour une clé ou un étranglement ?", a: ["Un avertissement", "1 Gam-jeom", "2 Gam-jeom", "Disqualification immédiate"], c: 2, s: { d: "arb", p: 16 } },
  { t: "combat", q: "Quelle sanction pour avoir traversé la ligne limite ?", a: ["1 Gam-jeom", "2 Gam-jeom", "Aucune", "Carton jaune"], c: 0, s: { d: "arb", p: 15 } },
  { t: "combat", q: "Combien de coups de poing peuvent être enchaînés au maximum en Cadets et Juniors ?", a: ["1", "2", "3", "Illimité"], c: 1, s: { d: "arb", p: 12 } },
  { t: "combat", q: "Les techniques de poing sont-elles autorisées en catégorie Minimes ?", a: ["Oui, au plastron", "Oui, au plastron et au casque", "Non", "Oui, deux au maximum"], c: 2, s: { d: "arb", p: 12 } },
  { t: "combat", q: "Lors d’un Knock-down, jusqu’à quel nombre le compte est-il obligatoire avant de reprendre ?", a: ["Seht (trois)", "Da-seot (cinq)", "Yeodeol (huit)", "Yeol (dix)"], c: 2, s: { d: "arb", p: 21 } },
  { t: "combat", q: "Que signifie « Kal-yeo » ?", a: ["Commencez", "Séparez-vous", "Continuez", "Arrêt"], c: 1, s: { d: "arb", p: 11 } },
  { t: "combat", q: "Que signifie « Kye-sok » ?", a: ["Continuez", "Prêt", "Temps mort", "Séparez-vous"], c: 0, s: { d: "arb", p: 11 } },
  { t: "combat", q: "De combien de temps dispose un combattant blessé pour recevoir des soins d’urgence (hors prolongation demandée par le médecin) ?", a: ["30 secondes", "1 minute", "2 minutes", "5 minutes"], c: 1, s: { d: "arb", p: 22 } },
  { t: "combat", q: "Dans quel délai une contestation doit-elle parvenir au directeur de la compétition ?", a: ["5 minutes après le combat", "10 minutes après le combat", "30 minutes après le combat", "Avant la fin de la journée"], c: 1, s: { d: "comp", p: 8 } },
  { t: "combat", q: "Quelle est la composition des officiels par aire de combat ?", a: ["Un arbitre et un juge", "Un arbitre et deux ou trois juges de coin", "Trois arbitres", "Un arbitre et cinq juges"], c: 1, s: { d: "arb", p: 26 } },
  { t: "combat", q: "Quelle tolérance de poids est accordée aux Cadets et Juniors lors de la pesée ?", a: ["Aucune", "100 g", "200 g", "500 g"], c: 1, s: { d: "arb", p: 10 } },
  { t: "combat", q: "En cas de 3e reprise, que deviennent les sanctions des deux premières reprises ?", a: ["Elles sont conservées", "Elles sont doublées", "Elles sont annulées", "Elles comptent pour moitié"], c: 2, s: { d: "arb", p: 18 } },
  { t: "combat", q: "Quelle est la durée minimale pendant laquelle un combattant n’ayant pas pu continuer suite à une blessure grave ne peut participer à une autre compétition sans approbation d’un médecin fédéral ?", a: ["7 jours", "15 jours", "30 jours", "60 jours"], c: 2, s: { d: "arb", p: 21 } },
  { t: "combat", q: "Quel est l’âge de la catégorie Masters 2 ?", a: ["30 à 34 ans", "35 à 39 ans", "40 ans et +", "18 à 29 ans"], c: 1, s: { d: "comp", p: 6 } },

  /* ------------------------------------------------ TECHNIQUE */
  { t: "technique", q: "Quelle est la durée d’exécution de chaque enchaînement technique ?", a: ["1 à 5 secondes", "3 à 10 secondes", "5 à 15 secondes", "10 à 30 secondes"], c: 1, s: { d: "jt", p: 6 } },
  { t: "technique", q: "Quelle pause maximale sépare deux enchaînements techniques ?", a: ["10 secondes", "20 secondes", "30 secondes", "1 minute"], c: 2, s: { d: "jt", p: 6 } },
  { t: "technique", q: "Sur combien de points est noté chaque enchaînement technique ?", a: ["/3", "/5", "/10", "/20"], c: 1, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Combien de points retire une erreur isolée sur les critères de notation ?", a: ["0,1 point", "0,3 point", "0,5 point", "1 point"], c: 0, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Combien de points retire un écart de temps (moins de 3 s ou plus de 10 s) ?", a: ["0,1 point", "0,3 point", "1 point", "Disqualification"], c: 1, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Combien de points retire une technique ratée (oubli, chute, lâchage) ?", a: ["0,1 point", "0,3 point", "0,5 point", "1 point"], c: 3, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Quelle est la valeur d’une bonification ?", a: ["+0,1 point", "+0,3 point", "+0,5 point", "+1 point"], c: 1, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Lequel de ces éléments n’est PAS une bonification ?", a: ["Chute acrobatique", "Technique en rotation", "Kihap", "Coup de pied sauté"], c: 2, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Dans quelle famille de critères figure le Kihap ?", a: ["Physiques", "Moteurs", "Techniques", "Attitude"], c: 3, s: { d: "jt", p: 9 } },
  { t: "technique", q: "Combien de juges composent le jury d’une compétition technique ?", a: ["2", "3", "5", "6"], c: 1, s: { d: "jt", p: 11 } },
  { t: "technique", q: "Quelles catégories sont divisées en sous-catégories « avec arme » et « sans arme » ?", a: ["Toutes les catégories", "Juniors et Seniors", "Seniors et Masters", "Masters uniquement"], c: 2, s: { d: "jt", p: 5 } },
  { t: "technique", q: "Quelle épaisseur minimale de tapis est exigée en compétition technique ?", a: ["2,5 cm", "4 cm", "5 cm", "1 cm"], c: 0, s: { d: "jt", p: 3 } },
  { t: "technique", q: "Que se passe-t-il si un compétiteur reçoit deux Gam-jeom ?", a: ["Il recommence l’enchaînement", "La paire perd 1 point", "La paire adverse est déclarée vainqueure", "Rien, la sanction est symbolique"], c: 2, s: { d: "jt", p: 10 } },
  { t: "technique", q: "Combien de techniques ou enchaînements une paire exécute-t-elle à chaque reprise ?", a: ["1", "2", "3", "4"], c: 1, s: { d: "comp", p: 11 } },
  { t: "technique", q: "Quelle est la tranche d’âge de la catégorie Paire Seniors ?", a: ["16 à 30 ans", "18 ans et - 30 ans", "18 à 35 ans", "21 ans et +"], c: 1, s: { d: "comp", p: 10 } },
  { t: "technique", q: "Comment les juges désignent-ils une égalité de reprise ?", a: ["Par un marqueur blanc", "En levant les deux drapeaux", "Par un carton jaune", "En restant assis"], c: 0, s: { d: "jt", p: 7 } },
  { t: "technique", q: "Combien de reprises une paire doit-elle gagner pour remporter l’opposition ?", a: ["1", "2", "3", "Le plus de points sur 3 reprises"], c: 1, s: { d: "jt", p: 9 } },

  /* ------------------------------------------------ GRADES */
  { t: "grades", q: "Quel âge minimum est requis pour se présenter au 1er Dan ?", a: ["12 ans révolus", "14 ans révolus", "15 ans révolus", "16 ans révolus"], c: 1, s: { d: "ex1", p: 1 } },
  { t: "grades", q: "Quel âge minimum est requis pour se présenter au 2ème Dan ?", a: ["14 ans révolus", "15 ans révolus", "16 ans révolus", "18 ans révolus"], c: 2, s: { d: "ex2", p: 1 } },
  { t: "grades", q: "Quel grade faut-il détenir pour se présenter au 1er Dan ?", a: ["Ceinture bleue 3e Keup", "Ceinture rouge 1er Keup", "Ceinture marron 1er Keup", "Aucun grade minimum"], c: 1, s: { d: "ex1", p: 1 } },
  { t: "grades", q: "Combien de timbres de licence faut-il au minimum pour le 1er Dan ?", a: ["Deux", "Trois", "Quatre", "Cinq"], c: 1, s: { d: "ex1", p: 1 } },
  { t: "grades", q: "Combien de timbres de licence supplémentaires après le 3ème Dan faut-il pour le 4ème Dan ?", a: ["2", "3", "4", "5"], c: 2, s: { d: "ex4", p: 1 } },
  { t: "grades", q: "Combien de juges composent le jury d’examen de Dan ?", a: ["Trois, un par module", "Quatre", "Six, deux par module", "Neuf, trois par module"], c: 2, s: { d: "ex1", p: 1 } },
  { t: "grades", q: "Combien de temps un module validé reste-t-il acquis ?", a: ["Une saison", "Trois saisons", "Cinq saisons sportives", "Définitivement"], c: 2, s: { d: "ex1", p: 4 } },
  { t: "grades", q: "Qui organise les examens de 3ème Dan ?", a: ["Les clubs", "Les comités départementaux", "Les Ligues", "La Fédération"], c: 3, s: { d: "ex3", p: 1 } },
  { t: "grades", q: "Quelle note minimale permet de valider le Module A du 1er Dan (sur 50) ?", a: ["20 points", "25 points", "30 points", "35 points"], c: 1, s: { d: "ex1", p: 2 } },
  { t: "grades", q: "Combien de chutes réalise un candidat au 1er Dan de 60 ans et plus ?", a: ["6", "8", "10", "Aucune"], c: 1, s: { d: "ex1", p: 2 } },
  { t: "grades", q: "Quelle est la durée maximale d’une épreuve de Q.C.M par candidat ?", a: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"], c: 2, s: { d: "syn", p: 2 } },
  { t: "grades", q: "Au 5ème Dan, dans quel délai la technique doit-elle être réalisée après la saisie ?", a: ["1 seconde", "3 secondes", "5 secondes", "Sans limite"], c: 1, s: { d: "ex5", p: 2 } },
  { t: "grades", q: "Combien de pages de texte doit compter le bilan réflexif ou le mémoire ?", a: ["5 à 10 pages", "10 à 20 pages", "20 à 30 pages", "30 pages minimum"], c: 1, s: { d: "mem", p: 1 } },
  { t: "grades", q: "Combien de temps avant l’examen le mémoire doit-il être adressé à la F.F.T.D.A. ?", a: ["15 jours", "30 jours", "2 mois", "4 mois"], c: 1, s: { d: "mem", p: 1 } },
  { t: "grades", q: "Quelle est la durée de la démonstration du 6ème Dan ?", a: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"], c: 2, s: { d: "ex6", p: 2 } },
  { t: "grades", q: "Quel titre est associé au 4ème Dan dans le tableau de synthèse ?", a: ["Kyo-Sa-Nim", "Boo-Sa-Beom-Nim", "Sa-Beom-Nim", "Kwan-Jang-Nim"], c: 2, s: { d: "syn", p: 1 } },
  { t: "grades", q: "Quel titre est associé au 1er Dan dans le tableau de synthèse ?", a: ["Jo-Kyo-Nim", "Kyo-Sa-Nim", "Sa-Beom-Nim", "Soo-Suk-Sa-Beom Nim"], c: 0, s: { d: "syn", p: 1 } },
  { t: "grades", q: "Au 3ème Dan, à partir de quel âge les candidats Masters peuvent-ils remplacer les coups de pied sautés ?", a: ["30 ans", "35 ans", "40 ans", "60 ans"], c: 0, s: { d: "ex3", p: 2 } },
  { t: "grades", q: "Au 2ème Dan, combien de techniques de défense avec un bâton court (Dan-Bong Sool) le candidat réalise-t-il ?", a: ["5", "8", "10", "20"], c: 2, s: { d: "ex2", p: 3 } },
  { t: "grades", q: "Au 4ème Dan, comment sont positionnés les deux partenaires de l’épreuve « défense contre deux adversaires » ?", a: ["Devant et derrière le candidat", "De face à 45° par rapport au candidat", "De chaque côté du candidat", "Au choix du jury"], c: 1, s: { d: "ex4", p: 2 } },
  { t: "grades", q: "Selon l’Annexe 3, quel type de veste de Dobok est exigé aux examens de Dan Hapkido ?", a: ["Une veste de type « croisée » à manches longues", "Une veste à col en V à manches courtes", "Une veste Taekwondo sans manches", "Aucune exigence de forme"], c: 0, s: { d: "tenue", p: 1 } },
  { t: "grades", q: "Quelle couleur de Dobok l’Annexe 3 recommande-t-elle pour les examens de Dan ?", a: ["Uniquement blanc", "Une couleur sobre (blanc, noir, gris, bleu foncé)", "La couleur du club", "Rouge ou bleu"], c: 1, s: { d: "tenue", p: 1 } },
  { t: "grades", q: "Les marquages relatifs à un style de Hapkido sont-ils autorisés sur le Dobok d’examen ?", a: ["Non, aucun marquage", "Oui, les inscriptions, écussons et marquages relatifs à un style de Hapkido sont autorisés", "Seulement le nom du candidat", "Seulement le drapeau national"], c: 1, s: { d: "tenue", p: 1 } },
  { t: "grades", q: "Quelle durée maximale est accordée au candidat au 5ème Dan pour décomposer une technique (Module A) ?", a: ["3 minutes", "5 minutes", "10 minutes", "15 minutes"], c: 1, s: { d: "ex5", p: 1 } }
];

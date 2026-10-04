/* =====================================================================
   LEXIQUE — Annexe 1 (orthographe et traductions reprises à l'identique)
   + vocabulaire d'arbitrage (règlements) + termes des programmes d'examen
   r = romanisation · h = hangeul (si fourni) · f = français · c = catégorie
   s = source · ctx = true si la source donne un contexte d'usage et non une traduction
   ===================================================================== */
window.HKD = window.HKD || {};

HKD.lexCategories = [
  { id: "chutes",   nom: "Chutes",                    ko: "NAK BEOP",            src: "lex" },
  { id: "niveaux",  nom: "Niveaux",                   ko: "DAN",                 src: "lex" },
  { id: "pieds",    nom: "Coups de pied simples",     ko: "DAN SHIK BAL TCHAGI", src: "lex" },
  { id: "speciaux", nom: "Coups de pied spéciaux",    ko: "THEUK SU BAL TCHAGI", src: "lex" },
  { id: "selfdef",  nom: "Self-défense",              ko: "HO SHIN SOOL",        src: "lex" },
  { id: "armes",    nom: "Techniques avec une arme",  ko: "MU GI SOOL",          src: "lex" },
  { id: "principes",nom: "Principes du Hapkido",      ko: "WON LI",              src: "lex" },
  { id: "arbitrage",nom: "Commandements et arbitrage",ko: "",                    src: "arb" },
  { id: "programme",nom: "Termes des programmes de Dan", ko: "",                 src: "ex" }
];

HKD.lexique = [
  /* I. Chutes — Annexe 1 p.1 */
  { r: "Nak Beop", h: "낙법", f: "Technique de chute", c: "chutes", s: { d: "lex", p: 1 } },
  { r: "Jeon-bang Nak-beop", h: "전방 낙법", f: "Chute avant", c: "chutes", s: { d: "lex", p: 1 }, g: [1] },
  { r: "Hu-bang Nak-beop", h: "후방 낙법", f: "Chute arrière", c: "chutes", s: { d: "lex", p: 1 }, g: [1] },
  { r: "Ch’euk-bang Nak-beop", h: "측방 낙법", f: "Chute latérale", c: "chutes", s: { d: "lex", p: 1 }, g: [1] },
  { r: "Hwae-jeon Nak-beop", h: "회전낙법", f: "Chute avant roulée", c: "chutes", s: { d: "lex", p: 1 }, g: [1] },
  { r: "Ap Guregi", h: "앞 구르기", f: "Roulade avant", c: "chutes", s: { d: "lex", p: 1 } },
  { r: "Dwi Guregi", h: "뒤 구르기", f: "Roulade arrière", c: "chutes", s: { d: "lex", p: 1 } },
  { r: "Gong-jung Ch’euk-bang Nak-beop", h: "공중 측방 낙법", f: "Chute avant sans appui au sol", c: "chutes", s: { d: "lex", p: 1 } },
  { r: "Nop-i Nak-beop", h: "높이 낙법", f: "Chute sautée en hauteur", c: "chutes", s: { d: "lex", p: 1 }, g: [1] },
  { r: "Meol-li Nak-beop", h: "멀리 낙법", f: "Chute sautée en longueur", c: "chutes", s: { d: "lex", p: 1 } },

  /* II. Niveaux — Annexe 1 p.1 */
  { r: "Dan", h: "단", f: "Niveau", c: "niveaux", s: { d: "lex", p: 1 } },
  { r: "Sang Dan", h: "상단", f: "Niveau haut", c: "niveaux", s: { d: "lex", p: 1 } },
  { r: "Jung Dan", h: "중단", f: "Niveau moyen", c: "niveaux", s: { d: "lex", p: 1 } },
  { r: "Ha Dan", h: "하단", f: "Niveau bas", c: "niveaux", s: { d: "lex", p: 1 } },

  /* III. Coups de pied simples — Annexe 1 p.2 */
  { r: "Bal Tchagi", h: "발차기", f: "Technique de coup de pied", c: "pieds", s: { d: "lex", p: 2 } },
  { r: "Dwikkumtchi Tcha Origi", h: "뒤꿈치 차올리기", f: "Coup de pied jambe tendue vers le haut (coup de pied « stretching »)", c: "pieds", s: { d: "lex", p: 2 } },
  { r: "Ap Tchagi", h: "앞차기", f: "Coup de pied de face", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3] },
  { r: "Yeop Tchagi", h: "옆차기", f: "Coup de pied latéral avec le tranchant du pied", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3] },
  { r: "Tchiguo Tchagi", h: "찍어차기", f: "Coup de pied circulaire avec le dessus du pied", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3] },
  { r: "Anjokdo Hurigi", h: "안족도 후리기", f: "Coup de pied jambe tendue extérieur vers l’intérieur", c: "pieds", s: { d: "lex", p: 2 }, g: [3] },
  { r: "Bakkatjokdo Hurigi", h: "바깥족도 후리기", f: "Coup de pied tranchant jambe tendue intérieur vers l’extérieur", c: "pieds", s: { d: "lex", p: 2 }, g: [3] },
  { r: "Dwikkumtchi Naeryeo Djikgi", h: "뒤꿈치 내려찍기", f: "Coup de pied marteau avec le talon", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3], v: ["Naeryeo Tchagi (Examen 1er Dan)", "Dwikkumtchi Naeryeo Tchagi (Examen 3e Dan)"] },
  { r: "Heobeok Yeol Tchagi", h: "허벅지혈 찍기", f: "Coup de pied crocheté avec le talon au niveau de la cuisse", c: "pieds", s: { d: "lex", p: 2 } },
  { r: "Momdollyeo Tchagi", h: "몸돌려 차기", f: "Coup de pied circulaire retourné", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3] },
  { r: "Dwi Tchagi", h: "뒤차기", f: "Coup de pied retourné", c: "pieds", s: { d: "lex", p: 2 }, g: [1, 3], v: ["Désigné « coup de pied arrière direct » dans les programmes 1er et 3e Dan"] },
  { r: "Mureup Tchigi", h: "무릅 치기", f: "Coup de genou", c: "pieds", s: { d: "lex", p: 2 }, g: [3] },

  /* IV. Coups de pied spéciaux — Annexe 1 p.2 */
  { r: "Anja Tchiguo Tchagi", h: "앉아 찍어 차기", f: "Coup de pied circulaire bas à ras du sol", c: "speciaux", s: { d: "lex", p: 2 }, g: [1, 3] },
  { r: "Anja Dolyeo Tchagi", h: "앉아 돌려 차기", f: "Coup de pied retourné (circulaire arrière) bas à ras du sol", c: "speciaux", s: { d: "lex", p: 2 }, g: [1, 3], v: ["Anja Dollyeo Tchagi (programmes de Dan)", "Anjwa Dollyeo Chagi / Anjwa dolyo chagi (règlement combat)"] },
  { r: "Ha Dan Jokdo Tchagi", h: "하단 족도 차기", f: "Attaque à la rotule avec le tranchant du pied", c: "speciaux", s: { d: "lex", p: 2 }, g: [1, 3], v: ["Ha dan Jok-do Tchagi (Examen 1er Dan)", "Ha Dan Jok-do Tchagi (Examen 3e Dan)"] },
  { r: "Dwikkumtchi Mit Tchagi", h: "뒤꿈치 밑 차기", f: "Attaque à la rotule avec le talon vers l’extérieur", c: "speciaux", s: { d: "lex", p: 2 }, g: [1, 3], v: ["Dwikumtchi Mit Tchagi (Examen 1er Dan)"] },
  { r: "Dubal Moa Ap Tchagi", h: "두발 모아 앞차기", f: "Coups de pied sauté de face des 2 pieds", c: "speciaux", s: { d: "lex", p: 2 }, g: [3] },
  { r: "Yangbal Beolyeo Tchagi", h: "양발 벌려 차기", f: "Coups de pied sauté de face jambes écartées", c: "speciaux", s: { d: "lex", p: 2 }, g: [3], v: ["Yangbal Bolyeo Ap Tchagi — « coup de pied sauté grand écart » (Examen 3e Dan)"] },
  { r: "Yangbal Moa I-dan Yeop Tchagi", h: "양발 모아 이단 옆차기", f: "Coup de pieds sauté latéral avec les 2 pieds joints", c: "speciaux", s: { d: "lex", p: 2 }, g: [3], v: ["Yangbal Moa Idan Yeop Tchagi (Examen 3e Dan)"] },
  { r: "Yangbal Moa I-dan Tchiguo Tchagi", h: "양발 모아 이단 찍어 차기", f: "Coup de pied sauté circulaire avec les 2 pieds", c: "speciaux", s: { d: "lex", p: 2 }, g: [3], v: ["Yangbal Moa Idan Tchiguo Tchagi — « fouetté sauté avec les 2 pieds joints » (Examen 3e Dan)"] },

  /* V. Self-défense — Annexe 1 p.3 */
  { r: "Tchigi", h: "치기", f: "Frappe des membres supérieurs", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Tchagi", h: "차기", f: "Frappe des membres inférieurs", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Kkeok-gi", h: "꺾기", f: "Clé articulaire", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Deonjigi", h: "던지기", f: "Projection", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Ho Shin Sool", h: "호신술", f: "Technique de self-défense", c: "selfdef", s: { d: "lex", p: 3 }, g: [6], v: ["Hoshinsool (Examen 6e Dan)"] },
  { r: "Son-Mok Sool – Kkeok-gi", h: "손목술 -꺾기", f: "Défense contre saisie de poignet – Techniques de clés", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Son-Mok Sool – Pae-go Tchigi", h: "손목술 -빼고 치기", f: "Défense contre saisie de poignet – Dégagements et percussions", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Eui-Bok Sool", h: "의복술", f: "Défense contre saisie au vêtement", c: "selfdef", s: { d: "lex", p: 3 }, g: [1] },
  { r: "Eui-Bok Sool - Jeonmyeon", h: "의복술 - 전면", f: "Défense contre saisie au vêtement – de face", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Eui Bok Sool - Humyeon", h: "의복술 -후면", f: "Défense contre saisie au vêtement – de dos", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Bang-Kwon Sool / Jumeok Mak-gi", h: "방권술 / 주먹 막기", f: "Défense contre une attaque de poing", c: "selfdef", s: { d: "lex", p: 3 }, g: [1] },
  { r: "Bang-Jok Sool – Bal Mak-gi", h: "방족술 / 발 막기", f: "Défense contre une attaque de pied", c: "selfdef", s: { d: "lex", p: 3 }, g: [1] },
  { r: "Joreugi Mak-gi", h: "조르기 막기", f: "Défense contre un étranglement", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Yu-Sool Mak-gi / Deonjigi Mak-gi", h: "유술 막기 - 던지기 막기", f: "Défense contre une projection", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Bang-Keom Sool", h: "방검술", f: "Défense contre une attaque au couteau", c: "selfdef", s: { d: "lex", p: 3 } },
  { r: "Seon Sool", h: "선술", f: "Technique d’attaque", c: "selfdef", s: { d: "lex", p: 3 } },

  /* VI. Armes — Annexe 1 p.4 */
  { r: "Mu Gi Sul", h: "무기술", f: "Technique de défense avec une arme", c: "armes", s: { d: "lex", p: 4 }, v: ["MU GI SOOL (titre de la section)"] },
  { r: "Dan-Bong Sool", h: "단봉술", f: "Technique avec un bâton court (33 cm)", c: "armes", s: { d: "lex", p: 4 }, g: [2] },
  { r: "Jang-Bong Sool", h: "장봉술", f: "Technique avec un bâton long", c: "armes", s: { d: "lex", p: 4 }, g: [4] },
  { r: "Dan-Jang Sool – Ji-Pang Sool", h: "단장술 - 지팡술", f: "Technique avec une canne", c: "armes", s: { d: "lex", p: 4 }, g: [4] },
  { r: "Bu-Chae Sool", h: "부채술", f: "Technique avec des éventails", c: "armes", s: { d: "lex", p: 4 } },
  { r: "Po-Bak Sool", h: "포박술", f: "Technique avec une ceinture", c: "armes", s: { d: "lex", p: 4 }, g: [3] },
  { r: "Keom Sool", h: "검술", f: "Technique de sabre", c: "armes", s: { d: "lex", p: 4 } },

  /* VII. Principes — Annexe 1 p.4 */
  { r: "Won Li", h: "원리", f: "Principe", c: "principes", s: { d: "lex", p: 4 } },
  { r: "Yu", h: "유", f: "Fluidité", c: "principes", s: { d: "lex", p: 4 } },
  { r: "Won", h: "원", f: "Cercle", c: "principes", s: { d: "lex", p: 4 } },
  { r: "Hwa", h: "화", f: "Harmonie", c: "principes", s: { d: "lex", p: 4 } },

  /* Commandements et arbitrage — règlements combat et technique */
  { r: "Chung", f: "Bleu", c: "arbitrage", s: { d: "arb", p: 4 } },
  { r: "Hong", f: "Rouge", c: "arbitrage", s: { d: "arb", p: 4 } },
  { r: "Charyeot — Kygongnye", f: "Injonction de l’arbitre pour que les combattants se fassent face et se saluent", c: "arbitrage", s: { d: "arb", p: 11 }, ctx: true, v: ["Charyeot – Kyeongnye (règlement technique)"] },
  { r: "Joon-bi", f: "Prêt", c: "arbitrage", s: { d: "arb", p: 11 } },
  { r: "Shi-jak", f: "Commencez", c: "arbitrage", s: { d: "arb", p: 11 } },
  { r: "Keu-man", f: "Arrêt", c: "arbitrage", s: { d: "arb", p: 11 } },
  { r: "Kal-yeo", f: "Séparez-vous", c: "arbitrage", s: { d: "arb", p: 11 } },
  { r: "Kye-sok", f: "Continuez", c: "arbitrage", s: { d: "arb", p: 11 } },
  { r: "Kye-shi", f: "Annoncé par l’arbitre pour faire arrêter le chronomètre par l’opérateur (interruption pour blessure)", c: "arbitrage", s: { d: "arb", p: 22 }, ctx: true },
  { r: "Shi-gan", f: "Temps mort", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Woo-se-girok", f: "Déclaré par l’arbitre lorsque la 3e reprise doit être décidée par supériorité", c: "arbitrage", s: { d: "arb", p: 19 }, ctx: true },
  { r: "Gam-jeom", f: "Déduction de points par pénalités", c: "arbitrage", s: { d: "jt", p: 7 }, v: ["En combat : sanction comptée comme un point pour le combattant adverse (règlement combat, p. 15)"] },
  { r: "Ippon", h: "잇폰", f: "Fin de la reprise par action victorieuse", c: "arbitrage", s: { d: "arb", p: 14 } },
  { r: "Hana – Dool – Set", f: "Compte de trois avant la désignation simultanée du vainqueur par les juges", c: "arbitrage", s: { d: "arb", p: 19 }, ctx: true, v: ["Hana – Dul – Set (règlement technique)"] },
  { r: "Ha-nah", f: "Un", c: "arbitrage", s: { d: "arb", p: 21 } },
  { r: "Duhl", f: "Deux", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Seht", f: "Trois", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Neht", f: "Quatre", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Da-seot", f: "Cinq", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Yeo-seot", f: "Six", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Il-gop", f: "Sept", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Yeodeol", f: "Huit", c: "arbitrage", s: { d: "arb", p: 21 } },
  { r: "A-hop", f: "Neuf", c: "arbitrage", s: { d: "arb", p: 22 } },
  { r: "Yeol", f: "Dix", c: "arbitrage", s: { d: "arb", p: 21 } },

  /* Termes des programmes d'examen (désignation française donnée par le programme) */
  { r: "Son-Mok Sool", f: "Saisie au poignet", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "An Son Mok", f: "Saisie une main sur le poignet du même côté", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Bandae Son Mok", f: "Saisie une main sur le poignet du côté opposé", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Du Son Mok", f: "Saisie des 2 poignets avec les mains", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Du Son Jabgi", f: "Saisie d’un poignet avec deux mains", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Dwi Du Son Mok", f: "Saisie des deux poignets de dos", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "So Maekeut", f: "Saisie de face d’une manche", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Myeok Sal Baro", f: "Saisie de face le revers du col", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Dwi Mok Delmi", f: "Saisie arrière une main au col", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Dwi Du Eokae", f: "Saisie arrière aux épaules", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Dwi Du Palkup", f: "Saisie arrière de manche", c: "programme", s: { d: "ex1", p: 3 }, g: [1] },
  { r: "Ap Yese Kongkyeok", f: "Attaque au couteau de face", c: "programme", s: { d: "ex1", p: 4 }, g: [1] },
  { r: "Yeop Yese Kongkyeok", f: "Attaque au couteau sur le côté extérieur", c: "programme", s: { d: "ex1", p: 4 }, g: [1] },
  { r: "An Yese Kongkyeok", f: "Attaque au couteau sur le côté intérieur", c: "programme", s: { d: "ex1", p: 4 }, g: [1] },
  { r: "Ywi Yese Kongkyeok", f: "Attaque au couteau de haut en bas", c: "programme", s: { d: "ex1", p: 4 }, g: [1] },
  { r: "Dwi Yese Kongkyeok", f: "Attaque au couteau pointée sur le dos", c: "programme", s: { d: "ex1", p: 4 }, g: [1] },
  { r: "Yeopmok Joreugi", f: "Saisie du cou sur le côté", c: "programme", s: { d: "ex2", p: 2 }, g: [2] },
  { r: "Dwimok Joreugi", f: "Saisie au cou par l’arrière", c: "programme", s: { d: "ex2", p: 2 }, g: [2] },
  { r: "Nu Eose Yeopmok Joreugi", f: "Saisie au cou au sol de côté", c: "programme", s: { d: "ex2", p: 2 }, g: [2] },
  { r: "Apmok Joreugi", f: "Étranglement au cou avec les deux mains de face", c: "programme", s: { d: "ex2", p: 2 }, g: [2] },
  { r: "Myeoksal Baromok Joreugi", f: "Étranglement de face avec les deux revers du dobok", c: "programme", s: { d: "ex2", p: 2 }, g: [2] },
  { r: "Jukdo Sool", f: "Blocage avec un bâton court contre un sabre en bambou", c: "programme", s: { d: "ex2", p: 3 }, g: [2] },
  { r: "Dwieo Momdollyeo Tchagi", f: "Circulaire retourné, talon de face sauté", c: "programme", s: { d: "ex3", p: 1 }, g: [3] },
  { r: "Dwieo Ap Tchagi", f: "De face sauté", c: "programme", s: { d: "ex3", p: 2 }, g: [3] },
  { r: "Dwieo Tchiguo Tchagi", f: "Fouetté sauté", c: "programme", s: { d: "ex3", p: 2 }, g: [3] }
];

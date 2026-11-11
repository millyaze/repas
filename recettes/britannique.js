// ============================================================
// RECETTES : cuisine britannique (58 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/indienne.js
// ============================================================
ajouterRecettes([
  {
    id: "veloute-de-tomates", nom: "Velouté de tomates", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52841",
    ingredients: [
      { id: "sauce-tomate", quantite: 500, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 125, unite: "g" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true, ou: { id: "poireau", quantite: 1, unite: "pièce" } },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir doucement 10 min dans l'huile l'oignon, la carotte, les pommes de terre et le céleri coupés en petits morceaux, avec le laurier.", "Ajouter la sauce tomate, le sucre, le vinaigre, le bouillon cube émietté et l'eau bouillante.", "Couvrir et laisser mijoter 15 min, jusqu'à ce que les pommes de terre soient tendres, puis retirer le laurier.", "Mixer jusqu'à obtenir un velouté bien lisse, saler et poivrer.", "Réchauffer en ajoutant le lait, sans faire bouillir."]
  },
  {
    id: "mijote-de-poulet-aux-champignons", nom: "Mijoté de poulet aux champignons", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52846",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "farine", quantite: 40, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "moutarde-en-poudre", quantite: 1, unite: "g", ou: { id: "moutarde", quantite: 2, unite: "g" } },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Cuire le poulet coupé en morceaux 8 min à la poêle avec 10 g de beurre.", "Dans une casserole, faire fondre 40 g de beurre, y cuire l'oignon haché 5 min puis ajouter les champignons émincés.", "Ajouter la farine et le bouillon cube émietté, remuer 2 min à feu doux.", "Hors du feu, verser l'eau petit à petit en remuant, ajouter le poivre, la muscade et la moutarde en poudre, puis faire épaissir à feu moyen sans cesser de remuer.", "Ajouter le poulet et le maïs égoutté, verser dans un plat à four beurré.", "Couvrir de fines rondelles de pommes de terre qui se chevauchent, badigeonner du reste de beurre fondu et cuire 35 min au four, jusqu'à ce qu'elles soient dorées."]
  },
  {
    id: "mijote-de-saucisses-aux-haricots-blancs", nom: "Mijoté de saucisses aux haricots blancs", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52848",
    ingredients: [
      { id: "saucisse", quantite: 4, unite: "pièce" },
      { id: "sauce-tomate", quantite: 350, unite: "g" },
      { id: "haricots-blancs-en-boite", quantite: 2, unite: "boîte" },
      { id: "melasse", quantite: 15, unite: "g", ou: { id: "sucre", quantite: 5, unite: "g" } },
      { id: "moutarde", quantite: 3, unite: "g" }
    ],
    etapes: ["Dans une cocotte, faire dorer les saucisses de tous les côtés, environ 10 min.", "Ajouter la sauce tomate, puis les haricots égouttés, la mélasse et la moutarde.", "Porter à frémissement, couvrir et laisser cuire 30 min. Servir avec du pain ou du riz."]
  },
  {
    id: "saucisses-en-pate-au-four", nom: "Saucisses en pâte au four (toad in the hole)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52822",
    ingredients: [
      { id: "saucisse", quantite: 4, unite: "pièce" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 110, unite: "ml" },
      { id: "raifort", quantite: 10, unite: "g", ou: { id: "moutarde", quantite: 5, unite: "g" } },
      { id: "tomates-cerises", quantite: 100, unite: "g", ou: { id: "tomate", quantite: 2, unite: "pièce" } },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Faire dorer les saucisses à la poêle.", "Verser l'huile dans un plat à four et le mettre 5 min au four pour qu'il soit très chaud.", "Mélanger la farine, l'œuf et le raifort râpé, puis verser le lait petit à petit en fouettant. Saler et poivrer.", "Poser les saucisses dans le plat chaud, verser la pâte par-dessus et ajouter les tomates cerises.", "Cuire 30 min au four, jusqu'à ce que la pâte soit gonflée et dorée."]
  },
  {
    id: "tarte-bakewell", nom: "Tarte Bakewell (amandes et confiture de framboises)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52767",
    ingredients: [
      { id: "farine", quantite: 175, unite: "g" },
      { id: "beurre", quantite: 200, unite: "g" },
      { id: "eau", quantite: 40, unite: "ml" },
      { id: "confiture", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "poudre-d-amandes", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "amandes", quantite: 50, unite: "g", optionnel: true }
    ],
    etapes: ["Pâte : sabler du bout des doigts la farine avec 75 g de beurre froid, ajouter 2 à 3 cuillères à soupe d'eau froide et former une boule. L'étaler et en garnir un moule à tarte de 20 cm. Mettre 30 min au frais.", "Préchauffer le four à 200 °C. Couvrir la pâte de papier cuisson et de légumes secs, cuire 15 min, retirer le papier et cuire encore 5 min.", "Étaler généreusement la confiture (de framboises de préférence) sur le fond de tarte.", "Faire fondre 125 g de beurre, hors du feu ajouter le sucre, la poudre d'amandes (ou des amandes mixées finement), l'œuf battu et quelques gouttes d'extrait d'amande si vous en avez.", "Verser sur la confiture, parsemer d'amandes effilées et cuire 20 à 25 min à 180 °C, jusqu'à ce que le dessus soit doré et pris. Une tarte entière : il en restera pour le goûter."]
  },
  {
    id: "tarte-frangipane-pommes-fond-biscuits", nom: "Tarte frangipane aux pommes sur fond de biscuits", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52768",
    ingredients: [
      { id: "biscuits-secs", quantite: 175, unite: "g", ou: { id: "pate-brisee", quantite: 1, unite: "pièce" } },
      { id: "beurre", quantite: 150, unite: "g" },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 75, unite: "g" },
      { id: "amandes", quantite: 50, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 200 °C. Écraser les biscuits en fine poudre (dans un sac, au rouleau à pâtisserie).", "Faire fondre 75 g de beurre, y mélanger les miettes de biscuits, puis tasser le tout au fond et sur les bords d'un moule à tarte. Mettre au frais.", "Battre le reste du beurre mou avec le sucre jusqu'à ce que ce soit léger, ajouter les œufs battus, puis la poudre d'amandes (et quelques gouttes d'extrait d'amande si vous en avez).", "Éplucher les pommes et les couper en fines lamelles au dernier moment.", "Étaler la crème d'amandes sur le fond, y enfoncer les lamelles de pommes, parsemer d'amandes effilées et cuire 20 à 25 min à 180 °C, jusqu'à ce que ce soit doré et pris. Une tarte entière : il en restera."]
  },
  {
    id: "chili-lentilles-fume-potiron", nom: "Chili de lentilles fumé au potiron rôti", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52784",
    ingredients: [
      { id: "potiron", quantite: 300, unite: "g" },
      { id: "lentilles", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "cumin", quantite: 6, unite: "g" },
      { id: "graines-de-coriandre", quantite: 3, unite: "g", optionnel: true },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "cacao-en-poudre", quantite: 3, unite: "g", optionnel: true },
      { id: "herbes-de-provence", quantite: 1, unite: "g", optionnel: true },
      { id: "noix-de-cajou", quantite: 60, unite: "g", optionnel: true },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Couper le potiron en fines tranches, arroser d'un filet d'huile, saler et rôtir 20 à 30 min en retournant à mi-cuisson. Couper ensuite en cubes.", "Pendant ce temps, rincer les lentilles, les couvrir d'eau et les cuire 20 à 30 min à petit feu, puis égoutter.", "Faire revenir 5 min dans l'huile l'oignon et le poireau émincés. Ajouter l'ail haché et toutes les épices (cumin, coriandre moulue, paprika fumé si possible, cannelle, piment, cacao, origan), remuer 1 min.", "Ajouter la sauce tomate, l'eau et les carottes en dés, laisser mijoter 20 min. Ajouter les lentilles, le vinaigre et le sel, puis le potiron.", "Si vous avez des noix de cajou : les faire tremper dans l'eau chaude puis les mixer avec un peu d'eau pour obtenir une crème à servir sur le chili."]
  },
  {
    id: "flapjacks-fruits-secs-orange", nom: "Flapjacks (barres d'avoine) aux fruits secs et à l'orange", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52788",
    ingredients: [
      { id: "flocons-d-avoine", quantite: 250, unite: "g" },
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 110, unite: "g" },
      { id: "miel", quantite: 75, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "raisins-secs", quantite: 100, unite: "g" },
      { id: "fruits-confits", quantite: 25, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 180 °C et chemiser de papier cuisson un petit moule carré (environ 20 cm).", "Faire fondre doucement le beurre, le sucre (roux si possible), le miel (à l'origine du golden syrup) et le zeste d'orange, sans faire bouillir.", "Hors du feu, ajouter les flocons d'avoine puis les raisins secs et les fruits confits (la recette d'origine utilise un reste de pudding de Noël).", "Tasser dans le moule et cuire 30 à 35 min, jusqu'à ce que les bords dorent.", "Prédécouper en carrés encore tiède, laisser refroidir complètement avant de couper. Se garde 5 jours dans une boîte."]
  },
  {
    id: "eton-mess", nom: "Eton mess (fraises, crème fouettée et meringue)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "52791",
    ingredients: [
      { id: "fraises", quantite: 250, unite: "g" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "meringues", quantite: 40, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g", optionnel: true }
    ],
    etapes: ["Mixer la moitié des fraises en purée. Couper les autres en morceaux, en gardant 2 belles fraises pour le décor.", "Fouetter la crème (liquide entière, bien froide) en chantilly ferme.", "Incorporer délicatement la purée de fraises et les meringues émiettées, puis les morceaux de fraises.", "Répartir dans 2 verres froids et décorer d'une fraise et d'une feuille de menthe. Servir tout de suite."]
  },
  {
    id: "pudding-pain-beurre-raisins", nom: "Pudding au pain beurré et aux raisins secs", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52792",
    ingredients: [
      { id: "pain-de-mie", quantite: 4, unite: "tranche" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "raisins-secs", quantite: 25, unite: "g" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "lait", quantite: 175, unite: "ml" },
      { id: "creme-fraiche", quantite: 25, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true }
    ],
    etapes: ["Beurrer un petit plat à four. Retirer la croûte du pain, beurrer chaque tranche d'un côté et la couper en triangles.", "Disposer une couche de pain (côté beurré dessus), parsemer de raisins secs et d'un peu de cannelle, et recommencer jusqu'à épuisement, en finissant par du pain.", "Chauffer doucement le lait et la crème sans faire bouillir. Battre l'œuf avec les trois quarts du sucre, verser le lait chaud dessus en remuant.", "Verser cette crème sur le pain, saupoudrer du reste de sucre et de muscade râpée, et laisser tremper 30 min.", "Cuire 30 à 40 min au four à 180 °C, jusqu'à ce que le dessus soit doré et croustillant et la crème prise."]
  },
  {
    id: "petits-sticky-toffee-puddings-dattes", nom: "Petits sticky toffee puddings aux dattes, sauce caramel", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "52793",
    ingredients: [
      { id: "dattes", quantite: 110, unite: "g", ou: { id: "figues-seches", quantite: 110, unite: "g" } },
      { id: "eau", quantite: 90, unite: "ml" },
      { id: "farine", quantite: 90, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 70, unite: "g" },
      { id: "sucre", quantite: 160, unite: "g" },
      { id: "melasse", quantite: 20, unite: "g", optionnel: true },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "creme-fraiche", quantite: 110, unite: "ml" }
    ],
    etapes: ["Dénoyauter et hacher les dattes, les couvrir d'eau bouillante et laisser tremper 30 min, puis les écraser à la fourchette (avec un peu de vanille si vous en avez).", "Préchauffer le four à 180 °C. Beurrer et fariner 3 ou 4 ramequins.", "Battre 45 g de beurre avec 70 g de sucre (roux si possible), ajouter l'œuf battu petit à petit, puis la moitié de la mélasse. Incorporer la farine mélangée à la levure en alternant avec le lait, puis les dattes.", "Répartir dans les ramequins et cuire 20 à 25 min, jusqu'à ce que les puddings soient gonflés et fermes.", "Sauce : faire fondre le reste du sucre et du beurre avec le reste de mélasse, ajouter la crème et faire bouillir 2 à 3 min en remuant. Démouler les puddings et les napper de sauce chaude."]
  },
  {
    id: "fish-pie-poisson-crevettes-poireau", nom: "Fish pie (gratin de poisson et crevettes sous la purée)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "52802",
    ingredients: [
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "poisson-blanc", quantite: 400, unite: "g" },
      { id: "crevettes", quantite: 100, unite: "g" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "farine", quantite: 8, unite: "g" },
      { id: "creme-fraiche", quantite: 25, unite: "ml" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "fromage-rape", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre 15 min à l'eau salée, égoutter et écraser en purée avec un filet d'huile d'olive. Saler, poivrer.", "Porter le lait à ébullition avec le poisson, couper le feu, couvrir et laisser 3 min. Sortir le poisson (garder le lait), l'émietter dans un plat à four en retirant peau et arêtes.", "Dans une casserole, chauffer le reste d'huile, ajouter la farine, puis verser peu à peu 200 ml du lait de cuisson en remuant jusqu'à épaississement. Ajouter muscade, crème, sel et poivre.", "Faire revenir le poireau émincé quelques minutes. Le répartir sur le poisson avec les crevettes crues, le persil haché, le zeste et le jus du citron. Napper de sauce.", "Couvrir de purée, parsemer de fromage râpé et cuire 25 à 30 min au four à 200 °C, jusqu'à ce que ce soit doré et bouillonnant."]
  },
  {
    id: "boeuf-wellington", nom: "Bœuf Wellington (filet en croûte feuilletée)", cuisine: "britannique",
    difficulte: "difficile", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52803",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 375, unite: "g" },
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "moutarde", quantite: 15, unite: "g" },
      { id: "jambon-cru", quantite: 4, unite: "tranche" },
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer grossièrement les champignons avec sel et poivre, puis les cuire 10 min à feu vif dans une poêle pour évaporer toute leur eau. Laisser refroidir.", "Saler et poivrer le morceau de bœuf (filet de préférence), le saisir 30 secondes de chaque côté dans l'huile très chaude, laisser refroidir puis le badigeonner de moutarde.", "Sur un film alimentaire, poser les tranches de jambon cru qui se chevauchent, étaler les champignons dessus, poser le bœuf et rouler serré. Mettre 20 min au frais.", "Étaler la pâte feuilletée sur un plan fariné, retirer le film, envelopper la viande dans la pâte et souder les bords au jaune d'œuf. Dorer au jaune d'œuf et mettre encore 10 min au frais.", "Cuire 25 à 30 min au four à 200 °C, jusqu'à ce que la pâte soit bien dorée. Laisser reposer 10 min avant de couper en tranches épaisses."]
  },
  {
    id: "roti-de-boeuf-du-dimanche", nom: "Rôti de bœuf du dimanche, légumes et Yorkshire puddings", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52824",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 400, unite: "g" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "carotte", quantite: 3, unite: "pièce" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 70, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mettre le rôti de bœuf et les pommes de terre coupées en morceaux dans un plat avec un filet d'huile, saler, poivrer et rôtir environ 45 min en surveillant les pommes de terre.", "Pâte des Yorkshire puddings : battre la farine avec les œufs jusqu'à ce que ce soit lisse, puis ajouter le lait petit à petit. Saler, poivrer.", "Sortir la viande et la laisser reposer sous une feuille d'aluminium. Monter le four à 230 °C, mettre un peu d'huile dans 6 trous d'un moule à muffins et le faire chauffer 5 min.", "Verser la pâte dans le moule brûlant et cuire 20 min sans ouvrir le four, jusqu'à ce que les puddings soient gonflés et dorés.", "Pendant ce temps, cuire le brocoli en fleurettes et les carottes en rondelles à l'eau bouillante. Servir le bœuf en tranches avec les légumes et les Yorkshire puddings."]
  },
  {
    id: "veloute-brocoli-fromage-bleu", nom: "Velouté de brocoli au fromage bleu (stilton)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52842",
    ingredients: [
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "fromage-bleu", quantite: 70, unite: "g", ou: { id: "cheddar", quantite: 70, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans l'huile à feu moyen jusqu'à ce qu'il soit tendre.", "Ajouter le céleri, le poireau, la pomme de terre en dés et le beurre, couvrir et laisser suer 5 min.", "Verser l'eau chaude avec le bouillon cube, ajouter les tiges du brocoli coupées en morceaux et cuire 10 à 15 min.", "Ajouter les fleurettes de brocoli et cuire encore 5 min, puis mixer jusqu'à ce que ce soit lisse.", "Incorporer le fromage bleu émietté en laissant quelques morceaux, poivrer et servir."]
  },
  {
    id: "pain-de-viande-haricots-sauce-barbecue", nom: "Pain de viande aux haricots blancs, sauce barbecue", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52845",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g", ou: { id: "porc-hache", quantite: 250, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "sauce-worcestershire", quantite: 15, unite: "ml", optionnel: true },
      { id: "sauce-tomate", quantite: 15, unite: "g" },
      { id: "ketchup", quantite: 30, unite: "g" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-d-olive", quantite: 8, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Faire revenir l'oignon haché 8 à 10 min dans l'huile, ajouter l'ail, la sauce Worcestershire et les deux tiers de la sauce tomate. Laisser tiédir.", "Mélanger la viande hachée (de la dinde hachée à l'origine, si vous en trouvez), l'œuf, la chapelure et le mélange à l'oignon, saler et poivrer. Former un pain allongé dans un plat à four.", "Le badigeonner de la moitié du ketchup (à l'origine de la sauce barbecue) et cuire 30 min.", "Mélanger les haricots (avec un peu de leur jus) avec le reste de ketchup et de sauce tomate.", "Répartir les haricots autour du pain de viande et cuire encore 15 min. Parsemer de persil et servir en tranches."]
  },
  {
    id: "mousse-chocolat-avocat-banane", nom: "Mousse au chocolat express (avocat et banane)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "52853",
    ingredients: [
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "banane", quantite: 1, unite: "pièce" },
      { id: "cacao-en-poudre", quantite: 20, unite: "g" },
      { id: "miel", quantite: 30, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer ensemble l'avocat, la banane, le cacao, le miel, une cuillère à café de jus de citron, l'eau, une pincée de sel (et un peu de vanille si vous en avez) jusqu'à ce que ce soit bien lisse.", "Goûter et ajuster : un peu plus de miel ou de cacao selon la taille de l'avocat et de la banane.", "Répartir dans de petites coupes, saupoudrer d'un peu de cacao et servir bien frais (une banane congelée la rend encore plus fraîche)."]
  },
  {
    id: "mijote-legumes-lentilles", nom: "Mijoté de légumes aux lentilles et au thym", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52863",
    ingredients: [
      { id: "lentilles", quantite: 60, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "thym", quantite: 3, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 350, unite: "ml" }
    ],
    etapes: ["Faire revenir doucement l'oignon émincé dans l'huile 5 à 10 min.", "Ajouter l'ail, le paprika, le cumin, la moitié du thym, les carottes, le céleri et le poivron en morceaux, et cuire 5 min.", "Ajouter la sauce tomate, l'eau avec le bouillon cube, les lentilles rincées, la courgette en rondelles et le reste du thym.", "Laisser mijoter 25 à 30 min, jusqu'à ce que les lentilles soient tendres (ajouter un peu d'eau si besoin). Servir avec du riz ou une purée."]
  },
  {
    id: "rotolo-champignons-chataignes", nom: "Rotolo aux champignons et châtaignes (lasagnes roulées)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52864",
    ingredients: [
      { id: "feuilles-de-lasagne", quantite: 8, unite: "pièce" },
      { id: "champignons", quantite: 300, unite: "g" },
      { id: "chataignes", quantite: 120, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "vin-blanc", quantite: 60, unite: "ml" },
      { id: "chapelure", quantite: 30, unite: "g" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer les trois quarts des châtaignes avec 75 ml d'eau en une crème. Hacher grossièrement le reste.", "Faire revenir les échalotes hachées dans 1 cuillère à soupe d'huile avec une pincée de sel, puis ajouter l'ail, les châtaignes hachées et le thym (romarin et sauge à l'origine), 2 min.", "Ajouter les champignons émincés et un peu d'huile, cuire 5 min, puis la sauce soja, 2 min de plus. Saler, poivrer.", "Sauce : mélanger le vin blanc, le reste de l'eau et la crème de châtaignes. Préchauffer le four à 200 °C.", "Précuire les feuilles de lasagne 2 min à l'eau bouillante, les étaler, les garnir de champignons et les rouler. Couper les rouleaux en deux et les poser debout dans un plat.", "Verser la sauce, parsemer de chapelure mélangée à un filet d'huile et cuire 25 min, jusqu'à ce que ce soit doré."]
  },
  {
    id: "chili-vegetarien-legumes-rotis", nom: "Chili végétarien express aux légumes rôtis", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52867",
    ingredients: [
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "riz", quantite: 120, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Couper les légumes en gros morceaux, les arroser d'huile, saler et les rôtir 20 min dans une cocotte allant au four.", "Ajouter les haricots égouttés, la sauce tomate et le piment, et remettre au four 10 à 15 min, jusqu'à ce que ce soit bien chaud.", "Pendant ce temps, cuire le riz (ou un mélange de céréales). Servir le chili sur le riz."]
  },
  {
    id: "ragout-boeuf-dumplings", nom: "Ragoût de bœuf et ses boulettes de pâte (dumplings)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 165, portions: 2,
    source: "TheMealDB", idSource: "52873",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 375, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "vin-rouge", quantite: 75, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "farine", quantite: 75, unite: "g" },
      { id: "levure-chimique", quantite: 2, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sauce-worcestershire", quantite: 5, unite: "ml", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Dans une cocotte, faire dorer le bœuf en cubes dans l'huile et 15 g de beurre. Saupoudrer de 15 g de farine et cuire 2 à 3 min.", "Ajouter l'ail et tous les légumes en morceaux, remuer 1 à 2 min. Verser le vin, l'eau avec le bouillon cube, les herbes et la sauce Worcestershire. Saler, poivrer.", "Couvrir et cuire environ 2 h au four, jusqu'à ce que la viande soit tendre.", "Dumplings : mélanger 60 g de farine, la levure et une pincée de sel, ajouter 30 g de beurre très froid râpé (à la place de la graisse de rognon) et juste assez d'eau pour une pâte épaisse. Former 6 petites boules avec les mains farinées.", "Poser les boulettes sur le ragoût, remettre au four sans couvercle 20 min, jusqu'à ce qu'elles aient gonflé et doré. Parsemer de persil."]
  },
  {
    id: "tourte-boeuf-moutarde", nom: "Tourte au bœuf et à la moutarde", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 190, portions: 2,
    source: "TheMealDB", idSource: "52874",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 500, unite: "g" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "vin-rouge", quantite: 100, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "moutarde", quantite: 15, unite: "g" },
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "haricots-verts", quantite: 150, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 150 °C. Rouler le bœuf en cubes dans la farine salée et poivrée, puis le faire dorer en deux fois dans l'huile, dans une cocotte.", "Remettre toute la viande, verser le vin et laisser réduire de moitié. Ajouter l'eau avec le bouillon cube, l'oignon émincé, les carottes en rondelles, le thym et la moutarde.", "Couvrir et cuire 2 h au four. Laisser refroidir, puis verser dans un plat à tourte.", "Monter le four à 200 °C. Couvrir le plat de pâte feuilletée, souder les bords, faire une petite cheminée et dorer au jaune d'œuf. Cuire 30 min, jusqu'à ce que la pâte soit dorée.", "Servir avec les haricots verts cuits à l'eau et passés au beurre."]
  },
  {
    id: "tourte-poulet-jambon-poireaux", nom: "Tourte au poulet, jambon et poireaux", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52875",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "jambon", quantite: 3, unite: "tranche" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 260, unite: "ml" },
      { id: "beurre", quantite: 140, unite: "g" },
      { id: "farine", quantite: 200, unite: "g" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "vin-blanc", quantite: 20, unite: "ml", optionnel: true },
      { id: "creme-fraiche", quantite: 75, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : sabler 175 g de farine avec 100 g de beurre froid, ajouter la moitié de l'œuf battu et 1 cuillère à soupe d'eau froide, former une boule et mettre au frais 30 min.", "Pocher les blancs de poulet 10 min à petit feu dans 240 ml d'eau avec le bouillon cube. Les sortir et garder le bouillon.", "Faire fondre 15 g de beurre, y cuire doucement le poireau émincé 2 min puis l'ail 1 min. Ajouter le reste du beurre et 25 g de farine, remuer 30 secondes.", "Verser petit à petit le lait, puis le bouillon, le vin et la crème, en remuant jusqu'à ce que la sauce épaississe. Ajouter le poulet en morceaux et le jambon en lanières, saler, poivrer, laisser refroidir dans un plat à tourte.", "Préchauffer le four à 200 °C. Couvrir le plat de pâte étalée, souder les bords, dorer avec le reste d'œuf et cuire 30 à 35 min, jusqu'à ce que la pâte soit bien dorée."]
  },
  {
    id: "tourte-boeuf-hache-champignons", nom: "Tourte au bœuf haché et aux champignons", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52876",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 15, unite: "g" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "champignons", quantite: 40, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "sauce-worcestershire", quantite: 5, unite: "ml", optionnel: true },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" }
    ],
    etapes: ["Faire dorer la viande hachée 4 à 5 min dans l'huile en l'émiettant. Ajouter l'oignon haché 2 à 3 min, puis la sauce tomate 2 à 3 min.", "Saupoudrer de farine, remuer 1 min, puis ajouter les champignons hachés, l'eau avec le bouillon cube (ou de la bière brune) et la sauce Worcestershire.", "Porter à ébullition, couvrir et laisser mijoter 20 min. Laisser refroidir puis verser dans un petit plat à tourte. Préchauffer le four à 200 °C.", "Couvrir de pâte brisée un peu plus grande que le plat, souder les bords, faire une petite entaille au centre et dorer au jaune d'œuf.", "Cuire 20 à 25 min, jusqu'à ce que la pâte soit dorée."]
  },
  {
    id: "tourte-agneau-pommes-de-terre", nom: "Tourte à l'agneau et aux pommes de terre", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "52877",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 250, unite: "g" },
      { id: "farine", quantite: 8, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 175, unite: "ml" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Fariner légèrement l'agneau coupé en cubes (épaule ou gigot). Le faire dorer dans l'huile avec l'oignon émincé, saler et poivrer.", "Ajouter les carottes en rondelles et l'eau avec le bouillon cube, porter à ébullition, couvrir et laisser mijoter au moins 1 h, jusqu'à ce que la viande soit tendre.", "Pendant ce temps, cuire les pommes de terre en cubes 10 min à l'eau et les égoutter. Préchauffer le four à 180 °C.", "Ajouter les pommes de terre à l'agneau, verser dans un plat et couvrir de pâte brisée. Faire 3 entailles sur le dessus et dorer à l'œuf battu.", "Cuire 30 à 40 min, jusqu'à ce que la pâte soit bien dorée."]
  },
  {
    id: "tourte-boeuf-biere-brune", nom: "Tourte au bœuf mijoté à la bière brune", cuisine: "britannique",
    difficulte: "difficile", tempsMinutes: 210, portions: 2,
    source: "TheMealDB", idSource: "52878",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 450, unite: "g" },
      { id: "biere", quantite: 165, unite: "ml", ou: { id: "vin-rouge", quantite: 165, unite: "ml" } },
      { id: "lardons", quantite: 60, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "fecule", quantite: 10, unite: "g" },
      { id: "farine", quantite: 200, unite: "g" },
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Saler et poivrer le bœuf en cubes, le faire dorer en plusieurs fois dans l'huile et le mettre dans une cocotte. Dans la même poêle, faire revenir les échalotes 4 à 5 min, l'ail 30 secondes et les lardons jusqu'à ce qu'ils dorent ; ajouter à la cocotte avec le thym et le laurier.", "Préchauffer le four à 180 °C. Verser la bière (brune, type stout) dans la poêle chaude en grattant les sucs, puis la verser dans la cocotte avec l'eau et le bouillon cube.", "Couvrir et cuire 2 h au four. Épaissir la sauce avec la fécule délayée dans un peu d'eau froide, laisser refroidir dans un plat à tourte.", "Pâte : sabler la farine et une pincée de sel avec le beurre froid, ajouter un peu d'eau froide pour former une boule, mettre au frais 20 min. (À l'origine, on ajoute 4 huîtres dans la garniture : facultatif.)", "Monter le four à 200 °C. Couvrir le plat de pâte, souder les bords, dorer à l'œuf battu et cuire 30 à 40 min, jusqu'à ce que la pâte soit bien dorée."]
  },
  {
    id: "scotch-pie-agneau-epice", nom: "Scotch pie à l'agneau épicé (tourte écossaise façon indienne)", cuisine: "britannique",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "52880",
    ingredients: [
      { id: "agneau-hache", quantite: 500, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "graines-de-coriandre", quantite: 3, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "farine", quantite: 170, unite: "g" },
      { id: "lait", quantite: 45, unite: "ml" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 8, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire griller le cumin à sec quelques minutes, réserver. Dans la même poêle, faire revenir dans l'huile l'oignon, l'ail, les piments et le poivron hachés avec une pincée de sel, environ 8 min, jusqu'à ce qu'il n'y ait plus d'eau. Hors du feu, ajouter le cumin, la muscade et la coriandre moulue. Laisser refroidir.", "Mélanger l'agneau haché, le poivre, la coriandre fraîche hachée et le mélange aux oignons. Garder au frais.", "Préchauffer le four à 200 °C et beurrer un moule à gâteau de 15 à 18 cm. Pâte : chauffer le lait et le beurre (le saindoux à l'origine) jusqu'à frémissement, verser sur la farine et le sel et mélanger en pâte souple.", "Étaler les deux tiers de la pâte encore tiède pour foncer le moule, remplir de farce, couvrir avec le reste de pâte, souder les bords et faire un trou au centre. Dorer au jaune d'œuf.", "Cuire 1 h environ, jusqu'à ce que la pâte soit bien dorée et la viande cuite. Laisser tiédir avant de démouler."]
  },
  {
    id: "tourte-boeuf-rognons", nom: "Tourte au bœuf et aux rognons (steak and kidney pie)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "52881",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 300, unite: "g" },
      { id: "rognons", quantite: 100, unite: "g", ou: { id: "champignons", quantite: 100, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "sauce-worcestershire", quantite: 5, unite: "ml", optionnel: true },
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire dorer le bœuf en cubes dans l'huile, réserver, puis faire dorer les rognons (d'agneau) coupés en morceaux. Ajouter l'oignon émincé 3 à 4 min.", "Remettre le bœuf, saupoudrer de farine et bien enrober. Verser l'eau avec le bouillon cube, porter à ébullition puis laisser mijoter 1 h 30 sans couvercle (rajouter un peu d'eau si ça réduit trop).", "Saler, poivrer, ajouter la sauce Worcestershire et laisser refroidir complètement dans un plat à tourte. Préchauffer le four à 220 °C.", "Couvrir de pâte feuilletée, souder les bords à l'œuf battu, faire une petite entaille et dorer à l'œuf.", "Cuire 20 à 25 min, jusqu'à ce que la pâte soit gonflée et dorée."]
  },
  {
    id: "fish-pie-trois-poissons-oeufs", nom: "Fish pie aux trois poissons et aux œufs", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52882",
    ingredients: [
      { id: "pomme-de-terre", quantite: 350, unite: "g" },
      { id: "saumon", quantite: 80, unite: "g" },
      { id: "poisson-blanc", quantite: 80, unite: "g" },
      { id: "haddock-fume", quantite: 80, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 35, unite: "g" },
      { id: "farine", quantite: 25, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "fromage-rape", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Cuire les pommes de terre à l'eau salée, les écraser en purée avec une noix de beurre et un peu de lait. Saler, poivrer.", "Cuire les œufs 10 min dans l'eau bouillante, les écaler et les couper en quartiers.", "Faire fondre le reste du beurre, ajouter le poireau émincé, couvrir et laisser cuire doucement 10 min.", "Délayer la farine dans le vin blanc. Verser le reste du lait sur les poireaux, porter à ébullition, ajouter le mélange vin-farine et remuer jusqu'à épaississement. Ajouter le persil et les poissons en cubes, cuire 2 min.", "Verser dans un plat, répartir les œufs, couvrir de purée, parsemer de fromage râpé et cuire 30 à 40 min, jusqu'à ce que ce soit doré."]
  },
  {
    id: "sticky-toffee-pudding-au-four", nom: "Sticky toffee pudding (gâteau à la mélasse, sauce caramel)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52883",
    ingredients: [
      { id: "farine", quantite: 110, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "sucre", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "melasse", quantite: 30, unite: "g", ou: { id: "miel", quantite: 30, unite: "g" } },
      { id: "lait", quantite: 140, unite: "ml" },
      { id: "creme-fraiche", quantite: 150, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C et beurrer un petit plat à four.", "Mettre dans un saladier 50 g de beurre, 90 g de sucre (roux si possible), l'œuf, la farine, la levure et les deux tiers de la mélasse. Battre au batteur 30 secondes, puis ajouter le lait petit à petit jusqu'à ce que ce soit lisse.", "Verser dans le plat et cuire 30 à 35 min, jusqu'à ce que le gâteau soit bien gonflé et souple au centre.", "Sauce : chauffer doucement le reste du beurre, du sucre et de la mélasse avec 100 ml de crème (et un peu de vanille), puis faire bouillir 1 min en remuant.", "Verser la moitié de la sauce sur le pudding chaud, servir avec le reste de sauce et le reste de crème."]
  },
  {
    id: "lancashire-hotpot", nom: "Lancashire hotpot (agneau mijoté sous les pommes de terre)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "52884",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 450, unite: "g" },
      { id: "rognons", quantite: 80, unite: "g", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 12, unite: "g" },
      { id: "sauce-worcestershire", quantite: 10, unite: "ml", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "beurre", quantite: 50, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Dans une cocotte, faire dorer l'agneau en morceaux dans un peu de beurre, réserver, puis faire de même avec les rognons.", "Faire dorer l'oignon et les carottes émincés, saupoudrer de farine et cuire 2 min. Ajouter la sauce Worcestershire, l'eau avec le bouillon cube, porter à ébullition.", "Remettre la viande avec le laurier et couper le feu. Couvrir de pommes de terre en fines rondelles qui se chevauchent, arroser de beurre fondu.", "Couvrir et cuire 1 h 30 au four. Retirer le couvercle, badigeonner de beurre et cuire encore 30 min à 220 °C, jusqu'à ce que les pommes de terre soient dorées."]
  },
  {
    id: "bubble-and-squeak", nom: "Bubble and squeak (galette de pommes de terre, chou et bacon)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52885",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "chou", quantite: 200, unite: "g" },
      { id: "bacon", quantite: 4, unite: "tranche", ou: { id: "lardons", quantite: 80, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre à l'eau (ou utiliser un reste de purée ou de pommes de terre cuites) et les écraser grossièrement.", "Faire chauffer le beurre dans une poêle antiadhésive, y faire dorer le bacon en morceaux, puis ajouter l'oignon émincé et l'ail.", "Ajouter le chou émincé finement (ou des choux de Bruxelles) et le laisser colorer légèrement, 5 à 6 min en tout.", "Ajouter les pommes de terre, mélanger et tasser pour couvrir le fond de la poêle. Laisser bien accrocher et dorer, retourner par morceaux et recommencer : ce sont ces parties grillées qui font le plat.", "Saler, poivrer, couper en parts et servir."]
  },
  {
    id: "spotted-dick", nom: "Spotted dick (pudding vapeur aux raisins secs)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "52886",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "raisins-secs", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "orange", quantite: 1, unite: "pièce", optionnel: true },
      { id: "lait", quantite: 75, unite: "ml" },
      { id: "creme-anglaise", quantite: 200, unite: "ml", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger la farine, la levure et le sel. Ajouter le beurre très froid râpé (à la place de la graisse de rognon), les raisins secs, le sucre et les zestes de citron et d'orange.", "Verser le lait et mélanger en une pâte ferme mais humide (un peu de lait en plus si besoin). Former un boudin d'environ 15 cm.", "L'enrouler sans serrer dans une grande feuille de papier cuisson (il va gonfler) et fermer les bouts comme une papillote.", "Cuire 1 h 30 à la vapeur, à couvert, en rajoutant de l'eau bouillante de temps en temps.", "Laisser tiédir un peu avant de déballer, couper en tranches et servir avec de la crème anglaise chaude."]
  },
  {
    id: "kedgeree", nom: "Kedgeree (riz au curry, haddock fumé et œufs)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52887",
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "haddock-fume", quantite: 150, unite: "g", ou: { id: "saumon", quantite: 150, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "curry-en-poudre", quantite: 4, unite: "g" },
      { id: "graines-de-coriandre", quantite: 1, unite: "g", optionnel: true },
      { id: "lait", quantite: 150, unite: "ml" },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire revenir doucement l'oignon haché dans l'huile 5 min. Ajouter le curry et la coriandre moulue, saler et cuire 3 min jusqu'à ce que ça sente bon.", "Ajouter le riz, bien mélanger, verser l'eau, porter à ébullition puis couvrir et cuire 10 min à feu doux. Couper le feu et laisser reposer 10 min sans soulever le couvercle.", "Pendant ce temps, pocher le haddock 10 min dans le lait avec le laurier, puis l'émietter en retirant la peau. Cuire les œufs 8 min, les écaler et les couper en quartiers.", "Mélanger délicatement le poisson et les herbes hachées au riz, poser les œufs dessus et servir."]
  },
  {
    id: "eccles-cakes", nom: "Eccles cakes (chaussons feuilletés aux raisins épicés)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52888",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "raisins-secs", quantite: 100, unite: "g" },
      { id: "fruits-confits", quantite: 25, unite: "g", optionnel: true },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Garniture : faire fondre le beurre, hors du feu ajouter les raisins secs, les fruits confits hachés, 50 g de sucre (roux si possible), la cannelle, la muscade (ou du gingembre en poudre) et le zeste de citron. Laisser refroidir.", "Préchauffer le four à 200 °C. Découper dans la pâte feuilletée 6 disques d'environ 10 cm (la recette d'origine fait sa pâte feuilletée maison).", "Poser une cuillerée de garniture au centre de chaque disque, rabattre les bords et pincer pour fermer. Retourner les chaussons et les aplatir doucement au rouleau.", "Faire 3 petites entailles sur le dessus, badigeonner d'œuf battu et saupoudrer du reste de sucre.", "Cuire 15 à 20 min, jusqu'à ce qu'ils soient bien dorés. Laisser refroidir sur une grille."]
  },
  {
    id: "summer-pudding-fruits-rouges", nom: "Summer pudding (dôme de pain aux fruits rouges)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 520, portions: 2,
    source: "TheMealDB", idSource: "52889",
    ingredients: [
      { id: "fruits-rouges-surgeles", quantite: 425, unite: "g" },
      { id: "fraises", quantite: 150, unite: "g" },
      { id: "sucre", quantite: 90, unite: "g" },
      { id: "pain-de-mie", quantite: 4, unite: "tranche" },
      { id: "eau", quantite: 25, unite: "ml" }
    ],
    etapes: ["À préparer la veille. Chauffer doucement le sucre avec l'eau jusqu'à ce qu'il fonde, faire bouillir 1 min, puis ajouter les fruits rouges (mûres, groseilles, framboises ; pas les fraises). Cuire 3 min à feu doux : les fruits doivent rester entiers dans un jus rouge foncé.", "Égoutter les fruits au-dessus d'un bol pour garder le jus. Ajouter les fraises coupées en morceaux aux fruits.", "Tapisser un bol (environ 600 ml) de film alimentaire. Retirer la croûte du pain, tremper les tranches d'un côté dans le jus et en tapisser le bol, côté trempé contre la paroi, sans laisser de trou.", "Remplir de fruits, couvrir d'une tranche de pain trempée, puis d'une assiette avec un poids dessus. Laisser une nuit au réfrigérateur.", "Démouler sur un plat, napper du reste de jus et servir avec de la crème."]
  },
  {
    id: "jam-roly-poly", nom: "Jam roly-poly (roulé vapeur à la confiture)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52890",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "lait", quantite: 75, unite: "ml" },
      { id: "confiture", quantite: 50, unite: "g" },
      { id: "creme-anglaise", quantite: 200, unite: "ml", optionnel: true }
    ],
    etapes: ["Mettre un plat rempli aux deux tiers d'eau bouillante en bas du four et le préchauffer à 180 °C. Beurrer une grande feuille de papier cuisson posée sur une feuille d'aluminium.", "Sabler la farine et la levure avec le beurre froid (avec un peu de vanille si vous en avez), puis ajouter le lait et mélanger au couteau jusqu'à obtenir une pâte collante.", "Sur un plan fariné, étaler la pâte en un rectangle d'environ 1 cm d'épaisseur. Étaler la confiture (de framboises de préférence) en laissant 1 cm libre sur les bords, puis rouler.", "Envelopper le rouleau dans le papier et l'aluminium sans serrer (il va gonfler), fermer les bouts et poser sur la grille au-dessus du plat d'eau. Cuire 1 h.", "Laisser reposer 5 min, couper en tranches épaisses et servir avec de la crème anglaise chaude."]
  },
  {
    id: "fool-aux-mures-biscuits", nom: "Fool aux mûres (crème aux fruits rouges) et biscuits croquants", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52891",
    ingredients: [
      { id: "fruits-rouges-surgeles", quantite: 300, unite: "g" },
      { id: "creme-fraiche", quantite: 150, unite: "ml" },
      { id: "yaourt-grec", quantite: 50, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "sucre", quantite: 85, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "amandes", quantite: 15, unite: "g", optionnel: true },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "levure-chimique", quantite: 1, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g", optionnel: true }
    ],
    etapes: ["Biscuits : préchauffer le four à 200 °C. Griller les amandes (des noisettes à l'origine) 6 à 8 min, les laisser refroidir et les hacher.", "Battre le beurre avec 50 g de sucre jusqu'à ce que ce soit crémeux, ajouter les amandes, la moitié du zeste de citron, la farine et la levure. Former 8 petites boules, les aplatir sur une plaque et cuire 10 à 12 min. Laisser refroidir.", "Cuire les mûres (ou des fruits rouges) 5 min avec 25 g de sucre, puis les écraser et laisser refroidir. Ajouter le jus de citron.", "Fouetter la crème (liquide entière) avec le reste du sucre, incorporer le yaourt, puis mélanger grossièrement avec les fruits pour faire des marbrures.", "Servir en verres, décoré de menthe, avec les biscuits."]
  },
  {
    id: "treacle-tart", nom: "Treacle tart (tarte au sirop et au citron)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "52892",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "beurre", quantite: 70, unite: "g" },
      { id: "miel", quantite: 200, unite: "g" },
      { id: "pain-de-mie", quantite: 3, unite: "tranche", ou: { id: "chapelure", quantite: 75, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 25, unite: "ml" }
    ],
    etapes: ["Pâte : sabler la farine avec le beurre froid, ajouter environ 2 cuillères à soupe d'eau froide et former une boule. Mettre 20 min au frais.", "Préchauffer le four à 200 °C avec une plaque à l'intérieur. Garder un quart de la pâte pour le croisillon et foncer un petit moule à tarte (environ 16 cm) avec le reste.", "Chauffer doucement le miel (du golden syrup à l'origine) pour le rendre bien liquide. Hors du feu, ajouter le pain de mie mixé en miettes et le zeste de citron, puis la moitié de l'œuf battu.", "Verser sur le fond de tarte. Découper la pâte restante en bandes, les poser en croisillons et les dorer avec le reste d'œuf.", "Poser la tarte sur la plaque chaude, cuire 10 min puis baisser à 180 °C et cuire encore 25 à 30 min, jusqu'à ce que la garniture soit prise. Servir tiède."]
  },
  {
    id: "crumble-pommes-mures", nom: "Crumble pommes et mûres", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52893",
    ingredients: [
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "fruits-rouges-surgeles", quantite: 60, unite: "g", optionnel: true },
      { id: "farine", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 45, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 190 °C. Sabler du bout des doigts la farine, 30 g de sucre et 30 g de beurre jusqu'à obtenir des miettes, sans trop travailler.", "Étaler les miettes sur une plaque et cuire 15 min, jusqu'à ce qu'elles soient légèrement dorées.", "Pendant ce temps, éplucher les pommes et les couper en dés. Faire fondre le reste du beurre et du sucre (roux si possible) 3 min jusqu'à un caramel clair, ajouter les pommes et cuire 3 min.", "Ajouter les mûres (ou des fruits rouges) et la cannelle, cuire encore 3 min, puis couvrir hors du feu 2 à 3 min.", "Répartir les fruits dans 2 coupes et couvrir de crumble. Servir tiède, avec une boule de glace si vous voulez."]
  },
  {
    id: "gateau-battenberg", nom: "Gâteau Battenberg (damier rose et jaune en pâte d'amandes)", cuisine: "britannique",
    difficulte: "difficile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52894",
    ingredients: [
      { id: "beurre", quantite: 175, unite: "g" },
      { id: "sucre", quantite: 175, unite: "g" },
      { id: "farine", quantite: 140, unite: "g" },
      { id: "poudre-d-amandes", quantite: 50, unite: "g", ou: { id: "amandes", quantite: 50, unite: "g" } },
      { id: "levure-chimique", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "confiture", quantite: 100, unite: "g" },
      { id: "pate-d-amandes", quantite: 500, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Chemiser un moule carré de 20 cm et le séparer en deux avec une bande de papier cuisson pliée (ou d'aluminium).", "Battre ensemble le beurre mou, le sucre, la farine, la poudre d'amandes, la levure, les œufs et quelques gouttes de vanille ou d'extrait d'amande jusqu'à ce que ce soit lisse.", "Verser la moitié de la pâte d'un côté du moule. Colorer l'autre moitié avec quelques gouttes de colorant rose (si vous en avez) et la verser de l'autre côté. Cuire 25 à 30 min ; une lame doit ressortir sèche. Laisser refroidir.", "Égaliser les deux gâteaux, les couper chacun en 2 longs bâtonnets de même taille. Chauffer la confiture (d'abricots) et coller les bâtonnets en damier, rose et jaune en alternance.", "Étaler la pâte d'amandes en un rectangle assez grand pour envelopper le gâteau, la badigeonner de confiture, y rouler le gâteau et souder. Égaliser les bouts. Un gâteau entier : il en restera."]
  },
  {
    id: "full-english-breakfast", nom: "Full English breakfast (petit-déjeuner anglais complet)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52896",
    ingredients: [
      { id: "saucisse", quantite: 4, unite: "pièce" },
      { id: "bacon", quantite: 4, unite: "tranche", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "boudin-noir", quantite: 1, unite: "pièce", optionnel: true },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer une grande poêle (ou une plancha) à feu doux avec un peu d'huile. Cuire les saucisses doucement 15 à 20 min en les retournant ; les garder au chaud au four si la place manque.", "Après 10 min, monter à feu moyen. Faire quelques entailles dans le gras du bacon et le cuire 2 à 4 min de chaque côté.", "Cuire en même temps les champignons, les tomates coupées en deux (côté coupé en bas d'abord) et les tranches de boudin noir, 2 à 3 min de chaque côté.", "Chauffer les haricots égouttés dans une petite casserole avec la sauce tomate (à la place des baked beans), saler, poivrer.", "Faire griller le pain dans la poêle, puis cuire les œufs au plat. Servir tout de suite, tout ensemble dans l'assiette."]
  },
  {
    id: "carrot-cake-glacage-fromage-frais", nom: "Carrot cake (gâteau aux carottes, glaçage au fromage frais)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52897",
    ingredients: [
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "sucre", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 110, unite: "ml" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "noix", quantite: 40, unite: "g", optionnel: true },
      { id: "fromage-frais", quantite: 50, unite: "g", ou: { id: "yaourt-grec", quantite: 50, unite: "g" } },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C, beurrer et chemiser un petit moule (à cake ou de 16 cm).", "Mélanger la farine, la levure, 110 g de sucre, l'œuf, l'huile, le sel et la cannelle jusqu'à ce que ce soit homogène.", "Ajouter les carottes râpées finement et les noix concassées. Verser dans le moule et cuire 50 min à 1 h ; une lame doit ressortir sèche.", "Laisser tiédir 10 min, démouler et laisser refroidir complètement sur une grille.", "Glaçage : battre le fromage frais (type Philadelphia), le beurre mou et le reste du sucre jusqu'à ce que ce soit crémeux, et l'étaler sur le gâteau froid."]
  },
  {
    id: "chelsea-buns", nom: "Chelsea buns (brioches roulées aux raisins et à la cannelle)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "52898",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "lait", quantite: 165, unite: "ml" },
      { id: "beurre", quantite: 35, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 55, unite: "g" },
      { id: "cannelle", quantite: 5, unite: "g" },
      { id: "raisins-secs", quantite: 75, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mélanger la farine et le sel, faire un puits et y mettre la levure. Tiédir 150 ml de lait avec 20 g de beurre jusqu'à ce qu'il fonde, verser sur la farine avec l'œuf et mélanger en pâte souple.", "Pétrir 5 min sur un plan fariné jusqu'à ce que la pâte soit lisse et ne colle plus. La mettre dans un bol huilé, couvrir et laisser lever 1 h dans un endroit tiède : elle doit doubler.", "Étaler la pâte en rectangle, la badigeonner du reste du beurre fondu, puis parsemer de 40 g de sucre (roux si possible), de cannelle et de raisins secs.", "Rouler sur la longueur, couper en 6 tranches et les serrer côte à côte, côté coupé dessus, dans un moule beurré. Laisser lever encore 30 min. Préchauffer le four à 190 °C.", "Cuire 20 à 25 min. Faire chauffer le reste du lait avec le reste du sucre et en badigeonner les brioches à la sortie du four."]
  },
  {
    id: "dundee-cake", nom: "Dundee cake (cake écossais aux fruits secs et aux amandes)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 105, portions: 2,
    source: "TheMealDB", idSource: "52899",
    ingredients: [
      { id: "beurre", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 95, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 115, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "poudre-d-amandes", quantite: 50, unite: "g" },
      { id: "raisins-secs", quantite: 250, unite: "g" },
      { id: "fruits-confits", quantite: 50, unite: "g", optionnel: true },
      { id: "amandes", quantite: 50, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "confiture", quantite: 25, unite: "g" },
      { id: "lait", quantite: 25, unite: "ml" }
    ],
    etapes: ["Ébouillanter les amandes entières 5 min, les égoutter et retirer la peau. Préchauffer le four à 160 °C et chemiser un petit moule rond (environ 16 cm).", "Battre le beurre mou avec 90 g de sucre (roux si possible) jusqu'à ce que ce soit léger, puis ajouter le zeste d'orange et la confiture (d'abricots).", "Ajouter les œufs un à un en battant bien, puis la farine mélangée à la levure et la poudre d'amandes. Incorporer le lait, les raisins secs et les fruits confits (cerises confites à l'origine).", "Verser dans le moule, lisser et disposer les amandes en cercles sur le dessus, sans appuyer.", "Cuire 1 h à 1 h 15 ; une lame doit ressortir sèche. Badigeonner d'un peu de lait sucré avec le reste du sucre et laisser refroidir dans le moule. Un cake entier : il en restera pour plusieurs goûters."]
  },
  {
    id: "madeira-cake-citron", nom: "Madeira cake (gâteau moelleux au citron)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52900",
    ingredients: [
      { id: "beurre", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 90, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "lait", quantite: 20, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "fruits-confits", quantite: 15, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 180 °C. Beurrer et chemiser un petit moule (rond de 15 cm ou à cake).", "Battre le beurre mou et le sucre jusqu'à ce que ce soit pâle et mousseux. Ajouter les œufs un à un, avec une cuillerée de farine avec le dernier pour éviter que ça tranche.", "Incorporer délicatement le reste de farine mélangé à la levure, puis assez de lait pour que la pâte tombe lentement de la cuillère. Ajouter le zeste de citron.", "Verser dans le moule, lisser, poser quelques écorces confites sur le dessus et cuire 30 à 40 min, jusqu'à ce que ce soit doré et qu'une lame ressorte sèche.", "Laisser tiédir 10 min dans le moule puis refroidir sur une grille."]
  },
  {
    id: "rock-cakes", nom: "Rock cakes (petits gâteaux rustiques aux raisins secs)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52901",
    ingredients: [
      { id: "farine", quantite: 115, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "raisins-secs", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 8, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C et couvrir une plaque de papier cuisson.", "Mélanger la farine, le sucre et la levure, puis sabler avec le beurre froid en dés jusqu'à obtenir des miettes. Ajouter les raisins secs.", "Battre l'œuf avec le lait (et un peu de vanille si vous en avez), verser sur le mélange et remuer juste assez pour obtenir une pâte épaisse et grumeleuse.", "Déposer 6 tas de la taille d'une balle de golf sur la plaque, bien espacés : ils s'étalent.", "Cuire 15 à 20 min, jusqu'à ce qu'ils soient dorés. Laisser refroidir sur une grille."]
  },
  {
    id: "parkin-pain-d-epices-avoine", nom: "Parkin (pain d'épices du Yorkshire à l'avoine)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52902",
    ingredients: [
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "miel", quantite: 100, unite: "g" },
      { id: "melasse", quantite: 45, unite: "g", optionnel: true },
      { id: "sucre", quantite: 45, unite: "g" },
      { id: "flocons-d-avoine", quantite: 50, unite: "g" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 30, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 160 °C, beurrer et chemiser un petit moule carré (environ 18 cm).", "Battre l'œuf avec le lait à la fourchette.", "Faire fondre doucement le miel (du golden syrup à l'origine), la mélasse, le sucre (roux si possible) et le beurre jusqu'à ce que le sucre soit dissous. Retirer du feu.", "Mélanger les flocons d'avoine (mixés grossièrement), la farine, la levure et le gingembre râpé (ou 1 cuillère à café de gingembre en poudre), les verser dans le sirop, puis ajouter l'œuf battu.", "Verser dans le moule et cuire 40 à 50 min, jusqu'à ce que le dessus soit ferme. Laisser refroidir, puis emballer : il devient plus moelleux et collant après 2 ou 3 jours."]
  },
  {
    id: "saumon-four-fenouil-tomates-cerises", nom: "Saumon au four, fenouil et tomates cerises", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52959",
    ingredients: [
      { id: "saumon", quantite: 350, unite: "g" },
      { id: "fenouil", quantite: 2, unite: "pièce" },
      { id: "tomates-cerises", quantite: 175, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "olives-noires", quantite: 30, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Garder les plumets verts du fenouil, couper chaque bulbe en 6 quartiers et les cuire 10 min à l'eau bouillante salée. Bien égoutter.", "Hacher les plumets avec le persil et le zeste du citron.", "Étaler le fenouil dans un plat à four avec les tomates cerises, arroser d'huile et cuire 10 min.", "Ajouter les pavés de saumon au milieu des légumes, arroser de jus de citron et cuire encore 15 min, jusqu'à ce que le poisson soit juste cuit.", "Parsemer du mélange d'herbes et servir avec quelques olives noires."]
  },
  {
    id: "salade-saumon-avocat-concombre", nom: "Salade tiède de saumon, avocat et concombre", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52960",
    ingredients: [
      { id: "saumon", quantite: 200, unite: "g" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "epinards", quantite: 150, unite: "g", ou: { id: "salade-verte", quantite: 1, unite: "pièce" } },
      { id: "menthe", quantite: 5, unite: "g", optionnel: true },
      { id: "citron-vert", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "miel", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Saler, poivrer les pavés de saumon et les frotter d'un peu d'huile.", "Sauce : mélanger le zeste et le jus du citron vert, le miel, la menthe hachée et le reste d'huile.", "Couper l'avocat en tranches et le concombre en demi-rondelles. Répartir les jeunes pousses d'épinards, l'avocat et le concombre dans 2 assiettes, arroser de la moitié de la sauce.", "Cuire le saumon 3 à 4 min de chaque côté dans une poêle antiadhésive chaude : croustillant dehors, moelleux dedans.", "Poser le saumon sur la salade, arroser du reste de sauce et servir tiède."]
  },
  {
    id: "carres-croustillants-chocolat-caramel", nom: "Carrés croustillants chocolat-caramel au riz soufflé", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52966",
    ingredients: [
      { id: "barres-chocolatees", quantite: 3, unite: "pièce" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "riz-souffle", quantite: 60, unite: "g" },
      { id: "chocolat-noir", quantite: 75, unite: "g" }
    ],
    etapes: ["Chemiser de papier cuisson un petit moule carré (environ 15 cm).", "Faire fondre au bain-marie les barres chocolatées au caramel (type Mars) coupées en morceaux avec le beurre, en fouettant jusqu'à ce que ce soit lisse.", "Verser sur le riz soufflé (type Rice Krispies) et bien mélanger, puis tasser dans le moule.", "Faire fondre le chocolat (au lait de préférence) et l'étaler sur le dessus.", "Laisser prendre au frais environ 1 h, puis couper en carrés."]
  },
  {
    id: "christmas-pudding", nom: "Christmas pudding (pudding de Noël aux fruits secs)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 270, portions: 2,
    source: "TheMealDB", idSource: "52988",
    ingredients: [
      { id: "raisins-secs", quantite: 250, unite: "g" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "fruits-confits", quantite: 50, unite: "g" },
      { id: "amandes", quantite: 15, unite: "g" },
      { id: "farine", quantite: 35, unite: "g" },
      { id: "chapelure", quantite: 25, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "noix-de-muscade", quantite: 3, unite: "g" }
    ],
    etapes: ["Hacher grossièrement les amandes. Éplucher la pomme, l'épépiner et la hacher. Hacher finement les fruits confits (écorces confites à l'origine).", "Dans un saladier, mélanger les amandes, la pomme, les fruits confits, la muscade râpée, les raisins secs, la farine, la chapelure, le sucre (roux si possible), l'œuf battu et 1 cuillère à soupe de cognac ou de rhum si vous en avez.", "Râper le beurre froid au-dessus du saladier et remuer 3 à 4 min.", "Tasser dans un bol beurré d'environ 600 ml, couvrir d'un disque de papier cuisson puis d'aluminium bien serré avec une ficelle.", "Cuire 4 h à la vapeur (bol posé dans une grande casserole d'eau frémissante à mi-hauteur, couvercle fermé), en rajoutant de l'eau bouillante régulièrement. Se garde au frais et se réchauffe 1 h à la vapeur le jour de Noël."]
  },
  {
    id: "christmas-cake", nom: "Christmas cake (gâteau de Noël aux fruits secs)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 135, portions: 2,
    source: "TheMealDB", idSource: "52990",
    ingredients: [
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 25, unite: "g", ou: { id: "amandes", quantite: 25, unite: "g" } },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "fruits-confits", quantite: 85, unite: "g" },
      { id: "raisins-secs", quantite: 250, unite: "g" },
      { id: "noix", quantite: 50, unite: "g", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "levure-chimique", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 150 °C. Chemiser le fond et les bords d'un moule rond d'environ 15 cm.", "Battre le beurre et le sucre (roux si possible) 1 à 2 min jusqu'à ce que ce soit très crémeux. Ajouter en alternant la farine et les œufs battus, un quart à la fois, puis la poudre d'amandes.", "Ajouter le jus de l'orange (à la place du xérès), les fruits confits, les raisins secs, les noix (pécan à l'origine) hachées, le zeste de citron, la cannelle, la muscade et un peu de vanille. Mélanger, puis ajouter la levure.", "Verser dans le moule, lisser en creusant légèrement le centre, et cuire environ 1 h 45 ; une lame doit ressortir sèche.", "Laisser refroidir dans le moule. Il se garde plusieurs semaines bien emballé : un gâteau entier, pour toutes les fêtes."]
  },
  {
    id: "mince-pies-maison", nom: "Mince pies (tartelettes de Noël aux fruits secs épicés)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52991",
    ingredients: [
      { id: "farine", quantite: 175, unite: "g" },
      { id: "beurre", quantite: 130, unite: "g" },
      { id: "sucre", quantite: 65, unite: "g" },
      { id: "raisins-secs", quantite: 80, unite: "g" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "fruits-confits", quantite: 20, unite: "g", optionnel: true },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Garniture (à la place du « mincemeat » tout prêt) : mélanger la pomme râpée, les raisins secs, les fruits confits hachés, 15 g de sucre, la cannelle et 15 g de beurre fondu.", "Pâte : sabler la farine avec 115 g de beurre froid, ajouter 50 g de sucre et une pincée de sel, puis pétrir brièvement en boule, sans liquide.", "Préchauffer le four à 200 °C. Foncer 9 empreintes d'un moule à muffins avec des boules de pâte de la taille d'une noix pressées au fond et sur les bords.", "Garnir de fruits, couvrir d'un petit disque de pâte aplati entre les mains et souder les bords. Dorer à l'œuf battu.", "Cuire 20 min, jusqu'à ce que ce soit doré. Laisser tiédir, démouler et saupoudrer de sucre glace si vous en avez."]
  },
  {
    id: "tourte-fraises-rhubarbe", nom: "Tourte fraises-rhubarbe", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53005",
    ingredients: [
      { id: "farine", quantite: 175, unite: "g" },
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 95, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "rhubarbe", quantite: 225, unite: "g", ou: { id: "pomme", quantite: 2, unite: "pièce" } },
      { id: "fraises", quantite: 225, unite: "g" },
      { id: "fecule", quantite: 12, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mélanger la farine, le sel et 10 g de sucre, sabler avec 115 g de beurre froid, puis ajouter l'eau froide petit à petit jusqu'à ce que la pâte se tienne. Faire 2 disques et les mettre 1 h au frais.", "Préchauffer le four à 200 °C. Étaler un disque et en garnir un petit moule à tarte (environ 18 cm).", "Mélanger la rhubarbe et les fraises en morceaux avec 75 g de sucre, la fécule, la cannelle et une cuillère à café de jus de citron. Verser dans le moule et parsemer du reste de beurre en petits morceaux.", "Couvrir avec le second disque (ou des bandes en croisillon), souder les bords, badigeonner de lait et saupoudrer du reste de sucre.", "Cuire 15 min à 200 °C, puis 35 à 40 min à 180 °C, jusqu'à ce que la pâte soit dorée et que le jus bouillonne. Laisser refroidir au moins 1 h avant de couper."]
  },
  {
    id: "corned-beef-hash", nom: "Corned beef hash (poêlée de corned-beef et pommes de terre)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53096",
    ingredients: [
      { id: "corned-beef", quantite: 200, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre coupées en petits dés 8 à 10 min à l'eau, puis les égoutter.", "Faire fondre le beurre dans une grande poêle (en fonte si possible) et y cuire l'oignon haché quelques minutes, jusqu'à ce qu'il soit translucide.", "Ajouter le corned-beef émietté et les pommes de terre, étaler et tasser avec une spatule. Monter le feu.", "Laisser dorer sans remuer, puis retourner par morceaux pour dorer l'autre côté. Recommencer jusqu'à ce que ce soit bien croustillant.", "Saler, poivrer, parsemer de persil haché et servir (avec un œuf au plat si vous voulez)."]
  },
  {
    id: "yorkshire-puddings", nom: "Yorkshire puddings (petits soufflés de pâte pour accompagner un rôti)", cuisine: "britannique",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53097",
    ingredients: [
      { id: "farine", quantite: 70, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 230 °C. Mettre un peu d'huile dans 6 empreintes d'un moule à muffins et le faire chauffer dans le four.", "Battre la farine avec les œufs jusqu'à ce que ce soit lisse, puis ajouter le lait petit à petit en battant jusqu'à ce qu'il n'y ait plus aucun grumeau. Saler, poivrer.", "Sortir le moule brûlant et répartir rapidement la pâte dans les empreintes.", "Cuire 20 à 25 min sans ouvrir le four, jusqu'à ce que les puddings soient bien gonflés et dorés. Servir tout de suite, avec un rôti et de la sauce."]
  },
  {
    id: "cumberland-pie", nom: "Cumberland pie (bœuf mijoté sous les pommes de terre gratinées)", cuisine: "britannique",
    difficulte: "moyen", tempsMinutes: 240, portions: 2,
    source: "TheMealDB", idSource: "53098",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 400, unite: "g" },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "sauce-tomate", quantite: 30, unite: "g" },
      { id: "sauce-worcestershire", quantite: 15, unite: "ml", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "cheddar", quantite: 15, unite: "g", ou: { id: "fromage-rape", quantite: 15, unite: "g" } },
      { id: "parmesan", quantite: 15, unite: "g", optionnel: true },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Dans une cocotte, faire suer 10 min le céleri, l'oignon et la carotte hachés avec le laurier, un peu de thym, l'huile et 10 g de beurre.", "Ajouter la farine, puis la sauce tomate, la sauce Worcestershire et le bouillon cube émietté. Verser peu à peu l'eau chaude, ajouter le bœuf en gros cubes et porter à frémissement.", "Couvrir et cuire 2 h 30 au four, puis découvrir et cuire encore 30 min, jusqu'à ce que la viande soit très tendre et la sauce épaissie.", "Pendant ce temps, cuire les pommes de terre à l'eau aux trois quarts, puis les couper en rondelles de 1 cm.", "Verser la viande dans un plat, couvrir de pommes de terre, arroser du reste de beurre fondu, parsemer de cheddar et de parmesan râpés et de thym. Monter le four à 200 °C et gratiner 20 à 30 min."]
  }
]);

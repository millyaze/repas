// ============================================================
// RECETTES : cuisine polonaise (26 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// Gâteaux et pains : quantités pour un gâteau ou un pain entier.
// ============================================================
ajouterRecettes([
  {
    id: "paszteciki-roule-au-boeuf", nom: "Paszteciki (pâte roulée farcie au bœuf)", cuisine: "polonaise", type: "entree",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53017",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "beurre", quantite: 120, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "rutabaga", quantite: 70, unite: "g", ou: { id: "navet", quantite: 1, unite: "pièce" } },
      { id: "poitrine-de-boeuf", quantite: 230, unite: "g", ou: { id: "boeuf-hache", quantite: 230, unite: "g" } },
      { id: "sel", quantite: 6, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mélanger la farine et 1 pincée de sel dans un saladier. Ajouter 1 jaune d'œuf (écrasé au tamis s'il est cuit dur, sinon cru) et 1 œuf entier, bien mélanger, puis incorporer 70 g de beurre mou, une cuillerée à la fois.", "Pétrir sur le plan de travail fariné jusqu'à ce que la pâte soit lisse et souple. L'emballer et la mettre au frais au moins 30 min.", "Farce : faire fondre 20 g de beurre dans une poêle et faire revenir l'oignon et le rutabaga (ou le navet) hachés 5 min, jusqu'à ce que l'oignon soit tendre.", "Hacher très finement l'oignon, le rutabaga et la viande ensemble (2 passages au hachoir si on en a ; avec du bœuf déjà haché, il suffit de hacher les légumes). Faire fondre le reste du beurre et y cuire ce mélange à feu doux, en remuant de temps en temps, jusqu'à ce que tout le liquide ait disparu et que la farce se tienne.", "Laisser tiédir, puis mélanger avec 1 œuf battu, le sel et le poivre. Préchauffer le four à 180 °C.", "Étaler la pâte en rectangle d'environ 33 × 20 cm (3 mm d'épaisseur). Déposer la farce au centre, dans la longueur, en laissant 2 cm libres à chaque bout.", "Mouiller les grands côtés à l'eau froide, rabattre un côté sur la farce puis l'autre par-dessus. Mouiller les petits côtés et les replier pour bien fermer.", "Poser le rouleau sur une plaque, la soudure en dessous, et le badigeonner avec le dernier œuf battu. Cuire 30 min, jusqu'à ce qu'il soit bien doré.", "Couper en biais en tronçons de 4 cm. Servir en entrée ou avec une soupe (un bouillon de poulet par exemple)."]
  },
  {
    id: "bigos-chou-et-choucroute", nom: "Bigos (ragoût du chasseur au chou et à la choucroute)", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 200, portions: 2,
    source: "TheMealDB", idSource: "53018",
    ingredients: [
      { id: "bacon", quantite: 1, unite: "tranche", ou: { id: "lardons", quantite: 30, unite: "g" } },
      { id: "kielbasa", quantite: 150, unite: "g", ou: { id: "saucisse", quantite: 2, unite: "pièce" } },
      { id: "epaule-de-porc", quantite: 150, unite: "g", ou: { id: "poitrine-de-porc", quantite: 150, unite: "g" } },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "chou", quantite: 300, unite: "g" },
      { id: "choucroute", quantite: 250, unite: "g" },
      { id: "vin-rouge", quantite: 30, unite: "ml" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "basilic", quantite: 2, unite: "g", optionnel: true },
      { id: "marjolaine", quantite: 1, unite: "g", optionnel: true, ou: { id: "origan", quantite: 1, unite: "g" } },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "carvi", quantite: 1, unite: "g", optionnel: true, ou: { id: "cumin", quantite: 1, unite: "g" } },
      { id: "sauce-piquante", quantite: 1, unite: "ml", optionnel: true, ou: { id: "sauce-sriracha", quantite: 1, unite: "ml" } },
      { id: "sauce-worcestershire", quantite: 2, unite: "ml", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "concentre-de-tomate", quantite: 10, unite: "g", ou: { id: "sauce-tomate", quantite: 30, unite: "g" } },
      { id: "tomates-concassees", quantite: 60, unite: "g", ou: { id: "tomate", quantite: 1, unite: "pièce" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C. Couper le bacon en lanières, la kielbasa (saucisse fumée polonaise) en rondelles et le porc en cubes.", "Dans une grande cocotte allant au four, faire revenir le bacon et la kielbasa à feu moyen jusqu'à ce que le bacon rende son gras et que la saucisse dore. Les retirer avec une écumoire.", "Fariner légèrement les cubes de porc et les faire dorer dans le gras, à feu vif. Les retirer aussi.", "Baisser à feu moyen. Mettre l'ail et l'oignon hachés, la carotte en dés, les champignons émincés, le chou émincé et la choucroute égouttée. Cuire 10 min en remuant, sans laisser colorer, jusqu'à ce que la carotte soit tendre.", "Verser le vin rouge et gratter le fond. Ajouter le laurier, le basilic, la marjolaine, le paprika, le carvi, le sel et le poivre (et une pincée de piment de Cayenne si on aime), et cuire 1 min.", "Ajouter la sauce piquante, la sauce Worcestershire, l'eau avec le bouillon cube émietté, le concentré de tomate et les tomates concassées. Porter juste à ébullition, puis remettre toute la viande.", "Couvrir et cuire au four 2 h 30 à 3 h, jusqu'à ce que la viande soit très tendre. Le bigos est encore meilleur réchauffé le lendemain."]
  },
  {
    id: "bigos-aux-pruneaux", nom: "Bigos aux pruneaux et au vin rouge", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 160, portions: 2,
    source: "TheMealDB", idSource: "53300",
    ingredients: [
      { id: "chou", quantite: 400, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "champignons", quantite: 60, unite: "g" },
      { id: "saindoux", quantite: 15, unite: "g", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "saucisse", quantite: 2, unite: "pièce" },
      { id: "bacon", quantite: 4, unite: "tranche", ou: { id: "lardons", quantite: 80, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "boeuf-a-braiser", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "pruneaux", quantite: 60, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "clous-de-girofle", quantite: 1, unite: "pièce", optionnel: true },
      { id: "baies-de-genievre", quantite: 2, unite: "pièce", optionnel: true },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "vin-rouge", quantite: 30, unite: "ml" },
      { id: "concentre-de-tomate", quantite: 10, unite: "g", ou: { id: "sauce-tomate", quantite: 30, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer le chou et le mettre dans une cocotte avec l'eau et le bouillon cube émietté. Cuire à feu doux, couvert, environ 50 min, jusqu'à ce qu'il soit tendre.", "Pendant ce temps, couper les champignons en lamelles (s'ils sont séchés, les faire tremper avant dans un bol d'eau chaude et garder cette eau). Couper la saucisse (allemande de préférence) en rondelles, le bacon en lanières et le bœuf en cubes.", "Faire chauffer le saindoux (ou l'huile) dans une poêle et y faire dorer la saucisse, le bacon et le bœuf, puis les retirer en laissant le gras. Y faire dorer l'oignon haché 5 à 8 min.", "Ajouter dans la cocotte de chou les champignons (et leur eau de trempage), toutes les viandes, l'oignon et les pruneaux. Couvrir et cuire 20 min.", "Ajouter le laurier, le clou de girofle, les baies de genièvre écrasées, le piment de la Jamaïque, une dizaine de grains de poivre, le vin rouge et le concentré de tomate. Porter à frémissement, couvrir et cuire 1 h à feu doux.", "Saler, poivrer. Le bigos se garde 2 jours au frais et il est encore meilleur réchauffé : bien le faire chauffer à cœur avant de servir."]
  },
  {
    id: "pierogi-pommes-de-terre-choucroute", nom: "Pierogi (raviolis polonais pommes de terre et choucroute)", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53019",
    ingredients: [
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "choucroute", quantite: 150, unite: "g" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-aigre", quantite: 120, unite: "ml", ou: { id: "creme-fraiche", quantite: 120, unite: "ml" } },
      { id: "farine", quantite: 190, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre épluchées 20 min à l'eau salée, puis les écraser en purée.", "Hacher l'oignon. Faire fondre la moitié du beurre dans une poêle et y cuire la moitié de l'oignon 5 min, jusqu'à ce qu'il soit translucide. Ajouter la choucroute bien égouttée et cuire encore 5 min. Saler, poivrer et laisser refroidir sur une assiette.", "Faire fondre le reste du beurre et y cuire le reste de l'oignon 5 min. Le mélanger à la purée, saler et poivrer.", "Pâte : battre les œufs avec la crème (aigre si possible) jusqu'à ce que ce soit lisse. Mélanger la farine, 1 pincée de sel et la levure, puis les ajouter et mélanger jusqu'à former une pâte. La pétrir sur le plan de travail fariné jusqu'à ce qu'elle soit ferme et lisse.", "Partager la pâte en deux et étaler une moitié sur 3 mm d'épaisseur. Découper des disques de 8 cm avec un verre.", "Mettre une petite cuillerée de purée au centre de chaque disque, mouiller le bord, plier en demi-lune et souder en appuyant avec une fourchette. Faire de même avec l'autre moitié de pâte et la choucroute.", "Plonger les pierogi dans une grande casserole d'eau salée bouillante et les cuire 3 à 5 min : ils sont prêts quand ils remontent à la surface. Les retirer avec une écumoire et servir (avec un peu de crème ou d'oignon doré au beurre)."]
  },
  {
    id: "rosol-bouillon-de-poulet", nom: "Rosół (bouillon de poulet polonais aux légumes)", cuisine: "polonaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53020",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 150, unite: "g", optionnel: true },
      { id: "clous-de-girofle", quantite: 1, unite: "pièce", optionnel: true },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true },
      { id: "pates", quantite: 80, unite: "g", optionnel: true },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "sel", quantite: 8, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre les cuisses de poulet dans une grande marmite, couvrir avec l'eau et porter à ébullition. Laisser frémir 2 h à 2 h 30, en retirant régulièrement l'écume pour avoir un bouillon clair.", "Pendant la dernière heure, ajouter l'oignon coupé en deux, les carottes, le poireau, le céleri, le chou, le clou de girofle, le piment de la Jamaïque, le laurier, le persil, l'aneth, le sel et le poivre (en grains si possible).", "Filtrer le bouillon. Désosser le poulet en gros morceaux et couper les carottes en rondelles, puis les remettre dans le bouillon.", "Si on en veut, cuire les pâtes (des vermicelles de préférence) à part, selon le paquet. Les mettre dans les bols et verser le bouillon bien chaud par-dessus."]
  },
  {
    id: "golabki-chou-farci", nom: "Gołąbki (feuilles de chou farcies au bœuf et au riz, sauce tomate)", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53021",
    ingredients: [
      { id: "chou", quantite: 600, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "boeuf-hache", quantite: 150, unite: "g" },
      { id: "porc-hache", quantite: 80, unite: "g" },
      { id: "riz", quantite: 90, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-tomate", quantite: 300, unite: "g" },
      { id: "ketchup", quantite: 15, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter une grande casserole d'eau salée à ébullition. Y plonger le chou entier (un petit chou blanc), couvrir et cuire 3 min, juste assez pour que les feuilles se détachent. Laisser tiédir 10 min.", "Détacher 6 belles feuilles en retirant la grosse côte dure du centre. Hacher le reste du chou et l'étaler au fond d'un plat allant au four.", "Faire fondre le beurre dans une poêle et y cuire l'oignon haché 5 à 10 min, jusqu'à ce qu'il soit tendre. Laisser refroidir.", "Mélanger l'oignon, le bœuf, le porc (ou seulement du bœuf), le riz cru, l'ail haché, le sel et le poivre. Préchauffer le four à 175 °C.", "Mettre environ 2 cuillerées à soupe de farce sur chaque feuille, puis rouler en rabattant les côtés pour bien enfermer la viande.", "Poser les rouleaux sur le chou haché, saler et poivrer. Mélanger la sauce tomate avec le ketchup et un petit verre d'eau, puis verser sur les rouleaux.", "Couvrir de papier aluminium et cuire au four environ 1 h, jusqu'à ce que le chou soit tendre et la viande cuite."]
  },
  {
    id: "nalesniki-crepes-polonaises", nom: "Naleśniki (crêpes polonaises)", cuisine: "polonaise", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53022",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 240, unite: "ml" },
      { id: "eau", quantite: 180, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "confiture", quantite: 100, unite: "g", optionnel: true, ou: { id: "fromage-frais", quantite: 150, unite: "g" } },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre la farine, les œufs, le lait, l'eau, le sucre et le sel dans un saladier et fouetter (au batteur si possible) jusqu'à obtenir une pâte bien lisse, sans grumeaux.", "Faire fondre le beurre et l'ajouter à la pâte (on peut aussi en garder un peu pour graisser la poêle entre chaque crêpe).", "Faire chauffer une poêle antiadhésive à feu moyen, verser une petite louche de pâte et tourner la poêle pour l'étaler.", "Quand la crêpe se décolle des bords et que le dessus n'est plus liquide, la retourner et la cuire quelques secondes de l'autre côté. Continuer jusqu'à la fin de la pâte.", "Servir chaud, garni au choix : confiture, fromage frais sucré, ou ce qu'on aime."]
  },
  {
    id: "sledz-w-oleju-harengs-a-l-huile", nom: "Śledź w oleju (harengs marinés à l'huile)", cuisine: "polonaise", type: "entree",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53023",
    ingredients: [
      { id: "filets-de-hareng", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 120, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 120, unite: "ml" } },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", ou: { id: "clous-de-girofle", quantite: 1, unite: "pièce" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true, ou: { id: "persil", quantite: 5, unite: "g" } },
      { id: "poivre", quantite: 2, unite: "g" }
    ],
    etapes: ["À préparer 2 à 3 jours à l'avance. Si les harengs sont salés, les faire tremper au moins 1 h dans de l'eau froide (recommencer en changeant l'eau s'ils sont encore très salés). Des filets doux au naturel n'ont pas besoin de trempage.", "Bien égoutter et sécher les harengs, puis les couper en bouchées.", "Les mettre dans un bocal et les couvrir d'huile. Ajouter le piment de la Jamaïque en grains (ou un clou de girofle), le poivre en grains et le laurier. Fermer le bocal.", "Laisser 2 à 3 jours au réfrigérateur avant de manger (se garde 2 semaines au frais).", "Servir avec l'oignon haché ou en rondelles, du citron et de l'aneth ou du persil. Bon avec des pommes de terre à l'eau ou du pain de seigle."]
  },
  {
    id: "rogaliki-croissants-a-la-confiture", nom: "Rogaliki (petits croissants sablés à la confiture)", cuisine: "polonaise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53024",
    ingredients: [
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fromage-frais", quantite: 75, unite: "g", ou: { id: "ricotta", quantite: 75, unite: "g" } },
      { id: "levure-chimique", quantite: 2, unite: "g" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "confiture", quantite: 80, unite: "g" },
      { id: "sucre-glace", quantite: 15, unite: "g", optionnel: true }
    ],
    etapes: ["Pour une vingtaine de petits croissants. Mélanger au batteur le beurre mou, le jaune d'œuf, le fromage frais (type Philadelphia) et la levure.", "Ajouter la farine petit à petit. Quand le batteur n'arrive plus à mélanger et que la pâte ressemble à des copeaux, finir à la main en pétrissant pour former une boule.", "Former un boudin, l'emballer et le mettre 15 min au congélateur. Préchauffer le four à 190 °C.", "Couper la pâte en deux, étaler chaque moitié finement et découper des triangles d'environ 8 cm de côté.", "Mettre une petite cuillerée de confiture près de la base de chaque triangle, puis rouler vers la pointe en forme de croissant.", "Poser sur une plaque beurrée et cuire 10 à 12 min, jusqu'à ce qu'ils soient dorés. Laisser refroidir et saupoudrer de sucre glace."]
  },
  {
    id: "piernik-pain-d-epices-polonais", nom: "Piernik (pain d'épices polonais fourré, glaçage au chocolat)", cuisine: "polonaise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53292",
    ingredients: [
      { id: "beurre", quantite: 140, unite: "g" },
      { id: "miel", quantite: 345, unite: "g" },
      { id: "cassonade", quantite: 100, unite: "g", ou: { id: "sucre", quantite: 100, unite: "g" } },
      { id: "farine", quantite: 375, unite: "g" },
      { id: "levure-chimique", quantite: 15, unite: "g" },
      { id: "gingembre-en-poudre", quantite: 6, unite: "g", ou: { id: "gingembre", quantite: 15, unite: "g" } },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "clous-de-girofle", quantite: 3, unite: "pièce", optionnel: true },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "confiture", quantite: 200, unite: "g" },
      { id: "creme-fraiche", quantite: 225, unite: "ml" },
      { id: "chocolat-noir", quantite: 140, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Un gâteau entier, pour plusieurs goûters. Préchauffer le four à 160 °C. Beurrer un moule rond et haut de 20 cm et le chemiser de papier cuisson.", "Mettre 300 g de miel, la cassonade et le beurre dans une casserole et faire fondre à feu moyen. Retirer du feu et laisser tiédir.", "Dans un grand saladier, mélanger la farine, la levure, le gingembre en poudre (ou du gingembre frais râpé très finement), la cannelle, les clous de girofle moulus, la muscade et le poivre.", "Quand le mélange au miel a tiédi, y fouetter les œufs, puis le verser sur la farine et mélanger juste ce qu'il faut pour une pâte lisse (trop mélanger rend le gâteau sec).", "Verser dans le moule et cuire 50 à 55 min : une pique plantée au centre doit ressortir sèche. Laisser 20 min dans le moule, puis démouler et laisser refroidir complètement sur une grille.", "Couper le gâteau en 3 disques avec un grand couteau à pain. Tartiner les 2 disques du bas de confiture (de prunes de préférence) et reformer le gâteau.", "Glaçage : faire chauffer doucement la crème, le chocolat en morceaux et le reste du miel jusqu'à ce que ce soit lisse et coulant. Verser sur le gâteau posé sur une grille pour bien le recouvrir, puis laisser prendre.", "Se garde 3 jours au frais une fois glacé ; le sortir un peu avant de le manger."]
  },
  {
    id: "gateau-pistaches-framboises", nom: "Gâteau aux pistaches, crème mascarpone et framboises", cuisine: "polonaise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53293",
    ingredients: [
      { id: "beurre", quantite: 250, unite: "g" },
      { id: "pistaches", quantite: 200, unite: "g", ou: { id: "amandes", quantite: 200, unite: "g" } },
      { id: "pate-de-pistache", quantite: 100, unite: "g", ou: { id: "pistaches", quantite: 50, unite: "g" } },
      { id: "extrait-de-vanille", quantite: 5, unite: "ml", optionnel: true },
      { id: "farine", quantite: 80, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "sucre", quantite: 225, unite: "g" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "sucre-glace", quantite: 100, unite: "g", ou: { id: "sucre", quantite: 100, unite: "g" } },
      { id: "mascarpone", quantite: 250, unite: "g", ou: { id: "ricotta", quantite: 250, unite: "g" } },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "framboises", quantite: 400, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Un gâteau entier, pour plusieurs desserts. Préchauffer le four à 180 °C. Beurrer un moule à charnière de 23 cm et le chemiser de papier cuisson.", "Mixer finement 150 g de pistaches (non salées, décortiquées). Les mélanger avec la farine, la levure et le sel.", "Dans un autre saladier, battre le beurre mou et le sucre environ 5 min, jusqu'à ce que ce soit pâle et mousseux. Ajouter les œufs un par un en battant 1 min après chacun puis la vanille, puis incorporer délicatement le mélange aux pistaches.", "Verser dans le moule et cuire 35 à 40 min : une pique plantée au centre doit ressortir sèche. Laisser refroidir complètement dans le moule.", "Crème : mélanger le sucre glace tamisé, le mascarpone, la crème et la pâte de pistache (ou 50 g de pistaches mixées très finement), puis battre jusqu'à ce que ce soit homogène. Laisser 20 à 30 min au frais pour que la crème épaississe.", "Couper le gâteau en deux dans l'épaisseur. Poser le disque du bas sur un plat, le tartiner d'une bonne couche de crème et le couvrir d'une poignée de framboises.", "Poser l'autre disque, puis couvrir le dessus et les côtés avec le reste de crème. Parsemer du reste de framboises, des 50 g de pistaches restantes concassées et du zeste de citron vert. Se garde 2 jours au frais."]
  },
  {
    id: "zapiekanki-baguettes-gratinees", nom: "Zapiekanki (demi-baguettes gratinées aux champignons)", cuisine: "polonaise", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53294",
    ingredients: [
      { id: "baguette", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 300, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "mayonnaise", quantite: 15, unite: "g" },
      { id: "cheddar", quantite: 50, unite: "g", ou: { id: "fromage-rape", quantite: 50, unite: "g" } },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "kabanos", quantite: 75, unite: "g", ou: { id: "chorizo", quantite: 75, unite: "g" } },
      { id: "mozzarella", quantite: 50, unite: "g" },
      { id: "cornichons", quantite: 40, unite: "g", optionnel: true },
      { id: "ciboulette", quantite: 5, unite: "g", optionnel: true },
      { id: "ketchup", quantite: 20, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Passer les baguettes 8 à 10 min au four, puis les laisser refroidir.", "Dans une poêle, faire chauffer 10 g de beurre et un filet d'huile à feu doux et y cuire 1 oignon haché 5 min. Ajouter les champignons émincés, passer à feu moyen et cuire 5 à 10 min, jusqu'à ce que leur eau ait disparu. Ajouter l'ail haché, cuire 1 à 2 min, saler, poivrer, puis mélanger avec la mayonnaise hors du feu.", "Couper les baguettes en deux dans la longueur et les poser sur la plaque, côté mie vers le haut. Étaler la poêlée de champignons, puis parsemer de cheddar, de jambon en lanières, de kabanos (saucisse sèche polonaise) ou de chorizo en rondelles, et de mozzarella.", "Cuire 8 à 10 min, jusqu'à ce que le fromage soit fondu et doré.", "Pendant ce temps, faire dorer le deuxième oignon en lamelles 5 min dans le reste du beurre et de l'huile.", "Garnir les zapiekanki d'oignon doré, de cornichons en rondelles et de ciboulette ciselée, puis tracer un zigzag de ketchup par-dessus."]
  },
  {
    id: "gateau-polonais-chocolat-noix", nom: "Gâteau polonais au chocolat et à la meringue aux noix", cuisine: "polonaise", type: "dessert",
    difficulte: "difficile", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53295",
    ingredients: [
      { id: "farine", quantite: 165, unite: "g" },
      { id: "cacao-en-poudre", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 13, unite: "pièce" },
      { id: "sucre", quantite: 400, unite: "g" },
      { id: "noix", quantite: 250, unite: "g" },
      { id: "fecule", quantite: 10, unite: "g" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "pepites-de-chocolat", quantite: 100, unite: "g", ou: { id: "chocolat-noir", quantite: 100, unite: "g" } }
    ],
    etapes: ["Un grand gâteau, pour une tablée. Préchauffer le four à 170 °C. Chemiser de papier cuisson un moule rectangulaire de 30 × 22 cm.", "Génoise : tamiser 150 g de farine avec le cacao. Séparer 8 œufs. Monter les 8 blancs en neige ferme, puis ajouter 200 g de sucre petit à petit. Ajouter les jaunes un par un sans cesser de fouetter, puis incorporer la farine cacaotée délicatement à la spatule.", "Verser dans le moule et cuire 35 min. Laisser 5 min, démouler et remettre du papier cuisson propre dans le moule.", "Meringue : monter les 5 blancs restants en neige ferme, puis ajouter les 200 g de sucre restants cuillerée par cuillerée, jusqu'à obtenir une meringue ferme et brillante. Incorporer 200 g de noix hachées finement, le reste de farine et la fécule.", "Étaler dans le moule et cuire 40 min à la même température. Laisser refroidir.", "Glaçage : faire chauffer la crème à feu doux, retirer du feu, ajouter les pépites de chocolat (ou le chocolat haché) et remuer jusqu'à ce qu'il fonde et brille.", "Couper la génoise et la meringue en deux dans l'épaisseur. Monter le gâteau : génoise, meringue, quelques noix, meringue, puis génoise. Couvrir de glaçage au chocolat et décorer avec le reste des noix.", "Mettre 1 à 2 h au réfrigérateur avant de servir."]
  },
  {
    id: "pierogi-choucroute-echalotes", nom: "Pierogi au chou et à la choucroute, échalotes croustillantes", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53296",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 75, unite: "ml" },
      { id: "echalote", quantite: 3, unite: "pièce" },
      { id: "choucroute", quantite: 100, unite: "g" },
      { id: "chou-pointu", quantite: 100, unite: "g", ou: { id: "chou", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 260, unite: "g" },
      { id: "eau", quantite: 90, unite: "ml" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "creme-aigre", quantite: 60, unite: "ml", ou: { id: "creme-fraiche", quantite: 60, unite: "ml" } },
      { id: "sucre", quantite: 2, unite: "g", optionnel: true },
      { id: "sel", quantite: 4, unite: "g" }
    ],
    etapes: ["Échalotes croustillantes : émincer 1 échalote, la rouler dans un peu de farine et la faire frire 1 min dans 60 ml d'huile bien chaude, jusqu'à ce qu'elle soit dorée et croustillante. Égoutter sur du papier absorbant.", "Farce : faire revenir doucement les 2 autres échalotes émincées dans 1 cuillère à soupe d'huile, 10 min, jusqu'à ce qu'elles commencent à dorer. Ajouter la choucroute égouttée et le chou émincé (chou pointu de préférence) et cuire 5 à 10 min, jusqu'à ce que le chou soit tendre. Goûter : saler si besoin, ou ajouter une pincée de sucre si c'est trop acide. Laisser refroidir complètement.", "Pâte : mélanger l'œuf, 1 cuillère à café d'huile et l'eau, puis ajouter 250 g de farine petit à petit en mélangeant à la main. Pétrir sur le plan de travail bien fariné jusqu'à ce que la pâte ne colle plus : elle doit être ferme et élastique. L'emballer et la laisser au moins 30 min au frais.", "Étaler la pâte sur le plan de travail bien fariné, à 3 mm d'épaisseur. Découper des disques de 9 cm (environ 18).", "Mettre 1 cuillère à café de farce au centre de chaque disque, plier en demi-lune et bien souder les bords. Les poser sur un plateau fariné sans qu'ils se touchent.", "Plonger les pierogi dans une grande casserole d'eau salée bouillante et les cuire 2 min, jusqu'à ce qu'ils remontent à la surface.", "Égoutter et servir avec une noisette de beurre et la crème (aigre si possible), parsemés d'échalotes croustillantes."]
  },
  {
    id: "salade-grenade-feta", nom: "Salade à la grenade, tomates cerises et feta", cuisine: "polonaise", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53297",
    ingredients: [
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "miel", quantite: 10, unite: "g" },
      { id: "thym", quantite: 1, unite: "g", optionnel: true },
      { id: "jeunes-pousses", quantite: 100, unite: "g", ou: { id: "salade-verte", quantite: 1, unite: "pièce" } },
      { id: "tomates-cerises", quantite: 250, unite: "g" },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "grenade", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 50, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans un grand saladier, mélanger l'huile, 2 cuillères à soupe de jus de citron, le miel et les feuilles de thym. Saler et poivrer.", "Ajouter les feuilles de salade (jeunes pousses de préférence), les tomates cerises coupées en deux, les oignons nouveaux et le piment émincés, et bien mélanger.", "Égrener la grenade au-dessus d'un bol en retirant les petites peaux blanches.", "Disposer la salade sur un plat et parsemer de grains de grenade et de feta émiettée."]
  },
  {
    id: "paczki-beignets-polonais", nom: "Pączki (beignets polonais à la confiture)", cuisine: "polonaise", type: "dessert",
    difficulte: "difficile", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "53298",
    ingredients: [
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "farine", quantite: 260, unite: "g" },
      { id: "lait", quantite: 65, unite: "ml" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "confiture", quantite: 65, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml", optionnel: true },
      { id: "poudre-d-amandes", quantite: 5, unite: "g", ou: { id: "amandes", quantite: 5, unite: "g" } },
      { id: "arome-d-amande-amere", quantite: 1, unite: "ml", optionnel: true },
      { id: "amandes", quantite: 25, unite: "g" },
      { id: "huile-de-tournesol", quantite: 750, unite: "ml" },
      { id: "sucre-glace", quantite: 40, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour 8 beignets. Levain : mélanger la levure avec 3 g de sucre et 1 cuillère à soupe de farine, puis ajouter le lait tiède. Laisser 30 min au chaud.", "Mettre 4 jaunes d'œufs et le reste du sucre avec la vanille dans un bol posé sur une casserole d'eau frémissante, et fouetter jusqu'à ce que ce soit lisse et épais.", "Tamiser le reste de farine dans un grand saladier, ajouter les jaunes battus et la crème tiède, bien mélanger, puis ajouter le sel et le levain. Pétrir 10 min au robot (15 à 20 min à la main).", "Quand la pâte ne colle plus aux mains, ajouter le beurre fondu refroidi et pétrir encore quelques minutes. Couvrir d'un torchon et laisser lever au chaud 1 h à 1 h 30.", "Mélanger la confiture avec la poudre d'amandes. Partager la pâte en 8 boules, couvrir et laisser lever encore 30 min.", "Faire chauffer l'huile à 180 °C dans une casserole profonde (un petit bout de pain doit dorer en 30 secondes). Frire les beignets 1 à 2 min de chaque côté : un anneau plus clair se forme au milieu. Égoutter sur du papier absorbant.", "Fourrer chaque beignet de confiture avec une poche à douille (ou une petite cuillère, par une fente sur le côté).", "Glaçage : mélanger le sucre glace avec un peu de jus de citron et quelques gouttes d'arôme d'amande amère pour une pâte épaisse, en napper les beignets et parsemer d'amandes effilées ou hachées."]
  },
  {
    id: "kotlety-galettes-de-boeuf-panees", nom: "Kotlety (galettes de bœuf panées)", cuisine: "polonaise", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53299",
    ingredients: [
      { id: "petit-pain", quantite: 1, unite: "pièce", ou: { id: "pain", quantite: 1, unite: "tranche" } },
      { id: "lait", quantite: 60, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 50, unite: "ml" },
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "marjolaine", quantite: 1, unite: "g", optionnel: true, ou: { id: "origan", quantite: 1, unite: "g" } },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tremper le petit pain (ou une tranche de pain) dans le lait jusqu'à ce qu'il soit tout mou.", "Pendant ce temps, faire dorer l'oignon haché dans 1 cuillère à soupe d'huile, environ 8 min.", "Mélanger le bœuf avec l'oignon, l'œuf, l'ail écrasé, une pincée de marjolaine (ou d'origan), le sel et le poivre. Presser le pain pour enlever le lait et l'ajouter. Bien mélanger.", "Former 4 galettes et les rouler dans la chapelure pour bien les couvrir.", "Faire chauffer le reste de l'huile dans une grande poêle et cuire les galettes 6 à 7 min de chaque côté, jusqu'à ce qu'elles soient dorées et bien cuites à cœur."]
  },
  {
    id: "goulash-porc-choucroute", nom: "Goulasch de porc à la choucroute et à la crème", cuisine: "polonaise", type: "plat",
    difficulte: "facile", tempsMinutes: 85, portions: 2,
    source: "TheMealDB", idSource: "53301",
    ingredients: [
      { id: "saindoux", quantite: 20, unite: "g", ou: { id: "huile-de-tournesol", quantite: 20, unite: "ml" } },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "epaule-de-porc", quantite: 400, unite: "g", ou: { id: "poitrine-de-porc", quantite: 400, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "paprika", quantite: 8, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "choucroute", quantite: 200, unite: "g" },
      { id: "creme-liquide", quantite: 50, unite: "ml", ou: { id: "creme-fraiche", quantite: 50, unite: "ml" } },
      { id: "creme-aigre", quantite: 30, unite: "ml", ou: { id: "creme-fraiche", quantite: 30, unite: "ml" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer le saindoux (ou l'huile) dans une cocotte à feu moyen et y faire dorer les oignons hachés finement 5 à 8 min.", "Ajouter le cumin (en graines si possible) et le porc en cubes, et faire dorer 10 min sur toutes les faces. Ajouter l'ail écrasé, saler, poivrer, saupoudrer de farine et cuire 1 min, puis ajouter le paprika et cuire encore 1 min.", "Délayer le bouillon cube dans l'eau chaude. En verser la moitié dans la cocotte, ajouter le laurier, couvrir et laisser mijoter 30 min à feu doux.", "Ajouter la choucroute, le reste du bouillon et un filet du jus de la choucroute. Couvrir et laisser mijoter encore 30 min en remuant de temps en temps, jusqu'à ce que la viande soit tendre.", "Ajouter la crème liquide, laisser mijoter 5 min, rectifier l'assaisonnement et servir avec une cuillerée de crème aigre sur chaque assiette."]
  },
  {
    id: "epaule-de-porc-rotie-ail-citron", nom: "Épaule de porc rôtie longuement à l'ail, au citron et à la sauge", cuisine: "polonaise", type: "plat",
    difficulte: "facile", tempsMinutes: 230, portions: 2,
    source: "TheMealDB", idSource: "53302",
    ingredients: [
      { id: "epaule-de-porc", quantite: 1000, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sauge", quantite: 3, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 25, unite: "ml" },
      { id: "vin-blanc", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 8, unite: "g" },
      { id: "poivre", quantite: 5, unite: "g" }
    ],
    etapes: ["Un rôti pour 2 avec des restes. Préchauffer le four à 200 °C.", "Écraser au mortier (ou hacher très finement) l'ail, le zeste du citron, les feuilles de sauge, le sel et le poivre, jusqu'à obtenir une pâte. Ajouter l'huile.", "Étaler ce mélange sur la viande en évitant la couenne. Inciser la couenne au couteau et la frotter avec une grosse pincée de sel. Ficeler le rôti.", "Tapisser un plat de deux couches de papier aluminium, poser la viande dessus, couenne vers le haut, et remonter l'aluminium tout autour pour former une barquette. Verser le vin blanc dans le plat autour.", "Enfourner et baisser tout de suite à 140 °C. Cuire environ 3 h, jusqu'à ce que la viande soit très tendre (70 °C à cœur avec un thermomètre).", "Monter le four à 240 °C. Verser le jus de cuisson dans une petite casserole et le faire réduire d'un tiers 10 à 15 min à feu moyen. Goûter et assaisonner.", "Pendant ce temps, rabattre l'aluminium pour ne laisser que la couenne à l'air et remettre 10 à 15 min au four, jusqu'à ce qu'elle soit gonflée et dorée.", "Laisser reposer 20 min avant de trancher. Servir arrosé de sauce."]
  },
  {
    id: "mousse-a-la-framboise", nom: "Mousse à la framboise", cuisine: "polonaise", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53303",
    ingredients: [
      { id: "feuille-de-gelatine", quantite: 1, unite: "pièce" },
      { id: "framboises", quantite: 200, unite: "g" },
      { id: "sucre", quantite: 30, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "creme-liquide", quantite: 250, unite: "ml", ou: { id: "creme-fraiche", quantite: 250, unite: "ml" } }
    ],
    etapes: ["À préparer la veille (au moins 6 h au frais). Faire tremper la feuille de gélatine 5 min dans de l'eau tiède, puis l'essorer.", "Mettre 175 g de framboises (fraîches ou surgelées) dans une casserole avec le sucre et le jus d'un demi-citron. Cuire 5 à 6 min à feu moyen-doux, jusqu'à ce que les fruits soient complètement défaits.", "Passer au tamis au-dessus d'un bol pour retirer les pépins. Ajouter la gélatine et remuer jusqu'à ce qu'elle fonde (sinon, réchauffer doucement). Laisser refroidir 15 min.", "Fouetter la crème (liquide entière, bien froide) en chantilly souple, puis l'incorporer délicatement à la purée de framboises.", "Répartir dans 2 ou 3 ramequins et laisser prendre au frais au moins 6 h. Servir avec le reste des framboises par-dessus."]
  },
  {
    id: "mini-gateaux-marbres", nom: "Mini gâteaux marbrés au cacao", cuisine: "polonaise", type: "dessert",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53304",
    ingredients: [
      { id: "beurre", quantite: 150, unite: "g" },
      { id: "farine", quantite: 175, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "cacao-en-poudre", quantite: 10, unite: "g" },
      { id: "lait", quantite: 45, unite: "ml" },
      { id: "sucre-glace", quantite: 10, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour une douzaine de petits gâteaux. Préchauffer le four à 180 °C. Faire fondre 25 g de beurre, en badigeonner généreusement des petits moules (à mini-kouglofs ou à muffins), puis les fariner et retirer l'excès.", "Battre le reste du beurre mou avec le sucre et une pincée de sel au batteur. Ajouter les œufs un par un en battant bien après chacun.", "Mélanger la farine et la levure, les tamiser au-dessus de la pâte et mélanger jusqu'à ce que ce soit lisse. Dans un petit bol, délayer le cacao dans le lait.", "Mettre 1 cuillère à soupe de pâte nature dans chaque moule. Mélanger le reste de pâte avec le cacao délayé et le répartir par-dessus.", "Cuire 15 à 18 min : une pique plantée dans un gâteau doit ressortir sèche (sinon, 3 min de plus). Laisser 5 min dans les moules, puis démouler et laisser refroidir sur une grille.", "Saupoudrer de sucre glace pour servir."]
  },
  {
    id: "feuilles-de-chou-farcies-riz-chataignes", nom: "Feuilles de chou farcies au riz, châtaignes et cranberries", cuisine: "polonaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53305",
    ingredients: [
      { id: "chou", quantite: 400, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "romarin", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 140, unite: "g" },
      { id: "chataignes", quantite: 140, unite: "g" },
      { id: "cranberries-sechees", quantite: 50, unite: "g", ou: { id: "raisins-secs", quantite: 50, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "vinaigre-balsamique", quantite: 15, unite: "ml" },
      { id: "miel", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Détacher 6 grandes feuilles de chou et retirer la grosse côte dure du centre.", "Les plonger 1 à 2 min dans une grande casserole d'eau salée bouillante, juste pour les assouplir. Égoutter, passer sous l'eau froide et sécher dans un torchon.", "Faire chauffer l'huile dans une poêle et y faire dorer légèrement l'oignon haché 5 min. Ajouter le romarin haché et le céleri en dés et cuire encore 8 min.", "Ajouter le riz (basmati de préférence) et remuer 1 min jusqu'à ce que les grains brillent. Retirer du feu, ajouter les châtaignes cuites émiettées et les cranberries séchées (ou les raisins secs), saler et poivrer.", "Mettre un peu de farce sur chaque feuille, rouler en rabattant les côtés pour bien enfermer. Poser les rouleaux côte à côte dans un plat huilé, la soudure en dessous.", "Délayer le bouillon cube dans l'eau chaude, ajouter le vinaigre balsamique et le miel, et verser sur les rouleaux.", "Couvrir bien serré de papier aluminium et cuire 1 h, puis retirer l'aluminium et cuire encore 15 min."]
  },
  {
    id: "bortsch-aux-travers-de-porc", nom: "Bortsch aux travers de porc (soupe de betterave)", cuisine: "polonaise", type: "soupe",
    difficulte: "moyen", tempsMinutes: 130, portions: 2,
    source: "TheMealDB", idSource: "53306",
    ingredients: [
      { id: "travers-de-porc", quantite: 400, unite: "g", ou: { id: "poitrine-de-porc", quantite: 300, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte", optionnel: true },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "betterave", quantite: 200, unite: "g" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "concentre-de-tomate", quantite: 15, unite: "g", ou: { id: "sauce-tomate", quantite: 40, unite: "g" } },
      { id: "chou", quantite: 150, unite: "g" },
      { id: "persil", quantite: 10, unite: "g", optionnel: true },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true },
      { id: "creme-aigre", quantite: 80, unite: "ml", ou: { id: "creme-fraiche", quantite: 80, unite: "ml" } },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les travers en gros morceaux, les mettre dans une grande casserole et couvrir avec l'eau. Porter à ébullition à feu vif en retirant l'écume, ajouter le laurier et saler. Baisser le feu et laisser frémir 1 h, jusqu'à ce que la viande se détache de l'os.", "Ajouter la carotte en rondelles, l'oignon émincé, l'ail en fines lamelles, le poivron (rouge si possible) en morceaux et le piment haché. Cuire 15 min.", "Ajouter la betterave crue épluchée et coupée en bâtonnets, cuire 10 min, puis ajouter les pommes de terre en dés et cuire encore 15 min.", "Ajouter le concentré de tomate et les haricots blancs égouttés, porter à ébullition et cuire 5 min. Ajouter le chou émincé et cuire encore 5 min.", "Saler, poivrer, parsemer de persil et d'aneth hachés, couper le feu et laisser reposer 5 min. Servir avec la crème (aigre si possible) à part."]
  },
  {
    id: "pain-de-seigle-au-carvi", nom: "Pain de seigle au carvi", cuisine: "polonaise", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 210, portions: 2,
    source: "TheMealDB", idSource: "53308",
    ingredients: [
      { id: "farine-de-seigle", quantite: 200, unite: "g", ou: { id: "farine", quantite: 200, unite: "g" } },
      { id: "farine", quantite: 200, unite: "g" },
      { id: "levure-de-boulanger", quantite: 10, unite: "g" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "carvi", quantite: 3, unite: "g", optionnel: true, ou: { id: "cumin", quantite: 3, unite: "g" } },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Un pain entier. Mettre les deux farines (la blanche « spéciale pain » de préférence), la levure et le sel dans un saladier. Délayer le miel dans l'eau tiède, verser et mélanger pour former une pâte. La farine de seigle boit beaucoup : si la pâte est trop sèche, ajouter un peu d'eau tiède jusqu'à ce qu'elle soit souple.", "Pétrir 10 min sur le plan de travail jusqu'à ce qu'elle soit lisse (elle sera moins élastique qu'une pâte à pain blanc).", "Mettre la pâte dans un saladier huilé, couvrir et laisser lever au chaud 1 à 2 h, jusqu'à ce qu'elle double de volume. Fariner un moule à cake.", "Pétrir rapidement pour chasser l'air, en incorporant les graines de carvi. Former un pain ovale, le mettre dans le moule, couvrir et laisser lever encore 1 h à 1 h 30.", "Préchauffer le four à 220 °C. Saupoudrer le pain de farine de seigle, faire quelques entailles en biais et cuire 30 min : il doit être bien brun et sonner creux quand on tape dessous.", "Laisser refroidir au moins 20 min sur une grille avant de couper."]
  },
  {
    id: "salade-concombre-fenouil-aneth", nom: "Salade de concombre et fenouil à la crème et à l'aneth", cuisine: "polonaise", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53309",
    ingredients: [
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "fenouil", quantite: 1, unite: "pièce" },
      { id: "creme-aigre", quantite: 150, unite: "ml", ou: { id: "creme-fraiche", quantite: 150, unite: "ml" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "vinaigre-de-vin-blanc", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "aneth", quantite: 10, unite: "g", ou: { id: "ciboulette", quantite: 10, unite: "g" } },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le concombre en fines rondelles et le mettre dans une passoire. Saupoudrer de 1 cuillère à café de sel et du sucre, et laisser dégorger 10 min. Ajouter le fenouil émincé finement.", "Mélanger la crème (aigre si possible), le jus du citron, le vinaigre (de vin blanc si possible) et l'aneth haché, puis poivrer.", "Verser la sauce sur le concombre et le fenouil, mélanger et servir frais."]
  },
  {
    id: "challah-pain-tresse", nom: "Challah (pain tressé brioché)", cuisine: "polonaise", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "53310",
    ingredients: [
      { id: "farine", quantite: 500, unite: "g" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "levure-de-boulanger", quantite: 10, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 70, unite: "ml" },
      { id: "eau", quantite: 230, unite: "ml" },
      { id: "graines-de-pavot", quantite: 10, unite: "g", optionnel: true, ou: { id: "graines-de-sesame", quantite: 10, unite: "g" } },
      { id: "sel", quantite: 10, unite: "g" }
    ],
    etapes: ["Un pain entier. Mélanger la levure, une pincée de sucre et 2 cuillères à soupe d'eau tiède dans un petit bol. Laisser 10 min, jusqu'à ce que ça mousse.", "Dans un grand saladier, mélanger la farine (« spéciale pain » de préférence), le reste du sucre et le sel. Creuser un puits et y mettre la moitié des œufs battus, la levure et l'huile. Verser 200 ml d'eau tiède et mélanger à la main, en ajoutant un peu d'eau s'il reste beaucoup de farine sèche : la pâte doit être humide mais pas collante.", "Pétrir 10 min sur le plan de travail légèrement fariné, jusqu'à ce que la pâte soit lisse et un peu élastique (n'ajouter de la farine que si elle colle vraiment). Former une boule, la rouler dans un saladier huilé, couvrir d'un torchon et laisser lever 1 h au chaud, jusqu'à ce qu'elle double.", "Partager la pâte en 3 morceaux égaux et rouler chacun en boudin d'environ 25 cm, un peu plus fin aux bouts. Les réunir en haut et les tresser, puis rentrer les extrémités dessous.", "Poser la tresse sur une plaque recouverte de papier cuisson, couvrir d'un torchon et laisser gonfler environ 40 min. Préchauffer le four à 200 °C.", "Badigeonner la tresse avec le reste d'œuf battu, bien dans les creux, et parsemer de graines de pavot ou de sésame.", "Cuire 25 à 30 min au milieu du four, jusqu'à ce que le pain soit doré et sonne creux dessous (couvrir d'aluminium s'il brunit trop vite). Laisser refroidir sur une grille."]
  }
]);

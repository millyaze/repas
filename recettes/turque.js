// ============================================================
// RECETTES : cuisine turque (31 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/espagnole.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "corba-soupe-de-lentilles", nom: "Çorba (soupe de lentilles aux épices)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52977",
    ingredients: [
      { id: "lentilles", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 30, unite: "g" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g", optionnel: true },
      { id: "thym", quantite: 1, unite: "g", optionnel: true, ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 650, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Rincer les lentilles 2 ou 3 fois et les égoutter.", "Dans une casserole, faire revenir l'oignon haché dans l'huile avec une pincée de sel 3 min, puis ajouter la carotte en dés et cuire encore 3 min.", "Ajouter la sauce tomate et remuer 1 min, puis le cumin, le paprika, la menthe, le thym, le poivre et le piment : remuer 10 secondes pour réveiller les épices.", "Ajouter tout de suite les lentilles, l'eau et le bouillon cube émietté. Porter doucement à ébullition, puis cuire 15 à 20 min à feu moyen-doux, à moitié couvert, jusqu'à ce que les lentilles se défassent.", "Mixer la soupe et rectifier le sel. Servir avec du pain grillé émietté par-dessus (se garde une semaine au frais)."]
  },
  {
    id: "kumpir", nom: "Kumpir (pomme de terre au four garnie)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "52978",
    ingredients: [
      { id: "pomme-de-terre", quantite: 600, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "fromage-rape", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "mais-en-boite", quantite: 1, unite: "boîte", optionnel: true },
      { id: "olives-noires", quantite: 40, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Choisir 2 grosses pommes de terre, les piquer à la fourchette et les cuire 1 h 15 au four à 200 °C, jusqu'à ce qu'elles soient tendres à cœur.", "Pendant ce temps, hacher finement l'oignon et le poivron, et les mélanger avec le sel, le poivre et le piment.", "Fendre les pommes de terre chaudes sur le dessus, ajouter le beurre et écraser l'intérieur à la fourchette pour le mélanger avec le beurre, puis avec le fromage râpé, qui doit fondre.", "Garnir avec le mélange oignon-poivron, puis avec ce qu'on aime : maïs, olives…"]
  },
  {
    id: "lahmacun", nom: "Lahmacun (galettes fines à la viande hachée)", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "53251",
    ingredients: [
      { id: "farine", quantite: 300, unite: "g" },
      { id: "levure-de-boulanger", quantite: 6, unite: "g" },
      { id: "eau", quantite: 225, unite: "ml" },
      { id: "boeuf-hache", quantite: 150, unite: "g", ou: { id: "agneau-hache", quantite: 150, unite: "g" } },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "persil", quantite: 20, unite: "g" },
      { id: "piment-en-poudre", quantite: 3, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mettre la farine dans un saladier, creuser un puits, y mettre la levure et 75 ml d'eau tiède. Couvrir d'un peu de farine et laisser 15 min au chaud.", "Ajouter le reste de l'eau et 1 pincée de sel, pétrir 10 min jusqu'à ce que la pâte soit souple et ne colle plus. Couvrir et laisser lever 30 min au chaud.", "Préchauffer le four au maximum (240 °C).", "Garniture : peler la tomate (1 min dans l'eau bouillante), l'épépiner et la hacher. Épépiner et hacher finement le piment. Mélanger avec les oignons nouveaux et la moitié du persil hachés, la viande, le piment en poudre, le cumin, l'huile, le sel et le poivre (une pincée de quatre-épices si on en a).", "Partager la pâte en 4 boules, les étaler très finement en disques et les poser sur des plaques farinées. Étaler une fine couche de garniture sur chacune.", "Cuire 10 à 15 min, jusqu'à ce que les bords brunissent. Parsemer du reste de persil et d'oignon rouge en lamelles, arroser de quelques gouttes de citron et servir tout de suite (on peut les rouler)."]
  },
  {
    id: "riz-pilaf-aux-vermicelles", nom: "Riz pilaf aux vermicelles (şehriyeli pilav)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53252",
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "pates", quantite: 35, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Rincer le riz plusieurs fois jusqu'à ce que l'eau soit claire, puis le laisser tremper 10 min dans l'eau froide.", "Dans une casserole à feu moyen, faire dorer les vermicelles (ou des pâtes très fines cassées) dans l'huile 2 à 3 min en remuant sans arrêt. Retirer du feu et ajouter le beurre.", "Égoutter le riz, l'ajouter dans la casserole et bien mélanger. Verser l'eau bouillante avec le bouillon cube émietté et le sel.", "Porter à ébullition, puis baisser au plus doux, couvrir et cuire 8 min.", "Retirer du feu, poser un torchon propre sous le couvercle et laisser reposer 10 min. Égrener à la fourchette."]
  },
  {
    id: "imam-bayildi-agneau-tzatziki", nom: "Imam bayildi (aubergines farcies), côtelettes d'agneau et tzatziki", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53253",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 45, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "cotelettes-d-agneau", quantite: 4, unite: "pièce", ou: { id: "cote-de-porc", quantite: 2, unite: "pièce" } },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "yaourt-grec", quantite: 150, unite: "g" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 190 °C. Couper les aubergines en deux dans la longueur, quadriller la chair au couteau, la badigeonner d'huile et cuire 20 min.", "Faire fondre l'oignon haché dans un peu d'huile, ajouter l'ail et la cannelle, cuire 1 min.", "Vider la chair des aubergines (garder la peau), la hacher et l'ajouter aux oignons. Couper les tomates en deux, récupérer leurs graines et leur jus dans une passoire au-dessus d'un bol, hacher la chair et l'ajouter. Cuire 10 min, puis ajouter presque tout le persil.", "Remplir les demi-aubergines avec ce mélange, les mettre dans un plat, verser le jus des tomates, arroser d'huile et cuire 30 min.", "Tzatziki : mélanger le yaourt grec, le concombre râpé et pressé et la menthe hachée.", "Saler, poivrer les côtelettes, ajouter le paprika et les griller 3 min de chaque côté. Arroser de jus de citron. Servir avec les aubergines parsemées de persil et le tzatziki."]
  },
  {
    id: "ezme", nom: "Ezme (salade pimentée de tomates et poivrons)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53254",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "harissa", quantite: 20, unite: "g" },
      { id: "sauce-tomate", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "miel", quantite: 5, unite: "g", optionnel: true },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Hacher très finement (au mixeur, par à-coups) les tomates, le poivron et le piment. Les mettre à égoutter dans une passoire.", "Hacher finement l'oignon, l'ail et le persil.", "Dans un saladier, fouetter la harissa (elle remplace la pâte de piment turque), la sauce tomate, le jus de citron et le miel (ils remplacent la mélasse de grenade), le piment en poudre, la menthe et presque toute l'huile. Ajouter une pincée de sumac si on en a.", "Ajouter le hachis d'oignon et les légumes égouttés, saler et bien mélanger. Arroser du reste d'huile. Se mange en entrée avec du pain ou avec des grillades."]
  },
  {
    id: "aubergines-grillees-pois-chiches-sauce-noix", nom: "Aubergines grillées, pois chiches épicés et sauce aux noix", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53255",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 45, unite: "ml" },
      { id: "yaourt-grec", quantite: 200, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "noix", quantite: 25, unite: "g", ou: { id: "amandes", quantite: 25, unite: "g" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire dorer l'oignon haché 10 min dans 2 cuillères à soupe d'huile. Ajouter le piment haché, le gingembre râpé et le cumin.", "Ajouter les pois chiches égouttés, les tomates en dés et l'eau. Porter à ébullition et laisser mijoter 10 min. Saler, poivrer, ajouter le jus d'un demi-citron.", "Couper les aubergines en tranches, les badigeonner d'huile, saler, poivrer et les griller à la poêle-gril ou au four, des deux côtés, jusqu'à ce qu'elles soient dorées et tendres.", "Sauce : mélanger le yaourt avec l'ail écrasé, presque toutes les noix hachées, la moitié de la coriandre, sel et poivre.", "Disposer les aubergines sur un plat, verser les pois chiches dessus, napper de sauce et parsemer du reste de noix et de coriandre."]
  },
  {
    id: "cacik", nom: "Cacık (yaourt au concombre, à la menthe et à l'ail)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53256",
    ingredients: [
      { id: "yaourt-grec", quantite: 300, unite: "g", ou: { id: "yaourt-nature", quantite: 3, unite: "pièce" } },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Avec des yaourts nature : les égoutter quelques heures au frais dans une passoire garnie de papier absorbant (le yaourt grec est déjà épais).", "Mélanger 2 cuillères à café de jus de citron, presque toute l'huile et la menthe hachée (ou séchée), puis ajouter le yaourt.", "Couper le concombre en deux, retirer les graines avec une cuillère, le râper et le presser fort dans les mains pour enlever l'eau.", "Ajouter le concombre, l'ail écrasé et le sel, bien mélanger. Arroser d'un filet d'huile et d'un peu de menthe. Servir frais."]
  },
  {
    id: "burgers-kofta", nom: "Burgers kofta (boulettes d'agneau épicées en pain pita)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53257",
    ingredients: [
      { id: "agneau-hache", quantite: 250, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "garam-masala", quantite: 10, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "sauce-sriracha", quantite: 5, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 100, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mélanger à la main la viande, l'oignon et l'ail hachés très finement, le garam masala, la coriandre hachée, la sauce pimentée et le sel, jusqu'à ce que ce soit bien homogène.", "Former 4 petits burgers plats (ils peuvent attendre un jour au frais ou un mois au congélateur).", "Les cuire sous le gril du four le plus chaud, ou à la poêle, 5 à 6 min de chaque côté.", "Servir avec les pains pita chauds, la tomate en rondelles, le chou rouge (ou blanc) émincé, l'oignon rouge en lamelles et le yaourt : chacun garnit son pain."]
  },
  {
    id: "wrap-agneau-cumin-salade-croquante", nom: "Wrap d'agneau au cumin, salade croquante et mayonnaise aux poivrons", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53258",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 300, unite: "g", ou: { id: "steak-de-boeuf", quantite: 300, unite: "g" } },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "vinaigre", quantite: 25, unite: "ml" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 200, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "mayonnaise", quantite: 25, unite: "g" },
      { id: "pain-pita", quantite: 2, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Frotter les tranches d'agneau (gigot) avec l'huile, le cumin, le sel et le poivre. Les griller 3 à 4 min de chaque côté et les laisser reposer.", "Dans un saladier, dissoudre le sucre dans le vinaigre. Ajouter la carotte râpée, l'oignon nouveau émincé et le chou finement émincé, saler et mélanger.", "Mixer la moitié du poivron avec la mayonnaise. Émincer finement l'autre moitié.", "Garnir chaque pain de salade, ajouter l'agneau tranché et son jus, napper de mayonnaise aux poivrons et parsemer de poivron émincé. Rouler (ou ouvrir et farcir les pitas)."]
  },
  {
    id: "puree-d-aubergine-fumee", nom: "Purée d'aubergine fumée au yaourt", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53259",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "yaourt-grec", quantite: 150, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "persil", quantite: 10, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les aubergines en deux dans la longueur et les cuire 25 min sous le gril du four très chaud, en les retournant, jusqu'à ce que la chair soit fondante (la peau reste ferme). Laisser tiédir.", "Récupérer la chair à la cuillère et l'écraser à la fourchette en purée épaisse.", "Ajouter le jus du citron et l'ail écrasé, puis le yaourt et l'aneth (ou le persil) haché. Saler, poivrer.", "Servir tiède, avec du pain."]
  },
  {
    id: "gigot-d-agneau-confit-cannelle-agrumes", nom: "Gigot d'agneau rôti longuement à la cannelle et au citron", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 300, portions: 2,
    source: "TheMealDB", idSource: "53260",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 800, unite: "g", ou: { id: "souris-d-agneau", quantite: 2, unite: "pièce" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "cannelle", quantite: 4, unite: "g" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille si possible : faire mariner l'agneau au frais dans le jus du citron.", "Sortir la viande du frigo 1 h avant. Préchauffer le four à 220 °C. L'égoutter (garder la marinade), l'éponger, la frotter avec la moitié de l'huile et la faire dorer 15 à 20 min au four. Baisser ensuite le four à 160 °C.", "Mélanger le zeste du citron, le reste d'huile, le miel, la cannelle, le cumin (et des graines de fenouil si on en a), l'ail écrasé, le sel et le poivre.", "Poser la viande sur une grande feuille de papier cuisson posée sur du papier d'aluminium, la frotter de cette pâte, verser la marinade et fermer hermétiquement.", "Cuire 3 h à 3 h 30, jusqu'à ce que la viande soit très tendre. Laisser reposer 30 min dans sa papillote, puis servir avec son jus."]
  },
  {
    id: "ailes-de-poulet-cumin-citron-ail", nom: "Ailes ou pilons de poulet au cumin, citron et ail", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53261",
    ingredients: [
      { id: "pilons-de-poulet", quantite: 4, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Si on a des ailes (une douzaine), les couper en deux à l'articulation.", "Mélanger l'ail écrasé, le zeste et le jus du citron, le cumin, l'huile, le sel et le poivre. Y enrober le poulet, couvrir et laisser mariner au moins 1 h au frais.", "Cuire 45 à 50 min au four à 200 °C (ou 20 min au barbecue), jusqu'à ce que la peau soit croustillante. Arroser de miel pendant les 10 dernières minutes.", "Servir avec des olives, des amandes et du pain plat."]
  },
  {
    id: "adana-kebab", nom: "Adana kebab (brochettes d'agneau haché pimenté)", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 140, portions: 2,
    source: "TheMealDB", idSource: "53262",
    ingredients: [
      { id: "agneau-hache", quantite: 400, unite: "g", ou: { id: "boeuf-hache", quantite: 400, unite: "g" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "harissa", quantite: 25, unite: "g" },
      { id: "piment-en-poudre", quantite: 4, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" }
    ],
    etapes: ["Hacher très finement le poivron au mixeur, puis le presser dans une passoire pour enlever son jus.", "Le mettre dans un saladier avec la viande, la harissa (à la place de la pâte de piment turque), le piment en poudre, le sel et les deux tiers de l'huile. Pétrir au moins 2 à 3 min : le mélange doit devenir collant. Couvrir et laisser 2 h au frais.", "Préchauffer le gril du four (ou le four à 220 °C). Partager la viande en 6 portions et les façonner, les mains mouillées, en longs boudins de 20 cm, autour de piques ou directement sur une plaque. Marquer des creux avec les doigts tout du long.", "Badigeonner du reste d'huile et cuire 10 à 12 min sous le gril en retournant (ou 16 à 18 min au four), jusqu'à ce qu'ils soient croustillants dehors et juteux dedans."]
  },
  {
    id: "pilaf-d-agneau-abricots", nom: "Pilaf d'agneau aux abricots secs et pignons", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53263",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "abricots-secs", quantite: 50, unite: "g" },
      { id: "pignons-de-pin", quantite: 15, unite: "g", ou: { id: "amandes", quantite: 15, unite: "g" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Griller les pignons à sec dans une grande poêle, puis les réserver.", "Mettre l'huile dans la poêle et faire revenir l'oignon haché avec la cannelle (un bâton ou en poudre) jusqu'à ce qu'il dore.", "Monter le feu, ajouter l'agneau coupé en petits dés et le faire revenir jusqu'à ce qu'il change de couleur. Ajouter le riz et remuer 1 min.", "Verser l'eau bouillante, émietter le bouillon cube, ajouter les abricots, saler. Couvrir et cuire 12 min à feu doux, jusqu'à ce que le riz ait tout absorbé.", "Ajouter les pignons et la menthe hachée, mélanger et servir."]
  },
  {
    id: "brochettes-de-poulet-fumees", nom: "Brochettes de poulet au paprika fumé", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53264",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "mayonnaise", quantite: 40, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Si les piques sont en bois, les faire tremper 10 min dans l'eau.", "Désosser le poulet si besoin et le couper en morceaux de 3 cm. Le mélanger avec la moitié de l'huile, le cumin, le paprika (fumé de préférence), l'ail écrasé, le vinaigre, le sel et le poivre (et des graines de fenouil si on en a). Ça peut attendre un jour au frais.", "Enfiler 2 ou 3 morceaux par pique.", "Cuire dans une poêle bien chaude avec le reste d'huile, 3 à 4 min de chaque côté.", "Servir avec la mayonnaise relevée d'une pincée de paprika et d'ail écrasé, si on veut."]
  },
  {
    id: "cotelettes-d-agneau-piment-gingembre", nom: "Côtelettes d'agneau au piment et au gingembre", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 130, portions: 2,
    source: "TheMealDB", idSource: "53265",
    ingredients: [
      { id: "cotelettes-d-agneau", quantite: 6, unite: "pièce", ou: { id: "cote-de-porc", quantite: 2, unite: "pièce" } },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer l'ail, le gingembre, 1 cuillère à soupe de jus de citron, l'huile, le piment, le cumin, le sel et le poivre jusqu'à obtenir une pâte lisse.", "En enrober les côtelettes des deux côtés et laisser mariner au moins 2 h au frais (ou une nuit).", "Les cuire au barbecue ou dans une poêle-gril très chaude, 3 min de chaque côté : elles doivent rester rosées et juteuses au centre."]
  },
  {
    id: "falafels-poeles", nom: "Falafels poêlés", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53266",
    ingredients: [
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "graines-de-coriandre", quantite: 2, unite: "g" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire fondre l'oignon haché et l'ail écrasé 5 min à feu doux dans 1 cuillère à soupe d'huile.", "Les mettre dans un saladier avec les pois chiches égouttés, le cumin et la coriandre moulue, et écraser à la fourchette ou au presse-purée jusqu'à ce qu'il ne reste plus de pois chiches entiers.", "Ajouter le persil haché, le sel, le poivre et l'œuf battu, et bien mélanger avec les mains.", "Former 6 boulettes et les aplatir en galettes.", "Les cuire 3 min de chaque côté dans le reste d'huile, à feu moyen, jusqu'à ce qu'elles soient dorées et fermes. Servir chaud ou froid, avec du pain pita, de la semoule ou une salade."]
  },
  {
    id: "salade-de-semoule-aubergine", nom: "Salade de semoule à l'aubergine, tomates cerises et chèvre", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53267",
    ingredients: [
      { id: "semoule", quantite: 140, unite: "g" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 45, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 225, unite: "ml" },
      { id: "tomates-cerises", quantite: 200, unite: "g" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "fromage-de-chevre", quantite: 100, unite: "g", ou: { id: "feta", quantite: 100, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper l'aubergine en tranches, les badigeonner d'huile, saler, poivrer et les griller 15 min sous le gril du four en les retournant à mi-cuisson.", "Pendant ce temps, verser sur la semoule l'eau bouillante avec le bouillon cube émietté, couvrir et laisser gonfler 10 min.", "Mélanger les tomates cerises coupées en deux, la menthe hachée, le fromage émietté et le reste d'huile.", "Égrener la semoule à la fourchette, puis ajouter l'aubergine coupée en morceaux, le mélange de tomates et le jus d'un demi-citron."]
  },
  {
    id: "poulet-roti-sauce-cremeuse-aux-noix", nom: "Poulet rôti, sauce crémeuse aux noix", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53268",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "pain-pita", quantite: 3, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 3, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "noix", quantite: 90, unite: "g", ou: { id: "amandes", quantite: 90, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "creme-fraiche", quantite: 25, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mélanger le poulet avec le cumin, le paprika, la moitié de l'huile, le sel et le poivre, et cuire 40 min dans un plat, jusqu'à ce qu'il soit croustillant.", "Délayer le bouillon cube dans l'eau chaude. Déchirer 1 pain pita et le faire tremper avec 2 cuillères à soupe de ce bouillon.", "Griller les noix à sec 3 min dans une poêle, les réserver. Dans la même poêle, faire fondre l'oignon et l'ail hachés dans le reste d'huile.", "Mixer le pain trempé, l'oignon, presque toutes les noix et le reste du bouillon en une pâte un peu grossière. La remettre dans la poêle, ajouter la crème et le jus du citron, saler, poivrer et garder au chaud.", "Ajouter la coriandre hachée à la sauce. Parsemer le poulet du reste de noix concassées et servir avec la sauce et les pains pita grillés coupés en triangles."]
  },
  {
    id: "houmous-maison", nom: "Houmous maison au yaourt", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53269",
    ingredients: [
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "tahini", quantite: 15, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "yaourt-grec", quantite: 45, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Égoutter les pois chiches en gardant leur jus.", "Les mixer avec le tahini, l'ail et le yaourt jusqu'à ce que ce soit lisse.", "Ajouter le jus des pois chiches cuillère par cuillère jusqu'à la consistance voulue.", "Ajouter un filet de jus de citron et le sel. Servir avec du pain ou des légumes crus."]
  },
  {
    id: "agneau-a-la-turque-yaourt-menthe", nom: "Agneau grillé au yaourt et à la menthe en pain pita", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53270",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 300, unite: "g", ou: { id: "steak-de-boeuf", quantite: 300, unite: "g" } },
      { id: "herbes-de-provence", quantite: 3, unite: "g" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "yaourt-grec", quantite: 200, unite: "g", ou: { id: "yaourt-nature", quantite: 2, unite: "pièce" } },
      { id: "pain-pita", quantite: 2, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le gril du four. Saler, poivrer les tranches d'agneau (gigot) et les griller 2 min de chaque côté : elles doivent rester saignantes.", "Mélanger la moitié du yaourt avec les herbes (origan si on en a) et la moitié de la menthe hachée. En napper la viande et la remettre 2 à 3 min sous le gril, jusqu'à ce que le yaourt dore.", "Laisser reposer la viande quelques minutes. Pendant ce temps, griller les pains, émincer la salade et l'oignon rouge, et mélanger le reste de menthe au reste de yaourt.", "Couper la viande en tranches épaisses et en garnir les pains avec la salade, l'oignon et le yaourt à la menthe. Arroser de jus de citron si on veut."]
  },
  {
    id: "gateau-noix-figues-miel", nom: "Gâteau aux noix, figues (ou dattes) et miel", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 85, portions: 2,
    source: "TheMealDB", idSource: "53271",
    ingredients: [
      { id: "farine", quantite: 225, unite: "g" },
      { id: "levure-chimique", quantite: 10, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 175, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "miel", quantite: 45, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "banane", quantite: 2, unite: "pièce" },
      { id: "figues-seches", quantite: 100, unite: "g" },
      { id: "noix", quantite: 50, unite: "g", ou: { id: "amandes", quantite: 50, unite: "g" } }
    ],
    etapes: ["Préchauffer le four à 160 °C. Beurrer un moule à cake et le chemiser de papier cuisson.", "Dans un saladier, mettre la farine, la levure, la cannelle, le beurre mou, le sucre (roux si possible), 2 cuillères à soupe de miel et les œufs. Ajouter les bananes écrasées et les figues (ou des dattes) coupées aux ciseaux.", "Battre 2 à 3 min jusqu'à ce que ce soit bien homogène.", "Verser dans le moule, lisser et parsemer de noix concassées. Cuire 1 h : le dessus doit être ferme quand on appuie (sinon 10 min de plus).", "Laisser tiédir 15 min avant de démouler. Une fois froid, arroser du reste de miel et couper en tranches épaisses (un cake entier, pour plusieurs goûters)."]
  },
  {
    id: "pains-plats-grilles", nom: "Pains plats grillés à la poêle", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53272",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 7, unite: "g" },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 175, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Mélanger la farine (une partie en farine complète si on en a), la levure, le sucre et le sel. Ajouter l'eau tiède et l'huile, et pétrir en une pâte souple.", "Laisser lever 1 h au chaud, jusqu'à ce que la pâte double de volume.", "Dégazer la pâte, l'étaler sur un plan fariné en un rectangle de 20 x 20 cm et la couper en 4 carrés. Les poser sur du papier cuisson et laisser lever encore 30 min.", "Les cuire 2 min de chaque côté dans une poêle très chaude sans matière grasse (ou au barbecue), jusqu'à ce qu'ils gonflent et dorent. Servir avec des sauces à tremper (houmous, cacık, ezme…)."]
  },
  {
    id: "aubergine-rotie-chevre-pain-grille", nom: "Aubergine rôtie, chèvre et pain grillé", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53273",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 45, unite: "ml" },
      { id: "tomates-cerises", quantite: 150, unite: "g" },
      { id: "pain-pita", quantite: 1, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 1, unite: "pièce" } },
      { id: "vinaigre-balsamique", quantite: 30, unite: "ml" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "fromage-de-chevre", quantite: 50, unite: "g", ou: { id: "feta", quantite: 50, unite: "g" } },
      { id: "roquette", quantite: 30, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Couper les aubergines en tranches, les badigeonner avec 1 cuillère à soupe d'huile, saler, poivrer et les rôtir 20 min. Ajouter les tomates cerises sur la plaque pour les 5 dernières minutes.", "Déchirer le pain en morceaux et le faire dorer 8 min au four sur une autre plaque.", "Sauce : mélanger le vinaigre balsamique, la menthe hachée, 1 échalote hachée, le piment haché, le reste d'huile, sel et poivre.", "Mettre dans un plat les aubergines, les tomates, l'autre échalote en lamelles et le pain croustillant. Verser la sauce, émietter le chèvre par-dessus et ajouter un peu de roquette."]
  },
  {
    id: "aubergines-grillees-sauce-sesame", nom: "Aubergines grillées, sauce au yaourt et au sésame", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53274",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "yaourt-grec", quantite: 200, unite: "g" },
      { id: "tahini", quantite: 40, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les aubergines en tranches, les badigeonner d'huile, saler et poivrer.", "Les griller 2 à 3 min de chaque côté dans une poêle-gril bien chaude (ou au barbecue), jusqu'à ce qu'elles soient dorées et tendres.", "Mélanger le yaourt, le tahini, l'ail écrasé, le jus du citron et les herbes hachées (en garder un peu). Saler, poivrer.", "Napper les aubergines de sauce et parsemer du reste d'herbes."]
  },
  {
    id: "salade-de-patates-douces", nom: "Salade de patates douces rôties au miel", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53275",
    ingredients: [
      { id: "patate-douce", quantite: 500, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "ciboulette", quantite: 10, unite: "g" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Éplucher les patates douces, les couper en gros morceaux et les mélanger avec la moitié de l'huile, sel et poivre.", "Les étaler sur une plaque couverte de papier cuisson et les rôtir 30 à 35 min, jusqu'à ce qu'elles soient tendres et dorées. Les laisser tiédir.", "Sauce : fouetter le reste d'huile, le vinaigre (de xérès si on en a), le miel, l'échalote hachée, les oignons nouveaux émincés, la ciboulette ciselée, sel et poivre.", "Mélanger délicatement la sauce avec les patates douces, avec les mains pour ne pas les écraser."]
  },
  {
    id: "mess-abricots-loukoums", nom: "Mess aux abricots et loukoums (dessert à la crème)", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53276",
    ingredients: [
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "yaourt-grec", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "abricots-secs", quantite: 60, unite: "g" },
      { id: "amandes", quantite: 25, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g", optionnel: true }
    ],
    etapes: ["Fouetter la crème (ou du mascarpone), le yaourt, le sucre et, si on en a, 2 cuillères à soupe d'eau de fleur d'oranger, jusqu'à ce que ce soit épais.", "Ajouter les abricots coupés en morceaux (frais en saison), les amandes concassées et, si on en a, 1 nid de meringue émietté et 2 loukoums coupés en dés. Mélanger délicatement.", "Répartir dans 2 verres et décorer de feuilles de menthe."]
  },
  {
    id: "boulettes-d-agneau-aux-abricots", nom: "Boulettes d'agneau aux abricots, sauce tomate épicée", cuisine: "turque",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53277",
    ingredients: [
      { id: "agneau-hache", quantite: 250, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "graines-de-coriandre", quantite: 2, unite: "g" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "abricots-secs", quantite: 25, unite: "g" },
      { id: "chapelure", quantite: 25, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire fondre l'oignon haché 5 min dans un peu d'huile. Ajouter l'ail écrasé, le cumin et la coriandre moulue, et cuire encore 2 min.", "Mettre la moitié de ce mélange dans un saladier et laisser refroidir. Ajouter au reste, dans la poêle, la sauce tomate, le sucre, sel et poivre, et laisser réduire 10 min.", "Ajouter dans le saladier la menthe hachée, la viande, les abricots hachés et la chapelure. Saler, poivrer, bien mélanger et former de petites boulettes.", "Les dorer dans le reste d'huile dans une autre poêle. Ajouter la sauce et un fond d'eau et laisser mijoter quelques minutes, jusqu'à ce qu'elles soient cuites. Servir avec du pain pita et une salade."]
  },
  {
    id: "aubergines-au-houmous-gratinees", nom: "Aubergines gratinées au houmous, salade aux noix", cuisine: "turque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53278",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "pain", quantite: 3, unite: "tranche" },
      { id: "houmous", quantite: 200, unite: "g" },
      { id: "noix", quantite: 50, unite: "g", ou: { id: "amandes", quantite: 50, unite: "g" } },
      { id: "persil", quantite: 20, unite: "g" },
      { id: "tomates-cerises", quantite: 200, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les aubergines en tranches, les étaler sur une plaque, les badigeonner légèrement d'huile de tournesol et bien les assaisonner. Les griller 15 min sous le gril du four en les retournant deux fois.", "Pendant ce temps, mixer le pain en chapelure, ajouter 2 cuillères à café d'huile et mixer encore un peu.", "Tartiner chaque tranche d'aubergine d'un peu de houmous, puis appuyer ce côté dans la chapelure. Remettre 3 min sous le gril, chapelure vers le haut, jusqu'à ce qu'elle dore.", "Salade : mélanger les noix, le persil et les tomates cerises coupées en deux, saler, poivrer, puis ajouter le jus d'un demi-citron et l'huile d'olive.", "Servir les aubergines avec la salade, un peu de houmous en plus et du pain pita."]
  },
  {
    id: "baklava-noix-ricotta-chocolat", nom: "Baklava aux noix épicées, ricotta et chocolat", cuisine: "turque",
    difficulte: "difficile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53279",
    ingredients: [
      { id: "pate-filo", quantite: 125, unite: "g" },
      { id: "noix", quantite: 125, unite: "g" },
      { id: "amandes", quantite: 25, unite: "g" },
      { id: "cannelle", quantite: 4, unite: "g" },
      { id: "ricotta", quantite: 125, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "eau", quantite: 160, unite: "ml" },
      { id: "chocolat-noir", quantite: 30, unite: "g", optionnel: true }
    ],
    etapes: ["Sirop : chauffer le sucre et l'eau à feu doux jusqu'à ce que le sucre fonde, puis faire bouillir et laisser frémir 15 min. Ajouter quelques gouttes de jus de citron, cuire encore 5 min et laisser refroidir.", "Faire fondre le beurre à feu doux 5 min en retirant la mousse.", "Concasser les noix et les amandes (en partie finement, en partie en morceaux) et les mélanger avec la cannelle (et une pincée de cardamome si on en a). Mélanger la ricotta avec les zestes du citron et de l'orange (et un peu de vanille si on en a).", "Préchauffer le four à 180 °C et beurrer une plaque. Pour chaque feuille de filo (garder les autres sous un torchon humide) : parsemer de noix, mettre 1 cuillère de ricotta sur un petit côté, replier, puis rouler la feuille autour d'une longue pique. Tasser le rouleau en accordéon, le retirer de la pique et le poser sur la plaque.", "Couper chaque rouleau en 4 morceaux, badigeonner du reste de beurre et cuire 20 à 25 min, jusqu'à ce que ce soit doré.", "Dès la sortie du four, verser le sirop sur les baklavas (ça grésille). Laisser refroidir, puis arroser de chocolat fondu (et de pistaches moulues si on en a). Environ 12 morceaux."]
  }
]);

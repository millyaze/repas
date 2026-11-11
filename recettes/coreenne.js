// ============================================================
// RECETTES : cuisine coréenne (40 recettes, pour 2 personnes)
// Écrites par Claude (TheMealDB n'a aucune recette coréenne).
// Même format que recettes/japonaise.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "bibimbap", nom: "Bibimbap (riz, légumes, bœuf et œuf)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "riz", quantite: 200, unite: "g" },
      { id: "boeuf-hache", quantite: 150, unite: "g" },
      { id: "epinards", quantite: 150, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "champignons-shiitake", quantite: 80, unite: "g", ou: { id: "champignons", quantite: 80, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "gochujang", quantite: 40, unite: "g" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Mélanger le bœuf haché avec la moitié de la sauce soja, le sucre et 1 gousse d'ail écrasée, puis le faire sauter 5 min dans un peu d'huile de tournesol.", "Couper la carotte et la courgette en bâtonnets fins, émincer les champignons shiitaké. Les faire sauter séparément 2 à 3 min chacun dans un peu d'huile de tournesol, avec une pincée de sel.", "Plonger les épinards 1 min dans l'eau bouillante, puis les pousses de soja 3 min. Bien les égoutter et les assaisonner avec le reste d'ail, le reste de sauce soja et la moitié de l'huile de sésame.", "Cuire les œufs au plat.", "Répartir le riz dans deux bols, disposer dessus les légumes et le bœuf en petits tas, poser l'œuf au centre.", "Ajouter le gochujang, le reste d'huile de sésame et les graines de sésame. Bien mélanger avant de manger."]
  },
  {
    id: "bulgogi", nom: "Bulgogi (bœuf mariné sauté)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    ingredients: [
      { id: "steak-de-boeuf", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poire", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le steak de bœuf en tranches très fines (plus facile s'il a passé 30 min au congélateur).", "Mélanger la sauce soja, le sucre, l'ail écrasé, l'huile de sésame, le poivre et une demi-poire râpée (elle attendrit la viande).", "Ajouter le bœuf et l'oignon émincé, bien mélanger et laisser mariner 30 min au frais.", "Chauffer l'huile de tournesol dans une poêle très chaude et saisir la viande 3 à 4 min, en plusieurs fois pour qu'elle dore.", "Parsemer d'oignon nouveau émincé et de graines de sésame. Servir avec du riz si on veut."]
  },
  {
    id: "japchae", nom: "Japchae (nouilles de patate douce aux légumes)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "nouilles-de-patate-douce", quantite: 150, unite: "g", ou: { id: "nouilles-chinoises", quantite: 150, unite: "g" } },
      { id: "steak-de-boeuf", quantite: 100, unite: "g", ou: { id: "boeuf-hache", quantite: 100, unite: "g" } },
      { id: "epinards", quantite: 100, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "champignons-shiitake", quantite: 80, unite: "g", ou: { id: "champignons", quantite: 80, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger la sauce soja, le sucre, l'ail écrasé et l'huile de sésame : c'est la sauce.", "Couper le steak de bœuf en fines lanières et le mélanger avec 1 cuillère à soupe de sauce.", "Cuire les nouilles de patate douce dans l'eau bouillante (6 à 8 min), les rincer à l'eau froide, les égoutter et les couper en deux aux ciseaux.", "Plonger les épinards 1 min dans l'eau bouillante, les égoutter et les presser.", "Faire sauter dans l'huile de tournesol, l'un après l'autre, l'oignon émincé, la carotte et le poivron en fines lanières, les champignons shiitaké émincés, puis le bœuf (2 à 3 min chacun, avec une pincée de sel).", "Tout réunir dans la poêle avec les nouilles et le reste de sauce, mélanger 2 min à feu moyen, poivrer.", "Parsemer de graines de sésame. Se mange chaud ou tiède."]
  },
  {
    id: "kimchi-jjigae", nom: "Kimchi-jjigae (ragoût de kimchi au porc et tofu)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "kimchi", quantite: 250, unite: "g" },
      { id: "poitrine-de-porc", quantite: 150, unite: "g", ou: { id: "lardons", quantite: 150, unite: "g" } },
      { id: "tofu", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "gochujang", quantite: 15, unite: "g", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper la poitrine de porc en petits morceaux et le kimchi en lanières.", "Dans une casserole, faire revenir le porc dans l'huile de sésame 3 min, ajouter le kimchi et cuire encore 5 min en remuant.", "Ajouter l'oignon émincé, l'ail écrasé, le gochugaru, la sauce soja, le gochujang et l'eau.", "Porter à ébullition, puis laisser mijoter 15 min à feu moyen.", "Ajouter le tofu coupé en tranches épaisses et cuire encore 5 min.", "Parsemer d'oignon nouveau émincé. Servir bien chaud, avec du riz si on veut."]
  },
  {
    id: "riz-saute-au-kimchi", nom: "Riz sauté au kimchi (kimchi-bokkeumbap)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "riz", quantite: 200, unite: "g" },
      { id: "kimchi", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gochujang", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "lardons", quantite: 80, unite: "g", optionnel: true },
      { id: "algue-nori", quantite: 1, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Cuire le riz et le laisser refroidir (l'idéal : du riz cuit la veille).", "Faire revenir l'oignon émincé et les lardons dans l'huile de tournesol 3 min.", "Ajouter le kimchi coupé en petits morceaux et cuire 4 min.", "Ajouter le riz, le gochujang et la sauce soja, puis faire sauter 4 à 5 min en mélangeant bien.", "Hors du feu, ajouter l'huile de sésame.", "Cuire les œufs au plat et les poser sur le riz. Parsemer d'algue nori en lanières et de graines de sésame."]
  },
  {
    id: "tteokbokki", nom: "Tteokbokki (gâteaux de riz sauce pimentée)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "gateaux-de-riz", quantite: 300, unite: "g" },
      { id: "gochujang", quantite: 40, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "galettes-de-poisson", quantite: 100, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Si les gâteaux de riz sont durs, les faire tremper 10 min dans l'eau tiède.", "Si on met des œufs : les cuire durs (10 min) et les écaler.", "Dans une poêle profonde, dissoudre le bouillon cube dans l'eau chaude, puis ajouter le gochujang, le gochugaru, le sucre, la sauce soja et l'ail écrasé.", "Porter à ébullition, ajouter les gâteaux de riz et les galettes de poisson coupées en triangles.", "Cuire 8 à 10 min à feu moyen en remuant souvent : la sauce doit épaissir et les gâteaux de riz devenir tendres.", "Ajouter les œufs durs et l'oignon nouveau émincé, parsemer de graines de sésame."]
  },
  {
    id: "poulet-frit-coreen", nom: "Poulet frit coréen sauce pimentée (yangnyeom)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "fecule", quantite: 60, unite: "g", ou: { id: "farine", quantite: 60, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" },
      { id: "gochujang", quantite: 30, unite: "g" },
      { id: "ketchup", quantite: 30, unite: "g" },
      { id: "miel", quantite: 30, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "vinaigre-de-riz", quantite: 10, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Désosser les cuisses de poulet et les couper en morceaux d'une bouchée. Saler, poivrer, puis les rouler dans la fécule.", "Chauffer l'huile dans une casserole à fond épais (environ 170 °C).", "Frire le poulet en plusieurs fois, 5 à 6 min, puis l'égoutter sur du papier absorbant.", "Pour un poulet bien croustillant, le replonger 2 min dans l'huile très chaude.", "Sauce : dans une poêle, chauffer 2 min à feu doux le gochujang, le ketchup, le miel, la sauce soja, l'ail écrasé et le vinaigre de riz.", "Ajouter le poulet dans la sauce, bien l'enrober et parsemer de graines de sésame."]
  },
  {
    id: "dakgalbi", nom: "Dakgalbi (poulet sauté pimenté au chou)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "chou", quantite: 250, unite: "g" },
      { id: "patate-douce", quantite: 200, unite: "g", ou: { id: "pomme-de-terre", quantite: 200, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gochujang", quantite: 45, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "gateaux-de-riz", quantite: 100, unite: "g", optionnel: true },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger le gochujang, le gochugaru, la sauce soja, le sucre, l'ail écrasé et le gingembre râpé.", "Désosser les cuisses de poulet, les couper en morceaux, les mélanger à la sauce et laisser mariner 30 min au frais.", "Couper le chou en gros morceaux, l'oignon en lamelles et la patate douce en bâtonnets fins.", "Chauffer l'huile dans une grande poêle, ajouter le poulet, la patate douce et les gâteaux de riz, cuire 8 min en remuant.", "Ajouter le chou et l'oignon, puis cuire encore 8 à 10 min : le poulet doit être cuit à cœur et la patate douce tendre (ajouter un peu d'eau si ça accroche).", "Parsemer de graines de sésame."]
  },
  {
    id: "jeyuk-bokkeum", nom: "Jeyuk-bokkeum (porc sauté pimenté)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "poitrine-de-porc", quantite: 300, unite: "g", ou: { id: "cote-de-porc", quantite: 2, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "gochujang", quantite: 40, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper la poitrine de porc en tranches fines.", "Mélanger le gochujang, le gochugaru, la sauce soja, le sucre, l'ail écrasé, le gingembre râpé et l'huile de sésame.", "Ajouter le porc, bien l'enrober et laisser mariner 20 min.", "Chauffer l'huile de tournesol dans une poêle bien chaude et faire sauter le porc 5 min.", "Ajouter l'oignon en lamelles et la carotte en fines rondelles, puis cuire encore 5 min.", "Ajouter l'oignon nouveau émincé. Servir avec du riz, ou enroulé dans des feuilles de salade verte."]
  },
  {
    id: "sundubu-jjigae", nom: "Sundubu-jjigae (ragoût de tofu soyeux aux crevettes)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "tofu-soyeux", quantite: 300, unite: "g", ou: { id: "tofu", quantite: 300, unite: "g" } },
      { id: "crevettes", quantite: 100, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gochugaru", quantite: 10, unite: "g", ou: { id: "piment-en-poudre", quantite: 5, unite: "g" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole, chauffer l'huile de sésame à feu doux avec l'oignon émincé, l'ail écrasé et le gochugaru pendant 2 min, sans laisser brûler.", "Ajouter l'eau, le bouillon cube et la sauce soja, puis porter à ébullition.", "Ajouter la courgette coupée en demi-rondelles et cuire 5 min.", "Ajouter le tofu soyeux par grosses cuillerées et les crevettes, cuire encore 4 min. Saler si besoin.", "Casser les œufs dans le ragoût bouillant et cuire 1 à 2 min sans remuer.", "Parsemer d'oignon nouveau émincé et servir très chaud."]
  },
  {
    id: "doenjang-jjigae", nom: "Doenjang-jjigae (ragoût à la pâte de soja)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "doenjang", quantite: 45, unite: "g" },
      { id: "tofu", quantite: 200, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 80, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "gochugaru", quantite: 3, unite: "g", optionnel: true, ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Porter l'eau à ébullition avec le bouillon cube, puis y délayer le doenjang.", "Ajouter la pomme de terre coupée en petits dés et l'oignon émincé, cuire 8 min.", "Ajouter la courgette en demi-rondelles, les champignons émincés, l'ail écrasé et le gochugaru, cuire 6 min.", "Ajouter le tofu coupé en dés et le piment frais émincé, cuire encore 3 min.", "Parsemer d'oignon nouveau émincé. Se mange bien chaud, avec du riz."]
  },
  {
    id: "pajeon", nom: "Pajeon (galette aux oignons nouveaux)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "oignon-nouveau", quantite: 8, unite: "pièce", ou: { id: "poireau", quantite: 1, unite: "pièce" } },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 10, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } },
      { id: "fecule", quantite: 20, unite: "g", optionnel: true },
      { id: "crevettes", quantite: 100, unite: "g", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mélanger la farine, la fécule, le sel, l'œuf et l'eau bien froide : la pâte doit être lisse et assez liquide.", "Couper les oignons nouveaux en tronçons de la largeur de la poêle (si on utilise un poireau : en fines lanières).", "Chauffer la moitié de l'huile dans une poêle, y étaler la moitié des oignons nouveaux, verser dessus la moitié de la pâte et répartir la moitié des crevettes.", "Cuire 3 à 4 min à feu moyen, retourner la galette, appuyer avec la spatule et cuire encore 3 min : elle doit être dorée et croustillante.", "Faire la deuxième galette de la même façon.", "Sauce : mélanger la sauce soja, le vinaigre de riz et les graines de sésame. Couper les galettes en parts et les tremper dans la sauce."]
  },
  {
    id: "kimchi-jeon", nom: "Kimchi-jeon (galette au kimchi)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "kimchi", quantite: 200, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 10, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } }
    ],
    etapes: ["Couper le kimchi en petits morceaux, en gardant son jus. Émincer finement un demi-oignon.", "Mélanger la farine, l'eau froide, le sucre, le kimchi avec son jus et l'oignon.", "Chauffer la moitié de l'huile dans une poêle, verser la moitié de la pâte et l'étaler finement.", "Cuire 3 à 4 min de chaque côté à feu moyen : la galette doit être bien dorée et croustillante sur les bords.", "Faire la deuxième galette de la même façon.", "Servir avec la sauce soja mélangée au vinaigre de riz."]
  },
  {
    id: "gyeran-jjim", nom: "Gyeran-jjim (œufs vapeur)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "carotte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 2, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Battre les œufs avec l'eau, la sauce soja et le sel.", "Ajouter un peu de carotte coupée en tout petits dés et l'oignon nouveau émincé.", "Verser dans une petite casserole à fond épais et chauffer à feu moyen en remuant doucement, jusqu'à ce que les œufs commencent à prendre (3 à 4 min).", "Baisser le feu au minimum, couvrir et cuire 4 à 5 min sans toucher : les œufs gonflent et deviennent moelleux.", "Arroser d'huile de sésame, parsemer de graines de sésame et servir tout de suite."]
  },
  {
    id: "gyeran-mari", nom: "Gyeran-mari (omelette roulée)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", ou: { id: "ciboulette", quantite: 5, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "jambon", quantite: 1, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Battre les œufs avec le sel. Ajouter une demi-carotte coupée en tout petits dés, l'oignon nouveau émincé et le jambon haché.", "Huiler légèrement une poêle et la chauffer à feu doux.", "Verser un tiers des œufs. Quand ils sont presque pris, rouler l'omelette sur elle-même jusqu'au bord de la poêle.", "Verser un autre tiers des œufs à côté du rouleau, laisser prendre, puis rouler dans l'autre sens. Recommencer avec le reste.", "Laisser reposer 2 min, puis couper en tranches épaisses."]
  },
  {
    id: "kimbap", nom: "Kimbap (rouleaux de riz aux algues)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "riz", quantite: 250, unite: "g" },
      { id: "algue-nori", quantite: 3, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "epinards", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "radis-jaune-marine", quantite: 80, unite: "g", optionnel: true, ou: { id: "cornichons", quantite: 50, unite: "g" } },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Cuire le riz, puis le mélanger encore tiède avec une pincée de sel et les deux tiers de l'huile de sésame.", "Battre les œufs, les cuire en omelette fine dans un peu d'huile de tournesol, puis la couper en lanières.", "Couper la carotte en fins bâtonnets et la faire sauter 2 min. Plonger les épinards 1 min dans l'eau bouillante, les égoutter et les presser.", "Couper le concombre, le jambon et le radis jaune mariné en longs bâtonnets.", "Poser une feuille d'algue nori, étaler dessus une fine couche de riz en laissant 3 cm libres en haut, puis aligner les garnitures au milieu.", "Rouler bien serré (un torchon propre ou une natte aide), puis coller le bord avec quelques grains de riz.", "Badigeonner les rouleaux du reste d'huile de sésame, parsemer de graines de sésame et couper en tranches de 1 à 2 cm."]
  },
  {
    id: "dakjuk", nom: "Dakjuk (bouillie de riz au poulet)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    ingredients: [
      { id: "riz", quantite: 120, unite: "g" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "gingembre", quantite: 5, unite: "g", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Rincer le riz et le laisser tremper dans l'eau froide pendant la cuisson du poulet.", "Mettre les cuisses de poulet dans l'eau avec l'ail entier, l'oignon coupé en deux et le gingembre. Porter à ébullition, puis laisser mijoter 25 min.", "Sortir le poulet et l'effilocher à la fourchette. Filtrer le bouillon et le garder.", "Dans la casserole, faire revenir 2 min le riz égoutté et la carotte coupée en tout petits dés dans l'huile de sésame.", "Verser le bouillon et cuire 20 min à feu doux en remuant souvent : le riz doit devenir très tendre et crémeux.", "Ajouter le poulet, saler, poivrer et parsemer d'oignon nouveau émincé."]
  },
  {
    id: "miyeok-guk", nom: "Miyeok-guk (soupe d'algues au bœuf)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "algue-wakame", quantite: 15, unite: "g" },
      { id: "steak-de-boeuf", quantite: 120, unite: "g", ou: { id: "boeuf-hache", quantite: 120, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire tremper l'algue wakame séchée 10 min dans l'eau froide, l'égoutter et la couper en morceaux.", "Couper le steak de bœuf en petits morceaux.", "Dans une casserole, faire revenir le bœuf dans l'huile de sésame 2 min, ajouter l'algue et la moitié de la sauce soja, cuire encore 2 min.", "Verser l'eau, porter à ébullition, puis laisser mijoter 20 min à feu doux.", "Ajouter l'ail écrasé et le reste de sauce soja, saler et cuire encore 2 min.", "Servir bien chaud, avec du riz si on veut."]
  },
  {
    id: "bol-de-riz-au-thon-mayo", nom: "Bol de riz au thon-mayo (chamchi-mayo deopbap)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "riz", quantite: 200, unite: "g" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "mayonnaise", quantite: 40, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "algue-nori", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Cuire le riz.", "Égoutter le thon et le mélanger avec la mayonnaise.", "Battre les œufs et les cuire en œufs brouillés dans l'huile de tournesol.", "Répartir le riz dans deux bols, l'arroser de sauce soja et d'huile de sésame.", "Poser dessus les œufs brouillés et le thon-mayo.", "Ajouter l'algue nori coupée en lanières, l'oignon nouveau émincé et les graines de sésame. Mélanger avant de manger."]
  },
  {
    id: "concombre-epice", nom: "Concombre épicé (oi-muchim)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre-de-riz", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper le concombre en rondelles fines, le saler et le laisser dégorger 5 min, puis l'égoutter.", "Mélanger le gochugaru, l'ail écrasé, le vinaigre de riz, la sauce soja, le sucre et l'huile de sésame.", "Ajouter le concombre et l'oignon nouveau émincé, bien mélanger.", "Parsemer de graines de sésame. Se mange tout de suite, en accompagnement."]
  },

  // ---------- Lot 2 ----------
  {
    id: "galbi-jjim", nom: "Galbi-jjim (côtes de bœuf braisées)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    ingredients: [
      { id: "cotes-de-boeuf-galbi", quantite: 600, unite: "g" },
      { id: "radis-blanc-daikon", quantite: 250, unite: "g", ou: { id: "carotte", quantite: 2, unite: "pièce" } },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 60, unite: "ml" },
      { id: "sucre", quantite: 30, unite: "g", ou: { id: "sirop-de-riz", quantite: 30, unite: "g" } },
      { id: "ail", quantite: 5, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "poire", quantite: 1, unite: "pièce", optionnel: true },
      { id: "jujubes", quantite: 4, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tremper les côtes 30 min dans l'eau froide pour enlever le sang, puis les égoutter.", "Les blanchir 5 min dans l'eau bouillante, les égoutter et les rincer.", "Mélanger la sauce soja, le sucre, l'ail écrasé, le gingembre râpé, l'huile de sésame, le poivre et la poire râpée.", "Mettre les côtes dans une grande casserole avec la sauce et l'eau, porter à ébullition, puis laisser mijoter 1 h à couvert.", "Ajouter le radis, la carotte et la pomme de terre en gros morceaux, l'oignon en quartiers et les jujubes. Cuire encore 30 à 40 min jusqu'à ce que la viande se détache de l'os et que la sauce épaississe.", "Arroser les côtes de sauce avant de servir, avec du riz."]
  },
  {
    id: "samgyetang", nom: "Samgyetang (soupe de poulet au riz gluant)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    ingredients: [
      { id: "poulet-entier", quantite: 1, unite: "pièce" },
      { id: "riz-gluant", quantite: 80, unite: "g", ou: { id: "riz", quantite: 80, unite: "g" } },
      { id: "ail", quantite: 8, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g", optionnel: true },
      { id: "jujubes", quantite: 4, unite: "pièce", optionnel: true },
      { id: "ginseng", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Rincer le riz gluant et le laisser tremper 30 min, puis l'égoutter.", "Remplir l'intérieur du poulet avec le riz, 3 gousses d'ail, le ginseng et 2 jujubes. Fermer l'ouverture avec un pic ou en croisant les cuisses.", "Mettre le poulet dans une grande casserole avec le reste d'ail, de jujubes et le gingembre. Couvrir d'eau.", "Porter à ébullition, puis laisser mijoter 1 h à couvert à feu doux, jusqu'à ce que le poulet soit très tendre.", "Servir chaque personne avec un morceau de poulet et du bouillon, saler et poivrer à table, parsemer d'oignon nouveau émincé."]
  },
  {
    id: "bossam", nom: "Bossam (porc bouilli en feuilles de salade)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    ingredients: [
      { id: "poitrine-de-porc", quantite: 600, unite: "g" },
      { id: "doenjang", quantite: 30, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 5, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ssamjang", quantite: 40, unite: "g", ou: { id: "gochujang", quantite: 20, unite: "g" } },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "feuilles-de-perilla", quantite: 8, unite: "pièce", optionnel: true },
      { id: "kimchi", quantite: 150, unite: "g", optionnel: true },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter l'eau à ébullition avec le doenjang, l'oignon coupé en deux, 3 gousses d'ail et le gingembre.", "Y plonger la poitrine de porc entière et cuire 50 à 60 min à feu moyen, à couvert.", "Laisser la viande reposer 10 min dans le bouillon, puis la couper en tranches de 5 mm.", "Laver et égoutter les feuilles de salade et de périlla. Trancher le reste de l'ail en lamelles.", "Pour manger : poser une tranche de porc sur une feuille de salade, ajouter un peu de ssamjang, une lamelle d'ail et un peu de kimchi, puis rouler et manger en une bouchée."]
  },
  {
    id: "jjajangmyeon", nom: "Jjajangmyeon (nouilles à la sauce de haricots noirs)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "nouilles-udon", quantite: 300, unite: "g", ou: { id: "nouilles-chinoises", quantite: 300, unite: "g" } },
      { id: "pate-de-haricots-noirs-chunjang", quantite: 60, unite: "g", ou: { id: "doenjang", quantite: 40, unite: "g" } },
      { id: "poitrine-de-porc", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "fecule", quantite: 10, unite: "g", ou: { id: "farine", quantite: 10, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "concombre", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 300, unite: "ml" }
    ],
    etapes: ["Couper le porc, l'oignon, la courgette et la pomme de terre en dés d'1 cm.", "Faire chauffer l'huile dans une poêle, y faire revenir 2 min la pâte de haricots noirs à feu doux (elle perd son amertume), puis la retirer avec l'huile.", "Dans la même poêle, saisir le porc et l'ail écrasé 3 min, puis ajouter l'oignon et la pomme de terre, cuire 5 min.", "Ajouter la courgette, la pâte de haricots avec son huile, le sucre et la sauce soja, puis l'eau. Mijoter 10 min.", "Délayer la fécule dans un peu d'eau froide, la verser dans la sauce et remuer 1 min jusqu'à ce qu'elle épaississe.", "Cuire les nouilles selon le paquet, les égoutter, les répartir dans deux bols et napper de sauce. Ajouter du concombre en fins bâtonnets."]
  },
  {
    id: "budae-jjigae", nom: "Budae-jjigae (ragoût de l'armée : spam, saucisses, kimchi)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "spam-jambon-en-boite", quantite: 100, unite: "g", ou: { id: "jambon", quantite: 2, unite: "tranche" } },
      { id: "saucisse", quantite: 2, unite: "pièce" },
      { id: "kimchi", quantite: 150, unite: "g" },
      { id: "tofu", quantite: 150, unite: "g" },
      { id: "nouilles-ramyeon", quantite: 1, unite: "pièce", ou: { id: "nouilles-chinoises", quantite: 100, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gochujang", quantite: 20, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "champignons", quantite: 80, unite: "g", optionnel: true },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 600, unite: "ml" }
    ],
    etapes: ["Couper le spam, les saucisses et le tofu en tranches, l'oignon en lamelles.", "Mélanger le gochujang, le gochugaru, la sauce soja et l'ail écrasé : c'est la sauce.", "Dans une casserole large, ranger en tas le spam, les saucisses, le tofu, le kimchi, l'oignon et les champignons. Déposer la sauce au centre.", "Verser l'eau, porter à ébullition, puis laisser mijoter 12 min.", "Ajouter les haricots blancs et les nouilles ramyeon, cuire 3 min de plus jusqu'à ce que les nouilles soient tendres.", "Parsemer d'oignon nouveau émincé et manger tout de suite, directement dans la casserole."]
  },
  {
    id: "mandu-guk", nom: "Mandu-guk (soupe de raviolis)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "mandu-raviolis-coreens", quantite: 12, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "algue-nori", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter l'eau à ébullition avec le bouillon cube, la sauce soja et l'ail écrasé.", "Ajouter les mandu (surgelés, sans les décongeler) et cuire 6 à 8 min : ils remontent à la surface quand ils sont cuits.", "Battre l'œuf et le verser en filet dans la soupe en remuant doucement.", "Saler, poivrer, arroser d'huile de sésame.", "Servir avec l'oignon nouveau émincé et l'algue nori en lanières."]
  },
  {
    id: "naengmyeon", nom: "Naengmyeon (nouilles froides de sarrasin)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "nouilles-de-sarrasin", quantite: 200, unite: "g", ou: { id: "nouilles-somen", quantite: 200, unite: "g" } },
      { id: "bouillon-cube", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 30, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "poire", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "moutarde", quantite: 5, unite: "g", optionnel: true },
      { id: "radis-blanc-daikon", quantite: 80, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préparer le bouillon : dissoudre les cubes dans l'eau bouillante, ajouter la sauce soja, le vinaigre de riz, le sucre et le sel. Laisser refroidir, puis mettre 2 h au congélateur (jusqu'à ce qu'il soit glacé et un peu pris).", "Cuire les œufs durs 10 min, les rafraîchir et les couper en deux.", "Couper le concombre en bâtonnets, la poire en fines tranches et le radis en lamelles.", "Cuire les nouilles selon le paquet, les rincer longuement à l'eau très froide en les frottant, puis bien les égoutter.", "Répartir les nouilles dans deux bols, verser le bouillon glacé, disposer dessus concombre, poire, radis et œuf. Ajouter un peu de moutarde et de vinaigre à table."]
  },
  {
    id: "bibim-guksu", nom: "Bibim-guksu (nouilles froides pimentées)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "nouilles-somen", quantite: 160, unite: "g", ou: { id: "nouilles-udon", quantite: 200, unite: "g" } },
      { id: "gochujang", quantite: 40, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "vinaigre-de-riz", quantite: 20, unite: "ml", ou: { id: "vinaigre", quantite: 20, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "kimchi", quantite: 100, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Si on met des œufs : les cuire durs (10 min), les écaler et les couper en deux.", "Mélanger le gochujang, le gochugaru, le vinaigre de riz, le sucre, la sauce soja, l'huile de sésame et l'ail écrasé : c'est la sauce.", "Cuire les nouilles selon le paquet, les rincer très longuement à l'eau froide et les égoutter à fond.", "Couper le concombre en bâtonnets fins et le kimchi en petits morceaux.", "Mélanger les nouilles avec la sauce, répartir dans deux bols, ajouter concombre, kimchi et œuf, parsemer de graines de sésame."]
  },
  {
    id: "kalguksu", nom: "Kalguksu (soupe de nouilles au poulet)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "nouilles-udon", quantite: 250, unite: "g", ou: { id: "pates", quantite: 200, unite: "g" } },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 900, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter l'eau à ébullition avec le bouillon cube, l'oignon coupé en deux et l'ail. Ajouter le blanc de poulet et cuire 15 min.", "Sortir le poulet et l'effilocher. Retirer l'oignon.", "Ajouter dans le bouillon la pomme de terre en fines tranches, cuire 5 min.", "Ajouter les nouilles et la courgette en demi-rondelles, cuire 5 min.", "Remettre le poulet, ajouter la sauce soja, saler et poivrer. Verser l'œuf battu en filet si on en met.", "Servir avec de l'oignon nouveau émincé."]
  },
  {
    id: "ramyeon-kimchi", nom: "Ramyeon au kimchi et à l'œuf", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "nouilles-ramyeon", quantite: 2, unite: "pièce", ou: { id: "nouilles-chinoises", quantite: 200, unite: "g" } },
      { id: "kimchi", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gochugaru", quantite: 3, unite: "g", optionnel: true, ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "tofu", quantite: 100, unite: "g", optionnel: true },
      { id: "eau", quantite: 600, unite: "ml" }
    ],
    etapes: ["Porter l'eau à ébullition avec le bouillon cube, le kimchi coupé en morceaux, l'ail écrasé, la sauce soja et le gochugaru. Laisser bouillir 5 min.", "Ajouter le tofu en dés et les nouilles (avec leur sachet d'assaisonnement si on en a), cuire 3 min.", "Casser les œufs dans le bouillon et cuire 1 à 2 min sans remuer.", "Parsemer d'oignon nouveau émincé et servir très chaud."]
  },
  {
    id: "tteokguk", nom: "Tteokguk (soupe de gâteaux de riz au bœuf)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "gateaux-de-riz", quantite: 300, unite: "g" },
      { id: "steak-de-boeuf", quantite: 100, unite: "g", ou: { id: "boeuf-hache", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "algue-nori", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tremper les gâteaux de riz 20 min dans l'eau froide, puis les égoutter.", "Couper le bœuf en petits morceaux et le faire revenir 2 min dans l'huile de sésame, avec l'ail écrasé.", "Verser l'eau et la sauce soja, porter à ébullition et laisser mijoter 15 min.", "Ajouter les gâteaux de riz et cuire 7 à 8 min : ils deviennent mous et flottent.", "Battre les œufs et les verser en filet, remuer doucement. Saler, poivrer.", "Servir avec l'oignon nouveau émincé et l'algue nori en lanières."]
  },
  {
    id: "kongnamul-guk", nom: "Kongnamul-guk (soupe de pousses de soja)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pousses-de-soja", quantite: 250, unite: "g" },
      { id: "anchois-seches", quantite: 15, unite: "g", ou: { id: "bouillon-cube", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "gochugaru", quantite: 3, unite: "g", optionnel: true, ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Faire bouillir l'eau avec les anchois séchés (ou le bouillon cube) pendant 8 min, puis retirer les anchois.", "Laver les pousses de soja et les ajouter au bouillon, couvrir et cuire 8 min sans soulever le couvercle (sinon elles gardent un goût de cru).", "Ajouter l'ail écrasé, la sauce soja et le gochugaru, saler.", "Cuire encore 2 min, parsemer d'oignon nouveau émincé. Se mange très chaud, avec du riz si on veut."]
  },
  {
    id: "myeolchi-bokkeum", nom: "Myeolchi-bokkeum (anchois séchés sautés)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "anchois-seches", quantite: 60, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "sirop-de-riz", quantite: 20, unite: "g", ou: { id: "miel", quantite: 20, unite: "g" } },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } }
    ],
    etapes: ["Faire sauter les anchois à sec 2 min dans une poêle antiadhésive, pour qu'ils soient croustillants. Les mettre de côté.", "Dans la même poêle, chauffer l'huile avec l'ail en lamelles et le piment émincé 1 min.", "Ajouter la sauce soja, le sucre et le sirop de riz, laisser bouillonner 1 min.", "Remettre les anchois, mélanger vite pour bien les enrober, puis éteindre le feu.", "Ajouter l'huile de sésame et les graines de sésame. Se mange en accompagnement avec du riz."]
  },
  {
    id: "ojingeo-bokkeum", nom: "Ojingeo-bokkeum (calmar sauté pimenté)", cuisine: "coréenne",
    difficulte: "moyen", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "calmar", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 100, unite: "g", optionnel: true },
      { id: "gochujang", quantite: 30, unite: "g" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Nettoyer le calmar, le couper en anneaux et les tentacules en deux. Les rincer et bien les égoutter.", "Mélanger le gochujang, le gochugaru, la sauce soja, le sucre et l'ail écrasé : c'est la sauce.", "Chauffer l'huile dans une grande poêle très chaude, y faire sauter l'oignon, la carotte et le chou émincés 3 min.", "Ajouter le calmar et la sauce, sauter 3 à 4 min à feu vif (pas plus, sinon il devient caoutchouteux).", "Ajouter l'oignon nouveau émincé et l'huile de sésame. Servir avec du riz."]
  },
  {
    id: "saewoo-bokkeum", nom: "Saewoo-bokkeum (crevettes sautées au gochujang)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "gochujang", quantite: 20, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "miel", quantite: 10, unite: "g", ou: { id: "sirop-de-riz", quantite: 10, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger le gochujang, la sauce soja, le miel et l'ail écrasé.", "Chauffer l'huile dans une poêle bien chaude, sauter les crevettes 2 min jusqu'à ce qu'elles rosissent.", "Ajouter la sauce et cuire encore 2 min en remuant : elle doit napper les crevettes.", "Parsemer d'oignon nouveau émincé et de graines de sésame. Servir avec du riz."]
  },
  {
    id: "gamja-jorim", nom: "Gamja-jorim (pommes de terre braisées)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sirop-de-riz", quantite: 20, unite: "g", ou: { id: "sucre", quantite: 15, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Couper les pommes de terre en cubes de 2 cm et les rincer à l'eau froide.", "Les faire dorer 3 min dans l'huile, avec l'ail écrasé.", "Ajouter l'eau, la sauce soja, le sirop de riz et le piment émincé.", "Porter à ébullition, puis cuire 15 min à feu moyen en remuant de temps en temps, jusqu'à ce que la sauce soit presque évaporée et brillante.", "Ajouter l'huile de sésame et les graines de sésame."]
  },
  {
    id: "hobak-jeon", nom: "Hobak-jeon (courgette poêlée à l'œuf)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "courgette", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 10, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper les courgettes en rondelles de 5 mm, les saler et les laisser dégorger 5 min. Les éponger.", "Battre les œufs avec une pincée de sel.", "Passer chaque rondelle dans la farine, puis dans l'œuf battu.", "Les cuire dans l'huile chaude 2 à 3 min de chaque côté, à feu moyen, jusqu'à ce qu'elles soient dorées.", "Servir avec la sauce soja mélangée au vinaigre de riz."]
  },
  {
    id: "dubu-jorim", nom: "Dubu-jorim (tofu braisé à la sauce piquante)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "tofu", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "gochugaru", quantite: 5, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true, ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Couper le tofu en tranches de 1 cm et bien les éponger avec du papier absorbant.", "Les faire dorer 3 min de chaque côté dans l'huile, puis les ranger dans la poêle.", "Mélanger la sauce soja, le gochugaru, l'ail écrasé, le sucre, l'eau et l'oignon nouveau émincé.", "Verser la sauce sur le tofu et cuire 8 à 10 min à feu doux, en arrosant avec la sauce, jusqu'à ce qu'elle réduise.", "Ajouter l'huile de sésame et les graines de sésame."]
  },
  {
    id: "sigeumchi-namul", nom: "Sigeumchi-namul (épinards assaisonnés)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "epinards", quantite: 250, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Plonger les épinards 1 min dans l'eau bouillante salée, puis les rafraîchir à l'eau froide.", "Les presser fermement pour enlever toute l'eau, puis les couper en deux.", "Les mélanger avec l'ail écrasé, la sauce soja et l'huile de sésame, en les défaisant avec les doigts.", "Parsemer de graines de sésame. Se mange tiède ou froid, en accompagnement."]
  },
  {
    id: "gaji-namul", nom: "Gaji-namul (aubergine vapeur assaisonnée)", cuisine: "coréenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "gochugaru", quantite: 3, unite: "g", optionnel: true, ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Couper les aubergines en deux dans la longueur, puis en bâtonnets de la taille d'un doigt.", "Les cuire 8 à 10 min à la vapeur (ou au micro-ondes couvert, 5 min), jusqu'à ce qu'elles soient très tendres.", "Les laisser tiédir, puis les égoutter en les pressant doucement.", "Mélanger avec la sauce soja, l'ail écrasé, l'huile de sésame, l'oignon nouveau émincé et le gochugaru.", "Parsemer de graines de sésame. Se mange tiède ou froid."]
  }
]);

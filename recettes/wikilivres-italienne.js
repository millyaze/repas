// ============================================================
// RECETTES : cuisine italienne, reprises de Wikilivres (32 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "calzone-aux-oignons-et-anchois", nom: "Calzone (chausson de pizza aux oignons, olives et anchois)", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Calzone",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCalzone",
    ingredients: [
      { id: "farine", quantite: 160, unite: "g" },
      { id: "levure-de-boulanger", quantite: 8, unite: "g" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "olives-noires", quantite: 50, unite: "g" },
      { id: "capres", quantite: 20, unite: "g" },
      { id: "anchois", quantite: 8, unite: "g" },
      { id: "origan", quantite: 3, unite: "g" },
      { id: "pecorino", quantite: 25, unite: "g" },
      { id: "mozzarella", quantite: 50, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Mélanger la farine, la levure, 15 ml d'huile d'olive, une pincée de sel et l'eau tiède. Pétrir en boule, l'étaler en disque épais et laisser lever 30 minutes.", "Éplucher les oignons et les émincer. Les faire rissoler dans une casserole avec le reste de l'huile d'olive.", "Couper les tomates pelées en petites tranches, émincer les anchois.", "Ajouter aux oignons les tomates, les olives, les câpres, les anchois, l'origan et un peu de sel. Cuire 3 minutes, puis retirer du feu.", "Ajouter le pecorino râpé et la mozzarella tranchée à la farce.", "Préchauffer le four à 200 °C.", "Étirer la pâte en cercle, garnir une moitié de farce, replier en demi-cercle et souder les bords à la fourchette.", "Poser le calzone sur une plaque huilée et cuire 30 minutes. Servir aussitôt."]
  },
  {
    id: "calzone-aux-aubergines", nom: "Calzone aux aubergines", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Pizza Calzone aux aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_Calzone_aux_aubergines",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "tomates-sechees", quantite: 50, unite: "g" },
      { id: "origan", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Couper l'aubergine en petits dés, les mettre dans une passoire, les saupoudrer de sel et les laisser dégorger 20 min. Les rincer.", "Faire revenir l'oignon émincé et l'ail haché dans l'huile d'olive. Ajouter l'aubergine, les tomates séchées en lamelles, l'origan et le poivre, et laisser mijoter une vingtaine de minutes.", "Préchauffer le four à 235 °C. Couper la pâte (environ 250 g de pâte à pain) en deux et étaler chaque morceau en cercle au rouleau.", "Mettre la garniture sur une moitié de chaque cercle, rabattre la pâte et souder les bords en appuyant.", "Poser les calzones sur une plaque huilée et cuire 20 min."]
  },
  {
    id: "gnocchi-de-pommes-de-terre", nom: "Gnocchi de pommes de terre", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Gnocchi",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGnocchi",
    ingredients: [
      { id: "pomme-de-terre", quantite: 700, unite: "g" },
      { id: "farine", quantite: 140, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "eau", quantite: 2000, unite: "ml" }
    ],
    etapes: ["Cuire 700 g de pommes de terre avec la peau dans l'eau bouillante (ou au four, pour une pâte moins humide et moins collante), puis les éplucher et les écraser au presse-purée.", "Mélanger la purée avec 140 g de farine (1/5 du poids des pommes de terre), l'œuf et un filet d'huile d'olive.", "Former une grosse boule, puis façonner de petits cylindres d'environ 2 cm de long et les poser côte à côte.", "Écraser légèrement chaque cylindre avec une fourchette pour lui donner sa forme.", "Cuire les gnocchis dans une grande casserole d'eau salée : ils sont cuits quand ils remontent à la surface."]
  },
  {
    id: "lasagnes-au-tofu-epinards-champignons", nom: "Lasagnes végétales au tofu, aux épinards et aux champignons", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 95, portions: 2,
    source: "Wikilivres", idSource: "Lasagnes au tofu",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FLasagnes_au_tofu",
    ingredients: [
      { id: "feuilles-de-lasagne", quantite: 6, unite: "pièce" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "champignons", quantite: 250, unite: "g" },
      { id: "sauce-tomate", quantite: 300, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "origan", quantite: 3, unite: "g" },
      { id: "epinards", quantite: 350, unite: "g" },
      { id: "tofu", quantite: 375, unite: "g" },
      { id: "persil", quantite: 8, unite: "g" },
      { id: "lait-de-soja", quantite: 200, unite: "ml" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les feuilles de lasagne selon les indications du paquet.", "Dans une casserole, chauffer 10 ml d'huile et y faire revenir l'oignon haché et l'ail émincé.", "Ajouter les champignons tranchés et cuire 2 minutes en remuant.", "Verser la sauce tomate, ajouter le laurier et l'origan, et laisser mijoter jusqu'à ce que la sauce épaississe. Hors du feu, ajouter la moitié du persil haché.", "Dans un grand bol, mélanger les épinards cuits, égouttés et hachés avec le tofu émietté et le reste du persil.", "Préparer la béchamel végétale : chauffer le reste d'huile avec la farine, verser le lait de soja en remuant jusqu'à épaississement, saler et poivrer.", "Préchauffer le four à 175 °C. Dans un plat d'environ 20 x 20 cm, étaler un peu de sauce tomate, couvrir de feuilles de lasagne, étendre la moitié du mélange épinards-tofu et bien tasser.", "Recommencer : feuilles, sauce tomate, puis le reste d'épinards-tofu, et terminer par des feuilles de lasagne et le reste de sauce tomate.", "Étendre la béchamel sur le dessus et cuire environ 50 minutes, jusqu'à ce que le dessus soit doré.", "Laisser reposer 15 minutes avant de servir."]
  },
  {
    id: "nouilles-fraiches-maison", nom: "Nouilles fraîches maison", cuisine: "italienne", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Nouilles fraîches",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNouilles_fra%C3%AEches",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "eau", quantite: 90, unite: "ml" }
    ],
    etapes: ["Mélanger la farine, l'huile et le sel dans un saladier, puis ajouter l'eau peu à peu jusqu'à obtenir une pâte ferme.", "Pétrir quelques minutes en ajoutant un peu de farine si la pâte colle, former une boule et laisser reposer 30 minutes au frais.", "Étaler la pâte sur 5 mm d'épaisseur environ, puis la rouler sur elle-même en tube.", "Couper des tranches fines de la largeur d'une nouille, dérouler et laisser sécher un peu.", "Cuire dans une grande casserole d'eau bouillante légèrement salée (quelques minutes, jusqu'à ce qu'elles soient tendres).", "Assaisonner à votre goût : huile d'olive, beurre, sauce tomate, ail, basilic, persil, noix..."]
  },
  {
    id: "panna-cotta", nom: "Panna cotta (crème italienne vanillée à la gélatine)", cuisine: "italienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Panna cotta",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPanna_cotta",
    ingredients: [
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "sucre-vanille", quantite: 4, unite: "g" },
      { id: "feuille-de-gelatine", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Faites ramollir les feuilles de gélatine dans de l'eau froide (à défaut, environ 0,5 g d'agar-agar).", "Portez la crème fraîche et le lait à ébullition.", "Retirez du feu et ajoutez le sucre, le sucre vanillé et les feuilles de gélatine essorées.", "Mélangez bien et répartissez dans 2 ramequins individuels.", "Mettez au réfrigérateur pendant au moins 2 heures."]
  },
  {
    id: "pate-a-raviole", nom: "Pâte à raviole (pâte fraîche à l'huile d'olive)", cuisine: "italienne", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Pâte à raviole",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2te_%C3%A0_raviole",
    ingredients: [
      { id: "farine", quantite: 300, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Versez la farine sur le plan de travail, creusez un puits au centre et versez-y les œufs battus en omelette.", "Ajoutez l'huile d'olive et le sel, puis mélangez en intégrant la farine peu à peu.", "Travaillez à la main jusqu'à obtenir une pâte lisse et ferme.", "Roulez la pâte en boule, enveloppez-la dans du film alimentaire et laissez-la reposer 1 heure au frais avant de l'utiliser. Cette quantité suffit pour une trentaine de raviolis."]
  },
  {
    id: "pates-au-saumon-fume-creme-herbes", nom: "Pâtes au saumon fumé, crème et herbes", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Pâtes au saumon fumé",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_au_saumon_fum%C3%A9",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "saumon-fume", quantite: 80, unite: "g" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "basilic", quantite: 2, unite: "g", optionnel: true },
      { id: "origan", quantite: 1, unite: "g", optionnel: true },
      { id: "romarin", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-d-olive", quantite: 10, unite: "ml" }
    ],
    etapes: ["Cuire les pâtes dans de l'eau bouillante salée, puis les égoutter.", "Pendant ce temps, couper le saumon fumé en lanières.", "Faire chauffer doucement la crème avec les herbes hachées et un filet d'huile d'olive.", "Ajouter les pâtes et le saumon, mélanger rapidement hors du feu et servir aussitôt."]
  },
  {
    id: "pates-au-thon-a-la-tomate", nom: "Pâtes au thon à la tomate", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pâtes au thon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_au_thon",
    ingredients: [
      { id: "pates", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" }
    ],
    etapes: ["Émincer finement l'oignon. Le faire fondre à feu doux dans l'huile d'olive jusqu'à ce qu'il soit transparent.", "Ajouter le piment de Cayenne émietté, puis le thon (à l'huile d'olive de préférence). Cuire 3 min, puis ajouter la sauce tomate et laisser mijoter à feu doux.", "Pendant ce temps, cuire les pâtes (penne de préférence) selon le paquet et les égoutter.", "Mélanger les pâtes et la sauce, assaisonner de sel, de poivre du moulin et de parmesan. Servir aussitôt."]
  },
  {
    id: "pates-aux-champignons-grilles-et-herbes", nom: "Pâtes aux champignons grillés et aux herbes", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pâtes aux champignons et aux herbes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_aux_champignons_et_aux_herbes",
    ingredients: [
      { id: "pates", quantite: 250, unite: "g" },
      { id: "champignons", quantite: 150, unite: "g" },
      { id: "huile-d-olive", quantite: 45, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le pied des champignons, garder les têtes et les essuyer avec un chiffon humide.", "Badigeonner largement les têtes avec la moitié de l'huile d'olive et les faire griller 5 à 8 minutes sous le grill du four.", "Les couper en lamelles et les mettre dans un saladier avec leur jus.", "Ajouter le reste d'huile, le persil haché, l'ail écrasé et le jus d'un demi-citron. Saler, poivrer et mélanger.", "Cuire les pâtes selon les indications du paquet, les égoutter.", "Ajouter les champignons aux pâtes, bien mélanger et servir chaud."]
  },
  {
    id: "pates-aux-poivrons", nom: "Pâtes aux poivrons", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pâtes aux poivrons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_aux_poivrons",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pates", quantite: 200, unite: "g" }
    ],
    etapes: ["Faire revenir l'ail haché dans l'huile d'olive, ajouter les poivrons (jaune, orange, rouge) en fines lamelles, saler et poivrer.", "Laisser mijoter à couvert pour garder le jus des poivrons.", "Pendant ce temps, cuire les pâtes selon le paquet, les égoutter et les mélanger aux poivrons. Servir aussitôt."]
  },
  {
    id: "pesto", nom: "Pesto maison (basilic, pignons et parmesan)", cuisine: "italienne", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Pesto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPesto",
    ingredients: [
      { id: "basilic", quantite: 30, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "pignons-de-pin", quantite: 20, unite: "g" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 80, unite: "ml" },
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Effeuillez le basilic, pelez l'ail et râpez le parmesan. Faites griller les pignons à sec dans une poêle.", "Mixez les feuilles de basilic, l'ail et la moitié de l'huile d'olive.", "Ajoutez les pignons, le parmesan et le reste de l'huile, puis mixez à nouveau.", "Allongez avec un peu d'eau chaude salée jusqu'à la consistance voulue. Cela donne un petit pot d'environ 150 g."]
  },
  {
    id: "pizza-a-la-pancetta", nom: "Pizza à la pancetta, au jambon et à la mozzarella", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza à la pancetta",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_%C3%A0_la_pancetta",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 250, unite: "g" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "pancetta", quantite: 80, unite: "g", ou: { id: "lardons", quantite: 80, unite: "g" } },
      { id: "mozzarella", quantite: 100, unite: "g" },
      { id: "comte", quantite: 40, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Étaler la pâte à pizza sur une plaque ou dans un moule et la couvrir de tomates concassées.", "Couper le jambon en carrés et les répartir sur la pizza (de préférence du jambon fumé).", "Ajouter les tranches fines de pancetta.", "Couper la mozzarella en petits cubes, en couvrir la pizza, puis parsemer de comté râpé.", "Cuire 15 minutes au four."]
  },
  {
    id: "pizza-au-chevre-et-aux-lardons", nom: "Pizza au chèvre et aux lardons", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza au chèvre et aux lardons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_ch%C3%A8vre_et_aux_lardons",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "fromage-de-chevre", quantite: 180, unite: "g" },
      { id: "parmesan", quantite: 50, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Étaler la pâte à pizza et la couvrir de tomates concassées.", "Répartir les lardons crus.", "Couper la bûche de chèvre en rondelles et les répartir régulièrement (environ 3 rondelles par quart de pizza). Râper le parmesan par-dessus.", "Cuire environ 15 min au four."]
  },
  {
    id: "pizza-au-thon-et-au-comte", nom: "Pizza au thon et au comté", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza au thon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_thon",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "thon-en-boite", quantite: 2, unite: "boîte" },
      { id: "comte", quantite: 100, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Étaler la pâte dans un plat et la garnir de tomates concassées.", "Émietter le thon égoutté à la fourchette et le répartir sur la pizza.", "Râper le comté et en saupoudrer la pizza.", "Cuire 20 min au four."]
  },
  {
    id: "pizza-au-tofu-et-aux-champignons", nom: "Pizza au tofu et aux champignons", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Pizza au tofu et aux champignons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_tofu_et_aux_champignons",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "tomates-concassees", quantite: 200, unite: "g" },
      { id: "tofu", quantite: 100, unite: "g" },
      { id: "champignons", quantite: 230, unite: "g" },
      { id: "tomates-sechees", quantite: 30, unite: "g" },
      { id: "origan", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Quelques heures à l'avance, faire mariner le tofu écrasé avec les tomates en morceaux et un peu d'origan.", "Pâte : mélanger la farine, 20 ml d'huile d'olive, 100 ml d'eau tiède, la levure et une pincée de sel. Pétrir jusqu'à obtenir une pâte lisse et élastique. Laisser lever 1 h au chaud sous un torchon.", "Faire revenir les champignons hachés dans le reste de l'huile d'olive. Saler, poivrer et réserver.", "Étaler la pâte dans un moule à pizza huilé, la napper des tomates au tofu, puis répartir les champignons et les tomates séchées (à l'huile) coupées en morceaux.", "Saupoudrer d'origan et cuire 15 min dans le four préchauffé à 220 °C."]
  },
  {
    id: "pizza-aux-moules-et-au-curry", nom: "Pizza aux moules et au curry", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux moules",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_moules",
    ingredients: [
      { id: "moules", quantite: 1000, unite: "g" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "curry-en-poudre", quantite: 2, unite: "g" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "fecule", quantite: 5, unite: "g", optionnel: true },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "mozzarella", quantite: 120, unite: "g" }
    ],
    etapes: ["Gratter les moules et les laver à grande eau.", "Les cuire dans une casserole avec l'échalote ciselée, le persil haché, le vin blanc et le curry, jusqu'à ce qu'elles s'ouvrent. Les décortiquer.", "Faire une sauce avec le jus de cuisson et la crème. Elle doit être épaisse : ajouter un peu de maïzena si besoin. Y verser les moules.", "Étaler la pâte dans une tourtière, répartir la sauce aux moules et ajouter la mozzarella en dés.", "Cuire 15 à 20 min au four à 220 °C."]
  },
  {
    id: "pizza-aux-poivrons-et-au-chorizo", nom: "Pizza aux poivrons et au chorizo", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux poivrons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_poivrons",
    ingredients: [
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "mozzarella", quantite: 120, unite: "g" },
      { id: "comte", quantite: 50, unite: "g" },
      { id: "chorizo", quantite: 50, unite: "g" }
    ],
    etapes: ["Couper les poivrons (un rouge, un jaune) et l'oignon en lanières. Garder 4 lanières de poivron jaune de côté.", "Faire mijoter le reste des poivrons et l'oignon 30 min à feu doux avec l'huile.", "Étaler la pâte à pizza dans un plat et la couvrir de tomates concassées et des légumes cuits.", "Ajouter la mozzarella en dés, le comté râpé et les 4 lanières de poivron gardées.", "Cuire 15 min au four à 220 °C. Au bout de 10 min, sortir la pizza pour y poser les 10 tranches de chorizo, puis finir la cuisson."]
  },
  {
    id: "pizza-aux-poivrons-et-au-pesto", nom: "Pizza aux poivrons et au pesto", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux poivrons et au pesto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_poivrons_et_au_pesto",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pesto", quantite: 45, unite: "g", ou: { id: "basilic", quantite: 20, unite: "g" } },
      { id: "origan", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 235 °C. Étaler la pâte (environ 250 g de pâte à pain) dans un moule à pizza huilé.", "Couper les poivrons (de plusieurs couleurs) en lanières et les faire revenir dans l'huile d'olive.", "Étaler le pesto sur la pâte (ou, à défaut, du basilic mixé avec de l'huile d'olive et de l'ail), répartir les poivrons et saupoudrer largement d'origan.", "Cuire 20 min au four."]
  },
  {
    id: "pizza-aux-quatre-fromages", nom: "Pizza aux quatre fromages (mozzarella, gorgonzola, cheddar, comté)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux quatre fromages",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_quatre_fromages",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 250, unite: "g" },
      { id: "mozzarella", quantite: 80, unite: "g" },
      { id: "gorgonzola", quantite: 80, unite: "g", ou: { id: "fromage-bleu", quantite: 80, unite: "g" } },
      { id: "cheddar", quantite: 80, unite: "g" },
      { id: "comte", quantite: 40, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 210 °C.", "Étaler la pâte à pizza dans un moule qui supporte la cuisson au four.", "Étaler les tomates concassées sur la pâte.", "Couper la mozzarella, le gorgonzola et le cheddar en dés, et râper le comté.", "Disposer les trois premiers fromages en suivant un motif, puis couvrir de comté.", "Cuire 15 minutes au four."]
  },
  {
    id: "pizza-campagnarde", nom: "Pizza campagnarde (jambon, champignons, comté)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Pizza campagnarde",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_campagnarde",
    ingredients: [
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "comte", quantite: 100, unite: "g" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" }
    ],
    etapes: ["Nettoyer les champignons, les couper en lamelles dans la longueur et les faire revenir 10 min dans une casserole pour qu'ils rendent leur eau.", "Couper le jambon en carrés et râper le comté.", "Fariner un plat, y étaler la pâte et la couvrir de tomates concassées, de jambon, de champignons et de comté.", "Cuire 10 à 15 min au four à 210 °C."]
  },
  {
    id: "pizza-familiale-jambon-mozzarella", nom: "Pizza familiale au jambon et à la mozzarella", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Pizza familiale",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_familiale",
    ingredients: [
      { id: "farine", quantite: 330, unite: "g" },
      { id: "eau", quantite: 180, unite: "ml" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sauce-tomate", quantite: 75, unite: "g" },
      { id: "jambon", quantite: 6, unite: "tranche" },
      { id: "mozzarella", quantite: 125, unite: "g" },
      { id: "fromage-rape", quantite: 40, unite: "g" }
    ],
    etapes: ["Verser la farine dans un grand bol. Dans un verre doseur, mélanger l'eau tiède, le sel, le sucre et la levure jusqu'à dissolution, puis laisser reposer 3 à 4 minutes.", "Verser ce mélange dans la farine et pétrir (ajouter un peu de farine si la pâte colle trop).", "Quand la pâte est homogène, ajouter l'huile d'olive et pétrir à nouveau.", "Couvrir d'un linge humide et laisser reposer environ 20 minutes.", "Préchauffer le four à 180 °C. Pétrir à nouveau, puis étaler la pâte au rouleau en une pizza fine.", "Étaler la sauce tomate, disposer les tranches de jambon entières, serrées les unes contre les autres, puis la mozzarella coupée en dés.", "Saupoudrer de fromage râpé (emmental) et cuire au four 15 minutes."]
  },
  {
    id: "poisson-au-guazzetto", nom: "Poisson au guazzetto (poêlé au vin blanc et au citron)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Poisson au guazzetto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoisson_au_guazzetto",
    ingredients: [
      { id: "poisson-blanc", quantite: 500, unite: "g" },
      { id: "romarin", quantite: 1, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "vin-blanc", quantite: 40, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Vider et nettoyer le poisson entier. Garnir l'intérieur d'un brin de romarin, d'une demi-gousse d'ail coupée dans la longueur, de sel et de poivre.", "Dans une poêle (ovale de préférence), faire revenir l'autre gousse d'ail et le persil hachés dans l'huile d'olive.", "Avant que l'ail ne dore, mettre le poisson dans la poêle et le saisir rapidement des deux côtés en salant et poivrant légèrement. Verser un quart de verre de vin blanc sec.", "Couvrir et cuire à feu doux 15 à 20 min selon la taille du poisson, pour garder le jus de cuisson (le « guazzetto ») ; ajouter un tout petit peu d'eau si besoin.", "Ajouter le jus de citron juste avant de retirer du feu."]
  },
  {
    id: "risotto-au-parmesan", nom: "Risotto au parmesan (risotto blanc)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Risotto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto",
    ingredients: [
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "parmesan", quantite: 15, unite: "g" }
    ],
    etapes: ["Préparer 500 ml de bouillon chaud avec l'eau et le bouillon cube.", "Émincer l'oignon et le faire fondre dans l'huile d'olive.", "Ajouter 150 g de riz à risotto et le faire revenir jusqu'à ce qu'il soit translucide, puis arroser avec 50 ml de vin blanc sec.", "Quand le vin est réduit, ajouter le bouillon chaud louche par louche, en attendant que chaque louche soit absorbée. La cuisson prend environ 18 min.", "Hors du feu, incorporer la noix de beurre et le parmesan râpé, puis couvrir 2 min avant de servir : le risotto devient bien crémeux."]
  },
  {
    id: "risotto-au-poulet", nom: "Risotto au poulet", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Risotto au poulet",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto_au_poulet",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "tomates-concassees", quantite: 125, unite: "g", ou: { id: "tomate", quantite: 1, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce", ou: { id: "echalote", quantite: 1, unite: "pièce" } },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer 500 ml de bouillon de volaille chaud avec l'eau et le bouillon cube. Couper le blanc de poulet en fines lanières.", "Dans une casserole à fond épais, faire revenir l'oignon (ou l'échalote) haché dans l'huile. Dès qu'il commence à blondir, ajouter le poulet et le faire rissoler.", "Ajouter 125 ml de vin blanc et les tomates pelées coupées en morceaux, puis laisser cuire 10 min à feu doux.", "Ajouter 150 g de riz à risotto (arborio, carnaroli ou vialone nano), mélanger et cuire 2 min. Incorporer ensuite le bouillon chaud petit à petit, jusqu'à ce que le riz n'absorbe plus de liquide. Saler et poivrer.", "Servir dans un plat, saupoudré de persil haché."]
  },
  {
    id: "risotto-au-saumon-et-au-parmesan", nom: "Risotto au saumon et au parmesan", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Risotto de saumon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto_de_saumon",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 160, unite: "g" },
      { id: "vin-blanc", quantite: 120, unite: "ml" },
      { id: "fumet-de-poisson", quantite: 400, unite: "ml" },
      { id: "saumon", quantite: 240, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" }
    ],
    etapes: ["Éplucher et hacher l'oignon, le faire revenir 5 min dans une poêle avec l'huile.", "Ajouter le riz (rond) et remuer jusqu'à ce qu'il devienne nacré.", "Verser le vin blanc et mélanger.", "Ajouter environ 100 ml de fumet de poisson chaud et remuer. Quand le riz a tout absorbé, en remettre, et ainsi de suite jusqu'à ce que le riz soit cuit.", "Ajouter la chair de saumon coupée en dés et cuire 5 min.", "Ajouter le parmesan râpé, laisser reposer quelques minutes et servir."]
  },
  {
    id: "salade-de-pates-tomates-sechees-epinards", nom: "Salade de pâtes, tomates séchées et épinards", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pâtes aux tomates et épinards",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_aux_tomates_et_%C3%A9pinards",
    ingredients: [
      { id: "pates", quantite: 250, unite: "g" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "tomates-sechees", quantite: 30, unite: "g" },
      { id: "epinards", quantite: 200, unite: "g" },
      { id: "pignons-de-pin", quantite: 15, unite: "g" },
      { id: "origan", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans une grande casserole d'eau bouillante salée, les égoutter et les rincer à l'eau froide, puis les mettre dans un saladier.", "Hacher finement l'oignon nouveau. Couper les tomates séchées en lanières.", "Ajouter à la salade l'oignon, les tomates séchées, les pousses d'épinards, les pignons grillés et l'origan.", "Préparer la sauce : dans un bocal, mettre l'huile, le piment haché, l'ail écrasé, le sel et le poivre, puis secouer fort.", "Verser la sauce sur la salade, bien mélanger et servir tout de suite."]
  },
  {
    id: "sauce-cinq-p", nom: "Sauce « cinq P » (crème, tomate, parmesan et persil)", cuisine: "italienne", type: "sauce",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Sauce cinq P",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_cinq_P",
    ingredients: [
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "concentre-de-tomates", quantite: 15, unite: "g" },
      { id: "parmesan", quantite: 15, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher le persil.", "Mettre tous les ingrédients dans une casserole.", "Porter à ébullition puis laisser cuire à feu doux 5 minutes en remuant. Idéale sur des pâtes."]
  },
  {
    id: "sauce-bolognaise-rapide", nom: "Sauce bolognaise rapide (bœuf haché, carotte et tomates)", cuisine: "italienne", type: "sauce",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Sauce bolognaise (2)",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_bolognaise_(2)",
    ingredients: [
      { id: "boeuf-hache", quantite: 200, unite: "g" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "basilic", quantite: 3, unite: "g" }
    ],
    etapes: ["Coupez la carotte en petits dés et faites-la cuire dans une poêle avec un peu d'huile d'olive.", "Avant la fin de cuisson de la carotte, ajoutez l'oignon et l'ail finement coupés.", "Ajoutez la viande hachée et les tomates concassées.", "Laissez cuire encore une dizaine de minutes en remuant, puis parsemez de basilic."]
  },
  {
    id: "spaghetti-au-jambon-de-parme", nom: "Spaghetti au jambon de Parme", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Spaghetti au jambon de Parme",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpaghetti_au_jambon_de_Parme",
    ingredients: [
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pates", quantite: 200, unite: "g" },
      { id: "jambon", quantite: 1, unite: "tranche" },
      { id: "parmesan", quantite: 50, unite: "g" },
      { id: "jambon-cru", quantite: 2, unite: "tranche" }
    ],
    etapes: ["Émincer les petits oignons et les faire roussir dans l'huile d'olive.", "Cuire les spaghettis dans une casserole d'eau bouillante.", "Couper le jambon blanc en dés, l'ajouter aux oignons et cuire 5 min.", "Ajouter les pâtes égouttées et le parmesan en copeaux, mélanger et couvrir avec les tranches de jambon de Parme. Mettre un couvercle et laisser 5 min hors du feu avant de servir."]
  },
  {
    id: "spaghettis-au-basilic", nom: "Spaghettis au basilic", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 135, portions: 2,
    source: "Wikilivres", idSource: "Spaghettis au basilic",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpaghettis_au_basilic",
    ingredients: [
      { id: "basilic", quantite: 20, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pates", quantite: 230, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Effeuiller, laver et sécher le basilic. Garder quelques feuilles pour le décor.", "Hacher l'ail avec le basilic, arroser avec l'huile d'olive (fruitée de préférence) et poivrer.", "Couvrir et laisser reposer 2 h.", "Cuire les spaghettis al dente dans de l'eau salée et les égoutter.", "Les arroser de l'huile au basilic, mélanger et décorer avec les feuilles gardées."]
  },
  {
    id: "spaghettis-aux-fruits-de-mer-citron-creme", nom: "Spaghettis aux fruits de mer, citron et crème (finis en papillote)", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Spaghettis aux fruits de mer",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpaghettis_aux_fruits_de_mer",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "fruits-de-mer-surgeles", quantite: 250, unite: "g" },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "creme-liquide", quantite: 100, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "concentre-de-tomates", quantite: 2, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer finement l'oignon et hacher l'ail. Zester le citron et garder son jus.", "Faire blondir l'oignon et le zeste de citron dans l'huile, ajouter les fruits de mer et cuire 5 minutes.", "Ajouter l'ail, le concentré de tomates et le jus du citron, mouiller avec le vin blanc, assaisonner et cuire 10 minutes.", "Cuire les spaghettis « al dente », les verser sur les fruits de mer, mélanger et ajouter la crème. Laisser reposer 2 minutes.", "Déposer la préparation sur du papier sulfurisé, fermer en papillote et cuire 5 minutes au four à 200 °C."]
  }
]);

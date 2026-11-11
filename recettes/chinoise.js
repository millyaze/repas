// ============================================================
// RECETTES : cuisine chinoise (27 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/thailandaise.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "boeuf-saute-au-brocoli", nom: "Bœuf sauté au brocoli", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53366",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "vin-de-shaoxing", quantite: 10, unite: "ml", ou: { id: "vin-blanc", quantite: 10, unite: "ml" } },
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "sauce-huitre", quantite: 30, unite: "ml", ou: { id: "sauce-soja", quantite: 30, unite: "ml" } },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper le bœuf en fines tranches. Le mélanger avec 1 cuillère à café de sauce soja, 1 cuillère à café de vin de Shaoxing, une pincée de fécule et un peu de poivre. Laisser reposer 10 min.", "Sauce : mélanger la sauce huître, le reste du vin et de la sauce soja et 60 ml d'eau (ou de bouillon fait avec un peu de bouillon cube).", "Cuire les bouquets de brocoli 2 min dans l'eau bouillante, ils doivent rester croquants. Bien égoutter.", "Chauffer l'huile à feu vif dans un wok. Étaler le bœuf en une seule couche et le laisser saisir 1 min sans toucher. Le retourner, ajouter l'ail haché et cuire encore 30 s à 1 min.", "Verser la sauce et le reste de la fécule délayée dans 1 cuillère à soupe d'eau. Remuer jusqu'à ce que ça épaississe (30 s), ajouter le brocoli et servir aussitôt, avec du riz si on veut."]
  },
  {
    id: "nouilles-sautees-au-boeuf-lo-mein", nom: "Nouilles sautées au bœuf (lo mein)", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "52952",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 225, unite: "g" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fecule", quantite: 25, unite: "g" },
      { id: "huile-de-tournesol", quantite: 75, unite: "ml" },
      { id: "nouilles-chinoises", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "champignons", quantite: 70, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sauce-huitre", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "sauce-soja", quantite: 5, unite: "ml" }
    ],
    etapes: ["Couper le bœuf en lamelles. Le mélanger avec une pincée de sel et de poivre, la moitié de l'huile de sésame, un demi-œuf battu, la fécule et 1 cuillère à soupe d'huile.", "Plonger les nouilles dans l'eau bouillante juste le temps de les assouplir (comme indiqué sur le paquet), les égoutter et les rincer à l'eau froide.", "Chauffer 2 cuillères à soupe d'huile à feu vif dans un wok, saisir le bœuf jusqu'à ce qu'il soit à moitié cuit, puis le réserver.", "Dans le wok, chauffer 2 cuillères à soupe d'huile, ajouter l'oignon émincé, l'ail et le gingembre hachés, les pousses de soja et les champignons émincés, puis l'eau. Ajouter les nouilles.", "Ajouter la sauce huître, le reste de l'huile de sésame, le sucre, la sauce soja et une pincée de poivre. Remettre le bœuf, faire sauter 1 à 2 min et servir."]
  },
  {
    id: "congee-au-poulet", nom: "Congee au poulet (soupe de riz)", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52956",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "riz", quantite: 100, unite: "g" },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 10, unite: "g", optionnel: true }
    ],
    etapes: ["Couper le poulet en petits morceaux. Le mélanger avec une pincée de sel, de poivre et un peu de gingembre râpé (on peut presser le gingembre pour n'en garder que le jus). Réserver.", "Rincer le riz deux ou trois fois et l'égoutter.", "Mettre le riz et l'eau dans une casserole, porter à ébullition à feu vif, puis cuire 20 à 25 min à feu doux en remuant toutes les 8 à 10 min. Ajouter un peu d'eau si on la préfère moins épaisse.", "Ajouter le poulet et cuire encore 10 min à feu doux.", "Ajouter l'oignon nouveau émincé, le reste du gingembre en fines lamelles, une pincée de sel et de poivre, remuer 10 s. Servir en bols, parsemé de coriandre si on veut."]
  },
  {
    id: "riz-frit-au-poulet", nom: "Riz frit au poulet", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53367",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 1, unite: "pièce" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "cinq-epices", quantite: 1, unite: "g", ou: { id: "cannelle", quantite: 1, unite: "g" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Le riz frit est meilleur avec du riz cuit la veille. Sinon, cuire le riz, l'étaler sur une grande assiette et le laisser sécher 1 à 2 h (ou au moins le temps de préparer le reste).", "Couper le poulet en petits dés, saler et laisser 10 min. Pendant ce temps, couper l'oignon et la carotte en dés, hacher l'ail et le gingembre.", "Chauffer 1 cuillère à soupe d'huile dans un wok, brouiller les œufs battus en petits morceaux et les réserver. Ajouter 1 cuillère à soupe d'huile, cuire le poulet 4 à 5 min et le réserver.", "Avec le reste d'huile, cuire l'oignon 1 min, ajouter l'ail et le gingembre 30 s, puis la carotte 2 min. Ajouter une pincée de sel et les petits pois.", "Ajouter le riz en écrasant les paquets, le blanc de l'oignon nouveau et le cinq-épices. Arroser de sauce soja et d'huile de sésame, remettre le poulet, les œufs et le vert de l'oignon nouveau. Faire sauter 1 à 2 min et servir."]
  },
  {
    id: "poulet-a-l-orange", nom: "Poulet à l'orange", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53365",
    ingredients: [
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 40, unite: "ml", ou: { id: "vinaigre", quantite: 40, unite: "ml" } },
      { id: "fecule", quantite: 70, unite: "g" },
      { id: "huile-de-sesame", quantite: 8, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 8, unite: "ml" } },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "huile-de-tournesol", quantite: 240, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "echalote", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Sauce : mélanger le zeste de l'orange, son jus (environ 30 ml), la sauce soja, l'eau, le vinaigre de riz, 1 cuillère à café de fécule, l'huile de sésame et le sucre. Réserver.", "Couper le poulet en cubes de 2 à 3 cm. Battre l'œuf avec une pincée de sel et de poivre et y mélanger le poulet. Dans un autre bol, mélanger la farine et le reste de la fécule.", "Égoutter le poulet de l'œuf et bien l'enrober du mélange farine-fécule.", "Chauffer l'huile dans une grande poêle (une pincée de farine doit grésiller tout de suite). Frire le poulet en deux fois, 3 à 4 min de chaque côté. Égoutter sur du papier absorbant.", "Vider l'huile et essuyer la poêle. Faire revenir 1 min l'ail et l'échalote hachés dans 1 cuillère à soupe d'huile, verser la sauce et laisser épaissir. Ajouter le poulet, bien l'enrober et laisser frémir 1 à 2 min.", "Servir sur du riz, parsemé de graines de sésame et d'oignon nouveau émincé."]
  },
  {
    id: "oeufs-brouilles-a-la-tomate", nom: "Œufs brouillés à la tomate", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53372",
    ingredients: [
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper les tomates en deux, retirer le pédoncule, puis couper chaque moitié en 3 quartiers.", "Dans une poêle froide, mettre l'huile et les œufs battus, puis allumer à feu moyen. Pousser doucement les œufs pour former de grosses couches. Les retirer quand ils sont presque pris mais encore brillants (2 à 5 min).", "Mettre l'huile de sésame dans la poêle et faire sauter les tomates 3 min à feu moyen, jusqu'à ce qu'elles soient tendres sans être en purée.", "Ajouter le bouillon cube émietté, le sucre et un peu de poivre, remuer 1 min.", "Remettre les œufs, faire sauter 2 min. Goûter avant de saler. Parsemer d'oignon nouveau et servir avec du riz."]
  },
  {
    id: "soupe-aux-oeufs-egg-drop", nom: "Soupe aux œufs (egg drop soup)", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "52955",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 730, unite: "ml" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "champignons", quantite: 50, unite: "g" },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Porter à ébullition 700 ml d'eau avec le bouillon cube.", "Ajouter une pincée de sel, le sucre, une pincée de poivre et l'huile de sésame, puis les petits pois et les champignons émincés.", "Délayer la fécule dans 2 cuillères à soupe d'eau et la verser petit à petit dans la soupe jusqu'à ce qu'elle épaississe un peu.", "Verser l'œuf légèrement battu en filet dans la soupe et remuer 8 s : il forme des rubans.", "Servir en bols, parsemé d'oignon nouveau émincé."]
  },
  {
    id: "omelettes-foo-young-aux-crevettes", nom: "Omelettes foo young aux crevettes", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53370",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "vin-de-shaoxing", quantite: 10, unite: "ml", ou: { id: "vin-blanc", quantite: 10, unite: "ml" } },
      { id: "sauce-huitre", quantite: 10, unite: "ml", ou: { id: "sauce-soja", quantite: 10, unite: "ml" } },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "crevettes", quantite: 150, unite: "g" },
      { id: "huile-de-tournesol", quantite: 360, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Sauce : dans une petite casserole, chauffer 120 ml d'eau avec le bouillon cube, la sauce soja, le vin de Shaoxing, la sauce huître et une pincée de poivre. Ajouter la moitié de la fécule délayée dans 1 cuillère à soupe d'eau et remuer 2 à 3 min jusqu'à ce qu'elle nappe la cuillère. Garder au chaud à feu très doux.", "Pâte : délayer le reste de la fécule dans 1 cuillère à soupe d'eau, ajouter les œufs, une pincée de sel et le sucre, bien battre. Ajouter l'oignon nouveau émincé, les pousses de soja et les crevettes.", "Chauffer l'huile dans un wok (environ 5 cm de hauteur) : un bâtonnet en bois plongé dedans doit faire de grosses bulles.", "Verser doucement une louche de pâte : l'omelette gonfle tout de suite. Frire 2 min de chaque côté, jusqu'à ce qu'elle soit dorée. Égoutter sur du papier absorbant. Faire 2 omelettes en tout.", "Servir les omelettes sur du riz, nappées de sauce chaude."]
  },
  {
    id: "poulet-du-general-tso", nom: "Poulet du général Tso", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52951",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 90, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fecule", quantite: 30, unite: "g" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "sauce-aux-prunes", quantite: 60, unite: "ml", ou: { id: "sauce-chili-douce", quantite: 60, unite: "ml" } },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "miel", quantite: 30, unite: "g" },
      { id: "vinaigre-de-riz", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "huile-de-sesame", quantite: 30, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 30, unite: "ml" } },
      { id: "gochujang", quantite: 8, unite: "g", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" }
    ],
    etapes: ["Pâte à frire : mélanger la farine, la moitié de la fécule, 1 cuillère à soupe de levure chimique si on en a, 1 cuillère à café de sel, l'œuf et 180 ml d'eau. Y plonger le poulet coupé en morceaux.", "Chauffer l'huile (une goutte de pâte doit grésiller tout de suite). Frire le poulet 3 à 4 min, jusqu'à ce qu'il soit doré, en séparant les morceaux. Égoutter sur du papier absorbant.", "Sauce : dans un wok, chauffer 120 ml d'eau avec le bouillon cube, la sauce aux prunes, la sauce soja, le miel, le vinaigre de riz, l'huile de sésame, le gochujang, l'ail et le gingembre hachés.", "Quand ça bout, ajouter le reste de la fécule délayée dans 2 cuillères à soupe d'eau, petit à petit, jusqu'à ce que la sauce épaississe.", "Ajouter le poulet, faire sauter 1 min pour bien l'enrober, parsemer d'oignon nouveau émincé et servir."]
  },
  {
    id: "soupe-aigre-piquante", nom: "Soupe aigre-piquante", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "52954",
    ingredients: [
      { id: "champignons", quantite: 30, unite: "g" },
      { id: "champignons-noirs", quantite: 10, unite: "g", ou: { id: "champignons", quantite: 30, unite: "g" } },
      { id: "tofu", quantite: 100, unite: "g" },
      { id: "filet-mignon-de-porc", quantite: 80, unite: "g", ou: { id: "cote-de-porc", quantite: 1, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 630, unite: "ml" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "sauce-sriracha", quantite: 3, unite: "ml", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Si les champignons noirs sont secs, les faire tremper 20 min dans l'eau chaude puis les émincer. Couper le tofu en dés et le porc en fines lanières ; faire dorer le porc 3 à 4 min dans une poêle.", "Porter à ébullition 600 ml d'eau avec le bouillon cube. Ajouter une pincée de sel, le sucre, l'huile de sésame, du poivre, la sauce piquante, le vinaigre et la sauce soja.", "Ajouter le tofu, les champignons et les champignons noirs.", "Délayer la fécule dans 2 cuillères à soupe d'eau et la verser petit à petit jusqu'à ce que la soupe épaississe. Verser l'œuf battu en filet et remuer 8 s.", "Servir en bols, garni du porc et d'oignon nouveau émincé. Ajuster le vinaigre (aigre) et la sauce piquante (piquant) à son goût."]
  },
  {
    id: "poulet-kung-pao", nom: "Poulet kung pao", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52945",
    ingredients: [
      { id: "sake", quantite: 20, unite: "ml", ou: { id: "vin-blanc", quantite: 20, unite: "ml" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "huile-de-sesame", quantite: 20, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 20, unite: "ml" } },
      { id: "fecule", quantite: 10, unite: "g" },
      { id: "eau", quantite: 20, unite: "ml" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 4, unite: "g" },
      { id: "vinaigre-de-riz", quantite: 5, unite: "ml", ou: { id: "vinaigre", quantite: 5, unite: "ml" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "chataignes-d-eau", quantite: 130, unite: "g", optionnel: true },
      { id: "cacahuetes", quantite: 60, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger le saké, la sauce soja, l'huile de sésame et la fécule délayée dans l'eau. Séparer en deux.", "Couper le poulet en dés et le mélanger avec la première moitié de la sauce. Couvrir et laisser 30 min au réfrigérateur.", "Dans une poêle moyenne, mélanger l'autre moitié de la sauce, le piment, le vinaigre et le sucre. Ajouter l'oignon nouveau émincé, l'ail haché, les châtaignes d'eau et les cacahuètes. Chauffer doucement à feu moyen jusqu'à ce que ça sente bon.", "Pendant ce temps, faire sauter le poulet égoutté dans une grande poêle jusqu'à ce qu'il soit cuit.", "Ajouter le poulet à la sauce et laisser mijoter jusqu'à ce qu'elle épaississe. Servir avec du riz si on veut."]
  },
  {
    id: "mapo-tofu", nom: "Mapo tofu", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52947",
    ingredients: [
      { id: "tofu", quantite: 400, unite: "g" },
      { id: "boeuf-hache", quantite: 100, unite: "g" },
      { id: "huile-de-sesame", quantite: 8, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 8, unite: "ml" } },
      { id: "pate-de-piment-aux-feves-doubanjiang", quantite: 10, unite: "g", ou: { id: "gochujang", quantite: 10, unite: "g" } },
      { id: "haricots-noirs-fermentes", quantite: 3, unite: "g", optionnel: true },
      { id: "piment-en-poudre", quantite: 5, unite: "g" },
      { id: "poivre-du-sichuan", quantite: 2, unite: "g", ou: { id: "poivre", quantite: 1, unite: "g" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 440, unite: "ml" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger le bœuf haché avec une pincée de sel et l'huile de sésame. Délayer la fécule dans 2 cuillères à soupe et demie d'eau.", "Couper le tofu en cubes de 2 cm. Le plonger 1 min dans l'eau bouillante salée, puis l'égoutter.", "Chauffer l'huile dans un wok et faire frire le bœuf jusqu'à ce qu'il soit croustillant. Le retirer en laissant l'huile.", "À feu doux, faire revenir la pâte de piment aux fèves 1 min, puis ajouter l'ail haché, le blanc des oignons nouveaux, le gingembre en lamelles et les haricots noirs fermentés, 30 s. Ajouter le piment en poudre.", "Verser 400 ml d'eau, porter à ébullition à feu vif. Glisser doucement le tofu, ajouter la sauce soja et le bœuf, puis laisser mijoter 6 à 8 min à feu doux.", "Verser la fécule délayée en deux fois, à 30 s d'intervalle. Goûter (un peu de sucre adoucit si c'est trop piquant). Parsemer de poivre du Sichuan moulu et du vert des oignons nouveaux. Servir aussitôt avec du riz."]
  },
  {
    id: "salade-de-concombre-au-sesame", nom: "Salade de concombre au sésame", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53378",
    ingredients: [
      { id: "concombre", quantite: 2, unite: "pièce" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "vinaigre-de-riz", quantite: 30, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "basilic", quantite: 3, unite: "g", optionnel: true },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Éplucher les concombres, les couper en quatre dans la longueur (retirer les graines si elles sont amères), puis en tronçons d'environ 1 cm.", "Les mettre dans un saladier et saler.", "Mélanger avec l'huile de sésame, le vinaigre de riz, le basilic ciselé et le piment.", "Parsemer de graines de sésame grillées si on veut, et servir."]
  },
  {
    id: "nouilles-de-riz-sautees-aux-crevettes-chow-fun", nom: "Nouilles de riz sautées aux crevettes (chow fun)", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52953",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 200, unite: "g", ou: { id: "nouilles-chinoises", quantite: 200, unite: "g" } },
      { id: "crevettes", quantite: 225, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "ciboulette", quantite: 10, unite: "g" } },
      { id: "vin-de-shaoxing", quantite: 15, unite: "ml", ou: { id: "vin-blanc", quantite: 15, unite: "ml" } },
      { id: "sauce-huitre", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "vinaigre", quantite: 8, unite: "ml" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Cuire les nouilles de riz larges comme indiqué sur le paquet, puis les rincer à l'eau froide pour arrêter la cuisson.", "Mélanger les crevettes avec un demi-œuf battu, une pincée de poivre, la moitié de l'huile de sésame, 1 cuillère à soupe de fécule et 1 cuillère à soupe d'huile.", "Chauffer 2 cuillères à soupe d'huile dans un wok, faire dorer les crevettes et les réserver.", "Ajouter 1 cuillère à soupe d'huile, l'ail et le gingembre hachés, l'oignon émincé, les pousses de soja et l'oignon nouveau. Ajouter les nouilles.", "Ajouter le vin de Shaoxing, la sauce huître, le sucre, le vinaigre, le reste de l'huile de sésame, une pincée de poivre et la sauce soja. Remettre les crevettes.", "Délayer le reste de la fécule dans l'eau et la verser petit à petit jusqu'à ce que la sauce nappe les nouilles. Servir."]
  },
  {
    id: "crevettes-aux-pois-gourmands", nom: "Crevettes aux pois gourmands", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53375",
    ingredients: [
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "vin-de-shaoxing", quantite: 10, unite: "ml", ou: { id: "vin-blanc", quantite: 10, unite: "ml" } },
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "pois-gourmands", quantite: 125, unite: "g", ou: { id: "haricots-verts", quantite: 125, unite: "g" } },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger la fécule, le vin de Shaoxing et une pincée de sel, ajouter les crevettes et laisser 15 à 20 min. Pendant ce temps, équeuter les pois gourmands, hacher le gingembre et l'ail.", "Chauffer un wok 1 min à feu vif, ajouter l'huile, puis le gingembre et l'ail : faire sauter 30 s.", "Ajouter les crevettes avec leur marinade, les pois gourmands, la sauce soja et l'eau (ou du bouillon, avec un peu de bouillon cube). Faire sauter 2 min, jusqu'à ce que les crevettes soient roses.", "Ajouter l'oignon nouveau coupé en tronçons et faire sauter 1 min.", "Couper le feu, ajouter l'huile de sésame, mélanger et servir avec du riz."]
  },
  {
    id: "aubergines-du-sichuan", nom: "Aubergines du Sichuan", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53374",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "pate-de-piment-aux-feves-doubanjiang", quantite: 20, unite: "g", ou: { id: "gochujang", quantite: 20, unite: "g" } },
      { id: "poivre-du-sichuan", quantite: 5, unite: "g", ou: { id: "poivre", quantite: 2, unite: "g" } },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "fecule", quantite: 3, unite: "g" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Couper les aubergines en quatre dans la longueur puis en gros bâtonnets. Préparer 4 bols : (1) 60 ml d'eau (ou de bouillon, avec un peu de bouillon cube), le sucre et la sauce soja ; (2) la pâte de piment aux fèves, l'ail et le gingembre hachés, le poivre du Sichuan ; (3) la fécule délayée dans 1 cuillère à soupe d'eau ; (4) l'oignon nouveau émincé et le vinaigre.", "Chauffer l'huile à feu moyen-vif jusqu'à ce qu'elle fume presque. Faire sauter les aubergines en les laissant dorer et cloquer quelques secondes entre chaque mouvement (ajouter un peu d'huile si elles l'ont toute bue).", "Ajouter le bol 2 et faire sauter 30 s, jusqu'à ce que ça sente bon.", "Ajouter le bol 1, baisser à feu moyen-doux et laisser frémir 1 min 30.", "Ajouter le bol 3 et remuer jusqu'à ce que la sauce épaississe, puis le bol 4 et cuire 15 s. Parsemer de coriandre et servir."]
  },
  {
    id: "nouilles-de-singapour-aux-crevettes", nom: "Nouilles de Singapour aux crevettes", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53368",
    ingredients: [
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "nouilles-de-riz", quantite: 100, unite: "g", ou: { id: "nouilles-chinoises", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 45, unite: "ml" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "chou-chinois", quantite: 150, unite: "g", ou: { id: "chou", quantite: 150, unite: "g" } },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "ciboulette", quantite: 10, unite: "g" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "curry-en-poudre", quantite: 5, unite: "g" },
      { id: "crevettes", quantite: 120, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Sauce : mélanger l'huile de sésame, la sauce soja et le vinaigre de riz.", "Cuire les vermicelles de riz 2 min dans l'eau bouillante (ils doivent rester un peu fermes), les égoutter, les rincer à l'eau froide et les couper aux ciseaux en tronçons.", "Dans une grande poêle à feu moyen, chauffer 1 cuillère à soupe d'huile et brouiller l'œuf battu 2 min. Le réserver.", "Ajouter 1 cuillère à soupe d'huile, puis le gingembre et l'ail hachés, la carotte en bâtonnets, le piment émincé, l'oignon en lamelles et une pincée de sel. Cuire 2 min en remuant.", "Ajouter le reste de l'huile, puis le jambon en lanières, le chou émincé, l'oignon nouveau, le poivron en lanières et le curry. Cuire 1 min, ajouter les crevettes et cuire 3 min, jusqu'à ce qu'elles soient roses.", "Ajouter l'œuf, la sauce et les nouilles en deux fois, en mélangeant 1 min à chaque fois. Goûter, ajouter un peu de sel ou de sauce soja si besoin, parsemer de coriandre et servir."]
  },
  {
    id: "poulet-aigre-doux", nom: "Poulet aigre-doux", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53376",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fecule", quantite: 6, unite: "g" },
      { id: "ananas-en-boite", quantite: 1, unite: "boîte" },
      { id: "vinaigre", quantite: 60, unite: "ml" },
      { id: "ketchup", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper le poulet en morceaux et le mélanger avec le blanc de l'œuf, une demi-cuillère à café de sel et la fécule. Laisser 15 min.", "Sauce : mélanger 60 ml du jus de la boîte d'ananas, le vinaigre, le ketchup, une demi-cuillère à café de sel et le sucre.", "Chauffer un wok à feu vif, ajouter 1 cuillère à soupe d'huile. Étaler le poulet en une couche, le laisser dorer 1 min sans toucher, retourner et cuire 1 min (il reste rosé au centre). Le réserver.", "À feu moyen, ajouter le reste de l'huile, puis les poivrons en morceaux et le gingembre haché : 1 min.", "Ajouter les morceaux d'ananas (environ 280 g) et la sauce, monter à feu vif. Quand ça frémit, remettre le poulet et laisser mijoter 1 à 2 min, jusqu'à ce qu'il soit cuit. Ajuster sucre ou vinaigre à son goût et servir avec du riz."]
  },
  {
    id: "porc-aigre-doux", nom: "Porc aigre-doux", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52949",
    ingredients: [
      { id: "filet-mignon-de-porc", quantite: 250, unite: "g", ou: { id: "cote-de-porc", quantite: 2, unite: "pièce" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "fecule", quantite: 10, unite: "g" },
      { id: "sauce-tomate", quantite: 30, unite: "g" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Séparer le blanc du jaune de l'œuf. Couper le porc en lanières.", "Mariner le porc 20 min avec une pincée de sel, 1 cuillère à café de fécule, la sauce soja et le blanc d'œuf.", "Mélanger le reste de la fécule avec un peu d'eau et le vinaigre.", "Chauffer l'huile dans un wok (environ 190 °C : un morceau de porc doit grésiller fort). Frire le porc jusqu'à ce qu'il soit doré, puis le réserver.", "Ne garder qu'un peu d'huile dans le wok, ajouter la sauce tomate et le sucre et chauffer en remuant. Ajouter le reste de l'eau, bien chauffer, puis remettre le porc.", "Verser le mélange fécule-vinaigre et faire sauter jusqu'à ce que la sauce enrobe bien le porc. Parsemer de coriandre et servir avec du riz."]
  },
  {
    id: "boeuf-du-sichuan", nom: "Bœuf du Sichuan", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52950",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 250, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fecule", quantite: 25, unite: "g" },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 2, unite: "pièce", ou: { id: "poireau", quantite: 1, unite: "pièce" } },
      { id: "champignons", quantite: 70, unite: "g" },
      { id: "vin-de-shaoxing", quantite: 15, unite: "ml", ou: { id: "vin-blanc", quantite: 15, unite: "ml" } },
      { id: "eau", quantite: 270, unite: "ml" },
      { id: "sauce-huitre", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sauce-sriracha", quantite: 3, unite: "ml", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Couper le bœuf en lamelles. Le mélanger avec une demi-cuillère à café de sel, l'huile de sésame, une pincée de poivre, le blanc de l'œuf, 2 cuillères à soupe de fécule et 1 cuillère à soupe d'huile.", "Chauffer 2 cuillères à soupe d'huile dans un wok et faire dorer le bœuf. Le réserver.", "Ajouter 1 cuillère à soupe d'huile, le gingembre et l'ail hachés, faire sauter quelques secondes.", "Ajouter l'oignon, la carotte, le poivron vert, le céleri et les champignons émincés, puis le vin de Shaoxing et 240 ml d'eau.", "Ajouter la sauce huître, la sauce piquante, le sucre, le bœuf et la sauce soja.", "Délayer le reste de la fécule dans 2 cuillères à soupe d'eau et la verser petit à petit jusqu'à ce que la sauce épaississe. Servir avec du riz."]
  },
  // --- Lot 2 ---
  {
    id: "rouleaux-imperiaux-au-porc", nom: "Rouleaux impériaux au porc (au four)", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53373",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "porc-hache", quantite: 250, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 8, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "chou", quantite: 110, unite: "g" },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 8, unite: "ml", ou: { id: "vinaigre", quantite: 8, unite: "ml" } },
      { id: "feuilles-de-wonton", quantite: 6, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sauce-aux-prunes", quantite: 30, unite: "ml", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 200 °C (ou la friteuse sans huile à 180 °C).", "Farce : chauffer l'huile d'olive à feu moyen, cuire le porc haché 6 à 8 min en l'émiettant. Ajouter l'ail et le gingembre hachés, la carotte râpée, l'oignon nouveau émincé et le chou en fines lanières. Cuire 3 à 4 min jusqu'à ce que le chou soit tendre. Assaisonner avec la sauce soja et le vinaigre de riz, puis laisser tiédir.", "Poser une grande feuille (format rouleau impérial) en losange, une pointe vers soi. Mettre environ 4 cuillères à soupe de farce au milieu. Mouiller les bords avec le doigt, rabattre les côtés vers le centre puis rouler bien serré en s'éloignant de soi.", "Poser les rouleaux sur une plaque sans qu'ils se touchent et les badigeonner d'huile.", "Cuire 10 min, retourner, badigeonner l'autre face et cuire encore 8 à 10 min, jusqu'à ce qu'ils soient dorés et croustillants (friteuse sans huile : 6 à 7 min puis 4 à 5 min). Servir aussitôt, avec la sauce aux prunes et un peu de sauce soja."]
  },
  {
    id: "wontons-au-porc", nom: "Wontons au porc", cuisine: "chinoise",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52948",
    ingredients: [
      { id: "porc-hache", quantite: 225, unite: "g", ou: { id: "boeuf-hache", quantite: 225, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "huile-de-sesame", quantite: 3, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 3, unite: "ml" } },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", ou: { id: "poireau", quantite: 1, unite: "pièce" } },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "feuilles-de-wonton", quantite: 20, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 500, unite: "ml" },
      { id: "sauce-aux-prunes", quantite: 30, unite: "ml", optionnel: true }
    ],
    etapes: ["Mélanger dans un bol le porc, l'ail et le gingembre hachés, la sauce soja, l'huile de sésame, la carotte, le céleri et l'oignon nouveau hachés très fin.", "Séparer les feuilles de wonton. Mettre une bonne cuillère à café de farce au centre de chaque feuille.", "Mouiller deux bords de la feuille avec un peu d'eau, plier en triangle et bien souder les bords. Rapprocher les deux pointes du grand côté et les pincer ensemble.", "Chauffer l'huile à 180 °C (un morceau de feuille doit grésiller et dorer en quelques secondes). Frire les wontons 4 ou 5 à la fois, jusqu'à ce qu'ils soient dorés.", "Égoutter sur du papier absorbant et servir avec de la sauce aux prunes ou un peu de sauce soja."]
  },
  {
    id: "chou-chinois-aux-crevettes-sechees", nom: "Chou chinois aux crevettes séchées", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53377",
    ingredients: [
      { id: "crevettes-sechees", quantite: 15, unite: "g", ou: { id: "crevettes", quantite: 60, unite: "g" } },
      { id: "eau", quantite: 195, unite: "ml" },
      { id: "chou-chinois", quantite: 500, unite: "g", ou: { id: "chou", quantite: 500, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mettre les crevettes séchées dans un bol, verser 180 ml d'eau bouillante, couvrir et laisser 30 min. (Avec des crevettes fraîches, sauter cette étape.)", "Pendant ce temps, couper le chou en deux, retirer le trognon et couper le reste en morceaux de 2 à 3 cm, en séparant les parties blanches épaisses et les feuilles vertes.", "Égoutter les crevettes. Chauffer l'huile à feu vif dans un wok, ajouter l'oignon nouveau émincé, le gingembre haché et les crevettes (attention aux projections). Faire sauter 1 min.", "Ajouter les parties blanches du chou et cuire 3 à 4 min à feu moyen-vif, jusqu'à ce que les bords deviennent un peu transparents. Baisser le feu, ajouter les feuilles vertes et cuire 2 min.", "Mélanger la sauce soja, 1 cuillère à soupe d'eau froide et la fécule, verser sur le chou et remuer jusqu'à ce que la sauce épaississe un peu. Saler, poivrer et servir, avec du riz si on veut."]
  },
  {
    id: "crevettes-kung-pao", nom: "Crevettes kung pao", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "52946",
    ingredients: [
      { id: "crevettes", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sauce-tomate", quantite: 5, unite: "g" },
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "cacahuetes", quantite: 65, unite: "g" },
      { id: "piment-frais", quantite: 2, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "chataignes-d-eau", quantite: 150, unite: "g", optionnel: true },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger la fécule et 1 cuillère à soupe de sauce soja, y mettre les crevettes et laisser 10 min.", "Sauce : mélanger le vinaigre, le reste de la sauce soja, la sauce tomate, le sucre et 2 cuillères à soupe d'eau.", "Chauffer un wok à feu très vif, ajouter 1 cuillère à soupe d'huile et faire sauter les crevettes jusqu'à ce qu'elles soient dorées par endroits. Les réserver.", "Ajouter le reste de l'huile, les cacahuètes, les piments émincés et les châtaignes d'eau. Faire sauter 2 min, jusqu'à ce que les cacahuètes colorent. Ajouter le gingembre et l'ail hachés, 1 min.", "Remettre les crevettes, verser la sauce et laisser frémir 2 min jusqu'à ce qu'elle épaississe un peu. Servir avec du riz."]
  },
  {
    id: "ramen-a-l-oeuf", nom: "Ramen à l'œuf", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53383",
    ingredients: [
      { id: "nouilles-ramyeon", quantite: 2, unite: "pièce", ou: { id: "nouilles-chinoises", quantite: 200, unite: "g" } },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sauce-sriracha", quantite: 5, unite: "ml", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "mirin", quantite: 30, unite: "ml", optionnel: true },
      { id: "sucre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Porter de l'eau à ébullition, y déposer doucement les œufs et les cuire exactement 6 min 30 à 7 min. Les plonger aussitôt dans un bol d'eau très froide 3 à 5 min, puis les écaler.", "Facultatif (meilleur) : faire mariner les œufs écalés au moins 4 h au frais dans 2 cuillères à soupe de sauce soja, le mirin, le sucre et 4 cuillères à soupe d'eau.", "Porter le litre d'eau à ébullition, cuire les nouilles comme indiqué sur le paquet (avec leur sachet d'assaisonnement si on veut).", "Ajouter dans le bouillon le reste de la sauce soja, la sauce piquante, une pincée de sel et de poivre.", "Servir en bols, parsemer d'oignon nouveau émincé et poser dessus les œufs coupés en deux : le jaune coulant se mélange au bouillon."]
  },
  {
    id: "haricots-sautes-du-sichuan", nom: "Haricots sautés du Sichuan", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53371",
    ingredients: [
      { id: "haricots-verts", quantite: 250, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "poivre-du-sichuan", quantite: 2, unite: "g", ou: { id: "poivre", quantite: 1, unite: "g" } },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Équeuter les haricots (des haricots kilomètre si on en trouve) et les couper en tronçons de 5 à 6 cm. Bien les sécher.", "Chauffer l'huile à feu vif dans un wok. Faire sauter les haricots 5 à 7 min, en les laissant dorer et cloquer par endroits.", "Baisser à feu moyen, ajouter le piment et le poivre du Sichuan, faire sauter 30 s jusqu'à ce que ça sente bon.", "Ajouter une pincée de sel, le sucre, l'huile de sésame et un trait de sauce soja. Mélanger 30 s et servir, avec du riz si on veut."]
  },
  {
    id: "tofu-soyeux-sauce-soja-sesame", nom: "Tofu soyeux, sauce soja-sésame", cuisine: "chinoise",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "TheMealDB", idSource: "53369",
    ingredients: [
      { id: "tofu-soyeux", quantite: 450, unite: "g", ou: { id: "tofu", quantite: 450, unite: "g" } },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "tahini", quantite: 30, unite: "g" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Égoutter le tofu et le démouler délicatement sur une grande assiette.", "Le couper en tranches d'un peu plus de 1 cm, puis pousser doucement les tranches du plat de la main pour les étaler en éventail.", "Arroser de sauce soja et de tahini (sauce sésame), détendu avec un peu d'eau s'il est trop épais.", "Parsemer d'oignon nouveau émincé et de graines de sésame. Servir froid, ou tiédi 30 s par 30 s au micro-ondes. Se garde 2 jours au frais, bien couvert."]
  }
]);

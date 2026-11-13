// ============================================================
// RECETTES : cuisine thaïlandaise (27 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/japonaise.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "nouilles-sautees-pad-kee-mao", nom: "Nouilles sautées « ivres » (pad kee mao)", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53193",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 200, unite: "g", ou: { id: "nouilles-chinoises", quantite: 200, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "piment-frais", quantite: 3, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "steak-de-boeuf", quantite: 225, unite: "g" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 60, unite: "ml" },
      { id: "sauce-huitre", quantite: 60, unite: "ml", ou: { id: "sauce-soja", quantite: 60, unite: "ml" } },
      { id: "sauce-poisson", quantite: 5, unite: "ml", ou: { id: "sauce-soja", quantite: 5, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" }
    ],
    etapes: ["Cuire les nouilles de riz comme indiqué sur le paquet, les égoutter. Mélanger dans un bol la sauce soja, la sauce huître, la sauce poisson et le sucre.", "Chauffer l'huile à feu vif dans un wok, faire sauter l'ail haché et les piments émincés 20 secondes.", "Ajouter le bœuf en fines lanières, saisir 1 min, puis le brocoli en petits bouquets (100 g environ) et cuire encore 1 min.", "Ajouter les nouilles et la sauce, faire sauter 1 à 2 min jusqu'à ce que tout soit bien chaud.", "Incorporer le basilic, couper le feu et servir aussitôt."]
  },
  {
    id: "curry-de-boeuf-massaman", nom: "Curry de bœuf massaman", cuisine: "thaïlandaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "52827",
    ingredients: [
      { id: "cacahuetes", quantite: 40, unite: "g" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "pate-de-curry", quantite: 30, unite: "g" },
      { id: "steak-de-boeuf", quantite: 300, unite: "g" },
      { id: "pomme-de-terre", quantite: 225, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "feuilles-de-combava", quantite: 2, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "tamarin", quantite: 8, unite: "g", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "sauce-poisson", quantite: 8, unite: "ml", ou: { id: "sauce-soja", quantite: 8, unite: "ml" } },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 200 °C. Griller les cacahuètes 5 min sur une plaque, les laisser tiédir puis les concasser. Baisser le four à 180 °C.", "Dans une cocotte avec couvercle, chauffer 2 cuillères à soupe de lait de coco, ajouter la pâte de curry (massaman de préférence) et la faire revenir 1 min.", "Ajouter le bœuf coupé en lanières épaisses et le faire dorer en l'enrobant bien de pâte.", "Ajouter le reste du lait de coco, l'eau, les pommes de terre en morceaux, l'oignon en quartiers, les feuilles de combava, le bâton de cannelle, le tamarin, le sucre, la sauce poisson et la plupart des cacahuètes.", "Porter à frémissement, couvrir et cuire 2 h au four, jusqu'à ce que le bœuf soit tendre.", "Parsemer de piment émincé et du reste des cacahuètes. Servir avec du riz si on veut."]
  },
  {
    id: "pad-see-ew", nom: "Nouilles sautées au poulet (pad see ew)", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52774",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 180, unite: "g", ou: { id: "nouilles-chinoises", quantite: 180, unite: "g" } },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "sauce-huitre", quantite: 30, unite: "ml", ou: { id: "sauce-soja", quantite: 30, unite: "ml" } },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "brocoli", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Cuire les nouilles de riz comme indiqué sur le paquet et les égoutter. Mélanger dans un bol la sauce soja, la sauce huître, le vinaigre, le sucre et l'eau.", "Mettre l'ail haché et l'huile dans un wok sur feu vif. Quand c'est chaud, ajouter le poulet en lamelles et les tiges du brocoli émincées, cuire jusqu'à ce que le poulet soit doré.", "Pousser le tout sur le côté, casser l'œuf dans le wok et le brouiller (s'il accroche un peu, c'est normal : ça donne du goût).", "Ajouter les nouilles, les fleurettes de brocoli et la sauce. Mélanger doucement jusqu'à ce que les nouilles soient bien colorées. Servir aussitôt."]
  },
  {
    id: "pad-thai-aux-crevettes", nom: "Pad thaï aux crevettes", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53191",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 125, unite: "g", ou: { id: "nouilles-chinoises", quantite: 125, unite: "g" } },
      { id: "citron-vert", quantite: 4, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sauce-poisson", quantite: 30, unite: "ml", ou: { id: "sauce-soja", quantite: 30, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "pousses-de-soja", quantite: 140, unite: "g" },
      { id: "cacahuetes", quantite: 25, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "sauce-chili-douce", quantite: 30, unite: "ml", optionnel: true }
    ],
    etapes: ["Mettre les nouilles dans un saladier, les couvrir d'eau bouillante et laisser 4 min, puis égoutter et passer sous l'eau froide.", "Mélanger dans un bol le jus de 3 citrons verts, le piment en poudre (piment de Cayenne), le sucre et la sauce poisson.", "Chauffer l'huile dans un wok et faire revenir les crevettes jusqu'à ce qu'elles soient chaudes. Ajouter les oignons nouveaux émincés et les nouilles, mélanger.", "Verser la sauce au citron vert, ajouter les pousses de soja, la moitié des cacahuètes concassées et de la coriandre. Cuire 1 min.", "Servir parsemé du reste des cacahuètes et de la coriandre, avec le dernier citron vert en quartiers et de la sauce chili douce si on veut."]
  },
  {
    id: "curry-panang-au-poulet", nom: "Curry panang au poulet", cuisine: "thaïlandaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53192",
    ingredients: [
      { id: "lait-de-coco", quantite: 400, unite: "ml" },
      { id: "pate-de-curry", quantite: 20, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "haricots-verts", quantite: 100, unite: "g" },
      { id: "sauce-poisson", quantite: 30, unite: "ml", ou: { id: "sauce-soja", quantite: 30, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "feuilles-de-combava", quantite: 2, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      // Pour faire la pâte de curry maison au lieu de l'acheter (facultatif)
      { id: "piment-en-poudre", quantite: 2, unite: "g", optionnel: true },
      { id: "pate-de-crevettes", quantite: 5, unite: "g", optionnel: true },
      { id: "ail", quantite: 4, unite: "gousse", optionnel: true },
      { id: "galanga", quantite: 15, unite: "g", optionnel: true },
      { id: "citronnelle", quantite: 1, unite: "pièce", optionnel: true },
      { id: "citron-vert", quantite: 2, unite: "pièce", optionnel: true },
      { id: "noix-de-muscade", quantite: 2, unite: "g", optionnel: true },
      { id: "graines-de-coriandre", quantite: 2, unite: "g", optionnel: true },
      { id: "cumin", quantite: 2, unite: "g", optionnel: true },
      { id: "cacahuetes", quantite: 30, unite: "g", optionnel: true },
      { id: "sel", quantite: 5, unite: "g" }
    ],
    etapes: ["Pâte maison (facultatif, sinon prendre une pâte de curry panang du commerce) : piler ou mixer ensemble les piments séchés (ici le piment en poudre), la pâte de crevettes, l'ail, le galanga, la citronnelle, le zeste des citrons verts, la muscade, la coriandre et le cumin moulus, les cacahuètes et 1 cuillère à café de sel. Elle se garde 2 semaines au frigo.", "Chauffer 2 à 3 cuillères à soupe de lait de coco dans une casserole. Quand il bouillonne, ajouter la pâte de curry et remuer 1 min.", "Ajouter le poulet en morceaux et le faire dorer 3 à 4 min, puis les haricots verts.", "Ajouter la sauce poisson, le sucre, puis le reste du lait de coco et la moitié des feuilles de combava. Laisser mijoter 3 à 5 min jusqu'à ce que le poulet soit cuit. Goûter : rajouter sucre ou sauce poisson si besoin.", "Ajouter le basilic, mélanger et retirer du feu. Servir avec du riz, parsemé de piment émincé et du reste des feuilles de combava."]
  },
  {
    id: "crevettes-sautees-aux-legumes", nom: "Crevettes sautées aux légumes", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53200",
    ingredients: [
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "coriandre", quantite: 20, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "sauce-poisson", quantite: 45, unite: "ml", ou: { id: "sauce-soja", quantite: 45, unite: "ml" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "chataignes-d-eau", quantite: 85, unite: "g", optionnel: true },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "nouilles-de-riz", quantite: 150, unite: "g", optionnel: true },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre les crevettes dans un bol. Mixer le piment, l'ail, les tiges de coriandre et le sucre, ajouter le jus d'un demi-citron vert et la sauce poisson, puis verser sur les crevettes.", "Chauffer 15 ml d'huile dans un wok, faire revenir le gingembre râpé et les oignons nouveaux émincés 1 min. Ajouter le poivron en lanières et cuire 1 min.", "Ajouter les châtaignes d'eau et les pousses de soja, mélanger jusqu'à ce que les pousses ramollissent. Ajouter la sauce soja et du poivre, puis verser le tout dans un plat.", "Chauffer le reste d'huile, ajouter les crevettes sans leur marinade et les faire sauter 1 à 2 min jusqu'à ce qu'elles soient roses. Verser la marinade, mélanger vite et déposer sur les légumes.", "Parsemer des feuilles de coriandre, arroser du reste du premier citron vert. Servir sur des nouilles de riz si on veut, avec le second citron vert en quartiers."]
  },
  {
    id: "nouilles-epicees-aux-crevettes", nom: "Nouilles épicées aux crevettes", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53209",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 200, unite: "g", ou: { id: "nouilles-chinoises", quantite: 200, unite: "g" } },
      { id: "huile-de-sesame", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "crevettes", quantite: 450, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "coriandre", quantite: 20, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "cacahuetes", quantite: 30, unite: "g" }
    ],
    etapes: ["Cuire les nouilles comme indiqué sur le paquet, les égoutter et les réserver.", "Chauffer l'huile dans une grande poêle, verser les œufs battus et faire une omelette fine : 1 à 2 min, la retourner et cuire 1 min. La sortir et la couper en fines lanières.", "Dans la même poêle, faire revenir le piment émincé et le gingembre râpé 1 à 2 min, puis ajouter les nouilles, les crevettes et l'omelette.", "Ajouter la sauce soja et faire sauter 1 min. Ajouter les herbes hachées, le zeste et le jus du citron vert, parsemer de cacahuètes concassées et servir."]
  },
  {
    id: "poulet-saute-au-piment-et-basilic", nom: "Poulet sauté au piment et basilic", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53201",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "echalote", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "piment-frais", quantite: 2, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "basilic", quantite: 10, unite: "g" }
    ],
    etapes: ["Chauffer un wok à feu très vif avec la moitié de l'huile. Faire sauter le poulet en morceaux 8 à 10 min jusqu'à ce qu'il soit doré, puis le sortir.", "Remettre le reste d'huile, faire revenir l'ail et les échalotes hachés 3 min jusqu'à ce qu'ils soient dorés.", "Remettre le poulet, ajouter les piments émincés, la sauce poisson, la sauce soja et le sucre. Faire sauter encore 8 à 10 min jusqu'à ce que le poulet soit bien cuit.", "Ajouter le basilic, mélanger et servir aussitôt."]
  },
  {
    id: "boeuf-saute-a-la-thaie", nom: "Bœuf sauté à la thaïe", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53199",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "steak-de-boeuf", quantite: 200, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "sauce-huitre", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Chauffer un wok jusqu'à ce qu'il fume. Verser l'huile, puis le bœuf en fines lanières et le piment émincé.", "Faire sauter en remuant sans arrêt environ 3 min, jusqu'à ce que la viande soit dorée.", "Verser la sauce huître et cuire jusqu'à ce qu'elle nappe la viande.", "Ajouter le basilic et servir avec du riz si on veut."]
  },
  {
    id: "galettes-de-poulet-sauce-chili-douce", nom: "Galettes de poulet thaïes, sauce chili douce", cuisine: "thaïlandaise", type: "entree",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53206",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sauce-chili-douce", quantite: 30, unite: "ml", optionnel: true },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer le poulet en morceaux avec l'ail, le gingembre, l'oignon, la coriandre et le piment, saler et poivrer, jusqu'à ce que le poulet soit finement haché.", "Avec les mains, former 6 petites galettes.", "Chauffer l'huile dans une poêle et cuire les galettes à feu moyen 6 à 8 min, en les retournant une fois.", "Servir chaud avec la sauce chili douce, des quartiers de citron vert et l'oignon nouveau émincé."]
  },
  {
    id: "bouillon-thai-coco-et-legumes", nom: "Bouillon thaï coco et légumes", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53208",
    ingredients: [
      { id: "pate-de-curry", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "nouilles-chinoises", quantite: 90, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "chou-chinois", quantite: 200, unite: "g", ou: { id: "chou", quantite: 200, unite: "g" } },
      { id: "pousses-de-soja", quantite: 75, unite: "g" },
      { id: "tomates-cerises", quantite: 45, unite: "g", ou: { id: "tomate", quantite: 1, unite: "pièce" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Faire revenir la pâte de curry (rouge de préférence) avec l'huile 1 min dans une grande casserole.", "Ajouter le bouillon cube dissous dans l'eau chaude, le lait de coco et le sucre. Laisser frémir 3 min.", "Ajouter les nouilles, les carottes en fines lanières et le chou chinois émincé, et cuire 4 à 6 min jusqu'à ce que tout soit tendre.", "Ajouter les pousses de soja et les tomates cerises coupées en deux, puis le jus du citron vert. Servir dans des bols, parsemé d'oignon nouveau et de coriandre."]
  },
  {
    id: "soupe-de-nouilles-au-curry-et-crevettes", nom: "Soupe de nouilles au curry et crevettes", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53195",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "pate-de-curry", quantite: 15, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "pousses-de-soja", quantite: 80, unite: "g" },
      { id: "crevettes", quantite: 150, unite: "g" },
      { id: "lait-de-coco", quantite: 150, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 225, unite: "ml" },
      { id: "nouilles-udon", quantite: 250, unite: "g", ou: { id: "nouilles-chinoises", quantite: 250, unite: "g" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Chauffer l'huile dans une casserole à feu moyen et cuire la pâte de curry (verte de préférence) 1 min.", "Ajouter les légumes (la recette prend un sachet de légumes pour wok : ici poivron et carotte en lanières, pousses de soja) et les crevettes. Cuire 3 min jusqu'à ce que les crevettes soient presque roses.", "Ajouter le lait de coco, le bouillon cube dissous dans l'eau chaude et les nouilles. Porter à ébullition puis laisser frémir 5 min.", "Répartir dans deux bols et parsemer des herbes, du piment et de l'oignon nouveau émincés."]
  },
  {
    id: "riz-saute-thai-crevettes-petits-pois", nom: "Riz sauté thaï aux crevettes et petits pois", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53198",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "crevettes", quantite: 125, unite: "g" },
      { id: "riz", quantite: 70, unite: "g" },
      { id: "petits-pois", quantite: 40, unite: "g" },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "sauce-poisson", quantite: 8, unite: "ml", ou: { id: "sauce-soja", quantite: 8, unite: "ml" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sauce-sriracha", quantite: 15, unite: "ml", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire le riz à l'avance (complet de préférence) et le laisser refroidir.", "Chauffer la moitié de l'huile dans un wok, faire revenir l'oignon, l'ail et le piment émincés 2 à 3 min. Ajouter les crevettes et cuire 1 min.", "Ajouter le riz et les petits pois, faire sauter jusqu'à ce que ce soit très chaud. Ajouter la sauce soja et la sauce poisson, puis la coriandre hachée. Garder au chaud.", "Chauffer le reste d'huile dans une poêle et cuire les œufs au plat, salés et poivrés.", "Répartir le riz dans les assiettes, poser un œuf sur chaque, et servir avec de la sauce piquante si on veut."]
  },
  {
    id: "curry-vert-de-poulet", nom: "Curry vert de poulet", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52814",
    ingredients: [
      { id: "pomme-de-terre", quantite: 110, unite: "g" },
      { id: "haricots-verts", quantite: 50, unite: "g" },
      { id: "huile-de-tournesol", quantite: 8, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "pate-de-curry", quantite: 10, unite: "g" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "sauce-poisson", quantite: 5, unite: "ml", ou: { id: "sauce-soja", quantite: 5, unite: "ml" } },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "feuilles-de-combava", quantite: 1, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Cuire les pommes de terre (petites, nouvelles) en morceaux 5 min dans l'eau bouillante, ajouter les haricots verts et cuire encore 3 min. Égoutter.", "Chauffer l'huile très fort dans un wok, ajouter l'ail haché et le dorer quelques secondes, sans le laisser brunir.", "Ajouter la pâte de curry (verte de préférence) et remuer quelques secondes, puis verser le lait de coco et porter à ébullition.", "Ajouter la sauce poisson, le sucre puis le poulet en morceaux. Couvrir et laisser mijoter 8 min.", "Ajouter les pommes de terre et les haricots, puis la feuille de combava ciselée (ou le zeste du citron vert). Ajouter le basilic juste avant de servir, avec du riz si on veut."]
  },
  {
    id: "curry-de-porc-aux-cacahuetes", nom: "Curry de porc aux cacahuètes", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53197",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 8, unite: "ml" },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "filet-mignon-de-porc", quantite: 200, unite: "g", ou: { id: "cote-de-porc", quantite: 2, unite: "pièce" } },
      { id: "pate-de-curry", quantite: 30, unite: "g" },
      { id: "beurre-de-cacahuete", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Chauffer l'huile dans une grande casserole, ajouter les oignons nouveaux émincés et les tiges de coriandre hachées, cuire 1 min. Ajouter le porc en tranches et cuire 5 min jusqu'à ce qu'il dore.", "Ajouter la pâte de curry (rouge de préférence) et le beurre de cacahuète. Après 30 secondes, ajouter le sucre, la sauce soja, le lait de coco et l'eau. Couvrir et laisser mijoter 15 min en remuant de temps en temps.", "Retirer le couvercle, ajouter le maïs égoutté (environ 90 g) et monter le feu. Laisser bouillonner 3 min pour que la sauce épaississe.", "Ajouter le jus du citron vert, goûter, et servir parsemé des feuilles de coriandre, avec du riz si on veut."]
  },
  {
    id: "curry-de-crevettes-thai", nom: "Curry de crevettes à la thaïe", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53205",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 8, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "pate-de-curry", quantite: 5, unite: "g" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "lait-de-coco", quantite: 25, unite: "ml" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Chauffer l'huile dans une casserole, faire revenir l'oignon haché et le gingembre quelques minutes.", "Ajouter la pâte de curry (rouge de préférence) et cuire 1 min. Verser la sauce tomate (tomates concassées) et le lait de coco (de la crème de coco à l'origine). Porter à ébullition puis laisser mijoter 5 min, en ajoutant un peu d'eau si c'est trop épais.", "Ajouter les crevettes et cuire 5 à 10 min selon leur taille.", "Servir avec du riz, parsemé de coriandre hachée si on veut."]
  },
  {
    id: "soupe-de-potiron-a-la-thaie", nom: "Soupe de potiron à la thaïe", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53210",
    ingredients: [
      { id: "potiron", quantite: 500, unite: "g", ou: { id: "patate-douce", quantite: 500, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 8, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "pate-de-curry", quantite: 20, unite: "g" },
      { id: "lait-de-coco", quantite: 130, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 270, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 5, unite: "g", optionnel: true },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mélanger le potiron en cubes avec la moitié de l'huile, du sel et du poivre, et le rôtir 30 min jusqu'à ce qu'il soit doré et tendre.", "Pendant ce temps, faire revenir doucement dans une casserole l'oignon émincé, le gingembre râpé et la citronnelle écrasée avec le reste d'huile, 8 à 10 min.", "Ajouter la pâte de curry (rouge de préférence) 1 min, puis le potiron rôti, le lait de coco (en gardant 1 cuillère à soupe) et le bouillon cube dissous dans l'eau chaude. Laisser frémir 5 min, puis retirer la citronnelle.", "Mixer jusqu'à ce que ce soit lisse. Réchauffer, assaisonner avec le jus du citron vert, du sel, du poivre et un peu de sucre si besoin.", "Servir avec un filet du lait de coco gardé et du piment émincé si on veut."]
  },
  {
    id: "salade-de-nouilles-de-riz-au-porc", nom: "Salade de nouilles de riz au porc", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53203",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 75, unite: "g", ou: { id: "nouilles-chinoises", quantite: 75, unite: "g" } },
      { id: "pousses-de-soja", quantite: 100, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sauce-poisson", quantite: 20, unite: "ml", ou: { id: "sauce-soja", quantite: 20, unite: "ml" } },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "porc-hache", quantite: 250, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      // Variante au bœuf, à la place du porc (facultatif)
      { id: "steak-de-boeuf", quantite: 350, unite: "g", optionnel: true },
      { id: "graines-de-sesame", quantite: 15, unite: "g", optionnel: true },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "menthe", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Mettre les nouilles (vermicelles de riz) et les pousses de soja dans un saladier, couvrir d'eau bouillante et laisser 4 min. Égoutter, rincer à l'eau froide et égoutter à nouveau.", "Mélanger le zeste et le jus du citron vert, la sauce poisson et le sucre. Verser sur les nouilles avec l'oignon rouge émincé et la salade ciselée.", "Faire sauter le porc haché dans l'huile avec le gingembre râpé et le piment en poudre (de Cayenne) 10 min, jusqu'à ce qu'il soit bien cuit. Le mélanger aux nouilles et servir tiède.", "Variante au bœuf : enrober les steaks d'un peu d'huile puis de graines de sésame, les cuire 5 min en les retournant à mi-cuisson, laisser reposer 5 min et les trancher finement. Ajouter aux nouilles le piment émincé et la menthe, puis poser le bœuf dessus."]
  },
  {
    id: "tom-kha-gai", nom: "Soupe de poulet au lait de coco (tom kha gai)", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53207",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "lait-de-coco", quantite: 400, unite: "ml" },
      { id: "galanga", quantite: 15, unite: "g", ou: { id: "gingembre", quantite: 15, unite: "g" } },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "feuilles-de-combava", quantite: 4, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "champignons", quantite: 150, unite: "g" },
      { id: "piment-frais", quantite: 3, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "sauce-poisson", quantite: 40, unite: "ml", ou: { id: "sauce-soja", quantite: 40, unite: "ml" } },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Verser le bouillon cube dissous dans l'eau chaude et le lait de coco dans une grande casserole à feu moyen. Ajouter le galanga, la citronnelle et les feuilles de combava, et porter doucement à frémissement 6 à 8 min.", "Ajouter le poulet désossé en morceaux et cuire 8 à 10 min à petit frémissement.", "Ajouter les champignons (pleurotes de préférence) et les piments, laisser frémir encore 3 à 5 min.", "Ajouter le sucre, puis la sauce poisson et le jus des citrons verts petit à petit, en goûtant.", "Retirer le galanga, la citronnelle et les feuilles de combava. Servir parsemé de coriandre, avec du riz à côté si on veut."]
  },
  {
    id: "tom-yum-aux-crevettes", nom: "Soupe aigre-piquante aux crevettes (tom yum)", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53196",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "galanga", quantite: 20, unite: "g", ou: { id: "gingembre", quantite: 20, unite: "g" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "feuilles-de-combava", quantite: 3, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "crevettes", quantite: 150, unite: "g" },
      { id: "sauce-poisson", quantite: 45, unite: "ml", ou: { id: "sauce-soja", quantite: 45, unite: "ml" } },
      { id: "piment-frais", quantite: 6, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "citron-vert", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Porter à ébullition le bouillon cube dissous dans l'eau. Ajouter la citronnelle écrasée, le galanga en 5 tranches, les racines (ou tiges) de coriandre et les feuilles de combava, puis laisser frémir 2 min.", "Ajouter les crevettes (6 grosses), la sauce poisson, les petits piments et le jus des citrons verts (4 cuillères à soupe), et refaire bouillir.", "Goûter et ajuster avec un peu plus de jus de citron vert ou de sauce poisson. Servir parsemé de feuilles de coriandre."]
  },

  // ----- Lot 2 -----
  {
    id: "ragout-de-boeuf-citronnelle-et-nouilles", nom: "Ragoût de bœuf à la citronnelle et nouilles de riz", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 105, portions: 2,
    source: "TheMealDB", idSource: "53211",
    ingredients: [
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "citronnelle", quantite: 3, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 2, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "steak-de-boeuf", quantite: 250, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "cinq-epices", quantite: 2, unite: "g", ou: { id: "cannelle", quantite: 2, unite: "g" } },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "nouilles-de-riz", quantite: 100, unite: "g", ou: { id: "nouilles-chinoises", quantite: 100, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Mixer le gingembre, l'ail, la citronnelle, la moitié de la coriandre et 1 piment jusqu'à obtenir une purée.", "Chauffer l'huile à feu doux dans une casserole, ajouter la purée et cuire 5 min.", "Ajouter le bœuf en morceaux, la sauce soja, le cinq-épices, le sucre et le bouillon cube dissous dans l'eau chaude (bouillon de bœuf de préférence). Couvrir, porter à ébullition puis laisser mijoter 1 h 15.", "Retirer le couvercle et cuire encore 15 min jusqu'à ce que le bœuf soit tendre.", "Juste avant de servir, cuire les nouilles comme indiqué sur le paquet et les égoutter. Les répartir dans deux bols, verser le ragoût dessus et parsemer du reste de piment émincé et de coriandre. Servir avec des quartiers de citron vert."]
  },
  {
    id: "brochettes-de-poulet-au-curry-rouge", nom: "Brochettes de poulet au curry rouge", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53204",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "pate-de-curry", quantite: 30, unite: "g" },
      { id: "lait-de-coco", quantite: 30, unite: "ml" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Allumer le barbecue ou chauffer une poêle-gril à feu vif.", "Mélanger le poulet en cubes avec la pâte de curry (rouge de préférence) et le lait de coco, jusqu'à ce qu'il soit bien enrobé.", "Enfiler sur des piques le poulet, le poivron et la courgette en morceaux, et l'oignon rouge en quartiers.", "Cuire 5 à 8 min en retournant souvent, jusqu'à ce que le poulet soit cuit et bien grillé.", "Servir avec du riz aux herbes, une salade et un demi-citron vert à presser."]
  },
  {
    id: "pilons-de-poulet-thais", nom: "Pilons de poulet thaïs à l'orange", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53212",
    ingredients: [
      { id: "sauce-chili-douce", quantite: 15, unite: "ml" },
      { id: "orange", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "pate-de-curry", quantite: 8, unite: "g" },
      { id: "pilons-de-poulet", quantite: 4, unite: "pièce", ou: { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C et couvrir une plaque de papier aluminium.", "Mélanger la sauce chili douce, le zeste de l'orange et 1 cuillère à soupe de son jus, l'ail écrasé, la pâte de curry (rouge de préférence) et le sel. Ajouter le poulet et bien l'enrober.", "Disposer les pilons espacés sur la plaque, les napper du reste de marinade et cuire 35 à 40 min jusqu'à ce qu'ils soient tendres.", "Se mangent chauds ou froids (pratique pour un pique-nique)."]
  },
  {
    id: "soupe-verte-thaie-au-poulet", nom: "Soupe verte thaïe au poulet", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53214",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "pate-de-curry", quantite: 90, unite: "g" },
      { id: "lait-de-coco", quantite: 130, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 650, unite: "ml" },
      { id: "feuilles-de-combava", quantite: 2, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "sauce-poisson", quantite: 10, unite: "ml", ou: { id: "sauce-soja", quantite: 10, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "haricots-verts", quantite: 90, unite: "g" },
      { id: "pousses-de-bambou", quantite: 50, unite: "g", optionnel: true },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "basilic", quantite: 10, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une grande casserole, faire revenir l'oignon haché 3 min. Ajouter le poulet désossé en morceaux et l'ail émincé, cuire jusqu'à ce que le poulet change de couleur.", "Ajouter la pâte de curry (verte de préférence), le lait de coco, le bouillon cube dissous dans l'eau chaude, les feuilles de combava et la sauce poisson. Laisser frémir 12 min.", "Ajouter le vert des oignons nouveaux haché, les haricots verts et les pousses de bambou, cuire 4 à 6 min jusqu'à ce que les haricots soient juste tendres.", "Pendant ce temps, mixer le jus du citron vert avec le basilic pour obtenir une pâte verte lisse.", "La verser dans la soupe avec le blanc des oignons nouveaux émincé, réchauffer et servir."]
  },
  {
    id: "bouillon-de-poisson-thai-aux-legumes-verts", nom: "Bouillon de poisson thaï aux légumes verts", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53213",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 100, unite: "g", ou: { id: "nouilles-chinoises", quantite: 100, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "pate-de-curry", quantite: 15, unite: "g" },
      { id: "feuilles-de-combava", quantite: 4, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "poisson-blanc", quantite: 200, unite: "g", ou: { id: "saumon", quantite: 200, unite: "g" } },
      { id: "crevettes", quantite: 100, unite: "g" },
      { id: "pak-choi", quantite: 2, unite: "pièce", ou: { id: "epinards", quantite: 150, unite: "g" } },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Cuire les nouilles (de riz complet de préférence) comme indiqué sur le paquet, les rafraîchir à l'eau froide et bien les égoutter.", "Dans une grande casserole, mélanger le bouillon cube dissous dans 500 ml d'eau chaude, la pâte de curry (rouge de préférence), les feuilles de combava, la sauce poisson et 250 ml d'eau froide. Porter à frémissement et cuire 5 min.", "Couper le poisson en cubes de 3 cm environ, l'ajouter et cuire 2 min à découvert après la reprise du frémissement.", "Ajouter les nouilles, les crevettes et le pak choï coupé en morceaux, laisser frémir 2 à 3 min jusqu'à ce que le poisson et les crevettes soient juste cuits.", "Servir dans des bols, parsemé de coriandre."]
  },
  {
    id: "poisson-vapeur-a-la-thaie", nom: "Poisson vapeur à la thaïe", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53202",
    ingredients: [
      { id: "truite", quantite: 300, unite: "g", ou: { id: "saumon", quantite: 300, unite: "g" } },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "pak-choi", quantite: 3, unite: "pièce", ou: { id: "epinards", quantite: 200, unite: "g" } },
      { id: "sauce-soja", quantite: 30, unite: "ml" }
    ],
    etapes: ["Poser les 2 filets de truite côte à côte sur une grande feuille de papier aluminium. Parsemer de gingembre râpé, d'ail et de piment hachés finement, et du zeste du citron vert. Arroser du jus du citron vert.", "Disposer les morceaux de pak choï (petits de préférence) autour et sur le poisson, et verser la sauce soja sur le pak choï.", "Fermer la papillote sans serrer, en laissant de la place en haut pour que la vapeur circule.", "Cuire 15 min à la vapeur. Sans cuit-vapeur : poser la papillote sur une assiette au-dessus d'une casserole d'eau qui frémit, et couvrir."]
  },
  {
    id: "tom-yum-cremeux-aux-crevettes", nom: "Tom yum crémeux aux crevettes", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53194",
    ingredients: [
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 2, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "galanga", quantite: 8, unite: "g", ou: { id: "gingembre", quantite: 8, unite: "g" } },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "crevettes", quantite: 125, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 650, unite: "ml" },
      { id: "champignons", quantite: 60, unite: "g" },
      { id: "feuilles-de-combava", quantite: 4, unite: "pièce", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "sauce-poisson", quantite: 12, unite: "ml", ou: { id: "sauce-soja", quantite: 12, unite: "ml" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "lait-de-coco", quantite: 35, unite: "ml" },
      { id: "sauce-chili-douce", quantite: 8, unite: "ml", optionnel: true },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Dans une grande casserole à feu vif, mettre l'eau, l'oignon et la tomate en morceaux (environ 100 g et 75 g), les piments, le galanga, la citronnelle, les têtes des crevettes si elles sont entières, et le bouillon cube. Porter à ébullition puis laisser frémir 20 min à feu moyen.", "Filtrer le bouillon et jeter les têtes de crevettes. Remettre les légumes et herbes dans la casserole avec le bouillon. Ajouter les champignons (pleurotes de préférence) et les feuilles de combava, cuire 3 min.", "Ajouter le sucre, la sauce poisson, le jus du citron vert (environ 12 ml), le lait de coco et les crevettes. Porter à ébullition et cuire 1 à 2 min jusqu'à ce que les crevettes soient cuites. Retirer du feu.", "Retirer la citronnelle, puis ajouter la sauce chili douce (à la place de la confiture de piment thaï) si on veut. Parsemer de coriandre et servir."]
  }
]);

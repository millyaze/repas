// ============================================================
// RECETTES : cuisine malaisienne (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "apam-balik", nom: "Apam balik (crêpe épaisse aux cacahuètes)", cuisine: "malaisienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53049",
    ingredients: [
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 80, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "beurre-de-cacahuete", quantite: 25, unite: "g", ou: { id: "cacahuetes", quantite: 30, unite: "g" } },
      { id: "mais-en-boite", quantite: 1, unite: "boîte", optionnel: true }
    ],
    etapes: ["Mélanger le lait, l'huile et l'œuf. Tamiser par-dessus la farine, la levure et le sel, et bien mélanger jusqu'à obtenir une pâte lisse.", "Chauffer une poêle à feu moyen, y verser la pâte en couche assez épaisse en la remontant un peu sur les bords.", "Couvrir 30 à 60 secondes, jusqu'à ce que de petites bulles apparaissent.", "Parsemer de beurre en morceaux, de beurre de cacahuète (ou de cacahuètes concassées), de sucre, et de quelques grains de maïs si on aime.", "Quand le dessous est bien doré, plier la crêpe en deux. Couper en parts et manger tiède."]
  },
  {
    id: "ayam-percik", nom: "Ayam percik (poulet rôti, marinade épicée au lait de coco)", cuisine: "malaisienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53050",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce" },
      { id: "echalote", quantite: 5, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 3, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "curcuma", quantite: 5, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "graines-de-coriandre", quantite: 2, unite: "g" },
      { id: "graines-de-fenouil", quantite: 2, unite: "g", optionnel: true },
      { id: "clous-de-girofle", quantite: 2, unite: "pièce", optionnel: true },
      { id: "cardamome", quantite: 1, unite: "g", optionnel: true },
      { id: "tamarin", quantite: 15, unite: "g", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Pâte d'épices : mixer finement les échalotes, le gingembre, l'ail, les piments, le curcuma, le cumin, la coriandre et le fenouil en graines.", "Faire revenir la pâte dans une poêle à feu moyen environ 10 min, jusqu'à ce qu'elle sente bon, en ajoutant 1 cuillère d'eau ou d'huile si elle accroche. Ne pas la laisser brûler.", "Ajouter le tamarin, le lait de coco, l'eau, le sucre, le sel, les clous de girofle et la cardamome. Porter à ébullition puis laisser mijoter 10 min en remuant. Goûter et ajuster.", "Laisser refroidir la sauce, la verser sur le poulet et laisser mariner au frais au moins quelques heures (idéalement une nuit).", "Préchauffer le four à 220 °C. Étaler un peu de marinade sur une plaque huilée, poser le poulet dessus (il doit couvrir la sauce pour qu'elle ne brûle pas) et napper du reste de marinade.", "Rôtir 35 à 45 min jusqu'à ce que le poulet soit bien cuit. Laisser reposer 5 min, badigeonner d'un peu d'huile et servir avec la sauce et du riz."]
  },
  {
    id: "rendang-de-boeuf", nom: "Rendang de bœuf (bœuf mijoté coco et épices)", cuisine: "malaisienne", type: "plat",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53053",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 450, unite: "g", ou: { id: "steak-de-boeuf", quantite: 450, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "echalote", quantite: 5, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "galanga", quantite: 15, unite: "g", optionnel: true },
      { id: "piment-en-poudre", quantite: 4, unite: "g" },
      { id: "citronnelle", quantite: 2, unite: "pièce" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "clous-de-girofle", quantite: 3, unite: "pièce" },
      { id: "anis-etoile", quantite: 3, unite: "pièce" },
      { id: "cardamome", quantite: 1, unite: "g" },
      { id: "creme-de-coco", quantite: 250, unite: "ml", ou: { id: "lait-de-coco", quantite: 250, unite: "ml" } },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "tamarin", quantite: 20, unite: "g", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "feuilles-de-combava", quantite: 6, unite: "pièce" },
      { id: "noix-de-coco-rapee", quantite: 30, unite: "g", optionnel: true },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Pâte d'épices : hacher puis mixer finement les échalotes, l'ail, le gingembre, le galanga et le piment (avec un peu d'eau si besoin). Écraser la citronnelle avec le plat d'un couteau.", "Si on en a, faire griller à sec la noix de coco râpée dans une poêle jusqu'à ce qu'elle soit bien dorée, puis la piler (c'est le « kerisik »).", "Chauffer l'huile dans une cocotte, ajouter la pâte d'épices, la cannelle (bâton de préférence), les clous de girofle, l'anis étoilé et la cardamome. Faire revenir jusqu'à ce que ça sente bon.", "Ajouter le bœuf (à braiser) en cubes et la citronnelle, remuer 1 min. Ajouter la crème de coco, le tamarin délayé dans l'eau, et laisser mijoter à feu moyen en remuant souvent, jusqu'à ce que la viande soit presque cuite.", "Ajouter les feuilles de combava, la noix de coco grillée et le sucre, bien mélanger. Baisser à feu doux, couvrir et laisser mijoter 1 h à 1 h 30, jusqu'à ce que la viande soit très tendre et la sauce presque entièrement réduite.", "Saler et sucrer à son goût. Servir avec du riz blanc (encore meilleur le lendemain)."]
  },
  {
    id: "laksa-aux-crevettes", nom: "Laksa aux crevettes (soupe de nouilles coco-curry)", cuisine: "malaisienne", type: "soupe",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52821",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "pate-de-curry", quantite: 35, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "lait-de-coco", quantite: 400, unite: "ml" },
      { id: "sauce-poisson", quantite: 10, unite: "ml", ou: { id: "sauce-soja", quantite: 10, unite: "ml" } },
      { id: "nouilles-de-riz", quantite: 100, unite: "g" },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "crevettes", quantite: 150, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une casserole, ajouter le piment émincé et cuire 1 min. Ajouter la pâte de curry (rouge thaïe de préférence), remuer et cuire encore 1 min.", "Délayer le bouillon cube dans l'eau bouillante et le verser dans la casserole. Ajouter le lait de coco et porter à ébullition.", "Ajouter la sauce poisson, un peu de sel et de poivre, puis les nouilles. Cuire 3 à 4 min jusqu'à ce qu'elles ramollissent.", "Presser le jus d'un citron vert, ajouter les crevettes et cuire 2 à 3 min jusqu'à ce qu'elles soient bien chaudes. Servir dans des bols avec la coriandre et des quartiers du second citron vert."]
  },
  {
    id: "mee-goreng-mamak", nom: "Mee goreng mamak (nouilles sautées épicées)", cuisine: "malaisienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53048",
    ingredients: [
      { id: "cacahuetes", quantite: 25, unite: "g" },
      { id: "piments-seches", quantite: 7, unite: "g", ou: { id: "piment-en-poudre", quantite: 3, unite: "g" } },
      { id: "crevettes-sechees", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "tamarin", quantite: 5, unite: "g", ou: { id: "vinaigre-de-riz", quantite: 5, unite: "ml" } },
      { id: "pomme-de-terre", quantite: 125, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "chou", quantite: 30, unite: "g" },
      { id: "brocoli-chinois", quantite: 30, unite: "g", ou: { id: "pak-choi", quantite: 1, unite: "pièce" } },
      { id: "tofu", quantite: 100, unite: "g" },
      { id: "crevettes", quantite: 80, unite: "g", optionnel: true },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "nouilles-chinoises", quantite: 200, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Pâte : faire revenir dans 1 cuillère d'huile les cacahuètes, le piment (séché de préférence) et les crevettes séchées jusqu'à ce que ça sente bon. Mixer finement avec le tamarin et 100 ml d'eau.", "Faire revenir cette pâte à feu doux dans 1 cuillère d'huile jusqu'à ce que l'huile se sépare et que la pâte fonce.", "Éplucher la pomme de terre, la couper en petits morceaux et la cuire à l'eau jusqu'à ce qu'elle soit tendre. Égoutter.", "Émincer l'oignon et le chou, couper le brocoli chinois (choy sum, ou du pak choï) et le tofu (frit de préférence) en morceaux, hacher l'ail. Cuire les nouilles si elles sont sèches. Mélanger la sauce soja (sombre de préférence) avec 50 ml d'eau.", "Pour chaque assiette (en 2 fois) : chauffer un peu d'huile dans un wok, ajouter l'ail, l'oignon et la moitié de la pâte, faire revenir. Ajouter les crevettes si on en met, puis le tofu, les pommes de terre, le chou et le brocoli chinois, sauter 30 secondes.", "Ajouter les nouilles et la moitié de la sauce soja diluée, mélanger 1 min. Pousser les nouilles sur le côté, casser un œuf dans le wok, le brouiller puis mélanger le tout. Servir avec un quartier de citron vert."]
  },
  {
    id: "nasi-lemak", nom: "Nasi lemak (riz au lait de coco, sambal, anchois et œuf)", cuisine: "malaisienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "53051",
    ingredients: [
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "cacahuetes", quantite: 50, unite: "g" },
      { id: "anchois", quantite: 50, unite: "g", ou: { id: "anchois-seches", quantite: 50, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 3, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "tamarin", quantite: 20, unite: "g", ou: { id: "citron-vert", quantite: 1, unite: "pièce" } },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Riz : dans une casserole, mélanger le lait de coco, l'eau, le gingembre en tranches, une pincée de sel, le laurier (à la place de la feuille de pandan) et le riz rincé. Couvrir, porter à ébullition puis cuire à feu doux 20 min environ.", "Œufs : les couvrir d'eau froide, porter à ébullition, retirer du feu et laisser 10 min à couvert. Refroidir, écaler et couper en deux. Trancher le concombre.", "Faire dorer rapidement les cacahuètes dans l'huile chaude, les égoutter sur du papier absorbant. Faire de même avec la moitié des anchois (bien égouttés et séchés ; séchés de préférence) jusqu'à ce qu'ils soient croustillants. Jeter l'huile sauf 2 cuillères à soupe.", "Sambal : faire revenir l'oignon, l'ail et les échalotes hachés 1 à 2 min, ajouter le piment délayé dans un peu d'eau et cuire 10 min en remuant. Ajouter le reste des anchois et cuire 5 min.", "Ajouter le sel, le sucre et le tamarin délayé dans 3 cuillères d'eau, laisser mijoter 5 min jusqu'à ce que la sauce épaississe.", "Servir le riz chaud avec le sambal, les cacahuètes, les anchois frits, le concombre et les œufs."]
  },
  {
    id: "roti-john", nom: "Roti john (baguette grillée à l'omelette au bœuf)", cuisine: "malaisienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53052",
    ingredients: [
      { id: "boeuf-hache", quantite: 110, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "baguette", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "mayonnaise", quantite: 30, unite: "g" },
      { id: "sauce-sriracha", quantite: 15, unite: "ml", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger dans un saladier la viande, l'oignon et le piment hachés, les œufs battus, le sel et le poivre.", "Couper une demi-baguette en deux tronçons, puis les ouvrir en deux dans la longueur.", "Chauffer une poêle avec un peu d'huile. Verser une partie du mélange, poser aussitôt un morceau de pain ouvert, face coupée dessus, et appuyer avec une spatule. Cuire 2 min.", "Retourner pour rendre le pain un peu croustillant, puis recommencer avec le reste. Garnir de mayonnaise (et de sauce pimentée type sambal ou sriracha) et couper en parts."]
  },
  {
    id: "seri-muka-kuih", nom: "Seri muka (gâteau de riz gluant et crème coco)", cuisine: "malaisienne", type: "dessert",
    difficulte: "difficile", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "53054",
    ingredients: [
      { id: "riz-gluant", quantite: 200, unite: "g" },
      { id: "lait-de-coco", quantite: 75, unite: "ml" },
      { id: "creme-de-coco", quantite: 100, unite: "ml" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "fecule", quantite: 20, unite: "g" },
      { id: "farine", quantite: 12, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 70, unite: "g" }
    ],
    etapes: ["Faire tremper le riz gluant au moins 1 h 30 dans l'eau, puis l'égoutter. Huiler un petit moule (environ 15 cm) ou le tapisser de film alimentaire.", "Mélanger le riz avec le lait de coco, l'eau et le sel. Verser dans le moule et cuire 30 min à la vapeur.", "Égrener le riz, puis le tasser bien à plat avec une spatule huilée, sans trous ni bulles, surtout sur les bords. Cuire encore 10 min à la vapeur.", "Crème : mélanger la crème de coco, la farine, la fécule et le sucre (à l'origine on ajoute du jus de pandan, qui la colore en vert). Ajouter les œufs, fouetter et filtrer.", "Cuire cette crème au bain-marie en remuant sans arrêt environ 15 min, jusqu'à ce qu'elle commence à épaissir.", "La verser sur le riz, tapoter le moule pour chasser les bulles et cuire encore 30 min à la vapeur. Laisser refroidir complètement avant de couper en losanges ou en rectangles."]
  }
]);

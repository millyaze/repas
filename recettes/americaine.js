// ============================================================
// RECETTES : cuisine américaine (4 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/indienne.js
// ============================================================
const RECETTES_AMERICAINE = [
  {
    id: "poulet-miel-balsamique-brocoli-et-pommes-de-terre", nom: "Poulet miel-balsamique, brocoli et pommes de terre", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52993",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 350, unite: "g" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C. Couper les pommes de terre en quartiers, les mélanger sur une plaque avec un filet d'huile de tournesol, du sel et du poivre, et les enfourner 5 min.", "Mélanger le brocoli en petits bouquets avec l'huile d'olive, la moitié de l'ail haché, du sel et du poivre. L'ajouter sur la plaque et rôtir encore 15 à 20 min.", "Saler et poivrer le poulet, le cuire à la poêle dans le reste d'huile de tournesol 5 à 6 min de chaque côté, puis le réserver.", "Dans la même poêle, faire revenir 30 secondes le reste d'ail, puis ajouter le vinaigre, le miel et le bouillon cube dissous dans l'eau chaude. Laisser réduire 2 à 3 min.", "Hors du feu, ajouter le beurre, remettre le poulet et le retourner dans la sauce.", "Servir le poulet avec le brocoli et les pommes de terre, nappé du reste de sauce."]
  },
  {
    id: "macaronis-cremeux-au-poulet-et-au-fromage", nom: "Macaronis crémeux au poulet et au fromage", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52818",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "fromage-rape", quantite: 50, unite: "g" },
      { id: "persil", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire revenir dans l'huile l'oignon, le poivron et l'ail coupés en petits dés, jusqu'à ce qu'ils soient tendres.", "Pousser les légumes sur les bords, ajouter le poulet coupé en dés, le paprika, le cumin et le sel, et laisser colorer.", "Ajouter la crème, le bouillon cube dissous dans l'eau chaude et les pâtes.", "Cuire 20 min à feu doux en remuant de temps en temps, jusqu'à ce que les pâtes soient cuites.", "Ajouter le fromage, mélanger et parsemer de persil haché."]
  },
  {
    id: "pain-de-viande-puree-et-carottes-roties", nom: "Pain de viande, purée et carottes rôties", cuisine: "américaine",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52992",
    ingredients: [
      { id: "boeuf-hache", quantite: 280, unite: "g" },
      { id: "pomme-de-terre", quantite: 350, unite: "g" },
      { id: "carotte", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "pain-de-mie", quantite: 1, unite: "tranche" },
      { id: "ketchup", quantite: 60, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "moutarde", quantite: 2, unite: "g", optionnel: true },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C. Émietter le pain de mie dans l'eau et l'écraser en pâte.", "Y mélanger le bœuf, la moitié de l'oignon haché, la moitié de l'ail haché, le piment, du sel et du poivre. Former deux petits pains de viande et les poser sur une plaque.", "Ajouter à côté les carottes en rondelles épaisses, mélangées avec l'huile, du sel et du poivre. Cuire 20 min au four.", "Cuire les pommes de terre en dés 12 à 15 min dans l'eau bouillante salée. Garder un peu d'eau de cuisson, puis égoutter.", "Mélanger le ketchup, la sauce soja, le sucre et un peu d'ail haché. En napper les pains de viande avec la moitié et remettre au four 5 min.", "Faire fondre le beurre avec le reste d'ail, ajouter les pommes de terre et la moutarde, écraser en purée en ajoutant un peu d'eau de cuisson.", "Servir avec le reste d'oignon haché et le reste de sauce."]
  },
  {
    id: "burger-maison-sauce-speciale", nom: "Burger maison, sauce spéciale", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53013",
    ingredients: [
      { id: "boeuf-hache", quantite: 400, unite: "g" },
      { id: "pain-a-burger", quantite: 2, unite: "pièce" },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "cornichons", quantite: 40, unite: "g" },
      { id: "mayonnaise", quantite: 60, unite: "g" },
      { id: "moutarde", quantite: 10, unite: "g" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce : mélanger la mayonnaise, la moutarde, le vinaigre, l'ail écrasé, le paprika, un peu d'oignon haché très fin et de cornichon haché. Saler et garder au frais.", "Saler et poivrer le bœuf, former 4 steaks fins.", "Les cuire dans l'huile à feu vif, 1 à 2 min de chaque côté, et poser le fromage dessus en fin de cuisson pour qu'il fonde.", "Faire griller légèrement les pains coupés en deux.", "Monter chaque burger : pain, sauce, oignon haché, quelques feuilles de salade, deux steaks au fromage, rondelles de cornichon, sauce, pain."]
  }
];

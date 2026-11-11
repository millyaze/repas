// ============================================================
// RECETTES : cuisine britannique (4 recettes, pour 2 personnes)
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
  }
]);

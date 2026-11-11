// ============================================================
// RECETTES : cuisine française (10 recettes, pour 2 personnes)
// difficulte : "facile" | "moyen" | "difficile"
// tempsMinutes : préparation + cuisson
// ingredients : id et unité pris dans data/ingredients.js
// optionnel: true = ingrédient facultatif : la recette reste réalisable sans lui
// ============================================================
ajouterRecettes([
  {
    id: "omelette-aux-champignons", nom: "Omelette aux champignons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "champignons", quantite: 150, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer les champignons et les faire dorer 5 min dans le beurre.", "Battre les œufs avec le sel et le poivre, verser sur les champignons.", "Cuire 3 min à feu moyen, parsemer de persil haché et plier l'omelette."]
  },
  {
    id: "gratin-dauphinois", nom: "Gratin dauphinois", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Frotter un plat avec l'ail puis le beurrer.", "Éplucher les pommes de terre et les couper en fines rondelles.", "Les ranger dans le plat, saler, poivrer, verser la crème mélangée au lait.", "Cuire 45 min, jusqu'à ce que le dessus soit doré."]
  },
  {
    id: "poulet-a-la-creme-et-aux-champignons", nom: "Poulet à la crème et aux champignons", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "creme-fraiche", quantite: 150, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le poulet en morceaux et le dorer dans le beurre 5 min. Réserver.", "Dans la même poêle, faire revenir l'oignon émincé puis les champignons 8 min.", "Remettre le poulet, ajouter la crème, saler, poivrer.", "Laisser mijoter 10 min à feu doux."]
  },
  {
    id: "hachis-parmentier", nom: "Hachis parmentier", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre épluchées 20 min à l'eau bouillante salée.", "Les écraser avec le lait chaud et le beurre pour faire une purée.", "Faire revenir l'oignon haché puis le bœuf 8 min, saler, poivrer.", "Dans un plat : la viande, la purée, le fromage. Gratiner 15 min à 200 °C."]
  },
  {
    id: "ratatouille", nom: "Ratatouille", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "herbes-de-provence", quantite: 2, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper tous les légumes en dés.", "Faire revenir l'oignon et l'ail dans l'huile 3 min.", "Ajouter aubergine et poivron, cuire 10 min, puis courgette et tomates.", "Ajouter les herbes, saler, poivrer, couvrir et mijoter 25 min."]
  },
  {
    id: "croque-monsieur", nom: "Croque-monsieur", cuisine: "française",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pain-de-mie", quantite: 4, unite: "tranche" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "fromage-rape", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" }
    ],
    etapes: ["Beurrer les tranches de pain de mie.", "Garnir deux tranches de jambon et de la moitié du fromage, refermer.", "Parsemer le reste du fromage dessus.", "Cuire 8 à 10 min au four à 200 °C, jusqu'à ce que ce soit doré."]
  },
  {
    id: "soupe-poireaux-pommes-de-terre", nom: "Soupe poireaux-pommes de terre", cuisine: "française",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "poireau", quantite: 2, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver et émincer les poireaux, couper les pommes de terre et l'oignon en morceaux.", "Mettre le tout dans une casserole avec l'eau et le bouillon cube.", "Cuire 25 min à petits bouillons.", "Mixer, ajouter la crème, saler et poivrer."]
  },
  {
    id: "saucisses-aux-lentilles", nom: "Saucisses aux lentilles", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "saucisse", quantite: 2, unite: "pièce" },
      { id: "lentilles", quantite: 150, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dorer les saucisses 5 min dans une cocotte. Réserver.", "Faire revenir l'oignon haché et la carotte en rondelles 3 min.", "Ajouter les lentilles rincées, l'eau et le bouillon cube.", "Remettre les saucisses, couvrir et cuire 30 min. Poivrer."]
  },
  {
    id: "crepes-jambon-fromage", nom: "Crêpes jambon-fromage", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger la farine, le sel et les œufs, puis verser le lait petit à petit.", "Cuire 4 crêpes dans une poêle beurrée, 1 à 2 min par face.", "Garnir chaque crêpe d'une demi-tranche de jambon et de fromage.", "Plier et réchauffer 1 min dans la poêle pour faire fondre le fromage."]
  },
  {
    id: "poelee-de-pommes-de-terre-aux-lardons", nom: "Poêlée de pommes de terre aux lardons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et les couper en petits dés.", "Les cuire 15 min dans l'huile à feu moyen en remuant.", "Ajouter l'oignon émincé et les lardons, cuire encore 8 min.", "Poivrer et parsemer de persil haché."]
  }
]);

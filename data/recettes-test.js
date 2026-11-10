// ============================================================
// DONNÉES DE TEST : quelques recettes classiques
// difficulte : "facile" | "moyen" | "difficile"
// tempsMinutes : temps total de préparation + cuisson
// ingredients : id (le même que dans le stock), quantite, unite
// ============================================================
const RECETTES_TEST = [
  {
    id: "omelette-jambon-fromage", nom: "Omelette jambon-fromage",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Battre les œufs avec le sel.", "Faire fondre le beurre dans une poêle.", "Verser les œufs, ajouter jambon et fromage, plier."]
  },
  {
    id: "pates-sauce-tomate", nom: "Pâtes à la sauce tomate",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" }
    ],
    etapes: ["Cuire les pâtes.", "Faire revenir oignon et ail dans l'huile.", "Ajouter la sauce tomate, mélanger avec les pâtes."]
  },
  {
    id: "gratin-pommes-de-terre", nom: "Gratin de pommes de terre",
    difficulte: "moyen", tempsMinutes: 70, portions: 4,
    ingredients: [
      { id: "pomme-de-terre", quantite: 800, unite: "g" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "fromage-rape", quantite: 80, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "beurre", quantite: 20, unite: "g" }
    ],
    etapes: ["Couper les pommes de terre en rondelles.", "Les disposer dans un plat beurré avec ail, crème et lait.", "Ajouter le fromage et cuire 50 min à 180 °C."]
  },
  {
    id: "riz-poulet-legumes", nom: "Riz au poulet et légumes",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "riz", quantite: 200, unite: "g" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" }
    ],
    etapes: ["Couper poulet et légumes en morceaux.", "Les faire dorer dans l'huile.", "Ajouter le riz et de l'eau, cuire 15 min."]
  },
  {
    id: "crepes", nom: "Crêpes",
    difficulte: "facile", tempsMinutes: 30, portions: 4,
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "lait", quantite: 500, unite: "ml" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 20, unite: "g" }
    ],
    etapes: ["Mélanger farine, sucre et œufs.", "Ajouter le lait peu à peu, puis le beurre fondu.", "Cuire chaque crêpe dans une poêle chaude."]
  },
  {
    id: "salade-thon-tomate", nom: "Salade de thon et tomates",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" }
    ],
    etapes: ["Couper tomates et oignon.", "Ajouter le thon émietté et l'huile.", "Assaisonner."]
  },
  {
    id: "quiche-lorraine", nom: "Quiche lorraine (incomplète volontairement)",
    difficulte: "moyen", tempsMinutes: 55, portions: 4,
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "lardons", quantite: 200, unite: "g" }
    ],
    etapes: ["Préparer la pâte avec farine et beurre.", "Mélanger œufs, crème et lardons.", "Verser sur la pâte, cuire 35 min à 180 °C."]
  },
  {
    id: "gateau-yaourt", nom: "Gâteau au yaourt (incomplet volontairement)",
    difficulte: "facile", tempsMinutes: 45, portions: 6,
    ingredients: [
      { id: "yaourt", quantite: 1, unite: "pot" },
      { id: "farine", quantite: 250, unite: "g" },
      { id: "sucre", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "levure", quantite: 1, unite: "sachet" }
    ],
    etapes: ["Mélanger tous les ingrédients.", "Verser dans un moule.", "Cuire 35 min à 180 °C."]
  }
];

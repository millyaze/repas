// ============================================================
// RECETTES : plats rapides, 20 minutes maximum (10 recettes, pour 2 personnes)
// Même format que recettes/francaise.js
// ============================================================
const RECETTES_RAPIDES = [
  {
    id: "pates-au-thon-et-a-la-creme", nom: "Pâtes au thon et à la crème", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Réchauffer le thon égoutté avec la crème 2 min.", "Ajouter un peu de jus de citron et le poivre.", "Mélanger avec les pâtes égouttées."]
  },
  {
    id: "omelette-au-fromage", nom: "Omelette au fromage", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "fromage-rape", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Battre les œufs avec le sel et le poivre.", "Faire fondre le beurre dans une poêle, verser les œufs.", "Quand l'omelette commence à prendre, ajouter le fromage et plier."]
  },
  {
    id: "pates-a-l-ail-et-a-l-huile-d-olive", nom: "Pâtes à l'ail et à l'huile d'olive", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire dorer doucement l'ail émincé et le piment dans l'huile, sans brûler.", "Mélanger les pâtes égouttées à l'huile parfumée et ajouter le persil haché."]
  },
  {
    id: "tartines-avocat-et-oeuf", nom: "Tartines avocat et œuf", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Griller le pain.", "Écraser l'avocat avec un peu de jus de citron et le sel, tartiner.", "Cuire les œufs au plat et les poser sur les tartines, poivrer."]
  },
  {
    id: "wrap-poulet-crudites", nom: "Wrap poulet-crudités", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "tortilla-de-ble", quantite: 2, unite: "pièce" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "moutarde", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le poulet en lamelles et le cuire 6 min dans l'huile, saler.", "Mélanger le yaourt et la moutarde pour la sauce.", "Garnir les tortillas de quelques feuilles de salade, tomate en tranches, poulet et sauce.", "Rouler serré et couper en deux."]
  },
  {
    id: "salade-de-pates-au-thon", nom: "Salade de pâtes au thon", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pates", quantite: 150, unite: "g" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes, les égoutter et les passer sous l'eau froide.", "Ajouter le thon émietté, les tomates en dés et le maïs égoutté.", "Assaisonner avec l'huile, le vinaigre et le sel."]
  },
  {
    id: "oeufs-brouilles-aux-tomates", nom: "Œufs brouillés aux tomates", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les tomates en dés et les faire revenir 3 min dans le beurre.", "Ajouter les œufs battus, saler, poivrer.", "Remuer doucement 2 à 3 min à feu doux.", "Servir avec le pain grillé."]
  },
  {
    id: "pates-courgette-et-lardons", nom: "Pâtes courgette et lardons", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire dorer les lardons, ajouter la courgette en petits dés et cuire 8 min.", "Ajouter la crème et le poivre.", "Mélanger avec les pâtes égouttées."]
  },
  {
    id: "semoule-express-aux-pois-chiches", nom: "Semoule express aux pois chiches", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "semoule", quantite: 120, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Verser l'eau bouillante salée sur la semoule, couvrir 5 min puis égrainer.", "Faire sauter la courgette en dés dans l'huile avec le cumin 6 min.", "Ajouter les pois chiches égouttés, réchauffer 2 min.", "Mélanger avec la semoule."]
  },
  {
    id: "sandwich-chaud-thon-fromage", nom: "Sandwich chaud thon-fromage", cuisine: "plats rapides",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "pain-de-mie", quantite: 4, unite: "tranche" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "moutarde", quantite: 5, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Mélanger le thon égoutté avec la moutarde.", "Garnir deux tranches de pain de mie de thon et de fromage, refermer.", "Dorer les sandwichs dans le beurre, 2 à 3 min par face."]
  }
];

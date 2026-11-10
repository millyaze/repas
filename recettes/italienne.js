// ============================================================
// RECETTES : cuisine italienne (10 recettes, pour 2 personnes)
// Même format que recettes/francaise.js
// ============================================================
const RECETTES_ITALIENNE = [
  {
    id: "pates-a-la-carbonara", nom: "Pâtes à la carbonara", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire dorer les lardons à la poêle.", "Battre les œufs avec le parmesan râpé et le poivre.", "Égoutter les pâtes, les mélanger aux lardons hors du feu, puis ajouter les œufs en remuant."]
  },
  {
    id: "pates-a-la-bolognaise", nom: "Pâtes à la bolognaise", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "boeuf-hache", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher l'oignon, l'ail et la carotte, les faire revenir dans l'huile 5 min.", "Ajouter le bœuf et le faire dorer 5 min.", "Verser la sauce tomate, saler, poivrer, mijoter 20 min.", "Cuire les pâtes et servir avec la sauce."]
  },
  {
    id: "risotto-aux-champignons", nom: "Risotto aux champignons", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "riz", quantite: 160, unite: "g" },
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "eau", quantite: 600, unite: "ml" }
    ],
    etapes: ["Préparer le bouillon : eau chaude et bouillon cube.", "Faire revenir l'oignon haché et les champignons émincés dans la moitié du beurre.", "Ajouter le riz, remuer 1 min, verser le vin blanc.", "Ajouter le bouillon louche par louche en remuant, environ 18 min.", "Hors du feu, ajouter le reste du beurre et le parmesan."]
  },
  {
    id: "pates-a-l-arrabbiata", nom: "Pâtes à l'arrabbiata", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire revenir l'ail haché et le piment dans l'huile 1 min.", "Ajouter la sauce tomate et mijoter 10 min.", "Mélanger les pâtes égouttées à la sauce."]
  },
  {
    id: "salade-caprese", nom: "Salade caprese", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "mozzarella", quantite: 125, unite: "g" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les tomates et la mozzarella en tranches.", "Les alterner sur une assiette avec les feuilles de basilic.", "Arroser d'huile d'olive, saler et poivrer."]
  },
  {
    id: "lasagnes-a-la-bolognaise", nom: "Lasagnes à la bolognaise", cuisine: "italienne",
    difficulte: "difficile", tempsMinutes: 75, portions: 2,
    ingredients: [
      { id: "feuilles-de-lasagne", quantite: 6, unite: "pièce" },
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "sauce-tomate", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "farine", quantite: 25, unite: "g" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché et le bœuf, ajouter la sauce tomate, saler, poivrer, mijoter 15 min.", "Béchamel : fondre le beurre, ajouter la farine, puis le lait petit à petit en fouettant jusqu'à épaississement.", "Dans un plat, alterner sauce à la viande, feuilles de lasagne et béchamel (3 couches).", "Terminer par la béchamel et le fromage râpé.", "Cuire 35 min au four à 180 °C."]
  },
  {
    id: "pates-au-pesto-maison", nom: "Pâtes au pesto maison", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "basilic", quantite: 20, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "pignons-de-pin", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Mixer le basilic, l'ail, le parmesan et l'huile d'olive (avec les pignons si tu en as).", "Mélanger les pâtes égouttées au pesto, avec une cuillère d'eau de cuisson."]
  },
  {
    id: "aubergines-a-la-parmesane", nom: "Aubergines à la parmesane", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "mozzarella", quantite: 125, unite: "g" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper les aubergines en tranches, les huiler, les saler et les cuire 15 min au four à 200 °C.", "Dans un plat, alterner aubergines, sauce tomate, mozzarella en tranches et basilic.", "Terminer par le parmesan râpé.", "Cuire 25 min au four à 180 °C."]
  },
  {
    id: "bruschetta-tomate-basilic", nom: "Bruschetta tomate-basilic", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Griller les tranches de pain et les frotter avec l'ail.", "Couper les tomates en petits dés, mélanger avec le basilic ciselé, l'huile et le sel.", "Répartir sur le pain et servir aussitôt."]
  },
  {
    id: "minestrone", nom: "Minestrone", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "pates", quantite: 60, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "parmesan", quantite: 20, unite: "g" },
      { id: "eau", quantite: 800, unite: "ml" }
    ],
    etapes: ["Couper tous les légumes en petits dés.", "Les faire revenir dans l'huile 5 min.", "Ajouter l'eau, le bouillon cube et la sauce tomate, cuire 20 min.", "Ajouter les pâtes et cuire encore 10 min.", "Servir avec le parmesan râpé."]
  }
];

// ============================================================
// RECETTES : cuisine asiatique (10 recettes, pour 2 personnes)
// Même format que recettes/francaise.js
// ============================================================
ajouterRecettes([
  {
    id: "riz-saute-aux-oeufs-et-legumes", nom: "Riz sauté aux œufs et légumes", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "petits-pois", quantite: 80, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" }
    ],
    etapes: ["Cuire le riz et le laisser refroidir un peu.", "Faire revenir l'oignon et la carotte en petits dés dans l'huile 5 min, ajouter les petits pois.", "Pousser les légumes sur le côté, brouiller les œufs dans la poêle.", "Ajouter le riz et la sauce soja, faire sauter 3 min à feu vif."]
  },
  {
    id: "poulet-saute-au-brocoli", nom: "Poulet sauté au brocoli", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Couper le poulet en lamelles et le brocoli en petits bouquets.", "Faire sauter le poulet dans l'huile 5 min, ajouter l'ail et le gingembre hachés.", "Ajouter le brocoli et la sauce soja, couvrir et cuire 6 min.", "Servir avec le riz."]
  },
  {
    id: "curry-de-poulet-au-lait-de-coco", nom: "Curry de poulet au lait de coco", cuisine: "asiatique", type: "plat",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "pate-de-curry", quantite: 20, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Faire revenir l'oignon émincé et la pâte de curry dans l'huile 2 min.", "Ajouter le poulet en morceaux et le poivron en lamelles, cuire 5 min.", "Verser le lait de coco et mijoter 15 min.", "Servir avec le riz, parsemé de coriandre si tu en as."]
  },
  {
    id: "nouilles-sautees-aux-legumes", nom: "Nouilles sautées aux légumes", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "nouilles-chinoises", quantite: 150, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" }
    ],
    etapes: ["Cuire les nouilles comme indiqué sur le paquet, égoutter.", "Couper les légumes en fins bâtonnets.", "Les faire sauter dans l'huile avec l'ail 6 min à feu vif.", "Ajouter les nouilles et la sauce soja, mélanger 2 min."]
  },
  {
    id: "nouilles-sautees-aux-crevettes", nom: "Nouilles sautées aux crevettes", cuisine: "asiatique", type: "plat",
    difficulte: "moyen", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "nouilles-chinoises", quantite: 150, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "cacahuetes", quantite: 30, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" }
    ],
    etapes: ["Cuire les nouilles, égoutter.", "Faire sauter les crevettes décortiquées et l'ail dans l'huile 3 min.", "Ajouter l'œuf battu et le brouiller.", "Ajouter les nouilles, la sauce soja et le jus du citron vert, mélanger 2 min.", "Servir avec les cacahuètes concassées (et la coriandre si tu en as)."]
  },
  {
    id: "tofu-saute-sauce-soja-et-miel", nom: "Tofu sauté sauce soja et miel", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "tofu", quantite: 250, unite: "g" },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Couper le tofu en dés et le dorer dans l'huile 8 min.", "Ajouter l'ail et le gingembre hachés, puis la sauce soja et le miel.", "Laisser réduire 2 min et servir avec le riz."]
  },
  {
    id: "saumon-teriyaki", nom: "Saumon teriyaki", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "saumon", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 50, unite: "ml" },
      { id: "miel", quantite: 20, unite: "g" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Mélanger la sauce soja, le miel et le gingembre râpé.", "Cuire le saumon 3 min par face dans une poêle chaude.", "Verser la sauce, laisser épaissir 2 min en arrosant le poisson.", "Servir avec le riz, parsemé de graines de sésame si tu en as."]
  },
  {
    id: "soupe-de-nouilles-au-poulet", nom: "Soupe de nouilles au poulet", cuisine: "asiatique", type: "soupe",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "nouilles-chinoises", quantite: 120, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "eau", quantite: 800, unite: "ml" }
    ],
    etapes: ["Porter l'eau à ébullition avec le bouillon cube et le gingembre en tranches.", "Ajouter le poulet en fines lamelles, la carotte en rondelles et les champignons émincés, cuire 10 min.", "Ajouter les nouilles et cuire le temps indiqué sur le paquet.", "Assaisonner avec la sauce soja."]
  },
  {
    id: "curry-de-legumes", nom: "Curry de légumes", cuisine: "asiatique", type: "plat",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "petits-pois", quantite: 100, unite: "g" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "curry-en-poudre", quantite: 8, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Faire revenir l'oignon haché et le curry dans l'huile 2 min.", "Ajouter les pommes de terre et les carottes en dés, puis le lait de coco et le sel.", "Couvrir et mijoter 20 min, ajouter les petits pois 5 min avant la fin.", "Servir avec le riz."]
  },
  {
    id: "riz-au-boeuf-hache-sauce-soja", nom: "Riz au bœuf haché sauce soja", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Faire revenir l'oignon et l'ail hachés dans l'huile 3 min.", "Ajouter le bœuf et le faire dorer 5 min en l'émiettant.", "Ajouter la sauce soja et le sucre, cuire 2 min.", "Servir sur le riz."]
  }
]);

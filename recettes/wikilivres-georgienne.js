// ============================================================
// RECETTES : cuisine géorgienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "khinkali", nom: "Khinkali (raviolis géorgiens à la viande)", cuisine: "géorgienne", type: "plat",
    difficulte: "difficile", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Khinkali",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKhinkali",
    ingredients: [
      { id: "boeuf-hache", quantite: 120, unite: "g" },
      { id: "porc-hache", quantite: 80, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 200, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher finement l'oignon et le mélanger à 120 g de bœuf haché et 80 g de porc haché. Ajouter du poivre noir moulu, du sel et environ 50 ml d'eau chaude, puis bien mélanger.", "Tamiser 200 g de farine avec une pincée de sel, puis verser lentement environ 100 ml d'eau en pétrissant, jusqu'à obtenir une pâte ferme.", "Étaler la pâte très finement et découper des disques de la taille d'une assiette à dessert. Mettre une cuillerée à soupe de farce au centre de chaque disque, ramener les bords en les plissant et les tortiller pour fermer, puis aplatir légèrement.", "Plonger les khinkali dans une grande casserole d'eau bouillante salée, en remuant de temps en temps avec une cuillère en bois pour qu'ils n'attachent pas. Quand ils remontent à la surface, compter encore 6 à 7 min.", "Les sortir avec une écumoire et servir chaud."]
  }
]);

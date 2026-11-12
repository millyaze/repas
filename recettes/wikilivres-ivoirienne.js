// ============================================================
// RECETTES : cuisine ivoirienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "claclo", nom: "Claclo (beignets de banane plantain)", cuisine: "ivoirienne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Claclo",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FClaclo",
    ingredients: [
      { id: "banane-plantain", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher 2 bananes plantain et les écraser au mortier, à la fourchette ou au mixeur.", "Ajouter 20 g de farine, un peu de sel, du piment en poudre si on le souhaite et environ 1 cuillère à café d'oignon haché, puis bien mélanger.", "Chauffer l'huile dans une poêle. Avec les doigts ou une cuillère à soupe, former de petites boules de pâte et les faire dorer de chaque côté, en les séparant à la fourchette pour qu'elles ne collent pas.", "Les retirer avec une écumoire en les pressant légèrement pour enlever l'excès d'huile, puis les égoutter sur du papier absorbant."]
  }
]);

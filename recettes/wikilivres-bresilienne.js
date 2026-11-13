// ============================================================
// RECETTES : cuisine brésilienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "quindim", nom: "Quindim (petits flans brésiliens à la noix de coco)", cuisine: "brésilienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 65, portions: 2,
    source: "Wikilivres", idSource: "Quindim",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FQuindim",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 35, unite: "g" },
      { id: "beurre", quantite: 5, unite: "g" }
    ],
    etapes: ["Pour 4 petits moules. Séparer les jaunes des blancs (garder les blancs pour une autre recette) et passer les jaunes au tamis pour retirer l'excédent de blanc.", "Mélanger les jaunes avec le sucre et le beurre mou jusqu'à obtenir un mélange homogène.", "Faire gonfler la noix de coco dans un peu d'eau chaude, l'égoutter et l'ajouter à la préparation.", "Verser dans 4 petits moules beurrés et cuire au bain-marie, couvert d'une feuille d'aluminium, environ 50 minutes à 180 °C.", "Retirer l'aluminium et laisser dorer environ 4 minutes.", "Laisser refroidir puis reposer au frais, et démouler."]
  }
]);

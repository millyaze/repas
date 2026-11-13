// ============================================================
// RECETTES : cuisine polonaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "kluski-na-parze", nom: "Kluski na parze (petits pains vapeur polonais)", cuisine: "polonaise", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "Wikilivres", idSource: "Kluski na parze",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKluski_na_parze",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 15, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 125, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer un levain : mélanger le lait tiède, la levure, le sucre et un peu de farine pour obtenir une consistance de crème épaisse. Laisser gonfler dans un endroit chaud.", "Mettre le reste de la farine dans un saladier, ajouter l'œuf et le levain, et travailler la pâte jusqu'à ce qu'elle se détache facilement du saladier.", "Ajouter le beurre fondu et refroidi et une pincée de sel. Pétrir encore, couvrir d'un torchon et laisser doubler de volume dans un endroit chaud.", "Façonner des boules et les fariner. Les laisser gonfler à nouveau.", "Tendre un torchon au-dessus d'une marmite d'eau bouillante, y poser les boules, couvrir et cuire 10 min à la vapeur sans ouvrir."]
  }
]);

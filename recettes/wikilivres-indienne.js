// ============================================================
// RECETTES : cuisine indienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "curry-d-aubergine-a-la-poele", nom: "Curry d'aubergine à la poêle", cuisine: "indienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Curry d'aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCurry_d'aubergines",
    ingredients: [
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g", ou: { id: "creme-fraiche", quantite: 15, unite: "ml" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pate-de-curry", quantite: 10, unite: "g" },
      { id: "aubergine", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Chauffer la cuillère d'eau dans une poêle, y faire fondre le beurre (ou la crème fraîche) avec l'huile et la pâte de curry, en mélangeant bien.", "Quand c'est chaud, couper l'aubergine en rondelles directement dans la poêle.", "Cuire les rondelles jusqu'à ce qu'elles soient bien grillées des deux côtés et que toute l'eau soit absorbée, sans trop les cuire (elles deviendraient amères)."]
  }
]);

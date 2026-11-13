// ============================================================
// RECETTES : cuisine allemande, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "beetenbartsch", nom: "Beetenbartsch (soupe de betterave à la crème et aux lardons)", cuisine: "allemande", type: "soupe",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Beetenbartsch",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeetenbartsch",
    ingredients: [
      { id: "betterave-cuite", quantite: 270, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "marjolaine", quantite: 1, unite: "g" },
      { id: "creme-fraiche", quantite: 80, unite: "ml" },
      { id: "lardons", quantite: 35, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer 500 ml de bouillon de légumes avec l'eau et le bouillon cube.", "Couper l'oignon en rondelles et le cuire dans le bouillon avec la marjolaine.", "Ajouter 270 g de betteraves rouges cuites coupées en morceaux et cuire 15 min, puis mixer la soupe.", "Saler, poivrer, puis ajouter la crème (80 ml) et les lardons (dorés à la poêle au préalable). Mélanger et servir."]
  }
]);

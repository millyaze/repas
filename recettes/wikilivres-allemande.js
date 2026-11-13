// ============================================================
// RECETTES : cuisine allemande, reprises de Wikilivres (2 recettes, pour 2 personnes)
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
  },
  {
    id: "gratin-de-pates-a-la-viande-hachee", nom: "Gratin de pâtes à la viande hachée et aux tomates", cuisine: "allemande", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gratin de pâtes et viande hachée",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_de_p%C3%A2tes_et_viande_hach%C3%A9e",
    ingredients: [
      { id: "pates", quantite: 150, unite: "g" },
      { id: "boeuf-hache", quantite: 150, unite: "g" },
      { id: "lardons", quantite: 30, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 150, unite: "ml" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 20, unite: "g" },
      { id: "romarin", quantite: 2, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C. Cuire les pâtes, les égoutter et les refroidir à l'eau froide.", "Émincer l'oignon, puis le faire revenir avec les lardons dans un peu d'huile. Ajouter la viande hachée, puis le persil et le romarin.", "Beurrer un moule et y déposer la moitié des pâtes. Recouvrir avec la viande hachée, puis avec des rondelles de tomate, et finir avec le reste des pâtes.", "Mélanger le lait et l'œuf, assaisonner, puis arroser le gratin avec ce mélange.", "Saupoudrer de fromage râpé et cuire 30 minutes au four."]
  }
]);

// ============================================================
// RECETTES : cuisine cubaine, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "bacardi-cocktail", nom: "Bacardi Cocktail (rhum blanc, citron vert et sirop de canne)", cuisine: "cubaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Bacardi Cocktail",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FBacardi_Cocktail",
    ingredients: [
      { id: "rhum", quantite: 80, unite: "ml" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pressez le citron vert (un demi-citron par verre).", "Dans un verre à mélange rempli de glaçons, versez le rhum blanc (4 cl par verre), le jus de citron vert et le sucre de canne (l'équivalent de 2 cl de sirop par verre, en le dissolvant d'abord dans un peu d'eau chaude).", "Remuez, puis filtrez et servez dans deux verres à cocktail."]
  },
  {
    id: "daiquiri", nom: "Daiquiri (cocktail cubain rhum, citron vert, sucre)", cuisine: "cubaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Daiquiri",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FDaiquiri",
    ingredients: [
      { id: "rhum", quantite: 80, unite: "ml" },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 10, unite: "g" }
    ],
    etapes: ["Pressez les citrons verts (gardez un peu de zeste pour décorer). Il faut environ 4 cl de jus au total.", "Dans un shaker rempli de glaçons, mettez le rhum blanc (4 cl par verre), le jus de citron vert (2 cl par verre) et le sucre (l'équivalent de 1 cl de sirop de sucre par verre).", "Secouez vivement, puis versez dans deux verres à cocktail. Décorez de zestes de citron vert."]
  }
]);

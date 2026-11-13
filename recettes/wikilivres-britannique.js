// ============================================================
// RECETTES : cuisine britannique, reprises de Wikilivres (5 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "black-and-tan", nom: "Black & Tan (bière blonde et stout en deux couches)", cuisine: "britannique", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Black & Tan",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FBlack_%26_Tan",
    ingredients: [
      { id: "biere", quantite: 240, unite: "ml" },
      { id: "biere-stout", quantite: 240, unite: "ml" }
    ],
    etapes: ["Dans deux verres à bière, versez 12 cl de bière blonde chacun.", "Versez ensuite 12 cl de stout dans chaque verre, tout doucement (sur le dos d'une cuillère) pour que les deux bières restent en couches."]
  },
  {
    id: "creme-de-citron", nom: "Crème de citron (lemon curd)", cuisine: "britannique", type: "dessert",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Crème de citron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_de_citron",
    ingredients: [
      { id: "citron", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "fecule", quantite: 8, unite: "g" }
    ],
    etapes: ["Pour un petit pot. Laver les citrons.", "Mettre le zeste d'un citron dans une casserole, ajouter le jus des deux citrons, le sucre et la fécule de maïs.", "Dans un autre récipient, battre les œufs.", "Chauffer la casserole à feu doux en remuant jusqu'à obtenir un liquide homogène.", "Toujours en remuant, ajouter les œufs battus, puis passer à feu fort et fouetter sans arrêt jusqu'à ce que le mélange épaississe.", "Verser dans un pot, laisser refroidir et conserver au réfrigérateur."]
  },
  {
    id: "grog", nom: "Grog (rhum chaud au citron)", cuisine: "britannique", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Grog",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FGrog",
    ingredients: [
      { id: "rhum", quantite: 120, unite: "ml" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" }
    ],
    etapes: ["Pressez le citron.", "Dans une casserole, chauffez doucement le rhum, le sucre, le jus de citron et l'eau (environ 10 cl par verre), sans faire bouillir.", "Versez dans deux verres à grog et servez très chaud."]
  },
  {
    id: "sauce-a-la-menthe", nom: "Sauce à la menthe (sauce britannique pour l'agneau)", cuisine: "britannique", type: "sauce",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Sauce à la menthe",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_%C3%A0_la_menthe",
    ingredients: [
      { id: "menthe", quantite: 20, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "vinaigre", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 15, unite: "ml" }
    ],
    etapes: ["Hachez finement la menthe fraîche.", "Pilez ensemble la menthe et le sucre dans un mortier (ou mélangez-les à la cuillère en bois dans un bol).", "Ajoutez le vinaigre (de malt ou d'alcool blanc) et l'eau chaude, puis remuez jusqu'à ce que le sucre soit dissous.", "Laissez reposer 1 heure avant de servir."]
  },
  {
    id: "syllabub", nom: "Syllabub (crème fouettée au citron, cognac et xérès)", cuisine: "britannique", type: "dessert",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Syllabub",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSyllabub",
    ingredients: [
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "cognac", quantite: 8, unite: "ml" },
      { id: "xeres", quantite: 15, unite: "ml" },
      { id: "creme-liquide", quantite: 100, unite: "ml" },
      { id: "orange", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Pour 2 petites coupes. Dans un bol, mélanger le zeste du citron (non traité), le sucre, une demi-cuillère à soupe de jus de citron, le cognac et le xérès. Laisser macérer 30 minutes.", "Filtrer le mélange.", "Fouetter la crème très froide en y versant peu à peu le mélange filtré.", "Garder au frais jusqu'au moment de servir.", "Garnir les coupes d'une petite salade d'agrumes frais (par exemple de l'orange), recouvrir de syllabub et décorer de quelques écorces d'orange. Servir aussitôt."]
  }
]);

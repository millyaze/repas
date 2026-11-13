// ============================================================
// RECETTES : cuisine méditerranéenne, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "thon-grille-mediterraneen", nom: "Thon grillé à la méditerranéenne (marinade huile, balsamique et citron vert)", cuisine: "méditerranéenne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Thon grillé à la méditerranéenne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FThon_grill%C3%A9_%C3%A0_la_m%C3%A9diterran%C3%A9enne",
    ingredients: [
      { id: "thon-frais", quantite: 300, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "vinaigre-balsamique", quantite: 15, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Au moins 1 heure avant de servir, préparer la marinade dans un plat creux : huile d'olive, vinaigre balsamique, jus du citron vert, sel, poivre et quelques feuilles d'estragon frais ciselées si on en a.", "Y poser les 2 steaks de thon (environ 150 g chacun) et les retourner pour bien les enrober. Couvrir et mettre au frais.", "Huiler légèrement une grille propre (ou une poêle-grill).", "Égoutter les steaks et les faire griller environ 4 minutes de chaque côté : bien colorés à l'extérieur, encore un peu roses au milieu.", "Les poser dans les assiettes et arroser du reste de marinade.", "Servir avec des légumes vapeur, du riz ou une salade d'épinards."]
  },
  {
    id: "tortis-crevettes-feta", nom: "Tortis aux crevettes et à la feta", cuisine: "méditerranéenne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Torti aux crevettes et à la feta",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTorti_aux_crevettes_et_%C3%A0_la_feta",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "feta", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes al dente dans beaucoup d'eau bouillante salée, puis les égoutter.", "Décortiquer les crevettes et hacher les oignons.", "Dans une casserole, faire fondre le beurre à feu doux, puis ajouter les crevettes à feu moyen.", "Quand elles sont dorées, ajouter les oignons hachés et cuire 1 minute à feu doux.", "Ajouter la feta coupée en dés, puis la crème fraîche. Saler et poivrer.", "Mélanger cette sauce aux pâtes, parsemer de ciboulette ciselée et servir tout de suite."]
  }
]);

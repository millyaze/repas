// ============================================================
// RECETTES : cuisine hongroise, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "goulash-hongrois", nom: "Goulash hongrois (soupe de bœuf au paprika)", cuisine: "hongroise",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "Wikilivres", idSource: "Goulash",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGoulash",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "rutabaga", quantite: 100, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "saindoux", quantite: 15, unite: "g", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper 250 g de bœuf (jarret ou épaule) en dés, l'oignon et l'ail en petits morceaux.", "Faire fondre la graisse (ou chauffer l'huile) dans un faitout, y faire fondre l'oignon puis l'ail. Ajouter la viande et la faire revenir un peu.", "Ajouter le paprika en veillant à ce qu'il ne brûle pas, puis verser environ 1 l d'eau. Ajouter le cumin (en graines), le poivre et le sel.", "Couper la tomate et le poivron vert en dés et les ajouter. Pour plus de piquant, on peut plonger un piment entier dans la soupe.", "Laisser mijoter longtemps. Pendant la cuisson, ajouter la carotte, le céleri et le rutabaga coupés en morceaux, et le persil.", "Quand la viande est tendre, ajouter 300 g de pommes de terre en dés et cuire jusqu'à ce qu'elles soient fondantes."]
  },
  {
    id: "porkolt", nom: "Pörkölt (ragoût de bœuf hongrois au paprika)", cuisine: "hongroise",
    difficulte: "moyen", tempsMinutes: 210, portions: 2,
    source: "Wikilivres", idSource: "Pörkölt",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%B6rk%C3%B6lt",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "paprika", quantite: 7, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "saindoux", quantite: 15, unite: "g", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper 250 g de bœuf (paleron) en dés, l'oignon et l'ail en petits morceaux.", "Faire fondre la graisse dans une cocotte et y faire brunir l'oignon.", "Ajouter la viande, l'ail, le poivre, le sel et le cumin. Faire revenir à feu vif, puis laisser mijoter un peu.", "Retirer la cocotte du feu, attendre quelques minutes puis ajouter 1 cuillère à soupe de paprika doux (hors du feu pour qu'il ne brûle pas). Mélanger, laisser imprégner quelques minutes et reprendre la cuisson à feu doux.", "Ajouter ¼ de poivron (de type hongrois si possible) et ¼ de tomate coupés en morceaux. Verser de l'eau pour couvrir à peine la viande et laisser mijoter sans couvercle au moins 3 h, en rajoutant un peu d'eau dès que la viande est trop découverte.", "Pour relever, ajouter une pincée de piment avant la fin de la cuisson, toujours hors du feu. Ne pas trop rajouter d'eau à la fin pour garder une sauce épaisse : le plat est prêt quand la viande est fondante.", "Servir avec des pâtes, des gnocchis ou des pommes de terre. Il est encore meilleur réchauffé le lendemain."]
  }
]);

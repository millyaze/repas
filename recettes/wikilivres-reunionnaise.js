// ============================================================
// RECETTES : cuisine réunionnaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "puree-de-pommes-de-terre-aux-bredes-mafanes", nom: "Purée aux brèdes mafanes (pommes de terre, lait et ail)", cuisine: "réunionnaise", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Purée aux brèdes mafanes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_aux_br%C3%A8des_mafanes",
    ingredients: [
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse", ou: { id: "echalote", quantite: 1, unite: "pièce" } },
      { id: "bredes-mafanes", quantite: 25, unite: "g", ou: { id: "epinards", quantite: 25, unite: "g" } },
      { id: "lait", quantite: 200, unite: "ml" }
    ],
    etapes: ["Éplucher les pommes de terre et les cuire à l'eau jusqu'à ce qu'elles soient très tendres.", "Couper les feuilles de brèdes mafanes et hacher grossièrement l'ail.", "Écraser les pommes de terre en versant le lait, puis ajouter l'ail et les brèdes.", "Servir chaud."]
  }
]);

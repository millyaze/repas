// ============================================================
// RECETTES : cuisine libanaise, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "kibbe", nom: "Kibbé (boulettes de boulgour farcies à la viande)", cuisine: "libanaise", type: "entree",
    difficulte: "difficile", tempsMinutes: 210, portions: 2,
    source: "Wikilivres", idSource: "Kibbé",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKibb%C3%A9",
    ingredients: [
      { id: "boeuf-hache", quantite: 160, unite: "g" },
      { id: "boulgour", quantite: 60, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pignons-de-pin", quantite: 15, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "quatre-epices", quantite: 1, unite: "g", ou: { id: "poivre", quantite: 1, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire tremper le boulgour 2 à 3 h dans beaucoup d'eau.", "Mixer la moitié de l'oignon avec 100 g de viande, saler et ajouter le quatre-épices (ou du poivre).", "Presser le boulgour pour bien l'égoutter, l'ajouter à la viande et mixer encore. Réserver au frais.", "Farce : hacher le reste de l'oignon et le faire revenir 2 min avec les pignons dans 1 cuillère à soupe d'huile. Ajouter les 60 g de viande restants, assaisonner et cuire 10 min.", "Avec la pâte de boulgour, former de petites boules ovales et les creuser avec un doigt pour obtenir des parois fines.", "Farcir, refermer et donner une forme allongée, pointue aux deux bouts.", "Faire frire les kibbés 5 min dans le reste de l'huile bien chaude, en les retournant."]
  },
  {
    id: "mjadra", nom: "Mjadra (lentilles au riz et oignons dorés)", cuisine: "libanaise", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Mjadra",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMjadra",
    ingredients: [
      { id: "lentilles", quantite: 80, unite: "g" },
      { id: "riz", quantite: 40, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre 80 g de lentilles dans une casserole d'eau bouillante (environ 500 ml).", "Pendant ce temps, couper l'oignon en très petits morceaux et le faire dorer dans l'huile d'olive, jusqu'à ce qu'il soit bien doré, voire brun.", "Verser l'oignon sur les lentilles, puis ajouter 40 g de riz. Saler et poivrer.", "Laisser mijoter à feu doux jusqu'à ce que presque toute l'eau soit évaporée."]
  }
]);

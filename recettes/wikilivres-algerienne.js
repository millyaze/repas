// ============================================================
// RECETTES : cuisine algérienne, reprises de Wikilivres (4 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "chrik-brioches-au-sesame", nom: "Chrik (petites brioches au sésame)", cuisine: "algérienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Chrik",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChrik",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "graines-de-sesame", quantite: 40, unite: "g" },
      { id: "lait", quantite: 20, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Mélanger la farine et le sucre, faire un puits.", "Y verser le beurre fondu, un œuf entier, le sel et la levure délayée dans un peu d'eau. Mélanger, puis ajouter 30 g de graines de sésame.", "Ajouter le lait tiédi et pétrir environ 15 minutes, jusqu'à obtenir une pâte élastique.", "Former des boules de la taille d'une mandarine (environ 5) et les poser sur une plaque beurrée.", "Badigeonner avec le second œuf battu et saupoudrer du reste de sésame.", "Laisser reposer une demi-heure, puis cuire 20 à 30 minutes."]
  },
  {
    id: "frita", nom: "Frita (poivrons et tomates confits, côtes poêlées)", cuisine: "algérienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Frita",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFrita",
    ingredients: [
      { id: "cote-de-porc", quantite: 2, unite: "pièce", ou: { id: "cotelettes-d-agneau", quantite: 2, unite: "pièce" } },
      { id: "tomate", quantite: 8, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Ébouillanter les tomates, les peler, puis les épépiner en les pressant entre les mains pour retirer l'eau. Les couper en morceaux.", "Griller les poivrons (un rouge, un vert), retirer la peau et les couper grossièrement en lamelles.", "Dans une grande poêle, chauffer l'huile d'olive. Ajouter les poivrons, l'ail écrasé, le thym et le laurier. Saler, poivrer et cuire 10 min à feu moyen.", "Ajouter les tomates et cuire à couvert, à feu doux et sans remuer, jusqu'à ce que le mélange épaississe et ait la consistance d'une compote. Parsemer de persil haché.", "Pendant ce temps, cuire les côtes de porc (ou d'agneau) à feu vif dans une autre poêle, à point.", "Servir la viande nappée de frita, très chaude."]
  },
  {
    id: "karantika", nom: "Karantika (flan de pois chiches au cumin)", cuisine: "algérienne", type: "entree",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Karantika",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKarantika",
    ingredients: [
      { id: "farine-de-pois-chiches", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "eau", quantite: 300, unite: "ml" }
    ],
    etapes: ["Dans un grand saladier, verser la farine de pois chiches (non grillée), puis l'œuf battu, le beurre fondu, le cumin et enfin l'eau tiède.", "Mélanger au fouet et laisser reposer 10 min pour qu'il n'y ait plus de grumeaux.", "Verser dans un moule antiadhésif et cuire environ 30 min au four (180 °C), en surveillant.", "La karantika doit être ferme dessus et moelleuse au centre : vérifier avec la pointe d'un couteau.", "Passer 5 min sous le gril pour dorer le dessus."]
  },
  {
    id: "salade-juive", nom: "Salade juive (poivrons grillés et tomates)", cuisine: "algérienne", type: "entree",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Salade juive",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_juive",
    ingredients: [
      { id: "tomate", quantite: 8, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "vinaigre-balsamique", quantite: 10, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" }
    ],
    etapes: ["Ébouillanter les tomates, les peler, les épépiner en les pressant entre les mains et les couper en morceaux.", "Griller les poivrons (un rouge, un vert), les peler, les épépiner et les couper grossièrement en lamelles.", "Mettre tomates et poivrons dans un saladier. Ajouter l'ail pilé, le vinaigre, l'huile, sel et poivre.", "Mélanger avec le persil haché et servir très frais, en entrée."]
  }
]);

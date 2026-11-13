// ============================================================
// RECETTES : cuisine polonaise, reprises de Wikilivres (4 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "kluski-na-parze", nom: "Kluski na parze (petits pains vapeur polonais)", cuisine: "polonaise", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "Wikilivres", idSource: "Kluski na parze",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKluski_na_parze",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 15, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 125, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer un levain : mélanger le lait tiède, la levure, le sucre et un peu de farine pour obtenir une consistance de crème épaisse. Laisser gonfler dans un endroit chaud.", "Mettre le reste de la farine dans un saladier, ajouter l'œuf et le levain, et travailler la pâte jusqu'à ce qu'elle se détache facilement du saladier.", "Ajouter le beurre fondu et refroidi et une pincée de sel. Pétrir encore, couvrir d'un torchon et laisser doubler de volume dans un endroit chaud.", "Façonner des boules et les fariner. Les laisser gonfler à nouveau.", "Tendre un torchon au-dessus d'une marmite d'eau bouillante, y poser les boules, couvrir et cuire 10 min à la vapeur sans ouvrir."]
  },
  {
    id: "kugel", nom: "Kugel (couronne de pâte aux fruits confits, raisins et crème)", cuisine: "polonaise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "Wikilivres", idSource: "Kugel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKugel",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 330, unite: "ml" },
      { id: "fruits-confits", quantite: 80, unite: "g" },
      { id: "raisins-secs", quantite: 65, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Mélangez la farine et les œufs jusqu'à obtenir une pâte à nouilles.", "Étalez-la au rouleau en une feuille très fine.", "Hachez les fruits confits et mélangez-les avec les raisins secs.", "Dans un saladier, mélangez 200 ml de crème fraîche avec les fruits confits hachés et les raisins.", "Recouvrez la feuille de pâte de ce mélange, roulez-la et formez une couronne.", "Posez le gâteau sur un plat à four beurré et nappez-le du reste de crème (environ 130 ml).", "Faites cuire 2 heures à four moyen."]
  },
  {
    id: "placki-ziemniaczane", nom: "Placki ziemniaczane (galettes de pommes de terre)", cuisine: "polonaise", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Placki ziemniaczane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPlacki_ziemniaczane",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "huile-de-tournesol", quantite: 45, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et l'oignon, puis les mixer (ou les râper finement).", "Ajouter l'œuf et mélanger.", "Ajouter la farine pour épaissir la pâte, saler, poivrer et bien mélanger.", "Former de petites galettes d'environ 1/2 cm d'épaisseur.", "Les cuire dans une poêle avec l'huile chaude, des deux côtés.", "Les déposer sur du papier absorbant avant de servir."]
  },
  {
    id: "sernik", nom: "Sernik (gâteau polonais au fromage blanc et aux raisins secs)", cuisine: "polonaise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Sernik",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSernik",
    ingredients: [
      { id: "farine", quantite: 60, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml" },
      { id: "fromage-blanc", quantite: 250, unite: "g" },
      { id: "raisins-secs", quantite: 40, unite: "g" }
    ],
    etapes: ["Pour un petit moule de 18 cm. Séparer les 3 œufs : 1 jaune pour la pâte, 2 jaunes pour la crème, les 3 blancs seront montés en neige.", "Pâte : mélanger la farine, 1 jaune, 30 g de beurre mou, 20 g de sucre et une pincée de sel. Bien travailler, puis mettre au réfrigérateur.", "Faire gonfler les raisins secs 20 minutes dans de l'eau bouillante, puis les égoutter.", "Écraser le fromage blanc égoutté à la fourchette pour le rendre homogène, et y incorporer les 2 jaunes un par un.", "Ajouter 50 g de sucre, la vanille et les raisins, puis bien battre au batteur.", "Faire fondre 15 g de beurre et l'ajouter petit à petit en continuant de battre.", "Monter les 3 blancs en neige ferme avec une pincée de sel et les incorporer délicatement.", "Beurrer le moule et y étaler les trois quarts de la pâte en remontant les bords. Verser la crème dessus.", "Découper le reste de pâte en lanières et les poser en croisillons sur le gâteau.", "Cuire environ 45 minutes à 170 °C."]
  }
]);

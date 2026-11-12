// ============================================================
// RECETTES : cuisine thaïlandaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "khao-soi", nom: "Khao soi (nouilles au curry jaune et lait de coco)", cuisine: "thaïlandaise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Khao soy",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKhao_soy",
    ingredients: [
      { id: "nouilles-chinoises", quantite: 200, unite: "g" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "pate-de-curry", quantite: 30, unite: "g" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "porc-hache", quantite: 200, unite: "g", ou: { id: "blanc-de-poulet", quantite: 1, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "curcuma", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sauce-poisson", quantite: 30, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Cuire l'œuf 10 min pour qu'il soit dur, l'écaler. Cuire les nouilles aux œufs selon le paquet et les répartir dans 2 bols.", "Dans une casserole, chauffer le lait de coco à feu moyen et y délayer la pâte de curry jaune (ou massaman).", "Remuer doucement. Quand ça bout, ajouter l'ail haché, 500 ml de bouillon de poule (fait avec le cube), le curcuma, la sauce de poisson et 2 cuillères à café de jus de citron vert.", "Après 1 min, ajouter le porc haché (ou le poulet en petits morceaux) et cuire jusqu'à ce qu'il soit bien cuit.", "Verser la soupe sur les nouilles, ajouter un demi-œuf dur par bol et servir."]
  }
]);

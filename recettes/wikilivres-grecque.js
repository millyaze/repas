// ============================================================
// RECETTES : cuisine grecque, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "fakes", nom: "Fakès (soupe de lentilles grecque)", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Soupe de lentilles grecque",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_de_lentilles_grecque",
    ingredients: [
      { id: "lentilles", quantite: 170, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" }
    ],
    etapes: ["Mettre les lentilles dans une casserole, les couvrir d'eau, faire bouillir 5 min et égoutter.", "Faire suer l'oignon haché dans l'huile, puis ajouter les lentilles, 500 ml d'eau, l'ail et la tomate coupée.", "Cuire 40 min. Saler et poivrer."]
  },
  {
    id: "penne-rigate-a-la-grecque", nom: "Penne rigate à la grecque (tomates, olives et chèvre)", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Penne rigate à la grecque",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPenne_rigate_%C3%A0_la_grecque",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "olives-noires", quantite: 50, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "fromage-de-chevre", quantite: 90, unite: "g" },
      { id: "pates", quantite: 200, unite: "g" },
      { id: "basilic", quantite: 3, unite: "g" }
    ],
    etapes: ["Peler et épépiner les tomates, puis les couper en dés. Couper les olives noires (à la grecque) en morceaux et le chèvre (une demi-bûche) en gros dés.", "Chauffer presque toute l'huile d'olive dans une poêle, ajouter les tomates et les olives et les faire revenir 3 min à feu vif. Verser le vin blanc.", "Ajouter la moitié du chèvre, couvrir et éteindre le feu.", "Cuire les penne al dente, les égoutter et les verser sur les tomates. Bien remuer, couvrir et réchauffer 2 min.", "Servir parsemé du reste du chèvre et du basilic en fines lanières, avec un filet d'huile d'olive."]
  },
  {
    id: "spanakopita", nom: "Spanakopita (tourte grecque aux épinards et à la feta)", cuisine: "grecque",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Spanakopita",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpanakopita",
    ingredients: [
      { id: "epinards", quantite: 170, unite: "g" },
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 60, unite: "g", ou: { id: "fromage-de-chevre", quantite: 60, unite: "g" } },
      { id: "beurre", quantite: 5, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 250 °C. Beurrer un petit plat et y étaler la moitié de la pâte feuilletée.", "Battre l'œuf et en garder un peu pour dorer.", "Mélanger les épinards en branches, la feta coupée en morceaux (ou une bûche de chèvre) et le reste de l'œuf battu.", "Verser ce mélange sur la pâte et recouvrir avec l'autre moitié de pâte.", "Badigeonner le dessus avec l'œuf gardé de côté et cuire au four environ 45 min."]
  }
]);

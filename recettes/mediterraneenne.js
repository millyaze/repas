// ============================================================
// RECETTES : cuisine méditerranéenne (10 recettes, pour 2 personnes)
// Même format que recettes/francaise.js
// ============================================================
const RECETTES_MEDITERRANEENNE = [
  {
    id: "salade-grecque", nom: "Salade grecque", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 100, unite: "g" },
      { id: "olives-noires", quantite: 40, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les tomates et le concombre en morceaux, l'oignon en fines lamelles.", "Ajouter la feta en dés et les olives.", "Arroser d'huile d'olive, saler légèrement et mélanger."]
  },
  {
    id: "taboule", nom: "Taboulé", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "semoule", quantite: 120, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Verser l'eau bouillante salée sur la semoule, couvrir 5 min puis égrainer à la fourchette.", "Couper les tomates et le concombre en petits dés, hacher la menthe et le persil.", "Mélanger le tout avec le jus du citron et l'huile d'olive.", "Laisser reposer au frais avant de servir."]
  },
  {
    id: "chakchouka", nom: "Chakchouka", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon et les poivrons émincés dans l'huile 8 min.", "Ajouter l'ail, les tomates en dés, le cumin, le paprika et le sel, mijoter 10 min.", "Creuser 4 trous dans la sauce et y casser les œufs.", "Couvrir et cuire 5 min, jusqu'à ce que les blancs soient pris. Parsemer de coriandre si tu en as."]
  },
  {
    id: "houmous-et-pain-grille", nom: "Houmous et pain grillé", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "tahini", quantite: 30, unite: "g", optionnel: true },
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Égoutter et rincer les pois chiches.", "Les mixer avec le jus du citron, l'ail, l'huile, le cumin et le sel (et le tahini si tu en as). Ajouter un peu d'eau si c'est trop épais.", "Servir avec le pain grillé."]
  },
  {
    id: "poulet-au-citron-et-aux-olives", nom: "Poulet au citron et aux olives", cuisine: "méditerranéenne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "olives-noires", quantite: 50, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "semoule", quantite: 120, unite: "g" },
      { id: "eau", quantite: 220, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Dorer le poulet en morceaux dans l'huile 5 min.", "Ajouter l'oignon émincé, l'ail et le cumin, cuire 3 min.", "Ajouter le citron en fines tranches, les olives, 100 ml d'eau et le sel, couvrir et mijoter 20 min.", "Verser 120 ml d'eau bouillante sur la semoule, couvrir 5 min, égrainer et servir avec le poulet."]
  },
  {
    id: "couscous-de-legumes", nom: "Couscous de légumes", cuisine: "méditerranéenne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "semoule", quantite: 150, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 650, unite: "ml" }
    ],
    etapes: ["Faire revenir l'oignon émincé dans l'huile avec le cumin.", "Ajouter les carottes et la courgette en gros morceaux, la sauce tomate, 500 ml d'eau et le bouillon cube.", "Cuire 25 min, ajouter les pois chiches égouttés 5 min avant la fin.", "Verser 150 ml d'eau bouillante sur la semoule, couvrir 5 min, égrainer.", "Servir la semoule avec les légumes et leur bouillon."]
  },
  {
    id: "salade-nicoise", nom: "Salade niçoise", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "haricots-verts", quantite: 150, unite: "g" },
      { id: "olives-noires", quantite: 30, unite: "g" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "anchois", quantite: 30, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les œufs 10 min à l'eau bouillante et les haricots verts 8 min. Refroidir.", "Laver la salade, couper les tomates et les œufs en quartiers.", "Disposer salade, tomates, haricots, thon émietté, œufs et olives (et les anchois si tu en as).", "Assaisonner avec l'huile, le vinaigre et le sel."]
  },
  {
    id: "courgettes-farcies-au-boeuf", nom: "Courgettes farcies au bœuf", cuisine: "méditerranéenne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "courgette", quantite: 2, unite: "pièce" },
      { id: "boeuf-hache", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "herbes-de-provence", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les courgettes en deux dans la longueur et les creuser. Garder la chair.", "Faire revenir l'oignon haché, le bœuf et la chair de courgette dans l'huile 8 min.", "Ajouter la sauce tomate, les herbes, le sel et le poivre.", "Remplir les courgettes, parsemer de fromage.", "Cuire 25 min au four à 190 °C."]
  },
  {
    id: "saumon-au-four-citron-et-pommes-de-terre", nom: "Saumon au four, citron et pommes de terre", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "saumon", quantite: 300, unite: "g" },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "herbes-de-provence", quantite: 2, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Couper les pommes de terre en petits quartiers, les mélanger avec l'huile, le sel et les herbes, enfourner 20 min.", "Ajouter le saumon et le citron en tranches dans le plat, poivrer.", "Cuire encore 12 à 15 min."]
  },
  {
    id: "riz-aux-epinards-et-a-la-feta", nom: "Riz aux épinards et à la feta", cuisine: "méditerranéenne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "epinards", quantite: 300, unite: "g" },
      { id: "feta", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans l'huile 3 min.", "Ajouter le riz, remuer 1 min, puis les épinards, l'eau et le sel.", "Couvrir et cuire 15 à 18 min à feu doux, jusqu'à absorption de l'eau.", "Servir avec le jus du citron et la feta émiettée."]
  }
];

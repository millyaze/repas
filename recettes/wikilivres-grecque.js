// ============================================================
// RECETTES : cuisine grecque, reprises de Wikilivres (7 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "fakes", nom: "Fakès (soupe de lentilles grecque)", cuisine: "grecque", type: "soupe",
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
    id: "moussaka-au-mouton-et-aux-aubergines", nom: "Moussaka (aubergines, viande hachée et béchamel au parmesan)", cuisine: "grecque", type: "plat",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "Wikilivres", idSource: "Moussaka",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMoussaka",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "mouton-hache", quantite: 250, unite: "g", ou: { id: "agneau-hache", quantite: 250, unite: "g" } },
      { id: "tomates-concassees", quantite: 250, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "persil", quantite: 2, unite: "g" },
      { id: "menthe", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "parmesan", quantite: 75, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les aubergines dans la longueur en lames de 1 cm d'épaisseur. Saler les deux faces et les laisser dégorger 1 heure dans une passoire. Rincer, égoutter et sécher avec du papier absorbant.", "Chauffer 3 cuillères à soupe d'huile d'olive dans une sauteuse et y faire revenir l'oignon haché jusqu'à ce qu'il soit translucide.", "Ajouter la viande hachée et cuire 10 minutes en l'émiettant, jusqu'à ce que le liquide soit évaporé.", "Verser le vin blanc, puis ajouter les tomates, le persil, la menthe, la cannelle et le poivre. Porter à ébullition, baisser le feu et cuire 15 minutes à couvert, puis 10 minutes sans couvercle.", "Préparer la béchamel : faire fondre le beurre, ajouter la farine en pluie et mélanger vivement 2 minutes. Verser le lait en remuant jusqu'à ce que la sauce épaississe.", "Hors du feu, ajouter l'œuf légèrement battu, puis le parmesan. Mélanger jusqu'à ce que ce soit homogène, saler et poivrer.", "Préchauffer le four à 210 °C (th. 7). Faire dorer les aubergines dans le reste d'huile chaude et les égoutter sur du papier absorbant.", "Dans un plat à four, alterner : une couche d'aubergines, la moitié de la viande, une couche d'aubergines, le reste de viande, et finir par une couche d'aubergines.", "Napper de sauce au fromage et faire gratiner environ 45 minutes au four."]
  },
  {
    id: "penne-rigate-a-la-grecque", nom: "Penne rigate à la grecque (tomates, olives et chèvre)", cuisine: "grecque", type: "plat",
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
    id: "poulet-farci-aux-pignons-et-raisins", nom: "Poulet farci aux pignons, raisins secs et riz (façon grecque)", cuisine: "grecque", type: "plat",
    difficulte: "moyen", tempsMinutes: 155, portions: 2,
    source: "Wikilivres", idSource: "Poulet aux pignons et raisins",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_aux_pignons_et_raisins",
    ingredients: [
      { id: "poulet-entier", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "citron", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 60, unite: "g" },
      { id: "raisins-secs", quantite: 30, unite: "g" },
      { id: "pignons-de-pin", quantite: 30, unite: "g" },
      { id: "origan", quantite: 3, unite: "g" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver le poulet, le frotter avec le jus d'un citron, saler, poivrer et saupoudrer d'origan. Garder le foie pour la farce.", "Préparer la farce : faire sauter l'oignon haché, ajouter le foie haché, le jus d'un demi-citron, le jus de la moitié de la tomate, du sel, du poivre, le persil ciselé et un peu d'origan.", "Cuire 2 minutes, ajouter le riz, cuire 10 minutes, puis ajouter les raisins secs, les pignons et la cannelle.", "Laisser refroidir la farce 30 minutes, puis farcir le poulet et coudre les ouvertures.", "Éplucher, laver et couper les pommes de terre en quartiers.", "Mettre le poulet dans une cocotte, entouré des pommes de terre assaisonnées de sel, poivre, origan, jus de citron et du reste de jus de tomate. Ajouter 200 ml d'eau.", "Cuire à 180 °C pendant 1 h 30, en retournant le poulet toutes les demi-heures et en ajoutant 200 ml d'eau à chaque fois.", "Ajouter 100 ml d'eau, couvrir et cuire encore 30 minutes. Un poulet entier nourrit environ 4 personnes : le reste se garde pour le lendemain."]
  },
  {
    id: "salade-de-concombre-feta-yaourt-a-la-cretoise", nom: "Salade de concombre à la feta et au yaourt (façon crétoise)", cuisine: "grecque", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Concombres à la cretoise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FConcombres_%C3%A0_la_cretoise",
    ingredients: [
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 80, unite: "g" },
      { id: "olives-noires", quantite: 70, unite: "g" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 10, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Peler le concombre, l'ouvrir en deux dans la longueur et enlever les pépins avec une cuillère à café.", "Le couper en dés, les mettre dans une passoire, saupoudrer de sel et laisser dégorger 30 minutes. Les éponger ensuite sur du papier absorbant.", "Couper la feta en petits cubes.", "Préparer la sauce : dans un bol, fouetter un peu de jus de citron, le yaourt, la crème fraîche et l'huile d'olive.", "Disposer les dés de concombre et la feta dans un plat creux, puis arroser de sauce au yaourt et mélanger.", "Poivrer, saler très légèrement et décorer avec les olives noires. Servir très frais. On peut ajouter des herbes fraîches et des tomates cerises."]
  },
  {
    id: "spanakopita", nom: "Spanakopita (tourte grecque aux épinards et à la feta)", cuisine: "grecque", type: "plat",
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
  },
  {
    id: "vassilopita", nom: "Vassilopita (gâteau grec du Nouvel An à l'orange et au cognac)", cuisine: "grecque", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Vassilopita",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FVassilopita",
    ingredients: [
      { id: "beurre", quantite: 130, unite: "g" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "orange", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "bicarbonate-de-soude", quantite: 3, unite: "g" },
      { id: "cognac", quantite: 20, unite: "ml" }
    ],
    etapes: ["Préchauffez le four à 160 °C et beurrez un moule d'environ 18 cm avec un peu du beurre.", "Faites fondre 125 g de beurre. Pressez les oranges et un demi-citron, et ajoutez le jus au beurre fondu.", "Séparez les œufs. Battez les jaunes avec le sucre et ajoutez-les au mélange.", "Ajoutez le cognac, le bicarbonate de soude et la farine.", "Montez les blancs en neige ferme et incorporez-les délicatement (cette étape n'est pas écrite dans la page d'origine).", "Versez dans le moule et faites cuire 30 minutes à 160 °C."]
  }
]);

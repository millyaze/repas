// ============================================================
// RECETTES : cuisine indienne, reprises de Wikilivres (7 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "barfi-aux-amandes", nom: "Barfi (confiserie indienne au lait et aux amandes)", cuisine: "indienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Barfi",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBarfi",
    ingredients: [
      { id: "lait", quantite: 500, unite: "ml" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "poudre-d-amandes", quantite: 60, unite: "g" },
      { id: "cardamome", quantite: 2, unite: "g" },
      { id: "pistaches", quantite: 12, unite: "g" }
    ],
    etapes: ["Faire bouillir le lait en remuant jusqu'à ce qu'il commence à épaissir.", "Ajouter le sucre et cuire 10 minutes en remuant, puis ajouter la poudre d'amandes.", "Cuire en remuant jusqu'à ce que la pâte se décolle de la casserole en un seul bloc.", "Hors du feu, ajouter la cardamome moulue et mélanger.", "Étaler sur un plat légèrement beurré en lissant avec le dos d'une cuillère. Laisser tiédir, tracer des losanges et décorer de pistaches.", "Couper le long des incisions avant que la pâte ne durcisse complètement (environ 12 pièces)."]
  },
  {
    id: "chapatis", nom: "Chapatis (galettes indiennes à la farine complète)", cuisine: "indienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Chapati",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChapati",
    ingredients: [
      { id: "farine-complete", quantite: 125, unite: "g", ou: { id: "farine", quantite: 125, unite: "g" } },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Pour 6 chapatis. Mettre la farine et le sel dans un saladier, creuser un puits et ajouter l'eau peu à peu (on peut aussi la remplacer par du lait ou du petit-lait).", "Pétrir 10 minutes, couvrir d'un linge légèrement humide et laisser reposer 30 minutes au frais.", "Pétrir de nouveau avec énergie, partager en 6 morceaux et étaler chacun en rond mince sur un plan fariné.", "Cuire chaque galette à feu doux dans une poêle ou sur un tawa à peine graissé. Les retourner quand des bulles se forment à la surface.", "Les retirer quand elles sont dorées et les tenir au chaud pendant la cuisson des autres.", "Badigeonner d'un peu de beurre fondu sur une face et servir chaud."]
  },
  {
    id: "curry-d-aubergine-a-la-poele", nom: "Curry d'aubergine à la poêle", cuisine: "indienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Curry d'aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCurry_d'aubergines",
    ingredients: [
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g", ou: { id: "creme-fraiche", quantite: 15, unite: "ml" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pate-de-curry", quantite: 10, unite: "g" },
      { id: "aubergine", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Chauffer la cuillère d'eau dans une poêle, y faire fondre le beurre (ou la crème fraîche) avec l'huile et la pâte de curry, en mélangeant bien.", "Quand c'est chaud, couper l'aubergine en rondelles directement dans la poêle.", "Cuire les rondelles jusqu'à ce qu'elles soient bien grillées des deux côtés et que toute l'eau soit absorbée, sans trop les cuire (elles deviendraient amères)."]
  },
  {
    id: "halavah", nom: "Halavah (confiserie de semoule au beurre)", cuisine: "indienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Halavah",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FHalavah",
    ingredients: [
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sucre", quantite: 150, unite: "g" },
      { id: "semoule", quantite: 90, unite: "g" },
      { id: "beurre", quantite: 55, unite: "g" }
    ],
    etapes: ["Porter l'eau et le sucre à ébullition dans une casserole.", "Pendant ce temps, dorer la semoule dans le beurre à la poêle.", "Quand la semoule est bien dorée et que le sirop bout, verser la semoule dans la casserole en remuant sans arrêt.", "Verser la pâte dans un petit moule et laisser refroidir quelques heures au réfrigérateur.", "Une fois ferme, découper en carrés (environ 8 morceaux).", "La recette de base est très grasse : on peut réduire le beurre de moitié, le résultat sera plus ferme et moins fondant."]
  },
  {
    id: "kulfi-aux-pistaches", nom: "Kulfi (glace indienne aux amandes et pistaches)", cuisine: "indienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Kulfi",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKulfi",
    ingredients: [
      { id: "lait-concentre-non-sucre", quantite: 100, unite: "g" },
      { id: "lait-concentre-sucre", quantite: 100, unite: "g" },
      { id: "creme-liquide", quantite: 100, unite: "ml" },
      { id: "poudre-d-amandes", quantite: 12, unite: "g" },
      { id: "pistaches", quantite: 12, unite: "g" }
    ],
    etapes: ["Mélanger le lait concentré non sucré, le lait concentré sucré, la crème, la poudre d'amandes et la moitié des pistaches concassées.", "Verser dans deux ramequins ou petits moules coniques.", "Faire prendre au congélateur 3 à 4 heures.", "Démouler dans une assiette, inciser en croix sur le dessus, verser un peu de crème autour et décorer avec le reste des pistaches."]
  },
  {
    id: "pakoras-d-oignons", nom: "Pakoras d'oignons (beignets à la farine de pois chiches)", cuisine: "indienne", type: "entree",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Pakora",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPakora",
    ingredients: [
      { id: "farine-de-pois-chiches", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 1, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les oignons en rondelles.", "Tamiser la farine de pois chiches dans un bol, ajouter la levure et le sel (et, si on en a, une cuillère à café de graines de nigelle).", "Verser l'eau peu à peu jusqu'à obtenir la consistance d'une pâte à beignets.", "Chauffer l'huile dans une poêle antiadhésive.", "Passer les rondelles d'oignon dans la pâte, bien enrobées, puis les faire dorer dans l'huile chaude.", "Les égoutter sur du papier absorbant avant de servir, avec un zeste de citron vert pour plus de saveur."]
  },
  {
    id: "poulet-gingembre-cardamome", nom: "Poulet au gingembre et à la cardamome (sauce aux amandes et au yaourt)", cuisine: "indienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Poulet au gingembre et cardamome",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_au_gingembre_et_cardamome",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 40, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "cardamome", quantite: 1, unite: "g" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml", optionnel: true },
      { id: "eau", quantite: 25, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "riz", quantite: 200, unite: "g" }
    ],
    etapes: ["Éplucher le gingembre et le mixer avec l'ail, la poudre d'amandes et l'eau.", "Couper le poulet en dés et le faire dorer 7 à 8 minutes dans un filet d'huile. Le réserver.", "Dans la même poêle, faire revenir l'oignon émincé avec les capsules de cardamome pendant une dizaine de minutes. Retirer la cardamome.", "Ajouter le mélange mixé et le cumin, en remuant sans arrêt.", "Incorporer le yaourt cuillère par cuillère, puis la crème fraîche si on en met et le poulet.", "Laisser cuire 10 minutes à feu doux.", "Servir avec le riz cuit à l'eau."]
  }
]);

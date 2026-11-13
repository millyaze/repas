// ============================================================
// RECETTES : cuisine asiatique, reprises de Wikilivres (4 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "carottes-au-lait-de-coco-gingembre-raisins-secs", nom: "Carottes au lait de coco, au gingembre et aux raisins secs", cuisine: "asiatique", type: "entree",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Carottes au lait de coco, au gingembre et aux raisins secs",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCarottes_au_lait_de_coco%2C_au_gingembre_et_aux_raisins_secs",
    ingredients: [
      { id: "carotte", quantite: 4, unite: "pièce" },
      { id: "lait-de-coco", quantite: 400, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "gingembre", quantite: 20, unite: "g" },
      { id: "raisins-secs", quantite: 30, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les carottes et les couper en rondelles.", "Faire bouillir le lait de coco avec l'eau.", "Ajouter le gingembre râpé et les raisins secs.", "Plonger les carottes dans le liquide et les cuire 15 à 20 minutes.", "Les égoutter et les verser dans un plat de service. Saler et poivrer.", "Servir en entrée ou avec un plat épicé."]
  },
  {
    id: "egg-rolls", nom: "Egg rolls (rouleaux frits au poulet et au chou)", cuisine: "asiatique", type: "entree",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Egg rolls",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FEgg_rolls",
    ingredients: [
      { id: "pate-a-rouleaux-imperiaux", quantite: 12, unite: "pièce", ou: { id: "feuille-de-brick", quantite: 8, unite: "pièce" } },
      { id: "chou", quantite: 100, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "huile-d-arachide", quantite: 410, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sauce-aux-prunes", quantite: 30, unite: "ml", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire cuire le blanc de poulet, puis le hacher. Râper le chou, hacher finement l'oignon et le céleri.", "Mélanger dans un grand bol le poulet, le chou, l'oignon, le céleri, la sauce soja, 10 ml d'huile, le sel et le poivre.", "Battre l'œuf. Poser une portion de farce au centre d'une pâte, en gardant les bords dégagés. Mouiller les bords avec un peu d'œuf.", "Replier un côté sur la farce, puis l'autre par-dessus pour qu'il dépasse légèrement et colle. Aux extrémités, les deux côtés se referment l'un sur l'autre. Appuyer pour sceller le rouleau en cylindre aplati.", "Frire les rouleaux dans l'huile jusqu'à ce qu'ils soient légèrement dorés.", "Les égoutter sur du papier absorbant.", "Servir avec de la sauce aux prunes, par exemple. Se conservent plusieurs jours au réfrigérateur et se congèlent bien."]
  },
  {
    id: "nouilles-de-sarrasin-sauce-cacahuete", nom: "Nouilles de sarrasin, sauce cacahuète épicée", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Nouilles au sarrasin",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNouilles_au_sarrasin",
    ingredients: [
      { id: "nouilles-de-sarrasin", quantite: 175, unite: "g" },
      { id: "beurre-de-cacahuete", quantite: 65, unite: "g" },
      { id: "eau", quantite: 40, unite: "ml" },
      { id: "sauce-soja", quantite: 12, unite: "ml" },
      { id: "melasse", quantite: 10, unite: "g" },
      { id: "gingembre", quantite: 12, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-piquante", quantite: 1, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "cacahuetes", quantite: 10, unite: "g" }
    ],
    etapes: ["Mixer le beurre de cacahuète, l'eau, la sauce soja, la mélasse, le gingembre râpé, l'ail et la sauce piquante jusqu'à obtenir une sauce lisse. Réserver.", "Cuire les nouilles selon les indications du paquet, les égoutter, les rincer et les laisser refroidir.", "Dans un grand bol, mélanger les nouilles et la sauce jusqu'à ce que tout soit bien enrobé.", "Garnir d'oignon nouveau coupé en biais et de cacahuètes hachées. Servir."]
  },
  {
    id: "salade-de-pates-basilic-sauce-cacahuete", nom: "Salade de pâtes au basilic (sauce cacahuète et sésame)", cuisine: "asiatique", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Salade de pâtes au basilic",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_de_p%C3%A2tes_au_basilic",
    ingredients: [
      { id: "pates", quantite: 175, unite: "g" },
      { id: "champignons", quantite: 75, unite: "g" },
      { id: "basilic", quantite: 12, unite: "g" },
      { id: "beurre-de-cacahuete", quantite: 10, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "huile-de-sesame", quantite: 12, unite: "ml" },
      { id: "sauce-soja", quantite: 12, unite: "ml" },
      { id: "huile-d-arachide", quantite: 8, unite: "ml" },
      { id: "sauce-piquante", quantite: 1, unite: "ml" }
    ],
    etapes: ["Cuire les pâtes « al dente » dans de l'eau bouillante salée, les égoutter et les refroidir sous l'eau froide.", "Les arroser d'huile d'arachide et remuer.", "Mélanger l'huile de sésame, la sauce soja, le beurre de cacahuète et la sauce piquante.", "Verser cette sauce sur les pâtes et bien remuer.", "Ajouter les oignons nouveaux tranchés, les champignons émincés et le basilic haché. Servir frais."]
  }
]);

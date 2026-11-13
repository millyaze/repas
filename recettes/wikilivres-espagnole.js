// ============================================================
// RECETTES : cuisine espagnole, reprises de Wikilivres (11 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "bienmesabe", nom: "Bienmesabe (dessert andalou aux amandes et aux jaunes d'œufs)", cuisine: "espagnole", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Bienmesabe",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBienmesabe",
    ingredients: [
      { id: "poudre-d-amandes", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "cannelle", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour 2 à 4 petites coupes. Cuire l'eau et le sucre dans une petite casserole en remuant jusqu'à obtenir un sirop, puis ôter du feu.", "Ajouter la poudre d'amandes et la cannelle, et mélanger.", "Remettre sur le feu et cuire en remuant jusqu'à ce que la préparation épaississe. Laisser tiédir.", "À part, séparer les œufs (garder les blancs pour autre chose) et battre les 2 jaunes. Les verser dans la casserole.", "Remettre sur le feu et cuire 5 minutes en remuant sans arrêt.", "Laisser refroidir avant de servir."]
  },
  {
    id: "calmars-a-l-encre", nom: "Calmars dans leur encre (chipirones en su tinta)", cuisine: "espagnole", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Calmars cuits en leur encre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCalmars_cuits_en_leur_encre",
    ingredients: [
      { id: "calmar", quantite: 300, unite: "g" },
      { id: "echalote", quantite: 5, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "farine-de-mais", quantite: 20, unite: "g", ou: { id: "fecule", quantite: 20, unite: "g" } },
      { id: "vin-blanc", quantite: 150, unite: "ml" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Nettoyer 300 g de petits calmars frais : retirer les poches d'encre et les garder (si vos calmars sont déjà nettoyés, on trouve de l'encre en sachet chez le poissonnier). Séparer les ailes et les tentacules des corps.", "Hacher les ailes et les tentacules. Dans un bol, mixer l'encre avec un peu d'eau et une pincée de sel.", "Hacher l'ail et 5 échalotes, et les faire revenir dans une poêle avec un peu d'huile d'olive.", "Quand ils commencent à dorer, ajouter les ailes et tentacules hachés, les corps des calmars et environ 1 cuillère à soupe et demie de farine de maïs. Remuer et cuire encore un peu.", "Verser l'encre mixée et 150 ml de vin blanc, puis cuire à feu moyen 10 à 15 min."]
  },
  {
    id: "coca-de-llanda", nom: "Coca de llanda (gâteau catalan à l'orange)", cuisine: "espagnole", type: "dessert",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Coca de llanda",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCoca_de_llanda",
    ingredients: [
      { id: "farine", quantite: 130, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 80, unite: "ml" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour un petit moule rectangulaire d'environ 20 cm. Huiler le moule.", "Laver l'orange, râper finement le zeste, puis presser le fruit : on doit obtenir environ 50 ml de jus.", "Mélanger le jus, le zeste, l'œuf, la farine, la levure, le lait, 65 g de sucre et l'huile d'olive.", "Verser dans le moule. Mélanger 10 g de sucre avec la cannelle et dessiner des rayures sur la pâte.", "Cuire 35 minutes à 180 °C, four préchauffé."]
  },
  {
    id: "dattes-au-chorizo-et-au-bacon", nom: "Dattes au chorizo et au bacon", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Dattes au chorizo et au bacon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDattes_au_chorizo_et_au_bacon",
    ingredients: [
      { id: "dattes", quantite: 80, unite: "g" },
      { id: "chorizo", quantite: 50, unite: "g" },
      { id: "bacon", quantite: 4, unite: "tranche" }
    ],
    etapes: ["Préchauffer le four à 210 °C.", "Couper le chorizo en tranches, puis chaque tranche en deux. Le faire revenir à la poêle jusqu'à ce qu'il soit croustillant, puis le réserver.", "Ouvrir les 8 dattes en deux, retirer le noyau, mettre deux morceaux de chorizo au centre et refermer.", "Couper les tranches de bacon en deux. Enrouler chaque datte d'un morceau de bacon et maintenir avec une pique en bois.", "Cuire environ 5 min sur une plaque au four, jusqu'à ce que le bacon soit croustillant."]
  },
  {
    id: "ensaladilla", nom: "Ensaladilla (salade de pommes de terre au thon)", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Salade de thon et légumes ou Ensaladilla",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_de_thon_et_l%C3%A9gumes_ou_Ensaladilla",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "petits-pois", quantite: 40, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "mayonnaise", quantite: 100, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre dans leur peau à l'eau, les laisser refroidir, les éplucher et les couper en tout petits cubes.", "Éplucher la carotte, la couper de la même taille et la cuire à l'eau salée avec les petits pois.", "Couper un quart du poivron rouge en petits dés.", "Mélanger les légumes refroidis, le thon émietté et la mayonnaise."]
  },
  {
    id: "escalivada", nom: "Escalivada (légumes grillés à la catalane)", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Escalivada",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FEscalivada",
    ingredients: [
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Laver et sécher les légumes.", "Couper l'aubergine et les oignons en deux dans la longueur. Envelopper chaque tomate et chaque oignon dans du papier aluminium.", "Enfourner tous les légumes. Retirer les tomates après 25 min, les poivrons et l'aubergine après 35 min, les oignons après 50 min (la peau doit être brunie et cloquée).", "Ouvrir les papillotes et laisser refroidir. Peler les tomates et couper tomates et oignons en rondelles.", "Peler et épépiner les poivrons et l'aubergine, les couper en lanières.", "Mettre les légumes dans un plat, saler, poivrer, arroser d'huile d'olive et parsemer d'ail en petits morceaux.", "Laisser mariner 1 h en remuant de temps en temps. Servir froid ou tiède, en accompagnement ou avec du pain."]
  },
  {
    id: "gazpacho", nom: "Gazpacho", cuisine: "espagnole", type: "soupe",
    difficulte: "facile", tempsMinutes: 160, portions: 2,
    source: "Wikilivres", idSource: "Gazpacho",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGazpacho",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire des croûtons avec un peu du pain et les réserver.", "Piler l'ail avec une pincée de sel (ou le mixer). Émietter le reste du pain et l'ajouter.", "Verser l'huile peu à peu en remuant pour obtenir une pâte homogène. Laisser reposer 30 min.", "Laver ou éplucher les légumes (tomates, concombre, oignon, poivron rouge et vert), les épépiner si besoin. Couper un tiers des légumes en petits dés et les réserver.", "Écraser ou mixer le reste des légumes avec la pâte. Passer au chinois et allonger avec le vinaigre (de xérès de préférence) et 250 ml d'eau.", "Laisser au moins 2 h au réfrigérateur.", "Bien remuer, saler, poivrer et servir avec les croûtons et les dés de légumes."]
  },
  {
    id: "mahonesa", nom: "Mahonesa (mayonnaise espagnole)", cuisine: "espagnole", type: "sauce",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Mahonesa",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMahonesa",
    ingredients: [
      { id: "huile-d-olive", quantite: 200, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour un petit bol de sauce. Mettre dans un récipient étroit et haut l'œuf, l'huile d'olive, quelques gouttes de jus de citron (environ 4) et le sel.", "Poser le mixeur plongeant au fond du récipient et mixer sans le bouger jusqu'à ce que l'émulsion prenne, puis le remonter doucement.", "Goûter et rectifier l'assaisonnement en sel."]
  },
  {
    id: "paella-valencienne", nom: "Paella valencienne (poulet et lapin)", cuisine: "espagnole", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Paella",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPaella",
    ingredients: [
      { id: "moules", quantite: 120, unite: "g", optionnel: true },
      { id: "cuisse-de-poulet", quantite: 1, unite: "pièce" },
      { id: "lapin", quantite: 170, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "haricots-verts", quantite: 50, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "safran", quantite: 1, unite: "sachet" },
      { id: "riz", quantite: 160, unite: "g" }
    ],
    etapes: ["Nettoyer les moules (facultatives). Couper le poulet et le lapin en petits morceaux et bien les saler.", "Chauffer un filet d'huile d'olive dans un plat à paella, y mettre le poulet et le lapin. Après quelques minutes, ajouter la tomate coupée en morceaux.", "Quand la viande est cuite, ajouter le poivron (rouge ou vert) en lanières et les haricots verts, baisser le feu et ajouter le paprika.", "Verser 500 ml d'eau et porter à ébullition. Ajouter les moules et le safran, et laisser quelques minutes.", "Ajouter le riz (rond de préférence) et baisser le feu. Servir quand le riz est cuit."]
  },
  {
    id: "salade-de-piquillos-au-thon", nom: "Salade de piquillos au thon", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Salade de piquillo",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_de_piquillo",
    ingredients: [
      { id: "poivrons-piquillos", quantite: 4, unite: "pièce" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper l'oignon en fines lamelles et en faire un petit tas au centre de chaque assiette.", "Disposer les poivrons piquillos autour.", "Poser les morceaux de thon à l'huile d'olive (ventrèche de thon de préférence) sur l'oignon.", "Saupoudrer d'un peu de sel et arroser d'un filet d'huile d'olive vierge extra."]
  },
  {
    id: "thon-a-la-catalane", nom: "Thon à la catalane", cuisine: "espagnole", type: "plat",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Thon à la catalane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FThon_%C3%A0_la_catalane",
    ingredients: [
      { id: "thon-frais", quantite: 350, unite: "g" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "cornichons", quantite: 70, unite: "g" },
      { id: "sauce-tomate", quantite: 35, unite: "g" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "persil", quantite: 3, unite: "g" },
      { id: "coriandre", quantite: 3, unite: "g" },
      { id: "origan", quantite: 1, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g" },
      { id: "vinaigre", quantite: 100, unite: "ml" }
    ],
    etapes: ["Trois jours avant : éplucher les oignons (idéalement 7 petits oignons, sinon couper les oignons en quartiers), les saler au gros sel et les laisser dégorger. Les essuyer, les mettre dans un bocal, les couvrir de vinaigre chaud et les laisser au moins 2 jours.", "Le jour même : peler, épépiner et couper les tomates en dés.", "Huiler une cocotte à fond épais avec une partie de l'huile, y mettre les tomates puis le thon. Assaisonner de sel, de piment et des herbes hachées (persil, coriandre, origan).", "Couvrir, porter tout doucement à ébullition et laisser mijoter 5 min.", "Mélanger le coulis de tomate avec le reste de l'huile, verser dans la cocotte et cuire encore 10 min.", "Ajouter les cornichons en rondelles et les oignons égouttés. Servir froid."]
  }
]);

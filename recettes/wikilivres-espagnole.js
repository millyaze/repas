// ============================================================
// RECETTES : cuisine espagnole, reprises de Wikilivres (23 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "anchois-a-la-catalane", nom: "Anchois à la catalane (œufs durs, olives et vinaigrette)", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Anchois à la catalane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FAnchois_%C3%A0_la_catalane",
    ingredients: [
      { id: "anchois", quantite: 30, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "vinaigre", quantite: 8, unite: "ml" },
      { id: "olives-noires", quantite: 20, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Parer les anchois et lever les filets.", "Faire durcir les œufs 10 minutes dans l'eau bouillante, les écaler et les couper en deux.", "Séparer les blancs des jaunes et les concasser séparément.", "Disposer les filets d'anchois sur un plat et les couvrir de bandes de blanc et de jaune d'œuf concassés, avec les olives.", "Arroser d'huile d'olive et de vinaigre, poivrer et servir frais."]
  },
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
    id: "epinards-a-la-catalane", nom: "Épinards à la catalane (pignons, raisins secs et jambon)", cuisine: "espagnole", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Épinards à la catalane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2F%C3%89pinards_%C3%A0_la_catalane",
    ingredients: [
      { id: "epinards", quantite: 250, unite: "g" },
      { id: "jambon-cru", quantite: 2, unite: "tranche", ou: { id: "poitrine-fumee", quantite: 60, unite: "g" } },
      { id: "pignons-de-pin", quantite: 30, unite: "g" },
      { id: "raisins-secs", quantite: 30, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver et couper grossièrement les épinards.", "Couper le jambon en bandes et hacher l'ail.", "Dans une poêle antiadhésive avec un peu d'huile d'olive, faire revenir doucement le piment, les pignons, l'ail et le jambon.", "Ajouter les épinards et les raisins secs, saler et poivrer.", "Cuire à feu moyen en remuant de temps en temps, jusqu'à ce que les épinards soient tendres.", "Servir chaud."]
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
    id: "fabada-asturiana", nom: "Fabada asturiana (haricots blancs, chorizo et boudin)", cuisine: "espagnole", type: "plat",
    difficulte: "moyen", tempsMinutes: 210, portions: 2,
    source: "Wikilivres", idSource: "Fabada asturiana",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFabada_asturiana",
    ingredients: [
      { id: "haricots-blancs-secs", quantite: 125, unite: "g" },
      { id: "chorizo", quantite: 65, unite: "g" },
      { id: "boudin-noir", quantite: 1, unite: "pièce" },
      { id: "poitrine-de-porc", quantite: 40, unite: "g", ou: { id: "poitrine-fumee", quantite: 40, unite: "g" } },
      { id: "jambon-cru", quantite: 2, unite: "tranche" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "safran", quantite: 1, unite: "sachet" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, mettre les haricots à tremper 12 heures dans de l'eau froide. Retirer ceux qui flottent.", "Couper l'oignon en quatre et éplucher l'ail.", "Dans une grande casserole, mettre un filet d'huile d'olive, l'ail, l'oignon, les haricots, la poitrine de porc et le jambon cru.", "Couvrir d'eau et cuire 1 h 30 à feu doux. Vérifier de temps en temps que les haricots restent couverts, en ajoutant un peu d'eau froide si besoin.", "Couper le chorizo et le boudin en rondelles, les ajouter et cuire encore 1 h 30.", "Faire griller le safran quelques secondes dans une poêle sans graisse, puis l'ajouter à la casserole.", "Cuire encore 30 minutes. Goûter, saler si besoin. Si le bouillon est trop clair, écraser quelques haricots dedans.", "Laisser reposer sans laisser refroidir, puis servir."]
  },
  {
    id: "gachas-bouillie-de-farine-lait-miel-cannelle", nom: "Gachas (bouillie de farine au lait, miel et cannelle)", cuisine: "espagnole", type: "dessert",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Gachas",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGachas",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "farine", quantite: 120, unite: "g" },
      { id: "miel", quantite: 10, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml", optionnel: true }
    ],
    etapes: ["Chauffer l'huile d'olive dans une poêle.", "Quand elle est chaude, ajouter la farine et la faire revenir doucement en remuant sans arrêt pour éviter les grumeaux.", "Verser le lait peu à peu en mélangeant, jusqu'à ce que le tout soit homogène (ajouter un peu de lait si c'est trop épais).", "Ajouter le sucre, la cannelle, le miel et la vanille éventuelle.", "Mélanger encore jusqu'à obtenir une pâte bien lisse. Servir tiède."]
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
    id: "melon-au-jambon", nom: "Melon au jambon cru (bouchées apéritives)", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Melon au jambon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMelon_au_jambon",
    ingredients: [
      { id: "melon", quantite: 1, unite: "pièce" },
      { id: "jambon-cru", quantite: 4, unite: "tranche" }
    ],
    etapes: ["Éplucher le melon et enlever les graines.", "Couper la chair en petits cubes d'environ 2 cm de côté.", "Entourer chaque cube d'un quart de tranche fine de jambon cru (type serrano).", "Piquer éventuellement un pic en bois dans chaque bouchée et servir bien frais."]
  },
  {
    id: "natillas", nom: "Natillas (crème au lait, citron et vanille)", cuisine: "espagnole", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Natillas",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNatillas",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "gousse-de-vanille", quantite: 1, unite: "pièce" },
      { id: "farine-de-mais", quantite: 5, unite: "g" }
    ],
    etapes: ["Prélever le zeste du citron. Le faire infuser avec la vanille dans le lait, puis porter à ébullition.", "Laisser tiédir et filtrer le lait.", "À part, battre 2 jaunes d'œufs avec le sucre et la farine de maïs.", "Mélanger les jaunes avec le lait.", "Porter à ébullition à feu doux en remuant sans cesse, jusqu'à ce que la crème épaississe.", "Répartir dans 2 assiettes creuses et laisser refroidir."]
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
    id: "paella-vegetalienne-legumes-riz-complet", nom: "Paella végétalienne (légumes, riz complet et safran)", cuisine: "espagnole", type: "plat",
    difficulte: "facile", tempsMinutes: 140, portions: 2,
    source: "Wikilivres", idSource: "Paella végétalienne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPaella_v%C3%A9g%C3%A9talienne",
    ingredients: [
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "haricots-verts", quantite: 100, unite: "g" },
      { id: "petits-pois", quantite: 150, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 125, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "olives-noires", quantite: 50, unite: "g" },
      { id: "riz-complet", quantite: 60, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "safran", quantite: 1, unite: "sachet" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire le riz 25 minutes dans de l'eau salée.", "Dans une cocotte, mettre successivement les tomates pelées coupées en morceaux, les oignons, l'ail haché, les haricots verts coupés en deux, les carottes en dés, les petits pois écossés, le poivron en fines lanières, les champignons émincés, le riz cuit et le safran.", "Cuire à feu doux environ 2 heures. Ajouter les olives dénoyautées 30 minutes avant la fin.", "Au moment de servir, ajouter l'huile d'olive et le persil haché, puis saler."]
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
    id: "salmorejo", nom: "Salmorejo (soupe froide de tomates et de pain)", cuisine: "espagnole", type: "soupe",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Salmorejo",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalmorejo",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "pain", quantite: 3, unite: "tranche" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "vinaigre-de-xeres", quantite: 10, unite: "ml", ou: { id: "vinaigre-de-vin-blanc", quantite: 10, unite: "ml" } },
      { id: "oeuf", quantite: 1, unite: "pièce", optionnel: true },
      { id: "jambon-cru", quantite: 2, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Peler les tomates et les couper en morceaux. Les mettre dans le mixeur, puis les réserver dans un grand bol.", "Faire tremper le pain sec dans l'eau, puis bien l'essorer. Le mixer, puis l'ajouter à la purée de tomates.", "Trancher finement l'ail et l'écraser au mortier avec un peu d'huile d'olive. Ajouter au bol.", "Ajouter le vinaigre, le poivre, le sel et le reste de l'huile d'olive.", "Mixer plusieurs minutes, jusqu'à obtenir une soupe crémeuse et homogène. On peut ajouter un peu de piment doux moulu (pimentón).", "Servir froid, parsemé d'œuf dur et de jambon cru coupés en dés."]
  },
  {
    id: "sauce-pour-calcots", nom: "Sauce pour calçots (salvitxada : tomates, ail, amandes et nora)", cuisine: "espagnole", type: "sauce",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Sauce pour calçots",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_pour_cal%C3%A7ots",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "nora", quantite: 1, unite: "pièce", ou: { id: "piments-seches", quantite: 3, unite: "g" } },
      { id: "ail", quantite: 6, unite: "gousse" },
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "amandes", quantite: 50, unite: "g" },
      { id: "noisettes", quantite: 15, unite: "g" },
      { id: "vinaigre", quantite: 8, unite: "ml" },
      { id: "huile-d-olive", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Si la nora est séchée (conseillé), la faire tremper 24 heures dans de l'eau.", "Badigeonner d'huile d'olive les tomates et 5 gousses d'ail (environ une demi-tête), puis envelopper chaque légume séparément dans du papier aluminium. Cuire au four très chaud jusqu'à ce qu'ils soient tendres. Laisser tiédir, retirer le papier et éplucher.", "Piler au mortier les amandes toastées et les noisettes toastées.", "Ajouter l'ail cuit et un peu de sel, puis piler et mélanger.", "Faire frire la tranche de pain dans un peu d'huile d'olive avec la gousse d'ail crue entaillée. La poser sur une assiette et l'arroser de vinaigre (pas du balsamique). Laisser reposer quelques minutes.", "Couper la nora en deux et gratter la pulpe à la cuillère. L'ajouter au mortier avec le pain, puis piler et remuer.", "On peut continuer au mortier ou passer au mixeur : ajouter les tomates, puis verser peu à peu le reste de l'huile d'olive en continuant de piler ou de mixer. Saler."]
  },
  {
    id: "tapas-de-poivrons-rouges-grilles-aux-anchois", nom: "Tapas de poivrons rouges grillés aux anchois", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Poivrons rouges aux anchois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoivrons_rouges_aux_anchois",
    ingredients: [
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "baguette", quantite: 1, unite: "pièce" },
      { id: "anchois", quantite: 20, unite: "g" },
      { id: "cornichons", quantite: 15, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Découper les poivrons rouges en morceaux d'environ 6 cm sur 3,5 cm et badigeonner la peau d'huile d'olive.", "Les passer sous le grill du four jusqu'à ce que la peau soit brûlée, puis les envelopper 10 minutes dans du papier aluminium.", "Retirer la peau, rincer et éponger les morceaux.", "Les saler et les cuire une minute de chaque côté dans un peu d'huile d'olive, à feu doux.", "Poser chaque morceau de poivron sur une tranche de baguette, puis un anchois mariné à l'huile par-dessus.", "Saupoudrer de cornichons hachés."]
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
  },
  {
    id: "toasts-aux-anchois-tomate-piquillo", nom: "Toasts aux anchois, tomate et poivron piquillo (tapas)", cuisine: "espagnole", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Toast aux anchois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FToast_aux_anchois",
    ingredients: [
      { id: "baguette", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "poivrons-piquillos", quantite: 4, unite: "pièce" },
      { id: "anchois", quantite: 25, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" }
    ],
    etapes: ["Couper environ 8 tranches de baguette et les faire griller.", "Laver les tomates et les couper en rondelles. Couper les poivrons piquillo en deux.", "Poser 2 rondelles de tomate sur chaque tranche de pain grillé, puis un demi-poivron par-dessus.", "Ajouter 2 anchois en travers de chaque toast.", "Terminer en arrosant d'huile d'olive vierge."]
  },
  {
    id: "xuixo", nom: "Xuixo (beignets catalans fourrés à la crème, frits)", cuisine: "espagnole", type: "dessert",
    difficulte: "difficile", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Xuixo",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FXuixo",
    ingredients: [
      { id: "farine", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "lait", quantite: 25, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cannelle", quantite: 8, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "creme-catalane", quantite: 80, unite: "g", ou: { id: "creme-anglaise", quantite: 80, unite: "ml" } },
      { id: "huile-d-olive", quantite: 200, unite: "ml" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tiédir le lait et y dissoudre la levure. Mélanger avec 25 g de farine et laisser reposer 20 minutes.", "À part, mélanger le reste de la farine, l'œuf, le beurre fondu, la cannelle, le zeste de citron râpé et une pincée de sel.", "Ajouter la pâte reposée et mélanger.", "Étaler en rectangle et couper en 4 parts égales, puis étaler chaque part en rectangle d'environ 25 cm sur 8 cm.", "Déposer la crème catalane froide en ligne, parallèlement au côté court.", "Rouler chaque part en partant du côté court, sans laisser couler la crème. Laisser reposer 10 minutes.", "Frire un à un dans une petite poêle avec beaucoup d'huile d'olive très chaude.", "Égoutter sur une grille et saupoudrer généreusement de sucre."]
  }
]);

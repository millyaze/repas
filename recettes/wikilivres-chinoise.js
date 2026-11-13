// ============================================================
// RECETTES : cuisine chinoise, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "pieds-de-porc-au-vinaigre-et-gingembre", nom: "Pieds de porc au vinaigre noir et au gingembre", cuisine: "chinoise", type: "plat",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Pieds de porc au vinaigre et au gingembre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPieds_de_porc_au_vinaigre_et_au_gingembre",
    ingredients: [
      { id: "pied-de-porc", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 6, unite: "pièce" },
      { id: "gingembre", quantite: 250, unite: "g" },
      { id: "vinaigre-noir-chinois", quantite: 1000, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Faire cuire 6 œufs durs et réserver.", "Éplucher 250 g de gingembre, le couper en tranches fines et l'écraser légèrement avec le plat du couteau. Le faire frire 5 min à feu vif avec l'huile et un peu de sel, puis réserver.", "Brûler les poils des 2 pieds de porc au-dessus d'une flamme et les gratter au couteau. Les blanchir dans une casserole d'eau bouillante jusqu'à ce que la peau se rétracte et change de couleur, puis égoutter et sécher.", "Couper les pieds aux articulations puis dans la longueur, et les frotter de sel. Les faire dorer dans un wok ou une poêle chaude, sans huile.", "Mettre le gingembre et les pieds de porc dans une marmite en terre cuite émaillée (le vinaigre attaque les casseroles en métal) et couvrir de vinaigre noir sucré chinois (environ 1 l).", "Porter à ébullition, baisser le feu et laisser mijoter 20 min. Écaler les œufs, les ajouter et mijoter encore 10 min.", "Retirer du feu et laisser reposer une journée, en remettant 2 ou 3 fois sur feu doux quelques minutes avant de laisser refroidir à nouveau : le ragoût prend en gelée. Servir chaud mais pas bouillant."]
  },
  {
    id: "porc-laque-char-siu", nom: "Porc laqué (char siu)", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Porc laqué",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPorc_laqu%C3%A9",
    ingredients: [
      { id: "epaule-de-porc", quantite: 500, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sauce-huitre", quantite: 15, unite: "ml" },
      { id: "vin-de-shaoxing", quantite: 15, unite: "ml", ou: { id: "xeres", quantite: 15, unite: "ml" } },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "sauce-hoisin", quantite: 30, unite: "ml" },
      { id: "cinq-epices", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper 500 g d'épaule de porc en longues bandes épaisses, pour qu'elles gardent leur forme à la cuisson.", "Piquer la viande à la fourchette : elle sera plus tendre et prendra mieux la marinade.", "Mélanger la sauce soja (moitié foncée, moitié ordinaire si possible), la sauce d'huître, le vin de Shaoxing (ou du xérès), le miel, la sauce hoisin et le cinq-épices.", "Enrober complètement la viande de cette marinade, couvrir et laisser au réfrigérateur plusieurs heures, idéalement toute une nuit.", "Préchauffer le four à 230 °C et couvrir un plat de papier aluminium. Suspendre la viande si possible, ou poser les morceaux sur le plat sans les entasser.", "Rôtir environ 20 min, jusqu'à ce que la viande soit bien cuite, en la badigeonnant au moins deux fois de marinade pour former une croûte rouge caramélisée.", "Laisser refroidir la viande suspendue ou sur une grille, puis servir."]
  },
  {
    id: "riz-cantonais", nom: "Riz cantonais", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Riz cantonais",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRiz_cantonais",
    ingredients: [
      { id: "riz", quantite: 100, unite: "g" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "epaule-de-porc", quantite: 100, unite: "g" },
      { id: "saucisse-chinoise", quantite: 80, unite: "g", ou: { id: "jambon-cru", quantite: 2, unite: "tranche" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "petits-pois", quantite: 30, unite: "g" },
      { id: "saindoux", quantite: 8, unite: "g", ou: { id: "huile-de-tournesol", quantite: 8, unite: "ml" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mettre 100 g de riz (thaï ou basmati) dans une casserole et le couvrir de 200 ml d'eau bouillante salée (2 fois son volume). Couvrir et porter à ébullition sur feu doux, en remuant de temps en temps avec une spatule en bois.", "Quand il ne reste presque plus d'eau, fermer le couvercle le plus hermétiquement possible (au besoin avec un poids dessus) et laisser cuire encore 10 min sur feu très doux.", "Pendant ce temps, couper en très petits dés 100 g de porc (échine), les saucisses chinoises (ou du jambon cru) et ¼ de poivron rouge. Les faire revenir à la poêle dans le saindoux avec quelques petits pois.", "Battre l'œuf et le cuire en omelette très fine dans une poêle antiadhésive, puis la couper en petits morceaux.", "Quand la viande est bien rissolée, arroser de sauce soja, incorporer le riz cuit puis les morceaux d'omelette. Servir."]
  }
]);

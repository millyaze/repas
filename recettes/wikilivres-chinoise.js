// ============================================================
// RECETTES : cuisine chinoise, reprises de Wikilivres (14 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "boulettes-de-riz-gluant-aux-haricots-rouges", nom: "Boulettes de riz gluant aux haricots rouges (dessert chinois)", cuisine: "chinoise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Boulettes de riz gluant aux haricots rouges",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoulettes_de_riz_gluant_aux_haricots_rouges",
    ingredients: [
      { id: "farine-de-riz-gluant", quantite: 100, unite: "g" },
      { id: "eau", quantite: 70, unite: "ml" },
      { id: "puree-de-haricots-rouges", quantite: 90, unite: "g" }
    ],
    etapes: ["Pour une dizaine de boulettes. Mettre la farine de riz gluant dans un saladier et verser l'eau chaude petit à petit en mélangeant.", "Pétrir quelques minutes, jusqu'à obtenir une pâte de la consistance de la pâte à modeler.", "Prélever de petits morceaux de pâte, les aplatir, poser une grosse cuillère à café de purée de haricots rouges au centre, puis refermer en soudant bien, sans percer.", "Couvrir les boulettes d'un linge humide en attendant de les cuire.", "Les pocher dans une casserole d'eau frémissante. Une fois remontées à la surface, les laisser cuire encore 1 à 2 minutes."]
  },
  {
    id: "brioches-vapeur-mantou", nom: "Brioches vapeur chinoises (mantou, pains cuits à la vapeur)", cuisine: "chinoise", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Brioche vapeur",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBrioche_vapeur",
    ingredients: [
      { id: "farine", quantite: 225, unite: "g" },
      { id: "eau", quantite: 110, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml" }
    ],
    etapes: ["Pour 6 petits pains. Délayer la levure de boulanger avec 1 cuillère à café de sucre dans l'eau à température ambiante. Laisser reposer 15 minutes.", "Tamiser la farine, ajouter le reste du sucre et le sel, puis verser l'eau à la levure doucement en remuant, jusqu'à obtenir un pâton. Si la pâte ne se rassemble pas, ajouter quelques cuillerées d'eau.", "Pétrir 5 à 10 minutes : la pâte doit devenir ferme, lisse et légèrement brillante.", "Huiler le fond d'un grand bol avec l'huile de sésame, y mettre la pâte et la rouler pour l'enduire. La laisser lever 1 h à 1 h 30 au chaud, jusqu'à ce qu'elle double (ou 2 à 3 heures au réfrigérateur, pour une texture plus fine).", "Étaler la pâte en ovale, saupoudrer la levure chimique et pétrir de nouveau. Ajouter un peu de farine si la pâte est trop humide.", "Former un long rouleau et le découper en 6 morceaux, puis rouler chacun en boule. Cuits ainsi, on obtient des mantou nature.", "Pour les garnir, aplatir une boule en disque de 15 cm (bords plus fins que le centre), déposer une cuillère de farce (non précisée dans la page d'origine), puis replier les bords en plis d'éventail et pincer pour fermer.", "Poser chaque brioche sur un carré de papier cuisson et laisser lever 1 heure, jusqu'à ce que la pâte soit élastique.", "Cuire à la vapeur 10 à 15 minutes, sans que les brioches se touchent.", "Retirer du feu sans soulever le couvercle pour que la vapeur retombe doucement et qu'elles ne s'affaissent pas. Servir chaud."]
  },
  {
    id: "canard-laque-cinq-epices-miel-soja", nom: "Canard laqué (cinq-épices, miel et soja)", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Canard laqué",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCanard_laqu%C3%A9",
    ingredients: [
      { id: "canard-entier", quantite: 1, unite: "pièce", ou: { id: "cuisse-de-canard", quantite: 2, unite: "pièce" } },
      { id: "cinq-epices", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 60, unite: "ml" },
      { id: "gingembre", quantite: 30, unite: "g" },
      { id: "miel", quantite: 75, unite: "g" },
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C (th. 7-8).", "Frotter le canard avec le cinq-épices et le sel.", "Le mettre dans un plat et l'enfourner 20 minutes.", "Le sortir et baisser le four à 180 °C (th. 6).", "Mélanger la sauce soja, le gingembre râpé, le miel et 1 cuillère à soupe d'eau pour obtenir la laque.", "Badigeonner entièrement le canard avec la laque au pinceau et le remettre 5 minutes au four. Le retourner et recommencer.", "Continuer ainsi pendant environ 1 heure (avec 2 cuisses seulement, 45 minutes suffisent).", "Découper le canard comme un poulet braisé et le napper de sauce."]
  },
  {
    id: "nougat-chinois", nom: "Nougat chinois (caramel au sésame et aux cacahuètes)", cuisine: "chinoise", type: "dessert",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Nougat chinois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNougat_chinois",
    ingredients: [
      { id: "sucre", quantite: 200, unite: "g" },
      { id: "graines-de-sesame", quantite: 50, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "cacahuetes", quantite: 25, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" }
    ],
    etapes: ["Pour une quinzaine de petits carrés. Mélanger le sucre, l'eau et le jus du citron dans une casserole à fond épais.", "Porter à frémissement, puis baisser le feu et cuire environ 40 minutes, jusqu'à obtenir un sirop caramélisé épais et doré.", "Ajouter le miel et les cacahuètes, puis verser dans un petit moule recouvert de papier cuisson.", "Laisser refroidir complètement et durcir au moins 6 heures.", "Découper en petits carrés et les rouler dans les graines de sésame."]
  },
  {
    id: "nouilles-aux-champignons-parfumes-tofu-poivron", nom: "Nouilles sautées aux champignons parfumés, au tofu et au poivron", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Nouilles aux champignons parfumés",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNouilles_aux_champignons_parfum%C3%A9s",
    ingredients: [
      { id: "nouilles-chinoises", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "huile-d-arachide", quantite: 20, unite: "ml" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tofu", quantite: 60, unite: "g" },
      { id: "champignons-shiitake", quantite: 20, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'eau dans une casserole et y faire bouillir les champignons parfumés 12 minutes. Les égoutter en gardant l'eau de cuisson.", "Faire mariner le tofu coupé en bâtonnets dans un peu de sauce soja.", "Cuire les nouilles 12 à 15 minutes dans une grande quantité d'eau salée en les détachant avec une baguette, puis les égoutter.", "Chauffer l'huile dans un wok, y faire revenir l'oignon haché et le gingembre haché. Ajouter le tofu et le faire dorer de tous côtés.", "Ajouter le poivron coupé en bâtonnets et le faire sauter une dizaine de minutes.", "Ajouter les champignons, le reste de sauce soja, le poivre et un peu d'eau de cuisson des champignons, puis cuire quelques instants.", "Ajouter les nouilles égouttées, bien mélanger et servir aussitôt, garni d'oignon nouveau haché."]
  },
  {
    id: "pate-a-wonton", nom: "Pâte à wonton (carrés de pâte fraîche)", cuisine: "chinoise", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pâte wonton",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2te_wonton",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "eau", quantite: 40, unite: "ml" }
    ],
    etapes: ["Pour une vingtaine de carrés de pâte. Tamiser la farine avec le sel et creuser un puits.", "Battre légèrement l'œuf, le verser dans le puits et mélanger.", "Ajouter un peu d'eau froide, mouiller les mains et pétrir jusqu'à obtenir une pâte lisse.", "Laisser reposer 30 minutes à 1 heure au réfrigérateur, dans un récipient couvert.", "Fariner le plan de travail et abaisser la pâte très finement : elle doit être en partie transparente.", "Couper en bandes de 5 à 8 cm de large, fariner légèrement et les empiler. Découper en carrés.", "Couvrir les carrés d'un torchon humide : la pâte est prête à être garnie."]
  },
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
    id: "porridge-de-riz", nom: "Porridge de riz (congee à la coriandre, au gingembre et au sésame)", cuisine: "chinoise", type: "soupe",
    difficulte: "facile", tempsMinutes: 130, portions: 2,
    source: "Wikilivres", idSource: "Porridge de riz",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPorridge_de_riz",
    ingredients: [
      { id: "riz", quantite: 110, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 1200, unite: "ml" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "coriandre", quantite: 8, unite: "g" },
      { id: "graines-de-sesame", quantite: 10, unite: "g" },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml", optionnel: true },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", optionnel: true },
      { id: "poivre", quantite: 1, unite: "g", optionnel: true }
    ],
    etapes: ["Laver et égoutter le riz, le mettre dans une casserole avec l'eau et le cube de bouillon.", "Porter à ébullition, puis laisser cuire à feu très doux 1 h 45 à 2 heures, jusqu'à ce que le riz devienne pâteux.", "Ajouter la sauce soja et l'huile de sésame, et parfumer avec un peu de poivre blanc.", "Servir avec la garniture au choix : oignons nouveaux émincés, coriandre émincée, graines de sésame et gingembre haché."]
  },
  {
    id: "poulet-du-general-tao", nom: "Poulet du général Tao (poulet frit sauce aigre-douce épicée)", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Poulet du général Tao",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_du_g%C3%A9n%C3%A9ral_Tao",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 25, unite: "ml" },
      { id: "fecule", quantite: 30, unite: "g" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "vin-de-shaoxing", quantite: 10, unite: "ml", ou: { id: "xeres", quantite: 10, unite: "ml" } },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "eau", quantite: 20, unite: "ml" },
      { id: "gingembre", quantite: 8, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "piments-seches", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Désosser les cuisses, retirer la peau et couper la chair en cubes (on peut aussi utiliser des blancs).", "Battre l'œuf avec 10 ml de sauce soja et le sel. Y mélanger le poulet, puis 20 g de fécule pour bien l'enrober.", "Dans un bol, mélanger le reste de sauce soja, le vinaigre, le vin de riz, le sucre, l'eau, et 10 g de fécule délayée sans grumeaux. Réserver.", "Chauffer l'huile à 180 °C dans un wok. Frire le poulet environ 3 minutes, jusqu'à ce qu'il soit doré et croustillant. L'égoutter sur du papier absorbant. Attention à l'huile chaude.", "Ne garder que 2 cuillères à soupe d'huile dans le wok. Y faire sauter 30 secondes les oignons nouveaux, le gingembre, l'ail et les piments secs.", "Remettre le poulet, remuer, puis verser la sauce. La laisser épaissir quelques instants en remuant.", "Servir tout de suite avec du riz blanc ou du riz sauté."]
  },
  {
    id: "poulet-ouighour", nom: "Poulet ouïghour (poulet sauté aux piments et pommes de terre)", cuisine: "chinoise", type: "plat",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Poulet ouïghour",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_ou%C3%AFghour",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 8, unite: "g" },
      { id: "piment-frais", quantite: 3, unite: "pièce" },
      { id: "sucre-roux", quantite: 5, unite: "g" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "anis-etoile", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "nouilles-chinoises", quantite: 150, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Retirer la peau des cuisses et couper chaque cuisse en deux. Éplucher et couper les pommes de terre en cubes de 1 cm. Couper la tomate en quartiers, le poivron en carrés, le poireau en fines rondelles, trancher l'ail et le gingembre.", "Chauffer l'huile 1 à 2 minutes dans un wok, à feu fort.", "Y faire fondre le sucre 1 à 2 minutes : il colorera la viande.", "Ajouter le poulet et le faire sauter 5 à 7 minutes, sans le laisser brûler.", "Ajouter les piments et le gingembre, mélanger 2 minutes. Puis le poireau, 3 minutes.", "Ajouter les pommes de terre, sauter 5 à 7 minutes. Puis la tomate, 5 minutes, et le poivron, 3 à 4 minutes.", "Ajouter le sel, le cumin, l'ail, le poivre et l'anis étoilé. Bien mélanger.", "Verser un verre d'eau chaude, couvrir et laisser cuire 10 minutes à feu doux.", "Servir avec des nouilles larges cuites à l'eau bouillante, mélangées au jus du plat."]
  },
  {
    id: "puree-sucree-de-haricots-rouges", nom: "Purée sucrée de haricots rouges azuki (pâte de haricots)", cuisine: "chinoise", type: "dessert",
    difficulte: "facile", tempsMinutes: 185, portions: 2,
    source: "Wikilivres", idSource: "Purée de haricots rouges",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_haricots_rouges",
    ingredients: [
      { id: "haricots-azuki", quantite: 80, unite: "g", ou: { id: "haricots-rouges-secs", quantite: 80, unite: "g" } },
      { id: "sucre", quantite: 65, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" }
    ],
    etapes: ["À commencer la veille. Pour environ 230 g de purée. Faire tremper les haricots azuki dans de l'eau plusieurs heures.", "Le lendemain, rincer abondamment et égoutter les haricots. Les mettre dans une marmite avec le sucre et l'eau.", "Porter à ébullition, puis couvrir et laisser cuire à feu doux au moins 3 heures, en veillant à ce qu'il reste de l'eau.", "Mixer les haricots une fois bien cuits. Si la purée est trop épaisse, ajouter un peu d'eau bouillante.", "Laisser refroidir : la purée est prête à être utilisée ou mangée telle quelle."]
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
  },
  {
    id: "soupe-sucree-de-haricots-rouges", nom: "Soupe sucrée de haricots rouges azuki (dessert chinois)", cuisine: "chinoise", type: "dessert",
    difficulte: "facile", tempsMinutes: 185, portions: 2,
    source: "Wikilivres", idSource: "Soupe sucrée de haricots rouges",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_sucr%C3%A9e_de_haricots_rouges",
    ingredients: [
      { id: "haricots-azuki", quantite: 60, unite: "g", ou: { id: "haricots-rouges-secs", quantite: 60, unite: "g" } },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "sucre", quantite: 35, unite: "g" }
    ],
    etapes: ["À commencer la veille. Faire tremper les haricots azuki dans de l'eau pendant plusieurs heures.", "Les rincer abondamment, puis les mettre dans une marmite avec l'eau et porter à ébullition.", "Ajouter le sucre (de canne en cristaux si possible), couvrir et laisser cuire à feu doux au moins 3 heures.", "Se mange tiède ou froid, à la cuillère."]
  }
]);

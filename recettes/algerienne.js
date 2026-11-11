// ============================================================
// RECETTES : cuisine algérienne (12 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "poulet-roti-a-l-algerienne", nom: "Poulet rôti à l'algérienne (moutarde, vinaigre balsamique, piment)", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53280",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce", ou: { id: "poulet-entier", quantite: 1, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "vinaigre-balsamique", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "moutarde", quantite: 10, unite: "g" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C.", "Dans un plat allant au four, mélanger l'eau, l'oignon haché, l'huile, le vinaigre balsamique, la moutarde, l'ail écrasé, le poivre, le piment et le sel.", "Ajouter les cuisses de poulet et les retourner pour bien les enrober de sauce, peau vers le haut.", "Cuire environ 50 min (1 h 30 pour un poulet entier), en arrosant 2 ou 3 fois avec le jus, jusqu'à ce que la peau soit dorée et que le jus qui sort de la viande soit clair.", "Servir avec la sauce du plat, du pain ou de la semoule."]
  },
  {
    id: "kefta-a-l-algerienne", nom: "Kefta à l'algérienne (boulettes, sauce tomate)", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53281",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g", ou: { id: "agneau-hache", quantite: 250, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ras-el-hanout", quantite: 3, unite: "g", ou: { id: "cumin", quantite: 3, unite: "g" } },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger à la main la viande hachée avec la moitié de l'ail écrasé, 1 cuillère à soupe d'oignon haché, du sel et du poivre.", "Former 6 à 8 boulettes allongées.", "Faire chauffer une grande poêle sans matière grasse et y dorer les boulettes 10 min en les retournant, jusqu'à ce qu'elles soient croustillantes dehors et cuites à cœur. Les réserver dans un plat creux.", "Baisser le feu, mettre le reste de l'oignon haché dans le gras de cuisson, saler, poivrer et cuire 5 min en remuant jusqu'à ce qu'il soit translucide. Ajouter le reste de l'ail et cuire 30 secondes.", "Ajouter les tomates coupées en dés, le persil et le ras el hanout, puis l'eau. Cuire 5 min jusqu'à ce que les tomates soient fondantes.", "Verser la sauce sur les boulettes et servir."]
  },
  {
    id: "carottes-a-l-algerienne", nom: "Carottes à l'algérienne (ail, cumin, cannelle)", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53282",
    ingredients: [
      { id: "carotte", quantite: 5, unite: "pièce" },
      { id: "huile-d-olive", quantite: 35, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "thym", quantite: 1, unite: "g", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les carottes et les couper en rondelles.", "Les cuire à la vapeur (ou dans très peu d'eau, à couvert) 4 à 6 min : elles doivent être tendres mais pas molles. Garder 120 ml de l'eau de cuisson.", "Dans une poêle, faire chauffer l'huile, puis baisser à feu doux et ajouter le sel, le poivre, la cannelle, le cumin, l'ail écrasé et le thym. Cuire 10 min doucement en remuant souvent, sans laisser brûler l'ail.", "Ajouter l'eau de cuisson gardée et la feuille de laurier, couvrir et laisser frémir 20 min.", "Ajouter les carottes et bien les mélanger à la sauce 2 à 3 min pour les réchauffer.", "Retirer le laurier, arroser d'un filet de jus de citron et servir chaud ou tiède."]
  },
  {
    id: "chtitha-batata", nom: "Chtitha batata (ragoût de pommes de terre épicé)", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "53283",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "sauce-tomate", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Écraser au mortier (ou hacher très finement) l'ail, le piment frais, le cumin, le paprika, le piment en poudre, le poivre et un peu de sel jusqu'à obtenir une pâte (la « dersa »). Y mélanger l'huile.", "Faire revenir cette pâte 2 à 4 min dans une casserole à feu moyen, jusqu'à ce qu'elle sente bon.", "Ajouter les pommes de terre épluchées et coupées en deux (de petites pommes de terre de préférence) et bien les enrober. Ajouter la sauce tomate.", "Verser juste assez d'eau pour couvrir les pommes de terre, porter à ébullition puis laisser mijoter environ 40 min, jusqu'à ce qu'elles soient tendres.", "Rectifier le sel et servir les pommes de terre nappées de leur sauce, avec du pain."]
  },
  {
    id: "bouzgene-galettes-sauce-poivrons", nom: "Bouzgène (galettes de semoule, sauce aux poivrons grillés)", cuisine: "algérienne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53284",
    ingredients: [
      { id: "semoule", quantite: 300, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" }
    ],
    etapes: ["Sauce : faire griller le poivron (rouge de préférence) et les tomates environ 8 min sous le gril du four en les retournant, jusqu'à ce que la peau noircisse. Laisser tiédir, peler, puis retirer les graines du poivron.", "Faire revenir l'ail et le piment hachés dans 1 cuillère à soupe d'huile jusqu'à ce qu'ils soient tendres, puis les ajouter aux tomates et au poivron.", "Hacher grossièrement le tout au couteau pour obtenir une sauce épaisse un peu liquide. Saler et réserver.", "Galettes : mélanger la semoule avec 4 g de sel et 2 cuillères à soupe d'huile. Ajouter l'eau petit à petit en pétrissant à la main, jusqu'à ce que la pâte se tienne sans coller.", "Partager en 4 boules et les aplatir au rouleau sur 5 mm d'épaisseur maximum.", "Cuire chaque galette dans une poêle avec un peu d'huile, à feu moyen, jusqu'à ce qu'elle soit croustillante avec des taches brunes des deux côtés. Garder au chaud dans un torchon.", "Servir les galettes déchirées en morceaux, à tremper dans la sauce."]
  },
  {
    id: "dziriat-tartelettes-aux-amandes", nom: "Dziriat (tartelettes algériennes aux amandes)", cuisine: "algérienne",
    difficulte: "difficile", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53285",
    ingredients: [
      { id: "amandes", quantite: 180, unite: "g" },
      { id: "farine", quantite: 85, unite: "g" },
      { id: "sucre", quantite: 140, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "eau-de-fleur-d-oranger", quantite: 25, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "levure-chimique", quantite: 1, unite: "g" },
      { id: "fecule", quantite: 10, unite: "g" },
      { id: "pignons-de-pin", quantite: 10, unite: "g", optionnel: true },
      { id: "eau", quantite: 80, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Amandes : prendre des amandes mondées (sans peau) et les faire sécher 15 min au four à 150 °C sans les laisser colorer.", "Sirop : porter à ébullition 70 g de sucre avec l'eau, ajouter quelques gouttes de jus de citron et laisser frémir 30 min à feu doux jusqu'à obtenir un sirop. Hors du feu, ajouter 10 ml d'eau de fleur d'oranger.", "Pâte : mélanger la farine et le sel, faire un puits et y mettre l'huile, la moitié d'un œuf battu, quelques gouttes de jus de citron et 5 ml d'eau de fleur d'oranger. Sabler du bout des doigts, puis ajouter un peu d'eau tiède jusqu'à obtenir une pâte souple. Couvrir d'un linge humide.", "Farce : mixer finement les amandes, puis les mélanger avec 70 g de sucre, la levure, le zeste du citron (et un peu de vanille si on en a) et 10 ml d'eau de fleur d'oranger. Ajouter le reste des œufs un par un, jusqu'à obtenir une pâte collante.", "Préchauffer le four à 175 °C. Étaler la pâte très finement (1 à 2 mm) sur le plan de travail saupoudré de fécule, découper des disques de 10 cm et en garnir des moules à tartelettes (ou des moules à muffins). Retirer l'excédent.", "Remplir chaque tartelette aux trois quarts de farce et cuire 20 à 25 min, jusqu'à ce que le dessus soit doré.", "Démouler tout de suite, tremper chaque tartelette encore chaude dans le sirop, piquer un pignon au centre et laisser égoutter sur une grille."]
  },
  {
    id: "khobz-el-dar", nom: "Khobz el dar (pain maison à la semoule)", cuisine: "algérienne",
    difficulte: "moyen", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "53286",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "semoule", quantite: 60, unite: "g" },
      { id: "lait", quantite: 120, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "levure-de-boulanger", quantite: 3, unite: "g" },
      { id: "sucre", quantite: 6, unite: "g" },
      { id: "graines-de-sesame", quantite: 15, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "eau", quantite: 5, unite: "ml" }
    ],
    etapes: ["Dans un saladier, mélanger la semoule, la moitié des graines de sésame, le sucre, la levure et le sel.", "Battre l'œuf, en garder 1 cuillère à soupe pour la dorure et ajouter le reste au saladier avec l'huile. Verser le lait tiède petit à petit en fouettant : on obtient une pâte liquide. Couvrir et laisser 1 h à température ambiante, jusqu'à ce que ça mousse.", "Incorporer la farine à la cuillère en bois jusqu'à obtenir une pâte collante. Couvrir et laisser reposer 30 min.", "Fariner légèrement les mains et la pâte, et la travailler en ajoutant un peu de farine si besoin, jusqu'à ce qu'elle se détache du saladier. Former une boule, la poser sur une plaque couverte de papier cuisson et laisser lever 1 h au chaud, couverte d'un torchon : elle doit doubler de volume.", "Préchauffer le four à 200 °C. Mélanger l'œuf gardé avec l'eau, en badigeonner tout le pain et parsemer du reste de sésame.", "Cuire 20 à 25 min, jusqu'à ce que le pain soit bien doré."]
  },
  {
    id: "tajine-de-poulet-carottes-patates-douces", nom: "Tajine de poulet aux carottes et patates douces", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53287",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "patate-douce", quantite: 300, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "curcuma", quantite: 1, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "raisins-secs", quantite: 20, unite: "g" },
      { id: "pruneaux", quantite: 30, unite: "g", ou: { id: "abricots-secs", quantite: 30, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une cocotte, mettre l'oignon et le céleri émincés, la coriandre et le persil hachés. Ajouter le curcuma, le cumin, le paprika, le gingembre râpé, le piment, le sel et le poivre, et mélanger.", "Poser les cuisses de poulet par-dessus, arroser d'huile d'olive et verser le bouillon cube dissous dans l'eau chaude. Couvrir et laisser mijoter à feu doux 40 min, jusqu'à ce que le poulet soit tendre.", "Pendant ce temps, faire tremper les raisins secs 10 min dans de l'eau chaude, puis les égoutter. Préchauffer le four à 200 °C.", "Mettre le poulet et sa sauce dans un plat à four (ou un tajine), ajouter la patate douce coupée en gros morceaux et les carottes en fines rondelles. Couvrir (couvercle ou papier aluminium) et cuire 40 min, jusqu'à ce que la patate douce soit tendre.", "Ajouter les raisins et les pruneaux, couvrir et remettre 10 min au four. Servir avec de la semoule ou du pain."]
  },
  {
    id: "flafla-salade-de-poivrons-grilles", nom: "Flafla (salade algérienne de poivrons grillés)", cuisine: "algérienne",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "53288",
    ingredients: [
      { id: "poivron", quantite: 3, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 230 °C. Poser les poivrons entiers (verts de préférence) sur du papier aluminium et les cuire 30 à 45 min, en les retournant une fois, jusqu'à ce que la peau noircisse par endroits et qu'ils soient tendres.", "Les laisser tiédir 10 min, puis retirer la peau, la queue et les graines. Couper les poivrons en morceaux d'environ 1 cm.", "Dans une poêle, faire chauffer l'huile à feu moyen et y cuire un quart de l'oignon rouge haché 5 min, jusqu'à ce qu'il soit translucide.", "Ajouter l'ail écrasé, le sel et le poivre, puis les poivrons et la tomate coupée en dés. Cuire 5 min en remuant de temps en temps, jusqu'à ce que la tomate soit fondante.", "Servir tiède ou froid, avec du pain."]
  },
  {
    id: "chorba-frik", nom: "Chorba frik (soupe d'agneau à la tomate et au blé concassé)", cuisine: "algérienne",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "53289",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 170, unite: "g" },
      { id: "boulgour", quantite: 60, unite: "g", ou: { id: "pates", quantite: 60, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 15, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g", optionnel: true },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 900, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre le blé concassé (frik, ou à défaut du boulgour) à tremper dans un bol d'eau froide.", "Dans une marmite, mettre l'agneau coupé en petits cubes, l'oignon haché, le poivre, le paprika, la cannelle et le sel. Ajouter l'huile, la moitié de la coriandre et de la menthe hachées et la branche de céleri entière. Mélanger et laisser mijoter 15 min à feu doux.", "Ajouter les pois chiches égouttés et juste assez d'eau pour couvrir, et revenir à frémissement. Ajouter la courgette et la carotte en dés et la sauce tomate.", "Râper les tomates au-dessus de la marmite (jeter la peau) et laisser frémir 5 min.", "Ajouter la pomme de terre en dés et le reste de l'eau, et laisser frémir 10 min.", "Égoutter le blé (ou ajouter les vermicelles), l'ajouter à la soupe et cuire encore 15 min, jusqu'à ce qu'il soit tendre.", "Retirer la branche de céleri. Parsemer du reste de coriandre et de menthe et servir avec un filet de citron si on aime."]
  },
  {
    id: "bourek-au-fromage", nom: "Bourek au fromage (triangles de pâte filo)", cuisine: "algérienne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53290",
    ingredients: [
      { id: "pate-filo", quantite: 120, unite: "g" },
      { id: "fromage-rape", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "beurre", quantite: 80, unite: "g" }
    ],
    etapes: ["Dans un bol, battre l'œuf avec le persil haché, l'ail écrasé et le piment. Ajouter le fromage râpé (gouda et emmental à l'origine) et mélanger.", "Faire fondre le beurre. Poser une feuille de filo sur le plan de travail (garder les autres sous un torchon), la badigeonner de beurre et la couper en 4 bandes dans la longueur.", "Mettre une cuillère à café de farce au bout de chaque bande, rabattre le coin pour former un triangle, puis continuer à plier en triangle jusqu'au bout de la bande. Recommencer avec le reste.", "Préchauffer le four à 175 °C. Poser les triangles sur une plaque beurrée, en une seule couche, et les badigeonner du reste de beurre.", "Cuire environ 30 min, jusqu'à ce qu'ils soient dorés. Servir tiède."]
  },
  {
    id: "cornes-de-gazelle", nom: "Cornes de gazelle (croissants aux amandes et à la fleur d'oranger)", cuisine: "algérienne",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53291",
    ingredients: [
      { id: "amandes", quantite: 140, unite: "g" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "eau-de-fleur-d-oranger", quantite: 25, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "miel", quantite: 60, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 150 °C et faire griller les amandes 20 à 25 min sur une plaque, jusqu'à ce qu'elles sentent bon.", "Pâte : sabler du bout des doigts la farine, le beurre et le sel. Ajouter 1 œuf battu, l'huile et 10 ml d'eau de fleur d'oranger, et pétrir en une pâte lisse (ajouter un peu d'eau, cuillère par cuillère, si elle est trop sèche). Filmer et laisser reposer 30 min.", "Farce : mixer finement les amandes tiédies, puis ajouter le sucre, la cannelle, le second œuf et 10 ml d'eau de fleur d'oranger, en mixant après chaque ajout, jusqu'à obtenir une pâte.", "Avec les mains huilées, former de petits boudins de farce (de la taille d'une noix) aux bouts amincis.", "Régler le four à 165 °C. Étaler la pâte très finement sur le plan de travail fariné. Poser un boudin de farce au bord, rabattre la pâte pour l'enfermer complètement et souder les bords. Courber en croissant, découper autour à la roulette et poser sur une plaque couverte de papier cuisson.", "Cuire environ 20 min : les cornes doivent rester à peine dorées. Laisser tiédir 3 min.", "Faire tiédir le miel dans une petite casserole, ajouter hors du feu le reste d'eau de fleur d'oranger, y tremper les cornes de gazelle et les poser sur un plat (parsemer de pistaches concassées si on en a)."]
  }
]);

// ============================================================
// COURSES : la liste de courses (onglet « Courses »).
// Elle se remplit de trois façons : ce qui manque à une recette,
// les ingrédients tombés à zéro dans le stock, ou un ajout à la main.
// Au magasin on coche ; « Ranger les courses » ajoute les articles cochés au stock.
// Chargé AVANT js/recettes.js, qui affiche le bouton « Ajouter ce qui manque ».
// Utilise : stock, courses, sauvegarder, afficher, montrerMessage, element, creerId,
//           UNITES (js/stock.js), INGREDIENTS (data/ingredients.js), auMillieme, nomDeRecette (js/cuisiner.js),
//           convertir, ecrireQuantite, creer (js/recettes.js).
// ============================================================

// true quand le récapitulatif « Ranger les courses » est ouvert
let rangementOuvert = false;

// ---------- Outils ----------

// Retrouve la ligne de la liste pour un ingrédient (même identifiant, unité compatible)
function ligneDeCourses(id, unite) {
  return courses.find(function (ligne) {
    return ligne.id === id && convertir(1, unite, ligne.unite) !== null;
  });
}

// Ajoute un article à la liste, ou augmente sa quantité s'il y est déjà.
// idRecette (facultatif) = recette pour laquelle on l'ajoute : une même recette ne compte qu'une fois.
// Renvoie true si la liste a changé.
function ajouterAuxCourses(id, nom, quantite, unite, idRecette) {
  let ligne = ligneDeCourses(id, unite);
  if (ligne) {
    ligne.recettes = ligne.recettes || [];
    if (idRecette && ligne.recettes.indexOf(idRecette) !== -1) return false;
    ligne.quantite = auMillieme(ligne.quantite + convertir(quantite, unite, ligne.unite));
    ligne.coche = false;
  } else {
    ligne = { id: id, nom: nom, quantite: quantite, unite: unite, coche: false, recettes: [] };
    courses.push(ligne);
  }
  if (idRecette) ligne.recettes.push(idRecette);
  return true;
}

// Ajoute à la liste les lignes d'un fichier importé qui n'y sont pas déjà
function fusionnerCourses(autres) {
  (autres || []).forEach(function (ligne) {
    if (!ligneDeCourses(ligne.id, ligne.unite)) courses.push(ligne);
  });
}

// Retrouve la ligne du stock d'un article de la liste (même à zéro)
function stockDeLArticle(article) {
  return stock.find(function (l) { return l.id === article.id || creerId(l.nom) === article.id; });
}

// ---------- Depuis une recette ----------

// Dit si tout ce qui manque à une recette est déjà dans la liste pour elle
function recetteDansCourses(analyse) {
  return analyse.manquants.every(function (manquant) {
    return courses.some(function (ligne) {
      return ligne.id === manquant.id && (ligne.recettes || []).indexOf(analyse.recette.id) !== -1;
    });
  });
}

// Bouton « Ajouter ce qui manque à la liste de courses » d'une recette incomplète
function creerBoutonCourses(analyse) {
  const dejaLa = recetteDansCourses(analyse);
  const bouton = creer("button", "bouton-cuisiner",
    dejaLa ? "✓ Ce qui manque est dans la liste de courses" : "Ajouter ce qui manque à la liste de courses");
  bouton.type = "button";
  bouton.disabled = dejaLa;
  bouton.addEventListener("click", function () {
    analyse.manquants.forEach(function (manquant) {
      ajouterAuxCourses(manquant.id, manquant.nom, auMillieme(manquant.quantite), manquant.unite, analyse.recette.id);
    });
    sauvegarder();
    afficher(); // rafraîchit tout (stock, recettes, courses)
    montrerMessage("Ajouté à la liste de courses pour « " + analyse.recette.nom + " ».");
  });
  return bouton;
}

// ---------- Affichage ----------

// Rafraîchit l'onglet Courses (appelé à chaque rafraîchissement des recettes)
function afficherCourses() {
  const liste = element("liste-courses");
  liste.textContent = "";
  // Les articles pas encore achetés d'abord
  const tries = courses.slice().sort(function (a, b) { return (a.coche === true) - (b.coche === true); });
  tries.forEach(function (article) { liste.appendChild(creerLigneCourses(article)); });

  const coches = courses.filter(function (a) { return a.coche === true; }).length;
  const restants = courses.length - coches;
  element("vide-courses").hidden = courses.length > 0;
  element("bouton-vider-courses").hidden = courses.length === 0;
  element("bouton-ranger").hidden = coches === 0 || rangementOuvert;
  element("bouton-ranger").textContent = "Ranger les courses cochées (" + coches + ")";
  // Le nombre d'articles restant à acheter s'affiche sur l'onglet
  document.querySelector('.onglet[data-onglet="courses"]').textContent = "Courses" + (restants > 0 ? " (" + restants + ")" : "");

  // Récapitulatif « Ranger les courses »
  const zone = element("zone-rangement");
  zone.textContent = "";
  if (coches === 0) rangementOuvert = false;
  if (rangementOuvert) zone.appendChild(creerPanneauRangement());

  afficherIngredientsAZero();
}

// Fabrique une ligne de la liste : case à cocher, nom, quantité, bouton « Retirer »
function creerLigneCourses(article) {
  const li = creer("li", "course" + (article.coche ? " achete" : ""));
  const etiquette = creer("label", "course-case");
  const caseACocher = document.createElement("input");
  caseACocher.type = "checkbox";
  caseACocher.checked = article.coche === true;
  caseACocher.addEventListener("change", function () {
    article.coche = caseACocher.checked;
    sauvegarder();
    afficherCourses();
  });
  etiquette.appendChild(caseACocher);

  const texte = creer("span", "ligne-texte");
  texte.appendChild(creer("span", "ligne-nom",
    article.nom + (article.quantite > 0 ? " : " + ecrireQuantite(article.quantite, article.unite) : "")));
  if (article.recettes && article.recettes.length > 0) {
    texte.appendChild(creer("span", "ligne-date", "Pour : " + article.recettes.map(nomDeRecette).join(", ")));
  }
  etiquette.appendChild(texte);
  li.appendChild(etiquette);

  const retirer = creer("button", "danger", "Retirer");
  retirer.type = "button";
  retirer.setAttribute("aria-label", "Retirer " + article.nom + " de la liste");
  retirer.addEventListener("click", function () {
    courses.splice(courses.indexOf(article), 1);
    sauvegarder();
    afficher();
  });
  li.appendChild(retirer);
  return li;
}

// Bloc « À zéro dans le stock » : ingrédients épuisés qui ne sont pas encore dans la liste
function afficherIngredientsAZero() {
  const liste = element("liste-zero");
  liste.textContent = "";
  const aZero = stock.filter(function (ligne) {
    const id = creerId(ligne.nom);
    return ligne.quantite === 0 && !courses.some(function (a) { return a.id === ligne.id || a.id === id; });
  });
  aZero.forEach(function (ligne) {
    const li = creer("li", "");
    li.appendChild(creer("span", "recette-nom", ligne.nom));
    const bouton = creer("button", "", "Ajouter");
    bouton.type = "button";
    bouton.setAttribute("aria-label", "Ajouter " + ligne.nom + " à la liste de courses");
    bouton.addEventListener("click", function () {
      ajouterAuxCourses(creerId(ligne.nom), ligne.nom, 0, ligne.unite);
      sauvegarder();
      afficher();
    });
    li.appendChild(bouton);
    liste.appendChild(li);
  });
  element("vide-zero").hidden = aZero.length > 0;
}

// ---------- Ajout à la main ----------

function validerFormulaireCourses(evenement) {
  evenement.preventDefault();
  const nom = element("courses-nom").value.trim();
  const quantite = auMillieme(Number(element("courses-quantite").value || 0));
  if (!nom || !creerId(nom) || !(quantite >= 0)) {
    montrerMessage("Vérifie le nom et la quantité.", true);
    return;
  }
  // Si l'article est un ingrédient connu, on reprend son nom exact
  const connu = INGREDIENTS.find(function (ingredient) { return ingredient.id === creerId(nom); });
  ajouterAuxCourses(creerId(nom), connu ? connu.nom : nom, quantite, element("courses-unite").value);
  element("courses-nom").value = "";
  element("courses-quantite").value = "";
  sauvegarder();
  afficher();
  montrerMessage("« " + (connu ? connu.nom : nom) + " » ajouté à la liste de courses.");
}

// ---------- Ranger les courses ----------

// Fabrique le récapitulatif : pour chaque article coché, quantité achetée et date de péremption
function creerPanneauRangement() {
  const panneau = creer("form", "cuisiner");
  panneau.noValidate = true;
  panneau.appendChild(creer("h3", "", "Ce qui sera ajouté au stock"));
  panneau.appendChild(creer("p", "aide",
    "Corrige les quantités achetées et mets une date de péremption si tu veux. Laisse 0 ou vide pour ne pas ajouter un article au stock."));

  const lignes = courses.filter(function (a) { return a.coche === true; }).map(function (article) {
    const enStock = stockDeLArticle(article);
    // Si le stock compte cet ingrédient dans une unité non comparable, on saisit dans l'unité du stock
    const incompatible = enStock && convertir(1, article.unite, enStock.unite) === null;
    const ligne = { article: article, enStock: enStock, unite: incompatible ? enStock.unite : article.unite };

    const rangee = creer("div", "rangement-ligne");
    rangee.appendChild(creer("span", "cuisiner-nom", article.nom));
    ligne.champ = document.createElement("input");
    ligne.champ.type = "number";
    ligne.champ.min = "0";
    ligne.champ.step = "any";
    ligne.champ.inputMode = "decimal";
    ligne.champ.value = incompatible || !(article.quantite > 0) ? "" : String(article.quantite);
    ligne.champ.setAttribute("aria-label", "Quantité achetée de " + article.nom);
    rangee.appendChild(ligne.champ);
    rangee.appendChild(creer("span", "cuisiner-unite", ligne.unite));
    ligne.date = document.createElement("input");
    ligne.date.type = "date";
    ligne.date.setAttribute("aria-label", "Date de péremption de " + article.nom);
    rangee.appendChild(ligne.date);
    if (incompatible) {
      rangee.appendChild(creer("span", "cuisiner-stock",
        "Déjà dans le stock en « " + enStock.unite + " » (liste : " + ecrireQuantite(article.quantite, article.unite) + ")"));
    }
    panneau.appendChild(rangee);
    return ligne;
  });

  const erreur = creer("p", "cuisiner-erreur");
  erreur.hidden = true;
  erreur.setAttribute("role", "alert");
  panneau.appendChild(erreur);

  const boutons = creer("div", "boutons-formulaire");
  const valider = creer("button", "principal", "Valider");
  valider.type = "submit";
  const annuler = creer("button", "", "Annuler");
  annuler.type = "button";
  annuler.addEventListener("click", function () {
    rangementOuvert = false;
    afficherCourses();
  });
  boutons.appendChild(valider);
  boutons.appendChild(annuler);
  panneau.appendChild(boutons);

  panneau.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    validerRangement(lignes, erreur);
  });
  return panneau;
}

// Ajoute au stock les articles cochés, puis les retire de la liste
function validerRangement(lignes, zoneErreur) {
  // 1) On vérifie d'abord tous les champs : rien n'est ajouté si l'un d'eux est incorrect
  const quantites = [];
  for (let i = 0; i < lignes.length; i++) {
    const valeur = Number(lignes[i].champ.value || 0);
    if (isNaN(valeur) || valeur < 0) {
      zoneErreur.textContent = "Quantité incorrecte pour « " + lignes[i].article.nom + " ».";
      zoneErreur.hidden = false;
      lignes[i].champ.focus();
      return;
    }
    quantites.push(valeur);
  }

  // 2) On ajoute au stock
  let ajoutes = 0;
  lignes.forEach(function (ligne, i) {
    if (quantites[i] === 0) return; // article non alimentaire ou déjà rangé à la main
    const date = ligne.date.value || null;
    const enStock = ligne.enStock;
    if (enStock) {
      // Stock épuisé : la nouvelle date remplace l'ancienne. Sinon on garde la date la plus proche.
      if (enStock.quantite === 0) enStock.peremption = date;
      else if (date && (!enStock.peremption || date < enStock.peremption)) enStock.peremption = date;
      enStock.quantite = auMillieme(enStock.quantite + convertir(quantites[i], ligne.unite, enStock.unite));
    } else {
      stock.push({ id: ligne.article.id, nom: ligne.article.nom, quantite: auMillieme(quantites[i]), unite: ligne.unite, peremption: date });
    }
    ajoutes++;
  });

  // 3) On retire de la liste tous les articles cochés
  courses = courses.filter(function (a) { return a.coche !== true; });
  rangementOuvert = false;
  sauvegarder();
  afficher();
  montrerMessage("Courses rangées : " + ajoutes + " article" + (ajoutes > 1 ? "s ajoutés" : " ajouté") + " au stock.");
  element("message").scrollIntoView({ block: "center" });
}

// ---------- Démarrage (appelé par js/recettes.js, une fois tous les fichiers chargés) ----------
function demarrerCourses() {
  UNITES.forEach(function (unite) {
    const option = document.createElement("option");
    option.value = unite;
    option.textContent = unite;
    element("courses-unite").appendChild(option);
  });
  element("courses-unite").value = "pièce";
  // Quand le nom tapé est un ingrédient connu, l'unité habituelle est choisie toute seule
  element("courses-nom").addEventListener("input", function () {
    const idTape = creerId(element("courses-nom").value);
    const connu = INGREDIENTS.find(function (ingredient) { return ingredient.id === idTape; });
    if (connu) element("courses-unite").value = connu.unite;
  });
  element("formulaire-courses").addEventListener("submit", validerFormulaireCourses);
  element("bouton-ranger").addEventListener("click", function () {
    rangementOuvert = true;
    afficherCourses();
  });
  element("bouton-vider-courses").addEventListener("click", function () {
    if (!confirm("Vider toute la liste de courses ?")) return;
    courses = [];
    rangementOuvert = false;
    sauvegarder();
    afficher();
  });
}

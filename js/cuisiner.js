// ============================================================
// CUISINER : valider une recette retire ses ingrédients du stock,
// et la note dans l'historique des recettes cuisinées.
// Chargé AVANT js/recettes.js, qui affiche le bouton et le récapitulatif.
// Utilise : stock, historique, sauvegarder, afficher, montrerMessage, element,
//           arrondir, joursRestants (js/stock.js), dateDuJour (js/memoire.js),
//           ligneDuStock, preparerIndexStock, ingredientDeReference, besoinRetenu, convertir, ecrireQuantite, creer,
//           afficherRecettes (js/recettes.js), RECETTES (recettes/toutes.js).
// ============================================================

// Une recette cuisinée depuis ce nombre de jours (ou moins) descend en bas de sa liste
const JOURS_RECENT = 7;
// Nombre de recettes montrées dans « Dernières recettes cuisinées »
const HISTORIQUE_AFFICHE = 10;
// Nombre maximum de recettes gardées en mémoire dans l'historique
const HISTORIQUE_MAX = 50;

// Recette dont le récapitulatif « Cuisiner » est ouvert (null = aucune)
let idEnCuisine = null;

// ---------- Outils ----------

// Arrondi au millième, pour ne pas perdre de grammes quand le stock est en kg ou en l
function auMillieme(nombre) { return Math.round(nombre * 1000) / 1000; }

// Nom d'une recette à partir de son identifiant
function nomDeRecette(id) {
  const recette = RECETTES.find(function (r) { return r.id === id; });
  return recette ? recette.nom : id;
}

// ---------- Historique ----------

// Nombre de jours depuis la dernière fois qu'une recette a été cuisinée (null = jamais)
function joursDepuisCuisine(id) {
  const entree = historique.find(function (e) { return e.id === id; });
  return entree ? Math.max(0, -joursRestants(entree.date)) : null;
}

// Dit si une recette a été cuisinée récemment (elle sera alors moins mise en avant)
function cuisineeRecemment(id) {
  const jours = joursDepuisCuisine(id);
  return jours !== null && jours <= JOURS_RECENT;
}

// Écrit un délai passé : « aujourd'hui », « hier », « il y a 3 jours »
function ecrireDepuis(jours) {
  if (jours === 0) return "aujourd'hui";
  if (jours === 1) return "hier";
  return "il y a " + jours + " jours";
}

// Ajoute à l'historique les entrées d'un fichier importé qui n'y sont pas déjà
function fusionnerHistorique(autres) {
  (autres || []).forEach(function (entree) {
    const dejaLa = historique.some(function (e) { return e.id === entree.id && e.date === entree.date; });
    if (!dejaLa) historique.push(entree);
  });
  // La plus récente d'abord
  historique.sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
  historique.splice(HISTORIQUE_MAX);
}

// Remplit le bloc « Dernières recettes cuisinées »
function afficherHistorique() {
  const liste = element("liste-historique");
  liste.textContent = "";
  historique.slice(0, HISTORIQUE_AFFICHE).forEach(function (entree) {
    const p = entree.date.split("-");
    const ligne = creer("li", "");
    const texte = creer("span", "historique-texte");
    texte.appendChild(creer("span", "recette-nom", nomDeRecette(entree.id)));
    texte.appendChild(creer("span", "recette-infos",
      p[2] + "/" + p[1] + "/" + p[0] + " (" + ecrireDepuis(Math.max(0, -joursRestants(entree.date))) + ")"));
    ligne.appendChild(texte);
    // Bouton « Annuler » : seulement si l'on sait ce qui avait été retiré du stock
    if (entree.retraits) {
      const bouton = creer("button", "", "Annuler");
      bouton.type = "button";
      bouton.setAttribute("aria-label", "Annuler " + nomDeRecette(entree.id) + " et remettre les quantités dans le stock");
      bouton.addEventListener("click", function () { annulerCuisine(entree); });
      ligne.appendChild(bouton);
    }
    liste.appendChild(ligne);
  });
  element("vide-historique").hidden = historique.length > 0;
}

// ---------- Récapitulatif ----------

// Liste ce qu'une recette retire du stock : une ligne par ingrédient présent dans le stock.
// Sel, poivre, eau et ingrédients facultatifs absents ne sont pas retirés.
function lignesACuisiner(recette) {
  preparerIndexStock(); // le stock a pu changer depuis le dernier affichage (js/recettes.js)
  const lignes = [];
  recette.ingredients.forEach(function (origine) {
    // Ingrédient avec remplaçant : on retire celui des deux qui est dans le stock (l'origine d'abord)
    const besoin = besoinRetenu(origine);
    const reference = ingredientDeReference(besoin.id);
    if (reference && reference.base) return;
    const enStock = ligneDuStock(besoin.id);
    if (!enStock) return;
    const nom = reference ? reference.nom : besoin.id;
    const quantiteEnStock = convertir(enStock.quantite, enStock.unite, besoin.unite);
    // Même ingrédient du stock déjà dans le récapitulatif (ex. sauce soja, et sauce soja
    // qui remplace une autre sauce) : on additionne au lieu de faire deux lignes
    const dejaLa = lignes.find(function (l) { return l.enStock === enStock; });
    if (dejaLa) {
      const enPlus = convertir(besoin.quantite, besoin.unite, dejaLa.unite);
      if (enPlus !== null) dejaLa.valeur = Math.min(dejaLa.valeur + enPlus, dejaLa.maximum);
      return;
    }
    if (quantiteEnStock === null) {
      // Unités non comparables (ex. stock en sachet, recette en g) : à saisir à la main
      lignes.push({
        enStock: enStock, nom: nom, unite: enStock.unite, valeur: 0, maximum: enStock.quantite,
        note: "la recette demande " + ecrireQuantite(besoin.quantite, besoin.unite) + " : indique ce que tu as utilisé"
      });
    } else {
      lignes.push({
        enStock: enStock, nom: nom, unite: besoin.unite,
        valeur: Math.min(besoin.quantite, quantiteEnStock), maximum: quantiteEnStock, note: ""
      });
    }
  });
  return lignes;
}

// Bouton « J'ai cuisiné cette recette » (ouvre le récapitulatif)
function creerBoutonCuisiner(recette) {
  const bouton = creer("button", "principal bouton-cuisiner", "J'ai cuisiné cette recette");
  bouton.type = "button";
  bouton.addEventListener("click", function () {
    idEnCuisine = recette.id;
    afficherRecettes();
  });
  return bouton;
}

// Fabrique le récapitulatif : quantités modifiables, puis Valider / Annuler
function creerPanneauCuisiner(recette) {
  const lignes = lignesACuisiner(recette);
  const panneau = creer("form", "cuisiner");
  panneau.noValidate = true;
  panneau.appendChild(creer("h3", "", "Ce qui sera retiré du stock"));
  panneau.appendChild(creer("p", "aide", "Corrige les quantités si tu en as utilisé plus ou moins."));

  lignes.forEach(function (ligne) {
    const rangee = creer("label", "cuisiner-ligne");
    rangee.appendChild(creer("span", "cuisiner-nom", ligne.nom));
    const champ = document.createElement("input");
    champ.type = "number";
    champ.min = "0";
    champ.step = "any";
    champ.inputMode = "decimal";
    champ.value = String(arrondir(ligne.valeur));
    ligne.champ = champ;
    rangee.appendChild(champ);
    rangee.appendChild(creer("span", "cuisiner-unite", ligne.unite));
    rangee.appendChild(creer("span", "cuisiner-stock",
      "en stock : " + ecrireQuantite(ligne.enStock.quantite, ligne.enStock.unite)
      + (ligne.note ? " — " + ligne.note : "")));
    panneau.appendChild(rangee);
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
    idEnCuisine = null;
    afficherRecettes();
  });
  boutons.appendChild(valider);
  boutons.appendChild(annuler);
  panneau.appendChild(boutons);

  panneau.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    validerCuisine(recette, lignes, erreur);
  });
  return panneau;
}

// ---------- Validation ----------

// Retire du stock les quantités du récapitulatif et note la recette dans l'historique
function validerCuisine(recette, lignes, zoneErreur) {
  // 1) On vérifie d'abord tous les champs : rien n'est retiré si l'un d'eux est incorrect
  const retraits = [];
  for (let i = 0; i < lignes.length; i++) {
    const valeur = Number(lignes[i].champ.value);
    if (lignes[i].champ.value.trim() === "" || isNaN(valeur) || valeur < 0) {
      zoneErreur.textContent = "Quantité incorrecte pour « " + lignes[i].nom + " » : mets un nombre (0 si tu n'en as pas utilisé).";
      zoneErreur.hidden = false;
      lignes[i].champ.focus();
      return;
    }
    retraits.push(valeur);
  }

  // 2) On retire du stock (jamais en dessous de 0 ; la ligne reste dans le stock, même à 0)
  //    On retient ce qui a été retiré, pour pouvoir annuler plus tard
  const retires = [];
  lignes.forEach(function (ligne, i) {
    const avant = ligne.enStock.quantite;
    const reste = Math.max(0, ligne.maximum - retraits[i]);
    const resteEnStock = convertir(reste, ligne.unite, ligne.enStock.unite);
    ligne.enStock.quantite = Math.max(0, auMillieme(resteEnStock));
    const retire = auMillieme(avant - ligne.enStock.quantite);
    if (retire > 0) {
      retires.push({ id: ligne.enStock.id, nom: ligne.enStock.nom, quantite: retire, unite: ligne.enStock.unite });
    }
  });

  // 3) On note la recette en tête de l'historique
  historique.unshift({ id: recette.id, date: dateDuJour(), retraits: retires });
  historique.splice(HISTORIQUE_MAX);

  idEnCuisine = null;
  sauvegarder();
  afficher(); // rafraîchit le stock, puis les recettes
  montrerMessage("« " + recette.nom + " » cuisinée : le stock a été mis à jour.");
  element("message").scrollIntoView({ block: "center" });
}

// ---------- Annulation ----------

// Bouton « Annuler » de l'historique : remet dans le stock ce qu'une recette avait retiré
// et l'enlève de l'historique.
function annulerCuisine(entree) {
  const position = historique.indexOf(entree);
  if (position === -1) return;
  const nom = nomDeRecette(entree.id);
  if (!confirm("Annuler « " + nom + " » ? Les quantités retirées seront remises dans le stock.")) return;

  const aLaMain = []; // ce qui n'a pas pu être remis automatiquement
  entree.retraits.forEach(function (retrait) {
    const ligne = stock.find(function (l) { return l.id === retrait.id; });
    if (!ligne) {
      // La ligne a été supprimée entre-temps : on la recrée (sans date de péremption)
      stock.push({ id: retrait.id, nom: retrait.nom, quantite: retrait.quantite, unite: retrait.unite, peremption: null });
      return;
    }
    const aRemettre = convertir(retrait.quantite, retrait.unite, ligne.unite);
    if (aRemettre === null) {
      // L'unité de la ligne a été changée entre-temps : impossible de calculer
      aLaMain.push(retrait.nom + " (" + ecrireQuantite(retrait.quantite, retrait.unite) + ")");
    } else {
      ligne.quantite = auMillieme(ligne.quantite + aRemettre);
    }
  });

  historique.splice(position, 1);
  sauvegarder();
  afficher(); // rafraîchit le stock, puis les recettes
  if (aLaMain.length > 0) {
    montrerMessage("« " + nom + " » annulée. À remettre toi-même dans le stock : " + aLaMain.join(", ") + ".", true);
  } else {
    montrerMessage("« " + nom + " » annulée : les quantités ont été remises dans le stock.");
  }
  element("message").scrollIntoView({ block: "center" });
}

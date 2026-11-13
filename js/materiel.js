// ============================================================
// MATÉRIEL DE CUISINE
// - La liste du matériel (MATERIELS) : pour en ajouter un, ajouter une ligne ici, rien d'autre.
// - L'outil devine le matériel d'une recette en lisant ses étapes (mots écrits dans « mots »).
// - Je coche ce que j'ai (bloc « Mon matériel » de l'onglet Recettes) : les recettes
//   qui demandent autre chose sont cachées, sauf si « Montrer quand même » est coché.
// - Retenu sur cet appareil seulement (pas synchronisé, comme le régime).
// ============================================================

// « mots » : écrits sans accent et en minuscules (le texte des étapes est préparé pareil).
const MATERIELS = [
  { id: "four", nom: "Four", mots: /\bfours?\b|enfourn|prechauff/ },
  { id: "micro-ondes", nom: "Micro-ondes", mots: /micro-? ?ondes?/ },
  { id: "mixeur", nom: "Mixeur, blender ou robot", mots: /\bmixeu[rs]|\bmixe[rz]?\b|\bmixant\b|blender|\brobot\b/ },
  { id: "batteur", nom: "Batteur électrique", mots: /\bbatteur|fouet electrique/ },
  { id: "moule", nom: "Moule (gâteau, tarte…)", mots: /\b(un|le|du|au|ce|chaque) moule\b|\bmoules? a (gateau|tarte|cake|manque|muffin|charniere|souffle|tartelette|madeleine|pain|savarin|kouglof|kougelhopf)/ },
  { id: "wok", nom: "Wok", mots: /\bwok\b/ },
  { id: "friteuse", nom: "Friteuse", mots: /\bfriteuse/ },
  { id: "cocotte-minute", nom: "Cocotte-minute (autocuiseur)", mots: /cocotte[- ]minute|autocuiseur/ },
  { id: "vapeur", nom: "Cuit-vapeur ou panier vapeur", mots: /cuit-vapeur|cuiseur vapeur|panier vapeur|a la vapeur/ },
  { id: "barbecue", nom: "Barbecue", mots: /\bbarbecue/ },
  { id: "gaufrier", nom: "Gaufrier", mots: /\bgaufrier/ },
  { id: "sorbetiere", nom: "Sorbetière", mots: /sorbetiere|turbine a glace/ },
  { id: "mortier", nom: "Mortier et pilon", mots: /\bmortier/ }
];

// Noms sous lesquels mes choix sont retenus dans la mémoire du navigateur
const CLE_MATERIEL_ABSENT = "repas-materiel-absent"; // ce que je n'ai PAS (ainsi, un matériel ajouté plus tard est coché d'office)
const CLE_MATERIEL_MONTRER = "repas-materiel-montrer"; // case « Montrer quand même »

// Matériel que je n'ai pas (liste d'id), et case « Montrer quand même »
let materielAbsent = [];
let montrerSansMateriel = false;
try {
  const retenu = JSON.parse(localStorage.getItem(CLE_MATERIEL_ABSENT) || "[]");
  if (Array.isArray(retenu)) {
    materielAbsent = retenu.filter(function (id) { return MATERIELS.some(function (m) { return m.id === id; }); });
  }
  montrerSansMateriel = localStorage.getItem(CLE_MATERIEL_MONTRER) === "oui";
} catch (erreur) { /* sans gravité : tout est considéré comme disponible */ }

// ---------- Détection dans les étapes ----------

// Texte simplifié : minuscules, sans accent (« Préchauffer » -> « prechauffer »)
function simplifierTexte(texte) {
  return texte.toLowerCase().replace(/œ/g, "oe").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/’/g, "'");
}

// Dit si le matériel est indispensable dans ce texte.
// « dans un wok ou une poêle », « au four ou à la poêle » : un autre moyen est proposé -> pas indispensable.
function materielIndispensable(texte, mots) {
  const recherche = new RegExp(mots.source, "g");
  let trouve;
  while ((trouve = recherche.exec(texte)) !== null) {
    if (trouve[0] === "") { recherche.lastIndex++; continue; }
    const avant = texte.slice(Math.max(0, trouve.index - 30), trouve.index);
    const apres = texte.slice(trouve.index + trouve[0].length, trouve.index + trouve[0].length + 12);
    const auChoix = /^[a-z]*,? ou /.test(apres) ||
      / ou (bien )?((a|dans|avec|sur|en) )?((un|une|au|a la|le|la|du|l'|d'un|d'une|de la) ?)?$/.test(avant);
    if (!auChoix) return true;
  }
  return false;
}

// Matériel demandé par une recette (liste d'id), calculé une seule fois par recette
const materielsParRecette = {};
function materielDeRecette(recette) {
  if (!materielsParRecette[recette.id]) {
    // Le « four à micro-ondes » ne doit pas compter comme un four
    const texte = simplifierTexte(recette.etapes.join(" ")).replace(/fours? (a )?micro/g, "micro");
    materielsParRecette[recette.id] = MATERIELS
      .filter(function (m) { return materielIndispensable(texte, m.mots); })
      .map(function (m) { return m.id; });
  }
  return materielsParRecette[recette.id];
}

// Noms du matériel qu'il me manque pour une recette (liste vide = j'ai tout)
function materielManquant(recette) {
  return materielDeRecette(recette)
    .filter(function (id) { return materielAbsent.indexOf(id) !== -1; })
    .map(function (id) { return MATERIELS.filter(function (m) { return m.id === id; })[0].nom; });
}

// Dit si la recette doit être cachée à cause du matériel
function cacheeParMateriel(recette) {
  return !montrerSansMateriel && materielAbsent.length > 0 && materielManquant(recette).length > 0;
}

// ---------- Bloc « Mon matériel » (onglet Recettes) ----------

// Titre du bloc : rappelle combien de matériels sont décochés
function ecrireTitreMateriel() {
  const n = materielAbsent.length;
  document.getElementById("titre-materiel").textContent =
    "Mon matériel" + (n ? " (" + n + " absent" + (n > 1 ? "s" : "") + ")" : "");
}

// Fabrique les cases à cocher ; « siChange » est appelé à chaque changement (rafraîchit les recettes)
function preparerMateriel(siChange) {
  const zone = document.getElementById("liste-materiel");
  MATERIELS.forEach(function (materiel) {
    const etiquette = document.createElement("label");
    etiquette.className = "case";
    const caseACocher = document.createElement("input");
    caseACocher.type = "checkbox";
    caseACocher.checked = materielAbsent.indexOf(materiel.id) === -1;
    caseACocher.addEventListener("change", function () {
      materielAbsent = materielAbsent.filter(function (id) { return id !== materiel.id; });
      if (!caseACocher.checked) materielAbsent.push(materiel.id);
      try { localStorage.setItem(CLE_MATERIEL_ABSENT, JSON.stringify(materielAbsent)); } catch (erreur) { /* sans gravité */ }
      ecrireTitreMateriel();
      siChange();
    });
    etiquette.appendChild(caseACocher);
    etiquette.appendChild(document.createTextNode(" " + materiel.nom));
    zone.appendChild(etiquette);
  });

  const montrer = document.getElementById("materiel-montrer");
  montrer.checked = montrerSansMateriel;
  montrer.addEventListener("change", function () {
    montrerSansMateriel = montrer.checked;
    try { localStorage.setItem(CLE_MATERIEL_MONTRER, montrerSansMateriel ? "oui" : "non"); } catch (erreur) { /* sans gravité */ }
    siChange();
  });
  ecrireTitreMateriel();
}

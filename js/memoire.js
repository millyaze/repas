// ============================================================
// MÉMOIRE : garde les données d'une ouverture à l'autre.
// Aujourd'hui : mémoire du navigateur + export/import en fichier.
// Ce fichier est le seul à connaître la façon de stocker :
// pour passer à une vraie synchro plus tard, on ne changera que lui.
// ============================================================

// Nom sous lequel les données sont rangées dans le navigateur
const CLE_MEMOIRE = "repas-donnees";
// Numéro de version du format (à augmenter si le format change un jour)
const VERSION_DONNEES = 1;

// Lit les données enregistrées. Renvoie null si rien n'a encore été enregistré.
function chargerDonnees() {
  try {
    const texte = localStorage.getItem(CLE_MEMOIRE);
    if (!texte) return null;
    const donnees = JSON.parse(texte);
    return donneesValides(donnees) ? donnees : null;
  } catch (erreur) {
    return null;
  }
}

// Enregistre les données. Renvoie true si tout s'est bien passé.
// codes = associations retenues après un scan (code-barre -> ingrédient)
// favoris = identifiants des recettes marquées d'une étoile
// historique = recettes cuisinées, la plus récente d'abord : { id, date }
function enregistrerDonnees(stock, codes, favoris, historique) {
  try {
    const donnees = { version: VERSION_DONNEES, stock: stock, codes: codes || {}, favoris: favoris || [], historique: historique || [] };
    localStorage.setItem(CLE_MEMOIRE, JSON.stringify(donnees));
    return true;
  } catch (erreur) {
    return false;
  }
}

// Vérifie qu'un contenu (mémoire ou fichier importé) a bien la forme attendue
function donneesValides(donnees) {
  if (!donnees || !Array.isArray(donnees.stock)) return false;
  // Les associations de codes-barres sont facultatives (anciens fichiers sans « codes »)
  if (donnees.codes !== undefined) {
    if (!donnees.codes || typeof donnees.codes !== "object" || Array.isArray(donnees.codes)) return false;
    const codesCorrects = Object.keys(donnees.codes).every(function (code) {
      const a = donnees.codes[code];
      return /^\d{8,14}$/.test(code) && a
        && typeof a.nom === "string" && a.nom !== ""
        && typeof a.quantite === "number" && a.quantite >= 0
        && typeof a.unite === "string";
    });
    if (!codesCorrects) return false;
  }
  // Les favoris sont facultatifs (anciens fichiers sans « favoris »)
  if (donnees.favoris !== undefined) {
    if (!Array.isArray(donnees.favoris)) return false;
    if (!donnees.favoris.every(function (id) { return typeof id === "string" && id !== ""; })) return false;
  }
  // L'historique est facultatif (anciens fichiers sans « historique »)
  if (donnees.historique !== undefined) {
    if (!Array.isArray(donnees.historique)) return false;
    const historiqueCorrect = donnees.historique.every(function (entree) {
      return entree && typeof entree.id === "string" && entree.id !== ""
        && /^\d{4}-\d{2}-\d{2}$/.test(entree.date);
    });
    if (!historiqueCorrect) return false;
  }
  return donnees.stock.every(function (ligne) {
    return ligne
      && typeof ligne.id === "string" && ligne.id !== ""
      && typeof ligne.nom === "string" && ligne.nom !== ""
      && typeof ligne.quantite === "number" && ligne.quantite >= 0
      && typeof ligne.unite === "string"
      && (ligne.peremption === null || /^\d{4}-\d{2}-\d{2}$/.test(ligne.peremption));
  });
}

// Crée un fichier de sauvegarde et le fait télécharger (ex. stock-2026-11-10.json)
function exporterFichier(stock, codes, favoris, historique) {
  const donnees = { version: VERSION_DONNEES, stock: stock, codes: codes || {}, favoris: favoris || [], historique: historique || [] };
  const contenu = new Blob([JSON.stringify(donnees, null, 2)], { type: "application/json" });
  const lien = document.createElement("a");
  lien.href = URL.createObjectURL(contenu);
  lien.download = "stock-" + dateDuJour() + ".json";
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
  URL.revokeObjectURL(lien.href);
}

// Lit un fichier de sauvegarde choisi par l'utilisateur.
// Appelle siReussi(stock, codes, favoris, historique) si le fichier est correct, sinon siErreur().
function importerFichier(fichier, siReussi, siErreur) {
  const lecteur = new FileReader();
  lecteur.onload = function () {
    try {
      const donnees = JSON.parse(lecteur.result);
      if (donneesValides(donnees)) siReussi(donnees.stock, donnees.codes || {}, donnees.favoris || [], donnees.historique || []);
      else siErreur();
    } catch (erreur) {
      siErreur();
    }
  };
  lecteur.onerror = siErreur;
  lecteur.readAsText(fichier);
}

// Date d'aujourd'hui au format AAAA-MM-JJ
function dateDuJour() {
  const d = new Date();
  const mois = String(d.getMonth() + 1).padStart(2, "0");
  const jour = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mois + "-" + jour;
}

// ============================================================
// SCAN : lit un code-barre (caméra ou numéro tapé), cherche le produit
// sur Open Food Facts (gratuit, sans compte) et préremplit le formulaire
// d'ajout du stock. Rien n'est ajouté sans validation de l'utilisateur.
// Utilise : INGREDIENTS (data/ingredients.js), creerId, codes,
// preremplirFormulaire, montrerMessage (js/stock.js).
// ============================================================

// Adresse du service Open Food Facts (seul le numéro du code-barre est envoyé)
const ADRESSE_PRODUITS = "https://world.openfoodfacts.org/api/v2/product/";
// Informations demandées sur le produit
const CHAMPS_PRODUIT = "product_name,product_name_fr,generic_name_fr,quantity,product_quantity,categories";

// Lecteur de la caméra en cours d'utilisation (null = caméra fermée)
let lecteurCamera = null;

function demarrerScan() {
  element("bouton-scanner").addEventListener("click", ouvrirCamera);
  element("bouton-arreter-scan").addEventListener("click", fermerCamera);
  element("formulaire-code").addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    chercherCode(element("champ-code").value);
  });
}

// ---------- Caméra ----------

function ouvrirCamera() {
  if (lecteurCamera) return;
  // La bibliothèque de lecture (lib/html5-qrcode.min.js) peut manquer si la page s'est mal chargée
  if (typeof Html5Qrcode === "undefined") {
    montrerMessage("Le lecteur de code-barre n'a pas pu se charger (connexion Internet ?). Tape le numéro du code-barre à la place.", true);
    return;
  }
  element("zone-scan").hidden = false;
  element("bouton-scanner").hidden = true;

  const formats = Html5QrcodeSupportedFormats;
  lecteurCamera = new Html5Qrcode("zone-camera", {
    formatsToSupport: [formats.EAN_13, formats.EAN_8, formats.UPC_A, formats.UPC_E],
    verbose: false
  });
  lecteurCamera.start(
    { facingMode: "environment" },                      // caméra arrière
    { fps: 10, qrbox: { width: 260, height: 140 } },    // zone de visée
    function (texteLu) {                                // un code a été lu
      if (!lecteurCamera) return;                       // évite les lectures en double
      fermerCamera();
      chercherCode(texteLu);
    },
    function () { /* image sans code lisible : on continue de chercher */ }
  ).catch(function () {
    fermerCamera();
    montrerMessage("Impossible d'utiliser la caméra (autorisation refusée ou page non sécurisée). Tape le numéro du code-barre à la place.", true);
  });
}

function fermerCamera() {
  const lecteur = lecteurCamera;
  lecteurCamera = null;
  element("zone-scan").hidden = true;
  element("bouton-scanner").hidden = false;
  if (!lecteur) return;
  try {
    lecteur.stop().then(function () { lecteur.clear(); }).catch(function () {});
  } catch (erreur) { /* la caméra n'avait pas encore démarré */ }
}

// ---------- Recherche du produit ----------

function chercherCode(texte) {
  const code = String(texte).replace(/\D/g, ""); // on ne garde que les chiffres
  if (code.length < 8 || code.length > 14) {
    montrerMessage("Ce n'est pas un code-barre valide (8 à 14 chiffres).", true);
    return;
  }
  element("champ-code").value = "";

  // Produit déjà scanné et validé : on reprend ce qui avait été retenu
  if (codes[code]) {
    const connu = codes[code];
    preremplirFormulaire(connu.nom, connu.quantite, connu.unite, code);
    montrerMessage("Produit déjà connu : « " + connu.nom + " ». Ajoute la date de péremption puis clique « Ajouter ».");
    return;
  }

  montrerMessage("Recherche du produit " + code + "…");
  fetch(ADRESSE_PRODUITS + code + ".json?fields=" + CHAMPS_PRODUIT)
    .then(function (reponse) { return reponse.json(); })
    .then(function (resultat) {
      if (!resultat || resultat.status !== 1 || !resultat.product) {
        montrerMessage("Produit " + code + " introuvable. Saisis-le à la main dans le formulaire.", true);
        return;
      }
      const proposition = analyserProduit(resultat.product);
      if (!proposition.nom) {
        montrerMessage("Produit " + code + " trouvé mais sans nom. Saisis-le à la main dans le formulaire.", true);
        return;
      }
      preremplirFormulaire(proposition.nom, proposition.quantite, proposition.unite, code);
      montrerMessage("Produit trouvé : « " + (proposition.nomProduit || proposition.nom) + " », proposé comme « " + proposition.nom + " ». Vérifie, ajoute la date de péremption puis clique « Ajouter ».");
    })
    .catch(function () {
      montrerMessage("Recherche impossible (pas de connexion ou service indisponible). Saisis le produit à la main.", true);
    });
}

// ---------- Correspondance produit -> ingrédient ----------

// Simplifie un texte et retire les pluriels simples : « Tomates pelées » -> « tomate-pelee »
function simplifier(texte) {
  return creerId(texte || "").split("-").map(function (mot) {
    // « pâtes » garde son s : sinon « pâte à tartiner » serait pris pour des pâtes
    if (mot === "pates") return mot;
    return mot.length > 3 ? mot.replace(/[sx]$/, "") : mot;
  }).join("-");
}

// Autres mots courants sur les emballages -> id de l'ingrédient de référence.
// Pour en ajouter : "mot sur l'emballage": "id de data/ingredients.js"
const AUTRES_NOMS = {
  "spaghetti": "pates", "penne": "pates", "coquillettes": "pates", "fusilli": "pates",
  "tagliatelles": "pates", "macaroni": "pates", "torsades": "pates", "pâtes alimentaires": "pates",
  "thon": "thon-en-boite", "maïs doux": "mais-en-boite", "pois chiches": "pois-chiches-en-boite",
  "haricots rouges": "haricots-rouges-en-boite", "emmental râpé": "fromage-rape", "gruyère râpé": "fromage-rape",
  "nouilles": "nouilles-chinoises", "tortillas": "tortilla-de-ble", "coulis de tomate": "sauce-tomate",
  "tomates pelées": "sauce-tomate", "tomates concassées": "sauce-tomate", "purée de tomate": "sauce-tomate",
  "steak haché": "boeuf-hache", "filet de poulet": "blanc-de-poulet", "crème liquide": "creme-fraiche",
  "crème entière": "creme-fraiche", "crème légère": "creme-fraiche", "champignon de paris": "champignons"
};

// Liste de tous les mots reconnus : noms de référence + autres noms, sous forme simplifiée
let motsReconnus = null;
function listerMotsReconnus() {
  if (motsReconnus) return motsReconnus;
  motsReconnus = INGREDIENTS.map(function (ingredient) {
    return { mot: simplifier(ingredient.nom), ingredient: ingredient };
  });
  Object.keys(AUTRES_NOMS).forEach(function (autreNom) {
    const ingredient = INGREDIENTS.find(function (i) { return i.id === AUTRES_NOMS[autreNom]; });
    if (ingredient) motsReconnus.push({ mot: simplifier(autreNom), ingredient: ingredient });
  });
  return motsReconnus;
}

// Cherche dans un texte (nom du produit) l'ingrédient dont le mot reconnu est le plus long
function trouverIngredient(texte) {
  const cherche = "-" + simplifier(texte) + "-";
  let meilleur = null;
  listerMotsReconnus().forEach(function (candidat) {
    if (cherche.indexOf("-" + candidat.mot + "-") !== -1 && (!meilleur || candidat.mot.length > meilleur.mot.length)) {
      meilleur = candidat;
    }
  });
  return meilleur ? meilleur.ingredient : null;
}

// Cherche dans les catégories du produit, de la plus précise à la plus générale.
// Ici la catégorie doit être exactement un mot reconnu (« Laits » oui, « Pâtes à tartiner » non).
function trouverParCategories(categories) {
  const liste = String(categories || "").split(",").reverse();
  for (let i = 0; i < liste.length; i++) {
    const categorie = simplifier(liste[i]);
    const candidat = listerMotsReconnus().find(function (c) { return c.mot === categorie; });
    if (candidat) return candidat.ingredient;
  }
  return null;
}

// À partir de la fiche Open Food Facts, propose un nom, une quantité et une unité
function analyserProduit(produit) {
  const nomProduit = (produit.product_name_fr || produit.product_name || produit.generic_name_fr || "").trim();

  // 1) On cherche d'abord dans le nom du produit, 2) sinon dans ses catégories
  const ingredient = trouverIngredient(nomProduit + " " + (produit.generic_name_fr || ""))
    || trouverParCategories(produit.categories);

  // Quantité de l'emballage, ramenée en g ou en ml
  let valeur = null;
  let famille = null; // "g" ou "ml"
  const lu = /(\d+(?:[.,]\d+)?)\s*(kg|g|cl|ml|l)\b/i.exec(produit.quantity || "");
  if (lu) {
    const unite = lu[2].toLowerCase();
    const facteur = { g: 1, kg: 1000, ml: 1, cl: 10, l: 1000 }[unite];
    valeur = parseFloat(lu[1].replace(",", ".")) * facteur;
    famille = (unite === "g" || unite === "kg") ? "g" : "ml";
  }
  // Open Food Facts fournit souvent le total déjà calculé (ex. 6 x 1 l = 6000)
  if (Number(produit.product_quantity) > 0) valeur = Number(produit.product_quantity);

  const unite = ingredient ? ingredient.unite : (famille || "pièce");
  let quantite = 1;
  if ((unite === "g" || unite === "ml") && valeur) {
    quantite = arrondir(valeur);
  } else if (unite !== "g" && unite !== "ml") {
    // Unités comptées (pièce, tranche…) : on cherche un nombre, ex. « 6 œufs », « 4 x 125 g »
    const texte = (produit.quantity || "") + " " + nomProduit;
    const compte = /(\d{1,2})\s*(?:x|œufs?|oeufs?|tranches?|pi[eè]ces?|pots?)/i.exec(texte)
      || /^\s*(\d{1,2})\s*$/.exec(produit.quantity || "");
    if (compte) quantite = Number(compte[1]);
  }

  return {
    nomProduit: nomProduit,
    nom: ingredient ? ingredient.nom : nomProduit.slice(0, 60),
    quantite: quantite,
    unite: unite
  };
}

demarrerScan();

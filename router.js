/*
router.js sert à alléger le fichier server.js, on va y inscrire totues les routes.
Pour récupérer le fichier router dans le server, il duffit de l'exporter (module.exports)
Depuis le fichier router.js et de le récupérer dans le serveur
*/

var express = require("express");
var router = express.Router();
const twig = require("twig");

router.get("/", (req, res) => {
  res.render("home.html.twig");
});

router.get("/livres", (req, res) => {
  res.render("livres/list.html.twig");
});

//Gère l'erreur
router.use((req, res, suite) => {
  const error = new Error("Page non trouvée");
  error.status = 404;
  suite(error);
});

//Gère toutes les erreurs
router.use((error, req, res) => {
  res.status(error.status || 500);
  res.end(error.message);
});

module.exports = router;

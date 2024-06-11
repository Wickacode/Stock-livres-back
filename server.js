var express = require('express');
var server = express();
var morgan = require("morgan");

server.use(morgan("dev"));

server.listen(3000, function() {
    console.log("Le serveur écoute sur le port 3000")
});

server.get("/", (req, res) => {
    console.log("Page d'accueil demandée")
    res.end("Page d'accueil demandée")
});

server.post("/test", (req, res) => {
    console.log("Demande reçue avec la méthode POST sur l'url /test")
    res.end("Demande POST reçue")
});

//Gère l'erreur 
server.use((req, res, suite) => {
    const error = new Error("Page non trouvée");
    error.status = 404;
    suite(error);
})

//Gère toutes les erreurs 
server.use((error, req, res) => {
    res.status(error.status || 500);
    res.end(error.message);
})
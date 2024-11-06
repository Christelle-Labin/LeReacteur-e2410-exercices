const axios = require("axios");

axios.get("https://reactnative.dev/movies.json")
  .then((response) => {
    // handle success
    console.log(response.data); // Affichera la réponse du serveur
  })
  .catch((error) => {
    // handle error
    console.log(error); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet
  })

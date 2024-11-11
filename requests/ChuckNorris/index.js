// Les blagues Chuck Norris

// En utilisant les données provenant de l'API Chuck Norris, 
// vous devrez afficher une listes de blagues provenant de 3 categories différentes : 
// la categorie histoire, la categorie science, et la categorie dev.

// Méthode 1 : (ordre aléatoire des blagues)
// const axios = require("axios"); // import de axios

//   axios
//     .get(`https://api.chucknorris.io/jokes/random?category=history`)
//     .then((response) => {
//       console.log("Theme : history");
//       console.log(response.data.value +"\n"); // affichage de la blague // +"\n" permet de créer un retour à la ligne espacé afin d'aérer les blagues
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });

//     axios
//     .get(`https://api.chucknorris.io/jokes/random?category=science`)
//     .then((response) => {
//       console.log("Theme : science");
//       console.log(response.data.value +"\n"); // affichage de la blague
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });

//     axios
//     .get(`https://api.chucknorris.io/jokes/random?category=dev`)
//     .then((response) => {
//       console.log("Theme : dev");
//       console.log(response.data.value +"\n"); // affichage de la blague
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });

// Méthode 2 : (affichage des blagues dans l'ordre désiré)
const axios = require("axios"); // import de axios

  axios
    .get(`https://api.chucknorris.io/jokes/random?category=history`)
    .then((response) => {
      console.log("Theme : history"); // intégration de la thématique souhaitée dans le .then
      console.log(response.data.value +"\n"); // affichage de la blague 
        axios
        .get(`https://api.chucknorris.io/jokes/random?category=science`)
        .then((response) => {
            console.log("Theme : science"); // intégration de la thématique souhaitée dans le .then
            console.log(response.data.value +"\n"); // affichage de la blague
                axios
                .get(`https://api.chucknorris.io/jokes/random?category=dev`)
                .then((response) => {
                console.log("Theme : dev"); // intégration de la thématique souhaitée dans le .then
                console.log(response.data.value +"\n"); // affichage de la blague
            })
            .catch((error) => {
            console.log(error.message);
            });
        })
        .catch((error) => {
        console.log(error.message);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });

// Méthode 3 : (affichage des blagues dans l'ordre désiré via un array
// ATTENTION avec cette méthode ne pas envoyer plus de 3 à 4 requêtes sinon RIQUE DE FACTURATION pour surcharge de requêtes demandées 
// const axios = require("axios"); // import de axios

// // tableau contenant les categories demandées : ainsi nous pourrons faire une boucle pour envoyer 3 requêtes successives
// // chacun des éléments de ce tableau sera utilisé comme paramètres query dans les requêtes
// const categories = ["history", "science", "dev"];

// for (let i = 0; i < categories.length; i++) {
//   // ci dessous, nous interpolons chacun des éléments du tableau categories dans l'adresse de la requête (celle-ci étant une string)
//   axios
//     .get(`https://api.chucknorris.io/jokes/random?category` + categories[i])
//     .then((response) => {
//       console.log(`Thème : ` + categories[i]); // affichage de la categorie
//       console.log(response.data.value + "\n"); // affichage de la blague
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }
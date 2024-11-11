// Liste d'utilisateurs

// En utilisant les données provenant de l'API JSON placeholder de npm, 
// vous devrez afficher une liste d'utilisateurs et certaines de leurs informations.
// Et via le package Axios (permet d'effectuer des requêtes HTTP)


const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // handle success
    for (const i in response.data) {  
        console.log('Nom : '+response.data[i].name);  
        console.log('Email : '+response.data[i].email);  
        console.log('Ville : '+response.data[i].address.city);  
        console.log("--------------------");  
    }
  })
  .catch((error) =>{
    // handle error
    console.log(error);
  })
const user = {
    name: "John"
  };
  
  // Début de votre code
  // Méthode 1: 
  user.address = {city : "Paris", country : "France"};

  // Méthode 2 :
  user.address = {};
  user.address.city = "Paris";
  user.address.country = "France";

  // Fin de votre code
  
  console.log(user); // { name: "John", address: { city: "Paris", country: "France" } }
  
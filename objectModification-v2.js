const car = {
    brand: "Corvette",
    specificities: {
      color: "red",
      country: "France"
    }
  };
  
  // Début de votre code
  //   Méthode 1 :
  car.specificities.color = "blue";
  car.specificities.country = "USA";

  //   Méthode 2 :
  car["specificities"]["color"] = "blue";
  car["specificities"]["country"] = "USA";

  //   Méthode 3 :
  let key = "specificities";
  car[key] = {color:"blue", country: "USA"};

  //   Méthode 4 :
  car.specificities = {color:"blue", country: "USA"};

  // Fin de votre code
  
  console.log(car); // Affichera { brand: "Corvette", specificities: { color: "blue", country: "USA" } }
  
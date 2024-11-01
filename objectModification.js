// Créez un objet person avec deux propriétés name et age. 
// Modifiez ensuite la propriété age en lui assignant une nouvelle valeur.

const person = {
    name: "John",
    age: 30
  };
  // Début de votre code
//   Méthode 1 :
person.age = 35;

//   Méthode 2 :
person["age"] = 35;

//   Méthode 3 :
let keyAge = "age";
person[keyAge] = 35;

  // Fin de votre code
  console.log(person); // affichera { name: "John", age: 35 }
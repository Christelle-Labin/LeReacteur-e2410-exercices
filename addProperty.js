// Créez un objet person avec une propriété name qui renvoie une chaîne de caractères. 
// Ajoutez ensuite une propriété age avec une valeur de votre choix.

const person = {
  name: "John"
};
// Début de votre code
//   Méthode 1 :
person.age = 30;

// //   Méthode 2 :
person["age"] = 30;

//   Méthode 3 :
let keyAge = "age";
person[keyAge] = 30;

// Fin de votre code

console.log(person); // affichera { name: "John", age: 30 }
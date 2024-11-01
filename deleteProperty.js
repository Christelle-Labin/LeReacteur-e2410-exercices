// Supprimer une propriété

const person = {
    name: "John",
    age: 30
  };
  
  // Début de votre code

//   Méthode 1 :
delete person.age;

//   Méthode 2 :
delete person["age"];

// //   Méthode 3 :
let key = "age";
delete person[key];

  // Fin de votre code
  
  console.log(person); // affichera { name: "John" }
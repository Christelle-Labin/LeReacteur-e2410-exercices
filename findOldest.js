// Déclarez une fonction nommée findOldestPerson qui prend en paramètre un tableau d'objets 
// représentant des personnes avec les propriétés name et age. 
// La fonction doit retourner l'objet représentant la personne la plus âgée.

const findOldestPerson = (array) => {
  // Début de votre code

  // etant donné que nous avons déjà un tableau d'uilisateurs, il faut le passer en revue à l'aide d'une boucle
  // Création d'une variable qui retiendra l'âge maximum croisé dans le tableau
  let maxAge = 0;
  // Création d'une variable qui contiendra l'élément du tableau (objet puis utilisateur) dont l'âge correspond à l'age maximum
  let oldestUser;
  // Passer en revue notre tableau d'utilisateur via une boucle
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    // si j'ai un utilisateur plsu vieux que ceux qu'on a croisé jusqu'alors, le "marquer" comme plus vieux
    if (array[i].age > maxAge) {
        maxAge = array[i].age;
        oldestUser = array[i];
    }
    //console.log(oldestUser);
    
  }
  // à la fin de la boucle, retourner l'utilsateur "marqué" comme le plus vieux
  return oldestUser;
  // Fin de votre code
};


const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 31 },
  { name: "Charlie", age: 27 },
  { name: "David", age: 20 }
];

console.log(findOldestPerson(users)); // Doit afficher { name: "Bob", age: 31 }
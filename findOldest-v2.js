// Déclarez une fonction nommée findOldestPerson qui prend en paramètre un tableau 
// contenant des tableaux d'objets représentant des personnes avec les propriétés name et age. 
// La fonction doit retourner l'objet représentant la personne la plus âgée.

const findOldestPerson = (array) => {
  // Début de votre code
  // Etant donné que nous avons déjà un tableau d'uilisateurs, il faut le passer en revue à l'aide d'une boucle

  // Création d'une variable qui retiendra l'âge maximum croisé dans le tableau
  let maxAge = 0;
  // Création d'une variable qui contiendra l'élément du tableau (objet puis utilisateur) dont l'âge correspond à l'age maximum
  let oldestUser;
  // Passer en revue notre tableau d'utilisateur via une boucle
  for (let i = 0; i < array.length; i++) { // affiche successivement les tableaux : [{ name: 'Alice', age: 24 }, { name: 'Bob', age: 31 },etc ] ...
    //console.log(array[i]);
    // entamer une boucle "fille" cad [j] sur le tableau array[i] afin de passer en revue chaque user : 
    for (let j = 0; j < array[i].length; j++) {
      //console.log(array[i][j]); // Affiche chaque utilisateur un par un
      // s'il y a un utilisateur plus vieux que ceux croisé jusqu'alors, le "marquer" comme plus vieux
      if (array[i][j].age > maxAge) {
        maxAge = array[i][j].age;
        oldestUser = array[i][j];
      }
    }
  }
  // à la fin de la boucle, retourner l'utilsateur "marqué" comme le plus vieux
  return oldestUser;
  // Fin de votre code
};

const usersLists = [
  [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 31 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 20 }
  ],
  [
    { name: "John", age: 34 },
    { name: "Lucas", age: 45 },
    { name: "Bill", age: 19 },
    { name: "Max", age: 24 }
  ],
  [
    { name: "Lawrence", age: 13 },
    { name: "Charles", age: 37 }
  ]
]

console.log(findOldestPerson(usersLists)); // Doit afficher { name: "Lucas", age: 45 }
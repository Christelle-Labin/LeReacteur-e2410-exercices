// Créez la fonction invert, qui prend en paramètre un objet, 
// et retourne un objet dont les clefs et les valeurs ont été échangées. 
// Si deux clef retournent la même valeur, alors l'objet retourné devra conserver la dernière de ces valeurs.

// Méthode 1 :
const invert = (obj) => {
  
  // Début de votre code
  const invertObj = {};
  
  for (const key in obj) {
      invertObj[obj[key]] = key;    
  }
return invertObj;
  
  // Fin de votre code
}

// Dans un objet, ce qui est important c'est la correspondance entre une clé et une valeur donc le résultat est bien correct
// Affiche { '2': 'b', '3': 'a', '7': 'c' }
// Affiche { '1': 'b', '7': 'c' }
console.log(invert({ 'a': 3, 'b': 2, 'c': 7 })); // Affichera {'3' : 'a', '2' : 'b', '7' : 'c'}
console.log(invert({ 'a': 7, 'b': 1, 'c': 7 })); // Affichera {'7' : 'c', '1' : 'b'}


// Méthode 2 :
// const invert = (obj)=> {
//   // Début de votre code
//   const result = {};
//   // Récupérer un tableau de paires Clés/Valeurs
//   const pairedEntries = Object.entries(obj);
//   // console.log(pairedEntries); // [ [ 'a', 3 ], [ 'b', 2 ], [ 'c', 7 ] ]
//   // Création d'une boucle
//   for (let i = 0; i < pairedEntries.length; i++) { 
//   //console.log(pairedEntries[i]); // affiche [ 'a', 3 ] puis [ 'b', 2 ] puis [ 'c', 7 ]
//   // A chaque tour, on crée une clef avec le deuxième élément du tableau, et on lui assigne comme valeur le premier élément
//   const currentKeyToUse = pairedEntries[i][1]; // 1 car deuxième élément
//   const currentValueToAssign = pairedEntries[i][0];
//   // console.log(currentKeyToUse);
//   // console.log(currentValueToAssign);
//   result[currentKeyToUse] = currentValueToAssign;

// }
//   return result;
//   // Fin de votre code
// };

// Dans un objet, ce qui est important c'est la correspondance entre une clé et une valeur donc le résultat est bien correct
// Affiche { '2': 'b', '3': 'a', '7': 'c' }
// Affiche { '1': 'b', '7': 'c' }
// console.log(invert({ 'a': 3, 'b': 2, 'c': 7 })); // Affichera {'3' : 'a', '2' : 'b', '7' : 'c'}
// console.log(invert({ 'a': 7, 'b': 1, 'c': 7 })); // Affichera {'7' : 'c', '1' : 'b'}
// Écrire une fonction median qui prend en paramètre un tableau de nombres, et retourne le nombre médiant de ce tableau.

// Le nombre médiant est le nombre milieu d'une suite de nombres. 
// C'est à dire que la moitié des nombres ont une valeur inférieure ou égale et la moitié ont une valeur supérieure ou égale. 
// La médiane est la valeur centrale d'une série statistique rangée par ordre croissant.


// Méthode 1 :
// Début de votre code
const median = (arrayNumb) => {

  arrayNumb.sort((a, b) => a - b);
    //console.log(arrayNumb);
    
    let middle = Math.floor(arrayNumb.length / 2);
        
    if (arrayNumb.length % 2 === 0) {
        return (arrayNumb[middle -1] + arrayNumb[middle]) / 2;
        
    } else {
    return arrayNumb[middle];
    }
};

// Fin de votre code

console.log(median([1, 2, 3, 4, 5])); // Affiche : 3
console.log(median([-10, -3, 4])); // Affiche : -3
console.log(median([-10, 3, -7])); // Affiche : -7
console.log(median([9, -2, 0])); // Affiche : 0
console.log(median([2, 4])); // Affiche : 3


// Méthode 2 :

// Début de votre code
// const median = (array) => {

//   // Ranger les éléments par ordre croissant
//   array.sort((a, b)=>{
//     return a-b;
//   });
//   //console.log(array);
  
//   // Récupérer la longueur du tableau = permet de voir le nolmbre d'éléments qui compose un tableau
//   const length = array.length;
//   //console.log(length);
  
//   // si la longueur du tableau n'est par divisible par 2 = nombre d'éléments impairs
//   if (array.length % 2 !== 0) {
//       // donc aller chercher l'élément du milieu;
//   medianIndex = (length -1) / 2;
//   return array[medianIndex];
//     } else {
//       // sinon   // si la longueur du tableau est divisible par 2 = nombre d'éléments pairs
//       // aller chercher les deux éléments du milieu et calculer leur moyenne
//       const highIndex = length / 2;
//       const lowIndex = length / 2 -1;
//       const highMedian = array[highIndex];
//       const lowMedian = array[lowIndex];
//       return (highMedian + lowMedian) /2;
//     }
//   };

// // Fin de votre code

// console.log(median([1, 2, 3, 4, 5])); // Affiche : 3
// console.log(median([-10, -3, 4])); // Affiche : -3
// console.log(median([-10, 3, -7])); // Affiche : -7
// console.log(median([9, -2, 0])); // Affiche : 0
// console.log(median([2, 4])); // Affiche : 3
//          *****     VV ENONCE VV      *****
// Un casino a besoin de vos compétences pour écrire un programme : 
// si un client donne une certaine somme d'argent, alors votre programme doit changer cette somme en jetons !

// Pour cela, vous écrivez une fonction getCoins qui prend deux arguments :

// le premier argument est un nombre représentant un montant
// le deuxième est un tableau dont les éléments sont les montants de jetons disponibles
// Cette fonction devra changer le montant, en jetons. 
// Dans l'exemple suivant, nous échangons un montant de 27, et les jetons disponibles sont de 10, 5 et 1 :

// console.log(getCoins(27, [10, 5, 1])); // Affichera [10, 10, 5, 1, 1] 
// Car pour faire 27, il vous faudra 2 jetons de 10, un jeton de 5, et deux jetons de 1 ! A vous de jouer !


// Méthode 1 :
// Début de votre code
const getCoins = (amount, array) => {

    // Tri du tableau par ordre croissant car lors d'un change de devises,
    // il est important de faire le change sur les plus gros jetons jusqu'au plus petit
    const sortedArray = array.sort((a, b) => {
        return b - a;
    });

    let leftAmount = amount; // variable qui définit le montant restant
    const result = []; // tableau qui contiendra les jetons échangés

    // Création d'une boucle afin de parcourir le tableau
    for (let i = 0; i < sortedArray.length; i++) {
            // Tant que le montant est supérieur à la valeur du jeton,
            while (leftAmount >= sortedArray[i]) {
                // alors ajout d'un jeton
                result.push(sortedArray[i]);
                // A chaque fois qu'in ajoute un jeton, on soustrait la valeur à ce montant
                leftAmount -= sortedArray[i];
}
    }
    return result;
}

// Fin de votre code

console.log(getCoins(27, [10, 5, 1])); // Affichera [10, 10, 5, 1, 1]
console.log(getCoins(103, [25, 10, 5, 1])); // Affichera [25, 25, 25, 25, 1, 1, 1]
console.log(getCoins(54, [20, 10, 5, 2, 1])); // Affichera [20, 20, 10, 2, 2]


// Méthode 2 :
// Début de votre code
// const getCoins = (amount, array) => {

//     // Tri du tableau par ordre croissant car lors d'un change de devises,
//     // il est important de faire le change sur les plus gros jetons jusqu'au plus petit
//     const sortedArray = array.sort((a, b) => {
//         return b - a;
//     });

//     let leftAmount = amount; // variable qui définit le montant restant
//     const changeResult = []; // tableau qui contiendra les jetons échangés

//     // Tant que le montant est supérieur à la valeur du jeton,
//     let i = 0;
//     while (leftAmount > 0) {
//         // si le montangt est supérieur à 0
//         if (sortedArray[i] <= leftAmount) {
//         // on ajoute ce jeton
//         changeResult.push(sortedArray[i]);
//         // A chaque fois qu'in ajoute un jeton, on soustrait la valeur à ce montant
//         leftAmount = leftAmount - sortedArray[i];
//     } else {
//         i++;
//     }
    
//    }
//     return changeResult;
// }

// // Fin de votre code

// console.log(getCoins(27, [10, 5, 1])); // Affichera [10, 10, 5, 1, 1]
// console.log(getCoins(103, [25, 10, 5, 1])); // Affichera [25, 25, 25, 25, 1, 1, 1]
// console.log(getCoins(54, [20, 10, 5, 2, 1])); // Affichera [20, 20, 10, 2, 2]
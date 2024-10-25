// Méthode 1 : Ascii + method charCodeAt

// Table Ascii
// espace : 32
// chiffres : 48 à 57
// Majuscules 65 à 90
// Minuscules 97 à 122

// const removeSpecialCharacters = (str) => {
//     // Début de votre code
//     // Génerer une nouvvelle string 
//     let newStr = "";
//     // Création d'une boucle afin de passer en revue la string
//     for (let i = 0; i < str.length; i++) {
//         // Création d'une variable comprenant le code de la string
//         const currentChar = str.charCodeAt(i);
//         //console.log(str[i]); 
//         if (currentChar === 32 || 
//             (currentChar > 47 && currentChar < 58) || 
//             (currentChar > 64 && currentChar < 91) || 
//             ((currentChar > 96 && currentChar < 123)) 
//         ) {  
//             // alors notre caractère n'est pas spécial, et on peut le rajouter à newStr;
//             newStr = newStr + str[i];
//         } 
//     }
//     return newStr;
//     // Pour chaque lettre, on vérifie si son code ascii fait partie d'une des range (= fourchette) qui nous intéresse 
//     // cad voir table ascii plus haut
//     // Fin de votre code
// }

// // Tests
// console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
// console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
// console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"



// Méthode 2 : RegEx
const removeSpecialCharacters = (str) => {
    // Début de votre code
 // Création d'une boucle afin de passer en revue la string
 let newStr = "";
 for (let i = 0; i < str.length; i++) {
    //console.log(str[i]); 
    // Créaetion d'un regEx
    const regEx = /[a-z0-0 ]/i;    //deuxième manière de faire un regEx =>   const regEx = new RegEx ("[a-z0-0 ]", "i")
if (regEx.test(str[i]) === true) {
    newStr += str[i];
}
 }
 return newStr;
    // Fin de votre code
}

// Tests
console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"



// Méthode 3 :
// const removeSpecialCharacters = (str) => {
//     // Début de votre code

//     for (let i = 0; i < str.length; i++) {
// // console.log(i); 
        
// // var ascii_code = newStr.charCodeAt(0);
// // console.log(ascii_code);
//     }
// return str.replace(("[^(a-z0-9_\.\-)]/g"), '');
//     // Fin de votre code
// }

// // Tests
// console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
// console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
// console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"


// Méthode 4 :
// const removeSpecialCharacters = (str) => {
//     // Début de votre code

// for (let i = 0; i < str.length; i++) {
// // console.log(i);    
// }
// return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\&\@\#\!]/g, '');
//     // Fin de votre code
// }

// // Tests
// console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
// console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
// console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"
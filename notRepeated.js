// Méthode 1 avec .indexOf

// const notRepeated = (str) => {
//     // Début de votre code
//     // Convertir toute la string en minuscules :
//     str = str.toLowerCase();
//     // Déclaration d'une boucle afin de passer en revue toutes les lettres :
//   for (let i = 0; i < str.length; i++) {
// // Vérification via le console log : on passe en revue toutes lettres de la string
//     //console.log(str.charAt(i));
//     // via la boucle, on verifie pour chaque lettre, qu'elle n'est pas presénte dans la suite de la chaine de caractères :
//     //      - le premier paramètre de la méthode .includes permet de faire une recherche dans la chaine 
//     //      - le second paramètre de la méthode .includes permet de rechercher à partir d'une certaine position cad ici, à partir de la première lettre soit i + 1
//     if (str.indexOf(str.charAt(i), i + 1) === -1) {
//     // Rechercher si la lettre ne serait pas présente AVANT une certaine position dans la chaine :
//     // découper la première partie (cad la partie précédente la lettre) via substring
//     const previousString = str.substring (0,i);
//     //console.log(previousString);
//     if (previousString.indexOf(str.charAt(i)) === -1) {
//         return str.charAt(i);
//     } 
//    }
//  }
  
//     // Fin de votre code
// };
  
//   console.log(notRepeated("abcabcfgh")); // Affichera "f"
//   console.log(notRepeated("tatazazaela")); // Affichera "e"
//   console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"




// Méthode 2 avec .includes

const notRepeated = (str) => {
    // Début de votre code
    // Convertir toute la string en minuscules :
       str = str.toLowerCase();
    // Déclaration d'une boucle afin de passer en revue toutes les lettres :
  for (let i = 0; i < str.length; i++) {
// Vérification via le console log : on passe en revue toutes lettres de la string
    //console.log(str.charAt(i));
    // via la boucle, on verifie pour chaque lettre, qu'elle n'est pas presénte dans la suite de la chaine de caractères :
    //      - le premier paramètre de la méthode .includes permet de faire une recherche dans la chaine 
    //      - le second paramètre de la méthode .includes permet de rechercher à partir d'une certaine position cad ici, à partir de la première lettre soit i + 1
    if (str.includes(str.charAt(i), i + 1) === false) {
    // Rechercher si la lettre ne serait pas présente AVANT une certaine position dans la chaine :
    // découper la première partie (cad la partie précédente la lettre) via substring
    const previousString = str.substring (0,i);
    //console.log(previousString);
    if (previousString.includes(str.charAt(i)) === false) {
      return str.charAt(i);

    }
   }
  }
    // Fin de votre code
}
  
  console.log(notRepeated("abcabcfgh")); // Affichera "f"
  console.log(notRepeated("tatazazaela")); // Affichera "e"
  console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"
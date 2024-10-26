// Méthode array sans boucle et sans consigne bonus :
// Ecrire une fonction longerWord qui prend une string en argument et qui renvoie le mot le plus long de cette string. 
// Si plusieurs mots ont la même longueur maximale, la fonction devra retourner le premier mot de la phrase ayant cette longueur.
// const longerWord = (string) => {
//     // Début de votre code

//     let array = string.split(" ").sort((a, b) => b.length - a.length)[0];
//     //console.log(array.toString());
// return array.toString(string.length > string.length);

//     // Fin de votre code 
// }

// console.log(longerWord("Le Reacteur est une formation incroyable")); // doit afficher `incroyable`
// console.log(longerWord("Hello world")); // doit afficher `Hello`
// console.log(longerWord("Apprendre le JS est la meilleure formation possible")); // doit afficher `Apprendre meilleure formation`


// Méthode tableau avec boucle :
// Ecrire une fonction longerWord qui prend une string en argument et qui renvoie le mot le plus long de cette string. 
// Si plusieurs mots ont la même longueur maximale, la fonction devra retourner le premier mot de la phrase ayant cette longueur.

const longerWord = (string) => {
  // Début de votre code
  // Création d'un tableau de mots // ATTENTION ne pas oublie l'espace
  const wordTab = string.split(" ");
  //console.log(wordTab); // [ 'Le', 'Reacteur', 'est', 'une', 'formation', 'incroyable' ]
  //Création d'une variable compteur (longueurMax)
  let maxLength = 0;
  //Création d'une variable pour stocker le mot le plus long jusqu'alors
  let longerWord = "";
  // faire une boucle sur le tableau
  for (let i = 0; i < wordTab.length; i++) {
  //console.log(wordTab[i]);
      // pour chaque élément, on récupère la longeur du mot que l'on compare avec la longueur max
      // si on est au-dessus
      if (wordTab[i].length > maxLength) {
        // alors la longueur de ce mot devient la longueur max
        maxLength = wordTab[i].length;
        // et le mot devient le mot le plus long
        longerWord = wordTab[i];
        // VV BONUS VV : si la longueur du mot est égale à la maximale alors 
      } else if (wordTab[i].length === maxLength) {
        longerWord += " " + wordTab[i]; // Concaténation // Attention ne pas oublier l'espace
      }
  }
// à la fin de la boucle, on retourne le mot le plus long
return longerWord;
  
  // Fin de votre code
};

console.log(longerWord("Le Reacteur est une formation incroyable")); // doit afficher `incroyable`
console.log(longerWord("Hello world")); // doit afficher `Hello`

// Bonus
// Si plusieurs mots ont la même longueur maximale, la fonction retournera cette fois tous ces mots dans une chaîne de caractères. Exemple :
console.log(longerWord("Apprendre le JS est la meilleure formation possible")); // doit afficher `Apprendre meilleure formation`
// Méthode avec tableau où on y conserve les informations déjà passées en revue dans une boucle
// Cela nous permet de retrouver une deuxième fois la même lettre
const notRepeated = (str) => {
    // Début de votre code
    // Convertir toute la string en minuscules :
       str = str.toLowerCase();
    // création d'un tableau pour conserver les lettres déjà passées en revue
    const checkedLetters = [];
    // Déclaration d'une boucle afin de passer en revue toutes les lettres :
  for (let i = 0; i < str.length; i++) {
        if (str.includes(str[i], i + 1)) { // si on retrouve la lettre dans includes  = true
            checkedLetters.push(str[i]); //  on pousse le lettre dans le tableau
        } else if (checkedLetters.indexOf(str[i]) === -1) { // sinon si elle n'y est pas
            return str [i]; // on la retourne
        }
  }
    // Fin de votre code
}
  
  console.log(notRepeated("abcabcfgh")); // Affichera "f"
  console.log(notRepeated("tatazazaela")); // Affichera "e"
  console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"
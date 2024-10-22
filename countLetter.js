const str = "Hello world!";

// Début de votre code
// la fonction countLetter prend deux paramètres : str (la chaîne de caractères) et letter (la lettre dont nous voulons compter les occurrences).
const countLetter = (string, letter) => {
  // initialisons une variable count à 0, qui servira à compter le nombre d'occurrences de la lettre spécifiée.
  let counter = 0;
  // Parcourons chaque caractère de la chaîne
  for (let i = 0; i < string.length; i++) {

    //si demande de vérification minuscule ou majuscule :
    if (string[i].toLowerCase() === letter.toLowerCase()) {

    //Si le caractère correspond à la lettre spécifiée, augmentons le compteur
    counter++;
    }
  }
  // ATTENTION  : on retourne counter mais ne pas le mettre dans la boucle
  return counter;
};
// Fin de votre code

console.log(countLetter(str, "l")); // Affiche : 3

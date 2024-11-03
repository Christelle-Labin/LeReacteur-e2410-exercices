// Écrire une fonction countLetters qui prend en paramètre une chaîne de caractères, 
// et retourne un objet contenant le nombre d'occurrences de chaque lettre dans la chaîne.

const str = "Hello world !";

// Début de votre code
const countLetters = (string) => {
    // Création d'un objet vide dans lequel on comptabilisera les lettres : 
    const result = {};
    // Parcourir la string avec une boucle afin de comptabiliser les lettres : 
    for (let i = 0; i < string.length; i++) {
    // console.log(string[i]); // Affiche Hello world ! à la vertical, lettre après lettre
    // Si la lettre a déja été croisée, alors la clef correspondante existe déjà dans l'objet
    // DONC
    // si la clef existe déjà, alors, je dois rajouter 1 à la valeur correspondante
    if (result[string[i]]) {
        result[string[i]] = result[string[i]] + 1;
    } else {
        // sinon je dois créer une clef et lui assigner la valeur de 1
        result[string[i]] = 1;

    }

}  
return result;
};

// Fin de votre code

console.log(countLetters(str)); // Affiche : { H: 1, e: 1, l: 3, o: 2, " ": 2, w: 1, r: 1, d: 1, "!": 1 }
// Début de votre code
const division = (a, b) => {
    
    if (b === 0) {
            return "Impossible de diviser par zéro" ;
         } else {
            return a / b;
         }
}

// Fin de votre code

console.log(division(10,2)); // Devra afficher 5
console.log(division(10,0)); // Devra afficher "Impossible de diviser par zéro"


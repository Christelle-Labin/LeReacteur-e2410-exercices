const number = 13;

// Début de votre code
// On suppose que le nombre est premier au départ.
// la variable sera passée à false si la condition dans la boucle n'est pas remplie : 
// à savoir un diviseur à ce nombre autre que 1 ou lui-même
let isPrime = true;

// On crée une boucle pour vérifier si le nombre est divisible par un autre nopbrte que 1 et lui-même
// Donc on passe en revue tous les nombres inférieurs à number 
// (i ira de 2 à number, exclu)
for (let i = 2; i < number; i++) {
    //console.log(i);
    // Pour chaque tour de la boucle, on vérifie si number est divisible par i et donne un reste de 0
    if (number % i === 0) {
        // Si oui, alors number n'est pas un nombre premier
        isPrime = false;
        break; // On stope une boucle en instituant break
    }
}

// On affiche le résultat en fonction du station de la variable isPrime
if (isPrime === true) {
    console.log("C'est un nombfre premier");
} else {
    console.log("Ce n'est pas un nombre prmeier"); 
}


// Fin de votre code

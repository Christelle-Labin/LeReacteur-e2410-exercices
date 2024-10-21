/*
    Dans cet exercice vous devrez appeler la fonction `showCurrentStep` plusieurs fois.
    Vous devrez afficher dans le terminal :

    Etape 1
    Etape 2
    Etape 3
    Etape 4
    Etape 5

*/

console.log("Etape 1");

const showCurrentStep = (step) => {
    console.log("Etape " + step);
};

// Début de votre code

//  Méthode 1 :
// showCurrentStep (2);
// showCurrentStep (3);
// showCurrentStep (4);

// Méthode 2 (code plus propre):
for (let i = 2; i < 5; i++) {
showCurrentStep(i);
    
}

// Fin de votre code

console.log("Etape 5");

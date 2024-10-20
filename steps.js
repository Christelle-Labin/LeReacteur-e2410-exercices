/*
    Dans cet exercice vous devrez afficher dans le terminal :
    Etape 1
    Etape 2
*/

const firstStep = () => {
    console.log("Etape 1");
    secondStep(); // Une fonction peut en appeler une autre !
    
};

const secondStep = () => {
    console.log("Etape 2");    
};

// Début de votre code

firstStep ();

// Fin de votre code 


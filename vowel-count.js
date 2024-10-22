const str = "My name is Doe. John Doe."

let counter = 0;

// Début de votre code
// console.log(str.length);
const vowels = ["a", "e", "i", "o", "u", "y"];

for (let i = 0; i < str.length; i++) {

    // console.log(i);
    if (vowels.indexOf(str[i]) !== -1) { 

        counter++;    
        }
    
}

// Fin de votre code

console.log(counter); // Doit afficher 9

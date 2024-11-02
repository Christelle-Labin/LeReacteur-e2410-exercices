//         ******     Notation polonaise inversée - RPN - Reverse Poslish Notation     ******
// Écrivez une fonction rpnCalculator qui prend en paramètre une chaîne de caractères représentant 
// une expression en notation polonaise inversée et retourne le résultat de cette expression.

// Qu'est-ce que la notation polonaise inversée ? Ou RPN (Reverse Polish Notation).
// Il s'agit d'une notation qui permet d'écrire de façon non ambiguë les formules arithmétiques sans utiliser de parenthèses.
// En effet, elle consiste à écrire les opérations en mettant de gauche à droite : les opérandes, puis les opérateurs. 
// Par exemple, l'expression 3 * ( 10 + 5 ) sera écrite comme suit : 10 5 + 3 * (on additionne 10 et 5, puis on multiplie le résultat par 3).

// La fonction doit prendre en compte les opérations d'addition, de soustraction, de multiplication et de division.

// Méthode 1 :
// const rpnCalculator = (string) => {
//   // Début de votre code
//   // Transformer la string en tableau
//   const elementsTab = string.split(" ");
//     //console.log(elementsTab);
//     //Stocker la valeur isNaN avant la boucle
//     let numbersToCalculate = [];
//   // Création d'une boucle sur le tableau
//   for (let i = 0; i < elementsTab.length; i++) {
//     //console.log(elementsTab[i]); // "3" puis "4" puis "+"
//   // Déterminer si l'élément est un NaN (Not Is Number) cad un nombre ou pas.
//   // Donc si c'est false c'est un nombre.
//   if (isNaN(elementsTab[i]) === false){ // la valeur est stocker dans la variable numbersToCalculate
//       // Si oui, le transformer en chiffre et le stocker dans numbersToCalculate.push
//       numbersToCalculate.push(parseInt(elementsTab[i]));  
//   } else { // SINON 
//     const firstNumber = numbersToCalculate[0];
//     const secondNumber = numbersToCalculate[1];
//   // Si non, effectuer une opération selon l'opérateur trouvé :
//   // passer en revue les opérateurs possibles : avec des if/else if
//     let result;  
//     if (elementsTab[i] === "+") {
//       result = firstNumber + secondNumber;
//     } else if (elementsTab[i] === "-") {
//       result = firstNumber - secondNumber;
//     } else if (elementsTab[i] === "*") {
//       result = firstNumber * secondNumber;
//     } else if (elementsTab[i] === "/") {
//       result = firstNumber / secondNumber;
//   }
//     // console.log(result);
//     // NE PAS OUBLIER de vider le tableau pour y mettre ensuite le prochain chiffre
//     numbersToCalculate = [result];
//     }
//   }
//   //console.log( numbersToCalculate);
  
//   return numbersToCalculate[0];

  
//   // Fin de votre code
//   };
  
  
//   console.log(rpnCalculator("3 4 +")); // Affiche : 7
//   console.log(rpnCalculator("5 2 * 8 + 4 /")); // Affiche : 4.5



// Méthode 2 :
const rpnCalculator = (string) => {

    // Début de votre code
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b / a
  };
  
  const elements = string.split(' ');
  const array = [];

  elements.forEach((elements) => {
    const operator = operators[elements];
    if (typeof operator === 'function') {
      const a = array.pop();
      const b = array.pop();
      const result = operator(a, b);
      array.push(result);
    } else {
      array.push(parseFloat(elements));
    }
  });
  
  return array.pop();

// Fin de votre code
}

console.log(rpnCalculator("3 4 +")); // Affiche 7
console.log(rpnCalculator("5 2 * 8 + 4 /")); // Affiche 4.5
console.log(rpnCalculator("10 5 + 3 *")); // Affiche 45


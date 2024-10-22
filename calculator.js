  // Méthode 1 : Performance + sécurité
  const calculator = (num1, operator, num2) => {
    
    // Vérification que num1 et num2 sont des nombres entiers 
    // ATTENTION pas de parenthèse entre && et le second Number.isInterger 
    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {

    let total;
    // SI l'opérateur est "+", alors on additionne
    if (operator === "+") {
      total = num1 + num2;
    // SINON SI l'opérateur est "*", alors on multiplie
    } else if (operator === "-") {
      total = num1 - num2;
    } else if (operator === "*") {
      total = num1 * num2;
    } else if (operator === "/") {
      total = num1 / num2;
    } else if (operator === "%") {
      total = num1 % num2;
    } 
      return total;
   } else {

      return "ERROR"
    }

    };

  console.log(calculator(5, "+", 4)); // Affichera : 9
  console.log(calculator(9, "*", 2)); // Affichera : 18
  console.log(calculator(11, "-", 4)); // Affichera : 7
  console.log(calculator(-1, "*", 4)); // Affichera : -4
  console.log(calculator(10.1, "-", 2)); // Affichera : ERROR
  console.log(calculator(8)); // Affichera : ERROR
  
  
  // Méthode 2 :  

// const calculator = (num1, operator, num2) => {
  // Vérifions les paramètres
    // if (
    //     typeof num1 !== "number" ||
    //     typeof num2 !== "number" ||
    //     typeof operator !== "string"
    //   ) {
    //     return "ERROR";
    //   }
    
      // Vérifions si les deux nombres sont entiers
      // if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
      //   return "ERROR";
      // }
    
      // Effectuons l'opération arithmétique demandée
//       switch (operator) {
//         case "+":
//           return num1 + num2;
//         case "-":
//           return num1 - num2;
//         case "*":
//           return num1 * num2;
//         case "/":
//           return num1 / num2;
//         case "%":
//           return num1 % num2;
//         default:
//           return "ERROR";
//       }
//     }

// console.log(calculator(5, "+", 4)); // Affichera : 9
// console.log(calculator(9, "*", 2)); // Affichera : 18
// console.log(calculator(11, "-", 4)); // Affichera : 7
// console.log(calculator(-1, "*", 4)); // Affichera : -4
// console.log(calculator(10.1, "-", 2)); // Affichera : ERROR
// console.log(calculator(8)); // Affichera : ERROR

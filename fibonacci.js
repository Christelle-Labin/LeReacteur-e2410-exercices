// Vous devez créer une fonction generateFibonacciSequence qui prend un nombre en argument. 
// Cette fonction doit générer la suite de Fibonacci jusqu'à ce nombre et la renvoyer sous forme de tableau.

// La suite de Fibonacci est une série de nombres dans laquelle chaque nombre est la somme des deux précédents. 
// La suite commence par 0 et 1. Nous limiterons les arguments de notre fonction : minimum 0, maximum 100.

const generateFibonacciSequence = (num) => {
  // Début de votre code
  const result = [0];
  if (num === 0) {
    return result; 
}

// boucle while car on fait varier [i] différemment selon le tour de notre boucle
// cad que la boucle continue tant que [i] est inférieur à num
//déclaration de i
let i = 1;
while (i < num) {
  // à chaque tour, on push i dans le tableau result,
  result.push(i);
  // puis on lui ajoute la valeur de l'élément précédent
  i = i + result[result.length - 2];
  
  }
  return result;

    
  // Fin de votre code
};

console.log(generateFibonacciSequence(10)); // Résultat attendu : [0, 1, 1, 2, 3, 5, 8]
console.log(generateFibonacciSequence(100)); // Résultat attendu : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

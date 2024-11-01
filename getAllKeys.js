// Ecrivez une fonction getObjectKeys qui prend un objet en argument 
// et retourne un tableau contenant toutes les clés de l'objet.

const getObjectKeys = (obj) => {

// Début de votre code

return Object.keys(user);

// Fin de votre code
};

const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(getObjectKeys(user)); // ['name', 'age', 'city']
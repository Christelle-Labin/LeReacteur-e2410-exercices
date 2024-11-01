// Ecrivez une fonction getObjectValues qui prend un objet en argument 
// et retourne un tableau contenant toutes les valeurs de l'objet.

const getObjectValues = (obj) => {
 // Début de votre code
 return Object.values(user);

 // Fin de code
};


const user = {
  name: 'Emily',
  age: 25,
  city: 'Paris'
};

console.log(getObjectValues(user)); // ['Emily', 25, 'Paris']

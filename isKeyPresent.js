// Ecrivez une fonction isKeyInObject qui prend un objet et une clé en arguments 
// et retourne true si la clé est présente dans l'objet, false sinon.

// // Méthode 1 :
const isKeyInObject = (obj, str) => {
    // Début de votre code
const keys = Object.keys(obj);
//console.log(keys);

return keys.indexOf(str) !== -1;

    // Fin de votre code
   };
   
   const user = {
     name: 'John',
     age: 19,
     city: 'Londres'
   };
   
   console.log(isKeyInObject(user, 'name')); // true
   console.log(isKeyInObject(user, 'job')); // false

// Méthode 2 :
// const isKeyInObject = (obj, str) => {
//   // Début de votre code
// const keys = Object.keys(obj);
// //console.log(keys); // [ 'name', 'age', 'city' ]
// // regarder si "str" est présent dans le tableau
// for (let i = 0; i < keys.length; i++) {
// if (keys[i] === str) {
// return true;  
// }  
// }
// return false;
//   // Fin de votre code
//  };
 
//  const user = {
//    name: 'John',
//    age: 19,
//    city: 'Londres'
//  };
 
//  console.log(isKeyInObject(user, 'name')); // true
//  console.log(isKeyInObject(user, 'job')); // false
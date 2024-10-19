const email = "nono@lereacteur.io";
let valid = false;

// début de votre code
// si l'email contient bien un @ et un .
if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
  // si un . est bien situé après le @ : on utilise le deuxième argument de indexOf pour vérifier si le caractère est bien présent APRES l'index du @ :
  if (email.indexOf(".", email.indexOf("@")) !== -1) {
    valid = true;
  }
}
// fin de votre code

console.log(valid);
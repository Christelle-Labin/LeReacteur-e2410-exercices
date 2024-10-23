const caughtCold = (string) => {
    // Début de votre code
    // Création d'une boucle afin de parcourir la chaine de base
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    //console.log(string[i]);
  if (string[i] === "m" || string[i] === "p" || string[i] === "v") {
    if (string[i].toUpperCase() === string[i]) {
        // alors c'est une majuscule
        newStr += "B";
      } else {
        // sinon c'est une minuscule
        newStr += "b";
      }
    } else if (string[i] === "c") {
      if (string[i].toUpperCase() === string[i]) {
        newStr += "G";
      } else {
        newStr += "g";
      }
    } else if (string[i] === "t") {
      if (string[i].toUpperCase() === string[i]) {
        newStr += "D";
      } else {
        newStr += "d";
      }
    } else {
        newStr = newStr + string[i];
    }
  }

    return newStr;
    // Fin de votre code
  };
  
  console.log(caughtCold("Je crois que j'ai attrapé froid")); // doit afficher `Je grois que j'ai addrabé froid`
  console.log(caughtCold("Je veux devenir développeur")); // doit afficher `Je beux debenir débellobbeur`
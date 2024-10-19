const email = "nono@lereacteur.io";

let valid = false;

// début de votre code
let emailPlace = email.indexOf("@");
//console.log(emailPlace);

let emailPoint = email.indexOf(".");
//console.log(emailPoint);


if (emailPoint > emailPlace) {
    console.log(true);    
} else {

// fin de votre code
    console.log(valid);
}
const year = 2020;

// Début de votre code
if (year % 100 === 0) {
    console.log("L'année 2020 n'est pas bissextile");
} else if (year % 4 === 0) {
    console.log("L'année 2020 est bissextile");
} else if (year % 400 === 0) {
    console.log("L'année 2020 est bissextile");
}
// Fin de votre code
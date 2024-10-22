const timeLived = (num) => {
    
    // Début de votre  code
    // La fonction n'accepte que les nombres entiers en argument donc ajout de isInteger(value === false)  :
    if (Number.isInteger(num)=== false) {
        return "Veuillez transmettre un nombre entier !";
      }else{
    
      // Calculons le nombre de jours, d'heures et de minutes vécus
      const days = num * 365;
      const hours = days * 24;
      const minutes = hours * 60;
    
      // Retournons les résultats sous chaîne de caractères :
      return `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}`;
    }
    // Fin de votre code
}

console.log(timeLived(30)); //Devra afficher : "Days: 10950, Hours: 262800, Minutes: 15768000"
console.log(timeLived(37.5)); //Devra afficher : "Veuillez transmettre un nombre entier !"

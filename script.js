// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let choix =""
let score = 0


while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("tapez : mots ou  phrases  :")
}

   if(choix === "mots"){
        for( let i =0; i < listeMots.length; i++){
            let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
            if (motUtilisateur === listeMots[i]){
        score++
    }
    }}else {
         for( let i =0; i < listePhrases.length; i++){
            let motUtilisateur = prompt('Entrez la phrase : ' + listePhrases[i])
        if (motUtilisateur === listePhrases[i]){
        score++
        }   
    }
    }

console.log("Votre score est de " + score + " sur 3")
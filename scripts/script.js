//affiche le résultat du joueur
function afficherResultat(score,nbMotsPoposes){
    console.log("Votre score est de " + score + " sur " + nbMotsPoposes)
}


/*cette fonction demande à l’utilisateur s’il veut jouer 
avec des phrases ou des mots*/

function choisirPhrasesOuMots(){
    //tant que l'utilisateur n'a pas choisi entre mots et phrases, on lui demande de faire un choix
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

/*la boucle for qui propose les mots/phrases au joueur*/

function lancerBoucleDeJeu(listePropositions){
    let score = 0
    for( let i = 0; i < listePropositions.length; i++){
        let motUtilisateur = prompt("Entrez les mots/phrases : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]){
            score++
        }
    }
    return score
}

/* cette fonction sera la fonction principale, 
c’est elle qui s’occupe de lancer toutes les autres
*/
function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsPoposes = 0

    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsPoposes = listeMots.length
    }else{
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsPoposes = listePhrases.length
    }

    afficherResultat(score,nbMotsPoposes)
}
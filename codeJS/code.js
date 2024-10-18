//ex3
// Fes un programa que permeti realitzar la conversió entre temperatures de 
// ºC a ºF  i de ºF a ºC, d’acord amb la següent fórmula: ºF = (9.0/5.0)* (ºC)+32. 

//El programa ha de demanar a l’usuari quina conversió ha de fer (“C” o “F”) i la temperatura que es vol convertir.

let lletraConversió = prompt("Introdueix una lletra per la conversió de: ºC a ºF o de ºF a ºC");

if (lletraConversió == 'F' || lletraConversió == 'C'){
    if(lletraConversió == 'F'){
        console.log("Conversió de Celsius a Fahrenheit")
        let grausC = prompt("Introdueix la temperatura en graus celsius: ");

        //Conversió per la lletra F
        let F = (9.0/5.0)* (grausC)+32
        let resultatF = `Resultat: ${F}`;
        alert(resultatF)
    }
    if(lletraConversió=='C'){
        console.log("Conversió de Fahrenheit a Celsius")
        let grausF = prompt("Introdueix la temperatura en graus Fahrenheit: ");
        
        //Conversió
        let C = (5.0 / 9.0) * ( grausF - 32);
        let resultatC = `Resultat: ${C}`
        alert(resultatC)
    }
}
else{
    alert("ERROR, introdueix una lletra vàlida per la conversió (C o F)")
}
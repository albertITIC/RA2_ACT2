//ex5
//Fes un programa que demani a l’usuari un número de 5 dígits,
//comprovi que s’ha afegit correctament els 5 dígits i informi 
//si aquest número comença i acaba amb el mateix valor.

let num = prompt("Introdueix un número de 5 digits: ")

if (num) {
    if (num.length === 5) {
        const numeroValid = Number(num)
        
        if (!isNaN(numeroValid)) {
            console.log("La cadena de número s'ha passat a: ", typeof numeroValid)

            if(num[0]===num[4]){
                console.log("El primer número i l'últim coinicideixen")
            }
            else{
                console.log("El primer número i l'últim no coinicideixen")
            }
        }
        else {
            alert("ERROR. Has d'introduïr un número.")
        }
    }
    else {
        alert("ERROR. Has d'introduïr un número de 5 xifres.")
    }

    //Comprovo que sigui un número


}
else {
    alert("ERROR. Introdueix un valor vàlid.")
}
//ex1
//Identificar si el número introduït per l’usuari és un número:

let valor = prompt("Introdueix un número: ")

//Comprovem que hagi escrit un valor
if(valor){
    //Fem que valor sigui un número
    const num = Number(valor)

    //Variable que mostrarà infomració per pantalla 
    text=""

    //Comproba que numero no sigui un número
    text = isNaN(num) ? "No és un número" : "És un número"

}
//Si no, notifiquem al usuari que no ha introduït res per el input
else{
    alert("Error, no has introduït cap valor")
}
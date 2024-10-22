//ex2
// Fes un programa que demani un valor a l’usuari i indiqui si el valor
// és un enter o un decimal.*

let num = prompt("Introdeuix un número: ")

//S'ha de passar a número (si no ho agafa com a String)
num = Number(num);

//Comprovar si el número és un número
if (!isNaN(num)) {
    if(Number.isInteger(num)){
        console.log("El número introduït és un enter")
    }
    else{
        console.log("És un decimal")
    }
}
else{
    alert("Error, has d'introduïr un número vàlid.")
}
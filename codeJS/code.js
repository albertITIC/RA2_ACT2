//ex2
//Fes un programa que demani un valor a l’usuari i indiqui si el valor és un número.
//Fes servir l’operador ternari per mostrar la informació.*

let valor = prompt("Introdeuix un número: ")

//Si valor == true, és a dir, si introdueix un valor:
if (valor) {
    //Convertim el valor a número (si pot)
    const num = Number(valor);

    //Variable que mostrarem per pantalla
    let text = "";

    //Comproba que no sigui un number --> isNaN (is Not a Number)
    text = isNaN(num) ? "No és un número" : "És un número"
    
    //Imprimir per pantalla
    alert(text)
}
else{
    alert("Error, has d'introduïr mínim un valor.")
}
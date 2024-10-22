//ex4
// Fes un programa que demani a l’usuari el temps total 
// d’una trucada demanant primer els minuts i després els segons.

// Mostreu l’import sense IVA i calculant l’IVA (21%) sabent que la 
// companyia telefònica cobra 10 cèntims per establir una connexió telefònica i a
// partir d’aquest moment, 5 cèntims per minut tarificant per segons.

//Demano al usuari els valors inicials
let minuts = prompt("Introdueix els minuts total: ");
let segons = prompt("Introdueix els segons total: ");

//Centims que s'afegeixen per quan s'inicia una trucada telefónica
let iniciTrucada = 10;

//Centims per minut
let cMinut = 5;

//Passem minunts i segons a number (int)
minuts = Number(minuts)
segons = Number(segons)

//Calcular preu sense IVA
//comprovem que hagi posat algun tipus de valor dins de minutos o segons
if(minuts || segons){
    calcularMinuts = iniciTrucada + (cMinut * minuts);
    //calcular els segons
    calculcarSegons = calcularMinuts + segons;
    //Variable per guardar el total i aplicar-li després l'IVA
    preuSenseIVA = calculcarSegons;
    preuAmbIVA = preuSenseIVA*1.21;

    console.log("Total preu sense IVA: ", preuSenseIVA);
    console.log("Total preu amb IVA: ", preuAmbIVA);
}
else{
    alert("Introdueix uns valors vàlids")
}
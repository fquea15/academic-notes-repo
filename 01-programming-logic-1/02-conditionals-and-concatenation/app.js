let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

/*
Este Codigo realiza
la comparacion
 */
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    //La condicion no se complio..
    alert('Lo siento, no acertaste el numero');
}
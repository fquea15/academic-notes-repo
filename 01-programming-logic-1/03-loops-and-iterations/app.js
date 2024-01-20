let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    
    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //incremenatmos el contador
        intentos += 1;
        palabraVeces = 'veces'
        //La condicion no se complio..
        //alert('Lo siento, no acertaste el numero');
    }
}
//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
    
    console.log(typeof(numeroUsuario));
    
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //incremenatmos el contador
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos `);
            break;
        }
        //La condicion no se complio..
        //alert('Lo siento, no acertaste el numero');
    }
}
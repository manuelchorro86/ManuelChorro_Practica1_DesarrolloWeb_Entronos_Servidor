const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetra(numero) {
    let i = numero%23;
    return letras[i];
}

let numero, letra;

numero = parseInt(prompt('Dame el número de DNI (sin la letra): '));
letra = prompt('Dame la letra de tu DNI: ');

while( numero < 0 || numero > 99999999 ) {
    numero = parseInt(prompt('Dame tu número de DNI: '));
}

if( calcularLetra(numero) === letra ) {
    console.log('DNI correcto'); 
} else {
    console.log('DNI incorrecto');
}

console.log('Tu DNI es ' + numero + calcularLetra(numero));
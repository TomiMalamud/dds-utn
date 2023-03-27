function ej1(año) {

    (año % 4 == 0 && año % 100 !== 0 || año % 400 == 0) ? console.log(`${año} es año bisiesto`) : console.log('No es bisiesto');
}


//ej 2
function palabraMasLarga(texto) {
    let str = texto.split(" ");
    let max_long = 0;
    let palabra = null;
    for (let i = 0; i < str.length; i++) {
        if (max_long < str[i].length) {
            max_long = str[i].length;
            palabra = str[i];
        }
    }
    return palabra;
}

const texto = "Errar es humano";
const textoDividido = texto.split(" ");
// Acá valido que no haya sólo una palabra. Si la hay, toma el largo de esa palabra y no divide el texto por espacios.
const marco = (textoDividido.length > 1) ? '*'.repeat(palabraMasLarga(texto).length + 4) : '*'.repeat(texto.length + 4)

console.log(marco);

for (let i = 0; i < textoDividido.length; i++) {
    console.log(`* ${textoDividido[i].padEnd(marco.length - 4, ' ')} *`)
}

console.log(marco)

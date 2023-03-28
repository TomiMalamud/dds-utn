/*
Práctica 3.1: Se ha solicitado un script que permita cargar las precipitaciones promedio en cada mes
del país (en nuestro caso serán generadas de manea aleatorias con valores comprendidos entre
[15;35]º), en base a esos datos determinar:

el promedio anual de lluvias
el promedio de lluvias para el segundo semestre del año
el mes más seco del año Práctica 3.1.js
*/

Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const precipitaciones = [];

for (let i = 0; i < Meses.length; i++) {
    precipitaciones.push(Math.floor(Math.random() * 20) + 15);

};
console.log(precipitaciones)

function average(precipitaciones) {
    var total = 0;
    for (var i = 0; i < precipitaciones.length; i++) {
        total += precipitaciones[i];
    }
    var avg = total / precipitaciones.length;
    return avg
}

console.log(average(precipitaciones));

precipitaciones2sem = precipitaciones.slice(6);

console.log(average(precipitaciones2sem))

let menor = precipitaciones[0];
let nombre = 0;
for (var i = 0; i < precipitaciones.length; i++) {
    if (precipitaciones[i] < menor) {
        menor = precipitaciones[i]
        nombre = i
    }
}

console.log(Meses[nombre])

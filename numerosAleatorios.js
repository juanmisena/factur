//Ejercicio 1
let tirada;
let suma = 0;
alert('Tirada de tres dados: ');
for (let i = 0; i < 3; i++) {
    tirada = (Math.random() * 6) + 1;
    document.write(tirada + ' ');
    suma += tirada;
}
document.write('<br>' + suma + ' ');
//Ejercicio 1
// let tirada;
// let suma = 0;
// alert('Tirada de tres dados: ');
// for (let i = 0; i < 3; i++) {
//     tirada = (Math.round(Math.random() * 6)) + 1;
//     document.write(tirada + ' ');
//     suma += tirada;
// }
// document.write(' ' + suma + ' ');

//Ejercicio 2
// let palo = '';
// let carta = '';
// let numeroPalo = (Math.round(Math.random()*4)) + 1;
// switch (numeroPalo) {
//     case 1:
//         palo = 'picas';
//         break;
//     case 2:
//         palo = 'corazones';
//         break;
//     case 3:
//         palo = 'diamantes';
//         break;
//     case 4:
//         palo = 'tréboles';
//         break;
//     default:
// }
// let numeroCarta = (Math.round(Math.random()*13)) + 1;
// switch (numeroCarta) {
//     case 1:
//         carta = 'As';
//         break;
//     case 11:
//         carta = 'J';
//         break;
//     case 12:
//         carta = 'Q';
//         break;
//     case 13:
//         carta = 'K';
//         break;
//     default:
//         carta = String(numeroCarta);
//         break;
// }
// document.write(carta + ' de ' + palo + '<br>');

//Ejercicio 3
// let palo = '';
// let carta = '';
// switch (Math.round(Math.random()*4)) {
//     case 0:
//         palo = 'oros';
//         break;
//     case 1:
//         palo = 'copas';
//         break;
//     case 2:
//         palo = 'bastos';
//         break;
//     case 3:
//         palo = 'espadas';
//         break;
//     default:
//         break;
// }
// let numeroCarta = Math.round(Math.random()*11) + 1;
// switch (numeroCarta) {
//     case 1:
//         carta = 'As';
//         break;
//     case 8:
//         carta = 'Sota'
//         break;
//     case 9:
//         carta = 'Caballo';
//         break;
//     case 10:
//         carta = 'Rey';
//         break;
//     default:
//         carta = String(numeroCarta);
//         break;
// }
// document.write(carta + ' de ' + palo);
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

//Ejercicio 4
// for (let i = 0; i < 20; i++) {
//     document.write(Math.round(Math.random()*11) + ' ');
// }
// document.write('<br>');

//Ejercicio 5
// let maximo = 100
// let minimo = 199
// let suma = 0;
// let n;
// for (let i = 0; i < 50; i++) {
//     n = Math.round(Math.random()*100) + 100;
//     document.write(n + ' ');
//     suma += n;
//     if (n < minimo) {
//         minimo = n;
//     }
//     if (n > maximo) {
//         maximo = n;
//     }
// }
// document.write('<br><br>\nMínimo: '+ minimo + '\nMáximo: ' + maximo + '\nMedia: ' + suma / 50);

//Ejercicio 6
// let oportunidades = 5;
// let numeroIntroducido;
// let acertado = false;
// let numeroMisterioso = Math.round(Math.random()*101);
// alert('Estoy pensando un número del 0 al 100, intenta adivinarlo. Tienes 5 oportunidades.');
// do {
//     numeroIntroducido = parseInt(prompt('Introduce un número: '));
//     oportunidades--;
//     if ((numeroIntroducido > numeroMisterioso) && (oportunidades > 0)) {
//         document.write('El número que estoy pensando es menor que ' + numeroIntroducido + '<br>');
//         console.log('Te quedan ' + oportunidades + ' oportunidades');
//     }
//     if (numeroIntroducido == numeroMisterioso) {
//         acertado = true;
//         document.write('¡Enhorabuena! ¡has acertado!');
//     }
// } while (!acertado && (oportunidades > 0));
// if (!acertado) {
//     document.write('Lo siento, no has acertado, el número que estaba pensando era el ' + numeroMisterioso + '<br>');
// }

//Ejercicio 7
// let resultadoPartido;
// let columnas = 3;
// for (let fila = 1; fila <=14; fila++) {
//     document.write('%4d. |', fila);
//     for (let apuesta = 1; apuesta < columnas; apuesta++) {
//         resultadoPartido = Math.round(Math.random()*3) + 1;
//         switch (resultadoPartido) {
//             case 1:
//                 document.write('1  |');
//                 break;
//             case 2:
//                 document.write('  2|');
//                 break;
//             case 3:
//                 document.write(' X |');
//             default:
//                 break;
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');
// // Pleno al 15
// document.write('\nPLENO AL 15 - Local...');
// document.write('<br>');
// let goles = Math.round(Math.random()*4);
// document.write('<br>');
// document.write(goles < 3 ? goles : 'M');
// document.write('<br>');
// document.write('   Visitante...');
// document.write('<br>');
// goles = Math.round(Math.random()*4);
// document.write('<br>');
// document.write(goles < 3 ? goles : 'M');

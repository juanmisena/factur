//Ejercicio 1
// var num = new Array(5);
// num[0] = 39;
// num[1] = -2;
// num[4] = 0;
// num[6] = 14;
// num[8] = 5;
// num[9] = 120;
// console.log(num);
// for (let i = 0; i < 12; i++) {
//     console.log('num[%2d]: %d\n', i, num[i]);
// }

//Ejercicio 2
// var simbolo = new Array('10');
// simbolo[0] = 'a';
// simbolo[1] = 'x';
// simbolo[4] = '@';
// simbolo[6] = ' ';
// simbolo[7] = '+';
// simbolo[8] = 'Q';
// for(let i = 0; i < 10; i++) {
//   console.log('simbolo[' + i + ']: ' + simbolo[i]);
// }

//Ejercicio 3
// var n = new Array(10);
// alert('Pulse la tecla INTRO después de introducir cada número.');
// for(let i = 0; i < 10; i++){
// n[i] = parseInt(prompt('Por favor, introduzca 10 números enteros'));
// }
// console.log('\nLos números introducidos, al revés, son los siguientes:');
// for(let i = 9; i >= 0; i--) {
//   console.log(n[i]);
// }

// Ejercicio 4
// let numero = new Array(20);
// let cuadrado = new Array(20);
// let cubo = new Array(20);
// let i;
// for (i = 0; i < 20; i++) {
//   numero[i] = Math.round(Math.random() * 101);
//   cuadrado[i] = Math.pow(numero[i], 2);
//   cubo[i] = Math.pow(numero[i], 3);
// }
// document.write(
//   "\nA continuación se muestran en tres columnas, un número aleatorio entre 0 y 100, su cuadrado y su cubo:\n"
// );
// document.write("  n  │   n²  │    n³\n─────┼───────┼─────────");
// for (i = 0; i < 20; i++) {
//   document.write(
//     "%4d │ %5d │%8d\n<br>",
//     numero[i],
//     "<br>",
//     cuadrado[i],
//     "<br>",
//     cubo[i],
//     "<br>",
//     "<br>"
//   );
// }

// Ejercicio 5
// let simbolo = new Array("10");
// simbolo[0] = "a";
// simbolo[1] = "x";
// simbolo[4] = "@";
// simbolo[6] = " ";
// simbolo[7] = "+";
// simbolo[8] = "Q";
// for (let i = 0; i < simbolo.length; i++) {
//   document.write("simbolo[" + i + "]: " + simbolo[i] + "<br>");
// }

// Ejercicio 6
// let numero = new Array(15);
// for (let i = 0; i < numero.length; i++) {
//   numero[i] = parseInt(
//     prompt("Vaya introduciendo números enteros y pulsando INTRO:")
//   );
// }
// document.write("<br>");
// // Muestra el array original ///////////////
// document.write("Array original: <br>");
// for (let i = 0; i < numero.length; i++) {
//   document.write("|%3d ", i, "<br>");
// }
// document.write("|<br>");
// for (let i = 0; i < 75; i++) {
//   document.write("⎯");
// }
// document.write("⎯<br>");
// for (let i = 0; i < numero.length; i++) {
//   document.write("|%3d ", numero[i], "<br>");
// }
// document.write("|<br>");
// ////////////////////////////////////////////
// // rota una posición a la derecha //////////
// let aux = numero[14];
// for (let i = 14; i > 0; i--) {
//   numero[i] = numero[i - 1];
// }
// numero[0] = aux;
// ////////////////////////////////////////////
// // Muestra el array rotado /////////////////
// document.write("\nArray rotado a la derecha una posición: <br>");
// for (let i = 0; i < numero.length; i++) {
//   document.write("|%3d ", i, "<br>");
// }
// document.write("|<br>");
// for (let i = 0; i < 75; i++) {
//   document.write("⎯");
// }
// document.write("⎯<br>");
// for (let i = 0; i < numero.length; i++) {
//   document.write("|%3d ", numero[i], "<br>");
// }
// document.write("|<br>");
// ////////////////////////////////////////////

// Ejercicio 7
// let numero = new Array(100);
// let verde = "033[32m";
// let blanco = "033[37m";
// // Rellena el array con números aleatorios
// for (let i = 0; i < numero.length; i++) {
//   numero[i] = Math.round(Math.random() * 21);
//   document.write(numero[i] + " ");
// }
// let valor1 = parseInt(
//   prompt("\nIntroduzca un número de los que se han mostrado: ")
// );
// let valor2 = parseInt(
//   prompt("Introduzca el valor por el que quiere sustituirlo: ")
// );
// document.write("<br>");
// for (let i = 0; i < numero.length; i++) {
//   if (numero[i] == valor1) {
//     numero[i] = valor2;
//     document.write(verde + '"' + numero[i] + '" <br>');
//   } else {
//     document.write(blanco + numero[i] + " <br>");
//   }
// }

// Ejercicio 8
// let mes = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre"
// ];
// let temperatura = new Array(12);
// let verde = '"033[32m';
// let naranja = '"033[33m';
// let azul = '"033[34m';
// let morado = '"033[35m';
// let blanco = '"033[32m';
// for (let i = 0; i < temperatura.length; i++) {
//   temperatura[i] = parseInt(
//     prompt("Introduzca la temperatura media de " + mes[i] + ": ")
//   );
// }
// for (let i = 0; i < temperatura.length; i++) {
//   document.write(azul + "%12s " + verde + "│", mes[i], "<br>");
//   for (let j = 0; j < temperatura[i]; j++) {
//     document.write(morado + "▄<br>");
//   }
//   document.write(naranja + " " + temperatura[i] + "ºC" + blanco + "<br>");
// }

// Ejercicio 9
// let numero = new Array(8);
// for (let i = 0; i < numero.length; i++) {
//   numero[i] = parseInt(
//     prompt("Introduzca 8 números enteros, pulse INTRO después de cada número:")
//   );
// }
// for (let i = 0; i < numero.length; i++) {
//   if (numero[i] % 2 == 0) {
//     document.write(numero[i] + " par<br>");
//   } else {
//     document.write(numero[i] + " impar<br>");
//   }
// }

// Ejercicio 10
// let n = new Array(20);
// let par = new Array(20);
// let impar = new Array(20);
// let pares = 0;
// let impares = 0;
// for (let i = 0; i < 20; i++) {
//   n[i] = Math.round(Math.random() * 101);
//   // Separa los números metiendo los pares en un array
//   // y los impares en otro.
//   if (n[i] % 2 == 0) {
//     par[pares++] = n[i];
//   } else {
//     impar[impares++] = n[i];
//   }
// }
// // Muestra el array original
// document.write("Array original:<br>");
// for (let i = 0; i < 20; i++) {
//   document.write(n[i] + " <br>");
// }
// document.write("<br>");
// // Mete los pares en las primeras posiciones
// // del array original.
// for (let i = 0; i < pares; i++) {
//   n[i] = par[i];
// }
// // Mete los impares en los huecos que quedan.
// for (let i = pares; i < 20; i++) {
//   n[i] = impar[i - impares];
// }
// // Muestra el resultado.
// document.write("Array con los pares al principio:<br>");
// for (let i = 0; i < 20; i++) {
//   document.write(n[i] + " <br>");
// }

// Ejercicio 11
// let n = new Array(10);
// let primo = new Array(10);
// let noPrimo = new Array(10);
// let primos = 0;
// let noPrimos = 0;
// let esPrimo = false;
// for (let i = 0; i < 10; i++) {
//   n[i] = parseInt(prompt("Introduzca 10 números separados por INTRO:"));
//   // Comprueba si el número es o no primo.
//   esPrimo = true;
//   for (let j = 2; j < n[i] - 1; j++) {
//     if (n[i] % j == 0) {
//       esPrimo = false;
//     }
//   }
//   // Si el número es primo, se mete en un array y si
//   // no es primo, se mete en otro diferente.
//   if (esPrimo) {
//     primo[primos++] = n[i];
//   } else {
//     noPrimo[noPrimos++] = n[i];
//   }
// }
// // Muestra el array original
// document.write("\n\nArray original:<br>");
// document.write(
//   "\n┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐<br>"
// );
// document.write("│ Índice <br>");
// for (let i = 0; i < 10; i++) {
//   document.write("│%4d ", i, "<br>");
// }
// document.write(
//   "│\n├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤<br>"
// );
// document.write("│ Valor  <br>");
// for (let i = 0; i < 10; i++) {
//   document.write("│%4d ", n[i], "<br>");
// }
// document.write(
//   "│\n└────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘<br>"
// );
// // Los números primos se menten en las primeras
// // posiciones del array original.
// for (let i = 0; i < primos; i++) {
//   n[i] = primo[i];
// }
// // Los números que no son primos se colocan al final.
// for (let i = primos; i < primos + noPrimos; i++) {
//   n[i] = noPrimo[i - primos];
// }
// // Muestra el resultado.
// document.write("\n\nArray con los primos al principio:<br>");
// document.write(
//   "\n┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐<br>"
// );
// document.write("│ Índice <br>");
// for (let i = 0; i < 10; i++) {
//   document.write("│%4d ", i, "<br>");
// }
// document.write(
//   "│\n├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤<br>"
// );
// document.write("│ Valor  <br>");
// for (let i = 0; i < 10; i++) {
//   document.write("│%4d ", n[i], "<br>");
// }
// document.write(
//   "│\n└────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘<br>"
// );

// Ejercicio 12
// let n = new Array(10),
// resultado = new Array(10);
// let nInicial, nFinal, valido;
// for (let i = 0; i < 10; i++) {
// n[i] = parseInt(prompt("Introduzca 10 números separados por INTRO:"));
// }
// // Muestra el array original.
// document.write("\n\nArray original:");
// document.write(
// "\n┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐"
// );
// document.write("│ Índice ");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", i, "<br>");
// }
// document.write(
// "│\n├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤"
// );
// document.write("│ Valor  ");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", n[i], "<br>");
// }
// document.write(
// "│\n└────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘"
// );
// // Pide las posiciones inicial y final.
// do {
// valido = true;
// nInicial = parseInt(prompt("Introduzca la posición inicial (0 - 9): "));
// if (nInicial < 0 || nInicial > 9) {
//   document.write(
//     "Valor incorrecto, debe ser un número entre el 0 y el 9."
//   );
//   valido = false;
// }
// nFinal = parseInt(prompt("Introduzca la posición final (0 - 9): "));
// if (nFinal < 0 || nFinal > 9) {
//   document.write(
//     "Valor incorrecto, debe ser un número entre el 0 y el 9."
//   );
//   valido = false;
// }
// if (nInicial >= nFinal) {
//   document.write(
//     "Valores incorrectos, la posición inicial debe ser menor que la posición final."
//   );
//   valido = false;
// }
// } while (!valido);
// // Muestra de nuevo el array original.
// document.write("\n\nArray original:");
// document.write(
// "\n┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐"
// );
// document.write("│ Índice ");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", i, "<br>");
// }
// document.write(
// "│\n├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤"
// );
// document.write("│ Valor  ");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", n[i], "<br>");
// }
// document.write(
// "│\n└────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘"
// );
// // Copia el array n en resultado.
// for (let i = 0; i < 10; i++) {
// resultado[i] = n[i];
// }
// resultado[nFinal] = resultado[nInicial];
// for (let i = nFinal + 1; i < 10; i++) {
// resultado[i] = n[i - 1];
// resultado[0] = n[9];
// }
// for (let i = 0; i < nInicial; i++) {
// resultado[i + 1] = n[i];
// }
// // Muestra el resultado.
// document.write("\nArray resultante:<br>");
// document.write(
// "\n┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐<br>"
// );
// document.write("│ Índice <br>");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", i, "<br>");
// }
// document.write(
// "│\n├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤"
// );
// document.write("│ Valor  ");
// for (let i = 0; i < 10; i++) {
// document.write("│%4d ", resultado[i], "<br>");
// }
// document.write(
// "│\n└────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘"
// );

// Ejercicio 13
// let n = new Array(100);
// let maximo = 0;
// let minimo = 100;
// // Genera los números y calcula el máximo y el mínimo
// for (let i = 0; i < 100; i++) {
//   n[i] = Math.round(Math.random() * 501);
//   if (n[i] < minimo) {
//     minimo = n[i];
//   }
//   if (n[i] > maximo) {
//     maximo = n[i];
//   }
// }
// // Muestra el array original
// n.forEach((element) => {
//   document.write(element + " <br>");
// });
// let opcion = parseInt(
//   prompt("\n\n¿Qué quiere destacar? (1 – mínimo, 2 – máximo): ")
// );
// let destacado; // número que se va a destacar del resto
// if (opcion == 1) {
//   destacado = minimo;
// } else {
//   destacado = maximo;
// }
// document.write("<br>");
// // número que se va a destacar del resto
// n.forEach((element) => {
//   if (element == destacado) {
//     document.write(" **" + element + "** <br>");
//   } else {
//     document.write(element + " <br>");
//   }
// });

// Ejercicio 14
// let color = [
//   "verde",
//   "rojo",
//   "azul",
//   "amarillo",
//   "naranja",
//   "rosa",
//   "negro ",
//   "blanco",
//   "morado"
// ];
// let palabra = new Array("8");
// let resultado = new Array("8");
// let j = 0;
// for (let i = 0; i < 8; i++) {
//   palabra[i] = prompt(
//     "Introduzca 8 palabras (vaya pulsando [INTRO] entre una y otra."
//   );
//   // Si la palabra introducida es un color, la guarda en el array resultado.
//   color.forEach((c) => {
//     if (palabra[i] == c) {
//       resultado[j++] = c;
//     }
//   });
// }
// // Mete las palabras que no son colores al final del array resultado.
// for (let i = 0; i < 8; i++) {
//   let esColor = false;
//   color.forEach((c) => {
//     if (palabra[i] == c) {
//       esColor = true;
//     }
//   });
//   if (!esColor) {
//     resultado[j++] = palabra[i];
//   }
// }
// document.write("\n\nArray original:");
// document.write(
//   "\n┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐<br>"
// );
// for (let i = 0; i < 8; i++) {
//   document.write("│   %d    ", i, "<br>");
// }
// document.write(
//   "│\n├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤<br>"
// );
// palabra.forEach((p) => {
//   document.write("│%-8s", p, "<br>");
// });
// document.write(
//   "│\n└────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘"
// );
// // Muestra el array resultado.
// document.write("\n\nArray resultado:");
// document.write(
//   "\n┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐<br>"
// );
// for (let i = 0; i < 8; i++) {
//   document.write("│   %d    ", i, "<br>");
// }
// document.write(
//   "│\n├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤<br>"
// );
// resultado.forEach((r) => {
//   document.write("│%-8s", r, "<br>");
// });
// document.write(
//   "│\n└────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘"
// );
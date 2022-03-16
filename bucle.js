/*
    Ejercicios de Bucles en Javascript
*/
//Ejercicio 1
// for (let i = 0; i <= 100; i++) {
//     var a = i*5;
//     console.log(a);
// }

//Ejercicio 2
// var i = 0;
// while(i<=100) {
//     var a = i*5;
//     console.log(a);
//     i++;
// }

//Ejercicio 3
// var i = 0;
// do {
//     var a = i*5;
//     console.log(a);
//     i++;
// } while (i<=100);

//Ejercicio 4
// for(let i=320; i>=160; i-=20) {
//     console.log(i);
// }


//Ejercicio 5
// var i = 320;
// while(i>=160) {
//     console.log(i);
//     i-=20;
// }

//Ejercicio 6
// var i = 320;
// do {
//     console.log(i);
//     i-=20;
// }while(i>=160)


//Ejercicio 7
// let intentos = 4;
// let numeroIntroduced;
// let acertado = false;
// do {
//     numeroIntroduced = parseInt(prompt('Introduzca la clave de la caja fuerte:'));
//     if (numeroIntroduced == 2417) {
//         acertado = true;
//     } else {
//         console.log("Clave Incorrenta");
//     }
//     intentos --;
// } while ((intentos > 0) && (!acertado));
// if (acertado) {
//     console.log("Se ha abierto la caja fuerte sucess");
// } else {
//     console.log("Lo siento se ha agotado las oportunidades");
// }

//Ejercicio 8
// var mostrar = document.getElementById("mostrar");
// mostrar.addEventListener("click", () => {
//     var inputNum = document.getElementById("inputNum");
//     var resultados = document.getElementById("resultados");
//     for (let i = 1; i <=10; i++) {
//         var operador = parseInt(inputNum.value) * parseInt(i);
//         resultados.innerHTML += `
//             <tr>
//                 <td>${inputNum.value}</td>
//                 <td>X</td>
//                 <td>${i}</td>
//                 <td>=</td>
//                 <td>${operador}</td>
//             </tr>
//         `;
//     }
// }, false);
// var refrescar = document.getElementById("refres");
// refrescar.addEventListener("click", function(e) {
//     var resultados = document.getElementById("resultados");
//     resultados.innerHTML = "";
// }, false);

// * 9. Realiza un programa que nos diga cuántos dígitos tiene un número introducido por teclado.

// var numerosDigitos = 1;
// var numeroIntroduced = parseInt(prompt("Introduzca un numero entero"));
// var n = numeroIntroduced;
// while (n > 10) {
//     n /= 10;
//     numerosDigitos ++;
// }
// console.log(numeroIntroduced+" tiene "+numerosDigitos+" digitos/s");

//Ejercicio  10. Escribe un programa que calcule la media de un conjunto de números
//  positivos introducidos por teclado. A priori, el programa no sabe     cuántos números se introducirán. El usuario indicará que ha terminado    de introducir los datos cuando meta un número negativo.

// let numeros = 0;
// let numerosIntroducido = 0;
// let suma = 0;
// console.log("Este programa calcula la media de los numeros positivos introducidos");

// while (numerosIntroducido >= 0) {
//     numerosIntroducido = parseFloat(prompt("Vaya introduciendo numeros (esto para cuando intruduzcas numero negativo)"));
//     numeros++;
//     suma += numerosIntroducido;
// }
// console.log("La media de los numeros introducidos es: "+(suma - numerosIntroducido) / (numeros - 1));

//Ejercicio 11. Escribe un programa que muestre en tres columnas, el cuadrado y
// el cubo de los 5 primeros números enteros a partir de uno que se
// introduce por teclado.

// let numeroIntroducido = parseInt(prompt("Introduzca un numero", 10));
// for (let i = numeroIntroducido; i < numeroIntroducido + 5; i++) {
//     console.log(i, Math .pow(i,2), Math.pow(i,3));
// }

//Ejercicio 12. Escribe un programa que muestre los n primeros términos de la
//  serie de Fibonacci. El primer término de la serie de Fibonacci
//  es 0, el segundo es 1 y el resto se calcula sumando los dos
//  anteriores, por lo que tendríamos que los términos son 0, 1, 1,
//  2, 3, 5, 8, 13, 21, 34, 55, 89, 144... El número n se debe
//  introducir por teclado.

// console.log("Este programa muestra los n primeros números de la serie de Fibonacci.");

// let n = parseInt(prompt("Por favor intruducir numero"));

// switch (n) {
//     case 1:
//         console.log("0");
//         break;
//     case 2:
//         console.log("1");
//         break;
//     default:
//         console.log("0 1");
//     let f1 = 0;
//     let f2 = 1;
//     let aux;
//     while (n > 2) {
//         aux = f1;
//         f1 = f2;
//         f2 = aux + f2;
//         console.log(" "+ f2);
//         n--;
//     }
// }
// console.log();

//Ejericio 13. Escribe un programa que lea una lista de diez números y determine cuántos son positivos, y cuántos son negativos.
// let negativos = 0;
// let positivos = 0;
// for (let i = 0; i < 10; i++) {
//     if (parseInt(prompt("por favor, introducir 10 numeros enteros")) < 0) {
//         negativos ++;
//     } else {
//         positivos ++;
//     }
// }
// console.log("Ha introducido : "+positivos+" positivos y "+negativos+" negativos");

//Ejercicio 14. Escribe un programa que pida una base y un exponente (entero positivo) y que calcule la potencia.
// console.log("Cálculo de una potencia");
// let base = parseInt(prompt("Introduzca la base"));
// let exponente = parseInt(prompt("introduzca el exponente :"));
// let potencia = 1;
// if (exponente == 0) {
//     potencia = 1;
// }
// if (exponente > 0) {
//     for (let i = 0; i < exponente; i++) {
//         potencia *= base;
//     }
// }
// if (exponente < 0) {
//     for (let i = 0; i < -exponente; i++) {
//         potencia *= base;
//     }
//     potencia = 1/potencia;
// }
// console.log(base+" ^ "+exponente+" = "+potencia);

/*Ejercicio 15. Escribe un programa que dados dos números, uno real (base) y un entero positivo (exponente), saque por pantalla todas las potencias
con base el numero dado y exponentes entre uno y el exponente introducido. No se deben utilizar funciones de exponenciación. Por ejemplo, si introducimos el 2 y el 5, se deberán mostrar 2¹, 2², 2³, 2⁴ y 2⁵. */
// let base = parseFloat(prompt("introduzca un numero real como base: "));
// let exponenteFinal = parseInt(prompt("introduzca un numero entero como exponente: "));
// let potencia;
// let exponente;
// for (let i = 1; i <= exponenteFinal; i++) {
//     potencia = 1;
//     exponente = i;
//     for (let j = 0; j < exponente; j++) {
//         potencia *= base;
//     }
//     console.log(base+" ^ "+i+" = "+potencia);
// }

//Ejercicio 16
// let numerosIntroducido = parseInt(prompt("Introduzca un número entero y le diré si es primo:"));
// let esPrimo = true;
// for (let i = 2; i < numerosIntroducido; i++) {
//     if ((numerosIntroducido % i) == 0) {
//         esPrimo = false;
//     }
// }

// if (esPrimo) {
//     console.log("El número introducido es primo");
// }else {
//     console.log("El número introducido no es primo");
// }

//Ejercicio 17
// let numeroIntroducido = 0;
// do {
//     numeroIntroducido = parseInt(prompt('Introduzca un número entero positivo:'));
//     if (numeroIntroducido < 0) {
//         console.log('El número introducido no es correcto, debe introducir un número positivo');
//     }
// } while (numeroIntroducido < 0);
// let suma = 0;
// for (let i = numeroIntroducido; i < numeroIntroducido + 100; i++) {
//     suma+=i;
// }
// console.log('La suma de los 100 números siguientes a '+numeroIntroducido+' es '+suma);

//Ejercicio 18
// let primerNumero;
// let segundoNumero;
// // pide dos números y se verifica que sean distintos
// do {
//     primerNumero = parseInt(prompt('Introduzca un número entero: '));
//     segundoNumero = parseInt(prompt('Introduzca otro número entero distinto al anterior: '));
//     if (primerNumero == segundoNumero) {
//         console.log('Los números introducidos no son válidos, deben ser distintos');
//     }
// } while (primerNumero == segundoNumero);
// // si el primer número es mayor que el segundo, se intercambian los valores
// if (primerNumero > segundoNumero) {
//     let aux = primerNumero;
//     primerNumero = segundoNumero;
//     segundoNumero = aux;
// }
// for (let i = primerNumero; i <= segundoNumero; i+=7) {
//     console.log(i + ' ');
// }
// console.log(' ');

//Ejercicio 19
/* Imprimir pirámide sólida
    * Número de espacios = número total de líneas-número actual de líneas
    * Número de estrellas = número de filas * 2-1
*/
// let n = parseInt(prompt('Por favor, introduzca la altura de la pirámide: '));
// for (let i = 1; i <= n; i++) {
//     for (let s = 1; s <= n - i; s++) { //Imprime el número de espacios
//         document.write(' &nbsp;');
//     }
//     for (let j = 1; j <= 2*i-1; j++) {//Imprime el número de estrellas
//         document.write('*');
//     }
//     document.write(' <br>');
// }

//Ejercicio 20
// let n = parseInt(prompt('Por favor, introduzca la altura de la pirámide: '));
// for (let i = 1; i <= n; i++) {
//     for (let s = 1; s <= n - i; s++) { //Imprime el número de espacios
//         document.write('&nbsp;');
//     }
//     for (let j = 1; j <= 2*i-1; j++) {//Imprime el número de estrellas
//         if (j == 1 || j == 2*i-1) {// asterisco de salida
//             document.write('*');
//         }else {//espacios de salida en asteriscos
//             document.write('&nbsp;');
//         }
//     }
//     document.write('<br>');
// }

//Ejercicio 21
// let numeroIntroducido;
// let numeroDeElementos = 0;
// let sumaImpares = 0;
// let numeroDeElementosImpares = 0;
// let maximoPar = 0;
// do {
//     numeroIntroducido = parseInt(prompt('Por favor, vaya introduciendo números enteros. Por favor, vaya introduciendo números enteros'));
//     if (numeroIntroducido >= 0) {
//         numeroDeElementos++;
//         if ((numeroDeElementos % 2) == 1) { // número impar
//             sumaImpares += numeroIntroducido;
//             numeroDeElementosImpares++;
//         }else {//número par
//             if (numeroIntroducido > maximoPar) {
//                 maximoPar = numeroIntroducido;
//             }
//         }
//     }
// } while (numeroIntroducido >= 0);
// console.log('Ha introducido '+numeroDeElementos+' números');
// console.log('La media de los impares es '+sumaImpares/numeroDeElementosImpares);
// console.log('El máximo de los pares es '+maximoPar);

//Ejercicio 22
// document.write('Números primos entre 2 y 100: ');
// let esPrimo = true;
// for (let n = 2; n <= 100; n++) {
//     // comprueba si n es primo
//     esPrimo = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             esPrimo = false;
//         }
//     }
//     // si n es primo, se muestra por pantalla
//     if (esPrimo) {
//         document.write(n + ' ');
//     }
// }

//Ejercicio 23
// let numeroIntroducido;
// document.write('El programa terminará cuando la suma de los números sea mayor que 10000');
// document.write('<br>');
// let suma = 0;
// let numeroDeElementos = 0;
// do {
//     numeroIntroducido = parseInt(prompt('Por favor, vaya introduciendo números'));
//     suma += numeroIntroducido;
//     numeroDeElementos++;
// } while (suma <= 10000);
// document.write('Ha introducido un total de '+ numeroDeElementos + ' números');
// document.write('<br>');
// document.write('La suma total es '+ suma + '.');
// document.write('<br>');
// document.write('La media es '+ suma/numeroDeElementos+'.');
// document.write('<br>');

//Ejercicio 24
// document.write('Este programa pinta una pirámide hecha a base de números');
// document.write('<br>');
// let alturaIntroducida = parseInt(prompt('Por favor, introduzca la altura de la pirámide:'));
// let altura = 1;
// let i = 0;
// let espacios = alturaIntroducida - 1;
// while (altura <= alturaIntroducida) {
//     // inserta espacios
//     for (i = 1; i <= espacios; i++) {
//         document.write(' ');
//     }
//     // pinta la línea de números
//     for (i = 1; i < altura; i++) {
//         document.write(i);
//     }
//     for (i = altura; i > 0; i--) {
//         document.write(i);
//     }
//     document.write('<br>');
//     altura++;
//     espacios--;
// }

//Ejercicio 25
// let numeroIntroducido = parseInt(prompt('Introduzca un número entero: '));
// let numero = numeroIntroducido;
// let volteado = 0;
// while (numero > 0) {
//     volteado = (volteado * 10) + (numero % 10);
//     numero = Math.floor(numero/10);
// }
// document.write('Si le damos la vuelta al ' + numeroIntroducido + ' tenemos el ' + volteado);

//Ejercicio 26
// let numeroIntroducido = parseInt(prompt('Introduzca un número entero: '));
// let digito = parseInt(prompt('Introduzca un dígito: '));
// document.write('Contando de izquierda a derecha, el ' + digito + ' aparece dentro de ' + numeroIntroducido + '  en las siguientes posiciones: ');
// document.write('<br>');
// // le da la vueta al número y calcula la longitud
// let numero = numeroIntroducido;
// let volteado = 0;
// let longitud = 0;
// let posicion = 1;
// if (numero == 0) {
//     longitud = 1;
// }
// while (numero > 0) {
//     volteado = (volteado * 10) + (numero % 10);
//     numero = Math.floor(numero/10);
//     longitud++;
// } // while
// // comprueba la posición
// while (volteado > 0) {
//     if ((volteado % 10) == digito) {
//         document.write(posicion + ' ');
//     }
//     volteado = Math.floor(volteado / 10);
//     posicion++;
// }// while
// document.write('<br>');

//Ejercicio 27
// let numeroIntroducido = parseInt(prompt('Introduzca un número entero mayor que 1: '));
// let cuenta = 0;
// let suma = 0;
// for (let i = 1; i < numeroIntroducido; i++) {
//     if ((i % 3) == 0) {
//         document.write(i + ' ');
//         cuenta++;
//         suma+=i;
//     }
// }
// document.write('\nDesde 1 hasta ' + numeroIntroducido + ' hay ' + cuenta);
// document.write(' múltiplos de 3 y suman ' + suma);

//Ejercicio 28
// let numeroIntroducido;
// // Lee un número mayor o igual que 0
// do {
//     numeroIntroducido = parseInt(prompt('Por favor, introduzca un número entero: '));
//     if (numeroIntroducido < 0) {
//         document.write('El número introducido no es correcto');
//     }
// } while (numeroIntroducido < 0);
// let factorial = numeroIntroducido;
// if (numeroIntroducido == 0) {
//     document.write('El factorial del ' + numeroIntroducido + ' es 1');
// }else {
//     for (let i = 1; i < numeroIntroducido; i++) {
//         factorial *= i;
//     }
// }
// document.write(numeroIntroducido + '! = ' + factorial);

//Ejercicio 29
// let numeroGrande = parseInt(prompt('Introduzca un número entero positivo (relativamente grande): '));
// let numeroPequeño = parseInt(prompt('Introduzca otro número (relativamente pequeño): '));
// document.write('Los números enteros positivos menores que ' + numeroGrande);
// document.write(' que no son divisibles entre ' + numeroPequeño + ' son los siguientes:');
// let cuenta = 0;
// let suma = 0;
// for (let i = 1; i < numeroGrande; i++) {
//     if ((i % numeroPequeño) != 0) {
//         document.write(i + ' ');
//     }
// }

//Ejercicio 30
// let primerDia = 0;
// let segundoDia = 0;
// let primeraHora;
// let segundaHora;
// let primerDiaString;
// let segundoDiaString;
// let nombrePrimerDia = '';
// let nombreSegundoDia = '';
// let datosCorrectos = true;
// // Recogida de datos /////////////////////////////////////
// alert('\nPor favor, introduzca la primera hora');
// do {
//     primerDiaString = prompt('Día: ');
//     primeraHora = parseInt(prompt('Hora: '));
//     switch (primerDiaString) {
//         case 'lunes':
//         case '1':
//             primerDia = 1;
//             nombrePrimerDia = 'lunes';
//             break;
//         case 'martes':
//         case '2':
//             primerDia = 2;
//             nombrePrimerDia = 'martes';
//             break;
//         case 'miércoles':
//         case '3':
//             primerDia = 3;
//             nombrePrimerDia = 'miercoles';
//             break;
//         case 'jueves':
//         case '4':
//             primerDia = 4;
//             nombrePrimerDia = 'jueves';
//             break;
//         case 'viernes':
//         case '5':
//             primerDia = 5;
//             nombrePrimerDia = 'viernes';
//             break;
//         case 'sábado':
//         case '6':
//             primerDia = 6;
//             nombrePrimerDia = 'sabado';
//             break;
//         case 'domingo':
//         case '7':
//             primerDia = 7;
//             nombrePrimerDia = 'domingo';
//             break;
//         default:
//             primerDia = 0;
//             break;
//     }
//     alert('Por favor, introduzca la segunda hora');
//     segundoDiaString = prompt('Día: ');
//     segundaHora = parseInt(prompt('Hora: '));
//     switch (segundoDiaString) {
//         case 'lunes':
//         case '1':
//             segundoDia = 1;
//             nombreSegundoDia = 'lunes';
//             break;
//         case 'martes':
//         case '2':
//             segundoDia = 2;
//             nombreSegundoDia = 'martes';
//             break;
//         case 'miércoles':
//         case '3':
//             segundoDia = 3;
//             nombreSegundoDia = 'miércoles';
//             break;
//         case 'jueves':
//         case '4':
//             segundoDia = 4;
//             nombreSegundoDia = 'jueves';
//             break;
//         case 'viernes':
//         case '5':
//             segundoDia = 5;
//             nombreSegundoDia = 'viernes';
//             break;
//         case 'sábado':
//         case '6':
//             segundoDia = 6;
//             nombreSegundoDia = 'sabado';
//             break;
//         case 'domingo':
//         case '7':
//             segundoDia = 7;
//             nombreSegundoDia = 'domingo';
//             break;
//         default:
//             segundoDia = 0;
//             break;
//     }
//     datosCorrectos = true;
//     if (segundoDia <= primerDia) {
//         alert('El segundo día debe ser posterior al primero');
//         datosCorrectos = false;
//     }
//     if ((primerDia == 0) || (segundoDia == 0)) {
//         alert('No se ha introducido correctamente el día de la semana');
//         alert('Los días válidos son: lunes, martes, miércoles, jueves y viernes');
//         datosCorrectos = false;
//     }
//     if ((primeraHora < 0) || (primeraHora > 23) || (segundaHora < 0) || (segundaHora > 23)) {
//         alert('No se ha introducido correctamente la hora del día');
//         alert('Las horas válidas están entre 0 y 23');
//         datosCorrectos = false;
//     }
// } while (!datosCorrectos);
// // Fin de la recogida de datos ///////////////////////////
// document.write('Entre las ' + primeraHora + ':00h del ' + nombrePrimerDia);
// document.write(' y las ' + segundaHora + ':00h del ' + nombreSegundoDia);
// document.write(' hay ' + (((segundoDia * 24) + segundaHora) - ((primerDia * 24) + primeraHora)) + ' horas');
//Ejercicio 1
// let dia;
// alert('Por favor, introduzca un día de la semana y le diré');
// dia = prompt('qué asignatura toca a primera hora ese día: ');
// dia = dia.toLowerCase(); // convierte a minúsculas todas las letras
// switch (dia) {
//     case 'lunes':
//         // continúa debajo
//     case 'martes':
//         // continúa debajo
//     case 'miércoles':
//         // continúa debajo
//     case 'miércoles':
//         document.write('Programación');
//         break;
//     case 'jueves':
//         document.write('Sistemas Informáticos');
//         break;
//     case 'viernes':
//         document.write('Bases de Datos');
//         break;
//     case 'sàbado':
//         // continúa debajo
//     case 'sábado':
//         // continúa debajo
//     case 'domingo':
//         document.write('¡Ese día no hay clase!');
//         break;
//     default:
//         document.write('El día introducido no es correcto');
//         break;
// }

//Ejercicio 2
// let hora = parseInt(prompt('Por favor, introduzca una hora del día (0 - 23): '));
// if ((hora >= 6) && (hora <= 12)) {
//     document.write('Buenos Dias');
// }
// if ((hora >= 13) && (hora <= 20)) {
//     document.write('Buenas Tardes');
// }
// if ((hora >= 21) && (hora < 24) || ((hora <= 5) && (hora >= 0))) {
//     document.write('Buenas Noches');
// }
// if ((hora >= 24) || (hora < 0)) {
//     document.write('La hora introducida no es correcta');
// }

//Ejercicio 3
// let dia;
// let n = parseInt(prompt('Por favor, introduzca un número del 1 al 7: '));
// switch (n) {
//     case 1:
//         dia = 'lunes';
//         break;
//     case 2:
//         dia = 'martes';
//         break;
//     case 3:
//         dia = 'miércoles';
//         break;
//     case 4:
//         dia = 'jueves';
//         break;
//     case 5:
//         dia = 'viernes';
//         break;
//     case 6:
//         dia = 'sábado';
//         break;
//     case 7:
//         dia = 'domingo';
//         break;
//     default:
//         dia = 'Debe introducir un número del 1 al 7';
//         break;
// }
// document.write(dia);

//Ejercicio 4
// let sueldoSemanal;
// let horasTrabajadas = parseInt(prompt('Por favor, introduzca el número de horas trabajadas durante la semana: '));
// if (horasTrabajadas <= 40) {
//     sueldoSemanal = 12 * horasTrabajadas;
// } else {
//     sueldoSemanal = (40 * 12) + ((horasTrabajadas - 40) * 16);
// }
// document.write('El sueldo semanal que le corresponde es de ' + sueldoSemanal + ' euros');

//Ejercicio 5
// alert('Este programa resuelve ecuaciones de primer grado del tipo ax + b = 0');
// let a = parseFloat(prompt('Por favor, introduzca el valor de a: '));
// let b = parseFloat(prompt('Ahora introduzca el valor de b: '));
// if (a == 0) {
//     document.write('Esa ecuación no tiene solución real');
// } else {
//     document.write('x =' + (-b/a));
// }

//Ejercicio 6
// alert('Cálculo del tiempo de caída de un objeto');
// let h = parseFloat(prompt('Por favor, introduzca la altura (en metros) desde la que cae el objeto: '));
// const g = 9.81;// las constantes se declaran con final
// let s = Math.sqrt(2*h/g);
// document.write('El objeto tarda %.2f segundos en caer.\n', s);

//Ejercicio 7
// alert('Este programa calcula la media de tres notas');
// let nota1 = parseFloat(prompt('Por favor, introduzca la primera nota: '));
// let nota2 = parseFloat(prompt('Ahora introduzca la segunda nota: '));
// let nota3 = parseFloat(prompt('Por último introduzca la tercera nota: '));
// let media = (nota1 + nota2 + nota3) / 3;
// document.write('La media es %.2f\n', media);

//Ejercicio 8
// alert('Este programa calcula la media de tres notas');
// let nota1 = parseFloat(prompt('Por favor, introduzca la primera nota: '));
// let nota2 = parseFloat(prompt('Ahora introduzca la segunda nota: '));
// let nota3 = parseFloat(prompt('Por último introduzca la tercera nota: '));
// if (((nota1 > 0) && (nota1 <= 10)) || ((nota2 > 0) && (nota2 <= 10)) || ((nota3 > 0) && (nota3 <= 10))) {
//     let media = (nota1 + nota2 + nota3) / 3;
//     document.write('La media es %.2f\n', media, ' ');
//     if (media < 5) {
//         document.write('Insuficiente');
//     }
//     if ((media >= 5) && (media < 6)) {
//         document.write('Suficiente');
//     }
//     if ((media >= 6) && (media < 7)) {
//         document.write('Bien');
//     }
//     if ((media >= 7) && (media < 9)) {
//         document.write('Notable');
//     }
//     if (media >= 9) {
//         document.write('Sobresaliente');
//     }
// } else {
//     document.write('El maximo de las notas es de 1 a 10');
// }

//Ejercicio 9
// let x1, x2;
// alert('Este programa resuelve ecuaciones de segundo grado');
// alert('ax^2 + bx + c = 0');
// alert('Por favor, introduzca los valores');
// let a = parseFloat(prompt('a = '));//-4
// let b = parseFloat(prompt('b = '));//6
// let c = parseFloat(prompt('c = '));//8
// // 0x^2 + 0x + 0 = 0
// if ((a == 0) && (b == 0) && (c != 0)) {
//     document.write('La ecuación no tiene solución');
// }
// // ax^2 + bx + 0 = 0  con a y b distintos de 0
// if ((a != 0) && (b != 0) && (c == 0)) {
//     document.write('x1 = 0');
//     document.write('x2 = '+ (-b / a));
// }
// // 0x^2 + bx + c = 0  con b y c distintos de 0
// if ((a == 0) && (b != 0) && (c != 0)) {
//     document.write('x1 = x2 = '+ (-c / a));
// }
// // ax^2 + bx + c = 0  con a, b y c distintos de 0
// if ((a != 0) && (b != 0) && (c != 0)) {
//     let discriminante = Math.pow(b,2) - (4 * a * c);
//     if (discriminante < 0) {
//         document.write('La ecuación no tiene soluciones reales');
//     } else {
//         document.write('x1 = ' + (-b + Math.sqrt(discriminante))/(2 * a) + '<br>');
//         document.write('x2 = ' + (-b - Math.sqrt(discriminante))/(2 * a) + '<br>');
//     }
// }

//Ejercicio 10
// alert('Este programa le dirá cuál es su horóscopo a partir de su fecha de nacimiento');
// let horoscopo = '';
// let mes = parseInt(prompt('Introduzca el número del mes en que nació (1-12): '));
// let dia = parseInt(prompt('Ahora introduzca el día: '));
// switch (mes) {
//     case 1:
//         if (dia < 21) {
//             horoscopo = 'capricornio';
//         } else {
//             horoscopo = 'acuario';
//         }
//         break;
//     case 2:
//         if (dia < 20) {
//             horoscopo = 'acuario';
//         } else {
//             horoscopo = 'picis';
//         }
//         break;
//     case 3:
//         if (dia < 21) {
//             horoscopo = 'picis';
//         } else {
//             horoscopo = 'aries';
//         }
//         break;
//     case 4:
//         if (dia < 21) {
//             horoscopo = 'aries';
//         } else {
//             horoscopo = 'tauro';
//         }
//         break;
//     case 5:
//         if (dia < 20) {
//             horoscopo = 'tauro';
//         } else {
//             horoscopo = 'géminis';
//         }
//         break;
//     case 6:
//         if (dia < 22) {
//             horoscopo = 'géminis';
//         } else {
//             horoscopo = 'cáncer';
//         }
//         break;
//     case 7:
//         if (dia < 22) {
//             horoscopo = 'cáncer';
//         } else {
//             horoscopo = 'leo';
//         }
//         break;
//     case 8:
//         if (dia < 24) {
//             horoscopo = 'leo';
//         } else {
//             horoscopo = 'virgo';
//         }
//         break;
//     case 9:
//         if (dia < 23) {
//             horoscopo = 'virgo';
//         } else {
//             horoscopo = 'libra';
//         }
//         break;
//     case 10:
//         if (dia < 23) {
//             horoscopo = 'libra';
//         } else {
//             horoscopo = 'escorpio';
//         }
//         break;
//     case 11:
//         if (dia < 23) {
//             horoscopo = 'escorpio';
//         } else {
//             horoscopo = 'sagitario';
//         }
//         break;
//     case 12:
//         if (dia < 21) {
//             horoscopo = 'sagitario';
//         } else {
//             horoscopo = 'capricornio';
//         }
//         break;
//     default:
//         document.write('el rango de fechas es de 1 a 12<br><br>');
//         break;
// }
// (mes > 12) ? document.write('la fecha ingresada no corresponde al horóscopo<br><br>') : document.write('Su horóscopo es ' + horoscopo);

//Ejercicio 11
// alert('A continuación deberá introducir una hora del día');
// alert('primero introducirá la hora y luego los minutos');
// let hora = parseInt(prompt('hora: '));
// let minuto = parseInt(prompt('minuto: '));
// let segundosTranscurridos = (hora * 3600) + (minuto * 60);
// let segundosHastaMedianoche = (24 * 3600) - segundosTranscurridos;
// document.write('Desde las ' + hora + ':' + minuto + ' hasta la medianoche faltan ' + segundosHastaMedianoche + ' segundos');

//Ejercicio 12
// let puntos = 0;
// let respuesta = '';
// alert('CUESTIONARIO DE 1º DAM');
// alert('1. ¿Cuál de los siguientes tipos de datos de Java tiene más precisión?');
// alert('a) int\nb) double\nc) float');
// respuesta = prompt('Respuesta 1 Es => ');
// if (respuesta === 'b') {
//     puntos++;
// }
// alert('2. ¿Cuál es el lenguaje que se utiliza para hacer consultas en las bases de datos');
// alert('a) XML\nb) SELECT\nc) SQL');
// respuesta = prompt('Respuesta 2 Es => ');
// if (respuesta === 'c') {
//     puntos++;
// }
// alert('3. Para insertar un hiperenlace en una página se utiliza la etiqueta...');
// alert('a) href\nb) a\nc) link');
// respuesta = prompt('Respuesta 3 Es => ');
// if (respuesta === 'b') {
//     puntos++;
// }
// alert('4. ¿En qué directorio se encuentran los archivos de configuración de Linux?');
// alert('a) /etc\nb) /config\nc) /cfg');
// respuesta = prompt('Respuesta 4 Es => ');
// if (respuesta === 'a') {
//     puntos++;
// }
// alert('5. ¿Cuál de las siguientes memorias es volátil?');
// alert('a) RAM\nb) EPROM\nc) ROM');
// respuesta = prompt('Respuesta 5 Es => ');
// if (respuesta === 'a') {
//     puntos++;
// }
// document.write('\nHa obtenido ' + puntos + ' puntos');

//Ejercicio 13
// let aux;
// alert('Este programa ordena tres números introducidos por teclado');
// alert('Por favor, vaya introduciendo los tres números y pulsando INTRO:');
// let a = parseInt(prompt('Numero 1: '));
// let b = parseInt(prompt('Numero 2: '));
// let c = parseInt(prompt('Numero 3: '));
// // ordenación de los dos primeros números
// if (a > b) {
//     aux = a;
//     a = b;
//     b = aux;
// }
// // ordenación de los dos últimos números
// if (b > c) {
//     aux = b;
//     b = c;
//     c = aux;
// }
// // se vuelven a ordenar los dos primeros
// if (a > b) {
//     aux = a;
//     a = b;
//     b = aux;
// }
// document.write('Los números introducidos ordenados de menor a mayor son ' + a + ', ' + b + ' y ' + c + '.');

//Ejercicio 14


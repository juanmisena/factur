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
// let n = parseInt(prompt('Por favor, introduzca un número entero: '));
// if ((n == 0) || (n < 0)) {
//     document.write('Por favor el numero debe de ser entero ');
// } else {
//     if ((n % 2) == 0) {
//         document.write('El número introducido es par');
//     } else {
//         document.write('El número introducido es impar');
//     }
//     if ((n % 5) == 0) {
//         document.write(' y divisible entre 5');
//     } else {
//         document.write(' y no es divisible entre 5');
//     }
// }

//Ejercicio 15
// alert('Este programa pinta una pirámide');
// let r = prompt('Introduzca un carácter de relleno: ');
// alert('Elija un tipo de pirámide');
// let opcion = parseInt(prompt(`
// 1. Con el vértice hacia arriba
// 2. Con el vértice hacia abajo
// 3. Con el vértice hacia la izquierda
// 4. Con el vértice hacia la derecha
// `));
// switch (opcion) {
//     case 1:
//             document.write(' ' + r +'<br>');
//             document.write('' + r + r + r +'<br>');
//             document.write(r + r + r + r + r +'<br>');
//         break;
//     case 2:
//             document.write(r + r + r + r + r +'<br>');
//             document.write('' + r + r + r +'<br>');
//             document.write(' ' + r +'<br>');
//         break;
//     case 3:
//             document.write('   ' + r +'<br>');
//             document.write(' ' + r + '' + r +'<br>');
//             document.write(r + '' + r + '' + r +'<br>');
//             document.write(' ' + r + '' + r +'<br>');
//             document.write('   ' + r +'<br>');
//         break;
//     case 4:
//             document.write(r +'<br>');
//             document.write(r + '' + r +'<br>');
//             document.write(r + '' + r + '' + r +'<br>');
//             document.write(r + '' + r +'<br>');
//             document.write(r +'<br>');
//         break;
//     default:
//             document.write('El tipo de piramide no existe');
//         break;
// }

//Ejercicio 16
// let respuesta = '';
// let puntos = 0;
// alert('TEST DE FIDELIDAD');
// alert('Este programa te dirá si hay probabilidad de que tu pareja está siendo infiel.\n');
// respuesta = prompt('1. Tu pareja parece estar más inquieta de lo normal sin ningún motivo aparente.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('2. Ha aumentado sus gastos de vestuario.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('3. Ha perdido el interés que mostraba anteriormente por ti.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('4. Ahora se afeita y se asea con más frecuencia (si es hombre) o ahora se arregla el pelo y se asea con más frecuencia (si es mujer).\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('5. No te deja que mires la agenda de su teléfono móvil.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('6. A veces tiene llamadas que dice no querer contestar cuando estás tú delante.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('7. Últimamente se preocupa más en cuidar la línea y/o estar bronceado/a.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('8. Muchos días viene tarde después de trabajar porque dice tener mucho más trabajo.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('9. Has notado que últimamente se perfuma más.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// respuesta = prompt('10. Se confunde y te dice que ha estado en sitios donde no ha ido contigo.\n(v)erdadero o (f)also: ');
// if (respuesta == 'v') {
//     puntos += 3;
// }
// // Muestra el resultado del test
// if ((puntos > 0) && (puntos <= 10)) {
//     document.write('¡Enhorabuena! tu pareja parece ser totalmente fiel');
// }
// if ((puntos > 11) && (puntos <= 22)) {
//     document.write('Quizás exista el peligro de otra persona en su vida o en su mente, aunque seguramente será algo sin importancia. No bajes la guardia');
// }
// if (puntos >= 22) {
//     document.write('Tu pareja tiene todos los ingredientes para estar viviendo un romance con otra persona. Te aconsejamos que indagues un poco más y averigües qué es lo que está pasando por su cabeza');
// }
// if ((respuesta != 'v') || (respuesta != 'f') || (puntos == 0)) {
//     document.write('debes de responder con (v) si es verdadero o (f) si es falso');
// }

//Ejercicio 17
// let n = parseInt(prompt('Por favor, introduzca un número entero: '));
// if ((n < 0) || (n == 0)) {
//     document.write('por favor introduce un numero entero');
// } else {
//     document.write('La última cifra del número introducido es el ' + (n % 10));
// }

//Ejercicio 18
// let n = 0, primera = 0;
// n = parseInt(prompt('Por favor, introduzca un número entero (de 5 cifras como máximo): '));
// if (n < 10) {
//     primera = n;
// }
// if ((n >= 10) && (n <= 99)) {
//     primera = Math.floor(n / 10); //1 digito
// }
// if ((n >= 100) && (n <= 999)) {
//     primera = Math.floor(n / 100); //2 digito
// }
// if ((n >= 1000) && (n <= 9999)) {
//     primera = Math.floor(n / 1000); //3 digito
// }
// if ((n >= 10000) && (n <= 99999)) {
//     primera = Math.floor(n / 10000); //4 digito
// }
// document.write('La primera cifra del número introducido es el ' + primera);

//Ejercicio 19
// let n = 0, digitos = 0;
// n = Math.abs(parseInt(prompt('Por favor, introduzca un número entero (de 5 cifras como máximo): ')));
// if (n < 10) {
//     digitos = 1;
// }
// if ((n >= 10) && (n <= 99)) {
//     digitos = 2;
// }
// if ((n >= 100) && (n <= 999)) {
//     digitos = 3;
// }
// if ((n >= 1000) && (n <= 9999)) {
//     digitos = 4;
// }
// if ((n >= 10000) && (n <= 99999)) {
//     digitos = 5;
// }
// if (n > 99999) {
//     digitos = Infinity;
// }
// document.write('El número introducido tiene ' + digitos + ' digitos');

//Ejercicio 20
// let n, capicua = false;
// n = parseInt(prompt('Por favor, introduzca un número entero (de 5 cifras como máximo): '));
// // número de una cifra
// if ((n >= 1) && (n <= 9)) {
//     capicua = true;
// }
// // número de dos cifras
// if ((n >= 10) && (n <= 99)) {
//     if ((Math.floor(n / 10)) == (n % 10)) {
//         capicua = true;
//     }
// }
// // número de tres cifras
// if ((n >= 100) && (n <= 999)) {
//     if ((Math.floor(n / 100)) == (n % 10)) {
//         capicua = true;
//     }
// }
// // número de cuatro cifras
// if ((n >= 1000) && (n <= 9999)) {
//     if (((Math.floor(n / 1000)) == (n % 10)) && ((Math.floor(n / 100) % 10)) == (Math.floor(n / 10) % 10)) {
//         capicua = true;
//     }
// }
// // número de cinco cifras
// if ((n >= 10000) && (n <= 99999)) {
//     if (((Math.floor(n / 10000)) == (n % 10)) && ((Math.floor(n / 1000) % 10)) == (Math.floor(n / 10) % 10)) {
//         capicua = true;
//     }
// }
// if (capicua) {
//     document.write('El número introducido es capicúa');
// } else {
//     document.write('El número introducido no es capicúa');
// }

//Ejercicio 21
// let nota1 = parseFloat(prompt('Nota del primer control: '));
// let nota2 = parseFloat(prompt('Nota del segundo control: '));
// let media = (nota1 + nota2) / 2;
// if (media < 5) {
//     if (window.confirm('¿Cuál ha sido el resultado de la recuperación? (apto/no apto): ') == true) {
//         media = 5;
//     }
// }
// document.write('Tu nota de Programación es ' + media);

//Ejercicio 22
// let dia = prompt('Por favor, introduzca un día de la semana (de lunes a viernes): ');
// let diaNumerico = 0;
// switch (dia) {
//     case "lunes":
//             diaNumerico = 0;
//         break;
//     case "martes":
//             diaNumerico = 1;
//         break;
//     case "miércoles":
//             diaNumerico = 2;
//         break;
//     case "jueves":
//             diaNumerico = 3;
//         break;
//     case "viernes":
//             diaNumerico = 4;
//         break;
//     default:
//         document.write('"El día introducido no es correcto');
//         break;
// }
// alert('A continuación introduzca la hora (hora y minutos)');
// let horas = parseInt(prompt('Hora: '));
// let minutos = parseInt(prompt('Minutos: '));
// let minutosTotales = (4 * 24 * 60) + (15 * 60);
// let minutosActuales = (diaNumerico * 24 * 60) + (horas * 60) + minutos;
// document.write('Faltan ' + (minutosTotales - minutosActuales) + ' minutos para llegar al fin de semana');

//Ejercicio 23
// let baseImponible = parseFloat(prompt('Introduzca la base imponible: '));
// let tipoIVA = prompt('Introduzca el tipo de IVA \n(general, reducido o superreducido): ');
// let codigoPromocional = prompt('Introduzca el código promocional \n(nopro, mitad, meno5 o 5porc): ');
// // Calcula el IVA y el precio antes del descuento
// let tipoIVANumerico = 0;
// switch (tipoIVA) {
//     case 'general':
//         tipoIVANumerico = 21;
//         break;
//     case 'reducido':
//         tipoIVANumerico = 10;
//         break;
//     case 'superreducido':
//         tipoIVANumerico = 4;
//         break;
//     default:
//         document.write('El tipo de IVA introducido no es correcto.');
//         break;
// }
// let iva = baseImponible * tipoIVANumerico / 100;
// let precioSinDescuento = baseImponible + iva;
// // Calcula el descuento
// let descuento = 0;
// switch (codigoPromocional) {
//     case 'nopro':
        
//         break;
//     case 'mitad':// el precio se reduce a la mitad
//         descuento = precioSinDescuento / 2;
//         break;
//     case 'meno5':// se descuentan 5 euros
//         descuento = 5;
//         break;
//     case '5porc':// se descuenta el 5%
//         descuento = precioSinDescuento * 0.05;
//         break;
//     default:
//         document.write('El código promocional introducido no es correcto');
//         break;
// }
// // Muestra el precio final del producto desglosado
// let total = precioSinDescuento - descuento;
// document.write('Base imponible       %6.2f\n&nbsp;', baseImponible, '<br>');
// document.write('IVA (%2d%%)            %6.2f\n&nbsp;', tipoIVANumerico, iva, '<br>');
// document.write('Precio con IVA       %6.2f\n&nbsp;', precioSinDescuento, '<br>');
// document.write('Cód. promo. (%5s) -%6.2f\n&nbsp;', codigoPromocional, descuento, '<br>');
// document.write('TOTAL                %6.2f&nbsp;', total, '<br>');

//Ejercicio 24
// let cargo;
// cargo = parseInt(prompt('1 - Programador junior \n2 - Prog. senior \n3 - Jefe de proyecto \nIntroduzca el cargo del empleado (1 - 3): '));
// let diasVisita = parseInt(prompt('¿Cuántos días ha estado de viaje visitando clientes? '));
// let estadoCivil = parseInt(prompt('Introduzca su estado civil \n(1 - Soltero, 2 - Casado): '));
// let sueldoBase = 0;
// switch (cargo) {
//     case 1: // Programador junior
//         sueldoBase = 950;
//         break;
//     case 2: // Programador senior
//         sueldoBase = 1200;
//         break;
//     case 3: // jefe de proyecto
//         sueldoBase = 1600;
//         break;
//     default:
//         document.write('No ha elegido correctamente el sueldo base<br>');
//         break;
// }
// let sueldoDietas = diasVisita * 30;
// let sueldoBruto = sueldoBase + sueldoDietas;
// let irpf = 0;
// if (estadoCivil == 1) { // Soltero
//     irpf = 25;
// } else if (estadoCivil == 2) { // Casado
//     irpf = 20;
// } else {
//     document.write('No ha elegido correctamente el estado civil<br>');
// }
// let cuantiaIrpf = (sueldoBruto * irpf) / 100;
// // Muestra la nómina desglosada
// document.write('&nbsp;&nbsp;&#9487;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9491;<br>');
// document.write('&#9475; Sueldo base            %7.2f &#9475;\n',sueldoBase,'<br>');
// document.write('&#9475; Dietas (%2d viajes)     %7.2f &#9475;\n', diasVisita, sueldoDietas,'<br>');
// document.write('&nbsp;&nbsp;&#9507;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9515;<br>');
// document.write('&#9475; Sueldo bruto           %7.2f &#9475;\n', sueldoBruto,'<br>');
// document.write('&#9475; Retención IRPF (%.0f%%)   %7.2f &#9475;\n', irpf, cuantiaIrpf, '<br>');
// document.write('&nbsp;&nbsp;&#9507;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9515;<br>');
// document.write('&#9475; Sueldo neto            %7.2f &#9475;\n', sueldoBruto - cuantiaIrpf, '<br>');
// document.write('&nbsp;&nbsp;&#9495;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9499;<br>');

//Ejercicio 25
let altura = parseInt(prompt('Introduzca la altura de la bandera en cm: '));
let anchura = parseInt(prompt('Ahora introduzca la anchura: '));
let conEscudo = confirm('¿Quiere escudo bordado?');
let escudoCadena;
let precioEscudo;
if (conEscudo) {
    escudoCadeña = 'Con Escudo';
    precioEscudo = 2.50;
} else {
    escudoCadena = 'Sin Escudo';
    precioEscudo = 0;
}
document.write('Gracias. Aquí tiene el desglose de su compra<br>');
document.write('Bandera de %5d cm2: %5.2f €\n', anchura * altura, parseFloat(anchura * altura / 100));
document.write('%s:           %5.2f €\n', escudoCadena, precioEscudo);
document.write('Gastos de envío:      %5.2f €\n', 3.25);
document.write('Total:                %5.2f €\n', (anchura * altura / 100) + precioEscudo + 3.25);
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
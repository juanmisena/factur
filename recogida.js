// Ejercicio 1
// let x;
// let y;
// let linea;
// alert("Este programa multiplica dos números enteros.");
// linea = prompt("Por favor, introduzca el primer número: ");
// x = parseInt(linea);
// linea = prompt("Introduzca el segundo número: ");
// y = parseInt(linea);
// document.write(x + " * " + y + " = " + x * y);

// Ejercicio 2
// 1 euro a peso colombiano = 4069.12
// let euros = parseFloat(
//   prompt("Por favor, introduzca la cantidad de euros que quiere convertir: ")
// );
// let pesos = Math.round(euros * 4069.12);
// document.write(euros + " euro(s) son %d pesos. " + pesos);

// Ejercicio 3
// 1 peso colombiano a euro = 0.00025
// let peso = parseFloat(
//   prompt("Por favor, introduzca la cantidad de pesos que quiere convertir: ")
// );
// let euro = Math.round(peso * 0.00025);
// document.write(peso + " peso(s) colombianos son %d euros. " + euro);

// Ejercicio 4
// let x;
// let y;
// let linea;
// linea = prompt("Por favor, introduzca el primer número: ");
// x = parseFloat(linea);
// linea = prompt("Introduzca el segundo número: ");
// y = parseFloat(linea);
// document.write("x = " + x + "<br>");
// document.write("y = " + y + "<br>");
// document.write("x + y = " + (x + y) + "<br>");
// document.write("x - y = " + (x - y) + "<br>");
// document.write("x * y = " + x * y + "<br>");
// document.write("x / y = " + Math.round(x / y) + "<br>");
// document.write("pow x = " + Math.pow(x, 2) + "<br>");
// document.write("pow y = " + Math.pow(y, 2) + "<br>");

// Ejercicio 5
// alert("Área de un rectángulo\n ---------------------");
// let base = parseFloat(
//   prompt("Por favor, introduzca la longitud de la base (cm): ")
// );
// let altura = parseFloat(prompt("Introduzca la altura (cm): "));
// document.write("El área del rectángulo es " + base * altura + "cm²");

// Ejercicio 6
// alert("Área de un rectángulo\n ---------------------");
// let base = parseFloat(
//   prompt("Por favor, introduzca la longitud de la base (cm): ")
// );
// let altura = parseFloat(prompt("Introduzca la altura (cm): "));
// document.write("El área del triángulo es " + (base * altura) / 2 + "cm²");

// Ejercicio 7
// let baseImponible = parseFloat(
//   prompt(
//     "Por favor, introduzca la base imponible (precio del artículo sin IVA): "
//   )
// );
// document.write("\nBase imponible %8.2f €\n" + baseImponible + "<br>");
// document.write("IVA (21%%)      %8.2f €\n" + baseImponible * 0.21 + "<br>");
// document.write("---------------------------\n <br>");
// document.write("Total          %8.2f €\n" + baseImponible * 1.21 + "<br>");

// Ejercicio 8
// let horasTrabajadas = parseInt(
//   prompt(
//     "Por favor, introduzca el número de horas trabajadas durante la semana: "
//   )
// );
// document.write("Su salario semanal es de " + horasTrabajadas * 6.25 + "pesos");

// Ejercicio 9
// const PI = Math.PI;
// alert("Volumen de un cono\n ------------------");
// let h = parseFloat(prompt("Por favor, introduzca la altura (cm): "));
// let r = parseFloat(prompt("Introduzca el radio de la base (cm): "));
// let v = (1 / 3) * PI * Math.pow(r, 2) * h;
// document.write("El volumen del cono es de " + v + " cm³");

// Ejercicio 10
// let mb = parseFloat(prompt("Por favor, introduzca el número de Mb: "));
// document.write(mb + "Mb son " + mb * 1024 + "Kb");

// Ejercicio 11
// let kb = parseFloat(prompt("Por favor, introduzca el número de Kb: "));
// document.write(kb + "Kb son " + Math.round(kb / 1024) + "Mb");

// Ejercicio 12
// let nota1 = parseFloat(prompt("Introduzca la nota del primer examen: "));
// let notaFinal = parseFloat(prompt("¿Qué nota quiere sacar en el trimestre? "));
// let nota2 = Math.round(notaFinal * 100 - (nota1 * 40) / 60);
// document.write("Para tener un " + notaFinal + " en el trimestre");
// document.write(" necesita sacar un " + nota2 + " en el segundo examen.");

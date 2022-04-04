//Ejercicio 1
var num = new Array(5);
num[0] = 39;
num[1] = -2;
num[4] = 0;
num[6] = 14;
num[8] = 5;
num[9] = 120;
console.log(num);
for (let i = 0; i < 12; i++) {
    console.log('num[%2d]: %d\n', i, num[i]);
}
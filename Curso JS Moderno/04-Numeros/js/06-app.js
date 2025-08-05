const number1 = "20";// Este es un string.
const number2 = "20.2";// Este es un string con un punto decimal.
const number3 = "Uno";// Este es un string que no es un número.
const number4 = 20;// Este es un número flotante, es decir con punto decimal.

console.log(number1);// Imprime el string "20".
console.log(Number.parseInt(number1));// Convierte el string a un número entero.
console.log(Number.parseFloat(number2));// Convierte el string a un número flotante.
console.log(Number.parseInt(number3));// Intenta convertir el string "Uno" a un número, pero devuelve NaN (Not a Number).



console.log(Number.isInteger(number4));// Verifica si number4 es un número entero, devuelve true.
console.log(Number.isInteger(number2));// Verifica si number2 es un número entero, devuelve false.
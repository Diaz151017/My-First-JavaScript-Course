const number1 = 20;
const number2 = "20";
const number3 = 30;

console.log(number1 == number2); // Operador de igualdad (==) - Compara valor. True porque son iguales en valor.
//No confundir con el operador de asignación (=) que asigna un valor a una variable o con el operador de identidad (===) que compara valor y tipo de dato.
console.log(number1 == number3); // False porque son diferentes en valor.
console.log(number1 === parseInt(number2)); // Operador de identidad (===) - Compara valor y tipo de dato. False porque number1 es un número y number2 es una cadena de texto.
//*Posteriormente se convierte number2 a número con parseInt para que la comparación sea correcta.
console.log(typeof number1); // Typeof devuelve el tipo de dato de la variable. "number"
console.log(typeof number2); // "string"

const password1 = "admin";
const password2 = "Admin";

console.log = (password1 != password2); // Operador de desigualdad (!=) - Compara valor. True porque son diferentes en valor.
console.log = (number1 != number2); // False porque son iguales en valor.
console.log = (password1 !== password2); // Operador de identidad de desigualdad (!==) - Compara valor y tipo de dato. True porque son diferentes en valor y tipo de dato.

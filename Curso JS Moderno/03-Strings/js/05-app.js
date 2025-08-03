const product = "Monitor 20 pulgadas";

console.log(product);
console.log(product.replace("pulgadas", '"'));// replace reemplaza el texto indicado por el nuevo texto.
console.log(product.replace("Monitor", 'Monitor Curvo'));


console.log(product.slice(0, 10)); // slice extrae o corta una parte del string, el primer argumento es el índice de inicio y el segundo el de fin.
console.log(product.slice(8)); // si solo se pone un argumento, corta desde ese índice hasta el final del string.
console.log(product.slice(-10)); // si se pone un número negativo, empieza a contar desde el final del string.
console.log(product.slice(2, 1)); // si el primer índice es mayor que el segundo, devuelve un string vacío.



console.log(product.substring(0, 10)); // substring es similar a slice, pero no acepta números negativos y el primer índice debe ser menor que el segundo.
console.log(product.substring(2, 1)); // si realiza un corte al revés.



const user = "Adrian Diaz";
console.log(user.substring(0, 2)); // Devuelve "Ad" las inciales de tu nombres de usuario.
console.log(user.charAt(0)); // Devuelve "A" la primera letra de tu nombre de usuario.

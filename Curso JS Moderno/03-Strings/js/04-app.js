const product = "              Monitor 20 pulgadas               ";

console.log(product);
console.log(product.length);



console.log(product.trimStart());// Elimina espacios al inicio.

console.log(product.trimEnd());// Elimina espacios al final.


console.log(product.trimStart().trimEnd());
console.log(product.trim()); // Elimina espacios al inicio y al final.
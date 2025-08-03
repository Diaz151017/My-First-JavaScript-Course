const product = "Monitor 20 pulgadas ";
const price = "30 euros ";

//console.log(product.concat(price)); // concat une dos strings, pero no es muy usado en la actualidad.
//console.log(product.concat("En oferta")); // concat también puede recibir múltiples argumentos.


console.log(product + " Con un precio de: " + price); // Usar el operador + es la forma más común de concatenar strings actualmente.





console.log(`EL producto ${product} tiene un precio de${price}`); // Usar template literals es la forma más moderna y legible de concatenar strings. Usa comillas invertidas (`) y permite interpolación de variables.

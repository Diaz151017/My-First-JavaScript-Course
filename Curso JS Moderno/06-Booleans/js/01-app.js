const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";//Esto no es un booleano, es una cadena de texto.

//console.log(boolean1); // true
//console.log(boolean2); // false

//console.log(typeof boolean1); // "boolean"

console.log(boolean1 == boolean3);

const boolean4 = new Boolean(true);// Esto crea un objeto Boolean, no un valor booleano primitivo.
console.log(boolean4);// [Boolean: true]
let number;

console.log(number); // Si no asignamos valor a una variable la consola nos mostrará, undefined.

console.log(typeof number); // typeof nos dice el tipo de dato de la variable, en este caso undefined.



let number2 = null; // null es un valor que se asigna a una variable para indicar que no tiene valor.
console.log(number2); // null.
console.log(typeof number2); // typeof nos dice el tipo de dato de la variable, en este caso object, porque en JavaScript, null es considerado un objeto.

consol,log(number == number2); // false, porque null y undefined son diferentes.
console.log(number === number2); // false, porque null y undefined son diferentes y el operador === compara tanto el valor como el tipo de dato.
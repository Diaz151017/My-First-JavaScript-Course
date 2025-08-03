const product = "Monitor 20 pulgadas ";



const text = " En Promoción ".repeat(3);// Puedes usar repeat para repetir el texto las veces deseadas.

console.log(text);
console.log(`${product} ${text}!!!`);// Puedes usar template literals para concatenar variables y strings de manera más legible.



const activity = "Programar en JavaScript";
console.log(activity.split(" ")); // Divide el string en un array de palabras usando el espacio como separador.

const hobbies = "Leer, Jugar, Estudiar, Dormir";
console.log(hobbies.split(", ")); // Divide el string en un array de hobbies usando la coma y el espacio como separador.
console.log(hobbies.split(",").length); // Obtiene la cantidad de hobbies dividiendo el string y contando los elementos del array resultante.

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#")); // Divide el tweet en un array usando el hashtag como separador.

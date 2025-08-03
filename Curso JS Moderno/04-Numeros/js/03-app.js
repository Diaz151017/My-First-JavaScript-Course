//Puedes escribir Math en una consola de navegador para ver todas las propiedades y métodos disponibles del objeto Math.

let result;

result = Math.PI; // Valor de PI.

result = Math.round(2.8); // Redondea al entero más cercano.
result = Math.round(2.4); // Redondea al entero hacia abajo.
result = Math.round(2.5); // Redondea al entero más cercano, en caso de ser .5 redondea hacia arriba.

result = Math.ceil(2.1); // Ceil obliga a redondear hacia arriba.
result = Math.floor(2.9); // Floor obliga a redondear hacia abajo.

result = Math.sqrt(144); // Raíz cuadrada.

result = Math.abs(-200); // Valor absoluto, convierte números negativos a positivos.

result = Math.pow(2, 3); // Potencia, 2 elevado a 3.

result = Math.min(3, 5, 1, 8, -2); // Mínimo de un conjunto de números.

result = Math.max(3, 5, 1, 8, -2); // Máximo de un conjunto de números.

result = Math.random(); // Número aleatorio entre 0 y 1.

result = Math.random() * 20; // Número aleatorio entre 0 y el número especificado (en este caso, 20).



console.log(result);

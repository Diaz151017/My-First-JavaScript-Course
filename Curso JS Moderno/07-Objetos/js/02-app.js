const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}


console.log(product); //Imprimimos el objeto en la consola.

console.log(product.name); //Accedemos a una propiedad del objeto con el nombre de la propiedad.
console.log(product.price);
console.log(product.available);

console.log(product['name']); //Forma alternativa de acceder a una propiedad del objeto, usando corchetes (poco común).

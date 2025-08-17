"use strict"

const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}
//Object methods son funciones que se pueden usar con objetos para impedir que se modifiquen o para agregar nuevas propiedades.
Object.freeze(product); //Congela el objeto, impidiendo que se modifique o agregue nuevas propiedades.

/* product.available = false; *///Modificamos una propiedad del objeto. 
/* product.image = "image.jpg";  *///Agregamos una nueva propiedad al objeto.
/* delete product.price; */ 

console.log(product); 

console.log(Object.isFrozen(product)); //Verificamos si el objeto está congelado, devuelve true o false.
const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

//Agregar propiedades nuevas a un objeto tras haber acabado el proyecto.
product.image = "image.jpg"; //Agregamos una nueva propiedad al objeto product.


delete product.available; //Eliminamos una propiedad del objeto product.


console.log(product); //Imprimimos el objeto en la consola.

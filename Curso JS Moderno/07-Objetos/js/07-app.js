const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

product.available = false; //Podemos modificar una propiedad del objeto directamente. Aunque la variables sea const se puede modificar el contenido del objeto.

delete product.price; //Podemos eliminar una propiedad del objeto con la palabra clave delete.

console.log(product); 
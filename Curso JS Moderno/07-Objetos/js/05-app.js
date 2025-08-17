const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true,
    information: { //Podemos anidar objetos dentro de otros objetos.
        dimensions: {
        weight: "1kg",
        height: "1m"
        },
        fabrication: {
        country: "China",
        }
    }
}



console.log(product);

console.log(product.information); //Para acceder a las propiedades de un objeto usamos el punto (.) o los corchetes ([]).
//console.log(product.information.weight);
//console.log(product.information.dimensions);
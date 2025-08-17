const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

console.log( Object.keys( product) ); //Muestra las propiedades del objeto sin valores.


console.log( Object.values( product) ); //Muestra los valores del objeto sin propiedades.


console.log( Object.entries( product) ); //Muestra las propiedades y valores del objeto como un array de arrays.
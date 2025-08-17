const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true,
    showInfo: function() { //Podemos agregar funciones como propiedades del objeto.
        console.log(`El producto ${ this.name } tiene un precio de: ${ this.price } `) //Usamos "this" para referirnos al objeto actual.
}
}



const product2 = { //Este tipo de objeto es conocido como Object literal.
    name: "Tablet", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 3000, //Separamos las propiedades con comas.
    available: true,
    showInfo: function() { //Podemos agregar funciones como propiedades del objeto.
        console.log(`El producto ${ this.name } tiene un precio de: ${ this.price } `) //Usamos "this" para referirnos al objeto actual.
    }
}



product.showInfo(); //Llamamos a la función del objeto para mostrar la información.
product2.showInfo();
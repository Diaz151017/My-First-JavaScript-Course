//Object literal.
const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

//Object constructor.

function Product(name, price, available) { //Constructor de objetos.
    this.name = name; //this hace referencia al objeto que se esta creando.
    this.price = price;
    this.available = true; //Si no se asigna un valor, se asigna el valor por defecto de undefined.
}

const product2 = new Product("Monitor 24 Pulgadas", 500);
console.log(product2);

const product3 = new Product("Television", 100);
console.log(product3);
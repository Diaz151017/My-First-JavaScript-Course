const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

const dimensions = {
    weight: "1kg",
    size: "1m"
}



console.log(product); 
console.log(dimensions);


const result = Object.assign(product, dimensions); //Object.assign() une dos objetos en uno nuevo.


const result2 = { ...product, ...dimensions }; //Otra forma de unir objetos usando el operador spread (...).

console.log(result); //Muestra el objeto resultante de la unión de product y dimensions.
console.log(result2);
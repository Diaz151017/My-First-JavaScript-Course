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


const { name, information, information: { fabrication, fabrication: { country } } } = product; //Desestructuración de objetos. Extraemos propiedades del objeto dentro de otro objeto y las asignamos a variables.

console.log(name);
console.log(information);
console.log(fabrication);
console.log(country);
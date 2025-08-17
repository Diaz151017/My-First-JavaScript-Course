const product = { //Este tipo de objeto es conocido como Object literal.
    name: "Monitor 20 Pulgadas", //El variables usamos "=" para asignar un valor.En objetos usamos ":".
    price: 300, //Separamos las propiedades con comas.
    available: true
}

//const name = product.name; //Accedemos a las propiedades del objeto con la notación de corchetes.
//console.log(name); //Accedemos a las propiedades del objeto con el punto.


//const { name } = product;//Desestructuración de objetos. Extraemos las propiedades del objeto y las asignamos a variables.
const { name, price} = product; // Extraemos varias propiedades del objeto y las asignamos a variables.
console.log(name);
console.log(price);
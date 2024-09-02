
console.log("importando modulo tipos");

let address = "lima naranjal naranjal 231";
// let Address;
typeof address;

address.includes("mexico");

address.concat(" piso 5");


let newAdress = address.replace("deoijdoie", "rosales").replace("231", "@").replace("lima", "mexico");
console.log(newAdress);


address.search("anranjal");

address.indexOf("naranjal");

let firstName = "\n  juan        \n ";
address.length;
firstName.length;

console.log(firstName);
address.trim();
firstName.trim();

console.log(address.endsWith("231"));
console.log(address.startsWith("lima"));




// tipo de dato bool
let isAdminAccess = true;
let isUserPremium = false;

console.log(isAdminAccess);
console.log(isUserPremium);



// tipo de dato number
let puntaje = 30;
let precio = 9.5;

typeof puntaje;
typeof precio;

// operaciones basicas
puntaje = puntaje + 3;



resta = puntaje - 3;
mulitply = puntaje * 3;
disivision = puntaje / 3;

// forma abrevi. en la operaciones
puntaje += 3;
puntaje -= 3;
puntaje *= 3;
puntaje /= 3;


// operadores de incremento o decremento
let puntajeCoding = 5;
puntajeCoding++
puntajeCoding--
console.log(puntajeCoding);


let precioBlackFriday = 99.953;

// puntajeCoding.toString();
precioBlackFriday.toFixed(2);



// tipo de dato array

const coloresFavoritos = [
    "verde", "morado", "purpura"
]

// coloresFavoritos = ["dede", "ede"];


typeof coloresFavoritos;

coloresFavoritos.length;


coloresFavoritos.push("yellow");
coloresFavoritos.push("naranja");

coloresFavoritos[0];
coloresFavoritos[1];
coloresFavoritos[2];

coloresFavoritos[0]

// eliminar elementos
delete coloresFavoritos[0];


// actualizar segun el index
coloresFavoritos[1] = "morado claro";
coloresFavoritos[1] = null;

coloresFavoritos[coloresFavoritos.length-1];


// coloresFavoritos.pop();

// coloresFavoritos.concat(["marron"]);

// coloresFavoritos.includes("rosa");




// tipo de dato objetos
// const auto = new Object;
// const auto = {};

const auto = {
    colorAuto: "verde fuxia",
    modelo: "tesla 2025",
    precio: 999,
    torque: "300h",
}

console.log(auto);

// typeof auto;

auto.colorAuto;

auto.velocidad = "300km/h";

// para crear o actualizar datos
auto.marca = "Tesla";
auto["anio"] = 1999;

auto.precio = 123;
auto["precio"] = 345;


// para eliminar keys
delete auto.torque;
delete auto["colorAuto"];

// console.log(auto);



// tipos de datos secundarios
// null
// undefined

let username = null;
let email = undefined;
typeof username;
typeof email;
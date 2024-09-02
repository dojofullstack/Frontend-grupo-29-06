

// funciones
console.log("modulo funciones!");


function maquinaNaranjas(naranjas, con_miel){

    console.log(naranjas);
    console.log(con_miel);


    if (naranjas >= 20){
        console.log("no  hay naranjas disponibles ingresar menor a 20");
        return "no  hay naranjas";
    }

    console.log("pelar las cascaras");
    console.log("trozar las naranjas");
    console.log("extrae el jugo");

    if (con_miel){
        console.log("agregando 2 cucharits de miel");
        return "jugo de naranjas listo con miel al gsto!";
    }

    return "jugo de naranjas listo!";
} 




const salidaMaqina = maquinaNaranjas(10, false);

console.log(salidaMaqina);
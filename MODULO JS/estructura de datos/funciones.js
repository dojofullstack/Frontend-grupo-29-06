

// funciones
console.log("modulo funciones!");


function hiHenry(){
    console.log("hi henry!")
}


function maquinaNaranjas(naranjas, con_miel, callback){

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
        callback();
        return "jugo de naranjas listo con miel al gsto!";
    }

    return "jugo de naranjas listo!";
} 




const salidaMaqina = maquinaNaranjas(10, false);

// con parametro callback
// const salidaMaqina = maquinaNaranjas(10, false, hiHenry);

console.log(salidaMaqina);



// tipos de funciones

// por expresion

const helloApiTodoList = function (){
    console.log("execute function");
    return "hello world test api"
}


console.log(helloApiTodoList());


// Arrow Function
const apiDevTesting = (dias_expirar) => {
    const timestampt = new Date();
    console.log(timestampt);
    console.log(timestampt.getTime());
    return `api webhook live ${timestampt} expira en ${dias_expirar}`
}



console.log( apiDevTesting(30));

console.log("cargando modulo dom");




const btnComprar = document.querySelector("#btn-comprar");

btnComprar.style.color = "yellow";
btnComprar.style.backgroundColor = "black";
btnComprar.style.borderRadius = "40px";
btnComprar.style.border = "none";

// console.log(btnComprar.style);


const facialElonMusk = document.querySelector("#facial-elonmusk");

facialElonMusk.src = "https://media.ambito.com/p/24401cb9fa828190c2d91f7753578f02/adjuntos/239/imagenes/041/609/0041609803/1200x675/smart/elon-musk-hijos.png";



console.log( document.querySelector(".facial"));
console.log( document.querySelectorAll(".facial"));




/// forma con getelementby
// document.getElementById("facial-elonmusk");
// document.getElementsByClassName("facial");
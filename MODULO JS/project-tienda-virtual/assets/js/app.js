

console.log("module tienda virtual loaded");


const CATALOGO_PRODUCTOS = [];


const clearForm = () => {

    const myform = document.querySelector("#form_crear_product");
    myform.reset();

    myModalProduct.hide();
    myModalProduct.hide();

}



const crearProducto = () => {

    const product_title =  document.querySelector("#product_title").value;
    const product_price =  document.querySelector("#product_price").value;
    const product_info =  document.querySelector("#product_info").value;
    const product_image =  document.querySelector("#product_image").value;


    const product = {
        product_title: product_title,
        product_price: product_price,
        product_info: product_info,
        product_image: product_image,
    }


    CATALOGO_PRODUCTOS.push(product);

    console.log("El producto ha sido creado!");

    // console.log(CATALOGO_PRODUCTOS);

    clearForm();

    showProductFront(CATALOGO_PRODUCTOS);

}



const showProductFront = (products) => {

    const resultadoCards = products.map((item) => {
      const card =  `
<div class="card" style="width: 18rem;">
  <img src="${item.product_image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.product_title}</h5>
    <p class="card-text">$ ${item.product_price}  USD</p>
        
    <a href="#" class="btn btn-primary">Ver detalles</a>
  </div>
</div>
        `
    return card;
    } )


    const dataCatalogo = resultadoCards.join(" ");

    // console.log(dataCatalogo);

    document.querySelector("#catalogo-productos").innerHTML = dataCatalogo;


}




function saveData(){


    // practicas con localStorage y cookies

    // console.log(localStorage);

    // const personalizarTiedna = {
    //     nombreTienda: "dojo tienda",
    //     stockActive : true,
    //     descuentoActivo: "30%"
    // }


    // localStorage.setItem("favoritos", "tabletas")
    // localStorage.setItem("carrito", "4 productos");
    // localStorage.setItem("carrito_activo", true);


    // // JSON.parse()        JSON -> Obj JS
    // // JSON.stringify()    Obj JS ->  JSON


    // localStorage.setItem("tienda", JSON.stringify(personalizarTiedna));


    // const tiendaData = localStorage.getItem("tienda")

    // console.log(JSON.parse(tiendaData));


    // localStorage.removeItem("tienda");

    // localStorage.clear();
    // localStorage.key(0);



    // cookies


     document.cookie = "userId=01000101001; path=/";


     const fechaNow = new Date();
     console.log(fechaNow.toUTCString());

    //  console.log( fechaNow.getTime()  );
    //  console.log( fechaNow.getTime() +  (60*60*1000)   );


        const minutes = 60;

     fechaNow.setTime(fechaNow.getTime() +  (minutes*60*1000))

     console.log(fechaNow.toUTCString());


     document.cookie = `sessionId=qpwqpwpqwopq; path=/ ; expires=${fechaNow.toUTCString()}`




     console.log(document.cookie); 

}


// saveData()

// function setCookie(name, value, days) {
//     let expires = "";
//     if (days) {
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convierte días a milisegundos
//         expires = "; expires=" + date.toUTCString(); // Formato UTC
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Crea la cookie
// }

// // Ejemplo de uso:
// setCookie('miCookie', '129091029102102', 30);
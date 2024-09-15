

console.log("module tienda virtual loaded");


const CATALOGO_PRODUCTOS = [];


const clearForm = () => {

    const myform = document.querySelector("#form_crear_product");
    myform.reset();

    myModalProduct.hide();

}


const clearFormUpdated = () => {

    const myform = document.querySelector("#form_update_product");
    myform.reset();

    myModalProductUpdate.hide();

}


const saveProduct = () => {

    const data = CATALOGO_PRODUCTOS.filter((item) => item !== null );

    localStorage.setItem("catalogo",  JSON.stringify(data) );

}


const loadedProduct = () => {

    const catalogo = localStorage.getItem("catalogo");

    if (catalogo !== null){

        console.log("caragando productos..");

        JSON.parse(catalogo).forEach(element => {
            // element.id = uuid.v4();
            if (element !== null){
                CATALOGO_PRODUCTOS.push(element);
            }
        });

        // mostrar productos caragados
        showProductFront(CATALOGO_PRODUCTOS);
        // saveProduct();

    }

}



const crearProducto = () => {

    const product_title =  document.querySelector("#product_title").value;
    const product_price =  document.querySelector("#product_price").value;
    const product_info =  document.querySelector("#product_info").value;
    const product_image =  document.querySelector("#product_image").value;


    const product = {
        id: uuid.v4(),
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

    saveProduct();

}



const showProductFront = (products) => {

    const resultadoCards = products.map((item) => {
      const card =  `
<div class="card" style="width: 18rem;">
  <img src="${item.product_image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.product_title}</h5>
    <p class="card-text">$ ${item.product_price}  USD</p>
        
    <a href="#" class="btn btn-primary">Ver</a>

    <i  onclick="deleteProduct('${item.id}')" class="bi bi-trash-fill fs-3 text-danger mx-2 btn"></i>


    <i  onclick="modalUpdateProduct('${item.id}')" class="bi bi-pencil-square fs-3 text-primary mx-2 btn"></i>

    
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




const buscarProduct = () => {

    const inputSearch = document.querySelector("#input-search").value.toLowerCase();

    // console.log("buscando, ", inputSearch);

    const salidaBusqueda = CATALOGO_PRODUCTOS.filter( (item) => {

        if (item.product_title.toLowerCase().includes(inputSearch) ){
            return true
        }

    } )


    console.log(salidaBusqueda);

    showProductFront(salidaBusqueda);


}




const deleteProduct = (product_id) => {
    
    console.log("elimiando item", product_id);
    // const salida =  CATALOGO_PRODUCTOS.filter( (item)  =>  item.id !==  product_id  );
    // console.log(salida);

    CATALOGO_PRODUCTOS.forEach((item, index) => {

        if ( item.id ===  product_id){
            delete CATALOGO_PRODUCTOS[index];
        }
    })


    showProductFront(CATALOGO_PRODUCTOS);
    saveProduct();


}



const updateProductModal = () => {

    const product_id =  document.querySelector("#product_id").value;
    const product_title_update =  document.querySelector("#product_title_update").value;
    const product_image_update =  document.querySelector("#product_image_update").value;
    const product_price_update =  document.querySelector("#product_price_update").value;
    const product_info_update =  document.querySelector("#product_info_update").value;


    const product = {
        id: product_id,
        product_title: product_title_update,
        product_price: product_price_update,
        product_info: product_info_update,
        product_image: product_image_update,
    }
    
    updateProduct(product_id, product);

}


const updateProduct = (product_id, productUpdated) => {

    console.log("actualizando item", product_id);


    CATALOGO_PRODUCTOS.forEach((item, index) => {
        if ( item.id ===  product_id){
            CATALOGO_PRODUCTOS[index] = productUpdated;
        }
    })


    // puedes optimiza el codigo con la funcion finIndex para solo recupera la posicion
    // const index = CATALOGO_PRODUCTOS.findIndex(item => item.id === product_id);
    // console.log("index", index);
    // CATALOGO_PRODUCTOS[index] = productUpdated;

    showProductFront(CATALOGO_PRODUCTOS);
    saveProduct();
    clearFormUpdated();

}




const modalUpdateProduct = (product_id) => {

    const producto = CATALOGO_PRODUCTOS.find( (item)  =>   item.id === product_id);

    console.log("producto match", producto);


    myModalProductUpdate.show();

    document.querySelector("#product_id").value = product_id;
    document.querySelector("#product_title_update").value = producto.product_title;
    document.querySelector("#product_image_update").value = producto.product_image;
    document.querySelector("#product_price_update").value = producto.product_price;
    document.querySelector("#product_info_update").value = producto.product_info;


}


const initComponent = () => {

    loadedProduct();

}



initComponent();






function resultado(data){
    return data.json();
}

function procesarData(data){
    console.log(data);
}


function errorRequest(error){
    console.log(error);
}



// fetch("https://dummyjson.com/products").then(resultado).then(procesarData)
// .catch(errorRequest)



// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
      
//       username: 'emilys',
//       password: 'emilyspass',
//       expiresInMins: 30, // optional, defaults to 60
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);




// axios.post("https://dummyjson.com/auth/login", {
//         username: 'emilys',
//         password: 'emilyspass',
// }).then((respuesta) => {
//     console.log(respuesta.data);
// }).catch((error) => {
//     console.log(error);
// })





const showProductFront = (products) => {

    const resultadoCards = products.map((item) => {
      const card =  `
<div class="card" style="width: 18rem;">
  <img src="${item.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">$ ${item.price}  USD</p>
        
    <a href="#" class="btn btn-primary">Ver detalles</a>
  </div>
</div>
        `
    return card;
    } )



    const dataCatalogo = resultadoCards.join(" ");

    console.log(dataCatalogo);

    document.querySelector("#catalogo").innerHTML = dataCatalogo;



}






axios.get('https://dummyjson.com/products').then((res) => {
    // console.log(res.data.products);

    showProductFront(res.data.products);


})
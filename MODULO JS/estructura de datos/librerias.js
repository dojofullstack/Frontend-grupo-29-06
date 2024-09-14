


// const formateoTime = moment();

// console.log(formateoTime.format('MMMM Do, h:mm a'));


// console.log(formateoTime.endOf('day').fromNow());



const ctx = document.querySelector("#chartjs");

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2025, count: 100 },
  ];


// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: data.map(row => row.year),
//         datasets: [
//         {
//           label: 'Acquisitions by year',
//           data: data.map(row => row.count)
//         }
//       ]
//     }
//   });


// const dataDonuts = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };

// const myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: dataDonuts
//   });


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();


// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );


// const loader = new GLTFLoader();




// librerias para integrar o consumir API

// fetch o axios




// fetch('https://dummyjson.com/products')
// .then((res) => {
//     return res.json();
// })
// .then( (data) => {
//         console.log(data);
//     }
// );


// axios.get('https://dummyjson.com/products').then( (res) => {
//     console.log(res.data);
// })


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
// })




// JSON.stringify()   Obj JS -> Json Text PLain
// JSON.parse()       Json  -> Obj JS
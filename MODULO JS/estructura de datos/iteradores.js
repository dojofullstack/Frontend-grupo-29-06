

// forEach y map

// const pokemones = [
//     "charizar",
//     "charmander",
//     "caterpie",
//     "metapod",
//     "buterfee",
//     "Squiertle",
// ]


// function pokedex(nombre_pokemon){

//     console.log(`analizando pokemon ${nombre_pokemon}.....`);

// }



// pokemones.forEach(pokedex);
let pokemonsHTML = "";

function showPokemon(pokemon){

    // console.log(pokemon.name);
    // console.log(pokemon.ThumbnailImage);

    const cardPokemon = `
       <div class="card col-3">
          <img class="card-img-top" src="${pokemon.ThumbnailImage}" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">${pokemon.name}</h4>
          </div>
        </div>
        `

    pokemonsHTML += cardPokemon;


}



DATA_POKEMONES.forEach(showPokemon);

document.querySelector("#pokemones").innerHTML = pokemonsHTML;

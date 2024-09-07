




function buscarPokemonInPokedex(pokemon){

    const namePokemon = document.querySelector("#name-pokemon");
    console.log(namePokemon.value);

    if (pokemon.name.toLowerCase() === namePokemon.value.toLowerCase()){
      
        const pokemonMatch = `
        <div class="card col-4">
           <img class="card-img-top" src="${pokemon.ThumbnailImage}" alt="Title" />
           <div class="card-body">
             <h4 class="card-title">${pokemon.name}</h4>
           </div>
         </div>
         `;
        document.querySelector("#pokemones").innerHTML = pokemonMatch;
        return pokemonMatch;
    }

        
}



function buscarPokemon(){
    DATA_POKEMONES.forEach(buscarPokemonInPokedex);
    // const salidaResultado = DATA_POKEMONES.map(buscarPokemonInPokedex);
    // console.log(salidaResultado);
}




function evaluarAlgo(pokemon){

    if (pokemon.name === "Beedrill"){
        return true;
    }

}

// const pokemonMachted = DATA_POKEMONES.filter(evaluarAlgo);
// const pokemonMachted = DATA_POKEMONES.find(evaluarAlgo);

// console.log(pokemonMachted);

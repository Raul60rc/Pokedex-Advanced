const pokemonContainer = document.querySelector('.pokemon-container');
const spinner = document.querySelector('#spinner');
const buttonsHeader = document.querySelectorAll(".btn-header");
const searchBar= document.querySelector('.search-bar')
const searchInput = document.querySelector('.input')
const ALL_POKEMONS_INFO = [];

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) =>{
        createPokemon(data);
        spinner.style.display = "none";
    }
    )};

function fetchPokemons(number) {
    spinner.style.display = "block";
 for (let index = 1; index < number; index++) {
    fetchPokemon(index)
    }
}


//Search bar for pokemon 
function searchPokemon(value){
    const pokemon = {
        name : result.name,
        id: result.id,
        types: result.types.map((element) => element.type.name),
        image: result.sprites.front_default,
    }
    const matchName = pokemon.name.includes(value);
    const matchId = pokemon.id === value;
    const matchType = pokemon.types.includes(value);
    
    
    return matchName || matchId || matchType;

    
}


function buttons(){
    buttonsHeader.forEach(button => button.addEventListener("click",(event)=>{
        const buttonId = event.currentTarget.id;

        if (buttonId === "view-all"){
             return fetchPokemon
        }else {
            const types = data.type.map(type => type.type.name);
            if(types.some(type => type.includes(buttonId))){
                fetchPokemon(data);
            }
        }
      if (button === "fire")
      return fetchPokemon.data.type.map(type => type.type.fire);
      if(types.some(type => type.includes(buttonId))){
        fetchPokemon(data);
      }

    }))

};


function createPokemon(pokemon){ //DOM 
    const card = document.createElement("div");
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div'); // creates a div for every sprite container will contain image
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default // it has this property in the sprite

    spriteContainer.appendChild(sprite);  

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`; //

    const name = document.createElement('p');
    name.classList.add ('name');
    textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
    //appenchild adds DOM to html 

}

fetchPokemons(152);
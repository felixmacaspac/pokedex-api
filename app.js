const pokemonContainer = document.getElementById("pokemon-container");
const pokemonsNumber = 150;

const fetchPokemons = async () => {
  for (let i = 1; i < pokemonsNumber; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resolve = await fetch(apiUrl);
  const pokemon = await resolve.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
  <div class="img-container">
  <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
  </div>
     <div class="info">
     <h3 class="name">${name}</h3>
     <small class="type">Type: ${pokemon.types[0].type.name}</small>
     </div> 

       <div>
       <p>Abilities:</p>
       <span class ="ability"> ${pokemon.abilities[0].ability.name}</span>
       </div>
    `;

  pokemonElement.innerHTML = pokeInnerHTML;
  pokemonContainer.appendChild(pokemonElement);
};

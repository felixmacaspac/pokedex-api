const poke_container = document.getElementById("poke_container");
const pokemons_number = 150;

const fetchPokemons = async () => {
  for (let i = 1; i < pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

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

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

const url = 'http://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon'
};

const fetchPokemon = async function fetchPokemon(pokemon) {
  return fetch(`${url}/${query.pokemon}/${pokemon}`);
};

export default fetchPokemon;

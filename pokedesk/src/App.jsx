import React, { useState } from 'react';
import PokemonList from './components/PockemonList';
// import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState(['pikachu', 'liquideitor']);

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PockemonList';
// import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(['https://pokeapi.co/api/v2/pokemon']);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentUrl).then((res) => {
      setLoading(false);
      setNextUrl(res.data.next);
      setPreviousUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [currentUrl]);

  if (loading) return 'Loading...';

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PockemonList';
import Pagination from './components/Pagination';
// import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(['https://pokeapi.co/api/v2/pokemon']);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken((c) => { cancel = c; })
    }).then((res) => {
      setLoading(false);
      setNextUrl(res.data.next);
      setPreviousUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });

    return () => cancel();
  }, [currentUrl]);

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPreviousPage = () => {
    setCurrentUrl(previousUrl);
  };

  if (loading) return 'Loading...';

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </>
  );
}

export default App;

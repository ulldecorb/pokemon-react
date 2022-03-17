import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import axios from 'axios';
import PokemonList from './components/PockemonList';
import PokemonDetail from './components/PokemonDetail';
// import Pagination from './components/Pagination';
import Loading from './components/Loading';
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
      setPokemon(res.data.results);
    });

    return () => cancel();
  }, [currentUrl]);

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPreviousPage = () => {
    setCurrentUrl(previousUrl);
  };

  if (loading) return <Loading />;

  return (
    <Router>
      <Routes>
        <Route
          path="/pokemons"
          element={(
            <PokemonList
              pokemon={pokemon}
              goToNextPage={nextUrl ? goToNextPage : null}
              goToPreviousPage={previousUrl ? goToPreviousPage : 5}
            />
            )}
        />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
        <Route path="/" element={<Navigate to="/pokemons" />} />
      </Routes>
    </Router>
  );
}

export default App;

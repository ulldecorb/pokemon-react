import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import axios from 'axios';
import List from './components/List';
import Detail from './components/Detail';
import Loading from './components/Loading';
import Favorites from './components/Favorites';
import Error from './components/Error';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(['https://pokeapi.co/api/v2/pokemon']);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(['bulbasur', 'weedle']);

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
            <List
              pokemon={pokemon}
              goToNextPage={nextUrl ? goToNextPage : null}
              goToPreviousPage={previousUrl ? goToPreviousPage : null}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            )}
        />
        <Route
          path="/pokemons/:param"
          element={(
            <Detail
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        />
        <Route path="/" element={<Navigate to="/pokemons" />} />
        <Route path="/pokemons/favorites" element={<Favorites data={favorites} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

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
import Header from './components/Header';
import Favorites from './components/Favorites';
import Error from './components/Error';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(['https://pokeapi.co/api/v2/pokemon']);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [favoritesList, setFavoritesList] = useState([
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' }
  ]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken((c) => { cancel = c; })
    })
      .then((res) => {
        setLoading(false);
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        setPokemon(res.data.results);
      }).catch((err) => err);

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
      <Header />
      <Routes>
        <Route
          path="/pokemons"
          element={(
            <List
              pokemon={pokemon}
              goToNextPage={nextUrl ? goToNextPage : null}
              goToPreviousPage={previousUrl ? goToPreviousPage : null}
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
            />
            )}
        />
        <Route
          path="/pokemons/:param"
          element={(
            <Detail
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
            />
          )}
        />
        <Route path="/" element={<Navigate to="/pokemons" />} />
        <Route
          path="/pokemons/favorites"
          element={(
            <Favorites
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
            />
          )}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

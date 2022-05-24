import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import './card.css';

export default function Card({ detailUrl, favoritesList, setFavoritesList }) {
  const params = useLocation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(detailUrl, {
      cancelToken: new axios.CancelToken((c) => { cancel = c; })
    }).then((res) => {
      setLoading(false);
      setName(res.data.name);
      setId(res.data.id);
      setFirstImage(res.data.sprites.other.dream_world.front_default);
      setSecondImage(res.data.sprites.front_default);

      return () => cancel();
    });
  }, []);

  const checkIsFavorite = () => favoritesList.map((p) => p.name === name).includes(true);

  const handleSwitchFavorite = () => {
    const checkFavorites = checkIsFavorite();
    if (checkFavorites) {
      const newFavorites = favoritesList.filter((p) => p.name !== name);
      setFavoritesList(newFavorites);
    } else {
      const newFavorites = [...favoritesList, { name, url: detailUrl }];
      setFavoritesList(newFavorites);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="card">
      <Link
        to={params.pathname === '/pokemons/favorites' ? `../pokemons/${name}` : `./${name}`}
        className="card__link"
      >
        <h3 className="card__title">
          {id}
          {' '}
          {name}
        </h3>
        <img src={firstImage || secondImage} alt={name} className="card__image" />
      </Link>
      <button
        type="button"
        onClick={handleSwitchFavorite}
        className={`card__favorite card__favorite--${checkIsFavorite() ? 'favorite' : 'no-favorite'}`}
      >
        {' '}
      </button>
    </div>
  );
}

Card.propTypes = {
  detailUrl: PropTypes.string.isRequired,
  favoritesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavoritesList: PropTypes.func.isRequired
};

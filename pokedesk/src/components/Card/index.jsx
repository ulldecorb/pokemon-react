import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({ detailUrl, favorites, setFavorites }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');

  axios.get(detailUrl).then((res) => {
    setName(res.data.name);
    setId(res.data.id);
    setFirstImage(res.data.sprites.other.dream_world.front_default);
    setSecondImage(res.data.sprites.front_default);
  });

  const checkIsFavorite = () => favorites.map((p) => p.name === name).includes(true);

  const handleSwitchFavorite = () => {
    const checkFavorites = favorites.map((p) => p.name === name).includes(true);
    if (checkFavorites) {
      const newFavorites = favorites.filter((p) => p.name !== name);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, { name, url: detailUrl }];
      setFavorites(newFavorites);
    }
  };

  return (
    <div className="card">
      <Link
        to={`./${name}`}
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
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavorites: PropTypes.func.isRequired
};

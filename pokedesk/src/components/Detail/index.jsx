import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import Loading from '../Loading';
import './detail.css';

export default function Detail({ favoritesList, setFavoritesList }) {
  const { param } = useParams();
  const [url, setUrl] = useState();
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [types, setTypes] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [loading, setLoading] = useState(true);
  if (!url) { setUrl(`https://pokeapi.co/api/v2/pokemon/${param}/`); }

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(url, {
      cancelToken: new axios.CancelToken((c) => { cancel = c; })
    }).then((res) => {
      setLoading(false);
      setName(res.data.name);
      setId(res.data.id);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setTypes(res.data.types.map((arr) => arr.type.name).join(' '));
      setFirstImage(res.data.sprites.other['official-artwork'].front_default);
      setSecondImage(res.data.sprites.front_default);
    });

    return () => cancel();
  }, [url]);

  const handlePreviousPokemon = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${id - 1}/`);
  };

  const handleNextPokemon = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`);
  };

  const checkIsFavorite = () => favoritesList.map((p) => p.name === name).includes(true);

  const handleSwitchFavorite = () => {
    const checkFavorites = favoritesList.map((p) => p.name === name).includes(true);
    if (checkFavorites) {
      const newFavorites = favoritesList.filter((p) => p.name !== name);
      setFavoritesList(newFavorites);
    } else {
      const newFavorites = [...favoritesList, { name, url }];
      setFavoritesList(newFavorites);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="detail">
      <h2 className="detail__title">{name}</h2>
      <figure>
        <img src={firstImage} alt={name} className="detail__background" />
      </figure>
      {' '}
      <figure className="detail__image-box">
        <img
          src={firstImage || secondImage}
          alt={name}
          className="detail__image"
        />
      </figure>
      <article className="detail__info">
        <div className="info__box">
          <p className="info__data">
            id:
            {' '}
            {id}
          </p>
          <p className="info__data">
            height:
            {' '}
            {height}
          </p>
        </div>
        <div className="info__box">
          <p className="info__data">
            types:
            {' '}
            {types}
          </p>
          <p className="info__data">
            weight:
            {' '}
            {weight}
          </p>
        </div>
      </article>
      <button
        type="button"
        onClick={handleSwitchFavorite}
        className="detail__favorite-button"
      >
        <figure
          src="favorite_icon.svg"
          alt={checkIsFavorite() ? 'remove favorite' : 'add favorite'}
          className={`favorite-button__image ${checkIsFavorite() ? 'favorite-button__image--favorite' : 'favorite-button__image--no-favorite'}`}
        />
      </button>
      <footer className="detail__nav-box">
        <Link
          to={`../pokemons/${id - 1}/`}
          className="detail__previous-nav-link"
          onClick={handlePreviousPokemon}
        >
          Previous
        </Link>
        <Link
          to="../"
          className="detail__back-link"
        >
          Back
        </Link>
        <Link
          to={`../pokemons/${id + 1}/`}
          className="detail__next-nav-link"
          onClick={handleNextPokemon}
        >
          Next
        </Link>
      </footer>
    </div>
  );
}

Detail.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavoritesList: PropTypes.func.isRequired
};

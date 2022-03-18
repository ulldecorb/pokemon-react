import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import Error from '../Error';
// import PropTypes from 'prop-types';
import './detail.css';

export default function Detail() {
  // const [pokemon, setPokemon] = useState();
  const { param } = useParams();
  const [url, setUrl] = useState();
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [types, setTypes] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  // const [pokemonDetail, setPokemonDetail] = useState([]);
  if (!url) { setUrl(`https://pokeapi.co/api/v2/pokemon/${param}/`); }

  axios.get(url).then((res) => {
    // setPokemon(res.data);
    setName(res.data.name);
    setId(res.data.id);
    setHeight(res.data.height);
    setWeight(res.data.weight);
    setTypes(res.data.types.map((arr) => arr.type.name).join(' '));
    setFirstImage(res.data.sprites.other['official-artwork'].front_default);
    setSecondImage(res.data.sprites.front_default);
  });

  return (
    <div className="detail">
      {' '}
      <h2 className="detail__name">{name}</h2>
      <figure className="detail__image-box">
        <img
          src={firstImage || secondImage}
          alt={name}
          className="detail__image"
        />
      </figure>
      <article className="detail__info">
        <div className="info__box">
          <p className="info__name">
            id:
            {' '}
            {id}
          </p>
          <p className="info__name">
            height:
            {' '}
            {height}
          </p>
        </div>
        <div className="info__box">
          <p className="info__name">
            types:
            {' '}
            {types}
          </p>
          <p className="info__name">
            weight:
            {' '}
            {weight}
          </p>
        </div>
      </article>
      <Link
        to="../"
        className="detail__back-link"
      >
        Back
      </Link>

    </div>
  );
}

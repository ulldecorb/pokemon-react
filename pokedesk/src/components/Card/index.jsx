import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({ detailUrl }) {
  // const [pokemon, setPokemon] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [types, setTypes] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');

  axios.get(detailUrl).then((res) => {
    // setPokemon(res.data);
    setName(res.data.name);
    setId(res.data.id);
    setHeight(res.data.height);
    setWeight(res.data.weight);
    setTypes(res.data.types.map((arr) => arr.type.name).join(' '));
    setFirstImage(res.data.sprites.other.dream_world.front_default);
    setSecondImage(res.data.sprites.front_default);
  });

  return (

    <Link
      to={`./${name}`}
      className="card"
    >
      <h3 className="card__title">{name}</h3>
      <img src={firstImage || secondImage} alt={name} className="card__image" />
      <p>
        Id:
        {id}
        <br />
        Height:
        {' '}
        {height}
        <br />
        Weight:
        {' '}
        {weight}
        <br />
        Types:
        {' '}
        {types}
        <br />
      </p>
    </Link>
  );
}

Card.propTypes = {
  detailUrl: PropTypes.string.isRequired
};

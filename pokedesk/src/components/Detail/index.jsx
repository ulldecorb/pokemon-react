import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import Error from '../Error';
// import PropTypes from 'prop-types';

export default function Detail() {
  // const [pokemon, setPokemon] = useState();
  const { name } = useParams();
  const [url, setUrl] = useState();
  const [pokemonName, setPokemonName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [types, setTypes] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  // const [pokemonDetail, setPokemonDetail] = useState([]);
  if (!url) { setUrl(`https://pokeapi.co/api/v2/pokemon/${name}/`); }

  axios.get(url).then((res) => {
    // setPokemon(res.data);
    setPokemonName(res.data.name);
    setId(res.data.id);
    setHeight(res.data.height);
    setWeight(res.data.weight);
    setTypes(res.data.types.map((arr) => arr.type.name).join(' '));
    setFirstImage(res.data.sprites.other.dream_world.front_default);
    setSecondImage(res.data.sprites.front_default);
  });

  return (
    <div>
      Detail id =
      {' '}
      {pokemonName}
      {id}
      {height}
      {weight}
      {types}
      <br />
      {name}
      <img src={firstImage || secondImage} alt={name} />
    </div>
  );
}

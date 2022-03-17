import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function PokemonListCard({ detail }) {
  // const [detailUrl, setDetailUrl] = useState([detail])
  const [pokemon, usePokemon] = useState({});

  axios.get([detail]).then((res) => {
    usePokemon(res.data);
    console.log(`test:::: ${JSON.stringify(res.data.name)}`);
  });

  const {
    name, height, weight, types
  } = pokemon;
  return (
    <>
      {/* // <Link
    //   to={`pokemons/${id}`}
    // > */}
      <h3 className="card">{name}</h3>
      <p>
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
        {types.map(((item) => item.type.name))}
        <br />
      </p>
      {/* </Link> */}
    </>
  );
}

PokemonListCard.propTypes = {
  detail: PropTypes.string.isRequired
};

// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import axios from 'axios';
import Card from '../Card';

export default function Favorites({ favorites, setFavorites }) {
  // useEffect(() => {
  //   favorites.map((pokemonName) => (
  //     axios.get(`https://pokeapi.co/api/v2/pokemon${pokemonName}`).then((res) => {
  //       const newFavorites = [...favorites, res.data];
  //       setFavoriteList(newFavorites);
  //     })
  //   ));
  // }, []);

  return (
    <section className="favorites">
      {/* <button type="button" onClick={setFavorites}>
        {favorites.map((p) => (<h2>{p.name}</h2>
        ))}
      </button> */}
      {favorites.map((p) => (
        <Card detailUrl={p.url} key={p.name} favorites={favorites} setFavorites={setFavorites} />
      ))}
      <Link
        to="../"
        className="favorites__back-link"
      />
    </section>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavorites: PropTypes.func.isRequired
};

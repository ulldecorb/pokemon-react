import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from '../Card';

export default function Favorites({ favoritesList, setFavoritesList }) {
  return (
    <section className="favorites">
      {favoritesList.map((p) => (
        <Card
          detailUrl={p.url}
          key={p.name}
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
        />
      ))}
      <Link
        to="../"
        className="favorites__back-link"
      />
    </section>
  );
}

Favorites.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavoritesList: PropTypes.func.isRequired
};

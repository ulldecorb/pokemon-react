import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
import Card from '../Card';
import Search from '../search';
import './list.css';

export default function List({
  pokemon, goToNextPage, goToPreviousPage, favorites, setFavorites
}) {
  return (
    <main className="list">
      <Search />
      <div className="list__box">
        {pokemon.map((p) => (
          <Card detailUrl={p.url} key={p.name} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </main>
  );
}

List.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  goToNextPage: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.shape(null).isRequired
  ]).isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavorites: PropTypes.func.isRequired
};

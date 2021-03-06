import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
import Card from '../Card';
import './list.css';

export default function List({
  pokemon, goToNextPage, goToPreviousPage, favoritesList, setFavoritesList
}) {
  return (
    <main className="list">
      <div className="list__box" data-testid="listBox">
        {pokemon.map((p) => (
          <Card
            detailUrl={p.url}
            key={p.name}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
          />
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
  goToNextPage: PropTypes.func,
  goToPreviousPage: PropTypes.func,
  favoritesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavoritesList: PropTypes.func.isRequired
};

List.defaultProps = {
  goToPreviousPage: null,
  goToNextPage: null
};

import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
import Card from '../Card';
import Search from '../search';
import './list.css';

export default function List({ pokemon, goToNextPage, goToPreviousPage }) {
  return (
    <div className="list">
      <Search />
      <div className="list__box">
        {pokemon.map((p) => (
          <Card detailUrl={p.url} key={p.name} />
        ))}
      </div>
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
}

List.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

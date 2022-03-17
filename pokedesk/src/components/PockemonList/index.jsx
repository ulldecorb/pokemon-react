import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
// import PokemonListCard from '../PokemonListCard';

export default function PockemonList({ pokemon, goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div>
          {/* <PokemonListCard detail={p.url} key={p.name} /> */}
          {p.name}
          <br />
          {p.url}
        </div>
      ))}
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
}

PockemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

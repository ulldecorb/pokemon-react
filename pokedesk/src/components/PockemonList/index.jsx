import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
import PokemonListCard from '../PokemonListCard';
import './pokemonList.css';

export default function PockemonList({ pokemon, goToNextPage, goToPreviousPage }) {
  // const getImage = (url) => axios.get(url).then((res) => {
  //   res.data.sprite.front_default
  // })

  return (
    <div className="list">
      <div className="list__box">
        {pokemon.map((p) => (
          <div className="list__card" key={p.name}>
            <PokemonListCard detailUrl={p.url} />
            {/* <h3>{p.name}</h3> */}
            {/* {getImage(p.url)} */}
            {/* <p>{p.url}</p> */}
          </div>
        ))}
      </div>
      <footer className="list__navigation">
        <Pagination
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      </footer>
    </div>
  );
}

PockemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

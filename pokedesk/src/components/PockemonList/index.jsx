import React from 'react';
import { PropTypes } from 'prop-types';

export default function PockemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.name}>
          {p.name}
          <br />
          {p.url}

        </div>
      ))}
    </div>
  );
}

PockemonList.propTypes = {
  pokemon: PropTypes.shape([]).isRequired
};

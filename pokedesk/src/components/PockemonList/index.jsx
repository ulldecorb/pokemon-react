/* eslint-disable react/prop-types */
import React from 'react';
// import {PropTypes} from 'prop-types';

export default function PockemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>
          {p}
        </div>
      ))}
    </div>
  );
}

// PockemonList.propTypes = {
//   pokemon: PropTypes.shape([]).isRequired
// }

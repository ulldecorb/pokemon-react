import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="../pokemons">Go Back</Link>
    </div>
  );
}

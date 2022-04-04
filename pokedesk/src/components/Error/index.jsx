import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
    <section className="error">
      <h2 className="error__title">404</h2>
      <p>Page not found</p>
      <Link to="../pokemons">Go Back</Link>
    </section>
  );
}

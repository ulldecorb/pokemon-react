import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <section className="loading">
      <h2 className="loading__title">LOADING</h2>
      <figure className="loading__pokeball">
        <div className="loading__pokeball-inner" />
      </figure>
    </section>
  );
}

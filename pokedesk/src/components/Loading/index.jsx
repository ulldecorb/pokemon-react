import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <section className="loading">
      <figure className="loading__pokeball">
        <div className="loading__pokeball-inner" />
      </figure>
      <h2 id="loadingText" className="loading__text">LOADING...</h2>
    </section>
  );
}

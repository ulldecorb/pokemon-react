import React from 'react';
import { PropTypes } from 'prop-types';

export default function Favorites({ data }) {
  return (
    <section className="favorites">
      {data.map((x) => <p>{x}</p>)}
    </section>
  );
}

Favorites.propTypes = {
  data: PropTypes.shape([]).isRequired
};

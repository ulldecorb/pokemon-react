import React from 'react';
import { PropTypes } from 'prop-types';
import Pagination from '../Pagination';
import Card from '../Card';
import Search from '../search';
import './list.css';

export default function List({ pokemon, goToNextPage, goToPreviousPage }) {
  // const getImage = (url) => axios.get(url).then((res) => {
  //   res.data.sprite.front_default
  // })

  return (
    <div className="list">
      <Search />
      <div className="list__box">
        {pokemon.map((p) => (
          <div className="list__card" key={p.name}>
            <Card detailUrl={p.url} />
            {/* <h3>{p.name}</h3> */}
            {/* {getImage(p.url)} */}
            {/* <p>{p.url}</p> */}
          </div>
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

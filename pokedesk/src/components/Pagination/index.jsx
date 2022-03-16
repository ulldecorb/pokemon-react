import React from 'react';
import { PropTypes } from 'prop-types';

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {goToPreviousPage && <button type="button" onClick={goToPreviousPage}>Previous</button>}
      {goToNextPage && <button type="button" onClick={goToNextPage}>Next</button>}
    </div>
  );
}

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

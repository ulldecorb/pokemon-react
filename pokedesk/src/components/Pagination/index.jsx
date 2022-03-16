/* eslint-disable react/prop-types */
import React from 'react';

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {goToPreviousPage && <button type="button" onClick={goToPreviousPage}>Previous</button>}
      {goToNextPage && <button type="button" onClick={goToNextPage}>Next</button>}
    </div>
  );
}

// PockemonList.propTypes = {
//   goToNextPage: PropTypes.func.isRequired
//   goToPreviousPage: PropTypes.func.isRequired
// }

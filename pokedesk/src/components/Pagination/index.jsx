import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  const handlePrevPagination = () => {
    goToPreviousPage();
  };

  const handleNextPagination = () => {
    goToNextPage();
  };

  return (
    <div>
      {goToPreviousPage && <button type="button" onClick={handlePrevPagination}>Previous</button>}
      {goToNextPage && <button type="button" onClick={handleNextPagination}>Next</button>}
    </div>
  );
}

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

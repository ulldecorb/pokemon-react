import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  const handlePrevPagination = () => {
    goToPreviousPage();
  };

  const handleNextPagination = () => {
    goToNextPage();
  };

  return (
    <div className="pagination">
      {goToPreviousPage && <button className="pagination__previous-button" type="button" onClick={handlePrevPagination}>Previous</button>}
      {goToNextPage && <button className="pagination__next-button" type="button" onClick={handleNextPagination}>Next</button>}
    </div>
  );
}

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired
};

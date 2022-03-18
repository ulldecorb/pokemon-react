import React, { useState } from 'react';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    console.log(searchInput);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search..."
      />
      <button
        type="button"
        aria-label="Enter search"
        onClick={handleSearch}
      />
    </div>
  );
}

import React from 'react';

const SearchWord = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchWord;

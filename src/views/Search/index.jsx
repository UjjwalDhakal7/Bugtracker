import React from 'react';

const SearchWord = ({ searchValue, setSearchValue, className }) => {
  return (
    <input
      type="text"
      className={className}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchWord;



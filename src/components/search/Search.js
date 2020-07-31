import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className="search">
      <p className="search-bar">
        {' '}
        <span className="fa fa-search"></span> &nbsp; Search
      </p>
      <div className="divider"></div>
      <ul>
        <li className="search-result">Chair 1</li>
        <li className="search-result">Chair 1</li>
        <li className="search-result">Chair 1</li>
        <li className="search-result">Chair 1</li>
        <li className="search-result">Chair 1</li>
      </ul>
    </div>
  );
};

export default Search;

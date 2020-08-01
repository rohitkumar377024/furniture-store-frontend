import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './search.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const getSearchResults = () => {
  //   axios
  //     .get(`http://localhost:3000/products/search?q=sofa`)
  //     .then(res => setSearchResults(res.data.message));
  // };

  return (
    <div className="search">
      {/* <p className="search-bar">
        <span className="fa fa-search"></span> &nbsp; Search
      </p> */}

      <input
        className="search-bar w-100"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
          axios
            .get(`http://localhost:3000/products/search?q=${searchTerm}`)
            .then(res => setSearchResults(res.data.message));
        }}
      />

      {console.log(searchTerm)}

      {/* We hide the search results, when the search term is empty */}
      {/* <div className="divider"></div>
      {searchTerm === ''
        ? ''
        : searchResults.map((searchResult, idx) => (
            <li key={idx} className="search-result">
              {searchResult}
            </li>
          ))}
    </div> */}

      {/* We hide the search results, when the search term is empty */}
      <div className="divider"></div>
      {searchTerm === ''
        ? ''
        : searchResults.map((searchResult, idx) => (
            <Link to={`/product-details/${searchResult.productID}`} key={idx}>
              <div className="search-result">{searchResult.name}</div>
            </Link>
          ))}
    </div>
  );
};

export default Search;

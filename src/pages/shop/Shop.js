import React from 'react';
import Category from '../../components/category/Category';
import Search from '../../components/search/Search';
import './shop.scss';

const Shop = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col d-flex flex-column align-items-center">
          <h1 className="shop-title-text text-center">
            Search your dream furniture
          </h1>
          <Search />
        </div>
        <div className="col">
          <div className="categories d-flex justify-content-center flex-wrap">
            <Category type="sofas" />
            <Category type="seating" />
            <Category type="tables" />
            <Category type="beds" />
            <Category type="storage" />
            <Category type="decor" />
            <Category type="dining" />
            <Category type="cupboards" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React from 'react';
import Category from '../../components/category/Category';
import './shop.scss';
const Shop = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col d-flex flex-column align-items-center">
          <h1 className="shop-title-text text-center">
            Search your dream furniture
          </h1>
          <div className="search">Search</div>
        </div>
        <div className="col">
          <div className="categories d-flex justify-content-center flex-wrap">
            <Category type="chairs" />
            <Category type="beds" />
            <Category type="tables" />
            <Category type="appliances" />
            <Category type="storage" />
            <Category type="dining" />
            <Category type="workstation" />
            <Category type="utilities" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

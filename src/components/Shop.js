import React from 'react';
import categoryImage from '../category.png';

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
            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>

            <div className="category d-flex flex-column align-items-center">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p>Category</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

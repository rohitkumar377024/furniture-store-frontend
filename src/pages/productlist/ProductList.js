import React from 'react';
import './productlist.scss';
import categoryImage from '../../assets/category.png';

const ProductList = props => {
  const type = props.match.params.id;

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col">
          <h1 className="capitalize">{type}</h1>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          {/* HERE WE GO */}

          {[...Array(9).keys()].map(num => (
            <div className="product d-flex flex-column align-items-center no-underline-hover">
              <img className="img-fluid" src={categoryImage} alt="" />
              <p className="w-100 product-name">Product Name</p>
              <p className="w-100 product-price">Product Price</p>
            </div>
          ))}

          {/* HERE WE STOP */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

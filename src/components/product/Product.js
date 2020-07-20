import React from 'react';
import './product.scss';
import categoryImage from '../../assets/category.png';

const Product = ({ name, price }) => {
  return (
    <div className="product d-flex flex-column align-items-center no-underline-hover">
      <img className="img-fluid" src={categoryImage} alt="" />
      <p className="w-100 product-name">{name}</p>
      <p className="w-100 product-price">₹{price}</p>
    </div>
  );
};

export default Product;

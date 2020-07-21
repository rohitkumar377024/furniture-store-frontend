import React from 'react';
import './product.scss';
import { Link } from 'react-router-dom';
import categoryImage from '../../assets/category.png';

const Product = ({ name, price, productID }) => {
  return (
    <Link
      to={`/product-details/${productID}`}
      className="product d-flex flex-column align-items-center no-underline-hover"
    >
      <img className="img-fluid" src={categoryImage} alt="" />
      <p className="w-100 product-name">{name}</p>
      <p className="w-100 product-price">₹{price}</p>
    </Link>
  );
};

export default Product;

import React from 'react';
import { Link } from 'react-router-dom';
import './category.scss';
import categoryImage from '../../assets/category.png';

const Category = ({ type }) => {
  return (
    <Link
      to={`/product-list/${type}`}
      className="category d-flex flex-column align-items-center no-underline-hover"
    >
      <img className="img-fluid" src={categoryImage} alt="" />
      <p className="capitalize">{type}</p>
    </Link>
  );
};

export default Category;

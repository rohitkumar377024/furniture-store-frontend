import React from 'react';
import './productlist.scss';

const ProductList = props => {
  const type = props.match.params.id;

  return (
    <div className="product-list">
      <h1 className="capitalize">{type}</h1>
    </div>
  );
};

export default ProductList;

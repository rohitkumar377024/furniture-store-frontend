import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './productlist.scss';
import Product from '../../components/product/Product';
import {} from 'react';

const ProductList = props => {
  const [categoryData, setCategoryData] = useState([]);

  //This gets us the type of category -> chair, table, etc.
  const type = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${type}`)
      .then(res => setCategoryData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col">
          <h1 className="capitalize">{type}</h1>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          {console.log('category data')}
          {console.log(categoryData.status)}
          {categoryData.status === 'success'
            ? categoryData.message.map(product => (
                <Product
                  name={product.name}
                  price={product.price}
                  productID={product.productID}
                />
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import React, { useContext } from 'react';
import './productlist.scss';
import Product from '../../components/product/Product';
import { ProductContext } from '../../contexts/ProductContext';

const ProductList = props => {
  const type = props.match.params.id;

  const [products, setProducts] = useContext(ProductContext);

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col">
          <h1 className="capitalize">{type}</h1>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          {products.map(product => (
            <Product name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

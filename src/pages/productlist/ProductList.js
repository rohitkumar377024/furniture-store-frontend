import React, { useContext } from 'react';
import './productlist.scss';
import Product from '../../components/product/Product';
import { ProductContext } from '../../contexts/ProductContext';

const ProductList = props => {
  const [products, setProducts] = useContext(ProductContext);

  //This gets us the type of category -> chair, table, etc.
  const type = props.match.params.id;

  //We extract the specific object from products array [e.g. chairs]
  //and take its data in specificTypeProducts [renamed]
  const { [type]: specificTypeProducts } = products;

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col">
          <h1 className="capitalize">{type}</h1>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          {specificTypeProducts.map(product => (
            <Product
              name={product.name}
              price={product.price}
              productID={product.productID}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

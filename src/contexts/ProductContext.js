import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([
    { name: 'Chair Model 1', price: 1599 },
    { name: 'Chair Model 2', price: 1299 },
    { name: 'Chair Model 3', price: 1999 },
    { name: 'Chair Model 4', price: 1199 },
    { name: 'Chair Model 5', price: 1799 },
    { name: 'Chair Model 6', price: 1999 },
    { name: 'Chair Model 7', price: 2199 },
    { name: 'Chair Model 8', price: 2499 }
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

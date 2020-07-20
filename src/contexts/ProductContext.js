import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState({
    sofas: [
      { name: 'Sofa Model 1', price: 2399 },
      { name: 'Sofa Model 2', price: 3499 },
      { name: 'Sofa Model 3', price: 1299 }
    ],
    seating: [
      { name: 'Chair Model 1', price: 1599 },
      { name: 'Chair Model 2', price: 1299 },
      { name: 'Chair Model 3', price: 1999 }
    ],
    tables: [
      { name: 'Table Model 1', price: 2399 },
      { name: 'Table Model 2', price: 3499 },
      { name: 'Table Model 3', price: 1299 }
    ],
    beds: [
      { name: 'Bed Model 1', price: 2399 },
      { name: 'Bed Model 2', price: 3499 },
      { name: 'Bed Model 3', price: 1299 }
    ],
    storage: [
      { name: 'Storage Model 1', price: 2399 },
      { name: 'Storage Model 2', price: 3499 },
      { name: 'Storage Model 3', price: 1299 }
    ],
    decor: [
      { name: 'Decor Model 1', price: 2399 },
      { name: 'Decor Model 2', price: 3499 },
      { name: 'Decor Model 3', price: 1299 }
    ],
    dining: [
      { name: 'Dining Model 1', price: 2399 },
      { name: 'Dining Model 2', price: 3499 },
      { name: 'Dining Model 3', price: 1299 }
    ],
    cupboards: [
      { name: 'Cupboard Model 1', price: 2399 },
      { name: 'Cupboard Model 2', price: 3499 },
      { name: 'Cupboard Model 3', price: 1299 }
    ]
  });

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

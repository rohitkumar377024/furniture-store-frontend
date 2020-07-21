import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState({
    sofas: [
      { name: 'Sofa Model 1', price: 2399, productID: 21341 },
      { name: 'Sofa Model 2', price: 3499, productID: 32509 },
      { name: 'Sofa Model 3', price: 1299, productID: 10959 }
    ],
    seating: [
      { name: 'Chair Model 1', price: 1599, productID: 23895 },
      { name: 'Chair Model 2', price: 1299, productID: 19582 },
      { name: 'Chair Model 3', price: 1999, productID: 12098 }
    ],
    tables: [
      { name: 'Table Model 1', price: 2399, productID: 30965 },
      { name: 'Table Model 2', price: 3499, productID: 67095 },
      { name: 'Table Model 3', price: 1299, productID: 45986 }
    ],
    beds: [
      { name: 'Bed Model 1', price: 2399, productID: 45604 },
      { name: 'Bed Model 2', price: 3499, productID: 29345 },
      { name: 'Bed Model 3', price: 1299, productID: 79843 }
    ],
    storage: [
      { name: 'Storage Model 1', price: 2399, productID: 54606 },
      { name: 'Storage Model 2', price: 3499, productID: 59843 },
      { name: 'Storage Model 3', price: 1299, productID: 43289 }
    ],
    decor: [
      { name: 'Decor Model 1', price: 2399, productID: 35094 },
      { name: 'Decor Model 2', price: 3499, productID: 45099 },
      { name: 'Decor Model 3', price: 1299, productID: 43081 }
    ],
    dining: [
      { name: 'Dining Model 1', price: 2399, productID: 23489 },
      { name: 'Dining Model 2', price: 3499, productID: 43091 },
      { name: 'Dining Model 3', price: 1299, productID: 12309 }
    ],
    cupboards: [
      { name: 'Cupboard Model 1', price: 2399, productID: 96031 },
      { name: 'Cupboard Model 2', price: 3499, productID: 43509 },
      { name: 'Cupboard Model 3', price: 1299, productID: 34501 }
    ]
  });

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

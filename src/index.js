import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

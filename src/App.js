import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProductList from './pages/productlist/ProductList';
import ProductDetails from './pages/productdetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/about-us" component={About} exact />
          <Route path="/contact-us" component={Contact} exact />
          <Route path="/product-list/:id" component={ProductList} exact />
          <Route path="/product-details/:id" component={ProductDetails} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

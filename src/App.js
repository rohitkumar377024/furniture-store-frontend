import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/about-us" component={About} exact />
          <Route path="/contact-us" component={Contact} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

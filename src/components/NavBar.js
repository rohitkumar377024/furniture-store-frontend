import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" variant="light">
        <Navbar.Brand>Furniture Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link>
              <Link className='nav-bar-item' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-bar-item' to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-bar-item' to="/about-us">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-bar-item' to="/contact-us">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

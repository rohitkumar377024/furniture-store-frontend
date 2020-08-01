import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './productdetails.scss';
import { Carousel } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import first from '../../assets/category.png';

const ProductDetails = props => {
  const [cartItems, setCartItems] = useContext(CartContext);

  //This gets us the productID - which we will use
  //to identify which product's data to get
  //Using parseInt to convert String route parameter to int for ID check
  const productIDSearched = parseInt(props.match.params.id);

  //We have to check and keep in track whether the product is added to cart already or not.
  //We will check cart's list of products and show 'ADD TO CART' or 'REMOVE FROM CART'.
  let inCart = false;
  cartItems.forEach(item => {
    if (item !== undefined) {
      if (item.productID === productIDSearched) {
        inCart = true;
      }
    }
  });

  //Decides when to show 'ADD TO CART' or 'REMOVE FROM CART'.
  const [added, setAdded] = useState(inCart);
  const [foundProduct, setFoundProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${productIDSearched}`)
      .then(res => setFoundProduct(res.data.message));
  }, []);

  const addToCart = () => {
    setCartItems(
      prevCartItems =>
        prevCartItems && [
          ...prevCartItems,
          { ...foundProduct, totalCost: foundProduct.price, quantity: 1 }
        ]
    );
    setAdded(true);
  };

  const removeFromCart = () => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.productID !== productIDSearched)
    );
    setAdded(false);
  };

  return (
    <div className="container custom-container">
      <div className="row h-100 product-detail-row">
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <Carousel className="product-details-carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={first} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={first} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={first} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="details-heading">{foundProduct.name}</h1>
          <p className="details-subheading">YEAR 2014 • MODEL NO. 2309FKJ</p>
          <div className="details-description">
            <p>
              Lorem ipsum dolor do.. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do..
              <br></br>
            </p>
            <p>
              Lorem ipsum dolor do.. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do..
            </p>
          </div>
          <p className="details-price">₹{foundProduct.price}</p>
          <button
            className={added ? 'remove-from-cart-btn' : 'add-to-cart-btn'}
            onClick={added ? removeFromCart : addToCart}
          >
            {added ? 'REMOVE FROM CART' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

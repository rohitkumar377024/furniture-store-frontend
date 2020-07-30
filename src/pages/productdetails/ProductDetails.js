import React, { useState, useContext } from 'react';
import './productdetails.scss';
import { Carousel } from 'react-bootstrap';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import first from '../../assets/category.png';

const ProductDetails = props => {
  const [products, setProducts] = useContext(ProductContext);
  const [cartItems, setCartItems] = useContext(CartContext);

  //We have to check and keep in track whether the product is added to cart already or not.
  //We will check cart's list of products and show 'ADD TO CART' or 'REMOVE FROM CART'.
  // const checkIfAlreadyAdded = cartItems.includes(
  //   item => item.productID === productIDSearched
  // );

  // console.log(cartItems);

  // console.log(`ALREADYYYY ${checkIfAlreadyAdded}`);

  //This gets us the productID - which we will use
  //to identify which product's data to get
  //Using parseInt to convert String route parameter to int for ID check
  const productIDSearched = parseInt(props.match.params.id);

  let inCart = false;
  cartItems.forEach(item => {
    if (item.productID === productIDSearched) {
      inCart = true;
    }
  });

  console.log(inCart);

  const [added, setAdded] = useState(inCart);

  const {
    sofas,
    seating,
    tables,
    beds,
    storage,
    decor,
    dining,
    cupboards
  } = products;
  const combined = [
    ...sofas,
    ...seating,
    ...tables,
    ...beds,
    ...storage,
    ...decor,
    ...dining,
    ...cupboards
  ];
  const foundProduct = combined.filter(
    product => product.productID === productIDSearched
  )[0];

  const removeFromCart = () => {
    console.log('PRODUCT DETAILS REMOVE FROM CART');

    // console.log(productIDSearched);

    // const leftCartItems = cartItems;

    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.productID !== productIDSearched)
    );

    // console.log(cartItems);

    // console.log('left now');
    // console.log(leftCartItems);

    setAdded(false);
  };

  const addToCart = () => {
    setCartItems(
      prevCartItems =>
        prevCartItems && [
          ...prevCartItems,
          { ...foundProduct, totalCost: foundProduct.price, quantity: 1 }
        ]
    );
    setAdded(true);

    // setCartItems(prevCartItems => {
    //   //Getting Product IDs of previous cart items
    //   const productIdsInCart = prevCartItems.map(item => item.productID);

    //   //If it already contains the clicked Product ID's add button
    //   if (productIdsInCart.includes(foundProduct.productID)) {
    //     //Exists Already - Update Quantity and Total Cost
    //     const updateCartItems = prevCartItems.map(item => {
    //       // console.log(`item`);
    //       // console.log(item);
    //       if (item.productID == foundProduct.productID) {
    //         console.log('if');
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //           totalCost: item.totalCost + item.price
    //         };
    //       } else {
    //         console.log('else');
    //         console.log(item);
    //         return item;
    //       }
    //     });
    //     return updateCartItems;
    //   } else {
    //     //New Item - Add It to Cart
    //     //Total Cost will be the price itself initially and the quantity will be 1.
    //     //E.g. If 1 new product of ₹150 is added to the cart, the total cost will be ₹150 itself.
    //     return [
    //       ...prevCartItems,
    //       { ...foundProduct, totalCost: foundProduct.price, quantity: 1 }
    //     ];
    //   }
    // });

    // console.log(cartItems);
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

import React, { useContext } from 'react';
import './cart.scss';
import CartItem from '../../components/cartitem/CartItem';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  //Let's compute amount info - subtotal, some shipping cost and total cost
  //Taking sum of all individual cart items total costs

  //Below for subtotal, we are using ternary, so that if there are no cartitems, subtotal = 0
  const subtotal = cartItems
    .map(cartItem => cartItem.totalCost)
    .reduce((acc, curr) => acc + curr, 0);

  const shippingCost = 50;
  const totalCost = subtotal + shippingCost;

  //Callback function -> Takes ProductID and increments cart item details by 1
  const incrementItem = id => {
    setCartItems(prevCartItems => {
      const updatedItems = prevCartItems.map(item => {
        if (item !== undefined) {
          if (item.productID === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalCost: item.totalCost + item.price
            };
          } else {
            return item;
          }
        }
      });
      return updatedItems.filter(item => item !== undefined);
    });
  };

  const decrementItem = id => {
    setCartItems(prevCartItems => {
      const updatedItems = prevCartItems.map(item => {
        if (item !== undefined) {
          if (item.productID === id) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalCost: item.totalCost - item.price
              };
            } else {
              return;
              //   alert('1 hi bacha bhai');
            }
          } else {
            return item;
          }
        }
      });
      return updatedItems.filter(item => item !== undefined);
    });
  };

  return (
    <div className="container custom-container">
      <div className="row d-flex flex-column">
        <div className="col d-flex align-items-center justify-content-center">
          <h1>Cart</h1>
        </div>
        <div className="col">
          {cartItems.map(cartItem =>
            cartItem === undefined ? (
              'No Items in Cart'
            ) : (
              <CartItem
                key={cartItem.productID}
                id={cartItem.productID}
                name={cartItem.name}
                price={cartItem.price}
                totalCost={cartItem.totalCost}
                quantity={cartItem.quantity}
                increment={incrementItem}
                decrement={decrementItem}
              />
            )
          )}
          {console.log(cartItems)}
        </div>
        <div className="col">
          {subtotal > 0 ? (
            <div className="container d-flex justify-content-center">
              <div className="d-flex flex-column mr-5">
                <p className="amount-type">SUBTOTAL</p>
                <p className="amount-type">SHIPPING</p>
                <p className="amount-type">TOTAL</p>
              </div>
              <div className="d-flex flex-column">
                <p className="amount-detail">₹{subtotal}</p>
                <p className="amount-detail">₹{shippingCost}</p>
                <p className="amount-detail">₹{totalCost}</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        {subtotal > 0 ? (
          <div className="col d-flex justify-content-center">
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        ) : (
          <div className="text-center">No Items Right Now.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;

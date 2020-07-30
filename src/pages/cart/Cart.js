import React, { useContext } from 'react';
import './cart.scss';
import CartItem from '../../components/cartitem/CartItem';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  console.log(cartItems);

  //Let's compute amount info - subtotal, some shipping cost and total cost
  //Taking sum of all individual cart items total costs

  //Below for subtotal, we are using ternary, so that if there are no cartitems, subtotal = 0
  const subtotal = 0;
  // const subtotal = cartItems
  //   .map(cartItem => cartItem.totalCost)
  //   .reduce((acc, curr) => acc + curr, 0);

  const shippingCost = 50;
  const totalCost = subtotal + shippingCost;

  //Callback function -> Takes ProductID and increments cart item details by 1
  const incrementItem = id => {
    setCartItems(prevCartItems => {
      const updatedItems = prevCartItems.map(item => {
        if (item.productID === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalCost: item.totalCost + item.price
          };
        } else {
          return item;
        }
      });
      return updatedItems;
    });
  };

  // Utility function for above callback to remove cart item
  const removeCartItem = id => {
    setCartItems(prevCartItems => {
      if (prevCartItems !== undefined) {
        const updated = prevCartItems.filter(item => item.productID !== id);
        return updated;
      } else {
        return prevCartItems;
      }
    });
  };

  // Callback function ->
  // Takes ProductID and decrements cart item details by 1 or removes if only one
  const decrementItem = id => {
    setCartItems(prevCartItems => {
      removeCartItem(id);
      // let quantity = -1;

      // prevCartItems.map(item => {
      //   //Match found for product using ID
      //   if (item.productID === id) {
      //     quantity = item.quantity;
      //   }
      // });

      // if (quantity === 1) {
      //   //If quantity of item === 1, remove using filter
      //   return removeCartItem(id);
      // }

      // if (quantity > 1) {
      //   //If quantity > 1, reduce quantity and total cost
      //   return prevCartItems.map(item => {
      //     if (item.productID === id) {
      //       return {
      //         ...item,
      //         quantity: item.quantity - 1,
      //         totalCost: item.totalCost - item.price
      //       };
      //     }
      //   });
      // }
    });
  };

  // //Callback function -> Takes ProductID and decrements cart item details by 1
  // const decrementItem = id => {
  //   setCartItems(prevCartItems => {
  //     const updatedItems = prevCartItems.map(item => {
  //       if (item.productID === id) {
  //         if (item.quantity === 1) {
  //           //Remove cart item -> if only 1 quantity is there and minus button clicked
  //           return removeCartItem(id);
  //         } else {
  //           return {
  //             ...item,
  //             quantity: item.quantity - 1,
  //             totalCost: item.totalCost - item.price
  //           };
  //         }
  //       } else {
  //         return item;
  //       }
  //     });

  //     return updatedItems;
  //   });
  // };

  return (
    <div className="container custom-container">
      <div className="row d-flex flex-column">
        <div className="col d-flex align-items-center justify-content-center">
          <h1>Cart</h1>
        </div>
        <div className="col">
          {cartItems &&
            cartItems.map(cartItem => (
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
            ))}
        </div>
        <div className="col">
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
        </div>
        <div className="col d-flex justify-content-center">
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
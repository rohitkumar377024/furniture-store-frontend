import React from 'react';
import './cartitem.scss';
import first from '../../assets/category.png';

const CartItem = ({
  name,
  price,
  id,
  totalCost,
  quantity,
  increment,
  decrement
}) => {
  //Due to quantity digit difference, layout was getting moved left-right a bit
  //For the moment, adding 0 if one-digit quantity only
  //so, 6 is 06, and 15 is 15 as we know. So 06 and 15 takes same space.
  const formattedQuantity = `${quantity}`.length === 1 ? `0${quantity}` : quantity;

  return (
    <div className="m-3 d-flex justify-content-center">
      <img
        className="d-block bg-info"
        width="100"
        src={first}
        alt="Item Thumbnail"
      />
      <div className="d-flex flex-column justify-content-center ml-4">
        <p className="item-name">{name}</p>
        <p className="item-price">₹{totalCost}</p>
      </div>
      <div className="d-flex align-items-center">
        <i onClick={() => decrement(id)} class="fa fa-minus minus-item"></i>
        <p className="item-quantity">{formattedQuantity}</p>
        <i onClick={() => increment(id)} class="fa fa-plus plus-item"></i>
      </div>
    </div>
  );
};

export default CartItem;

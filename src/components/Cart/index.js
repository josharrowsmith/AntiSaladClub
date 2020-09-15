import React from 'react';
import { CartWrapper } from './styles';
import CartContext from 'context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuantity} item(s) / ${checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
}

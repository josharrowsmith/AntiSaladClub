import React from 'react';
import { CartWrapper } from './styles';
import CartContext from 'context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  console.log(checkout)
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {0} item(s) / {'0.00'}
      </div>
    </CartWrapper>
  );
}

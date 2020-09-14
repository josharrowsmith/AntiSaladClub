import React from 'react';
import CartContext from 'context/CartContext';
import { navigate } from '@reach/router';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>The Cart</h1>
    </section>
  );
}

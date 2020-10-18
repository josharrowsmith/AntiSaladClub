import React from 'react';
import { Button } from '../Button';
import { AddToCartWrapper } from './styles';
import CartContext from 'context/CartContext';

export function AddCart({ variantId, available }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <AddToCartWrapper>
      <form onSubmit={handleSubmit}>
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </AddToCartWrapper>
  );
}

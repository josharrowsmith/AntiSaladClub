import React from 'react';
import CartContext from 'context/CartContext';
import { navigate } from '@reach/router';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  console.log(checkout.lineItems)

  return (
    <section>
       {checkout?.lineItems?.map(item => (
        <div key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>£{item.variant.price}</div>
        </div>
      ))}
    </section>
  );
}

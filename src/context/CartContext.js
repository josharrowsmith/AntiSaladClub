import React, { useState } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_ACCESS_TOKEN,
});

const defaultState = {
  cart: {},
};

const CartContext = React.createContext(defaultState);
export default CartContext;

export function CartContextProvider({ children }) {

  return (
    <CartContext.Provider
    >
      {children}
    </CartContext.Provider>
  );
}

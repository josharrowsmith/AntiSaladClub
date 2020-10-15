import React from 'react';
import { HeaderWrapper } from './styles';
import { Link } from 'gatsby';
import { Nav } from "../Nav"
import { Cart } from "../Cart"


export function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>logo</h1>
      </Link>
      <Cart />
    </HeaderWrapper>
  );
}

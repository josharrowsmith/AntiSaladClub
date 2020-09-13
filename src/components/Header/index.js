import React from 'react';
import { HeaderWrapper } from './styles';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <h1>logo</h1>
        </Link>
      </div>
    </HeaderWrapper>
  );
}

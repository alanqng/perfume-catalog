import React from 'react';
import { HeaderComponent } from './Header.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/flaconi-seeklogo.com.svg';

export const Header = () => {
  return (
    <HeaderComponent>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
      </div>
    </HeaderComponent>
  );
};

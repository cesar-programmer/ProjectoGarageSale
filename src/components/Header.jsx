/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import iconMenu from '@icons/icon_menu.svg';
import logoHeader from '@logos/logo_yard_sale.svg';
import carIcon from '@icons/icon_shopping_cart.svg';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMobile] = useState(false);

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMenu);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu-icon" onClick={handleToggleMobile} />
      <div className="navbar-left">
        <img src={logoHeader} alt="logo" className="logo-header" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            example@gmail.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={carIcon} alt="shopping-cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleMenu && <MobileMenu />}
    </nav>
  );
}

export default Header;

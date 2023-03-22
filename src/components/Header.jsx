/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

import iconMenu from '@icons/icon_menu.svg';
import logoHeader from '@logos/logo_yard_sale.svg';
import carIcon from '@icons/icon_shopping_cart.svg';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMobile] = useState(false);
  // const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext); // aqui se esta llamando al contexto
  const { setToggleOrders } = useContext(AppContext); // aqui se esta llamando al contexto

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMenu);
  };

  const handleToggleOrders = () => {
    setToggleOrders();
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const handleToggleOrders = () => {
  //   // setToggleOrders(!toggleOrders);
  //   setToggle(false);
  //   setToggleMobile(false);
  // };

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
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToggleOrders()}
          >
            <img src={carIcon} alt="shopping-cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            {/* aqui se esta llamando al contexto */}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : false}
      {/* aqui con el if ternario pregunto directamnete si es falso o verdadero */}
      {/* aqui se puede realizar la prefunta tanto como con if ternario o conun and  */}
      {toggleMenu && <MobileMenu />}
      {state.toggleOrders && <MyOrder />}

    </nav>
  );
}

export default Header;

import React from 'react';
import '../styles/Header.scss';

function Header() {
  return (
    <nav>
      <img src="./assets/img/icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="./assets/img/logos/logo_yard_sale.svg" alt="logo" className="logo" />
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
          <li className="navbar-email">example@gmail.com</li>
          <li className="navbar-shopping-cart">
            <img src="/assets/img/icons/icon_shopping_cart.svg" alt="shopping-cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

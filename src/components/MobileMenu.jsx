/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/MobileMenu.scss';

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Elelectronics</a>
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
      <ul>
        <li>
          <a href="/">My Orders</a>
        </li>
        <li>
          <a href="/">My Account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className="email">Example@gmail.com</a>
        </li>
        <li>
          <a href="/" className="sing-out">Sing out</a>
        </li>
      </ul>
    </div>
  );
}
export default MobileMenu;

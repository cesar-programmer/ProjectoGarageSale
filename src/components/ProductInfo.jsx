/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import '@styles/ProductInfo.scss';

function ProductInfo() {
  return (
    <div>
      <div className="product-detail-close-secundary">
        <img src="./assets/img/icons/icon_close.png" alt="close" className="close" />
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <div className="product-info-secundary">
        <p>$50.00</p>
        <p>bike</p>
        <p> With its functional and practical design, this bike also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your house. ✌️</p>
        <button className="primary-button-secundary add-to-cart-button-secundary">
          <img src="./assets/img/icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </div>

  );
}

export default ProductInfo;

import React from 'react';
import '../styles/ProductItem.scss';
import image from '../../public/assets/img/icons/bt_add_to_cart.svg';

function ProductItem() {
  return (
    <div className="ProductItem">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;

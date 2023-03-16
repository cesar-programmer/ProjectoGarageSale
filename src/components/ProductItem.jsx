/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import image from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={image} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;

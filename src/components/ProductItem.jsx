/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

import addCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';
import '@styles/ProductItem.scss';

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);
  const { state } = useContext(AppContext); // aqui se esta llamando al contexto

  const itsProductAdded = () =>
    state.cart.some((item) => item.id === product.id);
    // utilizo some para que me devuelva un booleano
    // aqui chequeamos si el producto ya esta en el carrito

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
          {itsProductAdded() ? (
          // esto es para que cuando se le de click al boton de añadir al carrito cambie de icono
            <img src={addedCart} alt="Addeed to cart" />
          ) : (
            <img src={addCart} alt="Add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;

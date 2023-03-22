/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import image from '@icons/icon_close.png';

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img className="close" src={image} alt="close" onClick={() => handleRemove(product)} />
    </div>
    // aqui se le pasa la funcion que se va a ejecutar y el item que se va a eliminar
    // se utiliza la funcion anonima para que no se ejecute la funcion al momento de renderizar el componente solo al hacer click se ejecuta
  );
}

export default OrderItem;

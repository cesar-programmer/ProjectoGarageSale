/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import '@styles/MyOrder.scss';

function MyOrder() {
  const { state } = useContext(AppContext);
  const { setToggleOrders } = useContext(AppContext);
  const handleToggleOrders = () => { setToggleOrders(); };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    // reducer es una funcion que recibe dos parametros, el primero es el acumulador y el segundo es el valor actual
    const sum = state.cart.reduce(reducer, 0);
    // reduce es un metodo que recibe dos parametros, el primero es la funcion que se va a ejecutar y el segundo es el valor inicial
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img className="arrow" src={arrow} alt="arrow" onClick={() => handleToggleOrders()} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default MyOrder;

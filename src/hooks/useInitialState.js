import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state, // esto es para que no se pierda el estado anterior del carrito se mantiene
      cart: [...state.cart, payload], // esto es para que se agregue el nuevo producto al carrito
    });
  };

  return {
    state,
    addToCart,
  };
};

export default useInitialState;

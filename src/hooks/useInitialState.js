/* eslint-disable max-len */
import { useState } from 'react';

const initialState = {
	cart: [],
	toggleOrders: false, // Añadimos el toggle Order

};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state, // se crea una copia del estado para que no se modifique el estado original
			cart: [...state.cart, { ...payload, idCart: state.cart.length + 1 },
				// aqui se le pasa el payload que es el item que se va a agregar al carrito y se le agrega un id
			],
		});
	};

	const removeFromCart = (payload) => {
		setState({
			...state, // se crea una copia del estado para que no se modifique el estado original
			cart: state.cart.filter((items) => items.idCart !== payload.idCart),
			// aqui se le pasa el payload que es el item que se va a eliminar del carrito y se filtra el array para que no se muestre el item que se va a eliminar
		});
	};

	const setToggleOrders = () => { setState({ ...state, toggleOrders: !state.toggleOrders }); };
	// aqui se crea una funcion que cambia el estado del toggleOrders

	return {
		state,
		addToCart,
		removeFromCart,
		setToggleOrders,
	};
};

export default useInitialState;

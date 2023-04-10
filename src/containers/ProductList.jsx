/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = ' https://api.escuelajs.co/api/v1/products';

function ProductList() {
	// esta es una funcion traida de un hook para traer los productos
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => ( // aqui se esta mapeando los productos
					<ProductItem product={product} key={product.id} />
					// aqui decimos que pruductItem es un componente que recibe un producto y un id
				))}
			</div>
		</section>
	);
}

export default ProductList;

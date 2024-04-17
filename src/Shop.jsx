import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import ProductGrid from "./components/productGrid/ProductGrid";

export default function Shop() {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				setProduct(json);
			});
	}, []);

	return (
		<>
			{products.length > 0 ? <ProductGrid prods={products} /> : <h1>LOADING</h1>}
		</>
	);
}

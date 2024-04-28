import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProductGrid from "./components/productGrid/ProductGrid";

export default function Shop() {
	const [products] = useOutletContext();

	return (
		products && (
			<>
				<ProductGrid prods={products} />
			</>
		)
	);
}

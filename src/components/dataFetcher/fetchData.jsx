/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

function fetchData(id = "") {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
					mode: "cors",
					method: "GET",
				});
				setProduct(await res.json());
			} catch (err) {
				setError(err);
				console.error("An error has occured", err);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { loading, error, products };
}

export default fetchData;

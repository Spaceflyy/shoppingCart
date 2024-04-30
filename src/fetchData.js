import { useState, useEffect } from "react";

const useDataFetch = (id = "") => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
			.then((res) => {
				if (res.status >= 400) {
					throw new Error("Server Error");
				}

				return res.json();
			})
			.then((json) => {
				setProduct(json);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { loading, error, products };
};

export default useDataFetch;

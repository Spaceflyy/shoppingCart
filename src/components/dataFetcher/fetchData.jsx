import { useState, useEffect } from "react";

function useDataFetch(id = "") {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
					mode: "cors",
				});
				setProduct(await res.json());
			} catch (err) {
				setError(err);
				console.error("An error has occured", err);
			} finally {
				setLoading(false);
				console.log(products);
			}
		})();

		// fetch(`https://fakestoreapi.com/proaducts/${id}`, { mode: "cors" })
		// 	.then((res) => {
		// 		if (res.status >= 400) {
		// 			throw new Error("Server Error");
		// 		}
		// 		return res.json();
		// 	})
		// 	.then((json) => {
		// 		setProduct(json);
		// 	})
		// 	.catch((error) => {
		// 		setError(error);
		// 	})
		// 	.finally(() => setLoading(false));
	}, []);

	return { loading, error, products };
}

export default useDataFetch;

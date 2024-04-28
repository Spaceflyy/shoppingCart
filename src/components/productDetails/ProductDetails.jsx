import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
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
			});
	}, []);
	return (
		<>
			<img src={product.image} alt="" />
			<p>{product.title}</p>
			<p>{product.description}</p>
		</>
	);
}

import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
// import getStars from "../dataFetcher/helpers";
import { useEffect, useState } from "react";

export default function ProductDetails() {
	const { id } = useParams();
	const [products] = useOutletContext();
	const [newProduct, setNewProduct] = useState({});
	useEffect(() => {
		const prod = products.filter((item) => {
			return item.id === Number(id);
		});
		setNewProduct(prod[0]);
	}, [products, id]);

	return (
		<>
			<img src={newProduct.image} alt="" />
			<h1>{newProduct.title}</h1>
			<p>£{newProduct.price}</p>

			<button>Add to Bag</button>
			<button>Favourite</button>
			<p>{newProduct.description}</p>
		</>
	);
}

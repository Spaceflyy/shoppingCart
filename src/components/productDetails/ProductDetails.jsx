import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import useDataFetch from "../dataFetcher/fetchData";
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
			<p>{newProduct.title}</p>
			<p>{newProduct.description}</p>
		</>
	);
}

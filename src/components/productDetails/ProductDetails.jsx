import { useParams } from "react-router-dom";

import useDataFetch from "../../fetchData";

export default function ProductDetails() {
	const { id } = useParams();
	const { loading, error, products } = useDataFetch(id);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>A network error has occured. </p>;
	return (
		<>
			<img src={products.image} alt="" />
			<p>{products.title}</p>
			<p>{products.description}</p>
		</>
	);
}

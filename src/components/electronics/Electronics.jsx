import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";

export default function Electronics() {
	const { products } = useOutletContext();

	return (
		products && (
			<ProductGrid
				prods={products.filter((item) => {
					return item.category === "electronics";
				})}
				category="Electronics"
			/>
		)
	);
}

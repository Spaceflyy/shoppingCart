import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";

export default function Women() {
	const { products } = useOutletContext();

	return (
		products && (
			<ProductGrid
				prods={products.filter((item) => {
					return item.category === "women's clothing";
				})}
				category="Women's Clothing"
			/>
		)
	);
}

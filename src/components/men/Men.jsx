import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";

export default function Men() {
	const [products, setProduct] = useOutletContext();

	return (
		products && (
			<ProductGrid
				prods={products.filter((item) => {
					return item.category === "men's clothing";
				})}
				category="Mens's Clothing"
			/>
		)
	);
}

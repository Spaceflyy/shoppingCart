import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";
export default function Searchre() {
	const { products, searchTerm } = useOutletContext();

	return (
		products && (
			<ProductGrid
				prods={products.filter((item) =>
					item.title.toLowerCase().match(searchTerm.toLowerCase())
				)}
				category="Results"
			/>
		)
	);
}

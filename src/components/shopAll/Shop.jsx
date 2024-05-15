import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";

export default function Shop() {
	const [products] = useOutletContext();

	return (
		products && (
			<>
				<ProductGrid prods={products} category="All" />
			</>
		)
	);
}

import { useOutletContext } from "react-router-dom";
import ProductGrid from "../productGrid/ProductGrid";

export default function Jewellery() {
	const [products, setProduct] = useOutletContext();

	return (
		products && (
			<ProductGrid
				prods={products.filter((item) => {
					return item.category === "jewelery";
				})}
				category="Jewellery"
			/>
		)
	);
}

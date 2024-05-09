import { useOutletContext } from "react-router-dom";
import ProductGrid from "./components/productGrid/ProductGrid";
import NavBar from "./components/navBar/NavBar";

export default function Shop() {
	const [products] = useOutletContext();

	return (
		products && (
			<>
				<ProductGrid prods={products} />
			</>
		)
	);
}

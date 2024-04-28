import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	const [itemsInCart, setItems] = useState([]);
	const [products, setProduct] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products", { mode: "cors" })
			.then((res) => {
				if (res.status >= 400) {
					throw new Error("Server Error");
				}

				return res.json();
			})
			.then((json) => {
				setProduct(json);
				console.log(json);
			})
			.catch((error) => setError(error));
	}, []);
	return (
		<>
			<SearchBar items={itemsInCart} />
			<NavBar />
			{error ? (
				<p>A network error has occured </p>
			) : (
				<Outlet context={[products, setProduct]} />
			)}
		</>
	);
}

export default App;

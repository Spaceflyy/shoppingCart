import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDataFetch from "./fetchData";

function App() {
	const [itemsInCart, setItems] = useState([]);
	const { loading, error, products } = useDataFetch();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>A network error has occured. </p>;
	return (
		<>
			<SearchBar items={itemsInCart} />
			<NavBar />
			<Outlet context={[products]} />
		</>
	);
}

export default App;

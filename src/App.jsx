import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDataFetch from "./components/dataFetcher/fetchData";

function App() {
	const [itemsInCart, setItems] = useState([]);
	const { loading, error, products } = useDataFetch();

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>A network error has occured. </h1>;
	return (
		<>
			<SearchBar items={itemsInCart} />
			<NavBar />
			<Outlet context={[products]} />
		</>
	);
}

export default App;

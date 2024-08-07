import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDataFetch from "./components/dataFetcher/fetchData";

function App() {
	const [itemsInCart, setItems] = useState([]);
	const [faves, setFaves] = useState([]);
	const [active, setActive] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const { loading, error, products } = useDataFetch();

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>A network error has occured. </h1>;
	return (
		<>
			<SearchBar
				isActive={active}
				onClick={() => setActive(!active)}
				items={itemsInCart}
				favourites={faves}
				searchTerm={searchTerm}
				setSearchTerm={(text) => setSearchTerm(text)}
			/>
			<NavBar isActive={active} />
			<Outlet
				context={{
					products,
					itemsInCart,
					setItems,
					faves,
					setFaves,
					searchTerm,
					setSearchTerm,
				}}
			/>
		</>
	);
}

export default App;

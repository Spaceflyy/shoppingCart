import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDataFetch from "./components/dataFetcher/fetchData";

//NAV BAR IS STILL HIDDEN IF ACTIVE IS SET TO FALSE WHEN YOU RETURN TO A LARGER VIEW

function App() {
	const [itemsInCart, setItems] = useState([]);
	const [active, setActive] = useState(true);
	const { loading, error, products } = useDataFetch();

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>A network error has occured. </h1>;
	return (
		<>
			<SearchBar onClick={() => setActive(!active)} items={itemsInCart} />
			<NavBar isActive={active} />
			<Outlet context={[products]} />
		</>
	);
}

export default App;

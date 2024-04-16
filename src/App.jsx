import NavBar from "./components/navBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
	const [itemsInCart, setItems] = useState([]);
	return (
		<>
			<SearchBar items={itemsInCart} />
			<NavBar />
			<Outlet />
		</>
	);
}

export default App;

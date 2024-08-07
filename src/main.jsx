import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./cssReset.css";
import Home from "./components/homePage/Home.jsx";
import Shop from "./components/shopAll/Shop.jsx";
import Women from "./components/women/Women.jsx";
import Men from "./components/men/Men.jsx";
import Jewellery from "./components/jewellery/Jewellery.jsx";
import Electronics from "./components/electronics/Electronics.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import SearchResults from "./components/searchResults/SearchResults.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "shop", element: <Shop /> },
			{ path: "women", element: <Women /> },
			{ path: "men", element: <Men /> },
			{ path: "jewellery", element: <Jewellery /> },
			{ path: "electronics", element: <Electronics /> },
			{ path: "shop/:id", element: <ProductDetails /> },
			{ path: "checkout", element: <Checkout /> },
			{ path: "favourites", element: <Favourites /> },
			{ path: "results", element: <SearchResults /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

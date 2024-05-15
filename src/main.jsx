import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./cssReset.css";
import Home from "./Home.jsx";
import Shop from "./components/shopAll/Shop.jsx";
import Women from "./components/women/Women.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "shop", element: <Shop /> },
			{ path: "women", element: <Women /> },
			{ path: "shop/:id", element: <ProductDetails /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

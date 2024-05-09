import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";

import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { beforeEach, describe, it, expect, vi, afterEach } from "vitest";

import App from "../App";
import Shop from "../Shop";
import Home from "../Home";
import Women from "../components/women/Women";
import ProductDetails from "../components/productDetails/ProductDetails";
import userEvent from "@testing-library/user-event";

beforeEach(() => {});

afterEach(() => {
	vi.clearAllMocks();
});

describe("App component", () => {
	const testData = {
		id: 1,
		title: "Mens Casual Slim Fit",
		price: 109.95,
		description:
			"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: {
			rate: 3.9,
			count: 120,
		},
	};

	const routes = [
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
	];

	const router = createMemoryRouter(routes, {
		initialEntries: ["/"],
		initialIndex: 0,
	});

	it("Renders loading while data is being fetched", async () => {
		render(<RouterProvider router={router} />);

		expect(screen.getByRole("heading", { name: "Loading..." }).toBeInTheDocument);
	});

	it("Renders correctly after data fetch", async () => {
		render(<RouterProvider router={router} />);

		expect(screen.getByRole("heading", { name: "Loading..." }).toBeInTheDocument);

		await waitForElementToBeRemoved(() =>
			screen.getByRole("heading", { name: "Loading..." })
		);

		expect(
			screen.getByRole("heading", { name: "This is HOME" }).toBeInTheDocument
		);
	});

	it("Product grid component renders products", async () => {
		const shopPage = createMemoryRouter(routes, {
			initialEntries: ["/shop"],
			initialIndex: 0,
		});
		render(<RouterProvider router={shopPage} />);

		await waitForElementToBeRemoved(() =>
			screen.getByRole("heading", { name: "Loading..." })
		);

		expect(
			screen.getByRole("heading", { name: testData.title }).toBeInTheDocument
		);
	});

	it("Nav buttons work correctly", async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		await waitForElementToBeRemoved(() =>
			screen.getByRole("heading", { name: "Loading..." })
		);

		const button = screen.getByRole("link", { name: "Shop" });

		expect(
			screen.getByRole("heading", { name: "This is HOME" }).toBeInTheDocument
		);

		await user.click(button);

		expect(
			screen.getByRole("heading", { name: testData.title }).toBeInTheDocument
		);
	});
});

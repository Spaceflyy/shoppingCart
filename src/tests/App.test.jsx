import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App component", () => {
	it("renders button", () => {
		// since screen does not have the container property, we'll destructure render to obtain a container for this test
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	it("renders button count = 1", async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole("button", { name: "count is 0" });

		await user.click(button);

		expect(screen.getByRole("button").textContent).toMatch(/Count is 1/i);
	});
});

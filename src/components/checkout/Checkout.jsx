import { useOutletContext } from "react-router-dom";

export default function Checkout() {
	const { itemsInCart } = useOutletContext();

	return itemsInCart.map((item) => {
		return (
			<p key={item.id}>
				<p>{item.title}</p>
				<p>Price: {(item.quantity * item.price).toFixed(2)}</p>
				<p>Quantity: {item.quantity}</p>
			</p>
		);
	});
}

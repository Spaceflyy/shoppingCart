import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutStyles.module.css";
import ClearIcon from "@mui/icons-material/Clear";
export default function Checkout() {
	const { itemsInCart, setItems } = useOutletContext();
	let numOfItems = itemsInCart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	let total = itemsInCart
		.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0)
		.toFixed(2);

	return (
		<div className={styles.container}>
			<div>
				<h1>Checkout </h1>

				<div className={styles.content}>
					{numOfItems ? (
						<p>
							Your bag contains {numOfItems} item(s) and comes to a total of £{total}.
						</p>
					) : (
						<p>Your bag is empty.</p>
					)}
					{itemsInCart.map((item) => {
						return (
							<div className={styles.item} key={item.id}>
								<div className={styles.imgContainer}>
									<img className={styles.img} src={item.image} alt="" />
								</div>

								<div className={styles.itemInfo}>
									<div>
										<p>{item.title}</p>
										<button
											className={styles.minusBtn}
											onClick={() => {
												setItems(
													itemsInCart.map((i) =>
														i.quantity !== 1 && i.id === item.id
															? { ...i, quantity: i.quantity - 1 }
															: i
													)
												);
											}}
										>
											-
										</button>
										<input
											readOnly={true}
											className={styles.quantInput}
											type="number"
											value={item.quantity}
										/>
										<button
											className={styles.addBtn}
											onClick={() => {
												setItems(
													itemsInCart.map((i) =>
														i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
													)
												);
											}}
										>
											+
										</button>
									</div>
									<div>
										<p> £{(item.quantity * item.price).toFixed(2)}</p>
										<button
											className={styles.removeItem}
											title="Remove Item"
											onClick={() =>
												setItems(
													itemsInCart.filter((i) => {
														return i.id !== item.id;
													})
												)
											}
										>
											<ClearIcon></ClearIcon>
										</button>
									</div>
								</div>
							</div>
						);
					})}
					{numOfItems ? (
						<div className={styles.totalCost}>
							<h2>Total: £{total}</h2>
							<span style={{ textAlign: "right" }}>
								<p>Exc. UK Standard Delivery (Normally £4.95)</p>
								<p>FREE Delivery to Store (Subject To Availability)</p>
							</span>
							<div className={styles.checkoutButton}>
								<button>Checkout</button>
							</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

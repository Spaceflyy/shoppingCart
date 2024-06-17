import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutStyles.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
											<DeleteForeverIcon></DeleteForeverIcon>
										</button>
									</div>
								</div>
							</div>
						);
					})}
					{numOfItems ? (
						<h2
							style={{ fontSize: "1.2rem", width: "max-content", marginLeft: "auto" }}
						>
							Total: £{total}
						</h2>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

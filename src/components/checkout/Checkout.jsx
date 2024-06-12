import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutStyles.module.css";
export default function Checkout() {
	const { itemsInCart } = useOutletContext();
	let numOfItems = itemsInCart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	let total = itemsInCart
		.reduce((acc, item) => {
			return acc + item.price;
		}, 0)
		.toFixed(2);

	return (
		<div className={styles.container}>
			<div>
				<h1>Checkout ({numOfItems})</h1>

				<div className={styles.content}>
					{numOfItems ? (
						<p>
							Your bag contains {numOfItems} items and comes to a total of £{total}.
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
									<div className={styles.itemTitle}>
										<p>{item.title}</p>
										<p> £{(item.quantity * item.price).toFixed(2)}</p>
									</div>
									<p>Quantity: {item.quantity}</p>
								</div>
							</div>
						);
					})}
					<h2
						style={{ fontSize: "1.2rem", width: "max-content", marginLeft: "auto" }}
					>
						Total: £{total}
					</h2>
				</div>
			</div>
		</div>
	);
}

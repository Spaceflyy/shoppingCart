import { useOutletContext } from "react-router-dom";
import styles from "./FaveStyles.module.css";

export default function Favourites() {
	const { faves, itemsInCart, setItems, setFaves } = useOutletContext();

	return (
		<div className={styles.content}>
			<h1>Favourites</h1>
			{faves.length > 0 ? (
				<div className={styles.grid}>
					{faves.map((item) => {
						return (
							<div className={styles.item} key={item.id}>
								<div className={styles.imgContainer}>
									<img src={item.image}></img>
								</div>
								<div className={styles.itemInfo}>
									<div>
										<p>{item.title}</p>
										<p>£{item.price.toFixed(2)}</p>
									</div>
									<div className={styles.buttons}>
										<button
											onClick={() => {
												setItems([
													...itemsInCart,
													{
														...faves.find((i) => i.id === item.id),
														quantity: 1,
													},
												]);
												setFaves(faves.filter((i) => i.id !== item.id));
											}}
										>
											Add to Bag
										</button>
										<button
											onClick={() => {
												setFaves(faves.filter((i) => i.id !== item.id));
											}}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<p style={{ padding: "1rem", textAlign: "center" }}>
					You have no saved items. <br></br>
					<br></br>Start to add your favourites by clicking the little heart next to
					items
				</p>
			)}
		</div>
	);
}

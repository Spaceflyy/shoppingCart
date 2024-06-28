import { useOutletContext } from "react-router-dom";
import styles from "./FaveStyles.module.css";
import { X } from "@mui/icons-material";
export default function Favourites() {
	const { faves, itemsInCart, setItems, setFaves } = useOutletContext();

	return (
		<div className={styles.content}>
			<h1>Favourites</h1>
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
					);
				})}
			</div>
		</div>
	);
}

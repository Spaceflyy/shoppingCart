/* eslint-disable react/prop-types */
import styles from "./GridStyles.module.css";
import generateStars from "../dataFetcher/helpers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductGrid({ prods, category = "" }) {
	const { products, faves, setFaves } = useOutletContext();
	return (
		<div className={styles.container}>
			<h1>
				{category} ({prods.length})
			</h1>

			<div className={styles.grid}>
				{prods.map((item) => {
					return (
						<Link to={`/shop/${item.id}`} className={styles.product} key={item.id}>
							<img src={item.image} alt="" />
							<button
								onClick={() => setFaves([...faves, "test"])}
								className={styles.favBtn}
							>
								<FavoriteBorderIcon></FavoriteBorderIcon>
							</button>
							<div>
								<h2>{item.title}</h2>
								<div className={styles.rating}>{generateStars(item.rating.rate)}</div>(
								{item.rating.count})<p>£{item.price.toFixed(2)}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

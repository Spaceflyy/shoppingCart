/* eslint-disable react/prop-types */
import styles from "./GridStyles.module.css";
import generateStars from "../dataFetcher/helpers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

export default function ProductGrid({ prods, category = "hello" }) {
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
							<FavoriteBorderIcon className={styles.favBtn}></FavoriteBorderIcon>
							<h2>{item.title}</h2>
							<p className={styles.rating}>
								{generateStars(item.rating.rate)}({item.rating.count})
							</p>
							<p>£{item.price}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

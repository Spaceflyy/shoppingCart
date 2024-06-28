/* eslint-disable react/prop-types */
import styles from "./GridStyles.module.css";
import generateStars from "../dataFetcher/helpers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductGrid({ prods, category = "" }) {
	const { faves, setFaves } = useOutletContext();
	return (
		<div className={styles.container}>
			<h1>
				{category} ({prods.length})
			</h1>

			<div className={styles.grid}>
				{prods.map((item) => {
					return (
						<div className={styles.productContainer} key={item.id}>
							<Link id={item.id} to={`/shop/${item.id}`} className={styles.product}>
								<img src={item.image} alt="" />
								<div>
									<h2>{item.title}</h2>
									<div className={styles.rating}>{generateStars(item.rating.rate)}</div>£
									{item.price.toFixed(2)}
								</div>
							</Link>
							<button
								onClick={() => {
									faves.includes(item)
										? setFaves(faves.filter((i) => i.id !== item.id))
										: setFaves([...faves, item]);
								}}
								className={styles.favBtn}
							>
								{faves.includes(item) ? (
									<FavoriteIcon style={{ fill: "#DC143C" }}></FavoriteIcon>
								) : (
									<FavoriteBorderIcon></FavoriteBorderIcon>
								)}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

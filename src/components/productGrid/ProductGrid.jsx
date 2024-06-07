/* eslint-disable react/prop-types */
import styles from "./GridStyles.module.css";
import generateStars from "../dataFetcher/helpers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
					let favedProd = products.find((i) => {
						return i.id === item.id;
					});
					return (
						<div className={styles.productContainer} key={item.id}>
							<Link id={item.id} to={`/shop/${item.id}`} className={styles.product}>
								<img src={item.image} alt="" />
								<div>
									<h2>{item.title}</h2>
									<div className={styles.rating}>{generateStars(item.rating.rate)}</div>(
									{item.rating.count})<p>£{item.price.toFixed(2)}</p>
								</div>
							</Link>
							<button
								onClick={() => {
									faves.includes(favedProd)
										? setFaves(faves.filter((i) => i.id !== favedProd.id))
										: setFaves([...faves, favedProd]);
								}}
								className={styles.favBtn}
							>
								{faves.includes(favedProd) ? (
									<FavoriteIcon></FavoriteIcon>
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

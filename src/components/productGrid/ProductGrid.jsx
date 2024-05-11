/* eslint-disable react/prop-types */
import styles from "./GridStyles.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

export default function ProductGrid({ prods }) {
	const genStars = (number) => {
		let stars = Array(5)
			.fill(<StarOutlineIcon style={{ fill: "#FDB515" }}></StarOutlineIcon>)
			.fill(
				<StarIcon style={{ fill: "#FDB515" }}></StarIcon>,
				0,
				Math.floor(number)
			);

		if (number % 1 != 0) {
			stars[Math.floor(number)] = (
				<StarHalfIcon style={{ fill: "#FDB515" }}></StarHalfIcon>
			);
		}

		return stars;
	};
	return (
		<div className={styles.grid}>
			{prods.map((item) => {
				return (
					<Link to={`/shop/${item.id}`} className={styles.product} key={item.id}>
						<img src={item.image} alt="" />
						<FavoriteBorderIcon className={styles.favBtn}></FavoriteBorderIcon>

						<h2>{item.title}</h2>
						<p className={styles.rating}>
							{genStars(item.rating.rate)}({item.rating.count})
						</p>
						<p>£{item.price}</p>
					</Link>
				);
			})}
		</div>
	);
}

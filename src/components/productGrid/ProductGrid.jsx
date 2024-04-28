import styles from "./GridStyles.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
export default function ProductGrid({ prods }) {
	return (
		<div className={styles.grid}>
			{prods.map((item) => {
				return (
					<Link to={`/shop/${item.id}`} className={styles.product} key={item.id}>
						<img src={item.image} alt="" />
						<p>{item.title}</p>
						<p>£{item.price}</p>
						<p>
							{item.rating.rate}
							<StarIcon fontSize="small"></StarIcon> ({item.rating.count})
						</p>
					</Link>
				);
			})}
		</div>
	);
}

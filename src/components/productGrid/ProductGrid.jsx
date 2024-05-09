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
						<h2>{item.title}</h2>
						<h3>£{item.price}</h3>
						<h3 className={styles.rating}>
							{item.rating.rate}
							<StarIcon key={item.id}></StarIcon>({item.rating.count})
						</h3>
					</Link>
				);
			})}
		</div>
	);
}

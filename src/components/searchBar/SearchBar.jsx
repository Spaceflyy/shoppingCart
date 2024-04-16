import styles from "./SearchBarStyles.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function SearchBar({ items }) {
	return (
		<div className={styles.topBar}>
			<div className={styles.searchContainer}>
				<div className={styles.logoPlaceholder}>LOGO</div>
				<label htmlFor="search" className={styles.visuallyhidden}>
					Search for products:
				</label>
				<input
					placeholder="Search for products"
					className={styles.search}
					type="text"
					name="search"
					id="search"
				/>
				<button aria-label="search button" className={styles.button}>
					<SearchIcon></SearchIcon>
				</button>
			</div>
			<div className={styles.checkoutContainer}>
				<PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>
				<FavoriteBorderOutlinedIcon fontSize="large"></FavoriteBorderOutlinedIcon>
				<div className={styles.basket}>
					<div className={styles.count}>{items.length}</div>
					<ShoppingBagOutlinedIcon fontSize="large"></ShoppingBagOutlinedIcon>
				</div>

				<button className={styles.checkoutButton}>Checkout</button>
			</div>
		</div>
	);
}

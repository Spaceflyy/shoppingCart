import styles from "./SearchBarStyles.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export default function SearchBar({ onClick, items }) {
	return (
		<div aria-label="top bar" className={styles.topBar}>
			<button className={styles.menu} onClick={onClick}>
				<MenuIcon fontSize="large"></MenuIcon>
			</button>
			<img alt="Logo image" className={styles.logo} src="/assets/logo.svg"></img>
			<div className={styles.searchContainer}>
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
				<SearchIcon
					className={styles.mobileSearchBtn}
					sx={{ stroke: "#ffffff", strokeWidth: 1 }}
					fontSize="large"
				></SearchIcon>
				<PersonOutlineOutlinedIcon
					sx={{ stroke: "#ffffff", strokeWidth: 1 }}
					fontSize="large"
				></PersonOutlineOutlinedIcon>
				<FavoriteBorderOutlinedIcon
					sx={{ stroke: "#ffffff", strokeWidth: 1 }}
					fontSize="large"
				></FavoriteBorderOutlinedIcon>
				<div className={styles.basket}>
					<div className={styles.count}>{items.length}</div>
					<ShoppingBagOutlinedIcon
						sx={{ stroke: "#ffffff", strokeWidth: 1 }}
						fontSize="large"
					></ShoppingBagOutlinedIcon>
				</div>
				<button className={styles.checkoutButton}>Checkout</button>
			</div>
		</div>
	);
}

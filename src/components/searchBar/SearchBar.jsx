import styles from "./SearchBarStyles.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

export default function SearchBar({ isActive, onClick, items, favourites }) {
	return (
		<div aria-label="top bar" className={styles.topBar}>
			<button className={styles.menu} onClick={onClick}>
				{isActive ? (
					<CloseIcon fontSize="large"></CloseIcon>
				) : (
					<MenuIcon fontSize="large"></MenuIcon>
				)}
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
				<button aria-label="search button" className={styles.searchBtn}>
					<SearchIcon></SearchIcon>
				</button>
			</div>
			<div className={styles.checkoutContainer}>
				<button className={styles.mobileSearchBtn}>
					<SearchIcon
						sx={{ stroke: "#ffffff", strokeWidth: 1 }}
						fontSize="large"
					></SearchIcon>
				</button>
				<button>
					<PersonOutlineOutlinedIcon
						sx={{ stroke: "#ffffff", strokeWidth: 1 }}
						fontSize="large"
					></PersonOutlineOutlinedIcon>
				</button>

				<Link to={"favourites"}>
					<button className={styles.faveouriteBtn}>
						<FavoriteBorderOutlinedIcon
							sx={{ stroke: "#ffffff", strokeWidth: 1 }}
							fontSize="large"
						></FavoriteBorderOutlinedIcon>
						{favourites.length > 0 && (
							<CircleIcon
								className={styles.faveIndicator}
								style={{ fill: "red", fontSize: "0.75rem" }}
							></CircleIcon>
						)}
					</button>
				</Link>
				<Link to={"checkout"} className={styles.basket}>
					<div className={styles.count}>
						{items.reduce((acc, obj) => {
							return acc + obj.quantity;
						}, 0)}
					</div>
					<button>
						<ShoppingBagOutlinedIcon
							sx={{ stroke: "#ffffff", strokeWidth: 1 }}
							fontSize="large"
						></ShoppingBagOutlinedIcon>
					</button>
				</Link>
			</div>
		</div>
	);
}

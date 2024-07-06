import styles from "./SearchBarStyles.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({
	setSearchTerm,
	searchTerm,
	isActive,
	onClick,
	items,
	favourites,
}) {
	const [isShown, setShown] = useState(false);
	const navigate = useNavigate();
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
			<div
				className={`${styles.searchContainer}  ${
					isShown ? styles.shown : styles.hidden
				}`}
			>
				<label htmlFor="search" className={styles.visuallyhidden}>
					Search for products:
				</label>
				<input
					value={searchTerm}
					onBlur={() => {
						setShown(false);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							navigate("/results");
						}
					}}
					placeholder="Search for Products"
					className={styles.search}
					type="text"
					name="search"
					id="search"
					onChange={(e) => {
						navigate("/results");
						setSearchTerm(e.target.value);
					}}
				/>

				<button
					onClick={() => {
						setShown(!isShown);
					}}
					linkto
					aria-label="search button"
					className={styles.searchBtn}
				>
					<CloseIcon></CloseIcon>
				</button>
			</div>
			<div className={styles.checkoutContainer}>
				<button
					onClick={() => {
						setShown(!isShown);
					}}
					className={styles.mobileSearchBtn}
				>
					<SearchIcon
						sx={{ stroke: "#ffffff", strokeWidth: 1 }}
						fontSize="large"
					></SearchIcon>
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

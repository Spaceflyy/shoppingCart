import styles from "./MobileNav.module.css";
import { Link } from "react-router-dom";
export default function NavBar({ isActive = true }) {
	return (
		<nav className={isActive ? styles.nav : styles.inactive}>
			<ul className={styles.navList}>
				<Link to="/" className={styles.navBtn}>
					<li> Home </li>
				</Link>
				<Link to="shop" className={styles.navBtn}>
					<li> Shop </li>
				</Link>
				<Link to="women" className={styles.navBtn}>
					<li> Women </li>
				</Link>
				<Link to="men" className={styles.navBtn}>
					<li> Men </li>
				</Link>
				<Link to="jewellery" className={styles.navBtn}>
					<li> Jewellery </li>
				</Link>
				<Link to="electronics" className={styles.navBtn}>
					<li> Electronics </li>
				</Link>
			</ul>
		</nav>
	);
}
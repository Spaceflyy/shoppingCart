import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav className={styles.nav}>
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

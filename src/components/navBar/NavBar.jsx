import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<Link to="/" className={styles.hover}>
					<li> Home </li>
				</Link>
				<Link to="shop" className={styles.hover}>
					<li> Shop </li>
				</Link>
				<Link className={styles.hover}>
					<li> Women </li>
				</Link>
				<Link className={styles.hover}>
					<li> Men </li>
				</Link>
				<Link className={styles.hover}>
					<li> Jewelery </li>
				</Link>
			</ul>
		</nav>
	);
}

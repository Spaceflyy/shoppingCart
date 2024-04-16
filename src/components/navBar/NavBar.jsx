import styles from "./NavStyles.module.css";

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.hover}>Home</li>
				<li className={styles.hover}>Shop</li>
				<li className={styles.hover}>Women</li>
				<li className={styles.hover}>Men</li>
			</ul>
		</nav>
	);
}

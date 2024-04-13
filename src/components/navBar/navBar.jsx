import styles from "./NavStyles.module.css";

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li>Home</li>
				<li>Shop</li>
				<li>Women</li>
				<li>Men</li>
			</ul>
		</nav>
	);
}

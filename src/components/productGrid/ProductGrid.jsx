import styles from "./GridStyles.module.css";

export default function ProductGrid({ prods }) {
	return (
		<div className={styles.grid}>
			{prods.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.title}</p>
						<img src={item.image} alt="" />
					</div>
				);
			})}
		</div>
	);
}

import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import getStars from "../dataFetcher/helpers";
import { useEffect, useState } from "react";
import styles from "./Productdetails.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductDetails() {
	const { id } = useParams();
	const { products, itemsInCart, setItems } = useOutletContext();
	const [newProduct, setNewProduct] = useState({});

	useEffect(() => {
		const prod = products.find((item) => {
			return item.id === Number(id);
		});
		setNewProduct(prod);
	}, [products, id]);

	return (
		newProduct.rating && (
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.img}>
						<img src={newProduct.image} alt="" />
					</div>
					<div className={styles.productInfo}>
						<div className={styles.productTitle}>
							<h1>{newProduct.title}</h1>
							<h2>£{newProduct.price.toFixed(2)}</h2>
						</div>
						<div>
							<div className={styles.rating}>{getStars(newProduct.rating.rate)}</div> (
							{newProduct.rating.count})
						</div>
						<hr></hr>
						<div className={styles.buttons}>
							<button
								onClick={() => {
									setItems([...itemsInCart, newProduct]);
								}}
								className={styles.button}
							>
								Add to Bag
							</button>
							<button className={styles.favourite}>
								<FavoriteBorderIcon
									style={{ marginRight: "auto", verticalAlign: "middle" }}
									fontSize="small"
								></FavoriteBorderIcon>
								<p>Favourite</p>
							</button>
						</div>
						<hr></hr>
						<p>{newProduct.description}</p>
					</div>
				</div>
			</div>
		)
	);
}

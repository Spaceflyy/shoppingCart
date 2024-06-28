/* eslint-disable no-mixed-spaces-and-tabs */
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import getStars from "../dataFetcher/helpers";
import { useEffect, useState } from "react";
import styles from "./Productdetails.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";

export default function ProductDetails() {
	const { id } = useParams();
	const { products, itemsInCart, setItems, faves, setFaves } =
		useOutletContext();
	const [newProduct, setNewProduct] = useState({});
	const [buttonText, setBtnText] = useState("Add to Bag");
	const [disabled, setDisabled] = useState(false);

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
								disabled={disabled}
								onClick={() => {
									const newCartItem = {
										id: newProduct.id,
										image: newProduct.image,
										title: newProduct.title,
										price: newProduct.price,
										quantity: 1,
									};

									itemsInCart.some((i) => i.id === newCartItem.id)
										? setItems(
												itemsInCart.map((item) =>
													item.id === newCartItem.id
														? { ...item, quantity: item.quantity + 1 }
														: item
												)
										  )
										: setItems([...itemsInCart, newCartItem]);
									setBtnText(
										<>
											Added
											<DoneIcon
												style={{ verticalAlign: "middle" }}
												fontSize="small"
											></DoneIcon>
										</>
									);
									setDisabled(true);
									setTimeout(() => {
										setBtnText("Add to Bag");
										setDisabled(false);
									}, 3000);
								}}
								className={styles.button}
							>
								{buttonText}
							</button>
							<button
								onClick={() => {
									faves.includes(newProduct)
										? setFaves(faves.filter((item) => item.id !== newProduct.id))
										: setFaves([...faves, newProduct]);
								}}
								className={styles.favourite}
							>
								{faves.includes(newProduct) ? (
									<>
										<FavoriteIcon
											style={{ fill: "#DC143C", marginRight: "auto" }}
											fontSize="medium"
										></FavoriteIcon>
										<p>Remove</p>
									</>
								) : (
									<>
										<FavoriteBorderIcon
											style={{ marginRight: "auto" }}
											fontSize="medium"
										></FavoriteBorderIcon>
										<p>Favourite</p>
									</>
								)}
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

import Imgslider from "../imgSlider/ImgSlider";
import jewellery from "/assets/imgs/jewellery.jpg";
import men from "/assets/imgs/men.jpg";
import summer from "/assets/imgs/summer.jpg";
import womens from "/assets/imgs/womens.jpg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const IMGS = [jewellery, men, summer, womens];
export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Imgslider imgUrls={IMGS}></Imgslider>
				<div className={styles.imgContainer}>
					<div className={styles.imgsInContainer}>
						<div className={styles.imgText}>
							<h2>Special Occasion</h2>
							<Link to="men">Shop Mens</Link>
						</div>
						<img src="/assets/imgs/shopmen.jpg" alt="" />
					</div>
					<div className={styles.imgsInContainer}>
						<div className={styles.imgText}>
							<h2>Urban Wear</h2>
							<Link to="women">Shop Womens</Link>
						</div>
						<img src="/assets/imgs/shopwomen.jpg" alt="" />
					</div>
					<div className={styles.imgsInContainer}>
						<div className={styles.imgText}>
							<h2>Glistening Gems</h2>
							<Link to="jewellery">Shop Jewellery</Link>
						</div>
						<img src="/assets/imgs/shopjewel.jpg" alt="" />
					</div>
				</div>
				<div className={styles.bottomBanner}>
					<div>
						<div className={styles.imgText}>
							<h2>Essential Electronics</h2>
							<Link to="electronics">Shop Electronics</Link>
						</div>
						<img src="/assets/imgs/shopElectron.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

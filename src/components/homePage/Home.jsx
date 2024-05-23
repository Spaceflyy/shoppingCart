import Imgslider from "../imgSlider/ImgSlider";
import jewellery from "/assets/imgs/jewellery.jpg";
import men from "/assets/imgs/men.jpg";
import summer from "/assets/imgs/summer.jpg";
import womens from "/assets/imgs/womens.jpg";
import styles from "./Home.module.css";
const IMGS = [jewellery, men, summer, womens];
export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>This is HOME</h1>
				<Imgslider imgUrls={IMGS}></Imgslider>
				<div className={styles.imgContainer}>
					<div>
						<p>Shop Mens</p>
						<img src="/assets/imgs/shopmen.jpg" alt="" />
					</div>
					<div>
						<p>Shop Womens</p>
						<img src="/assets/imgs/shopwomen.jpg" alt="" />
					</div>
					<div>
						<p>Shop Jewellery</p>
						<img src="/assets/imgs/shopjewel.jpg" alt="" />
					</div>
				</div>
				<div className={styles.bottomBanner}>
					<div>
						<img src="/assets/imgs/shopElectron.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

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
			<h1>This is HOME</h1>
			<Imgslider imgUrls={IMGS}></Imgslider>
			<div className={styles.imgContainer}>
				<img src="/assets/imgs/shopmen.jpg" alt="" />
				<img src="/assets/imgs/shopwomen.jpg" alt="" />
				<img src="/assets/imgs/shopjewel.jpg" alt="" />
			</div>
		</div>
	);
}

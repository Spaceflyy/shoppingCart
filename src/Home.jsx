import Imgslider from "./components/imgSlider/ImgSlider";
import jewellery from "/assets/imgs/jewellery.jpg";
import men from "/assets/imgs/men.jpg";
import summer from "/assets/imgs/summer.jpg";
import womens from "/assets/imgs/womens.jpg";

const IMGS = [jewellery, men, summer, womens];
export default function Home() {
	return (
		<>
			<h1>This is HOME</h1>
			<Imgslider imgUrls={IMGS}></Imgslider>
		</>
	);
}

import styles from "./ImgSlider.module.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

import { useEffect, useState } from "react";

const Imgslider = ({ imgUrls }) => {
	const [imgIndex, setImgIndex] = useState(0);

	const nextImage = () => {
		if (imgIndex === imgUrls.length - 1) {
			setImgIndex(0);
		} else {
			setImgIndex(imgIndex + 1);
		}
	};

	const prevImage = () => {
		if (imgIndex === 0) {
			setImgIndex(imgUrls.length - 1);
		} else {
			setImgIndex(imgIndex - 1);
		}
	};

	useEffect(() => {
		// setTimeout(() => {
		// 	nextImage();
		// }, 3000);
	}),
		[imgIndex];
	return (
		<div className={styles.sliderContainer}>
			<button className={styles.navBtn} style={{ left: 0 }} onClick={prevImage}>
				<NavigateBeforeRoundedIcon
					style={{
						filter: "drop-shadow(0 0.2rem 0.2rem black)",
						color: "white",
						fontSize: "2rem",
					}}
				></NavigateBeforeRoundedIcon>
			</button>

			<button className={styles.navBtn} style={{ right: 0 }} onClick={nextImage}>
				<NavigateNextRoundedIcon
					style={{
						filter: "drop-shadow(0 0.2rem 0.2rem black)",
						color: "white",
						fontSize: "2rem",
					}}
				></NavigateNextRoundedIcon>
			</button>

			<div
				style={{ translate: `${-100 * imgIndex}%` }}
				className={styles.imageContainer}
			>
				{imgUrls.map((img) => (
					<img key={img} className={styles.image} src={img}></img>
				))}
			</div>
			<div className={styles.navCircles}>
				{imgUrls.map((_, index) => {
					return (
						<button onClick={() => setImgIndex(index)} key={index}>
							{index === imgIndex ? (
								<CircleIcon
									style={{
										filter: "drop-shadow(0 0 0.2rem black)",
										fontSize: "1rem",
									}}
								></CircleIcon>
							) : (
								<CircleOutlinedIcon
									style={{ filter: "drop-shadow(0 0 0.2rem black)", fontSize: "1rem" }}
								></CircleOutlinedIcon>
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Imgslider;

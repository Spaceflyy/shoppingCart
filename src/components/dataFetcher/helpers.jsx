import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const genStars = (number) => {
	let stars = Array(5)
		.fill(<StarOutlineIcon style={{ fill: "#FDB515" }}></StarOutlineIcon>)
		.fill(
			<StarIcon style={{ fill: "#FDB515" }}></StarIcon>,
			0,
			Math.floor(number)
		);

	if (number % 1 != 0) {
		stars[Math.floor(number)] = (
			<StarHalfIcon style={{ fill: "#FDB515" }}></StarHalfIcon>
		);
	}

	return stars;
};

export default genStars;

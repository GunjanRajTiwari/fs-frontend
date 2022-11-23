import React from "react";
import colors from "../config/colors";
import { FaChevronRight } from "react-icons/fa";

export const ImageCard = ({ onClick, image, title, subTitle, info }) => {
	return (
		<div style={{ ...styles.container, backgroundImage: `url(${image})` }}>
			<div style={styles.info}>{info}</div>
			<div style={styles.content} onClick={onClick}>
				<FaChevronRight color={colors.white} style={styles.open} />
				<h3 style={styles.title}>{title}</h3>
				<small>{subTitle}</small>
			</div>
		</div>
	);
};

const styles = {
	container: {
		height: "300px",
		width: "400px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: "2em",
		margin: "1em",
		boxShadow: colors.shadow,
	},
	info: {
		margin: "0.8em",
		padding: "0.5em 1em",
		backgroundColor: colors.primary,
		borderRadius: "2em",
		width: "fit-content",
		color: colors.light,
	},
	content: {
		margin: "0.8em",
		padding: "1em",
		backgroundColor: colors.primary,
		borderRadius: "2em",
		color: colors.light,
		position: "relative",
		boxShadow: colors.shadowLight,
		cursor: "pointer",
	},
	title: {
		fontWeight: 500,
	},
	open: {
		position: "absolute",
		top: 32,
		right: 20,
		color: colors.white,
	},
};

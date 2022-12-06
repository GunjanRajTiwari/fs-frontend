import React from "react";
import colors from "../config/colors";
import { FaChevronRight } from "react-icons/fa";

export const NumberCard = ({
	number,
	title,
	subTitle,
	info,
	onClick,
	color = colors.primary,
}) => {
	return (
		<div
			onClick={onClick}
			className='highlight'
			style={styles.container}>
			<div style={styles.number}>{number || "#"}</div>
			<div style={styles.main}>
				<h3>{title}</h3>
				<small>{subTitle}</small>
			</div>
			<div style={{ ...styles.info, backgroundColor: color }}>
				{info}
			</div>
			{onClick && <FaChevronRight />}
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "1em",
		padding: "1em",
		cursor: "pointer",
		borderRadius: "2em",
	},
	main: {
		flex: 1,
	},
	info: {
		minWidth: "100px",
		textAlign: "center",
		backgroundColor: colors.primary,
		color: colors.light,
		padding: "0.8em 1em",
		borderRadius: "2em",
	},
	number: {
		fontSize: "1rem",
		fontWeignt: 500,
	},
};

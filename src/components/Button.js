import React from "react";
import colors from "../config/colors";

export const Button = ({ title, style, onClick }) => {
	return (
		<button onClick={onClick} style={{ ...styles.button, ...style }}>
			{title}
		</button>
	);
};

const styles = {
	button: {
		padding: "0.9em 1.6em",
		backgroundColor: colors.primary,
		textAlign: "center",
		color: colors.white,
		borderRadius: "1em",
		textTransform: "uppercase",
		fontWeight: 500,
		width: "fit-content",
		border: "none",
	},
};

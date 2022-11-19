import React from "react";
import colors from "../config/colors";

export const Button = ({ title, style }) => {
	return <div style={{ ...styles.button, ...style }}>{title}</div>;
};

const styles = {
	button: {
		padding: "1em 2em",
		backgroundColor: colors.primary,
		textAlign: "center",
		color: colors.white,
		borderRadius: "1em",
		textTransform: "uppercase",
		fontWeight: 500,
		width: "fit-content",
	},
};

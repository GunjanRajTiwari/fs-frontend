import React from "react";
import colors from "../config/colors";

export const Button = ({ title, style, onClick, icon }) => {
	return (
		<button onClick={onClick} style={{ ...styles.button, ...style }}>
			{icon && icon}
			<span>{title}</span>
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
		border: "none",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
};

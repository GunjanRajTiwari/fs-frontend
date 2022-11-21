import React from "react";
import colors from "../config/colors";

export const Navbar = () => {
	return (
		<div style={styles.container}>
			<img src='./logo.png' />
			<div>Profile</div>
		</div>
	);
};

const styles = {
	container: {
		height: "60px",
		backgroundColor: colors.primary,
		display: "flex",
		color: colors.light,
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1em 2em",
	},
};

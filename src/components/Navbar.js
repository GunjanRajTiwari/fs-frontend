import React from "react";
import { FaRegUser } from "react-icons/fa";
import colors from "../config/colors";

export const Navbar = () => {
	return (
		<div style={styles.container}>
			<img style={styles.logo} src='./logo-white.png' />
			<div>
				<FaRegUser />
			</div>
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
	logo: {
		height: "20px",
	},
};

import React from "react";
import colors from "../config/colors";
import { Button } from "../components/Button";

export const Login = () => {
	return (
		<div style={styles.container}>
			<div style={styles.left}>
				<div style={styles.logo}>Fourspace</div>
				<h1 style={styles.heading}>
					Nepal's best Competitive Programming platform.
				</h1>
			</div>
			<div style={styles.right}>
				<Button title='Login with Google' />
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		textAlign: "center",
		height: "100vh",
	},
	left: {
		backgroundColor: colors.primary,
		color: colors.white,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		position: "absolute",
		padding: "1em",
		left: 0,
		top: 0,
	},
	heading: {
		maxWidth: "400px",
		fontSize: "2.4rem",
		lineHeight: "1.8em",
	},
};

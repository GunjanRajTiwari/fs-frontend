import React from "react";
import { Link } from "react-router-dom";
import colors from "../config/colors";

export const NotFound = () => {
	return (
		<div style={styles.container}>
			<div style={styles.text}>
				<h1 style={styles.heading}>404</h1>
				<p>You landed on the wrong neighbourhood !!!</p>
				<Link style={styles.link} to='/'>
					Go to homepage
				</Link>
			</div>
			<img style={styles.image} src='/cat.gif' />
		</div>
	);
};

const styles = {
	container: {
		background: "#151515",
		color: colors.white,
		height: "100%",
		overflow: "auto",
	},
	text: {
		textAlign: "center",
		padding: "1em",
	},
	heading: {
		fontSize: "4rem",
	},
	link: {
		color: colors.secondary,
		textDecoration: "none",
		fontSize: "1rem",
	},
	image: {
		width: "100%",
		maxWidth: "500px",
		display: "block",
		margin: "auto",
	},
};

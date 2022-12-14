import React from "react";
import colors from "../config/colors";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const LandingPage = () => {
	return (
		<div style={styles.container}>
			<div style={styles.left}>
				<img style={styles.logo} src='./logo-white.png' />
				<h1 style={styles.brand}>FourSpace</h1>
				<p style={styles.heading}>
					Nepal's best Competitive Programming platform.
				</p>
				<Link style={styles.link} to='/login'>
					<Button
						style={styles.link}
						title='Get Access to Beta'
					/>
					<FaChevronRight size={16} />
				</Link>
			</div>
			<div style={styles.right}>
				<img style={styles.mockup} src='./mockup.png' />
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(400px,1fr))",
		textAlign: "center",
		height: "100vh",
	},
	left: {
		backgroundColor: colors.primary,
		color: colors.white,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	mockup: {
		width: "80%",
	},
	logo: {
		position: "absolute",
		margin: "2em",
		left: 0,
		top: 0,
		height: "16px",
	},
	heading: {
		maxWidth: "400px",
		fontSize: "1rem",
		lineHeight: "1.8em",
		marginBottom: "5em",
	},
	google: {
		height: "24px",
		padding: "0 0.8em 0 0",
	},
	link: {
		color: colors.secondary,
		textDecoration: "none",
		fontWeight: "bold",
		display: "inline",
	},
	brand: {
		fontSize: "3rem",
	},
};

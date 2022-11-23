import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import colors from "../config/colors";
import { Button } from "./Button";

export const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);

	const handleLogout = () => {
		window.open(process.env.REACT_APP_API + "/auth/logout", "_self");
	};

	return (
		<div style={styles.container}>
			<img style={styles.logo} src='./logo-white.png' />
			<div
				style={styles.menu}
				onClick={() => setDropdown(!dropdown)}>
				<FaRegUser size={16} />
			</div>
			{dropdown && (
				<div style={styles.dropdown}>
					<Link
						style={styles.item}
						className='highlight'
						to='/profile'>
						Profile
					</Link>
					<Button title='Logout' onClick={handleLogout} />
				</div>
			)}
		</div>
	);
};

const styles = {
	container: {
		height: "60px",
		backgroundColor: colors.primary,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1em 2em",
		position: "relative",
	},
	logo: {
		height: "20px",
	},
	menu: {
		backgroundColor: colors.white,
		height: "32px",
		width: "32px",
		borderRadius: "2em",
		display: "grid",
		placeItems: "center",
		color: colors.primary,
	},
	dropdown: {
		position: "absolute",
		top: "60px",
		right: 0,
		padding: "1em",
		backgroundColor: colors.white,
		borderRadius: "2em",
		display: "flex",
		flexDirection: "column",
		minWidth: "200px",
		alignItems: "stretch",
		zIndex: 10,
		boxShadow: colors.shadow,
	},
	item: {
		textDecoration: "none",
		color: "inherit",
		padding: "1em",
		textAlign: "center",
		borderRadius: "1em",
		marginBottom: "0.5em",
	},
};

import React, { useState } from "react";
import { FaRegUser, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import colors from "../config/colors";
import { Button } from "./Button";

export const Navbar = ({ userObject }) => {
	const [dropdown, setDropdown] = useState(false);

	const handleLogout = () => {
		window.open("/auth/logout", "_self");
	};

	return (
		<div style={styles.container}>
			<Link to='/'>
				<img style={styles.logo} src='/logo-white.png' />
			</Link>
			<div
				style={styles.menu}
				onClick={() => setDropdown(!dropdown)}>
				{userObject ? (
					<img
						referrerpolicy='no-referrer'
						style={styles.avatar}
						src={userObject.avatar}
					/>
				) : (
					<FaRegUser style={styles.icon} size={16} />
				)}
				<FaChevronDown style={styles.icon} size={16} />
			</div>
			{dropdown && (
				<div style={styles.dropdown}>
					<Link
						style={styles.item}
						className='highlight'
						to={"/profile/" + userObject.username}
						onClick={() => setDropdown(false)}>
						Profile
					</Link>

					<Link
						style={styles.item}
						className='highlight'
						to={"/problems"}
						onClick={() => setDropdown(false)}>
						Problems
					</Link>

					<Link
						style={styles.item}
						className='highlight'
						to={"/contests"}
						onClick={() => setDropdown(false)}>
						Contests
					</Link>

					<Link
						style={styles.item}
						className='highlight'
						to='/leaderboard'
						onClick={() => setDropdown(false)}>
						Leaderboard
					</Link>

					<Button
						style={{ textAlign: "center" }}
						title='Logout'
						onClick={handleLogout}
					/>
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
		width: "64px",
		borderRadius: "2em",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
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
		// textAlign: "center",
		borderRadius: "1em",
		marginBottom: "0.5em",
	},
	avatar: {
		height: "32px",
		borderRadius: "50%",
	},
	icon: {
		margin: "0 0.6em",
	},
};

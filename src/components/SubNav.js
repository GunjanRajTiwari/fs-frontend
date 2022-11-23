import React from "react";
import colors from "../config/colors";

export const SubNav = ({ menu }) => {
	return (
		<div style={styles.container}>
			{menu.map(item => (
				<div
					key={item.value}
					style={
						item.value === 1
							? { ...styles.menu, ...styles.active }
							: styles.menu
					}>
					{item.name}
				</div>
			))}
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		backgroundColor: colors.light,
		borderRadius: "2em",
		backgroundColor: colors.primary,
		color: colors.white,
	},
	menu: {
		padding: "0.5em",
		textAlign: "center",
		cursor: "pointer",
		borderRadius: "2em",
		margin: "0.2em",
	},
	active: {
		color: colors.primary,
		backgroundColor: colors.white,
		backgroundOpacity: 0.6,
	},
};

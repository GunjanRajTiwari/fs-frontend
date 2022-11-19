import React from "react";
import colors from "../config/colors";

export const SubNav = ({ menu }) => {
	return (
		<div style={styles.container}>
			{menu.map(item => (
				<div
					key={item.value}
					className='highlight-light'
					style={styles.menu}>
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
		boxShadow: colors.shadow,
	},
	menu: {
		padding: "0.5em",
		textAlign: "center",
		cursor: "pointer",
		borderRadius: "1em",
		borderRight: "1px solid " + colors.light,
	},
	active: {
		backgroundColor: colors.secondary,
		backgroundOpacity: 0.6,
	},
};

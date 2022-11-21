import React from "react";
import colors from "../config/colors";

export const SubNav = ({ menu }) => {
	return (
		<div style={styles.container}>
			{menu.map(item => (
				<div
					key={item.value}
					className='highlight-light'
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
		boxShadow: colors.shadow,
		backgroundColor: colors.light,
		borderRadius: "2em",
	},
	menu: {
		padding: "0.5em",
		textAlign: "center",
		cursor: "pointer",
		borderRadius: "2em",
		margin: "0.2em",
	},
	active: {
		backgroundColor: colors.white,
		backgroundOpacity: 0.6,
	},
};

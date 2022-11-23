import React, { useState } from "react";
import colors from "../config/colors";
import { Button } from "./Button";

export const Picker = ({ style, placeholder, options, onChange }) => {
	const [drop, setDrop] = useState(false);
	const [selected, setSelected] = useState();

	const handleClick = () => {
		setDrop(true);
	};

	const handleSelect = item => {
		setSelected(item);
		setDrop(false);
		onChange(item);
	};

	return (
		<div style={{ ...styles.container, ...style }}>
			<Button
				onClick={handleClick}
				title={selected ? selected.name + "...v" : placeholder + "...v"}
			/>
			<div style={styles.dropdown}>
				{drop &&
					options.map(item => (
						<div
							onClick={() => handleSelect(item)}
							style={styles.option}
							key={item.value}>
							{item.name}
						</div>
					))}
			</div>
		</div>
	);
};

const styles = {
	option: {
		cursor: "pointer",
		padding: "0.2em 0.8em",
		fontSize: "0.8rem",
	},
	dropdown: {
		position: "absolute",
		zIndex: 2,
		backgroundColor: colors.light,
		maxHeight: "200px",
		overflowY: "auto",
		minWidth: "120px",
	},
};

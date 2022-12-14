import React, { useState } from "react";
import colors from "../config/colors";
import { FaChevronDown } from "react-icons/fa";

export const Picker = ({ style, placeholder, options, onChange }) => {
	const [drop, setDrop] = useState(false);
	const [selected, setSelected] = useState();

	const handleClick = () => {
		setDrop(!drop);
	};

	const handleSelect = item => {
		setSelected(item);
		setDrop(false);
		onChange(item);
	};

	return (
		<div style={{ ...styles.container, ...style }}>
			<div style={styles.picker} onClick={handleClick}>
				{selected ? selected.name : placeholder}{" "}
				<FaChevronDown size={12} />
			</div>
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
	picker: {
		padding: "0.5em 1.4em",
		borderBottom: "1px solid " + colors.primary,
		display: "inline block",
		width: "fit-content",
		backgroundColor: colors.light,
		display: "flex",
		alignItems: "center",
		gap: "0.5em",
	},
};

import React from "react";
import colors from "../config/colors";

export const Leaderboard = ({ data, showLabel }) => {
	if (!data || data.length < 1)
		return <div>Wait for the leaderboard to update.</div>;
	return (
		<table style={styles.container} cellPadding={8} cellSpacing={8}>
			{showLabel && (
				<tr style={styles.labels}>
					<th style={styles.cell}>#</th>
					<th style={styles.cell} className='extend'>
						Name
					</th>
					<th style={styles.cell}>Score</th>
				</tr>
			)}
			{data.map(item => (
				<tr style={styles.row}>
					<td style={styles.rank}>{item.rank}</td>
					<td className='extend' style={styles.name}>
						{item.name}
						<span></span>
					</td>
					<td style={styles.score}>{item.score}</td>
				</tr>
			))}
		</table>
	);
};

const styles = {
	container: {
		backgroundColor: colors.white,
		borderRadius: "1em",
		overflow: "hidden",
		maxWidth: "600px",
		margin: "auto",
	},
	labels: {
		backgroundColor: colors.primary,
		color: colors.light,
		textTransform: "uppercase",
	},
	row: {
		borderBottom: "1px solid " + colors.light,
	},
	rank: {
		backgroundColor: colors.light,
		borderRadius: "2em",
		textAlign: "center",
	},
	score: {
		backgroundColor: colors.primary,
		color: colors.white,
		borderRadius: "2em",
		textAlign: "center",
	},
	name: {
		color: colors.primary,
		fontWeight: 500,
	},
	cell: {
		borderRadius: "2em",
	},
};

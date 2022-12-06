import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../config/colors";
import { Loading } from "./Loading";

export const Leaderboard = ({ leaderboard, showLabel }) => {
	const navigate = useNavigate();
	if (!leaderboard) return <Loading />;

	return (
		<table style={styles.container} cellPadding={10} cellSpacing={8}>
			<tbody>
				{showLabel && (
					<tr style={styles.labels}>
						<th style={styles.cell}>#</th>
						<th style={styles.cell} className='extend'>
							Name
						</th>
						<th style={styles.cell}>Score </th>
					</tr>
				)}

				{leaderboard.map((item, index) => (
					<tr
						key={index}
						onClick={() => navigate(item.url)}
						style={styles.row}>
						<td style={styles.rank}>{item.rank}</td>
						<td className='extend' style={styles.name}>
							<span
								style={{
									color:
										colors[item.color] ||
										colors.primary,
								}}>
								{item.name}
							</span>
						</td>
						<td style={styles.score}>{item.score}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const styles = {
	container: {
		backgroundColor: colors.white,
		borderRadius: "1em",
		overflow: "hidden",
		maxWidth: "720px",
		margin: "auto",
		borderSpacing: "0.5em",
	},
	labels: {
		backgroundColor: colors.primary,
		color: colors.light,
		textTransform: "uppercase",
	},
	row: {
		borderBottom: "1px solid " + colors.light,
		cursor: "pointer",
	},
	meRow: {
		borderBottom: "1px solid " + colors.primary,
		cursor: "pointer",
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

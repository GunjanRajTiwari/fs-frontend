import React from "react";
import { Leaderboard } from "../components/Leaderboard";

const data = [
	{
		rank: 1,
		name: "Gunjan Raj Tiwari",
		score: 1987,
	},
	{
		rank: 2,
		name: "Sandesh Dhungana",
		score: 1965,
	},
	{
		rank: 3,
		name: "Umesh Saud",
		score: 1958,
	},
	{
		rank: 4,
		name: "Tourist",
		score: 1922,
	},
];

export const LeaderboardPage = () => {
	return (
		<div>
			<h2 style={styles.heading}>Top Force</h2>
			<Leaderboard data={data} />
		</div>
	);
};

const styles = {
	heading: {
		textAlign: "center",
	},
};

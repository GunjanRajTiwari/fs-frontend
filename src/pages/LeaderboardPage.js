import React, { useEffect, useState } from "react";
import axios from "axios";
import { Leaderboard } from "../components/Leaderboard";
import { Loading } from "../components/Loading";
import { NumberCard } from "../components/NumberCard";
import colors from "../config/colors";

const data = [
	{
		rank: 1,
		name: "Gunjan Raj Tiwari",
		score: 1987,
	},
	{
		rank: 20,
		name: "Sandesh Dhungana",
		score: 1965,
	},
	{
		rank: 300,
		name: "Umesh Saud",
		score: 1958,
	},
	{
		rank: 4000,
		name: "Tourist",
		score: 1922,
	},
];

export const LeaderboardPage = () => {
	const [leaderboard, setLeaderboard] = useState();
	const [me, setMe] = useState();

	useEffect(() => {
		loadLeaderboard();
	}, []);

	const loadLeaderboard = async () => {
		const response = await axios.get("/api/leaderboard");
		const data = response.data.data;
		data.leaderboard = data.leaderboard.map(user => {
			var row = {};
			row.name = user.name;
			row.rank = user.place;
			row.score = user.rating;
			row.url = "/user/" + user.username;
			row.color = user.rank;
			return row;
		});
		setLeaderboard(data.leaderboard);
		if (!data.me) return;
		var meData = {};
		meData.name = data.me.name;
		meData.rank = data.me.place;
		meData.score = data.me.rating;
		meData.url = "/user/" + data.me.username;
		meData.color = data.me.rank;
		setMe(meData);
	};

	return (
		<div>
			<h2 style={styles.heading}>Top Force</h2>
			{me && (
				<div style={styles.me}>
					<NumberCard
						number={"#" + me.rank}
						title={me.name}
						subTitle={me.color}
						info={me.score}
					/>
				</div>
			)}
			<Leaderboard leaderboard={leaderboard} showLabel />
		</div>
	);
};

const styles = {
	heading: {
		textAlign: "center",
	},
	me: {
		backgroundColor: colors.white,
		margin: "2em auto",
		width: "100%",
		maxWidth: "800px",
		borderRadius: "2em",
		padding: "1em",
	},
};

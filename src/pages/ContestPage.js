import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NumberCard } from "../components/NumberCard";
import { Leaderboard } from "../components/Leaderboard";
import colors from "../config/colors";
import axios from "axios";

// const data = [
// 	{
// 		rank: 1,
// 		name: "Gunjan Raj Tiwari",
// 		score: 1987,
// 	},
// 	{
// 		rank: 20,
// 		name: "Sandesh Dhungana",
// 		score: 1965,
// 	},
// 	{
// 		rank: 300,
// 		name: "Umesh Saud",
// 		score: 1958,
// 	},
// 	{
// 		rank: 4000,
// 		name: "Tourist",
// 		score: 1922,
// 	},
// ];

export const ContestPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [me, setMe] = useState();
	const [problems, setProblems] = useState();
	const [contest, setContest] = useState();
	const [leaderboard, setLeaderboard] = useState();

	useEffect(() => {
		loadContest();
		loadLeaderboard();
	}, []);

	const loadContest = async () => {
		const result = await axios.get("/api/contests/" + id);
		setContest(result.data.data);
	};

	const loadLeaderboard = async () => {
		const result = await axios.get(
			"/api/contests/" + id + "/leaderboard"
		);
		setMe(result.data.data.me);
		var data = result.data.data.leaderboard.map(item => {
			item.username = item.User.username;
			item.name = item.User.name;
			item.color = item.User.rank;
			delete item.User;
			return item;
		});
		setLeaderboard(data);
	};

	return (
		<div>
			<h1 style={styles.heading}>Weekly Drive 1</h1>
			<p style={styles.heading}>Starting in: 00:02:33</p>
			<div style={styles.problemList}>
				<NumberCard
					number='A'
					title='Trapping Rain Water'
					subTitle='Solved by: 152'
					info='20 points'
					onClick={() => navigate("/problem")}
				/>
				<NumberCard
					number='B'
					title='XOR Game'
					subTitle='Solved by: 23'
					info='30 points'
				/>
				<NumberCard
					number='C'
					title='Wierd Permutation'
					subTitle='Solved by: 9'
					info='50 points'
				/>
			</div>
			<h2 style={styles.heading}>Leaderboard</h2>
			{me && (
				<div style={styles.me}>
					<NumberCard
						number={"#" + me.rank}
						title={me.User.name}
						subTitle={"Solved: " + me.solved}
						info={me.score}
					/>
				</div>
			)}
			<Leaderboard leaderboard={leaderboard} showLabel />
			<div style={styles.description}>
				This contest will have 3 questions of varying difficulty.
				Bla bla bla description about the contest
			</div>
		</div>
	);
};

const styles = {
	heading: {
		textAlign: "center",
	},
	problemList: {
		padding: "1em",
		borderRadius: "2em",
		shadow: colors.shadow,
		backgroundColor: colors.white,
		maxWidth: "800px",
		margin: "1em auto",
	},
	description: {
		maxWidth: "800px",
		margin: "auto",
		padding: "1em",
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

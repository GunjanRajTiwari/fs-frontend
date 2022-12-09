import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NumberCard } from "../components/NumberCard";
import { Leaderboard } from "../components/Leaderboard";
import colors from "../config/colors";
import axios from "axios";
import { Button } from "../components/Button";

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
		console.log(result.data.data);
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

	const handleRegister = async () => {
		console.log(contest.id);
		const { data } = await axios.post(
			"/api/contests/" + contest.id + "/register"
		);
		if (data.error) {
			alert(data.error);
			return;
		}
		alert("Registered Successfully !!");
		loadContest();
	};

	return (
		<div>
			<h1 style={styles.heading}>Weekly Drive 1</h1>
			<p style={styles.heading}>Starting in: 00:02:33</p>

			{contest && !contest.registered && !contest.started && (
				<Button
					style={styles.registerBtn}
					title='Register'
					onClick={handleRegister}
				/>
			)}

			{contest?.Problems && (
				<div style={styles.problemList}>
					{contest?.Problems?.map((problem, index) => (
						<NumberCard
							key={problem.id}
							number={String.fromCharCode(65 + index)}
							title={problem.title}
							subTitle='Easy'
							info={problem.point + " Points"}
							onClick={() =>
								navigate("/problems/" + problem.id)
							}
						/>
					))}
				</div>
			)}

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
				{contest && contest.description}
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
	registerBtn: {
		margin: "2em auto",
		boxShadow: colors.shadow,
	},
};

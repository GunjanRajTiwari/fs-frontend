import React from "react";
import { useNavigate } from "react-router-dom";
import { NumberCard } from "../components/NumberCard";
import colors from "../config/colors";

export const ContestPage = () => {
	const navigate = useNavigate();
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
};

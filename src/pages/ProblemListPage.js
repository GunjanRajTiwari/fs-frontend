import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NumberCard } from "../components/NumberCard";
import { Loading } from "../components/Loading";
import colors from "../config/colors";

// const problems = [{ id: 1, title: "Hello World", point: 10 }];

export const ProblemListPage = () => {
	const [problems, setProblems] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		loadProblems();
	}, []);

	const loadProblems = async () => {
		const { data } = await axios.get("/api/problems");
		setProblems(data.data);
	};

	if (!problems) return <Loading />;

	return (
		<div>
			<h1 style={styles.heading}>All Problems</h1>
			<div style={styles.problemList}>
				{problems.map(problem => (
					<NumberCard
						key={problem.id}
						number={problem.id}
						title={problem.title}
						info={problem.point}
						onClick={() => navigate("/problems/" + problem.id)}
					/>
				))}
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
};

import React, { useEffect, useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { SubNav } from "../components/SubNav";
import { Submissions } from "../components/Submissions";

import colors from "../config/colors";
import languages from "../config/languages";
import problemMenu from "../config/problemMenu";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProblemPage = () => {
	const [active, setActive] = useState(problemMenu[0].value);
	const [problem, setProblem] = useState();
	const { id } = useParams();

	useEffect(() => {
		loadProblem();
	}, []);

	const loadProblem = async () => {
		const { data } = await axios.get("/api/problems/" + id);
		if (data.error) alert(data.error);
		console.log(data.data);
		setProblem(data.data);
	};

	return (
		<div style={styles.page}>
			<div style={styles.container}>
				<div style={styles.left}>
					<h3 style={styles.title}>
						{problem
							? problem.id + ". " + problem.title
							: "..."}
					</h3>
					<SubNav
						menu={problemMenu}
						active={active}
						setActive={setActive}
					/>
					{active === 1 && (
						<div style={styles.description}>
							{problem?.description || "........."}
						</div>
					)}
					{active === 2 && (
						<Submissions data={problem.solutions} />
					)}
				</div>
				<CodeEditor style={styles.right} languages={languages} />
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		backgroundColor: colors.white,
	},
	title: {
		fontWeight: 500,
		padding: "0.8em",
		margin: 0,
	},
	description: {
		padding: "1em",
		fontSize: "0.8rem",
		lineHeight: "1.6em",
		color: colors.dark,
		whiteSpace: "pre-wrap",
		overflowY: "auto",
		height: "80vh",
	},
};

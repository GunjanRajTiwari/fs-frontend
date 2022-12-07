import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";

export const ContestListPage = () => {
	const navigate = useNavigate();
	const [contests, setContests] = useState();
	const [pastContests, setPastContests] = useState();

	useEffect(() => {
		loadContests();
		loadPastContests();
	}, []);

	const loadContests = async () => {
		const result = await axios.get("/api/contests");
		setContests(result.data.data);
	};

	const loadPastContests = async () => {
		const result = await axios.get("/api/contests/past");
		setPastContests(result.data.data);
	};

	return (
		<div>
			<h1 style={{ textAlign: "center" }}> Brand New</h1>
			<div style={styles.grid}>
				{contests?.map(contest => (
					<ImageCard
						key={contest.id}
						title={contest.title}
						subTitle={contest.start}
						info={contest.type}
						image={
							contest.type === "OFFROAD"
								? "./offroad.jpg"
								: "./drive.jpeg"
						}
						onClick={() => navigate("/contests/" + contest.id)}
					/>
				))}
			</div>
			<h1 style={{ textAlign: "center" }}>Old is Gold</h1>
			<div style={styles.grid}>
				{pastContests?.map(contest => (
					<ImageCard
						key={contest.id}
						title={contest.title}
						subTitle={contest.start}
						info={contest.type}
						image={
							contest.type === "OFFROAD"
								? "./offroad.jpg"
								: "./drive.jpeg"
						}
						onClick={() => navigate("/contests/" + contest.id)}
					/>
				))}
			</div>
		</div>
	);
};

const styles = {
	grid: {
		margin: "auto",
		display: "flex",
		justifyContent: "space-evenly",
		maxWidth: "900px",
	},
};

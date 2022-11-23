import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";

export const ContestListPage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1 style={{ textAlign: "center" }}> Brand New</h1>
			<div style={styles.grid}>
				<ImageCard
					title='Weekly Drive 1'
					subTitle='2022-11-25 @ 8:00 PM'
					info='2k Participants'
					image='./drive.jpeg'
					onClick={() => navigate("contest")}
				/>
				<ImageCard
					title='Off Road 1'
					subTitle='2022-11-26 @ 8:00 PM'
					info='1.5k Participants'
					image='./offroad.jpg'
				/>
			</div>
			<h1 style={{ textAlign: "center" }}>Old is Gold</h1>
			<div style={styles.grid}>
				<ImageCard
					title='Weekly Drive 1'
					subTitle='2022-11-25 @ 8:00 PM'
					info='2k Participants'
					image='./drive.jpeg'
				/>
				<ImageCard
					title='Off Road 1'
					subTitle='2022-11-26 @ 8:00 PM'
					info='1.5k Participants'
					image='./offroad.jpg'
				/>
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

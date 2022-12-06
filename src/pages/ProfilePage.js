import React from "react";
import { FaCrown } from "react-icons/fa";
import { LineChart } from "../components/LineChart";
import { NumberCard } from "../components/NumberCard";
import colors from "../config/colors";

const profile = {
	id: 123,
	username: "GunZaaN",
	name: "Gunjan Raj Tiwari",
	avatar: "https://gunjanraj.netlify.app/assets/avatar.png",
	rank: "ELITE",
	rating: 1408,
	contests: [
		{
			id: 2,
			title: "Weekly Drive 3",
			solved: 3,
			rank: 3,
			start: "2022-09-26",
			rating: 900,
		},
		{
			id: 3,
			title: "Off Road 1",
			solved: 2,
			rank: 2880,
			start: "2022-10-27",
			rating: 1200,
		},
		{
			id: 4,
			title: "Weekly Drive 4",
			solved: 3,
			rank: 3,
			start: "2022-11-26",
			rating: 980,
		},
		{
			id: 5,
			title: "Off Road 2",
			solved: 2,
			rank: 2880,
			start: "2022-12-27",
			rating: 1210,
		},
		{
			id: 6,
			title: "Weekly Drive 3",
			solved: 3,
			rank: 3,
			start: "2023-01-26",
			rating: 1609,
		},
		{
			id: 3,
			title: "Off Road 1",
			solved: 2,
			rank: 2880,
			start: "2023-04-27",
			rating: 1877,
		},
	],
};

export const ProfilePage = () => {
	return (
		<div>
			<div style={styles.profile}>
				<div>
					<div
						style={{
							...styles.rank,
							color: colors[profile.rank],
						}}>
						<FaCrown /> {profile.rank}
					</div>
					<div style={styles.name}>{profile.name}</div>
					<div>{"@" + profile.username}</div>
					<div style={styles.rating}>{profile.rating}</div>
				</div>
				<img style={styles.avatar} src={profile.avatar} />
			</div>
			<LineChart data={profile.contests} />
			{profile.contests && profile.contests.length > 0 && (
				<div style={styles.history}>
					<h2 style={styles.heading}>History</h2>

					{profile.contests.map((contest, index) => (
						<NumberCard
							key={index}
							number={index + 1}
							title={contest.title}
							subTitle={"Solved: " + contest.solved}
							info={"# " + contest.rank}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const styles = {
	heading: {
		textAlign: "center",
	},
	history: {
		padding: "1em",
		borderRadius: "2em",
		shadow: colors.shadow,
		backgroundColor: colors.white,
		maxWidth: "800px",
		margin: "4em auto",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		margin: "2em auto 4em",
		width: "100%",
		maxWidth: "800px",
		padding: "1.5em",
		borderRadius: "2em",
		backgroundColor: colors.primary,
		color: colors.light,
	},
	avatar: {
		width: "200px",
		height: "200px",
		objectFit: "cover",
		borderRadius: "2em",
	},
	rank: {
		fontSize: "1.2rem",
	},
	name: {
		fontSize: "1.5rem",
		fontWeight: 600,
	},
	rating: {
		fontSize: "3rem",
		margin: "0.2em 0",
		fontWeight: 200,
	},
};

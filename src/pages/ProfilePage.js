import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { LineChart } from "../components/LineChart";
import { NumberCard } from "../components/NumberCard";
import colors from "../config/colors";
import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProfilePage = () => {
	const [profile, setProfile] = useState();
	const [contests, setContests] = useState([]);
	const { username } = useParams();

	useEffect(() => {
		loadProfile();
	}, []);

	const loadProfile = async () => {
		const { data } = await axios.get("/api/user/" + username);
		if (!data.data) {
			alert("No user with this username.");
			return;
		}
		var { Contests, ...userProfile } = data.data;
		setProfile(userProfile);
		var contestHistory = data.data.Contests;

		let rating = 0;
		var contestHistory = contestHistory.map(c => {
			var { Register, ...contestData } = c;
			contestData.start = new Date(contestData.start).toDateString();
			rating += c.Register.change;
			return { ...contestData, ...c.Register, rating };
		});
		setContests(contestHistory);
	};

	if (!profile) return <Loading />;

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
				<img
					referrerpolicy='no-referrer'
					style={styles.avatar}
					src={profile.avatar}
				/>
			</div>
			<LineChart data={contests} />
			{contests && contests.length > 0 && (
				<div style={styles.history}>
					<h2 style={styles.heading}>History</h2>

					{contests.map((contest, index) => (
						<NumberCard
							key={index}
							number={index + 1}
							title={contest.title}
							subTitle={"Solved: " + contest.solved}
							info={
								(contest.change > 0 && " + ") +
								contest.change
							}
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
		width: "100px",
		height: "100px",
		objectFit: "cover",
		borderRadius: "2em",
	},
	rank: {
		fontSize: "1.1rem",
		padding: "0.3em 1em",
		borderRadius: "200px",
		backgroundColor: colors.white,
		width: "fit-content",
		marginBottom: "0.5em",
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

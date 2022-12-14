import React from "react";
import colors from "../config/colors";
import languages from "../config/languages";
import { NumberCard } from "./NumberCard";

const getColor = status => {
	if (status === "ACCEPTED") return colors.success;
	else if (status === "PENDING") return colors.primary;
	else return colors.danger;
};

// const data = [
// 	{
// 		time: "2022-11-27 8:45 AM",
// 		status: "PENDING",
// 		lang: "C++",
// 	},
// 	{
// 		time: "2022-11-27 8:39 AM",
// 		status: "ACCEPTED",
// 		lang: "C++",
// 	},
// 	{
// 		time: "2022-11-27 8:35 AM",
// 		status: "TLE",
// 		lang: "Python",
// 	},
// 	{
// 		time: "2022-11-27 8:25 AM",
// 		status: "WRONG",
// 		lang: "Python",
// 	},
// ];

var langSet = {};
languages.forEach(l => {
	langSet[l.backendCode] = l.name;
});

export const Submissions = ({ data }) => {
	return (
		<div style={styles.container}>
			{data.map((submission, index) => (
				<NumberCard
					number={index + 1}
					title={langSet[submission.language]}
					subTitle={submission.time}
					info={submission.status}
					color={getColor(submission.status)}
				/>
			))}
		</div>
	);
};

const styles = {
	container: {
		overflowY: "auto",
		height: "80vh",
		padding: "1em",
	},
};

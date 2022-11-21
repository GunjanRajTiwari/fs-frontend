import React from "react";
import { CodeEditor } from "../components/CodeEditor";
import { Navbar } from "../components/Navbar";
import { SubNav } from "../components/SubNav";
import colors from "../config/colors";

import languages from "../config/languages";
import problemMenu from "../config/problemMenu";

export const ProblemPage = () => {
	return (
		<div style={styles.page}>
			<Navbar />
			<div style={styles.container}>
				<div style={styles.left}>
					<h3 style={styles.title}>1. Two Sum</h3>
					<SubNav menu={problemMenu} />
					<div style={styles.description}>
						{`
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice You can return the answer in any order.

 Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9,
 we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
s`}
					</div>
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

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Picker } from "./Picker";
import { Button } from "./Button";

export const CodeEditor = ({ onSubmit, languages, code }) => {
	const [value, setValue] = useState(code || "");
	const [language, setLanguage] = useState();

	const handleLanguageChange = lang => {
		languages.forEach((l, index) => {
			if (l == language) languages[index].defaultCode = value;
		});
		setLanguage(lang);
	};

	const handleEditorChange = value => {
		setValue(value);
	};

	const handleSubmit = () => {
		onSubmit(value);
	};

	return (
		<div>
			<Picker
				style={styles.language}
				placeholder='Language'
				options={languages}
				onChange={lang => handleLanguageChange(lang)}
			/>
			<Editor
				height='85vh'
				width={`100%`}
				language={language ? language.code : "plaintext"}
				value={
					language ? language.defaultCode : "Choose a language ..."
				}
				onChange={handleEditorChange}
				theme='vs-dark'
			/>
			<Button
				style={styles.language}
				title='Submit'
				onClick={handleSubmit}
			/>
		</div>
	);
};

const styles = {
	language: {
		float: "right",
		margin: "0.5em 5%",
	},
};

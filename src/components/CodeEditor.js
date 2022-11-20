import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export const CodeEditor = ({ onChange, languages, code }) => {
	const [value, setValue] = useState(code || "");
	const [language, setLanguage] = useState(languages[0]);

	const handleEditorChange = value => {
		setValue(value);
		onChange(value);
	};

	console.log(languages);

	return (
		<div>
			<div>Languages</div>
			<Editor
				height='85vh'
				width={`100%`}
				language={language.code || "cpp"}
				value={value}
				defaultValue={language.defaultCode || ""}
				onChange={handleEditorChange}
			/>
		</div>
	);
};

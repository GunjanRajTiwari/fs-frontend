import { Button } from "./components/Button";
import { CodeEditor } from "./components/CodeEditor";
import { Login } from "./pages/Login";
import LoginButton from "./components/googlelogin"
import LogoutButton from "./components/googlelogout"
import languages from "./config/languages";
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import React from "react";


const client_id = "950372290433-p4ul0fqt9i4721fdqnvdbmi12rbp7hhs.apps.googleusercontent.com";

function App() {

	useEffect(() => {
		function start() {
			gapi.client.init({
				client_id : client_id,
				scope : ""
			})
		}

		gapi.load('client:auth2', start);
	});

	return (
		<div className='App'>
			{/* <CodeEditor languages={languages} /> */}
			<LoginButton />
			<LogoutButton />
		</div>
	);
}

export default App;

import { ProblemPage } from "./pages/ProblemPage";
import LoginButton from "./components/googlelogin";
import LogoutButton from "./components/googlelogout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { Login } from "./pages/Login"

const client_id = "950372290433-p4ul0fqt9i4721fdqnvdbmi12rbp7hhs.apps.googleusercontent.com";

function App() {

	// useEffect(() => {
	// 	function start() {
	// 		gapi.auth2.init({
	// 			client_id : client_id,
	// 			scope : ""
	// 		})
	// 	}

	// 	gapi.load('client:auth2', start);
	// });

	return (
		<div className='App'>
			<Login />
			<LogoutButton />
			{/* <ProblemPage /> */}
		</div>
	);
}

export default App;

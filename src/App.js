import { ProblemPage } from "./pages/ProblemPage";
import LogoutButton from "./components/googlelogout";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Login } from "./pages/Login";

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
	const [user, setUser] = useState();

	function start() {
		gapi.auth2.init({
			client_id: process.env.client_id,
			scope: "",
		});
	}

	useEffect(() => {
		gapi.load("client:auth2", start);
	}, []);
	return (
		<div className='App'>
			{/* <ProblemPage />; */}
			<Login />
			<LogoutButton />
		</div>
	);
}

export default App;

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { userContext } from "./Contexts/UserContext";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { ContestListPage } from "./pages/ContestListPage";
import { ContestPage } from "./pages/ContestPage";
import { ProblemPage } from "./pages/ProblemPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";

function App() {
	const userObject = useContext(userContext);
	if (!userObject) return <Login />;
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<ContestListPage />} />
				<Route path='/contest' element={<ContestPage />} />
				<Route path='/problem' element={<ProblemPage />} />
				<Route path='/leaderboard' element={<LeaderboardPage />} />
			</Routes>
		</div>
	);
}

export default App;

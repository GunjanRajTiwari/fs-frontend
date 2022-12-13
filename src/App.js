import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { userContext } from "./Contexts/UserContext";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { ContestListPage } from "./pages/ContestListPage";
import { ContestPage } from "./pages/ContestPage";
import { ProblemPage } from "./pages/ProblemPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Loading } from "./components/Loading";
import { ProblemListPage } from "./pages/ProblemListPage";
import { NotFound } from "./pages/NotFound";

function App() {
	const userObject = useContext(userContext);
	// console.log(userObject);

	if (userObject === undefined) return <Loading />;

	if (userObject === null) return <Login />;

	return (
		<div className='App'>
			<Navbar userObject={userObject} />
			<Routes>
				<Route path='/' element={<ContestListPage />} />
				<Route path='/contests' element={<ContestListPage />} />
				<Route path='/contests/:id' element={<ContestPage />} />
				<Route
					path='/profile/:username'
					element={<ProfilePage />}
				/>
				<Route path='/problems/:id' element={<ProblemPage />} />
				<Route path='/leaderboard' element={<LeaderboardPage />} />
				<Route path='/problems' element={<ProblemListPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

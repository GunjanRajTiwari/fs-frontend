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
import { LandingPage } from "./pages/LandingPage";

function NavRoute({ path, element, userObject }) {
	return (
		<>
			<Navbar userObject={userObject} />
			<Route path={path} element={element} />
		</>
	);
}

function App() {
	const userObject = useContext(userContext);
	// console.log(userObject);

	if (userObject === undefined) return <Loading />;

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				{userObject && (
					<>
						<NavRoute
							userObject={userObject}
							path='/contests'
							element={<ContestListPage />}
						/>
						<NavRoute
							userObject={userObject}
							path='/contests/:id'
							element={<ContestPage />}
						/>
						<NavRoute
							userObject={userObject}
							path='/profile/:username'
							element={<ProfilePage />}
						/>
						<NavRoute
							userObject={userObject}
							path='/problems/:id'
							element={<ProblemPage />}
						/>
						<NavRoute
							userObject={userObject}
							path='/leaderboard'
							element={<LeaderboardPage />}
						/>
						<NavRoute
							userObject={userObject}
							path='/problems'
							element={<ProblemListPage />}
						/>
					</>
				)}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

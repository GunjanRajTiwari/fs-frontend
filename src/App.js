import { Button } from "./components/Button";
import { CodeEditor } from "./components/CodeEditor";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import languages from "./config/languages";

function App() {
	return (
		<div className='App'>
			<CodeEditor languages={languages} />
		</div>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { UserContext } from "./Contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserContext>
	</React.StrictMode>
);

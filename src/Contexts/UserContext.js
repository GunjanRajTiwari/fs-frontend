import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext({});
export const UserContext = ({ children }) => {
	const [userObject, setUserObject] = useState();

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API + "/auth/user", {
				withCredentials: true,
			})
			.then(res => {
				if (res.data) {
					setUserObject(res.data);
				}
			});
	}, []);
	return (
		<userContext.Provider value={userObject}>
			{children}
		</userContext.Provider>
	);
};

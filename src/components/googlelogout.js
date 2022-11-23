import { GoogleLogout } from "react-google-login";
import React from "react";
import { Button } from "./Button";

const client_id =
	"950372290433-p4ul0fqt9i4721fdqnvdbmi12rbp7hhs.apps.googleusercontent.com";

function GLogout() {
	const onSuccess = () => {
		console.log("Logout Successful !!");
	};

	return (
		<div id='singOutButton'>
			<GoogleLogout
				clientId={client_id}
				buttonText={"Logout"}
				onLogoutSuccess={onSuccess}
				render={({ onClick }) => (
					<Button title='Logout' onClick={onClick} />
				)}
			/>
		</div>
	);
}

export default GLogout;

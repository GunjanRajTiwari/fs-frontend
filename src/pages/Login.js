import React from "react";
import colors from "../config/colors";
import { Button } from "../components/Button";
import { GoogleLogin } from 'react-google-login';

const client_id = "950372290433-p4ul0fqt9i4721fdqnvdbmi12rbp7hhs.apps.googleusercontent.com";

export const Login = () => {

	const onSuccess = (res) => {
        console.log(res)
        console.log("Login Success!! Current user is :: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed!! res :: ", res);
    }

	return (
		<div style={styles.container}>
			<div style={styles.left}>
				<div style={styles.logo}>Fourspace</div>
				<h1 style={styles.heading}>
					Nepal's best Competitive Programming platform.
				</h1>
			</div>
			<div style={styles.right}>
				{/* <Button title='Login with Google' /> */}
				<div id="signInButton">
					<GoogleLogin 
						clientId = {client_id}
						render={renderProps => (
							<Button onClick={renderProps.onClick} disabled={renderProps.disabled} title='Login with Google' />
						)}
						buttonText = "Login"
						onSuccess = {onSuccess}
						onFailure = {onFailure}
						cookiePolicy = {'single_host_origin'}
						isSignedIn = {true}
					/>
        		</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		textAlign: "center",
		height: "100vh",
	},
	left: {
		backgroundColor: colors.primary,
		color: colors.white,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		position: "absolute",
		padding: "1em",
		left: 0,
		top: 0,
	},
	heading: {
		maxWidth: "400px",
		fontSize: "2.4rem",
		lineHeight: "1.8em",
	},
};


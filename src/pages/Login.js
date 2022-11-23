import React from "react";
import colors from "../config/colors";
import { Button } from "../components/Button";

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const Login = ({ setUser, setSignedIn }) => {
	const googleLogin = () => {
		window.open(process.env.REACT_APP_API + "/auth/google", "_self");
	};

	return (
		<div style={styles.container}>
			<div style={styles.left}>
				<img style={styles.logo} src='./logo-white.png' />
				<h1 style={styles.heading}>
					Nepal's best Competitive Programming platform.
				</h1>
			</div>
			<div style={styles.right}>
				<div id='signInButton'>
					<Button
						title='Login with Google'
						onClick={googleLogin}
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
		margin: "2em",
		left: 0,
		top: 0,
		height: "16px",
	},
	heading: {
		maxWidth: "400px",
		fontSize: "2.4rem",
		lineHeight: "1.8em",
	},
};

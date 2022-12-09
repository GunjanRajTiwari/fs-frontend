import React from "react";
import colors from "../config/colors";
import { Button } from "../components/Button";

export const Login = ({ setUser, setSignedIn }) => {
	const googleLogin = () => {
		window.open("/auth/google", "_self");
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
						icon={
							<img style={styles.google} src='/google.png' />
						}
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
		gridTemplateColumns: "repeat(auto-fit, minmax(400px,1fr))",
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
	google: {
		height: "24px",
		padding: "0 0.8em 0 0",
	},
};

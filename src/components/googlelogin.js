import { GoogleLogin } from 'react-google-login'
import { Login } from '../pages/Login'
import { Button } from './Button';
import React from 'react'

const client_id = "950372290433-p4ul0fqt9i4721fdqnvdbmi12rbp7hhs.apps.googleusercontent.com";

function GLogin() {

    const onSuccess = (res) => {
        console.log(res)
        console.log("Login Success!! Current user is :: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed!! res :: ", res);
    }

    return(
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
        
    )
}

export default GLogin;
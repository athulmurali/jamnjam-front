import React from 'react';
import GoogleLogin from 'react-google-login';
import {CLIENT_ID}from '../const/googleCredentials'

const responseGoogle = (response) => {
console.log(response)
}

const GoogleSignIn =(props)=> {
    return (<GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Google Login"
        onSuccess={props.onSuccess}
        onFailure={responseGoogle}
    />)
}



export default  GoogleSignIn

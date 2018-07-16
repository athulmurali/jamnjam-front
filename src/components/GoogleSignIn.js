import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {


console.log(response)
}

const GoogleSignIn =(props)=> {
    return (<GoogleLogin
        clientId="53148733142-oq16mvaq1ts0b9l0630q5o49bu7bcm8e.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={props.onSuccess}
        onFailure={responseGoogle}
    />)
}



export default  GoogleSignIn

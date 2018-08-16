import React from 'react';
import GoogleLogin from 'react-google-login';
import {CLIENT_ID} from '../const/googleCredentials'
import {connect} from "react-redux";
import {GOOGLE_LOGIN} from "../redux/Constants/userLogin";
import {UserService} from "../services/api/user";

const responseGoogle = (response) => {
console.log(response)
};

const styles=
    {
        button :
        {
            cursor : 'pointer',
        }

    }

const GoogleSignIn =(props)=> {
    return (
        <GoogleLogin
        className ="btn btn-block btn-outline-danger"
        clientId={CLIENT_ID}
        buttonText="Google Login"
        onSuccess={props.googleLogin}
        onFailure={responseGoogle}

        style={styles.button}

    />)
};

const mapStateToProps =(state)=>{
    return {

        ...state.loginReducer
    }

}

const mapDispatchToProps = (dispatch) =>({

    googleLogin:(data)=>{

        const userService = new UserService()
        const promise = userService.googleLoginService(data)
        dispatch({
            type :GOOGLE_LOGIN,
            payload : promise
            })
    }

})



export default  connect(mapStateToProps, mapDispatchToProps)(GoogleSignIn)

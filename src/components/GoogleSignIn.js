import React from 'react';
import GoogleLogin from 'react-google-login';
import {CLIENT_ID} from '../const/googleCredentials'
import {connect} from "react-redux";
import {SET_GOOGLE_USER_DATA} from "../redux/constants/socialLogin";
import RoleSelectDialog from "./RoleSelectDialog";

const responseGoogle = (response) => {
console.log(response)
};



const styles=
    {
        button :
        {
            cursor : 'pointer',
        }

    };

const GoogleSignIn =(props)=> {
    return (
        <div>
            <RoleSelectDialog/>
            <GoogleLogin
                    className ="btn btn-block btn-outline-danger"
                    clientId={CLIENT_ID}
                    buttonText="Google Login"
                    onSuccess={props.googleLogin}
                    onFailure={responseGoogle}

                    style={styles.button}


                    scope ={"https://www.googleapis.com/auth/calendar"}

                />
        </div>
)


};

const mapStateToProps =(state)=>{
    return {

        ...state.loginReducer
    }

};

const mapDispatchToProps = (dispatch) =>({

    googleLogin:(data)=>{
        console.log(data);
        // uncomment for google login feature
        // const userService = new UserService();
        // const promise = userService.googleLoginService(data);
        dispatch({
            type :SET_GOOGLE_USER_DATA,
            payload :{
            googleUserData:data}
        })
    }

});



export default  connect(mapStateToProps, mapDispatchToProps)(GoogleSignIn)

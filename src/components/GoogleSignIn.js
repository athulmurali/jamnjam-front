import React from 'react';
import GoogleLogin from 'react-google-login';
import {CLIENT_ID} from '../const/googleCredentials'
import {connect} from "react-redux";
import RoleSelectDialog from "./RoleSelectDialog";
import {setGoogleUserData} from "../redux/actions/googleLogin";

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

    // if google userData is available
    // console.log("getUserNameAvailability ");
    // to be implemented :  /isAvailable/username=?
    //if available,exchange profile for  token
    // else profile

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

    // uncomment for google login feature
    // const userService = new UserService();
    // const promise = userService.googleLoginService(data);
    googleLogin: (data) => setGoogleUserData(dispatch, data),

});



export default  connect(mapStateToProps, mapDispatchToProps)(GoogleSignIn)

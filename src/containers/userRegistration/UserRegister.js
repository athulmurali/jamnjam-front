import React from "react";
import {connect} from "react-redux";
import RegistrationForm from "./RegistrationForm";
import RoleSelect from "./RoleSelect";
import {FILL_USER_DETAILS, SELECT_ROLE, VERIFY_EMAIL} from "../../const/PageState";
import VerifyEmail from "./VerifyEmail";


const UserRegister =(props)=>{

    console.log(props);
    switch (props.nextStep)
    {
        case SELECT_ROLE : return <RoleSelect/>;
        case FILL_USER_DETAILS :  return <RegistrationForm/>;
        case VERIFY_EMAIL : return <VerifyEmail/>
    }

    };


const mapStateToProps = state => {
    return {
        selectedRole : state.userRegistrationReducer.role,
        nextStep : state.userRegistrationReducer.nextStep
    }
};


const mapDispatchToProps = (dispatch) =>({

});




export default  connect(mapStateToProps, mapDispatchToProps)(UserRegister);

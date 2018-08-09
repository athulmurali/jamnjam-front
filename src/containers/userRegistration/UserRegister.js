import React from "react";
import {connect} from "react-redux";
import {UPDATE_ROLE} from "../../redux/Constants/userRegister";
import {VerifyEmail} from "./VerifyEmail";
import RegistrationForm from "./RegistrationForm";
import RoleSelect from "./RoleSelect";


const UserRegister =(props)=>{



          {return  props.selectedRole? <RegistrationForm/> : <RoleSelect></RoleSelect>}
        // return <VerifyEmail/>

    }


const mapStateToProps = state => {
    return {
        selectedRole : state.userRegistrationReducer.role
    }
}


const mapDispatchToProps = (dispatch) =>({
    selectRole: (role) =>{dispatch({type: UPDATE_ROLE, payload : {role :role}})},
})



export default  connect(mapStateToProps, mapDispatchToProps)(UserRegister);

import React from "react";
import RegistrationForm from "./RegistrationForm";
import {connect} from "react-redux";
import {REGISTER_USER, UPDATE_ROLE} from "../../redux/Constants/userRegister";
import RoleSelect from "./RoleSelect";


const UserRegister =(props)=>{

          {return  props.selectedRole? <RegistrationForm/> : <RoleSelect></RoleSelect>}

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

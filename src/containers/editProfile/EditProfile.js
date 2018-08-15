import React from "react";
import RegistrationForm from "../userRegistration/RegistrationForm";
import {connect} from "react-redux";
import {FILL_USER_DETAILS} from "../../const/PageState";
import {GET_PROFILE_FROM_LOCAL_ST, RESET_ADMIN_SCREEN, UPDATE_ROLE} from "../../redux/Constants/userRegister";

class  EditProfile extends React.Component {

    componentDidMount(){

        this.props.getProfileFromLocalStorage()

    }


    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="container-fluid text-center">
                    <h2>Edit  my   {this.props.match.params.userRole || this.props.match.params.userId}</h2>
                </div>


            </div>

            <RegistrationForm updateMode={true}  myProfileEdit={true}>

            </RegistrationForm>

        </div>
    }

}


const mapStateToProps = state => {
    return {...state.userRegistrationReducer}
}


const mapDispatchToProps = (dispatch) =>({
    selectRole: (role) =>{dispatch({type: UPDATE_ROLE,
        payload : {role :role,nextStep: FILL_USER_DETAILS}})},


    getProfileFromLocalStorage:()=>{dispatch({type : GET_PROFILE_FROM_LOCAL_ST})}

})



export default  connect(mapStateToProps, mapDispatchToProps)(EditProfile);


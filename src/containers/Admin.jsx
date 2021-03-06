import React from "react";
import TabContainer from "../components/TabContainer";
import {Button} from "@material-ui/core/index";
import {connect} from "react-redux";
import {RESET_ADMIN_SCREEN, UPDATE_ROLE} from "../redux/constants/userRegister";
import {FILL_USER_DETAILS, VERIFY_EMAIL} from "../const/PageState";
import UserRegister from "./userRegistration/UserRegister";
import * as userRoles from "../const/userRoles";

class  AdminScreen extends React.Component {

    componentDidMount(){
        this.props.resetAdminScreen()
    }

    render() {
        const props = this.props;

        if (props.selectedRole && props.nextStep !== VERIFY_EMAIL) {
            return <div>
                <UserRegister></UserRegister>
            </div>
        }


        else return <div>
            <div className="row">
                <div className="col-md-4 col-sm-4  text-center">
                    <Button
                        onClick={() => {
                            props.selectRole(userRoles.ARTIST);
                        }}>
                        Add Artist
                    </Button>
                </div>
                <div className="col-md-4 col-sm-4 text-center">
                    <Button
                        onClick={() => {
                            props.selectRole(userRoles.BAND);
                        }}>
                        Add Band
                    </Button>
                </div>
                <div className="col-md-4  col-sm-4 text-center">
                    <Button
                        onClick={() => {
                            props.selectRole(userRoles.ADMIN);
                        }}>
                        Add Admin
                    </Button>

                </div>
            </div>
            <TabContainer></TabContainer>
        </div>

    };

}

const mapStateToProps = state => {
    return {
        selectedRole : state.userRegistrationReducer.role,
        nextStep    : state.userRegistrationReducer.nextStep
    }
};


const mapDispatchToProps = (dispatch) =>({
    selectRole: (role) =>{dispatch({type: UPDATE_ROLE,
        payload : {role :role,nextStep: FILL_USER_DETAILS}})},


    resetAdminScreen:()=>{dispatch({type : RESET_ADMIN_SCREEN})}

});



export default  connect(mapStateToProps, mapDispatchToProps)(AdminScreen);



import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import GoogleSignIn from "../../components/GoogleSignIn";
import {connect} from "react-redux";
import {LOGIN, UPDATE_LOGIN_FIELD} from "../../redux/constants/userLogin";
import {UserService} from "../../services/api/user";
import {LOG_IN} from "../../redux/constants/userAccount";
import {GET_PROFILE, RESET_SELECTED_ROLE} from "../../redux/constants/userRegister";
import UserServiceWithToken from "../../services/UserServiceWithToken";


class Login extends Component {
    userService = new UserService();

    styles = {
        container:
            {
                display: 'flex',
                flexDirection: 'column',
                padding: '10',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                // backgroundColor: 'green'
            }
    };


    componentDidMount() {
        this.props.resetSelectedRole()
    }

    render() {

        if (!!this.props.profile) {
            this.props.updateNavBar();

            const getUserServiceObj = new UserServiceWithToken();
            this.props.getMyProfile(getUserServiceObj.getProfile);
            localStorage.setItem('currentId', this.props.profile._id);
            this.props.history.push('/' + this.props.profile.role + '/' + this.props.profile._id)


        }
        return (
            <div style={this.styles.container}>


                {!!this.props.error &&
                <div className="card">
                    <h5 className="card-header">Error : {this.props.error.response.data.message} !</h5>
                </div>
                }

                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="username"
                    type="text"

                    onChange={(e) => {
                        this.props.updateField('username', e.target.value)
                    }}

                    key={1}

                />

                <TextField
                    key={2}
                    margin="dense"
                    id="password"
                    label="password"
                    type="password"

                    onChange={(e) => {
                        this.props.updateField('password', e.target.value)
                    }}
                />

                <div className="px-1 px-2 py-2">
                    <Button
                        disabled={!this.props.loginData.password || !this.props.loginData.username}
                        onClick=
                            {() => {
                                this.props.selectLogin(this.userService.login(this.props.loginData))
                            }}>
                        Login
                    </Button>

                </div>
                <div className="px-1 px-2 py-2">

                    <GoogleSignIn>
                        Google login
                    </GoogleSignIn>

                </div>

            </div>


        );
    }
}


const mapStateToProps = state => {
    return {...state.loginReducer}
};


const mapDispatchToProps = (dispatch) => ({


    getMyProfile: (promise) => {
        dispatch({
            type: GET_PROFILE,
            payload: promise
        })
    },

    updateField: (fieldName, value) => {
        dispatch({
            type: UPDATE_LOGIN_FIELD,
            payload: {
                [fieldName]: value
            }
        })
    },
    selectLogin: (promise) => {
        dispatch({
            type: LOGIN,
            payload: promise
        })
    },

    updateNavBar: () => {
        dispatch({
            type: LOG_IN,
        })
    },

    resetSelectedRole: () => {
        dispatch({type: RESET_SELECTED_ROLE})
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);

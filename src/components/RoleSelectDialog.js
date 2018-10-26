import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ADMIN, ARTIST, BAND} from "../const/userRoles";
import {GOOGLE_USER_SELECT_ROLE, SET_GOOGLE_USER_DATA} from "../redux/Constants/socialLogin";
import {connect} from "react-redux";
import {User} from "../models/User";
import {UserService} from "../services/api/user";
import {CREATE_USER} from "../redux/Constants/userRegister";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});


const handleChange = (props, event) => {



    props.selectRole(event.target.value);


};
const handleOk =  (props) => {

    const userService = new UserService();



            props.create_user_dispatch(userService.createNewUser
            ( transformGoogleObjToLocalObj(props.selectedRole, props.googleUserData))).then(
                (result)=>{
                    console.log()
                }
            )


    // props.clearGoogleUserData()
};
const handleClose = (props) => {
    // props.clearGoogleUserData();
};

const transformGoogleObjToLocalObj =(role, googleUserData)=> {
    const newGoogleUser = new User();

    if (role === BAND)
    {
        newGoogleUser.title = googleUserData.profileObj.name;
        newGoogleUser.firstName = "";
        newGoogleUser.lastName= ""

    }
    else {
        newGoogleUser.title = "";

        newGoogleUser.firstName = googleUserData.profileObj.givenName;
        newGoogleUser.lastName== googleUserData.profileObj.familyName
    }


    newGoogleUser.zip   = 123456;
    newGoogleUser.phone = 123456;
    newGoogleUser.password = googleUserData.googleId;
    newGoogleUser.confirmPassword = googleUserData.googleId;
    newGoogleUser.username= "GID_" + googleUserData.googleId;
    newGoogleUser.emailId= googleUserData.profileObj.email;
    newGoogleUser.role= role;


    return newGoogleUser;
};

const RoleSelectDialog =(props)=> {

    const { classes } = props;

    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={!!props.googleUserData}
                onClose={handleClose}>
                <DialogTitle>New Google User</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="role">Role</InputLabel>
                            <Select
                                native
                                value={props.selectedRole}
                                onChange={(event)=>handleChange(props,event)}
                                input={<Input id="role" />}
                            >
                                <option value={ADMIN}>Admin</option>
                                <option value={ARTIST}>Artist</option>
                                <option value={BAND}>Band</option>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose(props)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>handleOk(props)} color="primary" disabled={!props.selectedRole}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    };


RoleSelectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};





const mapStateToProps   =   state => {
    return{
        isNewUser       : state.socailLoginReducer.isNewUser,
        selectedRole    : state.socailLoginReducer.selectedRole,
        googleUserData : state.socailLoginReducer.googleUserData
    }

};


const mapDispatchToProps = (dispatch) =>({


    selectRole:(role)=>{
        dispatch({
            type:       GOOGLE_USER_SELECT_ROLE,
            payload:    {selectedRole : role}
        })



    },

    //
    // createNewGoogleUser:(role,googleUserData ) =>
    // {
    //     dispatch({type: CREATE_GOOGLE_USER,
    //         payload: socialUserService.createGoogleUser(role,googleUserData)
    //     })
    //     return Promise.resolve()
    // },

    clearGoogleUserData :()=>{
        dispatch({
            type : SET_GOOGLE_USER_DATA,
            payload:{
                googleUserData: false
            }
        })
    },
    create_user_dispatch:(payload)=>{
        console.log("payload to create");
        console.log(payload);
        dispatch({
            type :  CREATE_USER,
            payload : payload
        });

        return Promise.resolve()

    },
});

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(RoleSelectDialog))

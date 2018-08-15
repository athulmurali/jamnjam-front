import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';
import {UserByRole} from "../../services/api/userByRole";
import {
    CREATE_USER,
    REGISTER_USER,
    RESET_SELECTED_ROLE,
    RESET_UPDATE_SUCCESS,
    SET_UPDATE_MODE,
    UPDATE_FIELD,
    UPDATE_USER
} from "../../redux/Constants/userRegister";
import {connect} from "react-redux";
import {UserService} from "../../services/api/user";
import {ARTIST, BAND} from "../../const/userRoles";
import {Redirect} from "react-router-dom";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth : 600,
        justifyContent : 'space-between',
        margin : 'auto',
        alignContent : 'center',
        padding : 10

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width : 200,
        spacing : 100,
        paddingBottom : 20,
    },

    fullWidthTextField : {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        spacing : 100,
        paddingBottom : 20,

    },
    menu: {
        width: 200,
    },
});

class RegistrationForm extends React.Component {


    componentWillReceiveProps(nextProps,any){
        if(this.props.selectedUser && this.props.toExtract)
        {
            // alert("Mounted selectedUser  : " + JSON.stringify(this.props.selectedUser) )

        }

    }

    userByRoleService = new UserByRole();

    state = {
        role     : '',
        emailId    : '',
        username  : '',
        phone     :'',
        firstName : 'First',
        lastName  : 'Last',
        password : '',
        confirmPassword : '',
        dob: '',
        zip : '',
        bio: '',
        img:'',


        goBack : false,



        isUsernameAvailable : false,
        isEmailAvailable : false,
        emailError :'',
        usernameError:''



    };



    getUserNameAvailFromServer=()=>{
        this.userByRoleService.getUserNameAvailability(this.props.role, this.props.username).
        then(result=>{
            this.setState({
                isUsernameAvailable : true,
                usernameError : ''})
        }).
        catch(err=>{
            this.setState({isUsernameAvailable : false,
                usernameError : 'username taken!',})
        })
    }

    getEmailAvailFromServer=()=>{

        this.userByRoleService.getEmailIdAvailability(this.props.role, this.props.emailId).
        then(result=>{
            console.log(result)
            this.setState({isEmailAvailable: true,
                emailError : ''
            })
        }).
        catch(err=>{
            console.log(err)
            this.setState({isEmailAvailable: false,
                emailError : 'emailId  already registered!'})
        })
    }

    createNewUserInServer=(userData)=>{
        const userService = new UserService();
        this.props.create_user_dispatch(userService.createNewUser(userData))
    }

    render() {
        const { classes } = this.props;


        if(this.props.toExtract){
            // alert("Yet to extract")

        }
        if( this.state.goBack)
        {

            return <Redirect to='/home' />

        }


        if( this.props.updateSuccess)
        {
           this.props.resetUpdateSuccess();
            return <Redirect to='/home' />

        }

        return<div>
                <form className={classes.container}
                      noValidate
                      autoComplete="off" centred={true}>
                    {
                        this.props.role == BAND ||
                        this.props.updateRole === BAND ?
                            <TextField
                                id="title"
                                label="title"
                                className={classes.fullWidthTextField}
                                defaultValue={this.props.title}
                                onChange={(event) => {
                                    this.setState({firstName: event.target.value})
                                    this.props.updateField('title', event.target.value)
                                }}
                                margin="normal"
                                required
                                fullWidth={true}
                                helperText={!this.props.title && "Cannot be empty"}

                            />

                            : <div className="row w-100 justify-content-around">
                                    <div className="col ">
                                        <TextField
                                            id="firstName"
                                            label="First Name"
                                            className={classes.textField}
                                            defaultValue={this.props.firstName}
                                            onChange={(event) => {
                                                this.setState({firstName: event.target.value})
                                                this.props.updateField('firstName', event.target.value)
                                            }}
                                            margin="normal"
                                            required
                                            helperText={!this.props.firstName && "Cannot be empty"}

                                        />
                                    </div>
                                    <div  className="col">
                                            <TextField
                                            id="lastName"
                                            label="Last Name"
                                            className={classes.textField}
                                            defaultValue={this.props.lastName}
                                            onChange={(event) => {
                                                this.setState({lastName: event.target.value})
                                                this.props.updateField('lastName', event.target.value)
                                            }
                                            }
                                            margin="normal"
                                            required
                                            helperText={!this.props.lastName && "Cannot be empty"}

                                        />
                                        </div>
                                </div>
                    }


                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        required
                        defaultValue={this.props.password}

                        onChange={(event)=>{
                            this.setState({password : event.target.value})
                            this.props.updateField('password',event.target.value) }
                        }
                    />
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        defaultValue={this.props.confirmPassword}

                        margin="normal"
                        error={this.props.password !== this.props.confirmPassword}
                        helperText={this.props.password !== this.props.confirmPassword  && "Password not matching!" }
                        required
                        onChange={(event)=>{
                            this.setState({confirmPassword : event.target.value})
                            this.props.updateField('confirmPassword',event.target.value) }
                        }

                    />
                    {(!this.props.updateMode  || !this.props.myProfileEdit) &&
                    <TextField
                        required
                        error ={!this.props.username || !this.state.isUsernameAvailable}
                        id="username"
                        label="username"
                        defaultValue={this.props.username}
                        className={classes.textField}
                        margin="normal"
                        helperText={this.state.isUsernameAvailable?  "" : this.state.usernameError }
                        onChange={(event=>{
                            this.setState({username : event.target.value},
                                this.getUserNameAvailFromServer
                            )
                            this.props.updateField('username',event.target.value)
                        })}

                    />}

                    {(!this.props.updateMode  || !this.props.myProfileEdit) &&
                    <TextField
                        // error={true}
                        error ={ !EmailValidator.validate(this.props.emailId) || !this.state.isEmailAvailable}
                        id="emailId"
                        label="emailId"
                        defaultValue={this.props.emailId}

                        className={classes.textField}
                        margin="normal"

                        helperText={ this.state.emailError ||
                        !EmailValidator.validate(this.props.emailId) && "Invalid email Id!" }


                        onChange={(event)=>{
                            this.setState({emailId: event.target.value },
                                this.getEmailAvailFromServer)
                            this.props.updateField('emailId',event.target.value)

                        }}

                    />}
                    <TextField
                        error ={!this.props.phone}
                        id="phone"
                        type="number"
                        label="phone"
                        className={classes.textField}
                        margin="normal"
                        defaultValue={this.props.phone}

                        onChange={(event)=>{
                            this.setState({phone : event.target.value})
                            this.props.updateField('phone',event.target.value) }
                        }
                        helperText={!this.props.phone  && "Phone cannot be empty" }

                    />
                    <TextField
                        id="dob"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=>{
                            this.setState({dob : event.target.value})
                            this.props.updateField('dob',event.target.value) }
                        }
                    />

                    <TextField
                        error ={this.props.zip}
                        id="zip"
                        label="zip"
                        defaultValue={this.props.zip}
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=>{
                            this.setState({zip : event.target.value})
                            this.props.updateField('zip',event.target.value) }
                        }

                        helperText={ !this.props.zip && "Cannot be empty" }

                    />
                    <TextField
                        error ={false}
                        id="img"
                        label="img Url"
                        defaultValue={this.props.img}

                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=>{
                            this.setState({img : event.target.value})
                            this.props.updateField('img',event.target.value) }
                        }
                        helperText={ !this.props.img && "paste your image url here" }


                    />
                    <TextField
                        id="bio"
                        label="bio"
                        multiline
                        rowsMax="10"

                        defaultValue={this.props.bio}
                        fullWidth={true}
                        className={classes.fullWidthTextField}
                        margin="normal"
                        onChange={(event)=>{
                            this.setState({bio : event.target.value})
                            this.props.updateField('bio',event.target.value) }
                        }
                        />


                </form>
                <div className={classes.container}>
                <Button variant="contained" color="secondary"
                        onClick = {()=>{

                            // this.createNewUserInServer(this.props);

                            this.props.resetSelectedRole()
                            this.props.setUpdateMode(false)

                            return  <Redirect to ='/home'></Redirect>
                        }}
                        className={classes.button}

                        margin="normal">
                    Cancel
                </Button>

                <Button variant="contained" color="primary"
                        onClick = {()=>{
                            const updateUserService = new UserService();
                            if(!this.props.updateMode)
                            {
                                this.createNewUserInServer(this.props);

                            }
                           else {

                                var userToUpdate ={
                                    _id         : this.props._id,
                                    firstName   : this.props.firstName,
                                    lastName    : this.props.lastName,
                                    emailId     : this.props.emailId,
                                    phone       : this.props.phone,
                                    username    : this.props.username,
                                    password    : this.props.password,
                                    role        : this.props.role,
                                    title       : this.props.title,
                                    zip         : this.props.zip,
                                }

                                // alert("userTOUpdate : "+ JSON.stringify(userToUpdate))
                                this.props.updateUser(
                                    updateUserService.updateUser(userToUpdate));
                            }
                        }}
                        className={classes.button}
                        margin="normal"
                        // disabled={ !(this.props.role === BAND && this.isBandFormValid())
                        //     ||  !this.isNonBandFormValid()}

                        disabled={ this.isFormInvalid()}
                >
                    Ok
                </Button>
            </div>
            </div>;
    }
    isNonBandFormValid=()=>{
        console.log("isNonBandForm")
        return this.props.firstName && this.props.lastName &&
            ( this.props.password === this.props.confirmPassword) &&
            this.props.phone && EmailValidator.validate(this.props.emailId)
            && this.props.zip

             &&(  !this.props.updateMode ?
                (  this.state.isUsernameAvailable &&this.state.isEmailAvailable): true )
        // && this.props.zip
    }
    isBandFormValid=()=>{
        console.log("isBandForm")
        return ( this.props.password === this.props.confirmPassword) &&
            this.props.phone &&

           EmailValidator.validate(this.props.emailId)
            && this.props.zip &&this.props.title

            &&(  !this.props.updateMode ?
                (  this.state.isUsernameAvailable &&this.state.isEmailAvailable): true )
    }
    isFormInvalid(){
        if     (this.props.role!== BAND)
        {
            return !this.isNonBandFormValid()
        }

        else {

        return  !this.isBandFormValid()  }


    }

}


RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
     return  { ...state.userRegistrationReducer}
    }

const mapDispatchToProps = (dispatch) =>({


    register:(userData)=> {
        dispatch({
            type: REGISTER_USER, payload: {
                ...userData
            }
        })
    },

    updateField : (fieldName, value)=>{dispatch({
        type: UPDATE_FIELD,
        payload:{
            [fieldName] : value
        }
    })},

    create_user_dispatch:(payload)=>{
        dispatch({
            type :  CREATE_USER,
            payload : payload
        })

    },


    updateUser:(payload)=>{
        console.log("update user called")

        dispatch({
            type :  UPDATE_USER,
            payload : payload
        })

    },

    setUpdateMode : (booleanValue) =>{
        dispatch({type : SET_UPDATE_MODE,
            payload: {
            updateMode : booleanValue,
                selectedUser : false
            }})
    },


    resetUpdateSuccess: ()=>{
        dispatch({
            type: RESET_UPDATE_SUCCESS
        })
    },



    resetSelectedRole: () =>{dispatch({type: RESET_SELECTED_ROLE})}

})

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegistrationForm));

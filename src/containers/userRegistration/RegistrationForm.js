import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';
import {UserByRole} from "../../services/api/userByRole";
import {
    CREATE_USER,
    CREATE_USER_FULFILLED,
    CREATE_USER_PENDING,
    CREATE_USER_REJECTED,
    REGISTER_USER,
    UPDATE_FIELD
} from "../../redux/Constants/userRegister";
import {connect} from "react-redux";
import {UserService} from "../../services/api/user";
import {ARTIST, BAND} from "../../const/userRoles";

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
        zip : 0,
        bio: '',
        img:'',



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

        return (
          this.props.role == BAND ?
              <form className={classes.container}
                  noValidate
                  autoComplete="off" centred={true}>
                <TextField
                        id="title"
                        label="title"
                        className={classes.fullWidthTextField}
                        value={this.props.title}
                        onChange={(event)=>{
                            this.setState({firstName : event.target.value})
                            this.props.updateField('title',event.target.value) }}
                        margin="normal"
                        required
                        fullWidth={true}
                        helperText={ !this.props.title && "Cannot be empty" }

                    />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    required
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
                    margin="normal"
                    error={this.props.password !== this.props.confirmPassword}
                    helperText={this.props.password !== this.props.confirmPassword  && "Password not matching!" }
                    required
                    onChange={(event)=>{
                        this.setState({confirmPassword : event.target.value})
                        this.props.updateField('confirmPassword',event.target.value) }
                    }

                />
                <TextField
                    required
                    error ={!this.props.username || !this.state.isUsernameAvailable}
                    id="username"
                    label="username"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    helperText={this.state.isUsernameAvailable?  "" : this.state.usernameError }
                    onChange={(event=>{
                        this.setState({username : event.target.value},
                        this.getUserNameAvailFromServer
                        )

                        this.props.updateField('username',event.target.value)

                    })}

                />
                <TextField
                    // error={true}
                    error ={ !EmailValidator.validate(this.props.emailId) || !this.state.isEmailAvailable}
                    id="emailId"
                    label="emailId"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    // helperText={true  && "Email already registered!" }

                    helperText={ this.state.emailError ||
                        !EmailValidator.validate(this.props.emailId) && "Invalid email Id!" }


                    onChange={(event)=>{
                        this.setState({emailId: event.target.value },
                            this.getEmailAvailFromServer)
                        this.props.updateField('emailId',event.target.value)

                    }}

                />
                <TextField
                    error ={false}
                    id="phone"
                    type="number"
                    label="phone"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    onChange={(event)=>{
                        this.setState({phone : event.target.value})
                        this.props.updateField('phone',event.target.value) }
                    }

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
                  error ={false}
                  id="zip"
                  label="zip"
                  defaultValue={123466}
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
                      defaultValue={''}
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

                      fullWidth={true}
                      className={classes.fullWidthTextField}
                      margin="normal"
                      onChange={(event)=>{
                          this.setState({bio : event.target.value})
                          this.props.updateField('bio',event.target.value) }
                      }
                  />
                <Button variant="contained" color="primary"
                        onClick = {()=>{
                            this.props.register(this.state)
                            this.createNewUserInServer(this.props);
                        }}
                        className={classes.button}
                        fullWidth
                        margin="normal"
                        disabled={!this.isBandFormValid()}

                >
                    Register
                </Button>
            </form>:
              <form className={classes.container}
                    noValidate
                    autoComplete="off" centred={true}>

                  <TextField
                      id="firstName"
                      label="First Name"
                      className={classes.textField}
                      value={this.props.firstName}
                      onChange={(event)=>{
                          this.setState({firstName : event.target.value})
                          this.props.updateField('firstName',event.target.value) }}
                      margin="normal"
                      required
                      helperText={ !this.props.firstName && "Cannot be empty" }

                  />
                  <TextField
                      id="lastName"
                      label="Last Name"
                      className={classes.textField}
                      value={this.props.lastName}
                      onChange={(event)=>{
                          this.setState({lastName : event.target.value})
                          this.props.updateField('lastName',event.target.value) }
                      }
                      margin="normal"
                      required
                      helperText={ !this.props.lastName && "Cannot be empty" }

                  />
                  <TextField
                      id="password"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      required
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
                      margin="normal"
                      error={this.props.password !== this.props.confirmPassword}
                      helperText={this.props.password !== this.props.confirmPassword  && "Password not matching!" }
                      required
                      onChange={(event)=>{
                          this.setState({confirmPassword : event.target.value})
                          this.props.updateField('confirmPassword',event.target.value) }
                      }

                  />
                  <TextField
                      required
                      error ={!this.props.username || !this.state.isUsernameAvailable}
                      id="username"
                      label="username"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      helperText={this.state.isUsernameAvailable?  "" : this.state.usernameError }
                      onChange={(event=>{
                          this.setState({username : event.target.value},
                              this.getUserNameAvailFromServer
                          )

                          this.props.updateField('username',event.target.value)

                      })}

                  />
                  <TextField
                      // error={true}
                      error ={ !EmailValidator.validate(this.props.emailId) || !this.state.isEmailAvailable}
                      id="emailId"
                      label="emailId"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      // helperText={true  && "Email already registered!" }

                      helperText={ this.state.emailError ||
                      !EmailValidator.validate(this.props.emailId) && "Invalid email Id!" }


                      onChange={(event)=>{
                          this.setState({emailId: event.target.value },
                              this.getEmailAvailFromServer)
                          this.props.updateField('emailId',event.target.value)

                      }}

                  />
                  <TextField
                      error ={false}
                      id="phone"
                      type="number"
                      label="phone"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      onChange={(event)=>{
                          this.setState({phone : event.target.value})
                          this.props.updateField('phone',event.target.value) }
                      }

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
                      error ={false}
                      id="zip"
                      label="zip"
                      defaultValue={123466}
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
                      defaultValue={''}
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

                      fullWidth={true}
                      className={classes.fullWidthTextField}
                      margin="normal"
                      onChange={(event)=>{
                          this.setState({bio : event.target.value})
                          this.props.updateField('bio',event.target.value) }
                      }
                  />
                  <Button variant="contained" color="primary"
                          onClick = {()=>{
                              this.props.register(this.state)
                              this.createNewUserInServer(this.props);
                          }}
                          className={classes.button}
                          fullWidth
                          margin="normal"
                          disabled={!this.isNonBandFormValid()}

                  >
                      Register
                  </Button>
              </form>
        );
    }


    isNonBandFormValid=()=>{
        return this.props.firstName && this.props.lastName &&  this.props.zip &&
            (this.props.password === this.props.confirmPassword) &&
            this.props.username && this.props.phone && EmailValidator.validate(this.props.emailId)
            && this.state.isEmailAvailable & this.state.isUsernameAvailable}

    isBandFormValid=()=>{
        return this.props.title &&this.props.zip &&
            (this.props.password === this.props.confirmPassword) &&
            this.props.username && this.props.phone && EmailValidator.validate(this.props.emailId)
            && this.state.isEmailAvailable & this.state.isUsernameAvailable}

}







RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};




const mapStateToProps = state => {
    return {
        ...state.userRegistrationReducer
    }
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


    create_user_start:()=>{
        dispatch({
            type : CREATE_USER_PENDING
        })
    },



    create_user_fulfilled:(data)=>{
        dispatch({
            type : CREATE_USER_FULFILLED,
            payload: data
        })
    },


    create_user_rejected:(err)=>{
        dispatch({
            type : CREATE_USER_REJECTED,
            payload: err
        })
    },

    create_user_dispatch:(payload)=>{
        dispatch({
            type :  CREATE_USER,
            payload : payload
        })

    }
})



export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegistrationForm));

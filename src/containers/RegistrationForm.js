import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';
import {UserByRole} from "../services/api/userByRole";

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
        width: 200,
        spacing : 100,
        paddingBottom : 20,
    },
    menu: {
        width: 200,
    },
});

class TextFields extends React.Component {

    userByRoleService = new UserByRole();

    state = {
        role     : 'admin',
        email     : '',
        username  : '',
        phone     :'',
        firstName : 'First',
        lastName  : 'Last',
        password : '',
        confirmPassword : '',
        dob: '',


        isUsernameAvailable : false,
        isEmailAvailable : false,
        emailError :'',
        usernameError:''


    };



    getUserNameAvailFromServer=()=>{
        this.userByRoleService.getUserNameAvailability(this.state.role, this.state.username).
        then(result=>{
            console.log(result)
            this.setState({
                isUsernameAvailable : true,
                usernameError : ''})
        }).
        catch(err=>{
            console.log(err)
            this.setState({isUsernameAvailable : false,
                usernameError : 'username taken!',})
        })
    }

    getEmailAvailFromServer=()=>{

        this.userByRoleService.getEmailIdAvailability(this.state.role, this.state.email).
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container}
                  noValidate
                  autoComplete="off" centred>
                <TextField
                    id="firstName"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                    required
                    helperText={ !this.state.firstName && "Cannot be empty" }

                />

                <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    required
                    helperText={ !this.state.lastName && "Cannot be empty" }

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
                        this.setState({password : event.target.value })}}
                />
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    className={classes.textField}
                        type="password"
                    autoComplete="current-password"
                    margin="normal"
                    error={this.state.password !== this.state.confirmPassword}
                    helperText={this.state.password !== this.state.confirmPassword  && "Password not matching!" }
                    required

                    onChange={(event)=>{
                        this.setState({confirmPassword : event.target.value })}}

                />

                <TextField
                    required
                    error ={!this.state.username || !this.state.isUsernameAvailable}
                    id="username"
                    label="username"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    helperText={this.state.isUsernameAvailable?  "" : this.state.usernameError }
                    onChange={(event=>{
                        this.setState({username : event.target.value},
                        this.getUserNameAvailFromServer
                        )})}

                />
                <TextField
                    // error={true}
                    error ={ !EmailValidator.validate(this.state.email) || !this.state.isEmailAvailable}
                    id="email"
                    label="email"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    // helperText={true  && "Email already registered!" }

                    helperText={ this.state.emailError ||
                        !EmailValidator.validate(this.state.email) && "Invalid email Id!" }


                    onChange={(event)=>{
                        this.setState({email : event.target.value },
                            this.getEmailAvailFromServer)}}

                />

                <TextField
                    error ={false}
                    id="phone"
                    type="number"
                    label="phone"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    onChange={(event=>{this.setState(
                        {phone : event.target.value})})}

                />

                <TextField
                    id="dob"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    margin="normal"
                    onChange={(event=>{
                        this.setState({dob : event.target.value})})}
                />


                <Button variant="contained" color="primary"
                        className={classes.button}
                        fullWidth
                        margin="normal"
                        disabled={!this.isFormValid()}

                >
                    Register
                </Button>

            </form>
        );
    }


    isFormValid=()=>{
        return this.state.firstName && this.state.lastName &&
            (this.state.password === this.state.confirmPassword) &&
            this.state.username && this.state.phone && EmailValidator.validate(this.state.email)
            && this.state.isEmailAvailable & this.state.isUsernameAvailable}

}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(TextFields)

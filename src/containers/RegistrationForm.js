import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends React.Component {
    state = {
        firstName : 'First',
        lastName  : 'Last',
        password : '',
        confirmPassword : '',
        dob: '',

        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

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
                />

                <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    required
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
                    error ={true}
                    id="username"
                    label="username"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    helperText={false?  "username already taken!" : ""}
                />
                <TextField
                    error ={false}
                    id="email"
                    label="email"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    error ={true}
                    helperText={true  && "Email already registered!" }

                />

                <TextField
                    error ={false}
                    id="phone"
                    label="phone"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    id="dob"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    margin="normal"
                    onChange={(event=>{this.setState({dob : event.target.value})})}
                />


                <Button variant="contained" color="primary"
                        className={classes.button}
                        fullWidth
                        margin="normal">
                    Register
                </Button>

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(TextFields)



// form fields for later user

//
// <TextField
// id="read-only-input"
// label="Read Only"
// defaultValue="Hello World"
// className={classes.textField}
// margin="normal"
// InputProps={{
//     readOnly: true,
// }}
// />
// <TextField
//     id="multiline-flexible"
//     label="Multiline"
//     multiline
//     rowsMax="4"
//     value={this.state.multiline}
//     onChange={this.handleChange('multiline')}
//     className={classes.textField}
//     margin="normal"
// />
// <TextField
// id="multiline-static"
// label="Multiline"
// multiline
// rows="4"
// defaultValue="Default Value"
// className={classes.textField}
// margin="normal"
//     />
//     <TextField
// id="helperText"
// label="Helper text"
// defaultValue="Default Value"
// className={classes.textField}
// helperText="Some important text"
// margin="normal"
//     />
//     <TextField
// id="with-placeholder"
// label="With placeholder"
// placeholder="Placeholder"
// className={classes.textField}
// margin="normal"
//     />
//     <TextField
// id="textarea"
// label="With placeholder multiline"
// placeholder="Placeholder"
// multiline
// className={classes.textField}
// margin="normal"
//     />
//     <TextField
// id="number"
// label="Number"
// value={this.state.age}
// onChange={this.handleChange('age')}
// type="number"
// className={classes.textField}
// InputLabelProps={{
//     shrink: true,
// }}
// margin="normal"
//     />
//     <TextField
// id="search"
// label="Search field"
// type="search"
// className={classes.textField}
// margin="normal"
//     />
//     <TextField
// id="select-currency"
// select
// label="Select"
// className={classes.textField}
// value={this.state.currency}
// onChange={this.handleChange('currency')}
// SelectProps={{
//     MenuProps: {
//         className: classes.menu,
//     },
// }}
// helperText="Please select your currency"
// margin="normal"
//     >
//     {currencies.map(option => (
//         <MenuItem key={option.value} value={option.value}>
//             {option.label}
//         </MenuItem>
//     ))}
// </TextField>
// <TextField
//     id="select-currency-native"
//     select
//     label="Native select"
//     className={classes.textField}
//     value={this.state.currency}
//     onChange={this.handleChange('currency')}
//     SelectProps={{
//         native: true,
//         MenuProps: {
//             className: classes.menu,
//         },
//     }}
//     helperText="Please select your currency"
//     margin="normal"
// >
//     {currencies.map(option => (
//         <option key={option.value} value={option.value}>
//             {option.label}
//         </option>
//     ))}
// </TextField>
// <TextField
//     id="full-width"
//     label="Label"
//     InputLabelProps={{
//         shrink: true,
//     }}
//     placeholder="Placeholder"
//     helperText="Full width!"
//     fullWidth
//     margin="normal"
// />
//

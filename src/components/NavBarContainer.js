import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/es/Button/Button";
import { LOG_IN, LOG_OUT, LOG_IN_ACT, LOG_OUT_ACT } from '../redux/actions/userAccountActions';

import {withRouter} from "react-router";
import {Link} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked, loginCall, logOutCall) => {
        checked? loginCall() : logOutCall()
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        console.log(this.props)

        return (
            <div className={classes.root}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={this.props.isLoggedIn} onChange={
                                ()=>this.handleChange(null, this.props.isLoggedIn,
                                     this.props.logOut,this.props.logIn)} aria-label="LoginSwitch" />
                        }
                        label={this.props.isLoggedIn ? 'Logout' : 'Login'}
                    />
                </FormGroup>
                <AppBar position="static">

                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Photos
                        </Typography>
                        {!!this.props.isLoggedIn && (
                            <div>

                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Button color="inherit" className={classes.button} onClick={this.props.logOut}>
                                    Logout
                                </Button>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}

                        {!this.props.isLoggedIn && (
                            <div>

                                <Link to={`/register`} style={{ textDecoration: 'none' ,color: 'inherit'}}>
                                    <Button color='inherit'
                                            className={classes.button}>
                                           Register
                                    </Button>

                                </Link>

                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {

    console.log(state.userAccountReducer)


    return {

        isLoggedIn : state.userAccountReducer.isLoggedIn

    }

}


const mapDispatchToProps = (dispatch) =>({

    logIn: () => {dispatch(LOG_IN_ACT)},
    logOut: () => {dispatch(LOG_OUT_ACT)}

})

const styledAppBar = withStyles(styles)(MenuAppBar);
// export default withStyles(styles)(MenuAppBar);
export default connect(mapStateToProps, mapDispatchToProps)(styledAppBar);


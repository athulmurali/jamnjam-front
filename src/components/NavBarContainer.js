import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/es/Button/Button";
import {LOG_IN, LOG_IN_ACT, LOG_OUT, LOG_OUT_ACT} from '../redux/actions/userAccountActions';
import {Link} from "react-router-dom";
import DrawerMenu from "../containers/DrawerMenu";
import {OPEN_SIDE_BAR} from "../redux/Constants/userAccount";
import {Badge} from "material-ui";
import * as theme from "material-ui";




const styles = theme => ({

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

    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
});



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

        return (
            <div className={classes.root}>

                <AppBar position="static">

                    <Toolbar>
                        {this.props.isLoggedIn &&
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                    onClick={this.props.openSideBar}
                        >
                            <MenuIcon/>
                        </IconButton>
                        }
                        <DrawerMenu role = {!!this.props.profile && this.props.profile.role}></DrawerMenu>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Jam n' jam
                        </Typography>
                        {!!this.props.isLoggedIn && (
                            <div>
                                <span className="badge badge-light">{this.props.profile.role}</span>

                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Button color="inherit" className={classes.button}
                                        onClick={()=>{
                                            this.props.logOut()
                                            console.log(this.props)
                                            window.location.href = "/home";

                                        }}>
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
                                    <Link to={'/profileByRole'} style={{ textDecoration: 'none' ,color: 'inherit'}}>

                                    <MenuItem onClick={this.handleClose}>

                                        {/*<Badge className={classes.padding}*/}
                                               {/*color="secondary"*/}
                                               {/*badgeContent={this.props.profile.role}>*/}
                                            Profile
                                        {/*</Badge>*/}
                                    </MenuItem>
                                    </Link>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}

                        {!this.props.isLoggedIn && (
                            <div>

                                <Link to={'/register'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
                                    <Button color='inherit'
                                            className={classes.button}>
                                           Register
                                    </Button>

                                </Link>


                                <Link to={'/login'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
                                    <Button color='inherit'
                                            className={classes.button}>
                                        Login
                                    </Button>

                                </Link>


                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                {/*<FormGroup>*/}
                    {/*<FormControlLabel*/}
                        {/*control={*/}
                            {/*<Switch checked={this.props.isLoggedIn} onChange={*/}
                                {/*()=>this.handleChange(null, this.props.isLoggedIn,*/}
                                    {/*this.props.logOut,this.props.logIn)} aria-label="LoginSwitch" />*/}
                        {/*}*/}
                        {/*label={this.props.isLoggedIn ? 'Logout' : 'Login'}*/}
                    {/*/>*/}
                {/*</FormGroup>*/}
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isLoggedIn : state.userAccountReducer.isLoggedIn,
        profile : state.loginReducer.profile
    }

}


const mapDispatchToProps = (dispatch) =>({

    logIn: () => {dispatch(LOG_IN_ACT)},
    logOut: () => {
        dispatch(LOG_OUT_ACT)
    },
    openSideBar: () => {dispatch( {type: OPEN_SIDE_BAR})},
})

const styledAppBar = withStyles(styles)(MenuAppBar);
// export default withStyles(styles)(MenuAppBar);
export default connect(mapStateToProps, mapDispatchToProps)(styledAppBar);


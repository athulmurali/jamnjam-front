import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {LOG_IN_ACT, LOG_OUT_ACT} from '../../redux/actions/userAccountActions';
import {Link} from "react-router-dom";
import DrawerMenu from "../../containers/DrawerMenu";
import {OPEN_SIDE_BAR} from "../../redux/constants/userAccount";
import PageMessages from "../../config/PageMessages";
import './NavBarContainer.css'
import {NotLoginOptions} from "../NotLoginOptions";
import {LoggedInOptions} from "../LoggedInOptions";


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
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },


});


class NavBarContainer extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked, loginCall, logOutCall) => {
        checked ? loginCall() : logOutCall()
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };


    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>
                        {this.props.myProfile &&
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                    onClick={this.props.openSideBar}>
                            <MenuIcon/>
                        </IconButton>}
                        <DrawerMenu role={!!this.props.myProfile && this.props.myProfile.role}/>

                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link to={'/home'} className="loginContainer"> {PageMessages.APP_TITLE} </Link>
                        </Typography>
                        {this.props.myProfile ?
                            <LoggedInOptions myProfile={this.props.myProfile} open={open} onClick={this.handleMenu}
                                             classes={classes}
                                             onClickLogout={() => {
                                                 this.props.logOut();
                                                 window.location.href = "/home";
                                             }} anchorEl={anchorEl} onClose={this.handleClose}/> :
                            <NotLoginOptions classes={classes}/>
                        }
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

NavBarContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userAccountReducer.isLoggedIn,
        profile: state.loginReducer.profile,
        myProfile: JSON.parse(localStorage.getItem('myProfile'))

    }

};

const mapDispatchToProps = (dispatch) => ({

    logIn: () => {
        dispatch(LOG_IN_ACT)
    },
    logOut: () => {
        dispatch(LOG_OUT_ACT)
    },
    openSideBar: () => {
        dispatch({type: OPEN_SIDE_BAR})
    },
});

const StyledNavBarContainer = withStyles(styles)(NavBarContainer);
// export default withStyles(styles)(MenuAppBar);
export default connect(mapStateToProps, mapDispatchToProps)(StyledNavBarContainer);


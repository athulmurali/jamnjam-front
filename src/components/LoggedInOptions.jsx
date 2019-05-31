import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";

export function LoggedInOptions(props) {
    return <div>
        <span className="badge badge-light">{props.myProfile.role}</span>
        <IconButton
            aria-owns={props.open ? "menu-appbar" : null}
            aria-haspopup="true"
            onClick={props.onClick}
            color="inherit"
        >
            <AccountCircle/>
        </IconButton>
        <Button color="inherit" className={props.classes.button}
                onClick={props.onClickLogout}>
            Logout
        </Button>
        <Menu
            id="menu-appbar"
            anchorEl={props.anchorEl}
            anchorOrigin={props.classes.anchorOrigin}
            transformOrigin={props.classes.transformOrigin}
            open={props.open}
            onClose={props.onClose}
        >
            <Link to={"/profileByRole"} style={{textDecoration: "none", color: "inherit"}}>
                <MenuItem onClick={props.onClose}>Profile</MenuItem>
            </Link>
            <MenuItem onClick={props.onClose}>My account</MenuItem>
        </Menu>
    </div>;
}

LoggedInOptions.propTypes = {
    myProfile: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    classes: PropTypes.any,
    onClickLogout: PropTypes.func,
    anchorEl: PropTypes.any,
    onClose: PropTypes.func
};

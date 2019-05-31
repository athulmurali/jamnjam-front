import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";

export function NotLoginOptions(props) {
    return <div>
        <Link to={"/register"} className="registerContainer">
            <Button color='inherit' className={props.classes.button}>Register</Button>
        </Link>

        <Link to={"/login"} className="loginContainer">
            <Button color='inherit' className={props.classes.button}>Login</Button>
        </Link>
    </div>;
}

NotLoginOptions.propTypes = {classes: PropTypes.any};

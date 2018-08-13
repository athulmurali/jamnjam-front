import React from "react";
import {Button} from "@material-ui/core/es/index";
import {withStyles} from "@material-ui/core/styles/index";
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


export   const  VerifyEmail = (props)=>{
    const {classes} = props
    return(
        <div className="card rounded" id="successCard">
            <div className="card-img-top row">

                <i className="mx-auto fas fa-check-circle fa-6x" style={{padding: '10'}}></i>
            </div>

            <div className="card-body ">
                <h5 className="card-title">Registration Successful! </h5>
                <p className="card-text">
                  Please login with the given userId and password </p>

                <Link to={'/login'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
                    <Button color='inherit'
                            className={classes.button}>
                        Login
                    </Button>

                </Link>

            </div>
        </div>

    )
}


export default withStyles(styles)(VerifyEmail);


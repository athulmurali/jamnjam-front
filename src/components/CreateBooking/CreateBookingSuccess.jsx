import Card from "@material-ui/core/Card";
import {SUCCESS_IMG} from "../../const/url";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import {PATH_MY_GIGS} from "../../const/routeConstants";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";

export function CreateBookingSuccess(props) {
    return <Card className={props.classes.card}>

        <img className={props.classes.img}
             src={SUCCESS_IMG}
             alt="success_img"
        />

        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Booking success!
            </Typography>

        </CardContent>
        <CardActions className={props.classes.cardActions}>
            <Link to={PATH_MY_GIGS} style={{textDecoration: "none", color: "inherit"}}>
                <Button size="medium" color="primary"
                        onClick={props.onClick}
                >
                    OK
                </Button>
            </Link>

        </CardActions>
    </Card>;
}

CreateBookingSuccess.propTypes = {
    classes: PropTypes.any,
    onClick: PropTypes.func
};

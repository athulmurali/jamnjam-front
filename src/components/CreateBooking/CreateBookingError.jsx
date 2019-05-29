import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {ERROR_IMG} from "../../const/url";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";

export function CreateBookingError(props) {
    return <Card className={props.classes.card}>
        <CardMedia
            className={props.classes.media}
            image={ERROR_IMG}
            title="Error img!"
        />
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Error
            </Typography>

            <Typography gutterBottom variant="headline" component="h3">
                {props.error.message}
            </Typography>

        </CardContent>
        <CardActions className={props.classes.cardActions}>

            <Button size="medium" color="primary"
                    onClick={props.onClick}>
                Retry
            </Button>
        </CardActions>
    </Card>;
}

CreateBookingError.propTypes = {
    classes: PropTypes.any,
    error: PropTypes.any,
    onClick: PropTypes.func
};

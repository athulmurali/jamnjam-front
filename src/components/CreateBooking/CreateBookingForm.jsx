import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {CALENDAR_BOOKING} from "../../const/url";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";

export function CreateBookingForm(props) {
    return <Card className={props.classes.card}>
        <CardMedia
            className={props.classes.media}
            image={CALENDAR_BOOKING}
            title="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Book an Artist
            </Typography>
            <form className={props.classes.form} noValidate autoComplete="off">
                <TextField
                    id="title"
                    label="title"
                    className={props.classes.textField}
                    value={props.newBooking.title}
                    onChange={props.onChange}
                    margin="normal"
                />
                <TextField
                    id="datetime-local"
                    label="Start DateTime"
                    type="datetime-local"
                    defaultValue={props.defaultValue}
                    className={props.classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.onChangeStartDate}
                />
                <TextField
                    id="datetime-local"
                    label="End DateTime"
                    type="datetime-local"
                    defaultValue={props.defaultValue1}
                    className={props.classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}

                    onChange={props.onChangeEndDate}
                />
                <TextField
                    id="remarks"
                    label="remarks"
                    className={props.classes.textField}
                    value={props.newBooking.remarks}
                    multiline
                    onChange={props.onChangeRemarks}
                    margin="normal"

                />
            </form>
        </CardContent>
        <CardActions className={props.classes.cardActions}>
            <Button size="small" color="primary">
                Profile
            </Button>
            <Button size="small" color="primary"
                    disabled={!(props.newBooking.with && props.newBooking.title
                        && props.newBooking.dateAndTime && props.newBooking.endDateAndTime
                        && props.newBooking.remarks)}
                    onClick={props.onClick
                    }>
                Confirm
            </Button>
        </CardActions>
    </Card>;
}

CreateBookingForm.propTypes = {
    classes: PropTypes.any,
    newBooking: PropTypes.any,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    onChangeStartDate: PropTypes.func,
    defaultValue1: PropTypes.string,
    onChangeEndDate: PropTypes.func,
    onChangeRemarks: PropTypes.func,
    onClick: PropTypes.func
};

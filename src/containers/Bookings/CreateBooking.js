import {connect} from "react-redux";
import {
    CREATE_APPOINTMENT,
    SET_APPOINTMENT_START_END_DATE,
    UPDATE_FIELD_BY_VALUE
} from "../../redux/constants/appointments";
import {GET_PROFILE_FROM_LOCAL_ST} from "../../redux/constants/userRegister";
import React from "react";
import AppointmentService from "../../services/api/AppointmentService";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import qs from 'qs'
import {LOADING_GIF} from "../../const/url";
import moment from "moment";
import {CreateBookingError} from "../../components/CreateBooking/CreateBookingError";
import {CreateBookingSuccess} from "../../components/CreateBooking/CreateBookingSuccess";
import {CreateBookingForm} from "../../components/CreateBooking/CreateBookingForm";

const styles = theme => ({

    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        height: '85vh',
        justifyContent: 'center',
        margin: 'auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    card: {
        flex: 1,
        maxWidth: 345,
        margin: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    media: {
        paddingTop: '56.25%', // 16:9
        objectFit: 'contain',
        justifyContent: 'center'
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    loadingCard: {
        backgroundColor: 'blue'
    },
    img: {
        flex: 1,
        alignItems: 'center',
        margin: 'auto',


    }
});


let defaultStartDateTime = moment(new Date().setMinutes(new Date().getMinutes() + 30)).format();
defaultStartDateTime = defaultStartDateTime.substr(0, defaultStartDateTime.length - 9);

let defaultEndDateTime = moment(new Date().setHours(new Date().getHours() + 1)).format();
defaultEndDateTime = defaultEndDateTime.substr(0, defaultEndDateTime.length - 9);


function CreateBooking(props) {

    const {classes} = props;
    //removes ? from the query string
    const values = qs.parse(props.location.search.substring(1));
    const artistId = values.artistId;
    return (
        <div className={classes.container}>
            {!!props.fetching &&
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={LOADING_GIF}
                    title="loading"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Loading....
                    </Typography>

                </CardContent>

            </Card>}

            {!props.fetching && !!props.error
            && <CreateBookingError classes={classes} error={props.error} onClick={() => {
                props.updateField('error', false)
            }}/>}

            {!props.fetching && !!props.updateSuccess
            && <CreateBookingSuccess classes={classes} onClick={() => {
                props.updateField('updateSuccess', false)
            }}/>}

            {!props.error && !props.fetching && !props.updateSuccess &&
            <CreateBookingForm
                classes={classes}
                newBooking={props.newBooking}
                onChange={(e) => {
                    props.setStartEndDate(
                        artistId, e.target.value,
                        props.newBooking.dateAndTime, props.newBooking.endDateAndTime,
                        props.newBooking.remarks)
                }}
                defaultValue={defaultStartDateTime}
                onChangeStartDate={(event) => {
                    props.setStartEndDate(
                        artistId, props.newBooking.title,
                        event.target.value, props.newBooking.endDateAndTime,
                        props.newBooking.remarks)
                }}
                defaultValue1={defaultEndDateTime}
                onChangeEndDate={(event) => {
                    props.setStartEndDate(
                        artistId, props.newBooking.title,
                        props.newBooking.dateAndTime, event.target.value,
                        props.newBooking.remarks)
                }}
                onChangeRemarks={(e) => {
                    props.setStartEndDate(
                        artistId, props.newBooking.title,
                        props.newBooking.dateAndTime, props.newBooking.endDateAndTime,
                        e.target.value)
                }} onClick={() => {
                const appointmentService = new AppointmentService();
                const tempPromise = appointmentService.createAppointment(props.newBooking);
                props.createNewBooking(tempPromise)
            }}/>
            }
        </div>
    )
}

CreateBooking.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {...state.appointmentsReducer}
};

const mapDispatchToProps = (dispatch) => ({
    updateField: (fieldName, value) => {
        dispatch({
            type: UPDATE_FIELD_BY_VALUE,
            payload: {
                [fieldName]: value
            }
        })
    },

    setStartEndDate: (artistId, title, startDateAndTime, endDateAndTime, remarks) => {
        console.log(title);
        dispatch({
            type: SET_APPOINTMENT_START_END_DATE,
            payload: {
                with: artistId,
                title: title,
                dateAndTime: startDateAndTime,
                endDateAndTime: endDateAndTime,
                remarks: remarks,
            }
        })
    },
    getProfileFromLocalStorage: () => {
        dispatch({type: GET_PROFILE_FROM_LOCAL_ST})
    },
    createNewBooking: (promise) => {
        dispatch({
            type: CREATE_APPOINTMENT,
            payload: promise
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateBooking));






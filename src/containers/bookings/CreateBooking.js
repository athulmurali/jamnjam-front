import {connect} from "react-redux";
import {
    CREATE_APPOINTMENT,
    SET_APPOINTMENT_START_END_DATE, UPDATE_FIELD_BY_VALUE
} from "../../redux/Constants/appointments";
import {GET_PROFILE_FROM_LOCAL_ST} from "../../redux/Constants/userRegister";
import React from "react";
import AppointmentService from "../../services/api/AppointmentService";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import queryString from 'query-string'
import {CALENDAR_BOOKING, ERROR_IMG, LOADING_GIF, SUCCESS_IMG} from "../../const/url";
import {Link} from "react-router-dom";
import {PATH_MY_GIGS} from "../../const/routeConstants";
import moment from "moment";



const styles =theme=>({

    container : {
        display: 'flex',
        flexDirection : 'row',
        padding : '20px',
        height : '85vh',
        justifyContent: 'center',
        margin :'auto',
    },
    form:{
      display:'flex',
      flexDirection:'column',
        justifyContent: 'space-evenly'
    },
    card: {
        flex :1,
        maxWidth: 345,
        margin :'auto',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    media: {
        paddingTop: '56.25%', // 16:9
        objectFit:'contain',
        justifyContent: 'center'
    },
    cardActions:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-evenly',
    },
    textField:{
        marginLeft:     theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    loadingCard:{
        backgroundColor: 'blue'
    },
    img:{
        flex: 1,
        alignItems: 'center',
        margin :'auto',


    }
});


function CreateBooking(props) {



    let defaultStartDateTime = moment(new Date().setMinutes(new Date().getMinutes() + 30)).format();
    defaultStartDateTime  = defaultStartDateTime.substr(0, defaultStartDateTime.length -9 );

    let defaultEndDateTime = moment(new Date().setHours(new Date().getHours() + 1)).format();
    defaultEndDateTime  = defaultEndDateTime.substr(0, defaultEndDateTime.length -9 );

    const {classes} = props;
    const values = queryString.parse(props.location.search);
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
            && <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
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
                <CardActions className={classes.cardActions}>

                    <Button size="medium" color="primary"
                            onClick={()=>{
                                props.updateField('error',false)
                            }}>
                       Retry
                    </Button>
                </CardActions>
            </Card>}

            {!props.fetching && !!props.updateSuccess
            && <Card className={classes.card}>

                    <img className={classes.img}
                         src={ SUCCESS_IMG}
                         alt="success_img"
                    />

                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                       Booking success!
                    </Typography>

                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Link to={PATH_MY_GIGS} style ={{textDecoration: 'none', color :'inherit'}}>
                        <Button size="medium" color="primary"
                                onClick={()=>{props.updateField('updateSuccess',false)}}
                        >
                            OK
                        </Button>
                    </Link>

                </CardActions>
            </Card>}

            {!props.error && !props.fetching && !props.updateSuccess &&
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={CALENDAR_BOOKING}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Book an Artist
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            id="title"
                            label="title"
                            className={classes.textField}
                            value={props.newBooking.title}
                            onChange={(e) =>{
                                props.setStartEndDate(
                                   artistId, e.target.value,
                                    props.newBooking.dateAndTime, props.newBooking.endDateAndTime,
                                    props.newBooking.remarks)
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="datetime-local"
                            label="Start DateTime"
                            type="datetime-local"
                            defaultValue={defaultStartDateTime}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event)=>{
                                props.setStartEndDate(
                                    artistId, props.newBooking.title,
                                    event.target.value, props.newBooking.endDateAndTime,
                                    props.newBooking.remarks)
                            }}
                        />
                        <TextField
                            id="datetime-local"
                            label="End DateTime"
                            type="datetime-local"
                            defaultValue={defaultEndDateTime}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}

                            onChange={(event)=>{
                                props.setStartEndDate(
                                    artistId, props.newBooking.title,
                                  props.newBooking.dateAndTime,   event.target.value,
                                    props.newBooking.remarks)
                            }}
                        />
                        <TextField
                            id="remarks"
                            label="remarks"
                            className={classes.textField}
                            value={props.newBooking.remarks}
                            multiline
                            onChange={(e) =>{

                                props.setStartEndDate(
                                    artistId, props.newBooking.title,
                                    props.newBooking.dateAndTime, props.newBooking.endDateAndTime,
                                    e.target.value)
                            }}
                            margin="normal"

                        />
                    </form>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                        Profile
                    </Button>
                    <Button size="small" color="primary"
                            disabled={ !(props.newBooking.with && props.newBooking.title
                            && props.newBooking.dateAndTime && props.newBooking.endDateAndTime
                            && props.newBooking.remarks)}
                            onClick={()=>{
                                const appointmentService = new AppointmentService();
                                const tempPromise =appointmentService.createAppointment(props.newBooking);
                                props.createNewBooking(tempPromise)
                            }
                            }>
                        Confirm
                    </Button>
                </CardActions>
            </Card>}
        </div>
    )
}

CreateBooking.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {...state.appointmentsReducer}
};

const mapDispatchToProps = (dispatch) =>({
    updateField:(fieldName, value)=>{
      dispatch({type: UPDATE_FIELD_BY_VALUE,
      payload : {
          [fieldName]: value
      }})
    },

    setStartEndDate:(artistId,title,startDateAndTime,endDateAndTime,remarks)=>{
        console.log(title);
        dispatch({
            type :SET_APPOINTMENT_START_END_DATE,
            payload:{
                with :artistId,
                title :title,
                dateAndTime:startDateAndTime,
                endDateAndTime: endDateAndTime,
                remarks :remarks,
            }
        })
    },
    getProfileFromLocalStorage:()=>{dispatch({type : GET_PROFILE_FROM_LOCAL_ST})},
    createNewBooking:(promise)=>{
        dispatch({
        type : CREATE_APPOINTMENT,
        payload: promise
    })}
});



export default  connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(CreateBooking));






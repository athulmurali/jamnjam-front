import ResponsiveTable from 'material-ui-next-responsive-table'
import React from "react";
import {DELETE_APPOINTMENT, GET_MY_APPOINTMENTS} from "../../redux/constants/appointments";
import {GET_PROFILE_FROM_LOCAL_ST} from "../../redux/constants/userRegister";
import {connect} from "react-redux";
import AppointmentService from '../../services/api/AppointmentService'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {LOADING_GIF} from "../../const/url";


const service = new AppointmentService();

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },

    flexContainer:{
        display: 'flex',
        height : '100%',
        justifyContent: 'center'
    }
});

function TextButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button className={classes.button}>Default</Button>
            <Button color="primary" className={classes.button}>
                Primary
            </Button>

            <Button disabled className={classes.button}>
                Disabled
            </Button>
            <Button href="#text-buttons" className={classes.button}>
                Link
            </Button>
            <input
                accept="image/*"
                className={classes.input}
                id="flat-button-file"
                multiple
                type="file"
            />
            <label htmlFor="flat-button-file">
                <Button component="span" className={classes.button}>
                    Upload
                </Button>
            </label>
        </div>
    );
}

TextButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};


const columns = [
    {
        key: 'id',
        label: 'Booking ID',

    },
    {
        key: 'title',
        label: 'Title',
        primary: true,
    },
    {
        key: 'remarks',
        label: 'More Info',
    },

    {
        key: 'dateAndTime',
        label: 'start DateTime',
    },

    {
        key: 'endDateAndTime',
        label: 'end DateTime',
    },
    {
        key: 'delete',
        label: 'Delete',
        render: (value, column, row, data) =>  {
            console.log(column);
            return <Button color="secondary" className={styles.button}
            onClick={(e)=>{
                column.fun(column.id)
            }}>
                Cancel
            </Button>
        }
    },

];
const embedProp=(appointments, fun)=>{

    // for(let i=0; i< appointments.length; i++)
    // {
    //     console.log(appointments[i])
    //
    // }
    return appointments.map((appointment)=>{


        appointment.fun= fun;

        console.log(appointment);

        return appointment

    })
// return appointments
};

const   MyGigs =(props)=>{
    console.log("update required : ? " + props.updateRequired);

    if(!!props.updateRequired)
    {
        props.getMyBookings();
    }

    return(

        <div className={styles.flexContainer}>

            { !!props.fetching &&
            <div className="text-center">
                <img src={LOADING_GIF}
                     alt="loading" style={{minWidth : '30%', margin : 'auto'}}
                />
            </div>}


            { !props.fetching && !!props.myAppointments && props.myAppointments.length ==0 &&
            <h2>No bookings at this time!</h2>}

            {( !props.fetching && !!props.myAppointments &&  props.myAppointments.length!==0 &&
                <ResponsiveTable
                        columns={columns}
                        // data={embedProp(props.myAppointments, (value)=>{console.log(value)})}
                        data={embedProp(props.myAppointments, props.deleteMyBooking)}
                    />) }
        </div>


    )

};

const mapStateToProps = state => {
    return {...state.appointmentsReducer}
};

const mapDispatchToProps = (dispatch) =>({
    getMyBookings:()=>{dispatch({
        type: GET_MY_APPOINTMENTS,
        payload: service.getMyAppointments
    }) },
    getProfileFromLocalStorage:()=>{dispatch({type : GET_PROFILE_FROM_LOCAL_ST})},

    deleteMyBooking:(bookingId)=>{
        console.log(bookingId);
        dispatch({
        type : DELETE_APPOINTMENT,
        payload:service.deleteAppointment(bookingId)
    })}

});



export default  connect(mapStateToProps, mapDispatchToProps)(MyGigs);


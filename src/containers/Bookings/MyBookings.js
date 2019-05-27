import React from "react";
import {connect} from "react-redux";
import {GET_PROFILE_FROM_LOCAL_ST} from "../../redux/constants/userRegister";
import {GET_MY_APPOINTMENTS} from "../../redux/constants/appointments";
import AppointmentService from '../../services/api/AppointmentService'


const service = new AppointmentService();
const MyBookings=(props)=>{
    console.log("update required : ? " + props.updateRequired);

    if (props.updateRequired)
    {
        props.getMyBookings();
    }
        return <div className="container-fluid table-bordered">
            <div className="flex-row">
               Info : All bookings made by you are shown here !
            </div>
            <h2>My bookings</h2>

            {
                !!props.fetching &&
                <h2>Loading</h2>
            }
            {
                !!props.myAppointments && (props.myAppointments.length !==0) &&
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Start DateTime</th>
                        <th>End   DateTime</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        props.myAppointments.map((appointment, index)=>{

                            return   <tr key={index}>
                                <td>{appointment.title}</td>
                                <td>{appointment.dateAndTime}</td>
                                <td>{appointment.endDateAndTime}</td>
                            </tr>

                        })
                    }

                    </tbody>
                </table>
            }
            {
                !props.fetching && !!props.myAppointments
                && props.myAppointments.length ==0 &&
                <h2>No bookings at this time!</h2>
            }
        </div>
};
const mapStateToProps = state => {
    return {...state.appointmentsReducer}
};

const mapDispatchToProps = (dispatch) =>({
    getMyBookings:()=>{dispatch({
        type: GET_MY_APPOINTMENTS,
        payload: service.getMyAppointments
    }) },
    getProfileFromLocalStorage:()=>{dispatch({type : GET_PROFILE_FROM_LOCAL_ST})}

});



export default  connect(mapStateToProps, mapDispatchToProps)(MyBookings);


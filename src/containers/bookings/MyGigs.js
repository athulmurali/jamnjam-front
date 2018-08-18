import ResponsiveTable from 'material-ui-next-responsive-table'
import React from "react";
import {GET_MY_APPOINTMENTS} from "../../redux/Constants/appointments";
import {GET_PROFILE_FROM_LOCAL_ST} from "../../redux/Constants/userRegister";
import {connect} from "react-redux";



import appointmentService from '../../services/api/AppointmentService'


const service = new appointmentService();


const columns = [
    {
        key: 'id',
        label: 'Booking ID',
        primary: true,
    },
    {
        key: 'title',
        label: 'Title',
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

]

// const data = [
//         {
//             bookingId: '1234',
//             title: 'Foo',
//             remarks: 'new remark',
//             startDateTime : '1233',
//             endDateTime  :'1234'
//             // authors: ['Andy'],
//         },
//         {
//             bookingId: '4567',
//             title: 'Bar',
//             remarks : 'remark1',
//             startDateTime : '1234',
//             endDateTime  :'2345'
//             // authors: ['Joe', 'Mike'],
//         }
//     ]
//

const   MyGigs =(props)=>{
    console.log("update required : ? " + props.updateRequired)

    if(!!props.updateRequired)
    {
        props.getMyBookings();
    }

    return(

        <div>
            { !props.fetching && !!props.myAppointments
            && props.myAppointments.length ==0 &&
            <h2>No bookings at this time!</h2>
            }

            <ResponsiveTable
                columns={columns}
                data={props.myAppointments}
            />


        </div>


    )

}



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



export default  connect(mapStateToProps, mapDispatchToProps)(MyGigs);


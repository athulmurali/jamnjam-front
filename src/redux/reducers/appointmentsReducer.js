import {
    CREATE_APPOINTMENT_FULFILLED,
    CREATE_APPOINTMENT_PENDING,
    CREATE_APPOINTMENT_REJECTED,
    DELETE_APPOINTMENT_FULFILLED,
    DELETE_APPOINTMENT_PENDING,
    DELETE_APPOINTMENT_REJECTED,
    GET_MY_APPOINTMENTS_FULFILLED,
    GET_MY_APPOINTMENTS_PENDING,
    GET_MY_APPOINTMENTS_REJECTED,
    SET_APPOINTMENT_START_END_DATE,
    UPDATE_APPOINTMENT_FULFILLED,
    UPDATE_APPOINTMENT_PENDING,
    UPDATE_APPOINTMENT_REJECTED, UPDATE_FIELD_BY_VALUE
} from "../constants/appointments";

const initialState = {
    myAppointments: false,
    fetching : false,
    error : false,
    updateRequired : true,
    showRemarksAsText:true,
    newBooking : {
        dateAndTime: null,
        endDateAndTime : null,
        title : '',
        remarks :'',
        with: '',
    }
};
const appointmentsReducer = (state = initialState, action) => {
    switch (action.type) {



        case DELETE_APPOINTMENT_PENDING:
        case CREATE_APPOINTMENT_PENDING:
        case UPDATE_APPOINTMENT_PENDING:
        case GET_MY_APPOINTMENTS_PENDING:
                return {
                    ...state, fetching:true,error: false
                };



        case UPDATE_APPOINTMENT_FULFILLED:
        case DELETE_APPOINTMENT_FULFILLED:
        case CREATE_APPOINTMENT_FULFILLED:
            return {
                ...state,
                fetching:false,
                error: false,
                updateRequired : true,
                updateSuccess: true,
            };


        case UPDATE_APPOINTMENT_REJECTED:
        case DELETE_APPOINTMENT_REJECTED:
        case CREATE_APPOINTMENT_REJECTED:
        case GET_MY_APPOINTMENTS_REJECTED       :
                return {
                    ...state, fetching:false,
                    error: action.payload.response.data,
                    updateRequired: false
                };



        case  GET_MY_APPOINTMENTS_FULFILLED      :
            return {
                ...state, fetching:false,
                error: false,
                myAppointments : action.payload.data._embedded.appointment,
                updateRequired : false,
            };
        case SET_APPOINTMENT_START_END_DATE : return {
            ...state,
            fetching : false,
            newBooking : {...action.payload}
        };
        case UPDATE_FIELD_BY_VALUE: return{
            ...state,
            ...action.payload
        };

        default :{
            // alert("case not matching! ")
            return state
        }

    }
};
export default appointmentsReducer

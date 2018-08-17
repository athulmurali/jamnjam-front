import axiosInstance from "../tokenedRequest";
import {CREATE_APPOINTMENT, DELETE_APPOINTMENT, GET_MY_APPOINTMENTS} from "../../const/url";


export default  class  AppointmentService{

    createAppointment(appointmentData){
        return axiosInstance.post(CREATE_APPOINTMENT, appointmentData)
    }


    deleteAppointment(appointmentId){
        return axiosInstance.delete(DELETE_APPOINTMENT)
    }



    getMyAppointments(){

        return axiosInstance.get(GET_MY_APPOINTMENTS)
    }


}

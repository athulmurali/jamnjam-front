import axios from 'axios';
import {CREATE_USER_URL, LOGIN_URL} from "../../const/url";

export class UserService{

    createNewUser  =(userData)=>{
        console.log("getUserNameAvailability")

        return axios.post(CREATE_USER_URL, userData)
    }



    login  =(userData)=>{
        console.log("getUserNameAvailability")

        return axios.post(LOGIN_URL, userData)
    }

}


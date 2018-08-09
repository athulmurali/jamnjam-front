import axios from 'axios';
import {CREATE_USER_URL} from "../../const/url";

export class UserService{

    createNewUser  =(userData)=>{
        console.log("getUserNameAvailability")

        return axios.post(CREATE_USER_URL, userData)
    }

}


import axios from 'axios';
import {BASE_URL, EMAIL_AVAILABILITY_URL, USERNAME_AVAILABILITY_URL} from "../../const/url";

export class UserByRole{

    getUserNameAvailability =(userRole, username)=>{
        console.log("getUserNameAvailability")
        const USERNAME_AVAIL_URL = USERNAME_AVAILABILITY_URL(userRole, username)
        return axios.get(USERNAME_AVAIL_URL)

    }


    getEmailIdAvailability =(userRole, emailId)=>{
        console.log("getEmailIdAvailability")
        const USERNAME_AVAIL_URL = EMAIL_AVAILABILITY_URL(userRole, emailId)
        return axios.get(USERNAME_AVAIL_URL)

    }


}


import axios from 'axios'
import {GOOGLE_LOGIN_URL} from "../../const/url";


export default class SocialUsersService {
    googleLoginUser = (googleLoginData) => {
        return axios.post(GOOGLE_LOGIN_URL, googleLoginData)
    };

    createGoogleUser = (role, googleUserData) => {
        return axios.post(GOOGLE_LOGIN_URL,
            {role: role, googleUserData: googleUserData})
    }
}

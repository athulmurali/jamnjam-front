import axiosInstance from "./tokenedRequest";
import {BASE_URL, USER_PROFILE_URL} from "../const/url";


export  default class  UserServiceWithToken{

    getProfile=()=>{
        return axiosInstance.get(USER_PROFILE_URL)
    }
}



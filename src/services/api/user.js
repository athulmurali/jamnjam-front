import axios from 'axios';
import {
    ADD_DEL_MEMBER_URL,
    BASE_URL,
    CREATE_USER_URL, DEL_USER_BY_ROLE_ID_URL, GET_USER_BY_ROLE_ID_URL, LOGIN_URL,
    UPDATE_USER_URL
} from "../../const/url";

export class UserService{

    createNewUser  =(userData)=>{
        console.log("getUserNameAvailability")

        return axios.post(CREATE_USER_URL, userData)
    }

    login  =(userData)=>{
        console.log("login")

        return axios.post(LOGIN_URL, userData)
    }

    getUser  =(role,userId)=>{
        console.log("getUser")

        return axios.get(GET_USER_BY_ROLE_ID_URL(role,userId))
    }

    deleteUser = (role, userId) => {

        console.log("deleting User ")
        console.log(role, userId)


        return axios.delete(DEL_USER_BY_ROLE_ID_URL(role,userId))

    }

    updateUser = (userData)=>{
        return axios.put(UPDATE_USER_URL,userData)

    }


    getArtists =()=>{
        return axios.get(BASE_URL + '/users/artist')
    }


    addMember=(payload)=>{
        return axios.post(  ADD_DEL_MEMBER_URL,payload)
    }


    addMember=(userData)=>{
        return axios.post(ADD_DEL_MEMBER_URL,userData)
    }

    deleteMember=(userData)=>{
        return axios.delete(ADD_DEL_MEMBER_URL,{
            data : userData
        })
    }
}


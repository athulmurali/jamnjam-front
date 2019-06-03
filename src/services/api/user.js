import axios from 'axios';
import {
    ADD_DEL_MEMBER_URL,
    ARTIST_LOOKOUT_URL,
    BASE_URL,
    CREATE_USER_URL,
    DEL_USER_BY_ROLE_ID_URL,
    GET_USER_BY_ROLE_ID_URL,
    GOOGLE_LOGIN_URL,
    LOGIN_URL,
    UPDATE_USER_URL
} from "../../const/url";

export class UserService{

    createNewUser = (userData) => axios.post(CREATE_USER_URL, userData);

    login = (userData) => axios.post(LOGIN_URL, userData);

    googleLoginService = (userData) => axios.post(GOOGLE_LOGIN_URL, userData);
    getUser  =(role,userId)=>{
        console.log("getUser");

        return axios.get(GET_USER_BY_ROLE_ID_URL(role,userId))
    };

    deleteUser = (role, userId) => axios.delete(DEL_USER_BY_ROLE_ID_URL(role, userId));

    updateUser = (userData) => axios.put(UPDATE_USER_URL, userData);


    getArtists = () => axios.get(BASE_URL + '/users/artist');


    addMember = (userData) => axios.post(ADD_DEL_MEMBER_URL, userData);

    deleteMember = (userData) => axios.delete(ADD_DEL_MEMBER_URL, {
            data : userData
    });

    getArtistLookOuts = () => axios.get(ARTIST_LOOKOUT_URL);


    createArtistLookOuts = (payload) => axios.post(ARTIST_LOOKOUT_URL, payload);

    deleteLookOut = (lookOutId) => axios.delete(ARTIST_LOOKOUT_URL + '/' + lookOutId.toString());
}


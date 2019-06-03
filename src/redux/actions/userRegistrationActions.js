import {CREATE_GOOGLE_USER} from "../constants/socialLogin";
import SocialUsersService from "../../services/api/SocialUsersService";

const socialService = new SocialUsersService();

export const createNewGoogleUser = (dispatch, role, googleUserData) => dispatch({
    type: CREATE_GOOGLE_USER,
    payload: socialService.createGoogleUser(role, googleUserData)
});

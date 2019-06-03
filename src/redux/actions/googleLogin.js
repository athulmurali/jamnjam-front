import {SET_GOOGLE_USER_DATA} from "../constants/socialLogin";

export const setGoogleUserData = (dispatch, data) => dispatch({
    type: SET_GOOGLE_USER_DATA,
    payload: {
        googleUserData: data
    }
});

export const clearGoogleUserData = (dispatch) => dispatch({
    type: SET_GOOGLE_USER_DATA,
    payload: {
        googleUserData: false
    }
});

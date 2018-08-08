import {LOG_IN, LOG_OUT} from "../Constants/userAccount";
import {
    UPDATE_CONFIRM_PASSWORD, UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME,
    UPDATE_PASSWORD, UPDATE_USERNAME
} from "../Constants/userRegister";

const initialState = {
    isLoggedIn: false,
    error: false,
    errorMessage: ''

}
const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, )

        case UPDATE_LAST_NAME:
            return Object.assign({}, state, )


        case UPDATE_EMAIL:
            return Object.assign({}, state, )

        case UPDATE_PASSWORD:
            return


        case UPDATE_CONFIRM_PASSWORD:


        case UPDATE_EMAIL:



        case UPDATE_USERNAME:




        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

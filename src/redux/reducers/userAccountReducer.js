import {LOG_IN, LOG_OUT} from "../Constants/userAccount";

const initialState = {
    isLoggedIn: false,
    error: false,
    errorMessage: ''

}
const userAccountReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN:
            return Object.assign({}, state, {isLoggedIn: true})
        case LOG_OUT:
            return Object.assign({}, state, {isLoggedIn: false})

         default:
            return Object.assign({}, state, {error: false})


    }

}

export default userAccountReducer;

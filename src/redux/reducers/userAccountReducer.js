import {CLOSE_SIDE_BAR, LOG_IN, LOG_OUT, OPEN_SIDE_BAR} from "../Constants/userAccount";

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

        case OPEN_SIDE_BAR:
            return {...state,isSideBarOpen : true }

        case CLOSE_SIDE_BAR:
            return {...state,isSideBarOpen : false }

         default:
            return Object.assign({}, state, {error: false})


    }

}

export default userAccountReducer;

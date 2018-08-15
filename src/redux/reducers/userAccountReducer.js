import {
    CLOSE_SIDE_BAR, DELETE_USER, DELETE_USER_FULFILLED, DELETE_USER_PENDING, DELETE_USER_REJECTED, LOG_IN, LOG_OUT,
    OPEN_SIDE_BAR,
    SELECT_USER
} from "../Constants/userAccount";
import {RESET_SELECTED_ROLE} from "../Constants/userRegister";

const initialState = {
    isLoggedIn: false,
    error: false,
    errorMessage: '',
    selectedUser : false

}
const userAccountReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN:
            return Object.assign({}, state, {isLoggedIn: true})
        case LOG_OUT:
        {
            localStorage.clear()
            return Object.assign({}, state, {isLoggedIn: false})

        }


        case OPEN_SIDE_BAR:
            return {...state,isSideBarOpen : true }

        case CLOSE_SIDE_BAR:
            return {...state,isSideBarOpen : false }


        case SELECT_USER:
            return {...state,
                selectedUser : action.payload  }



        case RESET_SELECTED_ROLE:{
            return {
                ...state,
                selectedUser : false
            }
        }



        case DELETE_USER_FULFILLED :
            return {
                ...state, deletedUser : action.payload.data,
                fetching : false,error :false,
            }



        case DELETE_USER_PENDING :
            return {
                ...state, fetching : true,error :false,
            }


        case DELETE_USER_REJECTED :
            return {
                ...state,
                fetching : false,error :action.payload.data,
            }



        default:
            return Object.assign({}, state, {error: false})
    }

}

export default userAccountReducer;

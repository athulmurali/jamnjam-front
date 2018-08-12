import {LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED, UPDATE_LOGIN_FIELD} from "../Constants/userLogin";

const initialState = {
    loginData: {
        username: '',
        password: '',

    },
    fetching : false,
    error : false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {


        case UPDATE_LOGIN_FIELD :
            return {...state,error : false, loginData: {...state.loginData, ...action.payload }}

        case LOGIN_PENDING :
            return {...state, fetching: true, error : false}

        case LOGIN_REJECTED :
            return {...state, fetching:false, error: action.payload}


        case LOGIN_FULFILLED :
            return {...state, profile: action.payload.data.user, fetching :
                    false, error : false}

        default : return state

    }
}
export default loginReducer

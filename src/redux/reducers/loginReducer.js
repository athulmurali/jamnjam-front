import {GOOGLE_LOGIN, LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED, UPDATE_LOGIN_FIELD} from "../constants/userLogin";
import {TOKEN_NAME} from "../../const/url";
import {GET_PROFILE_FULFILLED, GET_PROFILE_PENDING, GET_PROFILE_REJECTED} from "../constants/userRegister";
import {ReduxActionNames} from "../constants/commonUtils";

const initialState = {
    loginData: {
        username: '',
        password: '',

    },
    fetching : false,
    error : false
};


const GOOGLE_LOGIN_NAMES= ReduxActionNames(GOOGLE_LOGIN);
const loginReducer = (state = initialState, action) => {
    switch (action.type) {


        case UPDATE_LOGIN_FIELD :
            return {...state,error : false, loginData: {...state.loginData, ...action.payload }};

        case LOGIN_PENDING :
            return {...state, fetching: true, error : false};

        case LOGIN_REJECTED :
            return {...state, fetching:false, error: action.payload};




        case GET_PROFILE_PENDING :
            return {...state, fetching: true, error : false};

        case GET_PROFILE_REJECTED :
            return {...state, fetching:false, error: action.payload};


        case GET_PROFILE_FULFILLED :
        {

            localStorage.setItem('currentProfile', action.payload.data);

            return {...state,
                currentProfile: action.payload.data,
                fetching : false, error : false,
            }
        }



        case GOOGLE_LOGIN_NAMES.pending :
            return {...state, fetching: true, error : false};

        case GOOGLE_LOGIN_NAMES.rejected :
            return {...state, fetching:false, error: action.payload};


        case LOGIN_FULFILLED:
        case GOOGLE_LOGIN_NAMES.fulfilled :
        {

            localStorage.clear();
            localStorage.setItem(TOKEN_NAME, action.payload.data.token);
            localStorage.setItem('currentId', action.payload.data.user._id);

            localStorage.setItem('myProfile',
                JSON.stringify(action.payload.data.user));


            return {...state,
                profile: action.payload.data.user,
                fetching : false, error : false,
                token : action.payload.data.token

            }
        }


        default : return state

    }
};
export default loginReducer

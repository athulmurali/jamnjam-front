import {ReduxActionNames} from "../constants/commonUtils";
import {CREATE_GOOGLE_USER, GOOGLE_USER_SELECT_ROLE, SET_GOOGLE_USER_DATA} from "../constants/socialLogin";


const initialState = {
    googleUserData  : false,
    fetching        : false,
    error           : false,
    selectedRole    : false,
    isNewUser       : false,
};

const GOOGLE_USER_CREATION = ReduxActionNames(CREATE_GOOGLE_USER);

const  socialLoginReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'a' : return {
            ...state
        };

        case GOOGLE_USER_CREATION.fulfilled : return {...state, error : false};
        case GOOGLE_USER_CREATION.pending  :return {
                ...state,
                fetching : true,
                error : false
            };
        case GOOGLE_USER_CREATION.rejected :{

            if(!action.payload.response){
                return {...state, fetching : false, error : "Network Error ! Cant help it!"}
            }

            if(action.payload.response.status === 204)
                return {
                    ...state,
                    isNewUser : true,
                    fetching: false
            };
            return {...state,
                fetching : false,
                myProfile : action.payload.response.data,
                error : action.payload.response.data
            }
        }

        case GOOGLE_USER_SELECT_ROLE :return {...state, selectedRole: action.payload.selectedRole};

        case SET_GOOGLE_USER_DATA:
            console.log(action.payload.googleUserData);
            return {...state, googleUserData: action.payload.googleUserData};


        default :
            return { ...state
        }

    }
};


export default socialLoginReducer

import {
    CREATE_USER_FULFILLED,
    CREATE_USER_PENDING,
    CREATE_USER_REJECTED,
    REGISTER_USER, RESET_UPDATE_SUCCESS, SET_UPDATE_MODE,
    UPDATE_FIELD,
    UPDATE_ROLE, UPDATE_USER_FULFILLED, UPDATE_USER_PENDING, UPDATE_USER_REJECTED
} from "../Constants/userRegister";
import {UserService} from "../../services/api/user";
import {FILL_USER_DETAILS, SELECT_ROLE, VERIFY_EMAIL} from "../../const/PageState";

const initialState = {
    firstName : '',
    lastName : '',
    emailId : '',
    phone : '',
    username : '',
    password : '',
    role : '',

    updateMode : false,

    nextStep : SELECT_ROLE
}

const createNewUserInServer=(userData)=>{
    const userService = new UserService();
    userService.createNewUser(userData).then(result => console.log(result)).
catch(err => console.log(err))
}


const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {



        case UPDATE_ROLE:return Object.assign({}, state,
            {role : action.payload.role,
                nextStep : FILL_USER_DETAILS} )

        case REGISTER_USER:
            {
                console.log(state.role)
                return Object.assign({}, state,{...action.payload,...{role : state.role}} )
            }


        case UPDATE_FIELD :
        {
            return Object.assign({}, state,{...action.payload} )
        }


        case CREATE_USER_PENDING:{

            return {...state, fetching : true}

        }


        case CREATE_USER_FULFILLED:{

            return {...state, fetching : false,
                error: false,
                data : action.payload.data,
                nextStep : VERIFY_EMAIL
            }


        }


        case CREATE_USER_REJECTED:{
            return {...state, fetching : false,
                error : action.payload.response.data}
        }


        case SET_UPDATE_MODE:{

            if (!!action.payload.selectedUser)
            {
                return {...state, fetching : false,
                    updateMode: action.payload.updateMode,
                    ...action.payload.selectedUser
                }
            }

            else
                return {...state, fetching : false,
                    updateMode: action.payload.updateMode,
                    ...action.payload.selectedUser
                }


        }




        case UPDATE_USER_PENDING:{

            return {...state, fetching : true,error:false}

        }


        case UPDATE_USER_FULFILLED:{

            return {...state, fetching : false,
                error: false,
                data : action.payload.data,
                updateSuccess: true
            }


        }


        case UPDATE_USER_REJECTED:{
            console.log(action.payload)
            return {...state,
                fetching : false,
                error : action.payload.response.data}
        }

        case RESET_UPDATE_SUCCESS : {
            return {
                ...state,
                updateSuccess : false
            }
        }


        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

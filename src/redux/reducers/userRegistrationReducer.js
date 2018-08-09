import {
    UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_ROLE, REGISTER_USER,
    CREATE_USER, UPDATE_FIELD, CREATE_USER_PENDING, CREATE_USER_FULFILLED, CREATE_USER_REJECTED
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



        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

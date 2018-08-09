import {
    UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_ROLE, REGISTER_USER,
    CREATE_USER, UPDATE_FIELD, CREATE_USER_PENDING, CREATE_USER_FULFILLED, CREATE_USER_REJECTED
} from "../Constants/userRegister";
import {UserService} from "../../services/api/user";

const initialState = {
    firstName : '',
    lastName : '',
    emailId : '',
    phone : '',
    username : '',
    password : '',
    role : '',
}

const createNewUserInServer=(userData)=>{
    const userService = new UserService();
    userService.createNewUser(userData).then(result => console.log(result)).
catch(err => console.log(err))
}


const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {firstName : action.payload.firstName})

        case UPDATE_LAST_NAME:
            return Object.assign({}, state, )


        case UPDATE_EMAIL:
            return Object.assign({}, state, )



        case UPDATE_ROLE:return Object.assign({}, state,{role : action.payload.role} )



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

            return {...state, fetching : false, error: false, error : false,data : action.payload}


        }


        case CREATE_USER_REJECTED:{
            return {...state, fetching : false,  error : action.payload}
        }



        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

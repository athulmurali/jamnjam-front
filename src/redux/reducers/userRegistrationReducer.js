import {UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_ROLE, REGISTER_USER} from "../Constants/userRegister";

const initialState = {
    firstName : '',
    lastName : '',
    emailId : '',
    phone : '',
    username : '',
    password : '',
    role : '',
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
        //
        // case UPDATE_PASSWORD:
        //     return
        //
        //
        // case UPDATE_CONFIRM_PASSWORD:
        //
        //
        // case UPDATE_EMAIL:
        //
        //
        //
        // case UPDATE_USERNAME:
        //



        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

import {
    CREATE_USER_FULFILLED,
    CREATE_USER_PENDING,
    CREATE_USER_REJECTED, GET_PROFILE_FROM_LOCAL_ST,
    REGISTER_USER, RESET_ADMIN_SCREEN, RESET_SELECTED_ROLE, RESET_UPDATE_SUCCESS, SET_UPDATE_MODE,
    UPDATE_FIELD,
    UPDATE_ROLE, UPDATE_USER_FULFILLED, UPDATE_USER_PENDING, UPDATE_USER_REJECTED
} from "../Constants/userRegister";
import {FILL_USER_DETAILS, SELECT_ROLE, VERIFY_EMAIL} from "../../const/PageState";
import {SELECT_USER} from "../Constants/userAccount";

const initialState = {
    firstName : '',
    lastName : '',
    emailId : '',
    phone : '',
    username : '',
    password : '',
    role : '',
    title : '',
    zip : '',


    toExtract : false,

    updateMode : false,

    nextStep : SELECT_ROLE
}



const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {



        case UPDATE_ROLE:return Object.assign({}, state,
            {role : action.payload.role,
                nextStep : FILL_USER_DETAILS} )

        case REGISTER_USER:
            {
                console.log(state.role)
                return Object.assign({},
                    state,{...action.payload,
                        ...{role : state.role}} )
            }


        case UPDATE_FIELD :
        {
            return Object.assign({}, state,{...action.payload, toExtract: false} )
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

        case SELECT_USER:
            return {...state, toExtract : true}



        case SET_UPDATE_MODE: {

            let selectedUser = false;
            let updateMode = false;
            let toExtract = false

            if (!!action.payload.selectedUser) {
                selectedUser = action.payload.selectedUser
            }

            if (!!action.payload.updateMode) {
                updateMode = true
            }

            if (updateMode) {
                toExtract = true
            }


            return {
                ...state,
                ...selectedUser,
                selectedUser: selectedUser,
                updateMode: updateMode,
                toExtract: toExtract,
                nextStep: FILL_USER_DETAILS


            }

        }


        case UPDATE_USER_PENDING:{

            return {...state, fetching : true,error:false}

        }


        case UPDATE_USER_FULFILLED:{
            console.log("printing received data after update")
            console.log(action.payload)

            return {...state, fetching : false,
                error: false,
                data : action.payload.data,
                updateSuccess: true,
                selectedRole : false
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

        case RESET_SELECTED_ROLE : {
            return {
                ...state,
                selectedRole : false,
                updateMode : false,
                role : false,
                selectedUser: false,
                nextStep: SELECT_ROLE,
                firstName : '',
                lastName : '',
                emailId : '',
                phone : '',
                username : '',
                password : '',
                role : '',
                title : '',
                zip : '',



            }
        }




        case RESET_ADMIN_SCREEN : {
            return {
                ...state,
                selectedRole : false,
                updateMode : false,
                role : false,
                selectedUser: false,
            }
        }

        case GET_PROFILE_FROM_LOCAL_ST :{

            const myProfile = JSON.parse(localStorage.getItem('myProfile'))


            alert("myProfile : " + myProfile.toString())
            return{
                ...state, ...myProfile, updateMode : true
            }
        }



        default:
            return Object.assign({}, state, {error: false})


    }

}

export default userRegistrationReducer;

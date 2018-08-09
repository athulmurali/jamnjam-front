import {UPDATE_ROLE} from "../Constants/userRegister";

export const UPDATE_ROLE_ACT =(dispatch,role )=>{
    console.log(arguments)
    dispatch({
        type: UPDATE_ROLE,
        role : role,
        payload : {
            role :  role
        }})
}

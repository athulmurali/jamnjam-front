import {LOG_IN, LOG_OUT} from '../constants/userAccount';
import {CREATE_USER} from "../constants/userRegister";

export const LOG_IN_ACT     = (dispatch, )=>{
    dispatch({
        type: LOG_IN,
        payload : {
        }
    })};


export const LOG_OUT_ACT    = (dispatch )=>{
        dispatch({
            type: LOG_OUT,
            payload : {
            }})
    };


export const create_user_dispatch = (dispatch, payload) => dispatch({
    type: CREATE_USER,
    payload: payload
});

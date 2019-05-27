import  {LOG_IN,LOG_OUT} from '../constants/userAccount';

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

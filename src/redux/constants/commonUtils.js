export const _PENDING = "_PENDING";
export const _REJECTED= "_REJECTED";
export const _FULFILLED = "_FULFILLED";


export const ReduxActionNames=(PROMISE_ACTION_TYPE_NAME)=>{
    return {
        pending : PROMISE_ACTION_TYPE_NAME      + _PENDING,
        rejected : PROMISE_ACTION_TYPE_NAME     + _REJECTED,
        fulfilled : PROMISE_ACTION_TYPE_NAME    + _FULFILLED
    }
};

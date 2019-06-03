import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import userAccountReducer from './userAccountReducer';
import userRegistrationReducer from "./userRegistrationReducer";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";
import appointmentsReducer from "./appointmentsReducer";
import socialLoginReducer from "./socialLoginReducer";

const combinedReducers = combineReducers({
    userAccountReducer, userRegistrationReducer,
    loginReducer, searchReducer, appointmentsReducer, socialLoginReducer
});
const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(combinedReducers, middleware);

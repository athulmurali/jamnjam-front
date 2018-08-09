import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RoutedApp from "./RoutedApp";

import {combineReducers, createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userAccountReducer from './redux/reducers/userAccountReducer';
import { LOG_IN, LOG_OUT } from './redux/Constants/userAccount';
import userRegistrationReducer from "./redux/reducers/userRegistrationReducer";

const combinedReducers = combineReducers({userAccountReducer, userRegistrationReducer})
const middlewares = applyMiddleware(  thunk ,logger)
const store = createStore(combinedReducers,middlewares)

ReactDOM.render(
    <Provider store ={store}>
        <RoutedApp />
    </Provider>


    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RoutedApp from "./RoutedApp";

import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import userAccountReducer from './redux/reducers/userAccountReducer';
import userRegistrationReducer from "./redux/reducers/userRegistrationReducer";
import loginReducer from "./redux/reducers/loginReducer";
import {searchReducer} from "./redux/reducers/searchReducer";

const combinedReducers = combineReducers({userAccountReducer, userRegistrationReducer,
    loginReducer, searchReducer})
const middlewares = applyMiddleware(  promise(), thunk ,logger)
const store = createStore(combinedReducers,middlewares)

ReactDOM.render(
    <Provider store ={store}>
        <RoutedApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

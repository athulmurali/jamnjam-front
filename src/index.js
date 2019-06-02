import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RoutedApp from "./RoutedApp";


import {Provider} from "react-redux"

import 'react-dates/initialize';
import store from './redux/reducers'

ReactDOM.render(
    <Provider store={store}>
        <RoutedApp/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

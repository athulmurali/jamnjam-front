import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RoutedApp from "./RoutedApp";

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import './css/weather-icons.min.css';
import App from './App';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);

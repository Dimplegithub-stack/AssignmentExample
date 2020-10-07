import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

//import { BrowserRouter as Router } from 'react-router-dom';
//import { Routes } from './routes'; // where we are going to specify our routes

ReactDOM.render(
<Provider store={store}>
 <App/> </Provider>,
  document.getElementById('root')
);



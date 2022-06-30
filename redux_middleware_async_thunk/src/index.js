import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { counterReducer } from './reducer';
import { Provider } from 'react-redux';

const myLogger = (store) => {
    return next => {
        return action => {
            console.log('middleware ran');
            return next(action);
        }
    }
}

const store = createStore(counterReducer, applyMiddleware(myLogger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
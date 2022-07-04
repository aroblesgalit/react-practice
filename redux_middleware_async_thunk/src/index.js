import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { counterReducer } from './reducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const myLogger = store => next => action => {
    return next(action);
}

// const myLogger = (store) => {
//     return next => {
//         return action => {
//             console.log('middleware ran');
//             return next(action);
//         }
//     }
// }

const secondMiddlware = store => next => action => {
    return next(action);
}

const capAtTen = store => next => action => {
    if(store.getState() >= 10) {
        return next({
            type: 'DECREMENT'
        });
    }
    next(action);
}

const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddlware, capAtTen, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
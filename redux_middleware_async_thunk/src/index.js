import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { counterReducer } from './reducer';

const store = createStore(counterReducer);

ReactDOM.render(<App />, document.getElementById('root'));
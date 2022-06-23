import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { bankingReducer } from './reducers/bankingReducers'

const store = createStore(bankingReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
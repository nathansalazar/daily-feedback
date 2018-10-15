import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'FEELING':
            state = {...state, feeling: action.payload};
            return state;
        case 'UNDERSTANDING':
            state = {...state, understanding: action.payload};
            return state;
        case 'SUPPORTED':
            state = {...state, supported: action.payload};
            return state;
        case 'COMMENTS':
            state = {...state, comments: action.payload};
            return state;
        case 'EMPTY':
            return {};
        default:
            return state;
    }
}

const allReducers = combineReducers({ feedback });

const storeInstance = createStore(allReducers, applyMiddleware(logger));

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
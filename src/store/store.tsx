import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// for typescript -----
// type WindowWithDevTools = Window & {
//  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
// }

// const isReduxDevtoolsExtenstionExist = 
// (arg: Window | WindowWithDevTools): 
//   arg is WindowWithDevTools  => {
//     return  '__REDUX_DEVTOOLS_EXTENSION__' in arg;
// }

// -----

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
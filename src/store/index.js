import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {STATE_NAME} from '../config.js';

export default function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, 
    composeEnhancers ( 
    	applyMiddleware(
			thunkMiddleware,
			promiseMiddleware()
		)
	));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }
	store.subscribe(()=>{
		localStorage.setItem(STATE_NAME, JSON.stringify(store.getState()));
	})
    return store;
}
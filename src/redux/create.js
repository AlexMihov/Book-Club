/* global __DEVELOPMENT__, __CLIENT__, __DEVTOOLS__ */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
// import createMiddleware from './clientMiddleware';
// import * as reducers from '../reducers/index';
// const reducer = combineReducers(reducers);
const { devTools, persistState } = require('redux-devtools');
//
//
//

let finalCreateStore = compose(
	applyMiddleware(promiseMiddleware),
	devTools(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
	createStore
);

export default finalCreateStore;

// export default function(client, data) {
// 	const middleware = createMiddleware(client);
// 	let finalCreateStore;
// 	if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
// 		const { devTools, persistState } = require('redux-devtools');
// 		finalCreateStore = compose(
// 			applyMiddleware(middleware),
// 			devTools(),
// 			persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
// 			createStore
// 		);
// 	} else {
// 		finalCreateStore = applyMiddleware(middleware)(createStore);
// 	}
// 	return finalCreateStore(reducer, data);
// }


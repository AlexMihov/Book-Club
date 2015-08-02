import { combineReducers } from 'redux';
import * as reducers from '../reducers';
import finalCreateStore from '../redux/create';

var log = require('debug')('bookclub:store');
const combinedReducer = combineReducers(reducers);
const store = finalCreateStore(combinedReducer);

export default store;

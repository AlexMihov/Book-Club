import { BOOK_ADD, BOOK_REMOVE } from '../actions/action-types';
import { handleActions } from 'redux-actions';
import _ from 'lodash';

var log = require('debug')('bookclub:reducer:books');

const initialState =  {
	list: [
		{
			id: 1,
			title: 'Bambi'
		}, {
			id: 2,
			title: 'Gulivers Reisen'
		}, {
			id: 3,
			title: '1984'
		}
	]
};

const books = function bookActionHandler (state = initialState, action) {
	log('bookActionHandler called', state, action);
	switch (action) {
		case BOOK_ADD:
			return {
				...state,
				list: state.list.push(action.payload)
			};

		case BOOK_REMOVE:
			return {
				...state,
				list: _.reject(state.list, function(book) { return book.id === action.payload.id; })
			};

		default:
			return state;
	}
};

export default books;

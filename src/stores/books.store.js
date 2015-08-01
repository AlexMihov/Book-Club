import { createStore } from 'redux';
import books from '../reducers/books.reducer';
import finalCreateStore from '../redux/create';
const bookStore = finalCreateStore(books);

export default bookStore;

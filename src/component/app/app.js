import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Booklist from '../booklist/booklist';

var log = require('debug')('bookclub:App');

const styles = require('./app.scss');

@connect(state => ({
  books: state.books
}))
class App extends Component {
	static propTypes = {

	}

	render() {
		log('render', this.props);
    	const { books } = this.props;
		return (
			<div>
				<div className="mod_app">Test</div>
				<Booklist list={books.list}/>
	        </div>
		);
	}
}

export default App;

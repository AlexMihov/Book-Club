import React, {Component, PropTypes} from 'react';

var log = require('debug')('bookclub:booklist');

const styles = require('./booklist.scss');

class Booklist extends Component {
	static propTypes = {
		books: PropTypes.array
	}

	render() {
		log('render');
		return (
			<div className="mod_booklist">
				<ul>
					{this.props.books.map((o, i) => <li>{o} {i}</li>)}
				</ul>
			</div>

		);
	}
}

export default Booklist;

import React, {Component, PropTypes} from 'react';

var log = require('debug')('bookclub:booklist');

const styles = require('./booklist.scss');

class Booklist extends Component {
	static propTypes = {
		list: PropTypes.array
	}

	render() {
		log('render');
		return (
			<div className="mod_booklist">
				<ul>
					{this.props.list.map((o, i) => <li key={o.id}>{o} {i}</li>)}
				</ul>
			</div>

		);
	}
}

export default Booklist;

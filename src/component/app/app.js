import React, {Component, PropTypes} from 'react';

var log = require('debug')('bookclub:App');

const styles = require('./app.scss');

class App extends Component {
	static propTypes = {

	}

	render() {
		log('render');
		return (
			<div>
				<div className="mod_app">Test</div>
	        </div>
		);
	}
}

export default App;

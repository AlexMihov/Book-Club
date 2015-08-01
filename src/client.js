import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import App from './component/app/app';

import bookStore from './stores/books.store';

var log = require('debug')('bookclub:client');

log("bookStore.getState()", bookStore.getState())

const dest = document.getElementById('app');

log('Rendering App ... into', dest);
React.render((<div>

	<Provider store={bookStore}>
		{() => (<App />)}
	</Provider>
			<DebugPanel top right bottom key="debugPanel">
				<DevTools store={bookStore} monitor={LogMonitor}/>
			</DebugPanel>
		</div>)
, dest);

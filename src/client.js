import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import App from './component/app/app';

import store from './store/store';

var log = require('debug')('bookclub:client');

log('store', store);
log('store.getState()', store.getState())

const dest = document.getElementById('app');

log('Rendering App ... into', dest);
React.render((
	<div>
		<Provider store={store}>
			{() => (<App />)}
		</Provider>
		<DebugPanel top right bottom key="debugPanel">
			<DevTools store={store} monitor={LogMonitor}/>
		</DebugPanel>
	</div>)
, dest);

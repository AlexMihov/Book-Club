import React from 'react';
import App from './component/app/app';

var log = require('debug')('bookclub:client');

const dest = document.getElementById('app');

log('Rendering App ... into', dest);
React.render(<App />, dest);

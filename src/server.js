import express from 'express';
import path from 'path';

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('static'));

let webpackStats;
if (!__DEVELOPMENT__) {
	webpackStats = require('../webpack-stats.json');
}

app.get('/', function (req, res) {
	if (__DEVELOPMENT__) {
		webpackStats = require('../webpack-stats.json');
		// Do not cache webpack stats: the script file would change since
		// hot module replacement is enabled in the development env
		delete require.cache[require.resolve('../webpack-stats.json')];
	}
	res.render('index', { script_source: webpackStats.script });
});

app.listen(3000);

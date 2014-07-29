var express = require('express');
	path = require('path'),
	bodyParser = require('body-parser'),

	app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	res.render('index');
});

module.exports = app;
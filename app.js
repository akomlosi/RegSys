var express = require('express');
	path = require('path'),
	bodyParser = require('body-parser'),

	Registration = require('./controllers/registration'),
	registration = new Registration(),

	app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	res.render('index');
});

app.post('/register_with_form', registration.registerWithForm );

module.exports = app;
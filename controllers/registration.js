var _ = require('underscore');

var Registration = function( options ) {
	if (_.isUndefined( options ) || _.isUndefined(options.storage)) {
		throw new Error('Must have a storage');
	}
	this.storage = options.storage;
};

Registration.prototype.register = function( registrationType, userData ) {
	try {
		var InterpreterModul = require('./interpreters/' + registrationType);
	}
	catch(e) {
		throw e;
	}

	var interpreterModul = new InterpreterModul(),
		convertedData = interpreterModul.getConvertedData( userData );

	convertedData.api = _.extend(convertedData.api, {
		type: registrationType
	});

	if ( this.isUserExists( convertedData ) ) {
		throw new Error('User already exists');
	}
	this.save( convertedData );
};

Registration.prototype.isUserExists = function( userData ) {
	return !this.storage.getUsers( userData.id, userData.email );
};

Registration.prototype.save = function( userData ) {
	this.storage.save( userData );
};

//Registration.prototype.registerWithForm = function(req, res) {
//	var userData = req.body.params;
//	this.register( 'form', userData );
//};

module.exports = Registration;
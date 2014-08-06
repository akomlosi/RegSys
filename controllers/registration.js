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
	this.save( convertedData );
};

Registration.prototype.save = function( userData ) {
	this.storage.save( userData );
};

//Registration.prototype.registerWithForm = function(req, res) {
//	var userData = req.body.params;
//	this.register( 'form', userData );
//};

module.exports = Registration;
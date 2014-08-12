var util = require('util'),

	BaseInterpreter = require('./base');

var FacebookInterpreter = function() {};

util.inherits( FacebookInterpreter, BaseInterpreter );

FacebookInterpreter.prototype.dataRequirements = {
	facebook_id: { // jshint ignore:line
		required: true
	}
};

FacebookInterpreter.prototype.getConvertedData = function( registrationData ) {
	this.validateData( registrationData );

	return {
		api: {
			id: registrationData.facebook_id // jshint ignore:line
		}
	};
};

module.exports = FacebookInterpreter;
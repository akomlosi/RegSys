var util = require('util'),

	BaseInterpreter = require('./base');

var FacebookInterpreter = function FacebookInterpreter() {};

util.inherits( FacebookInterpreter, BaseInterpreter );

FacebookInterpreter.prototype.dataRequirements = {
	facebook_id: {
		required: true
	}
};

FacebookInterpreter.prototype.getConvertedData = function( registrationData ) {
	this.validateData( registrationData );

	return {
		api: {
			id: registrationData.facebook_id
		}
	};
};

module.exports = FacebookInterpreter;
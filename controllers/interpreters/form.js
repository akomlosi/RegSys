var _ = require('underscore'),
	util = require('util'),

	BaseInterpreter = require('./base');

var FormInterpreter = function() {};

util.inherits( FormInterpreter, BaseInterpreter );

FormInterpreter.prototype.dataRequirements = {
	email: {
		required: true,
		regexp: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	},
	password: {
		required: true,
		regexp: /^[a-zA-Z0-9]{8,}$/
	},
	nickname: {
		required: false
	}
};

FormInterpreter.prototype.getConvertedData = function( registrationData ) {
	this.validateData( registrationData );

	return {
		email: registrationData.email,
		password: registrationData.password,
		api: {
			id: null
		}
	};
};

module.exports = FormInterpreter;
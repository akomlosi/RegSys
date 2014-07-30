var _ = require('underscore');

var FormInterpreter = function FormInterpreter() {};

FormInterpreter.prototype.getConvertedData = function( data ) {
	if ( _.isUndefined( data ) || _.isUndefined(data.email)) {
		throw new Error('Missing required parameter email');
	}

	if ( _.isUndefined(data.password)) {
		throw new Error('Missing required parameter password');
	}

	return {
		email: data.email,
		password: data.password,
		api: {
			id: null
		}
	};
};

FormInterpreter.prototype.dataRequirements = {
	email: {
		required: true,
		regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	},
	password: {
		required: true,
		regexp: /^[a-zA-Z0-9]{8,}$/
	}
};

module.exports = FormInterpreter;
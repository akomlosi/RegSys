var _ = require('underscore');

var FormInterpreter = function FormInterpreter() {};

FormInterpreter.prototype.getConvertedData = function( data ) {
	if ( _.isUndefined( data ) || _.isUndefined(data.email)) {
		throw new Error('Missing required parameter email');
	}

	if ( _.isUndefined( data ) || _.isUndefined(data.password)) {
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

module.exports = FormInterpreter;
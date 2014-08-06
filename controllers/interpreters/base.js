var _ = require('underscore');

var BaseInterpreter = function() {};

BaseInterpreter.prototype.validateData = function( registrationData ) {
	if ( _.isUndefined( registrationData ) ) {
		throw new Error('Missing registration data');
	}

	_.forEach( this.dataRequirements, function( field, fieldName ) {
		if ( field.required &&
			( _.isUndefined( registrationData[fieldName] ) || registrationData[fieldName] === '' ) )
		{
			throw new Error('Missing required parameter ' + fieldName);
		}

		if ( !field.required &&
			( _.isUndefined( registrationData[fieldName] ) || registrationData[fieldName] === '' ) )
		{
			return;
		}

		if ( field.regexp && !field.regexp.test( registrationData[fieldName] ) ) {
			throw new Error('Invalid field ' + fieldName);
		}
	}, this );
};

module.exports = BaseInterpreter;
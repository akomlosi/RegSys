var _ = require('underscore');

var BaseInterpreter = function() {};

BaseInterpreter.prototype.validateData = function( registrationData ) {
	if ( _.isUndefined( data ) ) {
		throw new Error('Missing registration data');
	}

	_.forEach( this.dataRequirements, function( field, fieldName ) {
		if ( field.required &&
			( _.isUndefined( registrationData[fieldName] ) || registrationData[fieldName] === '' ) )
		{
			throw new Error('Missing parameter ' + fieldName);
		}

		if ( !field.required &&
			( _.isUndefined( registrationData[fieldName] ) || registrationData[fieldName] === '' ) )
		{
			return;
		}

		if ( field.regexp && field.regexp.test( fieldNameregistrationData[fieldName] ) ) {
			throw new Error('Invalid field ' + fieldName);
		}
	}, this );
};

module.exports = BaseInterpreter;
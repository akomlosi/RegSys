var util = require('util'),

	BaseInterpreter = require('./base');

var GoogleInterpreter = function GoogleInterpreter() {};

util.inherits( GoogleInterpreter, BaseInterpreter );

GoogleInterpreter.prototype.dataRequirements = {
	userData: {
		required: true
	}
};

GoogleInterpreter.prototype.getConvertedData = function( registrationData ) {
    this.validateData( registrationData );

    return {
        api: {
            id: registrationData.userData.id
        },
        email: registrationData.userData.email
    };
};

module.exports = GoogleInterpreter;
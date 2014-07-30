var _ = require('underscore');

var testData = {
	validFacebookData: {
		facebook_id: '1234',
		valami: 'masik valami'
	},

	validFormData: {
		email: 'almafa@belmafa.com',
		password: 'belmafa'
	},

    validGoogleData: {
        userData: {
            id: '123',
            email: 'almafa@belmafa.com'
        }
    }
};

module.exports = function( testObject) {
	_.forEach(testData, function(value, key) {
		this[key] = value;
	},testObject);
};
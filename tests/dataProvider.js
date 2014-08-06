var _ = require('underscore');

var dataProvider = function( testObject) {
	var testData = {
		validFacebookData: {
			facebook_id: '1234',
			valami: 'masik valami'
		},

		validFormData: {
			email: 'almafa@belmafa.com',
			password: 'belmafa123'
		},

		validGoogleData: {
			userData: {
				id: '123',
				email: 'almafa@belmafa.com'
			}
		}
	};

	_.forEach(testData, function(value, key) {
		this[key] = value;
	},testObject);
};

module.exports = dataProvider;

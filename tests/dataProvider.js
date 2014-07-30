var _ = require('underscore');

var testData = {
	validFacebookData: {
		facebook_id: '1234',
		valami: 'masik valami'
	},

	validFormData: {
		email: 'almafa@belmafa.com',
		password: 'belmafa'
	}
};

module.exports = function( testObject) {
	_.forEach(testData, function(value, key) {
		this[key] = value;
	},testObject);
};
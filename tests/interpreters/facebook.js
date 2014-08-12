var should = require('should'), // jshint ignore:line
	_ = require('underscore'),
	dataProvider = require('../dataProvider'),
	FacebookInterpreter = require('../../controllers/interpreters/facebook');

suite('test Facebook Interpreter', function() {
	setup(function () {
		dataProvider(this);

		this.facebookInterpreter = new FacebookInterpreter();
	});

	test('should have registration data', function() {
		_.bind(function() {
			this.facebookInterpreter.getConvertedData();
		},this).should.throwError('Missing registration data');
	});

	_.each([ 'facebook_id' ],function( fieldName ) {
		test('should have a ' + fieldName, function () {
			_.bind(function () {
				var formData = this.validFacebookData;
				delete formData[fieldName];

				this.facebookInterpreter.getConvertedData(formData);
			}, this).should.throwError('Missing required parameter ' + fieldName);
		});
	}, this);

	test('should get correct data', function() {
		var convertedData = this.facebookInterpreter.getConvertedData( this.validFacebookData );
		convertedData.api.id.should.be.exactly( this.validFacebookData.facebook_id ); // jshint ignore:line
	});
});
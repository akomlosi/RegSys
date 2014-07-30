var should = require('should'),
	_ = require('underscore'),
	dataProvider = require('../dataProvider'),
	FacebookInterpreter = require('../../controllers/interpreters/facebook');

suite('test Facebook Interpreter', function() {
	setup(function () {
		dataProvider(this);

		this.facebookInterpreter = new FacebookInterpreter();
	});

	test('should have be an id', function() {
		_.bind(function() {
			this.facebookInterpreter.getConvertedData();
		}, this).should.throw(new Error('Missing required parameter facebook_id'));
	});

	test('should get correct data', function() {
		var convertedData = this.facebookInterpreter.getConvertedData( this.validFacebookData );
		convertedData.api.id.should.be.exactly( this.validFacebookData.facebook_id );
	});
});
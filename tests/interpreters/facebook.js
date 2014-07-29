var should = require('should'),
	_ = require('underscore'),
	FacebookInterpreter = require('../../controllers/interpreters/facebook');

suite('test Facebook Interpreter', function() {
	setup(function () {
		this.validFacebookData = {
			id: '1234',
			valami: 'masik valami'
		};

		this.facebookInterpreter = new FacebookInterpreter();
	});

	test('should have be an id', function() {
		(function() {
			this.facebookInterpreter.getConvertedData();
		}).should.throw(new Error('Missing required parameter id'));
	});

	test('should get correct data', function() {
		var convertedData = this.facebookInterpreter.getConvertedData( this.validFacebookData );
		convertedData.id.should.be.exactly( this.validFacebookData.id );
	});
});
var should = require('should'),
	_ = require('underscore'),
	dataProvider = require('../dataProvider'),
	FormInterpreter = require('../../controllers/interpreters/form');

suite('test Form Interpreter', function() {
	setup(function () {
		dataProvider(this);

		this.formInterpreter = new FormInterpreter();
	});

	test('should have an email', function() {
		_.bind(function() {
			this.formInterpreter.getConvertedData();
		},this).should.throwError('Missing required parameter email');
	});

	test('should have a password', function() {
		_.bind(function() {
			var formData = this.validFormData;
			delete formData.password;

			this.formInterpreter.getConvertedData( formData );
		},this).should.throwError('Missing required parameter password');
	});

	test('should get correct data', function() {
		var convertedData = this.formInterpreter.getConvertedData( this.validFormData );
		convertedData.email.should.be.exactly( this.validFormData.email );
		convertedData.password.should.be.exactly( this.validFormData.password );
		(convertedData.api.id === null).should.be.true;
	});
});
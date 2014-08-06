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
		},this).should.throwError('Missing registration data');
	});


	_.each([ 'email', 'password' ],function( fieldName ) {
		test('should have a ' + fieldName, function () {
			_.bind(function () {
				var formData = this.validFormData;
				delete formData[fieldName];

				this.formInterpreter.getConvertedData(formData);
			}, this).should.throwError('Missing required parameter ' + fieldName);
		});
	}, this);

	_.each(
		{
			email: 'x',
			password: 'alma'
		},
		function( fieldValue, fieldName ) {
			test('should field ' + fieldName + ' be invalid', function () {
				_.bind(function () {
					var formData = this.validFormData;
					formData[fieldName] = fieldValue;

					this.formInterpreter.getConvertedData(formData);
				}, this).should.throwError('Invalid field ' + fieldName);
			});
		}, this
	);

	test('should get correct data', function() {
		var convertedData = this.formInterpreter.getConvertedData( this.validFormData );
		convertedData.email.should.be.exactly( this.validFormData.email );
		convertedData.password.should.be.exactly( this.validFormData.password );
		(convertedData.api.id === null).should.be.true;
	});
});
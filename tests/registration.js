var should = require('should'),
	_ = require('underscore'),
	Registration = require('../controllers/registration');

suite('test Registration', function() {
	setup(function() {
		this.validUserData = {
			username: 'almafa',
			password: 'belmafa'
		};

		this.storage = {};
		this.registration = new Registration({
			storage: this.storage
		});
	});

	test('registration must have a storage', function() {
		(function() {
			new Registration();
		}).should.throw();
	});

	test('registration save user data', function() {
		this.storage.save = _.bind(function( userData ) {
			should(userData.username).eql( this.validUserData.username );
			should(userData.password).eql( this.validUserData.password );
		},this);
		this.registration.register( this.validUserData );
	});
});
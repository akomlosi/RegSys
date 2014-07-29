var should = require('should'),
	_ = require('underscore'),
	Registration = require('../controllers/registration');

suite('test Registration', function() {
	setup(function() {
		this.validUserData = {
			email: 'almafa@belmafa.com',
			password: 'belmafa'
		};

		this.validFacebookUserData = {
			email: 'almafa@belmafa.com',
			id: 'almafa',
			profile_picture: 'nemtudom.jpeg'
		};

		this.storage = {};
		this.registration = new Registration({
			storage: this.storage
		});
	});

	test('registration must have a storage', function() {
		(function() {
			new Registration();
		}).should.throw(new Error('Must have a storage'));
	});

	test('registration save user data', function() {
		this.storage.save = _.bind(function( userData ) {
			should(userData.email).eql( this.validUserData.email );
			should(userData.password).eql( this.validUserData.password );
		},this);
		this.registration.register( this.validUserData );
	});

	test('registration should register from facebook', function() {
		this.storage.save = _.bind(function( userData ) {
			should(userData.email).eql( this.validUserData.email );
			should(userData.api.id).eql( this.validUserData.id );
			should(userData.api.type).eql('facebook');
		},this);
		this.registration.register( this.validUserData );
	});
});
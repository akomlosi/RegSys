var should = require('should'),
	_ = require('underscore'),
	dataProvider = require('./dataProvider'),
	Registration = require('../controllers/registration');

suite('test Registration', function() {
	setup(function() {
		dataProvider(this);

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
			should(userData.email).eql( this.validFormData.email );
			should(userData.password).eql( this.validFormData.password );
		},this);
		this.registration.register( 'form', this.validFormData );
	});

	test('registration should register from facebook', function() {
		this.storage.save = _.bind(function( userData ) {
			should(userData.api.id).eql( this.validFacebookData.facebook_id );
			should(userData.api.type).eql('facebook');
		},this);
		this.registration.register( 'facebook', this.validFacebookData );
	});
});
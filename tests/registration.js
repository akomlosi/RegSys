var should = require('should'),
	_ = require('underscore'),
	dataProvider = require('./dataProvider'),
	Registration = require('../controllers/registration');

suite('test Registration', function() {
	setup(function() {
		dataProvider(this);

		this.storage = {
			users: [],
			save: function( userData ) {
				this.users.push( userData );
			},
			getUsers: function( id, email ) {
				for(var i = 0; i < this.users.length; i++) {
					if ( this.users[i].api.id === id || this.users[i].email === email ) {
						return this.users[i];
					}
				}
				return null;
			}
		};
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

	test('registration should register from google', function() {
		this.storage.save = _.bind(function( userData ) {
			should(userData.api.id).eql( this.validGoogleData.userData.id );
			should(userData.api.type).eql('google');
		},this);
		this.registration.register( 'google', this.validGoogleData );
	});

	test('should not registered the same user', function() {
		this.registration.register( 'form', this.validFormData );
		(_.bind(function() {
			this.registration.register( 'form', this.validFormData );
		},this)).should.throw(new Error('User already exists'));
	});
});
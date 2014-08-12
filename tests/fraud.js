var chai = require('chai'),
	sinonChai = require('sinon-chai'),
	assert = chai.assert,
	_ = require('underscore'),

	Fraud = require('../controllers/fraud');

chai.use(sinonChai);

suite('test Fraud', function() {
	setup(function() {
		this.storage = {
			getRegistrations: function() {
				return this.registrationData;
			},
			registrationData: []
		};

		this.fraud = new Fraud({
			storage: this.storage
		});
	});

	test('registration must have a storage', function() {

		assert.throw(function() {
			this.fraud = new Fraud();
		}, 'Must have a storage');
	});

	test('should get fraud state', function() {
		assert.strictEqual( this.fraud.isNeedFraud( '192.168.0.1' ), false);
	});

	test('should check same ip', function() {
		var exampleData = {
				ip: '192.168.0.1',
				range: '192.168.0.0',
				country: 'HU'
			},
			IP_LIMIT = this.fraud.IP_LIMIT;

		for( var i = 0; i <= IP_LIMIT; i++) {
			if ( i === IP_LIMIT ) {
				assert.strictEqual( this.fraud.isNeedFraud( exampleData ), true );
			}
			else {
				assert.strictEqual( this.fraud.isNeedFraud( exampleData ), false );
			}
			this.storage.registrationData.push(exampleData);
		}
		assert.strictEqual( this.fraud.isNeedFraud( exampleData ), true );

		assert.strictEqual( this.fraud.isNeedFraud( { ip: '192.168.0.2'} ), false );
	});

	test('should check same range', function() {
		var exampleData = {
				ip: '192.168.0.',
				range: '5',
				country: 'HU'
			},
			RANGE_LIMIT = this.fraud.RANGE_LIMIT;

		for( var i = 0; i <= RANGE_LIMIT; i++) {
			var data = _.extend({}, exampleData, {
				ip: exampleData.ip + i
			});

			if ( i === RANGE_LIMIT ) {
				assert.strictEqual( this.fraud.isNeedFraud( data ), true );
			}
			else {
				assert.strictEqual( this.fraud.isNeedFraud( data ), false );
			}
			this.storage.registrationData.push(data);
		}
	});

	test('should check same country', function() {
		var exampleData = {
				ip: '192.168.0.',
				range: '5',
				country: 'HU'
			},
			COUNTRY_LIMIT = this.fraud.COUNTRY_LIMIT;

		for( var i = 0; i <= COUNTRY_LIMIT; i++) {
			var data = _.extend({}, exampleData, {
				ip: exampleData.ip + i,
				range: exampleData.range + i
			});

			if ( i === COUNTRY_LIMIT ) {
				assert.strictEqual( this.fraud.isNeedFraud( data ), true );
			}
			else {
				assert.strictEqual( this.fraud.isNeedFraud( data ), false );
			}
			this.storage.registrationData.push(data);
		}
	});
});
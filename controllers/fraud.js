var _ = require('underscore');

var Fraud = function( options ) {
	if (_.isUndefined( options ) || _.isUndefined(options.storage)) {
		throw new Error('Must have a storage');
	}

	this.storage = options.storage;

	this.IP_LIMIT = 3;
	this.RANGE_LIMIT = 500;
	this.COUNTRY_LIMIT = 1000;
};

Fraud.prototype.isNeedFraud = function( registrationData ) {
	return this._ipLimit( registrationData.ip ) ||
		this._rangeLimit( registrationData.range ) ||
		this._countryLimit( registrationData.country );
};

Fraud.prototype._ipLimit = function( ip ) {
	var registrationData = this.storage.getRegistrations(),
		sum = 0;

	registrationData.forEach(function( data ) {
		if ( data.ip === ip ) {
			sum++;
		}
	});

	return sum >= this.IP_LIMIT;
};

Fraud.prototype._rangeLimit = function( range ) {
	var registrationData = this.storage.getRegistrations(),
		sum = 0;

	registrationData.forEach(function( data ) {
		if ( data.range === range ) {
			sum++;
		}
	});

	return sum >= this.RANGE_LIMIT;
};

Fraud.prototype._countryLimit = function( country ) {
	var registrationData = this.storage.getRegistrations(),
		sum = 0;

	registrationData.forEach(function( data ) {
		if ( data.country === country ) {
			sum++;
		}
	});

	return sum >= this.COUNTRY_LIMIT;
};

module.exports = Fraud;
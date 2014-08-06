var should = require('should'),
    _ = require('underscore'),
    dataProvider = require('../dataProvider'),
    GoogleInterpreter = require('../../controllers/interpreters/google');

suite('test Google Interpreter', function() {
    setup(function () {
        dataProvider(this);

        this.googleInterpreter = new GoogleInterpreter();
    });

    test('should have registration data', function() {
        _.bind(function() {
            this.googleInterpreter.getConvertedData();
        },this).should.throwError('Missing registration data');
    });

	_.each([ 'userData' ],function( fieldName ) {
		test('should have a ' + fieldName, function () {
			_.bind(function () {
				var invalidData = this.validGoogleData;
				delete this.validGoogleData[fieldName];

				this.googleInterpreter.getConvertedData(invalidData);
			}, this).should.throwError('Missing required parameter ' + fieldName);
		});
	}, this);


    test('should get correct google id', function() {
        var convertedData = this.googleInterpreter.getConvertedData( this.validGoogleData );
        convertedData.api.id.should.be.exactly( this.validGoogleData.userData.id );
    });

    test('should get correct google account email', function() {
        var convertedData = this.googleInterpreter.getConvertedData( this.validGoogleData );
        convertedData.email.should.be.exactly( this.validGoogleData.userData.email );
    });

});
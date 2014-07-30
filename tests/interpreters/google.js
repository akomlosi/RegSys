var should = require('should'),
    _ = require('underscore'),
    dataProvider = require('../dataProvider'),
    GoogleInterpreter = require('../../controllers/interpreters/google');

suite('test Google Interpreter', function() {
    setup(function () {
        dataProvider(this);

        this.googleInterpreter = new GoogleInterpreter();
    });

    test('should have an id', function() {
        _.bind(function() {
            this.googleInterpreter.getConvertedData();
        }, this).should.throwError('Missing required parameter userData.id');
    });

    test('should have an email', function() {
        _.bind(function() {
	        var invalidData = this.validGoogleData;
	        delete this.validGoogleData.userData.email;
            this.googleInterpreter.getConvertedData( invalidData );
        }, this).should.throwError('Missing required parameter userData.email');
    });


    test('should get correct google id', function() {
        var convertedData = this.googleInterpreter.getConvertedData( this.validGoogleData );
        convertedData.api.id.should.be.exactly( this.validGoogleData.userData.id );
    });

    test('should get correct google account email', function() {
        var convertedData = this.googleInterpreter.getConvertedData( this.validGoogleData );
        convertedData.email.should.be.exactly( this.validGoogleData.userData.email );
    });

});
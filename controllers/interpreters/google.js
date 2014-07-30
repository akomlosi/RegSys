var _ = require('underscore');

var GoogleInterpreter = function GoogleInterpreter() {};

GoogleInterpreter.prototype.getConvertedData = function( data ) {
    if ( _.isUndefined( data ) || _.isUndefined(data.userData.id)) {
        throw new Error('Missing required parameter userData.id');
    }
    if ( _.isUndefined(data.userData.email)) {
        throw new Error('Missing required parameter userData.email');
    }

    return {
        api: {
            id: data.userData.id
        },
        email: data.userData.email
    };
};

module.exports = GoogleInterpreter;
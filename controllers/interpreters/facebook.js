var _ = require('underscore');

var FacebookInterpreter = function FacebookInterpreter() {};

FacebookInterpreter.prototype.getConvertedData = function( data ) {
	if ( _.isUndefined( data ) || _.isUndefined(data.id)) {
		throw new Error('Missing required parameter id');
	}

	return {
		id: data.id
	};
};

module.exports = FacebookInterpreter;
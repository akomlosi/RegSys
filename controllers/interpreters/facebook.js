var _ = require('underscore');

var FacebookInterpreter = function FacebookInterpreter() {};

FacebookInterpreter.prototype.getConvertedData = function( data ) {
	if ( _.isUndefined( data ) || _.isUndefined(data.facebook_id)) {
		throw new Error('Missing required parameter facebook_id');
	}

	return {
		api: {
			id: data.facebook_id
		}
	};
};

module.exports = FacebookInterpreter;
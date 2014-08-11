var istanbul = require('browserify-istanbul');

module.exports = function(config) {
	config.set({
		basePath: '',

		frameworks: [ 'mocha', 'browserify' ],

		files: [
		    'tests/*.js'
	    ],

		reporters: ['progress', 'coverage'],

		client: {
			mocha: {
				ui: 'tdd'
			}
		},

		preprocessors: {
			'tests/*.js': ['browserify']
		},

		browserify: {
			debug: true,
			transform: [istanbul]
		},

		port: 9876,

	    colors: true,

	    logLevel: config.LOG_INFO,

	    browsers: ['Chrome'],

	    singleRun: true
	});
};

module.exports = function(config) {
	config.set({
		basePath: '',

		frameworks: [ 'mocha', 'browserify' ],

		files: [
		    'tests/*.js'
	    ],

		reporters: ['progress', 'coverage', 'growl'],

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
			transform: ['istanbulify']
		},

		port: 9876,

	    colors: true,

	    logLevel: config.LOG_INFO,

	    autoWatch: true,

	    browsers: ['Chrome'],

	    singleRun: false
	});
};

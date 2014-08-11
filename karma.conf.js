<<<<<<< HEAD
var istanbul = require('browserify-istanbul');

=======
>>>>>>> origin/master
module.exports = function(config) {
	config.set({
		basePath: '',

		frameworks: [ 'mocha', 'browserify' ],

		files: [
		    'tests/*.js'
	    ],

<<<<<<< HEAD
		reporters: ['progress', 'coverage'],
=======
		reporters: ['progress', 'coverage', 'growl'],
>>>>>>> origin/master

		client: {
			mocha: {
				ui: 'tdd'
			}
		},

		preprocessors: {
<<<<<<< HEAD
			'tests/*.js': [ 'browserify' ]
=======
			'tests/*.js': ['browserify']
>>>>>>> origin/master
		},

		browserify: {
			debug: true,
<<<<<<< HEAD
			transform: [ istanbul ]
=======
			transform: ['istanbulify']
>>>>>>> origin/master
		},

		port: 9876,

	    colors: true,

	    logLevel: config.LOG_INFO,

<<<<<<< HEAD
	    browsers: ['Chrome'],

	    singleRun: true
=======
	    autoWatch: true,

	    browsers: ['Chrome'],

	    singleRun: false
>>>>>>> origin/master
	});
};

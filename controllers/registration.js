var Registration = function Registration( options ) {
	if (!options.storage) {
		throw new Error('Must have a storage');
	}
	this.storage = options.storage;
};

Registration.prototype.register = function register( userData ) {
	this.save( userData );
};

Registration.prototype.save = function save( userData ) {
	this.storage.save( userData );
};

module.exports = Registration;
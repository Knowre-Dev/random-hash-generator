var assert = require('assert'),
	crypto = require('crypto'),
	rhg = require('../lib');

describe('Generator', function() {
	var salt = 'TestMeBowmore',
		generated = rhg.generate(10, 25, salt);

	it('Should have proper length', function() {
		assert.equal(generated.key.length, 10);
		assert.equal(generated.secret.length, 25);
	});

	it('Should match the hash', function() {
		var shasum = crypto.createHash('sha256');

		shasum.update(generated.key + salt);
		

		assert.equal(shasum.digest('base64').substring(0, 25), generated.secret);
	});
});

describe('Calculator', function() {
	var salt = 'TestMeBowmore',
		calc = rhg.calc('dpf6DArokl', 25, salt);

	it('Should match the hash', function() {
		var shasum = crypto.createHash('sha256');

		shasum.update('dpf6DArokl' + salt);

		assert.equal(shasum.digest('base64').substring(0, 25), calc);
	});
});

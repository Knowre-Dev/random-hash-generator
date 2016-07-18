'use strict';

var randomstring = require('randomstring'),
	crypto = require('crypto');

exports.generate = function(key, secret, salt) {
	if (key === undefined) key = 15;
	if (secret === undefined) secret = 25;
	if (salt === undefined) salt = 'ShotMeBowmore';

	var gKey = randomstring.generate({ length: key }),
		shasum = crypto.createHash('sha256');

	shasum.update(gKey + salt);

	var gSecret = shasum.digest('base64').substring(0, secret);

	return {
		key: gKey,
		secret: gSecret
	};
};

exports.calc = function(key, secret, salt) {
	if (key === undefined) key = 'AAAAAAAAAAAAAAA';
	if (secret === undefined) secret = 25;
	if (salt === undefined) salt = 'ShotMeBowmore';

	var shasum = crypto.createHash('sha256');

	shasum.update(key + salt);

	var gSecret = shasum.digest('base64').substring(0, secret);

	return gSecret;
};

#!/usr/bin/env node

'use strict';

var argv = require('minimist')(process.argv.slice(2), {
		default: {
			number: 1,
			key: 15,
			secret: 25,
			salt: 'ShotMeBowmore'
		},
		alias: {
			number: 'n',
			key: 'k',
			secret: 's',
			salt: 't',
			help: 'h'
		}
	});

var rhg = require('../lib/index.js');

if (argv.help) {
	console.log('[Usage]');
	console.log('$ rhg --number 5 --key 10 --secret 15 --salt ShotMeBowmore');
	console.log('');
	console.log('[Options]');
	console.log('--number, -n: Number of key/secret pairs to generate');
	console.log('--key, -k: Length of key string');
	console.log('--secret, -s: Length of secret string');
	console.log('--salt, -t: Specifying salt string');
	console.log('--help, -h: This message');
	process.exit(-1);
}


for(var i = 0; i < argv.number; i++) {
	var generated = rhg.generate(argv.key, argv.secret, argv.salt);
	console.log('Key   :', generated.key);
	console.log('Secret:', generated.secret);
	console.log('');
}

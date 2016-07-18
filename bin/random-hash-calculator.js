#!/usr/bin/env node

'use strict';

var argv = require('minimist')(process.argv.slice(2), {
		default: {
			key: 'AAAAAAAAAAAAAAA',
			secret: 25,
			salt: 'ShotMeBowmore'
		},
		alias: {
			key: 'k',
			secret: 's',
			salt: 't',
			help: 'h'
		}
	});

var rhg = require('../lib/index.js');

if (argv.help) {
	console.log('[Usage]');
	console.log('$ rhc --key AAAAAAAAAAAAAAA --secret 25 --salt ShotMeBowmore');
	console.log('');
	console.log('[Options]');
	console.log('--key, -k: Key string');
	console.log('--secret, -s: Length of secret string');
	console.log('--salt, -t: Specifying salt string');
	console.log('--help, -h: This message');
	process.exit(-1);
}


var generated = rhg.calc(argv.key, argv.secret, argv.salt);
console.log('Secret:', generated);
console.log('');

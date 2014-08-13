'use strict';
var assert = require('assert');
var spawn = require('child_process').spawn;

it('should fake stdin support', function (cb) {
	var actual = '';
	var fixture = 'unicorn';
	var cp = spawn('./cli.js', ['./fixture.js']);

	cp.stdout.setEncoding('utf8');
	cp.stdout.on('data', function (data) {
		actual += data;
	});

	cp.stderr.pipe(process.stderr);

	cp.on('close', function () {
		assert.strictEqual(actual, fixture);
		cb();
	});

	cp.stdin.setEncoding('utf8');
	cp.stdin.write(fixture);
});

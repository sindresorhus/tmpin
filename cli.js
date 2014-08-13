#!/usr/bin/env node
'use strict';
var fs = require('fs');
var spawn = require('child_process').spawn;
var tempfile = require('tempfile');
var pkg = require('./package.json');
var file = tempfile();
var argv = process.argv.slice(2);

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    echo <string> | tmpin <app> [<args>]',
		'',
		'  Example',
		'    git diff | tmpin atom',
		'',
		'  Note that the first arg to <app> will be set to the tempfile'
	].join('\n'));
}

if (argv[0] === '--version') {
	console.log(pkg.version);
	return;
}

if (argv[0] === '--help' || !argv[0]) {
	help();
	return;
}

process.stdin.pipe(fs.createWriteStream(file));

spawn(argv.shift(), (argv.unshift(file), argv), {stdio: 'inherit'})
	.on('exit', process.exit.bind(process));

#!/usr/bin/env node
'use strict';
const fs = require('fs');
const {spawn} = require('child_process');
const meow = require('meow');
const tempy = require('tempy');

const file = tempy.file();
const argv = process.argv.slice(2);

meow(`
	Usage
	  echo <string> | tmpin <app> [<args>]

	Example
	  git diff | tmpin atom

	Note that the first arguments to <app> will be set to the temp file
`);

process.stdin.pipe(fs.createWriteStream(file));

spawn(argv.shift(), (argv.unshift(file), argv), {stdio: 'inherit'})
	.on('exit', () => {
		process.exit();
	});

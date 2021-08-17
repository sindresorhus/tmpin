#!/usr/bin/env node
import process from 'node:process';
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import meow from 'meow';
import tempy from 'tempy';

const file = tempy.file();
const argv = process.argv.slice(2);

meow(`
	Usage
	  echo <string> | tmpin <app> [<args>]

	Example
	  git diff | tmpin atom

	Note that the first arguments to <app> will be set to the temp file
`, {
	importMeta: import.meta,
});

process.stdin.pipe(fs.createWriteStream(file));

spawn(argv.shift(), (argv.unshift(file), argv), {stdio: 'inherit'})
	.on('exit', () => {
		process.exit();
	});

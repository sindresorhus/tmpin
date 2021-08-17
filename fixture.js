#!/usr/bin/env node
import process from 'node:process';
import fs from 'node:fs';

process.stdout.write(fs.readFileSync(process.argv[2], 'utf8'));

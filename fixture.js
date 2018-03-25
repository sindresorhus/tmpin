#!/usr/bin/env node
'use strict';
const fs = require('fs');

process.stdout.write(fs.readFileSync(process.argv[2], 'utf8'));

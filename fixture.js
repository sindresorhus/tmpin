#!/usr/bin/env node
'use strict';
var fs = require('fs');
process.stdout.write(fs.readFileSync(process.argv[2], 'utf8'));

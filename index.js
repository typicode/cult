#!/usr/bin/env node
var spawn = require('child_process').spawn;

// Keep only arguments
process.argv.splice(0, 2);

// Add CoffeeScript option
process.argv.push('--require');
process.argv.push('coffee-script/register');

// Call gulp
spawn('gulp', process.argv, {stdio: "inherit"});
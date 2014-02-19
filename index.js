#!/usr/bin/env node
var fs = require('fs');
var spawn = require('child_process').spawn;

var options = {
  'coffee': 'coffee-script/register',
  'ls': 'LiveScript'
};

// Keep only arguments
process.argv.splice(0, 2);

// If there's no gulpfile.js
if (!fs.existsSync('gulpfile.js')) {
  // Look for gulpfile with another extension
  // and add corresponding --require option to process.argv
  for (var ext in options) {
    if (fs.existsSync('gulpfile.'+ext)) {
      process.argv.push('--require');
      process.argv.push(options[ext]);
      break;
    }
  }
}

// Then call gulp
spawn('gulp', process.argv, {stdio: "inherit"});

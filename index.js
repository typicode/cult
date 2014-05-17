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

var callSpawn = function(useCmd){
    return spawn('gulp' + (useCmd ? '.cmd' : ''), process.argv, {
        stdio: 'inherit'
    });
};

callSpawn(false).on('error', function(error){
    var platform = require('os').platform();

    // if gulp isn't found on Windows, try gulp.cmd
    if(error.code === 'ENOENT' && (platform === 'win32' || platform === 'win64')){
        callSpawn(true);
    }
    else {
        throw error;
    }
});
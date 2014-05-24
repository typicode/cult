#!/usr/bin/env node
var fs             = require('fs')
var platform       = require('os').platform()
var spawn          = require('child_process').spawn
var updateNotifier = require('update-notifier')
var chalk          = require('chalk')
var FILES          = {}

// Notifier
var notifier = updateNotifier();
if (notifier.update) notifier.notify()

// Supported files
FILES['gulpfile.js'] = undefined

try {
  require.resolve('coffee-script-redux')
  FILES['gulpfile.coffee'] = 'coffee-script-redux/register'
} catch(e) {
  FILES['gulpfile.coffee'] = 'coffee-script/register'
} 

FILES['gulpfile.ls'] = 'LiveScript'

// Keep only gulp arguments
process.argv.splice(0, 2)

// And remove cult specific arguments
var watch = false
var watchIndex = process.argv.indexOf('-w')
if (watchIndex > -1) {
  process.argv.splice(watchIndex, 1)
  watch = true
}

// Find gulpfile
var gulpfileName
for (var file in FILES) {
  if (fs.existsSync(file)) {
    gulpfileName = file
    break;
  }
}

// Add --require
var requireOption = FILES[gulpfileName]
if (requireOption) {
  process.argv.push('--require')
  process.argv.push(requireOption)
}

// Find gulpfile
var gulpfileName
for (var file in FILES) {
  if (fs.existsSync(file)) {
    gulpfileName = file
    break;
  }
}

// Let's go
function log(str) {
  console.log('[' + chalk.cyan('cult') + '] ' + str)
}

function run() {
  var child = spawn('gulp', process.argv, { stdio: 'inherit' })
  child.on('error', function(error) {
    child.kill()
    if (error.code === 'ENOENT' && (platform === 'win32' || platform === 'win64')) {
      spawn('gulp.cmd', process.argv, { stdio: 'inherit' })
    }
  })
}

if (watch) {
  log('Watching ' + gulpfileName)
  fs.watchFile(gulpfileName, function() {
    console.log()
    log('Reloading')
    run()
  })
}

run()
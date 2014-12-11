#!/usr/bin/env node
var fs             = require('fs')
var platform       = require('os').platform()
var spawn          = require('child_process').spawn
var updateNotifier = require('update-notifier')
var chalk          = require('chalk')

// Notifier
var notifier = updateNotifier()
if (notifier.update) notifier.notify()

// Keep gulp arguments
process.argv.splice(0, 2)

// Find gulpfile
function findGulpfile() {
  var filenames = fs.readdirSync(process.cwd())
  for (var i in filenames) {
    if (filenames[i].indexOf('gulpfile.') !== -1) return filenames[i]
  }
}

function log(str) {
  console.log('[' + chalk.cyan('cult') + '] ' + str)
}

var child
function run() {
  if (child) child.kill()

  child = spawn('gulp', process.argv, { stdio: 'inherit' })
  child.on('error', function(error) {
    child.kill()
    if (error.code === 'ENOENT' && (platform === 'win32' || platform === 'win64')) {
      spawn('gulp.cmd', process.argv, { stdio: 'inherit' })
    }
  })
  return child
}

var gulpfile = findGulpfile()

if (gulpfile) {
  log('Watching ' + gulpfile)

  fs.watchFile(gulpfile, function() {
    log('Reloading')
    run()
  })

  run()

  process.on('SIGINT', function() {
    // Prevent killing the main process before child
    if (!child) process.exit()

    child.on('exit', function() {
      process.exit()
    })
  })
} else {
  return log('Can\'t find gulpfile')
}

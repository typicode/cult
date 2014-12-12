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
  log('Running gulp...')
  child = spawn('gulp', process.argv, { stdio: 'inherit' })
  child.on('error', function(error) {
    child.kill('SIGKILL')
    if (error.code === 'ENOENT' && (platform === 'win32' || platform === 'win64')) {
      spawn('gulp.cmd', process.argv, { stdio: 'inherit' })
    }
  })
  child.on('exit', function() {
    // Exiting when gulp finishes all tasks
    process.exit()
  })
  return child
}

function stop(cb) {
  if (!child) return cb()

  child.removeAllListeners('exit')  // Prevent exiting on reload
  child.on('exit', cb)

  log('Killing gulp...')
  child.kill('SIGINT')
}

var gulpfile = findGulpfile()

if (gulpfile) {
  log('Watching ' + gulpfile)

  fs.watchFile(gulpfile, function() {
    log('Gulpfile changed. Reloading...')
    stop(function() {
      run()
    })
  })

  run()

  process.on('SIGINT', function() {
    // Prevent killing the main process before child
    if (!child) process.exit()
  })
} else {
  return log('Can\'t find gulpfile')
}

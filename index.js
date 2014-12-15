var os = require('os')
var fs = require('fs')
var respawn = require('respawn')
var chalk = require('chalk')
var updateNotifier = require('update-notifier')
var pkg = require('./package.json')

/*
* Functions
*/

function findGulpfile() {
  var filenames = fs.readdirSync(process.cwd())
  for (var i in filenames) {
    if (filenames[i].indexOf('gulpfile.') !== -1) return filenames[i]
  }
}

function log(str) {
  console.log('[' + chalk.cyan('cult') + '] ' + str)
}

/*
* Program
*/

// Check for updates
updateNotifier({packageName: pkg.name, packageVersion: pkg.version}).notify()

// Keep gulp arguments
process.argv.splice(0, 2)

// Find gulpfile
var gulpfile = findGulpfile()

// Set process options
var options = {
  kill: 5000, // kill after 5 seconds
  stdio: 'inherit'
}

// Create process monitor
var monitor = respawn(['gulp'].concat(process.argv), options)
monitor.maxRestarts = 0

// If on windows and gulp fails, try to replace it with gulp.cmd
monitor.on('warn', function(err) {
  if (err.code === 'ENOENT' && (os.platform === 'win32' || os.platform === 'win64')) {
    monitor = respawn(['gulp.cmd'].concat(process.argv), options)
    monitor.maxRestarts = 0
    monitor.start()
  }
})

// Start cult
if (gulpfile) {
  log('Watching ' + chalk.magenta(gulpfile))

  fs.watchFile(gulpfile, function() {
    log('Gulpfile changed, reloading...')
    monitor.stop(function() {
      monitor.start()
    })
  })

  process.on('SIGINT', function() {
    monitor.stop(function() {
      process.exit()
    })
  })

  monitor.start()
} else {
  return log('Can\'t find gulpfile')
}

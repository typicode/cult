gulp = require 'gulp'
server = require 'gulp-express'

gulp.task 'default', ->
  console.log('default task called')

gulp.task 'server', ->
  server.run file: 'app.js'

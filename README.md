# cult [![NPM version](https://badge.fury.io/js/cult.svg)](http://badge.fury.io/js/cult)

> cult detects gulpfile extension and monitors changes

![cult](http://i.imgur.com/aHMew7e.png)

# Features

* Detects gulpfile extension and calls gulp accordingly. 
* Watches gulpfile and reloads gulp on change.
* Supports gulpfile written in JavaScript, CoffeeScript, IcedCoffeeScript, CoffeeScriptRedux and LiveScript.

# Usage

Install everything as you would do with gulp.
```bash
$ npm install -g gulp cult 
$ npm install --save-dev coffee-script gulp
```

Create your gulpfile in your favourite language and call cult.
```bash
$ vim gulpfile.coffee
$ cult -w <task> <othertask>
$ # will call gulp <task> <othertask> --require coffee-script/register
```

Just remove the `-w` parameter if you don't your gulpfile to be watched.

# Contribute

Missing a language? Fork and create a pull request.

## License

MIT

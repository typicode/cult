# cult [![NPM version](https://badge.fury.io/js/cult.svg)](http://badge.fury.io/js/cult)

> cult is to gulp what nodemon is to node.

![cult](http://i.imgur.com/aHMew7e.png)

# Features

* Detects gulpfile extension and calls gulp accordingly 
* Watch and reload gulp when gulpfile changes
* Supports gulpfile written in JavaScript, CoffeeScript, CoffeeScriptRedux and LiveScript.

# Usage

Install everything the same way you would do with gulp.
```bash
$ npm install -g gulp cult 
$ npm install --save-dev coffee-script gulp
```

Create your gulpfile in your favourite language.
```bash
$ vim gulpfile.coffee
$ cult -w <task> <othertask>
```

It will call `gulp --require coffee-script/register` and reload it whenever gulpfile.coffee changes.

If you don't want cult to watch your gruntfile, just remove the `-w` parameter.

# Contribute

Missing a language? Fork and create a pull request.

## See also

[gulp docs - Using CoffeeScript for gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/recipes/using-coffee-script-for-gulpfile.md)

## License

MIT

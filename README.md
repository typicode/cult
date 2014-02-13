# cult [![NPM version](https://badge.fury.io/js/cult.png)](http://badge.fury.io/js/cult)

Useful if you're using CoffeeScript for `gulpfile` instead of JavaScript.

cult is just a 5 lines wrapper that automatically adds `--require coffee-script/register` to your local `gulp` cli.

## Usage

Use cult as you would use gulp.

```bash
$ cult <task> <othertask>
```

It's the same as:

```bash
$ gulp <task> <othertask> --require coffee-script/register 
```

## Install

Install gulp globally (if it's not already).

```bash
$ npm install -g gulp
```

Install cult globally.

```bash
$ npm install -g cult
```

Install coffee-script in your project devDependencies.

```bash
$ npm install --save-dev coffee-script
```

## See also

[Using CoffeeScript for gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/recipes/using-coffee-script-for-gulpfile.md)

## License

MIT



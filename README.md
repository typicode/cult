# cult [![NPM version](https://badge.fury.io/js/cult.png)](http://badge.fury.io/js/cult)

cult is a no-brainer tool that detects `gulpfile` extension and calls your local `gulp` with the corresponding `--require` option.

## Usage

Just use cult as you use gulp.

```bash
$ cult <task> <othertask>
```

Supports `gulpfile` written in JavaScript, CoffeeScript and LiveScript.

| command       | file            | will call
|:--------------|:----------------|:--------------------------------------------
| cult \<task\> | gulpfile.js     | gulp \<task\>
| cult \<task\> | gulpfile.coffee | gulp \<task\> --require coffee-script/register
| cult \<task\> | gulpfile.ls     | gulp \<task\> --require LiveScript

## Install

```bash
$ npm install -g gulp cult
```

## Contribute

Missing a language? Fork and create a pull request.

## See also

[gulp docs - Using CoffeeScript for gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/recipes/using-coffee-script-for-gulpfile.md)

## License

MIT



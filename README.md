# cult [![](https://img.shields.io/npm/v/cult.svg?style=flat)](https://www.npmjs.com/package/cult)

> cult monitors gulpfile changes and reloads gulp

## Install

```bash
$ npm install -g cult
```

## Usage

```bash
$ cult <task> <othertask>
# will call gulp <task> <othertask>
```

## Multiple files support

If your `gulpfile` is split across multiple files, use [node-touch](https://github.com/isaacs/node-touch) and add something similar to this to your `watch` task to reload on any `gulpfile` changes:

```javascript
gulp.watch(['gulp/**'], function() { touch.sync('gulpfile.coffee') })
```

## History

* __2.x.x__ Since gulp 3.7, there's no need anymore to add `--require`, cult now will symply monitor gulpfile (until this feature is added to gulp :)
* __1.x.x__ Monitors gulpfile changes and adds `--require` depending on gulpfile extension

## License

MIT - [Typicode](https://github.com/typicode)

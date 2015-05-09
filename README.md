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

__Multiple files support__

If your `gulpfile` is split across multiple files, use [node-touch](https://github.com/isaacs/node-touch) and add this code to your `watch` task to reload on any `gulpfile` changes:

```javascript
gulp.watch(['gulp/**'], function() { touch.sync('gulpfile.coffee') })
```

## License

MIT - [Typicode](https://github.com/typicode)

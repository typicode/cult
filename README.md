# cult [![](https://img.shields.io/npm/v/cult.svg?style=flat)](https://www.npmjs.com/package/cult)

> cult monitors gulpfile changes and reloads gulp

```bash
# gulp need to be installed on your system for cult to work
$ npm install -g cult

# will call gulp <task> <othertask> and reload on gulpfile change
$ cult <task> <othertask>
```

If your `gulpfile` is split across multiple files, use [node-touch](https://github.com/isaacs/node-touch) and add this code to your `watch` task to reload on any `gulpfile` changes:

```javascript
gulp.watch(['gulp/**'], function() { touch.sync('gulpfile.coffee') })
```

## License

MIT - [Typicode](https://github.com/typicode)

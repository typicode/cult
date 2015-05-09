# cult [![](https://img.shields.io/npm/v/cult.svg?style=flat)](https://www.npmjs.com/package/cult)

> Like nodemon but for gulp

```bash
npm install -g gulp cult
```

```bash
cult <task> <othertask>
```

This command will call `gulp <task> <othertask>` and reload it on gulpfile change.

_If your `gulpfile` is split across multiple files, use [node-touch](https://github.com/isaacs/node-touch) and add this code to your `watch` task to reload on any `gulpfile` changes._

```javascript
gulp.watch(['gulp/**'], function() { touch.sync('gulpfile.coffee') })
```

MIT - [Typicode](https://github.com/typicode)

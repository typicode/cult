# cult [![](https://img.shields.io/npm/v/cult.svg?style=flat)](https://www.npmjs.com/package/cult)

> Like nodemon but for gulp

```bash
npm install -g gulp cult
```

```bash
cult <task> <othertask>
```

This command will call `gulp <task> <othertask>` and reload it on gulpfile change.

If your `gulpfile` is split across multiple files, use this code:

```javascript
var touch = require('touch')
gulp.watch(['gulp/**'], function() { touch.sync('gulpfile.coffee') })
```

MIT - [Typicode](https://github.com/typicode)

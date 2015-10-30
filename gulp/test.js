module.exports = function (config, gulp) {
  var sequence = require('gulp-sequence').use(gulp);

  gulp.task('test', function (cb) {
    sequence(['eslint', 'scsslint', 'jasmine'], 'karma', 'clean', cb);
  });
  gulp.task('test:node', function (cb) {
    sequence(['eslint', 'jasmine'], 'clean', cb);
  });
  gulp.task('test:web', function (cb) {
    sequence(['eslint', 'scsslint', 'karma'], 'clean', cb);
  });
};

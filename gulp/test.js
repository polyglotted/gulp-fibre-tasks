module.exports = function (config, gulp) {
  var sequence = require('gulp-sequence').use(gulp);
  
  gulp.task('test', sequence(['eslint', 'scsslint', 'jasmine'], 'karma', 'clean'));
  gulp.task('test:node', sequence(['eslint', 'jasmine'], 'clean'));
  gulp.task('test:web', sequence(['eslint', 'scsslint', 'karma'], 'clean'));
};

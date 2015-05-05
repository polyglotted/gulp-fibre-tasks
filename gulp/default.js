module.exports = function (config, gulp) {
  gulp.task('default', [
    'karma:debug'
  ], function () {
    gulp.watch(config.path.es6, [
      'eslint', 
      'jasmine'
    ]);
    gulp.watch(config.path.scss, [
      'scsslint'
    ]);
  });
};

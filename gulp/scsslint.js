module.exports = function (config, gulp) {
  gulp.task('scsslint', function () {
    return gulp.src(config.path.scss)
               .pipe(require('gulp-scss-lint')({
                  bundleExec: true
                }));
  });
};

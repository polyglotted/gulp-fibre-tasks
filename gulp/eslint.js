module.exports = function (config, gulp) {
  gulp.task('eslint', function () {
    return gulp.src(config.path.es6)
               .pipe(require('gulp-eslint')({
                  configFile: require('path').join(config.base, 'eslint.config.json')
                }))
               .pipe(eslint.format());
  });
};

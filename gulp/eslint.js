var eslint = require('gulp-eslint');

module.exports = function (config, gulp) {
  gulp.task('eslint', function () {
    return gulp.src(config.path.es6)
               .pipe(eslint({
                  configFile: require('path').join(config.base, 'eslint.config.json')
                }))
               .pipe(eslint.format());
  });
};

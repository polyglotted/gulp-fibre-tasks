var eslint = require('gulp-eslint'),
    path = require('path');

module.exports = function (config, gulp) {
  var eslintConfig = {
    configFile: path.join(config.base, 'eslint.config.json')
  };

  gulp.task('eslint', function () {
    return gulp.src(config.path.es6)
               .pipe(eslint(eslintConfig))
               .pipe(eslint.format());
  });
};

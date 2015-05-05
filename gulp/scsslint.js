var path = require('path'),
    scsslint = require('gulp-scss-lint');

module.exports = function (config, gulp) {
  var scsslintConfig = {
    bundleExec: true
  };

  gulp.task('scsslint', function () {
    return gulp.src(config.path.scss)
               .pipe(scsslint(scsslintConfig));
  });
};

var sourcemaps = require('gulp-sourcemaps');

module.exports = function (config, gulp) {
  gulp.task('style', function () {
    return gulp.src(config.path.scss)
               .pipe(sourcemaps.init())
               .pipe(require('gulp-sass')({
                  includePaths: require('node-neat').includePaths
                }))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(config.path.distCSS));
  });
};

var babel = require('gulp-babel'),
    istanbul = require('gulp-istanbul'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function (config, gulp) {
  gulp.task('jasmine', function (cb) {
    var paths = config.path.es6.slice();

    require('del').sync(config.path.jasmineTmp);
    require('fs').mkdirSync(config.path.jasmineTmp);

    gulp.src(paths.shift(), {
      base: '.'
    })
        .pipe(sourcemaps.init())
        .pipe(istanbul({
          instrumenter: require('isparta').Instrumenter,
          includeUntested: true
        }))
        .pipe(babel())
        .pipe(gulp.dest(config.path.jasmineTmp))
        .pipe(sourcemaps.write())
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
          gulp.src(paths, {
            base: '.'
          })
              .pipe(babel())
              .pipe(gulp.dest(config.path.jasmineTmp))
              .pipe(require('gulp-jasmine')())
              .pipe(istanbul.writeReports({
                dir: './report/jasmine-coverage',
                reporters: [ 'lcov', 'cobertura', 'html', 'text-summary' ],
                reportOpts: { 
                  dir: './report/jasmine-coverage' 
                }
              }))
              .on('finish', cb);
        });
  });
};

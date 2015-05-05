var exec = require('child_process').exec,
    gutil = require('gulp-util');

module.exports = function (config, gulp) {
  function bump (type, cb) {
    gulp.src(config.path.json)
        .pipe(require('gulp-bump')({
          type: type
        }))
        .pipe(gulp.dest('.'))
        .pipe(require('gulp-git').commit('releasing ' + type + ' version'))
        .pipe(require('gulp-filter')(config.path.json[0]))
        .pipe(require('gulp-tag-version')())
        .on('end', function () {
          gutil.log('Pushing tags');
          exec('git push --tags', {
            cwd: process.cwd()
          }, cb);
        });
  }

  ['patch', 'minor', 'major'].forEach(function (type) {
    gulp.task('bump:' + type, function (cb) {
      bump(type, cb);
    });
  });
};

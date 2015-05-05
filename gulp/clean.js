module.exports = function (config, gulp) {
  gulp.task('clean', function (cb) {
    require('del')([
      config.path.dist,
      config.path.jasmineTmp,
      config.path.lib
    ], {
      force: true
    }, cb);
  });
};

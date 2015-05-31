module.exports = function (config, gulp) {
  var tasks = require('./build-common')(config, gulp);

  gulp.task('build', ['test', 'style'], function (cb) {
    tasks.buildNode()
      .on('finish', function () {
        tasks.buildWeb()
          .on('finish', cb);
      });
  });
  gulp.task('build:node', ['test:node'], tasks.buildNode);
  gulp.task('build:web', ['test:web'], tasks.buildWeb);
};

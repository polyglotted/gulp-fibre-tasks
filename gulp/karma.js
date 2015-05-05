var karma = require('karma').server,
    path = require('path');

module.exports = function (config, gulp) {
  var karmaConfig = path.join(config.base, 'karma.conf.js');
  
  gulp.task('karma', function (cb) {
    karma.start({
      configFile: karmaConfig
    }, cb);
  });

  gulp.task('karma:debug', function () {
    karma.start({
      configFile: karmaConfig,
      singleRun: false,
      autoWatch: true
    });
  });
};

var karma = require('karma').server;

module.exports = function (config, gulp) {
  var karmaConfig = require('path').join(config.base, 'karma.conf.js');
  
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

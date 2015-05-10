var _ = require('lodash'),
    path = require('path'),
    fs = require('fs'),
    pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'))),
    webpack = require('webpack');

module.exports = function (config, gulp) {
  var cfg = _.cloneDeep(config.webpack);

  cfg.module.preLoaders = [];

  function buildNode () {
    return gulp.src(config.path.all[0])
               .pipe(require('gulp-babel')())
               .pipe(gulp.dest(config.path.lib));
  }

  function buildWeb () {
    return gulp.src(pkg['main-es6'])
               .pipe(require('gulp-webpack')(_.assign(cfg, {
                 output: {
                   filename: pkg.name + '-[chunkhash].js'
                 },
                 plugins: [new webpack.optimize.UglifyJsPlugin()]
               })))
               .pipe(gulp.dest(config.path.dist));
  }

  gulp.task('build', ['test'], function (cb) {
    buildNode()
      .on('finish', function () {
        buildWeb()
          .on('finish', cb);
      });
  });
  gulp.task('build:node', ['test:node'], buildNode);
  gulp.task('build:web', ['test:web'], buildWeb);
};

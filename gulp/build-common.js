var _ = require('lodash'),
    gulpWebpack = require('gulp-webpack'),
    fs = require('fs'),
    path = require('path'),
    pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'))),
    webpack = require('webpack');

module.exports = function (config, gulp) {
  var cfg = _.cloneDeep(config.webpack),
      main = pkg['main-es6'],
      output = {
        filename: pkg.name + '.js',
        library: pkg.name,
        libraryTarget: 'umd'
      };

  cfg.module.preLoaders = [];

  return {
    buildNode: function () {
      return gulp.src(main)
                 .pipe(gulpWebpack(_.assign(cfg, {
                   output: output,
                   target: 'node',
                   externals: fs.readdirSync('node_modules').filter(function (x) { 
                     return x !== '.bin';
                   })
                 })))
                 .pipe(gulp.dest(config.path.lib));
    },

    buildWeb: function () {
      return gulp.src(main)
                 .pipe(gulpWebpack(_.assign(cfg, {
                   output: output,
                   target: 'web'
                 })))
                 .pipe(gulp.dest(config.path.dist));
    }
  };
};

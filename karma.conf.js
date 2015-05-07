var cwd = process.cwd(),
    gulpConfig = require('./gulp/config'),
    path = require('path');

module.exports = function (config) {
  config.set({
    basePath: cwd,
    browsers: [
      process.env.TRAVIS ? 'Firefox' : 'Chrome'
    ],
    browserNoActivityTimeout: 30000,
    files: [
      'test/spec/**/*'
    ],
    preprocessors: {
      'test/spec/**/*': ['webpack', 'sourcemap']
    },
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'coverage',
      'progress'
    ],
    coverageReporter: {
      dir: 'report/karma-coverage',
      reporters: [{
        type: 'lcov'
      }, {
        type: 'cobertura'
      }, {
        type: 'html'
      }, {
        type: 'text-summary'
      }],
    },
    webpack: gulpConfig.webpack,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    logLevel: config.LOG_INFO,
    singleRun: true
  });
};

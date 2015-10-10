var cwd = process.cwd(),
    path = require('path'),
    webpackModulesDirectories = [
      'web_modules',
      'node_modules',
      'node_modules/gulp-fibre-tasks/node_modules'
    ];

module.exports = {
  base: path.join(__dirname, '..'),
  path: {
    all: ['src/**/*', 'test/**/*'],
    es6: ['src/**/*.es6', 'test/**/*.es6'],
    html: ['src/**/*.html'],
    scss: ['src/**/*.scss'],
    json: ['package.json', 'bower.json'],
    dist: 'dist',
    distCSS: 'dist/css/',
    lib: 'lib',
    jasmineTmp: '.jasmine-tmp'
  },
  webpack: {
    devtool: '#source-map',
    debug: true,
    module: {
      preLoaders: [{
        test: /\.es6/,
        exclude: /(test|node_modules|bower_components)\//,
        loader: 'isparta-instrumenter-loader'
      }],
      loaders: [{
        test: /\.es6/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional=runtime'
      }, {
        test: /\.html/,
        exclude: /(test|node_modules|bower_components)\//,
        loader: 'html-loader'
      }, {
        test: /\.json/,
        exclude: /(test|bower_components)\//,
        loader: 'json-loader'
      }]
    },
    resolve: {
      extensions: ['', '.html', '.js', '.json', '.es6'],
      modulesDirectories: webpackModulesDirectories
    },
    resolveLoader: {
      modulesDirectories: webpackModulesDirectories
    },
    watch: false
  }
};
